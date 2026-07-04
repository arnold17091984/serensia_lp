"use client";

import { useEffect, useState } from "react";

import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from "./McyHeader";

/**
 * FV dual CTA cluster (client) — time-aware ordering.
 * During phone hours (9:00–21:00) the phone pill leads; outside those hours the
 * LINE pill is promoted to first position and the sub-lines switch to
 * "24h reception / we'll call back" so night-time visitors never dead-end on a
 * closed phone line. Initial render matches server output (in-hours) to avoid a
 * hydration mismatch; the real state is applied after mount.
 * data-cta-section lets the sticky bar auto-hide while this block is on screen.
 */

const PHONE_OPEN_HOUR = 9;
const PHONE_CLOSE_HOUR = 21;

function CtaArrow({ color }: Readonly<{ color: string }>) {
  return (
    <span className="grid h-[clamp(22px,6vw,30px)] w-[clamp(22px,6vw,30px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
      <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" aria-hidden="true">
        <path
          d="m9.5 5.5 6.5 6.5-6.5 6.5"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function PhonePill({ sub }: Readonly<{ sub: string }>) {
  return (
    <div className="rounded-full bg-gradient-to-b from-[#e9d59c] via-mcy-gold to-mcy-gold-deep p-[2px] shadow-[0_10px_24px_rgba(11,143,150,0.45)]">
      <a
        href={PHONE_TEL}
        data-gtm="cta_tel_fv"
        className="relative flex items-center justify-center gap-[clamp(6px,1.8vw,10px)] overflow-hidden rounded-full border-2 border-white/75 bg-gradient-to-b from-mcy-turq-bright via-mcy-turq to-mcy-turq-deep px-[clamp(12px,3.4vw,18px)] py-[clamp(11px,3.2vw,16px)] text-white transition-[filter] active:brightness-90"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-[6%] top-[3px] h-[46%] rounded-full bg-gradient-to-b from-white/40 to-transparent"
        />
        <span className="grid h-[clamp(30px,8.4vw,44px)] w-[clamp(30px,8.4vw,44px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_5px_rgba(0,0,0,0.18)]">
          <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" fill="#0b7f85" aria-hidden="true">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </span>
        <span className="relative min-w-0 text-center leading-none">
          <span className="block whitespace-nowrap text-[clamp(10px,2.8vw,14px)] font-black">
            電話で今すぐ相談する
          </span>
          <span className="mt-[5px] block whitespace-nowrap text-[clamp(21px,6vw,30px)] font-black tracking-[-0.01em] drop-shadow-[0_2px_3px_rgba(7,80,84,0.35)]">
            {PHONE_DISPLAY}
          </span>
          <span className="mt-[4px] block text-[clamp(8px,2.2vw,11px)] font-bold opacity-95 [word-break:auto-phrase]">
            {sub}
          </span>
        </span>
        <CtaArrow color="#0b7f85" />
      </a>
    </div>
  );
}

function LinePill({ sub }: Readonly<{ sub: string }>) {
  return (
    <div className="rounded-full bg-gradient-to-b from-[#e9d59c] via-mcy-gold to-mcy-gold-deep p-[2px] shadow-[0_10px_24px_rgba(6,163,42,0.35)]">
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-gtm="cta_line_fv"
        className="relative flex items-center justify-center gap-[clamp(6px,1.8vw,10px)] overflow-hidden rounded-full border-2 border-white/75 bg-gradient-to-b from-[#25d94e] to-[#06a32a] px-[clamp(12px,3.4vw,18px)] py-[clamp(11px,3.2vw,16px)] text-white transition-[filter] active:brightness-90"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-[6%] top-[3px] h-[46%] rounded-full bg-gradient-to-b from-white/40 to-transparent"
        />
        <span className="grid h-[clamp(30px,8.4vw,44px)] w-[clamp(30px,8.4vw,44px)] shrink-0 place-items-center rounded-full bg-white text-[clamp(7px,2vw,10px)] font-black text-[#06a32a] shadow-[0_2px_5px_rgba(0,0,0,0.18)]">
          LINE
        </span>
        <span className="relative min-w-0 text-center leading-none">
          <span className="block whitespace-nowrap text-[clamp(10px,2.8vw,14px)] font-black">
            LINEで写真を送るだけ
          </span>
          <span className="mt-[5px] block whitespace-nowrap text-[clamp(16px,4.6vw,23px)] font-black drop-shadow-[0_2px_3px_rgba(4,90,26,0.35)]">
            写真相談・概算見積り
          </span>
          <span className="mt-[4px] block text-[clamp(8px,2.2vw,11px)] font-bold opacity-95 [word-break:auto-phrase]">
            {sub}
          </span>
        </span>
        <CtaArrow color="#06a32a" />
      </a>
    </div>
  );
}

export default function McyFvCtas() {
  const [inHours, setInHours] = useState(true);

  useEffect(() => {
    const h = new Date().getHours();
    setInHours(h >= PHONE_OPEN_HOUR && h < PHONE_CLOSE_HOUR);
  }, []);

  const phone = (
    <PhonePill
      key="phone"
      sub={inHours ? "相談・お見積り無料｜9:00〜21:00 年中無休" : "ただいま電話受付時間外｜LINEは24時間受付"}
    />
  );
  const line = (
    <LinePill
      key="line"
      sub={inHours ? "写真がなくてもOK。状況を送るだけ｜24時間受付" : "24時間受付・内容確認後に折り返します"}
    />
  );

  return (
    <div data-cta-section className="mt-[clamp(16px,4.6vw,24px)] grid grid-cols-1 gap-[clamp(10px,2.8vw,14px)] px-4">
      {inHours ? [phone, line] : [line, phone]}
      <p className="text-center text-[clamp(10px,2.8vw,12px)] font-bold leading-[1.6] text-mcy-navy/80 [word-break:auto-phrase]">
        うまく説明できなくても大丈夫です。状況をお伺いしながらご案内します。
      </p>
    </div>
  );
}
