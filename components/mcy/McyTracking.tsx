"use client";

import { useEffect } from "react";

/**
 * Conversion + engagement tracking. GA4 direct via gtag — GTM is NOT loaded
 * (the old container only carried the previous LP's triggers and a stale GA4
 * property; see layout.tsx). Do not re-add a GA4 tag through GTM: events here
 * already reach GA4 directly and would be double-counted.
 *
 * Click delegation on [data-gtm] (capture phase so tel: navigation can't
 * outrun the hit). Event names, chosen so Google Ads can import each
 * independently:
 *   line_click            — LINE CTAs (imported to Google Ads as a conversion)
 *   phone_click           — tel: CTAs on touch devices (imported to Google Ads)
 *   phone_click_desktop   — tel: CTAs on mouse devices, where a tel: link can't
 *                           place a call; separated so desktop clicks never
 *                           inflate the imported phone conversion
 *   engagement_click      — everything else (manga, reviews modal, anchors)
 * Payload: { cta_id, cta_channel, page_path }.
 *
 * Scroll analytics (GA4-only; never import these as conversions):
 *   scroll_depth { percent: 25|50|75|90 } — once each per pageview
 *   section_view { section }              — first time a [data-section] block
 *                                           is meaningfully on screen
 * They exist to answer "where do the ¥427-per-click visitors drop off?".
 */

type CtaChannel = "tel" | "line" | "other";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function channelOf(el: Element | null): CtaChannel {
  const href = el?.getAttribute("href") ?? "";
  if (href.startsWith("tel:")) return "tel";
  if (href.includes("line.me") || href.includes("line.naver")) return "line";
  return "other";
}

/**
 * Only classify as desktop when the device is UNAMBIGUOUSLY mouse-only: no
 * coarse pointer at all AND a fine primary pointer. Anything uncertain (old
 * browsers, tablets with a mouse, DeX) stays `phone_click` so the imported
 * Google Ads conversion never silently loses a real call tap.
 */
function isFinePointerOnly(): boolean {
  if (typeof window.matchMedia !== "function") return false;
  return !window.matchMedia("(any-pointer: coarse)").matches && window.matchMedia("(pointer: fine)").matches;
}

function eventNameFor(channel: CtaChannel): string {
  if (channel === "line") return "line_click";
  if (channel === "tel") return isFinePointerOnly() ? "phone_click_desktop" : "phone_click";
  return "engagement_click";
}

export default function McyTracking() {
  useEffect(() => {
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
      window.gtag?.("event", eventNameFor(cta_channel), payload);
    };
    document.addEventListener("click", handleClick, { capture: true });

    // --- scroll depth (25/50/75/90, once each) ---
    const firedDepths = new Set<number>();
    let rafId = 0;
    let ticking = false;
    const measureDepth = () => {
      ticking = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = ((window.scrollY + window.innerHeight) / doc.scrollHeight) * 100;
      for (const threshold of [25, 50, 75, 90]) {
        if (percent >= threshold && !firedDepths.has(threshold)) {
          firedDepths.add(threshold);
          window.gtag?.("event", "scroll_depth", { percent: threshold, page_path: window.location.pathname });
        }
      }
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(measureDepth);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // --- section reach (once per section) ---
    // threshold must stay 0: tall sections (manga ~5000px, pricing ~4500px) can
    // never reach a 25% visibility ratio on a phone viewport. Instead we fire
    // when the section crosses the middle band of the viewport (rootMargin
    // shrinks the observation box to the central 40%).
    const seen = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || seen.has(entry.target)) continue;
          seen.add(entry.target);
          observer.unobserve(entry.target);
          window.gtag?.("event", "section_view", {
            section: entry.target.getAttribute("data-section") ?? "unknown",
            page_path: window.location.pathname,
          });
        }
      },
      { threshold: 0, rootMargin: "-30% 0px -30% 0px" },
    );
    document.querySelectorAll("[data-section]").forEach((s) => observer.observe(s));

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return null;
}
