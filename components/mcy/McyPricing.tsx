import { Fragment } from "react";
import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from "./McyHeader";
import { GoldDiamond, LeafSprig, LuxHeading, Sparkle } from "./McyLux";

/**
 * Entry price + 6 case reports (real before/after photos) + concept CTA.
 * Green×gold luxury theme reproducing design mockups (4)(5)(6)(7): cream ground
 * with gold glow + dot texture, gold double-framed entry card with ribbon tab,
 * deep-emerald case headers, white-framed before/after photos, gold-diamond
 * dividers, crimson prices. All figures verified against content.json.
 */

interface CaseItem {
  title: string;
  price: string;
  desc?: string;
  reasons?: string[];
  work: string[];
  workGroups?: { label: string; items: string[] }[];
  priceNotes: string[];
  before: string;
  after: string;
}

const CASES: CaseItem[] = [
  {
    title: "トイレ｜孤独死の特殊清掃",
    price: "150,000",
    reasons: ["発見までの日数", "便器脱着の有無", "臭気の強さ", "床下まで体液が浸透しているか"],
    work: ["体液・汚染物の除去", "床・壁・便器まわりの特殊洗浄", "除菌・消毒処理", "臭気対策（薬剤＋機械脱臭）", "必要に応じて便器脱着・床材撤去"],
    priceNotes: [],
    before: "/img/jisseki_3b.jpg",
    after: "/img/jisseki_3a.jpg",
  },
  {
    title: "浴室｜孤独死の特殊清掃",
    price: "200,000",
    reasons: ["浴槽下や排水管への汚染", "腐敗臭の残留レベル", "建材への染み込み具合", "解体作業の有無"],
    work: ["浴槽内・床・排水口の体液除去", "壁面・天井の特殊洗浄", "除菌・消毒", "強力消臭処理", "必要に応じて浴槽パン・床材撤去"],
    priceNotes: [],
    before: "/img/jisseki_4b.jpg",
    after: "/img/jisseki_4a.jpg",
  },
  {
    title: "事件現場｜玄関前の血液浸透・飛散除去",
    price: "220,000",
    desc: "玄関前に血液が飛び散り、床面へ浸透している状態。棚・下駄箱・ドアにも血痕が付着。臭気レベルは中程度（通常レベル）。",
    work: ["液付着物の除去", "床面の浸透部洗浄処理", "棚・下駄箱・ドアの血液除去", "除菌・消毒作業", "臭気対策（薬剤処理）"],
    priceNotes: ["※汚染範囲・床材の種類・浸透深度により変動"],
    before: "/img/jisseki_2b.jpg",
    after: "/img/jisseki_2a.jpg",
  },
  {
    title: "畳の上での孤独死｜腐敗臭が強いケース",
    price: "330,000",
    desc: "和室の畳上で亡くなられていたケース。発見までに時間が経過しており、体液が畳・床下まで浸透。室内全体に強い腐敗臭が広がっている状態。",
    work: ["畳撤去・汚染物の回収処分", "体液付着部の除去", "床面の特殊洗浄", "除菌・消毒作業", "強力消臭処理"],
    priceNotes: ["※畳撤去・特殊清掃・除菌消臭を含む"],
    before: "/img/jisseki_1b.jpg",
    after: "/img/jisseki_1a.jpg",
  },
  {
    title: "孤独死｜腐敗臭＋タバコ臭＋残置物撤去",
    price: "380,000",
    desc: "腐敗臭レベルは中程度（普通）だが長年の生活によるタバコ臭も重なって残留。家具・生活用品などの残置物あり。一部残置物にも体液が付着している状態。",
    work: ["体液付着部の除去", "床・壁の特殊洗浄", "除菌・消毒作業", "消臭処理", "体液が付着した残置物の分別・撤去・処分", "室内残置物の撤去・処分"],
    priceNotes: ["・特殊清掃：180,000円（※体液除去、除菌・消毒、消臭作業）", "・遺品整理(1DK)：200,000円（※体液付着物を含む）"],
    before: "/img/jisseki_6b.jpg",
    after: "/img/jisseki_6a.jpg",
  },
  {
    title: "孤独死｜空間除菌消毒のみ＋遺品整理",
    price: "460,000",
    desc: "管理会社の判断により、本格的な特殊清掃（床剥がし・体液除去等）は不要となり、体液付着箇所を含む空間全体の除菌・消毒のみ実施。その後、遺品整理をご依頼いただいたケース。",
    work: [],
    workGroups: [
      { label: "特殊清掃（簡易対応）", items: ["体液付着箇所を含む空間除菌・消毒", "室内全体の簡易消臭・衛生処理"] },
      { label: "遺品整理", items: ["室内残置物の仕分け", "不用品の搬出・処分", "貴重品探索"] },
    ],
    priceNotes: ["・特殊清掃：50,000円（※空間除菌消毒のみ）", "・遺品整理(2LDK)：410,000円"],
    before: "/img/jisseki_5b.jpg",
    after: "/img/jisseki_5a.jpg",
  },
];

function WorkList({ items }: Readonly<{ items: string[] }>) {
  return (
    <ul className="mt-[6px] grid grid-cols-2 gap-[5px]">
      {items.map((w) => (
        <li
          key={w}
          className="flex items-start gap-[5px] rounded-[8px] border border-lux-gold/25 bg-lux-cream px-[7px] py-[6px] text-[clamp(9.5px,2.7vw,12px)] font-medium leading-[1.55] text-lux-green-ink/90"
        >
          <span
            aria-hidden="true"
            className="mt-[2px] grid h-[13px] w-[13px] shrink-0 place-items-center rounded-full bg-gradient-to-b from-lux-green-2 to-lux-green text-white shadow-[0_1px_3px_rgba(18,61,40,0.4)]"
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
      className="relative w-full scroll-mt-[70px] overflow-hidden bg-gradient-to-b from-lux-cream to-lux-cream-2 px-4 py-[clamp(28px,8vw,52px)]"
    >
      {/* layered ground: soft gold glows + micro dot texture + foliage */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-[120px] -top-[80px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(200,162,78,0.16),transparent_65%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-[140px] top-[34%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(29,90,58,0.1),transparent_65%)]" />
      <div aria-hidden="true" className="lux-dots pointer-events-none absolute inset-0 opacity-50" />
      <LeafSprig className="left-[-10px] top-[clamp(60px,16vw,110px)] h-[clamp(56px,15vw,84px)] w-auto opacity-55" />
      <LeafSprig flip className="right-[-10px] top-[8px] h-[clamp(52px,14vw,78px)] w-auto opacity-55" />

      <div className="relative">
        <LuxHeading kicker="料金の目安が分かる" watermark="PRICE">
          実績・<span className="text-lux-green">参考料金</span>
        </LuxHeading>
        <p className="mx-auto mt-3 max-w-[440px] text-center text-[clamp(9.5px,2.7vw,12px)] font-medium leading-[1.8] text-lux-green-ink/70">
          ※汚染範囲、臭気の強さ、残置物量、体液付着状況、建物構造により金額は変動します。正式な金額は必ず現地確認後にお見積りします。現地確認後、通常30分〜1時間でお見積りをご提示します。
        </p>

        {/* entry price — glass card in gold double frame + gold ribbon tab */}
        <div className="relative mx-auto mt-[clamp(22px,5.8vw,32px)] max-w-[460px]">
          <div className="rounded-[22px] bg-gradient-to-br from-lux-gold-light via-lux-gold to-lux-gold-deep p-[2px] shadow-[0_12px_30px_rgba(18,61,40,0.16)]">
            <div className="relative rounded-[20px] bg-white px-4 pb-5 pt-[clamp(24px,6.4vw,30px)] text-center">
              <span aria-hidden="true" className="pointer-events-none absolute inset-[6px] rounded-[15px] border border-lux-gold/40" />

              <p className="font-display text-[clamp(13px,3.7vw,17px)] font-bold tracking-[0.14em] text-lux-green-ink">
                特殊清掃の参考料金
              </p>
              <span aria-hidden="true" className="mx-auto mt-[6px] block h-[3px] w-[44px] rounded-full bg-gradient-to-r from-lux-gold-light to-lux-gold-deep" />

              {/* honest two-tier anchor — same-rank labels */}
              <div className="mt-3 flex flex-col gap-[10px] text-left">
                <div className="flex items-center justify-between gap-2 rounded-[12px] border border-lux-gold/25 bg-lux-cream px-3 py-[8px]">
                  <span className="text-[clamp(11px,3.1vw,13.5px)] font-bold leading-[1.4] text-lux-green-ink [word-break:auto-phrase]">
                    空間除菌・消毒のみ
                  </span>
                  <span className="shrink-0 whitespace-nowrap font-display font-black leading-none text-lux-green">
                    <span className="text-[clamp(30px,8.5vw,42px)] tracking-[-0.01em] [text-shadow:0_2px_0_rgba(255,255,255,0.9)]">
                      50,000
                    </span>
                    <span className="ml-[2px] text-[clamp(13px,3.6vw,17px)]">円〜</span>
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 rounded-[12px] border-2 border-lux-green/25 bg-gradient-to-br from-lux-cream to-lux-gold-light/50 px-3 py-[10px] shadow-[0_3px_10px_rgba(18,61,40,0.1)]">
                  <span className="text-[clamp(11px,3.1vw,13.5px)] font-bold leading-[1.4] text-lux-green-ink [word-break:auto-phrase]">
                    体液除去を伴う
                    <br />
                    特殊清掃
                  </span>
                  <span className="shrink-0 whitespace-nowrap font-display font-black leading-none text-lux-green">
                    <span className="text-[clamp(38px,10.5vw,52px)] tracking-[-0.01em] [text-shadow:0_2px_0_rgba(255,255,255,0.9),0_5px_14px_rgba(18,61,40,0.16)]">
                      150,000
                    </span>
                    <span className="ml-[2px] text-[clamp(15px,4.2vw,20px)]">円〜</span>
                  </span>
                </div>
              </div>

              <div className="mx-auto mt-3 max-w-[380px]">
                <p className="flex items-start justify-center gap-[7px] rounded-[12px] border border-lux-gold/45 bg-gradient-to-b from-white to-lux-gold-light/50 px-3 py-[9px] text-left text-[clamp(10.5px,2.9vw,13px)] font-black leading-[1.7] text-lux-green-ink shadow-[0_2px_8px_rgba(200,162,78,0.18)]">
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
          <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-lux-green-2 to-lux-green px-[clamp(20px,5.5vw,28px)] py-[clamp(5px,1.4vw,7px)] text-[clamp(10px,2.8vw,12.5px)] font-black tracking-[0.16em] text-white ring-1 ring-lux-gold/60 [clip-path:polygon(0_0,100%_0,92%_50%,100%_100%,0_100%,8%_50%)] [filter:drop-shadow(0_3px_6px_rgba(18,61,40,0.4))]">
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
                  className="mx-auto flex min-h-[44px] w-full max-w-[380px] items-center justify-center gap-2 rounded-full bg-white px-4 text-center text-[clamp(10.5px,3vw,13px)] font-bold text-lux-green-ink shadow-[0_2px_8px_rgba(6,163,42,0.12)] ring-1 ring-[#06a32a]/40"
                >
                  <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-[#06c755] text-[7px] font-black text-white ring-1 ring-[#06a32a]/30">
                    LINE
                  </span>
                  <span className="[word-break:auto-phrase]">似た状況ですか？ 写真を送って概算を聞く（無料・24時間）</span>
                </a>
              )}
              <article className="overflow-hidden rounded-[18px] border border-lux-gold/30 bg-white shadow-[0_10px_30px_rgba(18,61,40,0.14)]">
                {/* header band: deep emerald gradient + white CASE chip + shine */}
                <div className="relative flex flex-wrap items-center gap-x-2 gap-y-[5px] overflow-hidden bg-gradient-to-r from-[#0c2c1c] via-lux-green to-lux-green-2 px-4 py-[clamp(9px,2.6vw,13px)]">
                  <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.14)_48%,transparent_62%)]" />
                  <span className="relative shrink-0 rounded-[5px] bg-white px-2 py-[3px] font-display text-[clamp(9px,2.5vw,11px)] font-black tracking-[0.1em] text-lux-green shadow-[0_2px_5px_rgba(0,0,0,0.2)] ring-1 ring-lux-gold/50">
                    CASE {String(i + 1).padStart(2, "0")}
                  </span>
                  {i >= 4 && (
                    <span className="relative shrink-0 whitespace-nowrap rounded-[5px] bg-gradient-to-b from-lux-gold to-lux-gold-deep px-[6px] py-[3px] text-[clamp(8px,2.3vw,10px)] font-black text-white shadow-[0_2px_5px_rgba(156,119,41,0.4)]">
                      遺品整理費を含む総額
                    </span>
                  )}
                  <h3 className="relative min-w-0 flex-1 text-[clamp(12.5px,3.5vw,15.5px)] font-black leading-snug text-white [word-break:auto-phrase]">
                    {c.title}
                  </h3>
                </div>

                <div className="px-4 pb-4 pt-3">
                  {/* before/after — white-framed photos + label chips + green arrow */}
                  <div className="relative grid grid-cols-2 gap-2">
                    {[
                      { src: c.before, label: "施工前", en: "BEFORE", tone: "bg-gradient-to-b from-[#2a3a30] to-[#0c1a12]" },
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
                          className="aspect-[4/3] w-full rounded-[10px] border-[3px] border-white object-cover shadow-[0_4px_14px_rgba(18,61,40,0.22)]"
                        />
                        <figcaption
                          className={`absolute left-[6px] top-[6px] rounded-[5px] ${p.tone} px-[7px] py-[3px] leading-none text-white shadow-[0_2px_6px_rgba(18,61,40,0.35)] ring-1 ring-white/70`}
                        >
                          <span className="block text-[clamp(8.5px,2.4vw,10.5px)] font-black">{p.label}</span>
                          <span className="mt-[2px] block text-[clamp(5.5px,1.6vw,7px)] font-bold tracking-[0.14em] opacity-90">{p.en}</span>
                        </figcaption>
                      </figure>
                    ))}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-1/2 z-[1] grid h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-b from-lux-green-2 to-lux-green shadow-[0_2px_8px_rgba(18,61,40,0.45)] ring-2 ring-white"
                    >
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M1.5 1l3.5 4-3.5 4M7 1l3.5 4L7 9" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>

                  {c.desc && (
                    <p className="mt-3 text-[clamp(10.5px,3vw,13px)] font-medium leading-[1.85] text-lux-green-ink/90 [word-break:auto-phrase]">
                      {c.desc}
                    </p>
                  )}
                  {c.reasons && (
                    <div className="mt-3 rounded-[12px] border border-lux-gold/30 bg-gradient-to-br from-lux-cream to-lux-gold-light/40 px-3 py-[10px]">
                      <p className="text-[clamp(10px,2.8vw,12.5px)] font-black text-lux-green">
                        ▼価格に幅が出る場合の主な理由
                      </p>
                      <ul className="mt-1 flex flex-col gap-[3px]">
                        {c.reasons.map((r) => (
                          <li key={r} className="flex items-start gap-[5px] border-b border-lux-gold/15 pb-[3px] text-[clamp(10px,2.8vw,12.5px)] font-medium leading-[1.7] text-lux-green-ink/85 last:border-b-0 last:pb-0">
                            <span className="shrink-0 text-lux-gold-deep">・</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-3">
                    <p className="flex items-center gap-[7px] text-[clamp(11px,3.1vw,13.5px)] font-black text-lux-green-ink">
                      <span aria-hidden="true" className="h-[15px] w-[4px] shrink-0 rounded-full bg-gradient-to-b from-lux-green-2 to-lux-green" />
                      作業内容
                    </p>
                    {c.workGroups ? (
                      <div className="mt-[6px] flex flex-col gap-[10px]">
                        {c.workGroups.map((g) => (
                          <div key={g.label}>
                            <p className="inline-flex items-center gap-[6px] rounded-full bg-lux-cream px-[11px] py-[3px] text-[clamp(10.5px,2.9vw,13px)] font-bold text-lux-green ring-1 ring-lux-gold/40">
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
                        <p key={n} className="text-[clamp(9px,2.5vw,11px)] font-medium leading-[1.7] text-lux-green-ink/70">
                          {n}
                        </p>
                      ))}
                    </div>
                    <p className="ml-auto whitespace-nowrap border-b-[3px] border-lux-gold pb-[3px] leading-none">
                      <span className="mr-1 text-[clamp(10px,2.8vw,12.5px)] font-black text-lux-green-ink">参考価格</span>
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
        <div data-cta-section className="mx-auto mt-[clamp(20px,5.4vw,30px)] max-w-[460px] rounded-[20px] bg-gradient-to-br from-lux-gold-light via-lux-gold to-lux-gold-deep p-[2px] shadow-[0_12px_30px_rgba(18,61,40,0.14)]">
          <div className="rounded-[18px] bg-white px-4 py-[clamp(15px,4.2vw,22px)]">
            <p className="flex items-center justify-center gap-[10px] text-center font-display text-[clamp(13px,3.7vw,16px)] font-bold text-lux-green-ink">
              <span aria-hidden="true" className="h-px w-[clamp(14px,4.5vw,26px)] shrink-0 bg-gradient-to-r from-transparent to-lux-gold" />
              <span>あなたのケースの概算が知りたい方へ</span>
              <span aria-hidden="true" className="h-px w-[clamp(14px,4.5vw,26px)] shrink-0 bg-gradient-to-l from-transparent to-lux-gold" />
            </p>
            <p className="mx-auto mt-2 max-w-[400px] text-center text-[clamp(10px,2.8vw,12px)] font-medium leading-[1.8] text-lux-green-ink/85 [word-break:auto-phrase]">
              特殊清掃は50,000円〜。状況により大きく変わるため、写真からまず概算をお出しします。お見積り確定後の追加費用はありません。金額にご納得いただいてから作業を開始します。
            </p>

            <div className="mcy-cta-nudge mt-3 rounded-full bg-gradient-to-b from-lux-gold-light via-lux-gold to-lux-gold-deep p-[2px] shadow-[0_10px_24px_rgba(6,163,42,0.34)]">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-gtm="cta_line_pricing"
                className="relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-b from-[#37d857] via-[#12bb38] to-[#06a32a] px-4 py-[clamp(10px,3vw,14px)] text-white ring-2 ring-inset ring-white/50 transition-[filter] active:brightness-90"
              >
                <span aria-hidden="true" className="pointer-events-none absolute inset-x-[8%] top-[3px] h-[36%] rounded-full bg-gradient-to-b from-white/55 to-white/0" />
                <span className="relative grid h-[clamp(26px,7.4vw,38px)] w-[clamp(26px,7.4vw,38px)] shrink-0 place-items-center rounded-full bg-white text-[clamp(6px,1.7vw,8.5px)] font-black text-[#06a32a] shadow-[0_2px_5px_rgba(0,0,0,0.15)]">
                  LINE
                </span>
                <span className="relative min-w-0 flex-1 text-center leading-none">
                  <span className="block whitespace-nowrap text-[clamp(14px,4vw,19px)] font-black [text-shadow:0_1px_2px_rgba(0,90,25,0.3)]">
                    写真を送るだけで簡単見積り
                  </span>
                  <span className="mt-[5px] block whitespace-nowrap text-[clamp(9px,2.5vw,11.5px)] font-bold opacity-95">
                    LINEで無料相談｜24時間受付
                  </span>
                </span>
                <span aria-hidden="true" className="relative grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_5px_rgba(0,0,0,0.15)]">
                  <svg width="7" height="10" viewBox="0 0 7 10" fill="none">
                    <path d="M1.5 1l4 4-4 4" stroke="#06a32a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>

            <p className="mt-[10px] text-center text-[clamp(9.5px,2.7vw,11.5px)] font-medium leading-[1.8] text-lux-green-ink/75 [word-break:auto-phrase]">
              送るのは3つだけ ① 現場の写真（撮れる範囲で大丈夫です） ② おおよその間取り ③ 気になっていること
              <br />
              ※お部屋に入れない場合は、状況を文章でお送りいただくだけで構いません
            </p>

            {/* phone pill (deep-green, secondary to LINE) */}
            <a
              href={PHONE_TEL}
              data-gtm="cta_tel_pricing"
              className="relative mt-3 flex min-h-[48px] items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-white/40 bg-gradient-to-b from-lux-green-2 via-lux-green to-[#0c2c1c] px-4 py-[10px] text-white shadow-[0_6px_16px_rgba(18,61,40,0.4)] ring-1 ring-lux-gold/70 transition-[filter] active:brightness-95"
            >
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-[6%] top-[3px] h-[42%] rounded-full bg-gradient-to-b from-white/35 to-transparent" />
              <svg viewBox="0 0 24 24" className="h-[clamp(15px,4vw,18px)] w-[clamp(15px,4vw,18px)] shrink-0" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="relative min-w-0 text-center leading-none">
                <span className="block whitespace-nowrap text-[clamp(12px,3.3vw,15.5px)] font-black tracking-[-0.01em]">
                  お急ぎの方はお電話で {PHONE_DISPLAY}
                </span>
                <span className="mt-[4px] block text-[clamp(8.5px,2.4vw,10.5px)] font-bold opacity-95 [word-break:auto-phrase]">
                  9:00〜21:00 年中無休｜最短即日で現地確認
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
