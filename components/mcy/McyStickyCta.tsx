"use client";

import { useEffect, useState } from "react";
import { LINE_URL, PHONE_TEL } from "./McyHeader";
import { isPhoneClosed } from "./PhoneHoursNotice";

/**
 * Quiet contact bar with the established red phone and green LINE actions.
 * Hidden while a full-width CTA block (data-cta-section) is on screen — the
 * attribute sits on the blocks that actually contain buttons, and rootMargin
 * shrinks the viewport check so the bar only hides once those buttons are
 * genuinely visible (no dead zone with zero tappable CTAs).
 * During 21:00–9:00 the LINE button takes the lead slot and the phone button
 * shows an out-of-hours label instead of pretending calls connect.
 */
export default function McyStickyCta() {
  const [scrolled, setScrolled] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);
  const [phoneClosed, setPhoneClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const updateHours = () => setPhoneClosed(isPhoneClosed(new Date()));
    updateHours();
    const hoursId = setInterval(updateHours, 60_000);

    const sections = document.querySelectorAll("[data-cta-section]");
    const inView = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inView.add(entry.target);
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
      clearInterval(hoursId);
      observer.disconnect();
    };
  }, []);

  const visible = scrolled && !ctaInView;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-[#d5dfd9] bg-white transition-transform duration-200 motion-reduce:transition-none ${visible ? "translate-y-0" : "pointer-events-none translate-y-full"}`}
    >
      <div className="mx-auto grid max-w-[720px] grid-cols-2 gap-3 px-3 pb-[max(12px,env(safe-area-inset-bottom))] pt-3">
        <a
          href={PHONE_TEL}
          tabIndex={visible ? undefined : -1}
          data-gtm="cta_tel_sticky"
          className={`flex min-h-[62px] flex-col items-center justify-center rounded-[4px] bg-[#b92c32] px-2 py-2 text-center text-white ${phoneClosed ? "order-2" : "order-1"}`}
        >
          <span className="text-[14px] font-bold">電話で相談する</span>
          <span className="mt-1 text-[12px]">
            {phoneClosed ? "受付時間外・朝9時から" : "9:00〜21:00"}
          </span>
        </a>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? undefined : -1}
          data-gtm="cta_line_sticky"
          className={`flex min-h-[62px] flex-col items-center justify-center rounded-[4px] border border-[#27804d] bg-white px-2 py-2 text-center text-[#17663b] ${phoneClosed ? "order-1" : "order-2"}`}
        >
          <span className="text-[14px] font-bold">LINEで相談する</span>
          <span className="mt-1 text-[12px]">写真なしOK・24時間受付</span>
        </a>
      </div>
    </div>
  );
}
