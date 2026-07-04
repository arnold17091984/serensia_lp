"use client";

import { useEffect, useState } from "react";

/**
 * まーしー式 No.33 ターコイズ不動産土地活用フォト — header.
 * The KV (McyFv) carries its own header, so this bar stays hidden at the very
 * top and slides in only after the user scrolls into the content, giving a
 * persistent nav + CTA without duplicating the KV's header.
 * White glass ground / navy brand / glossy turquoise & LINE-green CTAs.
 */

export const PHONE_TEL = "tel:0344002098";
export const PHONE_DISPLAY = "03-4400-2098";
export const LINE_URL = "https://page.line.me/782qjphg";

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
      className={`fixed inset-x-0 top-0 z-40 transition-transform duration-300 ease-out ${
        shown ? "translate-y-0" : "pointer-events-none -translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-[520px] bg-white/90 shadow-[0_2px_14px_rgba(18,58,92,0.12)] backdrop-blur-md">
        <div className="flex items-center justify-between gap-[clamp(4px,1.2vw,8px)] px-[clamp(6px,1.8vw,12px)] py-[7px]">
          {/* brand */}
          <a href="/" aria-label="セレンシア" className="min-w-0 shrink leading-none">
            <span className="block whitespace-nowrap text-[clamp(7px,1.9vw,9px)] font-bold tracking-[0.18em] text-mcy-turq-deep">
              特殊清掃・遺品整理
            </span>
            <span className="mt-[3px] block whitespace-nowrap font-display text-[clamp(15px,4.2vw,21px)] font-bold tracking-[0.14em] text-mcy-navy">
              セレンシア
            </span>
            <span
              aria-hidden
              className="mt-[3px] block h-[2px] w-[min(100%,76px)] rounded-full bg-gradient-to-r from-mcy-turq-bright via-mcy-turq to-mcy-gold"
            />
          </a>

          {/* 無料 badge with gold laurel */}
          <div className="flex shrink-0 items-center gap-[2px] leading-none">
            <svg viewBox="0 0 30 60" className="h-[clamp(26px,6.6vw,38px)] w-auto drop-shadow-[0_1px_1px_rgba(165,129,58,0.35)]" fill="#c9a24f" aria-hidden="true">
              <path d="M22 58C11 51 7 39 10 27 7 39 12 51 22 58Z" />
              <path d="M10 43c3.6-.9 6.4.6 7.8 3.7-3.6.9-6.5-.4-7.8-3.7ZM9.6 34.5c3.4-.5 6.1 1.4 7 4.6-3.4.2-6.1-1.5-7-4.6ZM10.6 26c3 0 5.5 2 6.1 5.1-3-.2-5.4-2-6.1-5.1ZM12.5 18.5c2.7.7 4.5 2.8 4.5 5.8-2.7-.8-4.3-2.9-4.5-5.8ZM15.8 12c2.2 1.2 3.2 3.4 2.7 6.3-2.2-1.4-3-3.6-2.7-6.3Z" />
            </svg>
            <p className="text-center leading-none">
              <span className="block text-[clamp(6px,1.5vw,8.5px)] font-bold text-mcy-navy">
                相談・見積り
              </span>
              <span className="my-[1px] block bg-gradient-to-b from-mcy-turq-bright to-mcy-turq-deep bg-clip-text text-[clamp(13px,3.4vw,20px)] font-black leading-none text-transparent">
                無料
              </span>
              <span className="block text-[clamp(5px,1.25vw,7.5px)] font-bold text-mcy-navy/80">
                電話9〜21時／LINEは24時間
              </span>
            </p>
            <svg viewBox="0 0 30 60" className="h-[clamp(26px,6.6vw,38px)] w-auto -scale-x-100 drop-shadow-[0_1px_1px_rgba(165,129,58,0.35)]" fill="#c9a24f" aria-hidden="true">
              <path d="M22 58C11 51 7 39 10 27 7 39 12 51 22 58Z" />
              <path d="M10 43c3.6-.9 6.4.6 7.8 3.7-3.6.9-6.5-.4-7.8-3.7ZM9.6 34.5c3.4-.5 6.1 1.4 7 4.6-3.4.2-6.1-1.5-7-4.6ZM10.6 26c3 0 5.5 2 6.1 5.1-3-.2-5.4-2-6.1-5.1ZM12.5 18.5c2.7.7 4.5 2.8 4.5 5.8-2.7-.8-4.3-2.9-4.5-5.8ZM15.8 12c2.2 1.2 3.2 3.4 2.7 6.3-2.2-1.4-3-3.6-2.7-6.3Z" />
            </svg>
          </div>

          {/* phone — glossy turquoise pill with gold outer hairline */}
          <a
            href={PHONE_TEL}
            tabIndex={shown ? undefined : -1}
            data-gtm="cta_tel_header"
            className="relative flex min-h-[42px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[10px] bg-gradient-to-b from-mcy-turq-bright via-mcy-turq to-mcy-turq-deep px-[clamp(6px,1.7vw,12px)] py-[5px] text-white shadow-[0_0_0_1px_rgba(201,162,79,0.5),0_4px_10px_rgba(11,127,133,0.45)] ring-1 ring-inset ring-white/45 transition-[filter] active:brightness-90"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-[3px] top-[2px] h-[46%] rounded-[8px] bg-gradient-to-b from-white/45 via-white/15 to-white/0"
            />
            <span className="relative flex items-center gap-[3px] leading-none drop-shadow-[0_1px_1px_rgba(11,127,133,0.55)]">
              <svg viewBox="0 0 24 24" className="h-[clamp(10px,2.6vw,14px)] w-[clamp(10px,2.6vw,14px)] shrink-0" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="whitespace-nowrap text-[clamp(11px,2.9vw,17px)] font-black tracking-[-0.02em]">
                {PHONE_DISPLAY}
              </span>
            </span>
            <span className="relative mt-[3px] whitespace-nowrap text-[clamp(5.5px,1.4vw,8px)] font-bold leading-none">
              受付 9:00〜21:00 / 年中無休
            </span>
          </a>

          {/* LINE — glossy green pill with gold outer hairline */}
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={shown ? undefined : -1}
            data-gtm="cta_line_header"
            className="relative flex min-h-[42px] shrink-0 items-center gap-[clamp(2px,0.9vw,5px)] overflow-hidden rounded-[10px] bg-gradient-to-b from-[#4be06a] via-[#1ecb3a] to-[#06a32a] px-[clamp(4px,1.2vw,9px)] py-[5px] text-white shadow-[0_0_0_1px_rgba(201,162,79,0.5),0_4px_10px_rgba(6,163,42,0.4)] ring-1 ring-inset ring-white/45 transition-[filter] active:brightness-90"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-[3px] top-[2px] h-[46%] rounded-[8px] bg-gradient-to-b from-white/45 via-white/15 to-white/0"
            />
            <span className="relative grid h-[clamp(15px,3.9vw,22px)] w-[clamp(15px,3.9vw,22px)] shrink-0 place-items-center rounded-full bg-white text-[clamp(4.5px,1.2vw,6.5px)] font-black text-[#06b32c] shadow-[0_1px_2px_rgba(0,0,0,0.18)]">
              LINE
            </span>
            <span className="relative leading-tight drop-shadow-[0_1px_1px_rgba(6,163,42,0.5)]">
              <span className="block whitespace-nowrap text-[clamp(7px,1.8vw,10px)] font-bold">
                LINEで
              </span>
              <span className="block whitespace-nowrap text-[clamp(9px,2.4vw,14px)] font-black">
                写真相談する
              </span>
            </span>
          </a>
        </div>

        {/* thin turquoise gradient keyline under the glass bar */}
        <div
          aria-hidden
          className="h-[3px] w-full bg-gradient-to-r from-mcy-turq-bright via-mcy-turq-deep to-mcy-turq-bright"
        />
      </div>
    </header>
  );
}
