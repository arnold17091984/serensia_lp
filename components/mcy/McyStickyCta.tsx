"use client";

import { useEffect, useState } from "react";

/**
 * No.33 — sticky CTA bar (glossy turquoise phone / LINE green on white glass).
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
      <div className="relative mx-auto flex max-w-[520px] items-stretch gap-2 bg-white/80 px-3 pb-[max(10px,env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-10px_30px_rgba(18,58,92,0.20)] backdrop-blur-xl">
        {/* thin turquoise gradient keyline on top of the glass bar */}
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-mcy-turq-bright via-mcy-turq-deep to-mcy-turq-bright"
        />
        <a
          href="tel:0344002098"
          tabIndex={visible ? undefined : -1}
          data-gtm="cta_tel_sticky"
          className="relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-mcy-turq-bright via-mcy-turq to-mcy-turq-deep py-[8px] pl-[10px] pr-[26px] text-white shadow-[0_0_0_3.5px_rgba(201,162,79,0.45),0_10px_24px_rgba(11,143,150,0.45)] ring-2 ring-white/70 transition-[filter] active:brightness-90"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-[8px] top-[2px] h-[46%] rounded-full bg-gradient-to-b from-white/50 via-white/15 to-white/0"
          />
          <span className="relative flex items-center gap-1.5 whitespace-nowrap text-[clamp(12px,3.9vw,15px)] font-black leading-tight drop-shadow-[0_1px_1px_rgba(11,127,133,0.55)]">
            <svg viewBox="0 0 24 24" className="h-[clamp(13px,4vw,16px)] w-[clamp(13px,4vw,16px)] shrink-0 fill-current" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {"電話で相談する"}
          </span>
          <span className="relative mt-[3px] whitespace-nowrap text-[clamp(8.5px,2.5vw,9.5px)] font-bold leading-none opacity-95">
            9:00〜21:00 年中無休
          </span>
          <span
            aria-hidden
            className="absolute right-[7px] top-1/2 grid h-[18px] w-[18px] -translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.22)]"
          >
            <svg viewBox="0 0 12 12" className="h-[8px] w-[8px] fill-mcy-turq-deep" aria-hidden="true">
              <path d="M3.5 1.5 9 6l-5.5 4.5z" />
            </svg>
          </span>
        </a>
        <a
          href="https://page.line.me/782qjphg"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? undefined : -1}
          data-gtm="cta_line_sticky"
          className="relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-[#4be06a] via-[#25d94e] to-[#06a32a] py-[8px] pl-[10px] pr-[26px] text-white shadow-[0_0_0_3.5px_rgba(201,162,79,0.45),0_10px_24px_rgba(6,163,42,0.4)] ring-2 ring-white/70 transition-[filter] active:brightness-90"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-[8px] top-[2px] h-[46%] rounded-full bg-gradient-to-b from-white/50 via-white/15 to-white/0"
          />
          <span className="relative flex items-center gap-1.5 whitespace-nowrap text-[clamp(12px,3.9vw,15px)] font-black leading-tight drop-shadow-[0_1px_1px_rgba(6,163,42,0.5)]">
            <span className="grid h-[clamp(15px,4.4vw,18px)] w-[clamp(15px,4.4vw,18px)] shrink-0 place-items-center rounded-full bg-white text-[clamp(6px,1.6vw,8px)] font-black text-[#06a32a] shadow-[0_1px_2px_rgba(0,0,0,0.18)]">
              LINE
            </span>
            {"LINEで無料相談"}
          </span>
          <span className="relative mt-[3px] whitespace-nowrap text-[clamp(8.5px,2.5vw,9.5px)] font-bold leading-none opacity-95">
            写真を送るだけ｜24時間受付
          </span>
          <span
            aria-hidden
            className="absolute right-[7px] top-1/2 grid h-[18px] w-[18px] -translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.22)]"
          >
            <svg viewBox="0 0 12 12" className="h-[8px] w-[8px] fill-[#06a32a]" aria-hidden="true">
              <path d="M3.5 1.5 9 6l-5.5 4.5z" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}
