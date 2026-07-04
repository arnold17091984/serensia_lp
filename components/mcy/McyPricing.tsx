import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from "./McyHeader";

/**
 * No.33 — entry price + 6 case reports (real before/after photos) + mini CTA.
 * White cards on turquoise-light ground, navy titles, gold hairlines,
 * prices in navy/turquoise (No.33: 赤・オレンジは強調に限定 → 価格は強調色として朱を最小限使用).
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
    <ul className="mt-1 flex flex-col gap-[3px]">
      {items.map((w) => (
        <li key={w} className="flex items-start gap-[6px] text-[clamp(10px,2.8vw,12.5px)] font-medium leading-[1.65] text-mcy-navy/85">
          <span aria-hidden="true" className="mt-[0.55em] h-[2px] w-[10px] shrink-0 rounded-full bg-mcy-turq" />
          <span>{w}</span>
        </li>
      ))}
    </ul>
  );
}

export default function McyPricing() {
  return (
    <section id="ryokin" className="w-full bg-mcy-turq-light px-4 py-[clamp(20px,6vw,32px)]">
      {/* heading */}
      <div className="text-center">
        <span className="inline-block bg-gradient-to-r from-mcy-turq to-mcy-turq-deep px-[clamp(14px,4vw,22px)] py-[clamp(5px,1.5vw,8px)] text-[clamp(10px,2.9vw,14px)] font-black tracking-[0.06em] text-white [clip-path:polygon(4%_0,96%_0,100%_50%,96%_100%,4%_100%,0_50%)]">
          料金の目安が分かる
        </span>
        <h2 className="mt-[clamp(8px,2.4vw,13px)] font-display text-[clamp(20px,5.8vw,28px)] font-black tracking-[0.02em] text-mcy-navy">
          実績・参考料金
        </h2>
        <span aria-hidden="true" className="mx-auto mt-[clamp(8px,2.2vw,12px)] block h-[3px] w-[clamp(48px,13vw,72px)] rounded-full bg-mcy-gold" />
        <p className="mx-auto mt-3 max-w-[440px] text-[clamp(9.5px,2.7vw,12px)] font-medium leading-[1.8] text-mcy-navy/70">
          ※汚染範囲、臭気の強さ、残置物量、体液付着状況、建物構造により金額は変動します。正式な金額は必ず現地確認後にお見積りします。
        </p>
      </div>

      {/* entry price */}
      <div className="mx-auto mt-[clamp(12px,3.4vw,18px)] max-w-[460px] rounded-[14px] border-2 border-mcy-gold/60 bg-white px-4 pb-5 pt-4 text-center shadow-[0_3px_12px_rgba(27,58,92,0.1)]">
        <p className="font-display text-[clamp(13px,3.7vw,17px)] font-bold tracking-[0.1em] text-mcy-navy">
          特殊清掃
        </p>
        <p className="mt-1 whitespace-nowrap font-display font-black leading-none text-mcy-turq-deep">
          <span className="text-[clamp(42px,12vw,58px)] tracking-[-0.01em]">50,000</span>
          <span className="ml-1 text-[clamp(17px,4.8vw,23px)]">円〜</span>
        </p>
        <div className="mx-auto mt-3 w-fit border-t border-mcy-gold/50 pt-3">
          <p className="text-[clamp(9.5px,2.7vw,12px)] font-medium leading-[1.8] text-mcy-navy/70">
            ※50,000円は空間除菌・消毒のみの場合。体液除去を伴う特殊清掃は150,000円〜が目安です
          </p>
          <p className="mt-1 flex items-start justify-center gap-[6px] text-[clamp(10.5px,2.9vw,13px)] font-black leading-[1.8] text-mcy-navy">
            <span aria-hidden="true" className="mt-[3px] grid h-[16px] w-[16px] shrink-0 place-items-center rounded-full bg-mcy-gold text-[9px] text-white">✓</span>
            <span>お見積り後の追加費用はありません（クレジットカード可）</span>
          </p>
        </div>
      </div>

      {/* six cases */}
      <div className="mx-auto mt-[clamp(14px,4vw,22px)] flex max-w-[460px] flex-col gap-[clamp(12px,3.4vw,18px)]">
        {CASES.map((c, i) => (
          <article key={c.title} className="overflow-hidden rounded-[14px] bg-white shadow-[0_3px_12px_rgba(27,58,92,0.1)]">
            <div className="flex items-center gap-2 border-b-2 border-mcy-gold/40 px-4 py-[clamp(8px,2.4vw,12px)]">
              <span className="shrink-0 rounded-[4px] bg-mcy-navy px-2 py-[3px] font-display text-[clamp(9px,2.5vw,11px)] font-bold tracking-[0.1em] text-white">
                CASE {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="min-w-0 text-[clamp(12.5px,3.5vw,15.5px)] font-black leading-snug text-mcy-navy">
                {c.title}
              </h3>
            </div>
            <div className="px-4 pb-4 pt-3">
              <div className="grid grid-cols-2 gap-2">
                {[{ src: c.before, label: "施工前", en: "BEFORE", tone: "bg-mcy-navy" }, { src: c.after, label: "施工後", en: "AFTER", tone: "bg-mcy-turq" }].map((p) => (
                  <figure key={p.en} className="relative">
                    <img
                      src={p.src}
                      alt={`${c.title} ${p.label}`}
                      width={300}
                      height={400}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full rounded-[8px] border border-mcy-turq/25 object-cover"
                    />
                    <figcaption className={`absolute left-1 top-1 rounded-[4px] ${p.tone} px-[7px] py-[3px] leading-none text-white`}>
                      <span className="block text-[clamp(8.5px,2.4vw,10.5px)] font-black">{p.label}</span>
                      <span className="mt-[2px] block text-[clamp(5.5px,1.6vw,7px)] font-bold tracking-[0.14em] opacity-90">{p.en}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>

              {c.desc && (
                <p className="mt-3 text-[clamp(10.5px,3vw,13px)] font-medium leading-[1.85] text-mcy-navy/90 [word-break:auto-phrase]">
                  {c.desc}
                </p>
              )}
              {c.reasons && (
                <div className="mt-3 rounded-[8px] bg-mcy-turq-light px-3 py-2">
                  <p className="text-[clamp(10px,2.8vw,12.5px)] font-black text-mcy-navy">
                    ▼価格に幅が出る場合の主な理由
                  </p>
                  <ul className="mt-1 flex flex-col gap-[2px]">
                    {c.reasons.map((r) => (
                      <li key={r} className="flex items-start gap-[5px] text-[clamp(10px,2.8vw,12.5px)] font-medium leading-[1.7] text-mcy-navy/85">
                        <span className="shrink-0">・</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-3">
                <p className="border-l-4 border-mcy-gold pl-2 text-[clamp(11px,3.1vw,13.5px)] font-black text-mcy-navy">
                  作業内容
                </p>
                {c.workGroups ? (
                  <div className="mt-1 flex flex-col gap-2">
                    {c.workGroups.map((g) => (
                      <div key={g.label}>
                        <p className="text-[clamp(10.5px,2.9vw,13px)] font-bold text-mcy-turq-deep">{g.label}</p>
                        <WorkList items={g.items} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <WorkList items={c.work} />
                )}
              </div>

              <div className="mt-3 flex flex-wrap items-end justify-between gap-x-3 gap-y-1 border-t border-mcy-gold/40 pt-3">
                <div className="min-w-0">
                  {c.priceNotes.map((n) => (
                    <p key={n} className="text-[clamp(9px,2.5vw,11px)] font-medium leading-[1.7] text-mcy-navy/70">
                      {n}
                    </p>
                  ))}
                </div>
                <p className="ml-auto whitespace-nowrap leading-none">
                  <span className="mr-1 text-[clamp(10px,2.8vw,12.5px)] font-black text-mcy-navy">参考価格</span>
                  <span className="font-display text-[clamp(24px,6.8vw,33px)] font-black tracking-[-0.01em] text-[#c0392b]">
                    {c.price}
                  </span>
                  <span className="text-[clamp(12px,3.4vw,15px)] font-black text-mcy-navy">円</span>
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* closing mini CTA */}
      <div className="mx-auto mt-[clamp(14px,4vw,22px)] max-w-[460px]">
        <p className="text-center font-display text-[clamp(13px,3.7vw,16px)] font-bold text-mcy-navy">
          あなたのケースの概算が知りたい方へ
        </p>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-gtm="cta_line_pricing"
          className="mt-3 flex items-center justify-center gap-2 rounded-full border-2 border-mcy-gold/70 bg-gradient-to-b from-[#25d94e] to-[#06a32a] px-5 py-[clamp(10px,3vw,14px)] text-white shadow-[0_4px_12px_rgba(6,163,42,0.35)] transition-[filter] active:brightness-90"
        >
          <span className="grid h-[clamp(26px,7.4vw,38px)] w-[clamp(26px,7.4vw,38px)] shrink-0 place-items-center rounded-full bg-white text-[clamp(6px,1.7vw,8.5px)] font-black text-[#06a32a]">
            LINE
          </span>
          <span className="text-center leading-none">
            <span className="block whitespace-nowrap text-[clamp(14px,4vw,19px)] font-black">
              写真を送るだけで簡単見積り
            </span>
            <span className="mt-[5px] block whitespace-nowrap text-[clamp(9px,2.5vw,11.5px)] font-bold opacity-95">
              LINEで無料相談｜24時間受付
            </span>
          </span>
        </a>
        <a
          href={PHONE_TEL}
          data-gtm="cta_tel_pricing"
          className="mt-3 block text-center text-[clamp(11px,3.1vw,13.5px)] font-black text-mcy-navy underline decoration-mcy-gold decoration-2 underline-offset-4"
        >
          お急ぎの方はお電話で {PHONE_DISPLAY}（9:00〜21:00）
        </a>
      </div>
    </section>
  );
}
