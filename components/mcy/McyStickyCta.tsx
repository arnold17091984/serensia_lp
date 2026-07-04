"use client";

import { useEffect, useState } from "react";

/**
 * No.33 — sticky CTA bar (turquoise phone / LINE green on white glass).
 * Hidden while a full-width CTA section (data-cta-section) is on screen.
 */
export default function McyStickyCta() {
  const [scrolled, setScrolled] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

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
      { threshold: 0.12 },
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const visible = scrolled && !ctaInView;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-[520px] items-stretch gap-2 border-t-2 border-mcy-gold/40 bg-white/95 px-3 pb-2.5 pt-2 shadow-[0_-3px_14px_rgba(27,58,92,0.16)] backdrop-blur-md">
        <a
          href="tel:0344002098"
          tabIndex={visible ? undefined : -1}
          data-gtm="cta_tel_sticky"
          className="flex flex-1 flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#19b8be] to-mcy-turq-deep px-2 py-[7px] text-white shadow-[0_2px_8px_rgba(11,127,133,0.35)] transition-[filter] active:brightness-90"
        >
          <span className="flex items-center gap-1.5 text-[15px] font-black leading-tight">
            <svg viewBox="0 0 24 24" className="h-[16px] w-[16px] shrink-0 fill-current" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            電話で相談する
          </span>
          <span className="mt-[3px] text-[9.5px] font-bold leading-none opacity-95">
            9:00〜21:00 年中無休
          </span>
        </a>
        <a
          href="https://page.line.me/782qjphg"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? undefined : -1}
          data-gtm="cta_line_sticky"
          className="flex flex-1 flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#25d94e] to-[#06a32a] px-2 py-[7px] text-white shadow-[0_2px_8px_rgba(6,163,42,0.3)] transition-[filter] active:brightness-90"
        >
          <span className="flex items-center gap-1.5 text-[15px] font-black leading-tight">
            <span className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-white text-[4.5px] font-black text-[#06a32a]">
              LINE
            </span>
            LINEで無料相談
          </span>
          <span className="mt-[3px] text-[9.5px] font-bold leading-none opacity-95">
            写真を送るだけ｜24時間受付
          </span>
        </a>
      </div>
    </div>
  );
}
