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
      // Conversions = phone taps / LINE clicks ONLY. Engagement buttons (manga
      // "続きを読む" / scroll-to-pricing) fire a separate, non-conversion event
      // so `cta_click` stays a clean GA4 key event / Google Ads conversion.
      const eventName = cta_channel === "tel" || cta_channel === "line" ? "cta_click" : "engagement_click";
      window.dataLayer?.push({ event: eventName, ...payload }); // GTM triggers
      window.gtag?.("event", eventName, payload); // GA4 (direct)
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
