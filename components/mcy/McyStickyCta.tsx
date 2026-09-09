"use client";

import { useEffect, useState } from "react";
import { LineCta, PhoneCta } from "./CtaButton";
import { usePhoneClosed } from "./use-phone-closed";

/**
 * Bottom contact bar (two md CtaButtons on a white sheet with a thin top
 * shadow, safe-area aware). Hidden while a full-width CTA block
 * (data-cta-section) is on screen — the attribute sits on the blocks that
 * actually contain buttons, and rootMargin shrinks the viewport check so the
 * bar only hides once those buttons are genuinely visible (no dead zone with
 * zero tappable CTAs).
 * During 21:00–9:00 the LINE button takes the lead slot and the phone button
 * shows its out-of-hours label instead of pretending calls connect.
 */
export default function McyStickyCta() {
  const [scrolled, setScrolled] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);
  const phoneClosed = usePhoneClosed();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = document.querySelectorAll("[data-cta-section]");
    const inView = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) inView.add(entry.target);
          else inView.delete(entry.target);
        }
        setCtaInView(inView.size > 0);
      },
      // Hide the bar only when a decent slice of the CTA block is inside the
      // lower 70% of the viewport (i.e. its buttons are actually reachable).
      { threshold: 0.35, rootMargin: "0px 0px -15% 0px" },
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const visible = scrolled && !ctaInView;
  const tab = visible ? undefined : -1;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-lux-gold/50 bg-white/95 shadow-[0_-2px_10px_rgba(7,49,95,0.08)] backdrop-blur-sm transition-transform duration-200 motion-reduce:transition-none ${visible ? "translate-y-0" : "pointer-events-none translate-y-full"}`}
    >
      <div className="mx-auto grid max-w-[520px] grid-cols-2 gap-[10px] px-3 pb-[max(8px,env(safe-area-inset-bottom))] pt-[8px]">
        <PhoneCta
          size="md"
          gtm="cta_tel_sticky"
          tabIndex={tab}
          main="電話で相談する"
          sub="9:00〜21:00"
          closedSub="受付時間外"
          chevron="none"
          className={`cta-sticky ${phoneClosed ? "order-2" : "order-1"}`}
        />
        <LineCta
          size="md"
          gtm="cta_line_sticky"
          tabIndex={tab}
          main="LINEで相談する"
          sub="24時間受付"
          chevron="none"
          className={`cta-sticky ${phoneClosed ? "order-1" : "order-2"}`}
        />
      </div>
    </div>
  );
}
