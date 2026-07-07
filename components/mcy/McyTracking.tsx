"use client";

import { useEffect } from "react";

/**
 * Conversion tracking bridge.
 *
 * Fires ONE reliable `cta_click` event into the GTM dataLayer for every CTA on
 * the page (phone taps / LINE clicks / engagement buttons), using event
 * delegation — so no per-button wiring is needed and it keeps working as new
 * CTAs are added, as long as they carry a `data-gtm="..."` attribute.
 *
 * dataLayer event shape (build the GTM triggers on these):
 *   {
 *     event: "cta_click",
 *     cta_id: "cta_tel_fv",          // the data-gtm value (which button)
 *     cta_channel: "tel" | "line" | "other",
 *     page_path: "/"
 *   }
 *
 * In GTM: trigger = Custom Event "cta_click"; split conversions by
 * {{DLV - cta_channel}} = "tel" (電話タップ) / "line" (LINE相談). Fire a GA4
 * event tag + a Google Ads conversion tag from the same trigger. Runs in the
 * capture phase so the push is recorded before a tel: link navigates away.
 */

type CtaChannel = "tel" | "line" | "other";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

function channelOf(el: Element | null): CtaChannel {
  const href = el?.getAttribute("href") ?? "";
  if (href.startsWith("tel:")) return "tel";
  if (href.includes("line.me") || href.includes("line.naver")) return "line";
  return "other";
}

export default function McyTracking() {
  useEffect(() => {
    window.dataLayer = window.dataLayer ?? [];

    const handleClick = (event: MouseEvent) => {
      const start = event.target as Element | null;
      const cta = start?.closest("[data-gtm]");
      if (!cta) return;

      const anchor = cta.closest("a[href]") ?? cta;
      const cta_channel = channelOf(anchor);
      const payload = {
        cta_id: cta.getAttribute("data-gtm") ?? "unknown",
        cta_channel,
        page_path: window.location.pathname,
      };
      // Distinct event names so each can be marked / imported independently.
      // Phone is ALREADY a Google Ads call conversion ("広告経由通話数"), so only
      // `line_click` is imported as a new conversion; `phone_click` stays a
      // GA4-only analytics event (avoids double-counting phone). manga buttons
      // fire `engagement_click` (never a conversion).
      const eventName =
        cta_channel === "line" ? "line_click" : cta_channel === "tel" ? "phone_click" : "engagement_click";
      window.dataLayer?.push({ event: eventName, ...payload }); // GTM triggers
      window.gtag?.("event", eventName, payload); // GA4 (direct)
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
