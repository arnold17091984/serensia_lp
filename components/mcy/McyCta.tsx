import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from "./McyHeader";

/**
 * Full-width conversion section (used mid-page and at the end).
 * Deep-emerald ground with a warm gold under-glow, fine dot texture, gold
 * sparkles and double gold rules — the LP's single dark accent band, tuned to
 * the KV's green×gold theme. Glassy white card in a double gold frame holds the
 * deep-emerald phone CTA and LINE-green CTA (live HTML buttons).
 */
export default function McyCta() {
  return (
    <section data-cta-section className="relative w-full overflow-hidden bg-gradient-to-b from-lux-green to-[#0a2c1c]">
      {/* layered background: gold glow + soft green glow + fine dot texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(200,162,78,0.26),transparent_72%)] blur-2xl" />
        <div className="absolute -bottom-36 -right-24 h-[320px] w-[320px] rounded-full bg-[radial-gradient(closest-side,rgba(74,138,96,0.28),transparent_72%)] blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1.2px)] bg-[length:16px_16px] opacity-40" />
      </div>

      {/* gold corner sparkles */}
      <span aria-hidden="true" className="absolute left-3 top-4 text-[14px] leading-none text-lux-gold/90 [text-shadow:0_0_10px_rgba(200,162,78,0.9)]">✦</span>
      <span aria-hidden="true" className="absolute right-4 top-7 text-[10px] leading-none text-lux-gold-light/80 [text-shadow:0_0_8px_rgba(236,219,168,0.8)]">✦</span>
      <span aria-hidden="true" className="absolute bottom-7 left-4 text-[10px] leading-none text-lux-gold-light/80 [text-shadow:0_0_8px_rgba(236,219,168,0.8)]">✦</span>
      <span aria-hidden="true" className="absolute bottom-4 right-3 text-[14px] leading-none text-lux-gold/90 [text-shadow:0_0_10px_rgba(200,162,78,0.9)]">✦</span>

      {/* top double gold rule (thick + thin) */}
      <div aria-hidden="true" className="relative">
        <div className="h-[3px] w-full bg-gradient-to-r from-lux-gold-deep via-lux-gold-light to-lux-gold-deep" />
        <div className="mt-[3px] h-px w-full bg-gradient-to-r from-transparent via-lux-gold-light/80 to-transparent" />
      </div>

      <div className="relative px-4 py-[clamp(24px,7vw,40px)] text-center text-white">
        <p className="font-display text-[clamp(14px,4vw,18px)] font-bold tracking-[0.04em]">
          東京・神奈川を中心に<span className="relative mx-1 inline-block text-[1.25em] text-lux-gold-light">関東一円<span aria-hidden="true" className="absolute -bottom-[2px] left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-lux-gold-deep via-lux-gold-light to-lux-gold-deep" /></span>
        </p>
        <p className="mt-[clamp(10px,2.8vw,15px)] font-display font-black leading-none">
          <span className="text-[clamp(17px,4.8vw,23px)] [text-shadow:0_2px_8px_rgba(0,0,0,0.35)]">出張費用・お見積り</span>
          <span className="ml-2 inline-block bg-gradient-to-b from-[#f7edd2] via-lux-gold to-lux-gold-deep bg-clip-text text-[clamp(46px,13vw,64px)] text-transparent drop-shadow-[0_0_14px_rgba(255,255,255,0.35)]">0</span>
          <span className="inline-block bg-gradient-to-b from-[#f7edd2] via-lux-gold to-lux-gold-deep bg-clip-text text-[clamp(20px,5.6vw,27px)] text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">円</span>
        </p>

        {/* glass card with double gold frame */}
        <div className="mx-auto mt-[clamp(14px,3.8vw,20px)] max-w-[460px] rounded-[18px] bg-gradient-to-b from-lux-gold-light via-lux-gold to-lux-gold-deep p-[2px] shadow-[0_18px_40px_rgba(0,0,0,0.4)]">
          <div className="relative rounded-[16px] bg-white px-4 pb-5 pt-4 text-lux-green-ink">
            <div aria-hidden="true" className="pointer-events-none absolute inset-[5px] rounded-[12px] border border-lux-gold/45" />

            <p className="font-display text-[clamp(15px,4.3vw,19px)] font-black">
              お電話1本！まずはご相談を
            </p>
            <p aria-hidden="true" className="mt-1 select-none text-[10px] leading-none tracking-[0.3em] text-lux-gold-deep">
              ―◆―
            </p>

            {/* social-proof recap at the decision point (verified figures) */}
            <p className="mt-2 text-center text-[clamp(10px,2.8vw,12.5px)] font-bold leading-[1.7] text-lux-green-ink">
              Googleクチコミ <span className="text-lux-gold-deep">★</span>4.9／120件以上｜ご相談実績2,000件以上
            </p>

            <ul className="mx-auto mt-3 w-fit divide-y divide-lux-green/10 text-left">
              {["最短即日対応！緊急時もご相談ください", "お見積り確定後の追加費用なし", "クレジットカードご利用可能"].map((t) => (
                <li key={t} className="flex items-start gap-2 py-[5px] text-[clamp(11px,3.1vw,13.5px)] font-bold leading-[1.7]">
                  <span aria-hidden="true" className="mt-[3px] grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full bg-gradient-to-br from-lux-gold-light via-lux-gold to-lux-gold-deep text-[9px] font-black text-white shadow-[0_2px_5px_rgba(156,119,41,0.5)] ring-1 ring-white/70">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            {/* reassurance microcopy just before the call action */}
            <p className="mt-3 text-center text-[clamp(10px,2.8vw,12px)] font-medium leading-[1.7] text-lux-green-ink/75">
              うまく状況をご説明できなくても大丈夫です。お話を伺いながら丁寧にご案内します。
            </p>

            <a
              href={PHONE_TEL}
              data-gtm="cta_tel_section"
              className="mcy-cta-nudge relative mt-4 flex min-h-[clamp(82px,20vw,96px)] items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-lux-gold/70 bg-gradient-to-b from-lux-green-2 via-lux-green to-[#0c2c1c] px-3 py-[clamp(9px,2.7vw,13px)] text-white shadow-[0_10px_24px_rgba(18,61,40,0.45)] transition-[filter] active:brightness-95"
            >
              <span aria-hidden="true" className="pointer-events-none absolute inset-[3px] rounded-full border border-white/40" />
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-[10%] top-[4px] h-[34%] rounded-full bg-gradient-to-b from-white/40 to-white/0" />
              <span className="grid h-[clamp(28px,7.8vw,40px)] w-[clamp(28px,7.8vw,40px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
                <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" fill="#123d28" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              <span className="min-w-0 text-center leading-none">
                <span className="block whitespace-nowrap text-[clamp(9.5px,2.7vw,13px)] font-black">
                  お電話で今すぐ相談する
                </span>
                <span className="mt-[4px] block whitespace-nowrap text-[clamp(19px,5.5vw,27px)] font-black tracking-[-0.01em] text-lux-amber [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">
                  {PHONE_DISPLAY}
                </span>
                <span className="mt-[4px] block whitespace-nowrap text-[clamp(7.5px,2.1vw,10px)] font-bold opacity-95">
                  9:00〜21:00 不定休｜タップで電話
                </span>
              </span>
              <span aria-hidden="true" className="grid h-[clamp(18px,5vw,24px)] w-[clamp(18px,5vw,24px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
                <svg viewBox="0 0 24 24" className="h-[60%] w-[60%]" fill="none" stroke="#123d28" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-gtm="cta_line_section"
              style={{ animationDelay: "0.5s" }}
              className="mcy-cta-nudge relative mt-3 flex min-h-[clamp(82px,20vw,96px)] items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-lux-gold/70 bg-gradient-to-b from-[#37d857] to-[#06a32a] px-3 py-[clamp(9px,2.7vw,13px)] text-white shadow-[0_10px_24px_rgba(6,163,42,0.4)] transition-[filter] active:brightness-90"
            >
              <span aria-hidden="true" className="pointer-events-none absolute inset-[3px] rounded-full border border-white/50" />
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
        <div className="h-px w-full bg-gradient-to-r from-transparent via-lux-gold-light/80 to-transparent" />
        <div className="mt-[3px] h-[3px] w-full bg-gradient-to-r from-lux-gold-deep via-lux-gold-light to-lux-gold-deep" />
      </div>
    </section>
  );
}
