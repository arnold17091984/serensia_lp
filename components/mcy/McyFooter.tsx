import { PHONE_DISPLAY, PHONE_TEL } from "./McyHeader";

/** No.33 — navy footer with gold rule and legal links. */

const LINKS = [
  { href: "/company", label: "会社概要" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/legal", label: "特定商取引法に基づく表記" },
];

export default function McyFooter() {
  return (
    <footer className="w-full bg-mcy-navy-deep pb-28 text-white">
      <div aria-hidden="true" className="h-[3px] w-full bg-gradient-to-r from-mcy-gold-deep via-mcy-gold-light to-mcy-gold-deep" />
      <div className="px-4 pt-[clamp(22px,6.4vw,34px)] text-center">
        <p className="text-[clamp(9px,2.5vw,11px)] font-bold tracking-[0.22em] text-mcy-gold-light">
          特殊清掃・遺品整理
        </p>
        <p className="mt-2 font-display text-[clamp(20px,5.8vw,27px)] font-bold tracking-[0.18em]">
          セレンシア
        </p>
        <p className="mt-2 text-[clamp(10px,2.8vw,12.5px)] font-medium text-white/80">
          運営会社：株式会社TAKAKU
        </p>

        <a href={PHONE_TEL} data-gtm="cta_tel_footer" className="mt-[clamp(14px,4vw,20px)] inline-flex items-center gap-2 text-white">
          <svg viewBox="0 0 24 24" className="h-[clamp(15px,4.2vw,19px)] w-[clamp(15px,4.2vw,19px)]" fill="currentColor" aria-hidden="true">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span className="font-display text-[clamp(22px,6.4vw,30px)] font-black tracking-[0.01em]">
            {PHONE_DISPLAY}
          </span>
        </a>
        <p className="mt-2 text-[clamp(9.5px,2.7vw,12px)] font-medium leading-[1.8] text-white/80">
          お電話受付 9:00〜21:00 年中無休／
          <br className="min-[430px]:hidden" />
          LINE・メールは24時間受付・緊急時は折り返し対応
        </p>
        <p className="mt-3 text-[clamp(9.5px,2.7vw,12px)] font-medium text-white/80">
          対応エリア：東京・神奈川を中心に関東一円
        </p>

        <nav className="mt-[clamp(16px,4.6vw,24px)] flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[clamp(10px,2.8vw,12px)] text-white/85">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="inline-block px-1.5 py-2 underline decoration-mcy-gold decoration-1 underline-offset-4">
              {l.label}
            </a>
          ))}
        </nav>

        <p className="mt-[clamp(10px,3vw,16px)] pb-2 text-[clamp(9px,2.5vw,11px)] tracking-[0.08em] text-white/55">
          © 株式会社TAKAKU
        </p>
      </div>
    </footer>
  );
}
