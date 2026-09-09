import { Fragment } from "react";
import { LINE_URL } from "./contact";
import { LineCta, PhoneCta } from "./CtaButton";
import { LeafSprig, LuxHeading } from "./McyLux";

/**
 * Entry price + 6 case reports (real before/after photos) + concept CTA.
 * Green×gold luxury theme reproducing design mockups (4)(5)(6)(7): cream ground
 * with gold glow + dot texture, gold double-framed entry card with ribbon tab,
 * deep-emerald case headers, white-framed before/after photos, gold-diamond
 * dividers, crimson prices. All figures verified against content.json.
 */

import { CASES } from "./pricing-data";
export { CASES } from "./pricing-data";

function WorkList({ items }: Readonly<{ items: string[] }>) {
  return (
    <ul className="mt-[6px] grid grid-cols-2 gap-[5px]">
      {items.map((w) => (
        <li
          key={w}
          className="flex items-start gap-[5px] rounded-[8px] border border-lux-gold/25 bg-lux-cream px-[7px] py-[6px] text-[14px] font-medium leading-[1.55] text-lux-green-ink/90"
        >
          <span
            aria-hidden="true"
            className="mt-[2px] grid h-[13px] w-[13px] shrink-0 place-items-center rounded-full bg-gradient-to-b from-lux-green-2 to-lux-green text-white shadow-[0_1px_3px_rgba(7,49,95,0.4)]"
          >
            <svg viewBox="0 0 24 24" className="h-[8px] w-[8px]" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.5l4.5 4.5L19 7" />
            </svg>
          </span>
          <span>{w}</span>
        </li>
      ))}
    </ul>
  );
}

/** thin hairline + gold diamond divider between case cards */
function CaseDivider() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center gap-[8px] py-[2px]">
      <span className="h-px w-[clamp(48px,20vw,100px)] bg-gradient-to-r from-transparent to-lux-gold/60" />
      <span className="h-[6px] w-[6px] rotate-45 border border-lux-gold-deep bg-lux-gold-light" />
      <span className="h-px w-[clamp(48px,20vw,100px)] bg-gradient-to-l from-transparent to-lux-gold/60" />
    </div>
  );
}

export default function McyPricing() {
  return (
    <section
      id="ryokin"
      data-section="pricing"
      className="relative w-full scroll-mt-[70px] overflow-hidden bg-gradient-to-b from-lux-cream-2 to-lux-cream px-4 py-[clamp(28px,8vw,52px)]"
    >
      {/* layered ground: soft gold glows + micro dot texture + foliage */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-[120px] -top-[80px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(200,162,78,0.16),transparent_65%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-[140px] top-[34%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(22,104,174,0.1),transparent_65%)]" />
      <div aria-hidden="true" className="lux-dots pointer-events-none absolute inset-0 opacity-50" />
      <LeafSprig className="left-[-10px] top-[clamp(60px,16vw,110px)] h-[clamp(56px,15vw,84px)] w-auto opacity-55" />
      <LeafSprig flip className="right-[-10px] top-[8px] h-[clamp(52px,14vw,78px)] w-auto opacity-55" />

      <div className="relative">
        <LuxHeading kicker="料金の目安が分かる" watermark="PRICE">
          実績・<span className="text-lux-green">参考料金</span>
        </LuxHeading>
        <p className="mx-auto mt-3 max-w-[440px] text-center text-[14px] font-medium leading-[1.8] text-lux-green-ink">
          ※汚染範囲、臭気の強さ、残置物量、体液付着状況、建物構造により金額は変動します。正式な金額は必ず現地確認後にお見積りします。現地確認後、通常30分〜1時間でお見積りをご提示します。
        </p>

        {/* entry price — glass card in gold double frame + gold ribbon tab */}
        <div className="relative mx-auto mt-[clamp(22px,5.8vw,32px)] max-w-[460px]">
          <div className="rounded-[22px] border border-lux-green/15 bg-white p-px">
            <div className="relative rounded-[20px] bg-white px-4 pb-5 pt-[clamp(24px,6.4vw,30px)] text-center">

              <p className="font-display text-[clamp(13px,3.7vw,17px)] font-bold tracking-[0.14em] text-lux-green-ink">
                特殊清掃の参考料金
              </p>
              <span aria-hidden="true" className="mx-auto mt-[6px] block h-[3px] w-[44px] rounded-full bg-gradient-to-r from-lux-gold-light to-lux-gold-deep" />

              {/* honest two-tier anchor — same-rank labels */}
              <div className="mt-3 flex flex-col gap-[10px] text-left">
                <div className="flex flex-wrap items-center justify-between gap-2 rounded-[12px] border border-lux-gold/25 bg-lux-cream px-3 py-[8px]">
                  <span className="text-[15px] font-bold leading-[1.4] text-lux-green-ink [word-break:auto-phrase]">
                    空間除菌・消毒のみ
                  </span>
                  <span className="shrink-0 whitespace-nowrap font-display font-black leading-none text-lux-green">
                    <span className="text-[clamp(30px,8.5vw,42px)] tracking-[-0.01em] [text-shadow:0_2px_0_rgba(255,255,255,0.9)]">
                      50,000
                    </span>
                    <span className="ml-[2px] text-[clamp(13px,3.6vw,17px)]">円〜</span>
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 rounded-[12px] border-2 border-lux-green/25 bg-gradient-to-br from-lux-cream to-lux-gold-light/50 px-3 py-[10px] shadow-[0_3px_10px_rgba(7,49,95,0.1)]">
                  <span className="text-[15px] font-bold leading-[1.4] text-lux-green-ink [word-break:auto-phrase]">
                    体液除去を伴う
                    <br />
                    特殊清掃
                  </span>
                  <span className="shrink-0 whitespace-nowrap font-display font-black leading-none text-lux-green">
                    <span className="text-[clamp(38px,10.5vw,52px)] tracking-[-0.01em] [text-shadow:0_2px_0_rgba(255,255,255,0.9),0_5px_14px_rgba(7,49,95,0.16)]">
                      150,000
                    </span>
                    <span className="ml-[2px] text-[clamp(15px,4.2vw,20px)]">円〜</span>
                  </span>
                </div>
              </div>

              <div className="mx-auto mt-3 max-w-[380px]">
                <p className="flex items-start justify-center gap-[7px] rounded-[12px] border border-lux-gold/45 bg-gradient-to-b from-white to-lux-gold-light/50 px-3 py-[9px] text-left text-[14px] font-black leading-[1.7] text-lux-green-ink shadow-[0_2px_8px_rgba(200,162,78,0.18)]">
                  <span
                    aria-hidden="true"
                    className="mt-[3px] grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full bg-gradient-to-b from-lux-gold to-lux-gold-deep text-[9.5px] text-white shadow-[0_1px_3px_rgba(156,119,41,0.5)]"
                  >
                    ✓
                  </span>
                  <span>お見積り後の追加費用はありません（クレジットカード可）</span>
                </p>
              </div>
            </div>
          </div>
          {/* ribbon tab */}
          <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-lux-green-2 to-lux-green px-[clamp(20px,5.5vw,28px)] py-[clamp(5px,1.4vw,7px)] text-[14px] font-black tracking-[0.16em] text-white ring-1 ring-lux-gold/60 [clip-path:polygon(0_0,100%_0,92%_50%,100%_100%,0_100%,8%_50%)] [filter:drop-shadow(0_3px_6px_rgba(7,49,95,0.4))]">
            まずは目安
          </span>
        </div>

        {/* six cases */}
        <div className="mx-auto mt-[clamp(18px,5vw,26px)] flex max-w-[460px] flex-col gap-[clamp(10px,2.8vw,14px)]">
          {CASES.map((c, i) => (
            <Fragment key={c.title}>
              {i > 0 && <CaseDivider />}
              {i === 3 && (
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-gtm="cta_line_cases_mid"
                  className="mx-auto flex min-h-[44px] w-full max-w-[380px] items-center justify-center gap-2 rounded-full bg-white px-4 text-center text-[15px] font-bold text-lux-green-ink shadow-[0_2px_8px_rgba(6,163,42,0.12)] ring-1 ring-[#06a32a]/40"
                >
                  <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-[#087f36] text-[7px] font-black text-white ring-1 ring-[#06a32a]/30">
                    LINE
                  </span>
                  <span className="[word-break:auto-phrase]">似た状況ですか？ 状況を伝えて費用を相談する<span className="whitespace-nowrap">（無料・24時間）</span></span>
                </a>
              )}
              <article id={`case-${i + 1}`} className="scroll-mt-[80px] overflow-hidden rounded-[18px] border border-lux-border bg-white">
                {/* header band: deep emerald gradient + white CASE chip + shine */}
                <div className="relative flex flex-wrap items-center gap-x-2 gap-y-[5px] overflow-hidden bg-gradient-to-r from-[#07315f] via-lux-green to-lux-green-2 px-4 py-[clamp(9px,2.6vw,13px)]">
                  <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.14)_48%,transparent_62%)]" />
                  <span className="relative shrink-0 rounded-[5px] bg-white px-2 py-[3px] font-display text-[14px] font-black tracking-[0.1em] text-lux-green shadow-[0_2px_5px_rgba(0,0,0,0.2)] ring-1 ring-lux-gold/50">
                    CASE {String(i + 1).padStart(2, "0")}
                  </span>
                  {i >= 4 && (
                    <span className="relative shrink-0 whitespace-nowrap rounded-[5px] bg-gradient-to-b from-lux-gold to-lux-gold-deep px-[6px] py-[3px] text-[clamp(8px,2.3vw,10px)] font-black text-white shadow-[0_2px_5px_rgba(156,119,41,0.4)]">
                      遺品整理費を含む総額
                    </span>
                  )}
                  {/* the title always gets its own full-width row: sharing one line with
                      the CASE chip (and, on 05/06, the gold badge) squeezed it into a
                      3-line column and made those two bands taller than the rest. A fixed
                      label row + a one-line title row keeps every band the same height. */}
                  <h3 className="relative min-w-0 basis-full text-[clamp(12.5px,3.5vw,15.5px)] font-black leading-snug text-white [word-break:auto-phrase]">
                    {c.title}
                  </h3>
                </div>

                <div className="px-4 pb-4 pt-3">
                  {/* before/after — white-framed photos + label chips + green arrow */}
                  <div className="relative grid grid-cols-2 gap-2">
                    {[
                      { src: c.before, label: "施工前", en: "BEFORE", tone: "bg-gradient-to-b from-[#263a52] to-[#061e38]" },
                      { src: c.after, label: "施工後", en: "AFTER", tone: "bg-gradient-to-b from-lux-green-2 to-lux-green" },
                    ].map((p) => (
                      <figure key={p.en} className="relative">
                        <img
                          src={p.src}
                          alt={`${c.title} ${p.label}`}
                          width={300}
                          height={400}
                          loading="lazy"
                          decoding="async"
                          className="aspect-[4/3] w-full rounded-[10px] border-[3px] border-white object-cover shadow-[0_4px_14px_rgba(7,49,95,0.22)]"
                        />
                        <figcaption
                          className={`absolute left-[6px] top-[6px] rounded-[5px] ${p.tone} px-[7px] py-[3px] leading-none text-white shadow-[0_2px_6px_rgba(7,49,95,0.35)] ring-1 ring-white/70`}
                        >
                          <span className="block text-[clamp(8.5px,2.4vw,10.5px)] font-black">{p.label}</span>
                          <span className="mt-[2px] block text-[clamp(5.5px,1.6vw,7px)] font-bold tracking-[0.14em] opacity-90">{p.en}</span>
                        </figcaption>
                      </figure>
                    ))}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-1/2 z-[1] grid h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-b from-lux-green-2 to-lux-green shadow-[0_2px_8px_rgba(7,49,95,0.45)] ring-2 ring-white"
                    >
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M1.5 1l3.5 4-3.5 4M7 1l3.5 4L7 9" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>

                  {c.desc && (
                    <p className="mt-3 text-[15px] font-medium leading-[1.85] text-lux-green-ink/90 [word-break:auto-phrase]">
                      {c.desc}
                    </p>
                  )}
                  {c.reasons && (
                    <div className="mt-3 rounded-[12px] border border-lux-gold/30 bg-gradient-to-br from-lux-cream to-lux-gold-light/40 px-3 py-[10px]">
                      <p className="text-[14px] font-black text-lux-green">
                        ▼価格に幅が出る場合の主な理由
                      </p>
                      <ul className="mt-1 flex flex-col gap-[3px]">
                        {c.reasons.map((r) => (
                          <li key={r} className="flex items-start gap-[5px] border-b border-lux-gold/15 pb-[3px] text-[14px] font-medium leading-[1.7] text-lux-green-ink/85 last:border-b-0 last:pb-0">
                            <span className="shrink-0 text-lux-gold-deep">・</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-3">
                    <p className="flex items-center gap-[7px] text-[15px] font-black text-lux-green-ink">
                      <span aria-hidden="true" className="h-[15px] w-[4px] shrink-0 rounded-full bg-gradient-to-b from-lux-green-2 to-lux-green" />
                      作業内容
                    </p>
                    {c.workGroups ? (
                      <div className="mt-[6px] flex flex-col gap-[10px]">
                        {c.workGroups.map((g) => (
                          <div key={g.label}>
                            <p className="inline-flex items-center gap-[6px] rounded-full bg-lux-cream px-[11px] py-[3px] text-[14px] font-bold text-lux-green ring-1 ring-lux-gold/40">
                              <span aria-hidden="true" className="h-[5px] w-[5px] shrink-0 rotate-45 bg-lux-gold-deep" />
                              <span>{g.label}</span>
                            </p>
                            <WorkList items={g.items} />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <WorkList items={c.work} />
                    )}
                  </div>

                  {/* price row — right-aligned, crimson price, gold underline */}
                  <div className="mt-3 flex flex-wrap items-end justify-between gap-x-3 gap-y-1 border-t border-lux-gold/40 pt-3">
                    <div className="min-w-0">
                      {c.priceNotes.map((n) => (
                        <p key={n} className="text-[14px] font-medium leading-[1.7] text-lux-green-ink">
                          {n}
                        </p>
                      ))}
                    </div>
                    <p className="ml-auto whitespace-nowrap border-b-[3px] border-lux-gold pb-[3px] leading-none">
                      <span className="mr-1 text-[14px] font-black text-lux-green-ink">参考価格</span>
                      <span className="font-display text-[clamp(26px,7.2vw,35px)] font-black tracking-[-0.01em] text-lux-crimson">
                        {c.price}
                      </span>
                      <span className="text-[clamp(12px,3.4vw,15px)] font-black text-lux-green-ink">円</span>
                    </p>
                  </div>
                </div>
              </article>
            </Fragment>
          ))}
        </div>

        {/* closing concept CTA — gold-framed cream panel + LINE pill + phone pill */}
        <div data-cta-section className="mx-auto mt-[clamp(20px,5.4vw,30px)] max-w-[460px] rounded-[20px] border border-lux-green/15 bg-white p-px">
          <div className="rounded-[18px] bg-white px-4 py-[clamp(15px,4.2vw,22px)]">
            <p className="flex items-center justify-center gap-[10px] text-center font-display text-[clamp(13px,3.7vw,16px)] font-bold text-lux-green-ink">
              <span aria-hidden="true" className="h-px w-[clamp(14px,4.5vw,26px)] shrink-0 bg-gradient-to-r from-transparent to-lux-gold" />
              <span>あなたのケースの概算が知りたい方へ</span>
              <span aria-hidden="true" className="h-px w-[clamp(14px,4.5vw,26px)] shrink-0 bg-gradient-to-l from-transparent to-lux-gold" />
            </p>
            <p className="mx-auto mt-2 max-w-[400px] text-center text-[14px] font-medium leading-[1.8] text-lux-green-ink/85 [word-break:auto-phrase]">
              特殊清掃は50,000円〜。状況により大きく変わるため、まず現場の状況をお聞かせください。写真がなくてもご相談いただけます。お見積り確定後の追加費用はありません。金額にご納得いただいてから作業を開始します。
            </p>

            <div className="mt-3">
              <LineCta gtm="cta_line_pricing" top="写真なしでも相談できる" main="LINEで無料相談する" sub="概算のご案内｜24時間受付" />
            </div>

            <p className="mt-[10px] text-center text-[14px] font-medium leading-[1.8] text-lux-green-ink [word-break:auto-phrase]">
              まずは現場の市区町村と、いまお困りのことをお知らせください。写真や間取りは、分かる範囲で大丈夫です。写真を撮るために室内へ入る必要はありません。
            </p>

            {/* phone — kept one step quieter than LINE here (md, no pulse): the full
                red phone CTA is the closing section's job, and two of them ~350px
                apart read as CTA noise. Tracking (cta_tel_pricing) is unchanged. */}
            <div className="mt-[10px]">
              <PhoneCta size="md" gtm="cta_tel_pricing" sub="9:00〜21:00 年中無休・最短即日で現地確認" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
