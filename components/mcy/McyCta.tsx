import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from "./McyHeader";

/**
 * No.33 — full-width conversion section (used mid-page and at the end).
 * Navy-gradient ground with a large turquoise radial glow, fine dot texture,
 * gold sparkles in the corners and double gold rules top/bottom — the LP's
 * single dark accent band. Glassy white card with a double gold frame holds
 * the glossy turquoise phone CTA and LINE-green CTA (live HTML buttons).
 */
export default function McyCta() {
  return (
    <section data-cta-section className="relative w-full overflow-hidden bg-gradient-to-b from-mcy-navy to-mcy-navy-deep">
      {/* layered background: turquoise glow + warm gold under-glow + fine dot texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(43,199,205,0.32),transparent_72%)] blur-2xl" />
        <div className="absolute -bottom-36 -right-24 h-[320px] w-[320px] rounded-full bg-[radial-gradient(closest-side,rgba(201,162,79,0.18),transparent_72%)] blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1.2px)] bg-[length:16px_16px] opacity-40" />
      </div>

      {/* gold corner sparkles */}
      <span aria-hidden="true" className="absolute left-3 top-4 text-[14px] leading-none text-mcy-gold/90 [text-shadow:0_0_10px_rgba(201,162,79,0.9)]">✦</span>
      <span aria-hidden="true" className="absolute right-4 top-7 text-[10px] leading-none text-mcy-gold-light/80 [text-shadow:0_0_8px_rgba(243,232,207,0.8)]">✦</span>
      <span aria-hidden="true" className="absolute bottom-7 left-4 text-[10px] leading-none text-mcy-gold-light/80 [text-shadow:0_0_8px_rgba(243,232,207,0.8)]">✦</span>
      <span aria-hidden="true" className="absolute bottom-4 right-3 text-[14px] leading-none text-mcy-gold/90 [text-shadow:0_0_10px_rgba(201,162,79,0.9)]">✦</span>

      {/* top double gold rule (thick + thin) */}
      <div aria-hidden="true" className="relative">
        <div className="h-[3px] w-full bg-gradient-to-r from-mcy-gold-deep via-mcy-gold-light to-mcy-gold-deep" />
        <div className="mt-[3px] h-px w-full bg-gradient-to-r from-transparent via-mcy-gold-light/80 to-transparent" />
      </div>

      <div className="relative px-4 py-[clamp(24px,7vw,40px)] text-center text-white">
        <p className="font-display text-[clamp(14px,4vw,18px)] font-bold tracking-[0.04em]">
          東京・神奈川を中心に<span className="relative mx-1 inline-block text-[1.25em] text-mcy-gold-light">関東一円<span aria-hidden="true" className="absolute -bottom-[2px] left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-mcy-gold-deep via-mcy-gold-light to-mcy-gold-deep" /></span>
        </p>
        <p className="mt-[clamp(10px,2.8vw,15px)] font-display font-black leading-none">
          <span className="text-[clamp(17px,4.8vw,23px)] [text-shadow:0_2px_8px_rgba(0,0,0,0.35)]">出張費用・お見積り</span>
          <span className="ml-2 inline-block bg-gradient-to-b from-[#f7edd2] via-mcy-gold to-mcy-gold-deep bg-clip-text text-[clamp(46px,13vw,64px)] text-transparent drop-shadow-[0_0_14px_rgba(255,255,255,0.4)]">0</span>
          <span className="inline-block bg-gradient-to-b from-[#f7edd2] via-mcy-gold to-mcy-gold-deep bg-clip-text text-[clamp(20px,5.6vw,27px)] text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]">円</span>
        </p>

        {/* glass card with double gold frame */}
        <div className="mx-auto mt-[clamp(14px,3.8vw,20px)] max-w-[460px] rounded-[18px] bg-gradient-to-b from-[#e6cf96] via-mcy-gold to-mcy-gold-deep p-[2px] shadow-[0_18px_40px_rgba(0,0,0,0.4)]">
          <div className="relative rounded-[16px] bg-white/92 px-4 pb-5 pt-4 text-mcy-navy backdrop-blur">
            <div aria-hidden="true" className="pointer-events-none absolute inset-[5px] rounded-[12px] border border-mcy-gold/45" />

            <p className="font-display text-[clamp(15px,4.3vw,19px)] font-black">
              お電話1本！まずはご相談を
            </p>
            <p aria-hidden="true" className="mt-1 select-none text-[10px] leading-none tracking-[0.3em] text-mcy-gold">
              ―◆―
            </p>

            <ul className="mx-auto mt-3 w-fit divide-y divide-mcy-turq-deep/10 text-left">
              {["最短即日対応！緊急時もご相談ください", "お見積り確定後の追加費用なし", "クレジットカードご利用可能"].map((t) => (
                <li key={t} className="flex items-start gap-2 py-[5px] text-[clamp(11px,3.1vw,13.5px)] font-bold leading-[1.7]">
                  <span aria-hidden="true" className="mt-[3px] grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#e2c887] via-mcy-gold to-mcy-gold-deep text-[9px] font-black text-white shadow-[0_2px_5px_rgba(165,129,58,0.5)] ring-1 ring-white/70">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <a
              href={PHONE_TEL}
              data-gtm="cta_tel_section"
              className="relative mt-4 flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-mcy-gold/70 bg-gradient-to-b from-mcy-turq-bright via-mcy-turq to-mcy-turq-deep px-3 py-[clamp(9px,2.7vw,13px)] text-white shadow-[0_10px_24px_rgba(11,143,150,0.45)] transition-[filter] active:brightness-90"
            >
              <span aria-hidden="true" className="pointer-events-none absolute inset-[3px] rounded-full border border-white/60" />
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-[10%] top-[4px] h-[34%] rounded-full bg-gradient-to-b from-white/50 to-white/0" />
              <span className="grid h-[clamp(28px,7.8vw,40px)] w-[clamp(28px,7.8vw,40px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
                <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" fill="#0b7f85" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              <span className="min-w-0 text-center leading-none">
                <span className="block whitespace-nowrap text-[clamp(9.5px,2.7vw,13px)] font-black">
                  お電話で今すぐ相談する
                </span>
                <span className="mt-[4px] block whitespace-nowrap text-[clamp(19px,5.5vw,27px)] font-black tracking-[-0.01em] [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
                  {PHONE_DISPLAY}
                </span>
                <span className="mt-[4px] block whitespace-nowrap text-[clamp(7.5px,2.1vw,10px)] font-bold opacity-95">
                  9:00〜21:00 年中無休｜タップで電話
                </span>
              </span>
              <span aria-hidden="true" className="grid h-[clamp(18px,5vw,24px)] w-[clamp(18px,5vw,24px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
                <svg viewBox="0 0 24 24" className="h-[60%] w-[60%]" fill="none" stroke="#0b7f85" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-gtm="cta_line_section"
              className="relative mt-3 flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-mcy-gold/70 bg-gradient-to-b from-[#25d94e] to-[#06a32a] px-3 py-[clamp(9px,2.7vw,13px)] text-white shadow-[0_10px_24px_rgba(6,163,42,0.4)] transition-[filter] active:brightness-90"
            >
              <span aria-hidden="true" className="pointer-events-none absolute inset-[3px] rounded-full border border-white/60" />
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-[10%] top-[4px] h-[34%] rounded-full bg-gradient-to-b from-white/45 to-white/0" />
              <span className="grid h-[clamp(26px,7.4vw,38px)] w-[clamp(26px,7.4vw,38px)] shrink-0 place-items-center rounded-full bg-white text-[clamp(6px,1.7vw,8.5px)] font-black text-[#06a32a] shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
                LINE
              </span>
              <span className="min-w-0 text-center leading-none">
                <span className="block whitespace-nowrap text-[clamp(14px,4vw,19px)] font-black [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
                  LINEで無料相談する
                </span>
                <span className="mt-[4px] block whitespace-nowrap text-[clamp(8px,2.3vw,10.5px)] font-bold opacity-95">
                  写真を送るだけで簡単見積り｜24時間受付中
                </span>
              </span>
              <span aria-hidden="true" className="grid h-[clamp(18px,5vw,24px)] w-[clamp(18px,5vw,24px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
                <svg viewBox="0 0 24 24" className="h-[60%] w-[60%]" fill="none" stroke="#06a32a" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* bottom double gold rule (thin + thick) */}
      <div aria-hidden="true" className="relative">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-mcy-gold-light/80 to-transparent" />
        <div className="mt-[3px] h-[3px] w-full bg-gradient-to-r from-mcy-gold-deep via-mcy-gold-light to-mcy-gold-deep" />
      </div>
    </section>
  );
}
