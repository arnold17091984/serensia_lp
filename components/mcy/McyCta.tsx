import McyCtaShine from "./McyCtaShine";
import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from "./McyHeader";
import LineSteps from "./LineSteps";

/**
 * Full-width conversion section (used mid-page and at the end).
 * tone="dark" (default): deep-emerald ground with gold under-glow — the LP's
 * SINGLE dark accent band (used once, mid-page). tone="light": same layout on
 * the cream ground, used for the closing instance so the page does not end on
 * two consecutive dark blocks (design-team review 2026-08-17: the perceived
 * "heaviness" came from dark-band repetition, not the palette itself).
 */
export default function McyCta({ tone = "dark" }: Readonly<{ tone?: "dark" | "light" }>) {
  const dark = tone === "dark";
  return (
    <section
      className={`relative w-full overflow-hidden ${
        dark ? "bg-gradient-to-b from-lux-green to-[#06284d]" : "bg-lux-cream-3"
      }`}
    >
      <div className={`relative px-4 py-[clamp(24px,7vw,40px)] text-center ${dark ? "text-white" : "text-lux-green-ink"}`}>
        <p className="font-display text-[clamp(14px,4vw,18px)] font-bold tracking-[0.04em]">
          東京・神奈川を中心に<span className={`relative mx-1 inline-block text-[1.25em] ${dark ? "text-lux-gold-light" : "text-lux-gold-deep"}`}>関東一円<span aria-hidden="true" className="absolute -bottom-[2px] left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-lux-gold-deep via-lux-gold-light to-lux-gold-deep" /></span>
        </p>
        <p className="mt-[clamp(10px,2.8vw,15px)] font-display font-black leading-none">
          <span className={`text-[clamp(17px,4.8vw,23px)] ${dark ? "[text-shadow:0_2px_8px_rgba(0,0,0,0.35)]" : ""}`}>出張費用・お見積り</span>
          <span className={`ml-2 inline-block text-[clamp(46px,13vw,64px)] ${dark ? "text-lux-gold-light" : "text-lux-gold-deep"}`}>0</span>
          <span className={`inline-block text-[clamp(20px,5.6vw,27px)] ${dark ? "text-lux-gold-light" : "text-lux-gold-deep"}`}>円</span>
        </p>

        {/* glass card with double gold frame — data-cta-section lives HERE (the
            block that actually contains the buttons) so the sticky bar only
            hides once real, tappable CTAs are on screen */}
        <div data-cta-section className="mx-auto mt-[clamp(14px,3.8vw,20px)] max-w-[460px] rounded-[18px] border border-lux-green/15 bg-white p-px">
          <div className="relative rounded-[16px] bg-white px-4 pb-5 pt-4 text-lux-green-ink">

            <p className="font-display text-[clamp(15px,4.3vw,19px)] font-black">
              お電話1本！まずはご相談を
            </p>
            <p aria-hidden="true" className="mt-1 select-none text-[10px] leading-none tracking-[0.3em] text-lux-gold-deep">
              ―◆―
            </p>

            {/* social-proof recap at the decision point (verified figures) */}
            <p className="mt-2 text-center text-[clamp(10px,2.8vw,12.5px)] font-bold leading-[1.7] text-lux-green-ink">
              <span className="whitespace-nowrap">Googleクチコミ <span className="text-lux-gold-deep">★</span>5.0／167件</span>
              <span aria-hidden="true" className="mx-[3px] text-lux-gold-deep">｜</span>
              <span className="whitespace-nowrap">ご相談実績2,000件以上</span>
            </p>

            <ul className="mx-auto mt-3 w-fit divide-y divide-lux-green/10 text-left">
              {["最短即日対応！緊急時もご相談ください", "お見積り確定後の追加費用なし", "クレジットカードご利用可能"].map((t) => (
                <li key={t} className="flex items-start gap-2 py-[5px] text-[14px] font-bold leading-[1.7]">
                  <span aria-hidden="true" className="mt-[3px] grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full bg-gradient-to-br from-lux-gold-light via-lux-gold to-lux-gold-deep text-[9px] font-black text-white shadow-[0_2px_5px_rgba(156,119,41,0.5)] ring-1 ring-white/70">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            {/* reassurance microcopy just before the call action */}
            <p className="mt-3 text-center text-[14px] font-medium leading-[1.7] text-lux-green-ink/80 [word-break:auto-phrase]">
              うまく状況をご説明できなくても大丈夫です。お話を伺いながら丁寧にご案内します。
              <span className="mt-[2px] block font-bold text-lux-green-ink">無理な営業は一切いたしません。ご相談だけでも歓迎です。</span>
            </p>

            <a
              href={PHONE_TEL}
              data-gtm="cta_tel_section"
              className="mcy-cta-nudge relative mt-4 flex min-h-[clamp(82px,20vw,96px)] items-center justify-center gap-2 overflow-hidden rounded-full mcy-contact-phone px-3 py-[clamp(9px,2.7vw,13px)] text-white transition-[filter] active:brightness-95"
            >
              <McyCtaShine />
              <span className="relative grid h-[clamp(28px,7.8vw,40px)] w-[clamp(28px,7.8vw,40px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
                <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" fill="#07315f" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              <span className="relative min-w-0 text-center leading-none">
                <span className="block whitespace-nowrap text-[clamp(11px,2.9vw,13px)] font-black">
                  お電話で今すぐ相談する
                </span>
                <span className="mt-[4px] block whitespace-nowrap text-[clamp(19px,5.5vw,27px)] font-black tracking-[-0.01em] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">
                  {PHONE_DISPLAY}
                </span>
                <span className="mt-[4px] block text-[12px] leading-5 font-bold">
                  9:00〜21:00 年中無休｜タップで電話
                </span>
              </span>
              <span aria-hidden="true" className="grid h-[clamp(18px,5vw,24px)] w-[clamp(18px,5vw,24px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
                <svg viewBox="0 0 24 24" className="h-[60%] w-[60%]" fill="none" stroke="#07315f" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* gold-framed like the pricing LINE CTA so it reads co-equal with
                the phone pill (design-team review: LINE was sinking next to it) */}
            <div
              style={{ animationDelay: "0.5s" }}
              className="mcy-cta-nudge mt-3 rounded-full mcy-contact-line p-px"
            >
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-gtm="cta_line_section"
              className="relative flex min-h-[clamp(82px,20vw,96px)] items-center justify-center gap-2 overflow-hidden rounded-full mcy-contact-line px-3 py-[clamp(9px,2.7vw,13px)] text-white transition-[filter] active:brightness-90"
            >
              <McyCtaShine />
              <span className="relative grid h-[clamp(26px,7.4vw,38px)] w-[clamp(26px,7.4vw,38px)] shrink-0 place-items-center rounded-full bg-white text-[clamp(6px,1.7vw,8.5px)] font-black text-[#087f36] shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
                LINE
              </span>
              <span className="relative min-w-0 text-center leading-none">
                <span className="block whitespace-nowrap text-[clamp(14px,4vw,19px)] font-black [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
                  LINEで無料相談する
                </span>
                <span className="mt-[4px] block text-[12px] leading-5 font-bold">
                  写真なしでも相談可｜24時間受付
                </span>
              </span>
              <span aria-hidden="true" className="grid h-[clamp(18px,5vw,24px)] w-[clamp(18px,5vw,24px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
                <svg viewBox="0 0 24 24" className="h-[60%] w-[60%]" fill="none" stroke="#06a32a" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            </div>

            {/* what happens after the LINE tap */}
            <div className="mt-3">
              <LineSteps />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
