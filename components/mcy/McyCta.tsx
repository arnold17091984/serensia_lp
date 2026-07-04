import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from "./McyHeader";

/**
 * No.33 — full-width conversion section (used mid-page and at the end).
 * Navy ground with gold rules as the LP's single dark accent band;
 * turquoise phone CTA + LINE-green CTA as live HTML buttons.
 */
export default function McyCta() {
  return (
    <section data-cta-section className="w-full bg-gradient-to-b from-mcy-navy to-mcy-navy-deep">
      <div aria-hidden="true" className="h-[3px] w-full bg-gradient-to-r from-mcy-gold-deep via-mcy-gold-light to-mcy-gold-deep" />
      <div className="px-4 py-[clamp(20px,6vw,32px)] text-center text-white">
        <p className="font-display text-[clamp(14px,4vw,18px)] font-bold tracking-[0.04em]">
          東京・神奈川を中心に<span className="mx-1 border-b-2 border-mcy-gold text-[1.25em] text-mcy-gold-light">関東一円</span>
        </p>
        <p className="mt-[clamp(8px,2.4vw,13px)] font-display font-black leading-none">
          <span className="text-[clamp(17px,4.8vw,23px)]">出張費用・お見積り</span>
          <span className="ml-2 text-[clamp(46px,13vw,64px)] text-mcy-gold">0</span>
          <span className="text-[clamp(20px,5.6vw,27px)] text-mcy-gold">円</span>
        </p>

        <div className="mx-auto mt-[clamp(12px,3.4vw,18px)] max-w-[460px] rounded-[14px] bg-white px-4 pb-5 pt-4 text-mcy-navy shadow-[0_4px_16px_rgba(0,0,0,0.25)]">
          <p className="font-display text-[clamp(15px,4.3vw,19px)] font-black">
            お電話1本！まずはご相談を
          </p>
          <ul className="mx-auto mt-3 flex w-fit flex-col gap-[6px] text-left">
            {["最短即日対応！緊急時もご相談ください", "お見積り確定後の追加費用なし", "クレジットカードご利用可能"].map((t) => (
              <li key={t} className="flex items-start gap-2 text-[clamp(11px,3.1vw,13.5px)] font-bold leading-[1.7]">
                <span aria-hidden="true" className="mt-[3px] grid h-[16px] w-[16px] shrink-0 place-items-center rounded-full bg-mcy-gold text-[9px] font-black text-white">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <a
            href={PHONE_TEL}
            data-gtm="cta_tel_section"
            className="mt-4 flex items-center justify-center gap-2 rounded-full border-2 border-mcy-gold/70 bg-gradient-to-b from-[#19b8be] via-mcy-turq to-mcy-turq-deep px-4 py-[clamp(9px,2.7vw,13px)] text-white shadow-[0_4px_12px_rgba(11,127,133,0.4)] transition-[filter] active:brightness-90"
          >
            <span className="grid h-[clamp(28px,7.8vw,40px)] w-[clamp(28px,7.8vw,40px)] shrink-0 place-items-center rounded-full bg-white">
              <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" fill="#0b7f85" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </span>
            <span className="min-w-0 text-center leading-none">
              <span className="block whitespace-nowrap text-[clamp(9.5px,2.7vw,13px)] font-black">
                お電話で今すぐ相談する
              </span>
              <span className="mt-[4px] block whitespace-nowrap text-[clamp(19px,5.5vw,27px)] font-black tracking-[-0.01em]">
                {PHONE_DISPLAY}
              </span>
              <span className="mt-[4px] block whitespace-nowrap text-[clamp(7.5px,2.1vw,10px)] font-bold opacity-95">
                9:00〜21:00 年中無休｜タップで電話
              </span>
            </span>
          </a>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="cta_line_section"
            className="mt-3 flex items-center justify-center gap-2 rounded-full border-2 border-mcy-gold/70 bg-gradient-to-b from-[#25d94e] to-[#06a32a] px-4 py-[clamp(9px,2.7vw,13px)] text-white shadow-[0_4px_12px_rgba(6,163,42,0.35)] transition-[filter] active:brightness-90"
          >
            <span className="grid h-[clamp(26px,7.4vw,38px)] w-[clamp(26px,7.4vw,38px)] shrink-0 place-items-center rounded-full bg-white text-[clamp(6px,1.7vw,8.5px)] font-black text-[#06a32a]">
              LINE
            </span>
            <span className="min-w-0 text-center leading-none">
              <span className="block whitespace-nowrap text-[clamp(14px,4vw,19px)] font-black">
                LINEで無料相談する
              </span>
              <span className="mt-[4px] block whitespace-nowrap text-[clamp(8px,2.3vw,10.5px)] font-bold opacity-95">
                写真を送るだけで簡単見積り｜24時間受付中
              </span>
            </span>
          </a>
        </div>
      </div>
      <div aria-hidden="true" className="h-[3px] w-full bg-gradient-to-r from-mcy-gold-deep via-mcy-gold-light to-mcy-gold-deep" />
    </section>
  );
}
