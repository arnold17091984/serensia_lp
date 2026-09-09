import { LineCta, PhoneCta } from "./CtaButton";
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
              <span className="whitespace-nowrap">Googleクチコミ <span className="text-lux-gold-deep">★</span>5.0／191件</span>
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

            {/* the same two buttons as the FV (one design language, T-99) */}
            <div className="mt-4 flex flex-col gap-[10px]">
              <PhoneCta gtm="cta_tel_section" top="お電話で今すぐ相談する" sub="受付 9:00〜21:00 年中無休" />
              <LineCta gtm="cta_line_section" top="写真だけでも相談できる" main="LINEで無料相談する" sub="写真なしでも相談可｜24時間受付" />
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
