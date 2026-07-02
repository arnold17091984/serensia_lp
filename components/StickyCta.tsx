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
      <div className="mx-auto max-w-[520px] border-t border-hairline bg-white/85 px-3 pb-2.5 pt-2 backdrop-blur-md">
        <div className="flex items-stretch gap-2">
          {/* LINE */}
          <a
            href="https://page.line.me/782qjphg"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={visible ? undefined : -1}
            className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg bg-line px-2 py-2 text-white"
          >
            <span className="flex items-center gap-1.5 text-[14px] font-bold leading-tight">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0 fill-current"
                aria-hidden="true"
              >
                <path d="M12 3C6.48 3 2 6.64 2 11.1c0 2.55 1.42 4.82 3.63 6.3-.16.94-.63 2.42-1.4 3.4 1.86-.27 3.63-1.06 4.75-1.72.97.21 1.98.32 3.02.32 5.52 0 10-3.64 10-8.3S17.52 3 12 3z" />
              </svg>
              LINEで無料相談
            </span>
            <span className="font-mono text-[10px] tracking-wide opacity-85">
              24時間受付
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:0344002098"
            tabIndex={visible ? undefined : -1}
            className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg bg-signal px-2 py-2 text-white"
          >
            <span className="flex items-center gap-1.5 text-[14px] font-bold leading-tight">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              電話で相談
            </span>
            <span className="font-mono text-[10px] tracking-wide opacity-85">
              受付 9:00〜21:00
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
