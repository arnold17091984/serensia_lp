import { PHONE_DISPLAY, PHONE_TEL } from "./McyHeader";

/**
 * No.33 — navy-gradient footer: gold double rule on top, laurel-flanked brand,
 * oversized mincho phone, quiet pill legal links, soft turquoise/gold glows.
 */

const LINKS = [
  { href: "/company", label: "会社概要" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/legal", label: "特定商取引法に基づく表記" },
];

/** Small gold laurel branch (same motif as the header badge). */
function Laurel({ flip }: Readonly<{ flip?: boolean }>) {
  return (
    <svg
      viewBox="0 0 30 60"
      className={`h-[clamp(26px,7vw,38px)] w-auto ${flip ? "-scale-x-100" : ""}`}
      fill="#c9a24f"
      aria-hidden="true"
    >
      <path d="M22 58C11 51 7 39 10 27 7 39 12 51 22 58Z" />
      <path d="M10 43c3.6-.9 6.4.6 7.8 3.7-3.6.9-6.5-.4-7.8-3.7ZM9.6 34.5c3.4-.5 6.1 1.4 7 4.6-3.4.2-6.1-1.5-7-4.6ZM10.6 26c3 0 5.5 2 6.1 5.1-3-.2-5.4-2-6.1-5.1ZM12.5 18.5c2.7.7 4.5 2.8 4.5 5.8-2.7-.8-4.3-2.9-4.5-5.8ZM15.8 12c2.2 1.2 3.2 3.4 2.7 6.3-2.2-1.4-3-3.6-2.7-6.3Z" />
    </svg>
  );
}

export default function McyFooter() {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-lux-green to-[#0a2c1c] pb-[max(28px,env(safe-area-inset-bottom))] text-white">
      {/* gold double rule */}
      <div aria-hidden="true" className="relative z-10">
        <div className="h-[3px] w-full bg-gradient-to-r from-mcy-gold-deep via-mcy-gold-light to-mcy-gold-deep" />
        <div className="mt-[3px] h-px w-full bg-gradient-to-r from-transparent via-mcy-gold/60 to-transparent" />
      </div>

      {/* layered background: turquoise halo behind brand / faint gold glow / micro dots */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-6%] h-[clamp(200px,58vw,320px)] w-[clamp(250px,76vw,410px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(74,138,96,0.22),transparent_65%)]" />
        <div className="absolute -left-[14%] bottom-[4%] h-[clamp(140px,42vw,230px)] w-[clamp(140px,42vw,230px)] rounded-full bg-[radial-gradient(circle,rgba(200,162,78,0.14),transparent_65%)]" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="relative px-4 pt-[clamp(24px,7vw,38px)] text-center">
        {/* brand with laurel ornament */}
        <div className="flex items-center justify-center gap-[clamp(7px,2vw,12px)]">
          <Laurel />
          <div className="leading-none">
            <p className="text-[clamp(9px,2.5vw,11px)] font-bold tracking-[0.22em] text-mcy-gold-light">
              特殊清掃・遺品整理
            </p>
            <p className="mt-2 font-display text-[clamp(21px,6vw,28px)] font-bold tracking-[0.18em]">
              セレンシア
            </p>
          </div>
          <Laurel flip />
        </div>
        <p className="mt-2 text-[clamp(10px,2.8vw,12.5px)] font-medium text-white/80">
          運営会社：株式会社TAKAKU
        </p>
        <p className="mt-1 text-[clamp(10px,2.8vw,12px)] font-medium text-white/75">
          〒158-0087 東京都世田谷区玉堤1丁目21-12
        </p>

        {/* data-cta-section: the sticky bar hides only while this tappable
            phone block is genuinely on screen */}
        <a
          href={PHONE_TEL}
          data-gtm="cta_tel_footer"
          data-cta-section
          className="mt-[clamp(14px,4vw,20px)] inline-flex items-center gap-[clamp(7px,2vw,11px)] text-white transition-[filter] active:brightness-90"
        >
          <span className="grid h-[clamp(28px,7.6vw,36px)] w-[clamp(28px,7.6vw,36px)] shrink-0 place-items-center rounded-full bg-gradient-to-br from-mcy-gold to-mcy-gold-deep shadow-[0_4px_10px_rgba(0,0,0,0.35)] ring-1 ring-white/30">
            <svg viewBox="0 0 24 24" className="h-[clamp(14px,3.8vw,18px)] w-[clamp(14px,3.8vw,18px)]" fill="currentColor" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </span>
          <span className="whitespace-nowrap font-display text-[clamp(24px,7vw,34px)] font-black tracking-[0.01em] text-lux-amber [text-shadow:0_2px_10px_rgba(0,0,0,0.3)]">
            {PHONE_DISPLAY}
          </span>
        </a>
        <p className="mt-2 text-[clamp(9.5px,2.7vw,12px)] font-medium leading-[1.8] text-white/80 [word-break:auto-phrase]">
          <span className="whitespace-nowrap">お電話受付 9:00〜21:00 年中無休／</span>
          <br className="min-[430px]:hidden" />
          <span className="whitespace-nowrap">LINE・メールは24時間受付・緊急時は折り返し対応</span>
        </p>
        <p className="mt-3 text-[clamp(9.5px,2.7vw,12px)] font-medium text-white/80">
          対応エリア：東京・神奈川を中心に関東一円
        </p>

        {/* quiet pill legal links */}
        <nav className="mt-[clamp(16px,4.6vw,24px)] flex flex-wrap items-center justify-center gap-[clamp(6px,1.8vw,9px)] text-[clamp(10px,2.8vw,12px)] text-white/85">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-block rounded-full border border-white/20 bg-white/5 px-[clamp(10px,2.8vw,14px)] py-[6px]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* thin gold ―◆― divider */}
        <div aria-hidden="true" className="mx-auto mt-[clamp(14px,4vw,20px)] flex max-w-[300px] items-center gap-2">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-mcy-gold/50" />
          <span className="h-[5px] w-[5px] rotate-45 bg-mcy-gold/70" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-mcy-gold/50" />
        </div>

        <p className="mt-[clamp(10px,3vw,14px)] pb-2 text-[clamp(9px,2.5vw,11px)] tracking-[0.08em] text-white/55">
          © 株式会社TAKAKU
        </p>
      </div>
    </footer>
  );
}
