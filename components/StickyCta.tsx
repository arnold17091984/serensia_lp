"use client";

import { useEffect, useState } from "react";

/**
 * Sticky CTA bar — restyled to match the new FV design language
 * (crimson phone / LINE green on an ivory-glass bar).
 */
export default function StickyCta() {
  const [scrolled, setScrolled] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1100);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Hide the sticky bar while a full-width CTA section is on screen
    // (avoids duplicate phone/LINE buttons competing with the page CTA).
    const sections = document.querySelectorAll("[data-cta-section]");
    const inView = new Set<Element>();
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.12,
    });
    function handleIntersect(entries: IntersectionObserverEntry[]) {
      for (const entry of entries) {
        if (entry.isIntersecting) inView.add(entry.target);
        else inView.delete(entry.target);
      }
      setCtaInView(inView.size > 0);
    }
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
      <div className="mx-auto flex max-w-[520px] items-stretch gap-2 border-t border-[#e5decf] bg-[#fdfbf5]/92 px-3 pb-2.5 pt-2 shadow-[0_-3px_14px_rgba(60,50,30,0.12)] backdrop-blur-md">
        {/* Phone */}
        <a
          href="tel:0344002098"
          tabIndex={visible ? undefined : -1}
          className="flex flex-1 flex-col items-center justify-center rounded-xl bg-gradient-to-b from-[#c8252c] to-[#a5151d] px-2 py-[7px] text-white shadow-[0_2px_8px_rgba(157,21,30,0.28)]"
        >
          <span className="flex items-center gap-1.5 text-[15px] font-bold leading-tight">
            <svg
              viewBox="0 0 24 24"
              className="h-[17px] w-[17px] shrink-0 fill-current"
              aria-hidden="true"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            電話で相談する
          </span>
          <span className="mt-[3px] text-[9.5px] font-medium leading-none opacity-95">
            9:00〜21:00 年中無休
          </span>
        </a>

        {/* LINE */}
        <a
          href="https://page.line.me/782qjphg"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? undefined : -1}
          className="flex flex-1 flex-col items-center justify-center rounded-xl bg-gradient-to-b from-[#0bd160] to-[#05b04a] px-2 py-[7px] text-white shadow-[0_2px_8px_rgba(5,166,72,0.28)]"
        >
          <span className="flex items-center gap-1.5 text-[15px] font-bold leading-tight">
            <svg viewBox="0 0 24 24" className="h-[19px] w-[19px] shrink-0" aria-hidden="true">
              <path
                fill="#fff"
                d="M12 3.2C6.6 3.2 2.2 6.7 2.2 11c0 3.8 3.4 7 8 7.7.3.1.7.2.8.5.1.2.1.6.1.9l-.2.8c0 .2-.2.9.8.5 1.1-.4 5.8-3.4 7.9-5.8 1.5-1.6 2.2-3.2 2.2-4.6 0-4.3-4.4-7.8-9.8-7.8z"
              />
              <text
                x="12"
                y="12.9"
                textAnchor="middle"
                fontSize="4.8"
                fontWeight="bold"
                fill="#05b04a"
                fontFamily="Arial, Helvetica, sans-serif"
              >
                LINE
              </text>
            </svg>
            LINEで無料相談
          </span>
          <span className="mt-[3px] text-[9.5px] font-medium leading-none opacity-95">
            写真を送るだけ｜24時間受付
          </span>
        </a>
      </div>
    </div>
  );
}
