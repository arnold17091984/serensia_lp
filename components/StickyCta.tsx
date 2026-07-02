"use client";

import { useEffect, useState } from "react";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-[520px] items-stretch gap-2 bg-white/95 px-3 pb-2.5 pt-2 shadow-[0_-2px_12px_rgba(0,0,0,0.18)]">
        {/* LINE */}
        <a
          href="https://page.line.me/782qjphg"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? undefined : -1}
          className="flex flex-1 flex-col items-center justify-center rounded-lg bg-line px-2 py-1.5 text-white shadow-[0_3px_0_#04963f] active:translate-y-[2px] active:shadow-none"
        >
          <span className="flex items-center gap-1.5 text-[15px] font-bold leading-tight">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 fill-current"
              aria-hidden="true"
            >
              <path d="M12 3C6.48 3 2 6.64 2 11.1c0 2.55 1.42 4.82 3.63 6.3-.16.94-.63 2.42-1.4 3.4 1.86-.27 3.63-1.06 4.75-1.72.97.21 1.98.32 3.02.32 5.52 0 10-3.64 10-8.3S17.52 3 12 3z" />
            </svg>
            LINEで無料相談
          </span>
          <span className="text-[10px] font-medium opacity-90">24時間受付</span>
        </a>

        {/* Phone */}
        <a
          href="tel:0344002098"
          tabIndex={visible ? undefined : -1}
          className="flex flex-1 flex-col items-center justify-center rounded-lg bg-gradient-to-b from-cta to-cta-deep px-2 py-1.5 text-white shadow-[0_3px_0_#b34a0b] active:translate-y-[2px] active:shadow-none"
        >
          <span className="flex items-center gap-1.5 text-[15px] font-bold leading-tight">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 fill-current"
              aria-hidden="true"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            電話で相談
          </span>
          <span className="text-[10px] font-medium opacity-90">
            受付 9:00〜21:00
          </span>
        </a>
      </div>
    </div>
  );
}
