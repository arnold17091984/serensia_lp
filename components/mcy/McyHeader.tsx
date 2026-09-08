"use client";

import { useEffect, useState } from "react";
import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from "./contact";

// Re-exported for existing importers; server components that need to
// stringify these values must import from "./contact" directly.
export { LINE_URL, PHONE_DISPLAY, PHONE_TEL };

/** Compact contact header appears after the artwork header leaves view. */
export default function McyHeader() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      aria-hidden={!shown}
      inert={!shown}
      className={`fixed inset-x-0 top-0 z-40 transition-transform duration-200 motion-reduce:transition-none ${
        shown ? "translate-y-0" : "pointer-events-none -translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-[520px] items-center justify-between gap-2 border-b border-lux-border bg-white px-3 py-2 shadow-[0_2px_12px_rgba(7,49,95,0.08)]">
        <a href="/" aria-label="セレンシア トップページ" className="flex min-h-11 min-w-0 flex-col justify-center text-lux-green">
          <span className="text-[10px] font-bold leading-4">特殊清掃・遺品整理</span>
          <span className="text-[16px] font-black leading-6 min-[390px]:text-[18px]">セレンシア</span>
        </a>
        <div className="flex shrink-0 gap-2">
          <a
            href={PHONE_TEL}
            data-gtm="cta_tel_header"
            aria-label={`電話で相談する ${PHONE_DISPLAY}`}
            className="flex min-h-11 flex-col items-center justify-center rounded-xl bg-crimson px-3 text-white"
          >
            <span className="text-[13px] font-bold">電話で相談</span>
            <span className="text-[10px] leading-4">9:00〜21:00</span>
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="cta_line_header"
            className="flex min-h-11 flex-col items-center justify-center rounded-xl bg-[#087f36] px-3 text-white"
          >
            <span className="text-[13px] font-bold">LINE相談</span>
            <span className="text-[10px] leading-4">24時間受付</span>
          </a>
        </div>
      </div>
    </header>
  );
}
