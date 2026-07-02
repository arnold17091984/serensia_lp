/**
 * 実績・参考料金セクション — Clinical Trust redesign.
 * 6 case studies rendered as clinical-report-style cards on a mist background:
 * mono CASE labels, hairline-ruled titles, BEFORE/AFTER photo pairs,
 * dash-marked work lists, and large mono reference prices.
 */

type WorkItem = {
  /** Bold prefix label (e.g. 特殊清掃（簡易対応）) */
  label?: string;
  text: string;
};

type CaseItem = {
  title: string;
  beforeImg: string;
  beforeAlt: string;
  afterImg: string;
  afterAlt: string;
  /** Plain description paragraph (cases 1, 2, 5, 6) */
  desc?: string;
  /** ▼価格に幅が出る場合の主な理由 bullet list (cases 3, 4) */
  reasons?: string[];
  work: WorkItem[];
  price: string;
  priceNotes: string[];
};

const CASES: CaseItem[] = [
  {
    title: "畳の上での孤独死｜腐敗臭が強いケース",
    beforeImg: "/img/jisseki_1b.jpg",
    beforeAlt: "畳の上での孤独死 特殊清掃の作業前",
    afterImg: "/img/jisseki_1a.jpg",
    afterAlt: "畳の上での孤独死 特殊清掃の作業後",
    desc: "和室の畳上で亡くなられていたケース。発見までに時間が経過しており、体液が畳・床下まで浸透。室内全体に強い腐敗臭が広がっている状態。",
    work: [
      {
        text: "畳撤去・汚染物の回収処分／体液付着部の除去／床面の特殊洗浄／除菌・消毒作業／強力消臭処理",
      },
    ],
    price: "330,000",
    priceNotes: ["※畳撤去・特殊清掃・除菌消臭を含む"],
  },
  {
    title: "事件現場｜玄関前の血液浸透・飛散除去",
    beforeImg: "/img/jisseki_2b.jpg",
    beforeAlt: "玄関前の血液除去 作業前",
    afterImg: "/img/jisseki_2a.jpg",
    afterAlt: "玄関前の血液除去 作業後",
    desc: "玄関前に血液が飛び散り、床面へ浸透している状態。棚・下駄箱・ドアにも血痕が付着。臭気レベルは中程度（通常レベル）。",
    work: [
      {
        text: "液付着物の除去／床面の浸透部洗浄処理／棚・下駄箱・ドアの血液除去／除菌・消毒作業／臭気対策（薬剤処理）",
      },
    ],
    price: "220,000",
    priceNotes: ["※汚染範囲・床材の種類・浸透深度により変動"],
  },
  {
    title: "トイレ｜孤独死の特殊清掃",
    beforeImg: "/img/jisseki_3b.jpg",
    beforeAlt: "トイレの特殊清掃 作業前",
    afterImg: "/img/jisseki_3a.jpg",
    afterAlt: "トイレの特殊清掃 作業後",
    reasons: [
      "発見までの日数",
      "便器脱着の有無",
      "臭気の強さ",
      "床下まで体液が浸透しているか",
    ],
    work: [
      {
        text: "体液・汚染物の除去／床・壁・便器まわりの特殊洗浄／除菌・消毒処理／臭気対策（薬剤＋機械脱臭）／必要に応じて便器脱着・床材撤去",
      },
    ],
    price: "150,000",
    priceNotes: [],
  },
  {
    title: "浴室｜孤独死の特殊清掃",
    beforeImg: "/img/jisseki_4b.jpg",
    beforeAlt: "浴室の特殊清掃 作業前",
    afterImg: "/img/jisseki_4a.jpg",
    afterAlt: "浴室の特殊清掃 作業後",
    reasons: [
      "浴槽下や排水管への汚染",
      "腐敗臭の残留レベル",
      "建材への染み込み具合",
      "解体作業の有無",
    ],
    work: [
      {
        text: "浴槽内・床・排水口の体液除去／壁面・天井の特殊洗浄／除菌・消毒／強力消臭処理／必要に応じて浴槽パン・床材撤去",
      },
    ],
    price: "200,000",
    priceNotes: [],
  },
  {
    title: "孤独死｜空間除菌消毒のみ＋遺品整理",
    beforeImg: "/img/jisseki_5b.jpg",
    beforeAlt: "空間除菌消毒と遺品整理 作業前",
    afterImg: "/img/jisseki_5a.jpg",
    afterAlt: "空間除菌消毒と遺品整理 作業後",
    desc: "管理会社の判断により、本格的な特殊清掃（床剥がし・体液除去等）は不要となり、体液付着箇所を含む空間全体の除菌・消毒のみ実施。その後、遺品整理をご依頼いただいたケース。",
    work: [
      {
        label: "特殊清掃（簡易対応）",
        text: "体液付着箇所を含む空間除菌・消毒／室内全体の簡易消臭・衛生処理",
      },
      {
        label: "遺品整理",
        text: "室内残置物の仕分け／不用品の搬出・処分／貴重品探索",
      },
    ],
    price: "460,000",
    priceNotes: [
      "・特殊清掃：50,000円",
      "※空間除菌消毒のみ",
      "・遺品整理(2LDK)：410,000円",
    ],
  },
  {
    title: "孤独死｜腐敗臭＋タバコ臭＋残置物撤去",
    beforeImg: "/img/jisseki_6b.jpg",
    beforeAlt: "腐敗臭・タバコ臭・残置物撤去 作業前",
    afterImg: "/img/jisseki_6a.jpg",
    afterAlt: "腐敗臭・タバコ臭・残置物撤去 作業後",
    desc: "腐敗臭レベルは中程度（普通）だが長年の生活によるタバコ臭も重なって残留。家具・生活用品などの残置物あり。一部残置物にも体液が付着している状態。",
    work: [
      {
        text: "体液付着部の除去／床・壁の特殊洗浄／除菌・消毒作業／消臭処理／体液が付着した残置物の分別・撤去・処分／室内残置物の撤去・処分",
      },
    ],
    price: "380,000",
    priceNotes: [
      "・特殊清掃：180,000円",
      "※体液除去、除菌・消毒、消臭作業",
      "・遺品整理(1DK)：200,000円",
      "※体液付着物を含む",
    ],
  },
];

function BeforeAfterPhoto({
  src,
  alt,
  label,
}: Readonly<{
  src: string;
  alt: string;
  label: "BEFORE" | "AFTER";
}>) {
  return (
    <figure>
      <figcaption
        className={`mb-1.5 font-mono text-[10px] leading-none tracking-[0.2em] ${
          label === "AFTER" ? "text-teal-600" : "text-muted"
        }`}
      >
        {label}
      </figcaption>
      <img
        src={src}
        alt={alt}
        width={300}
        height={400}
        loading="lazy"
        decoding="async"
        className="aspect-[3/4] w-full rounded-lg border border-hairline object-cover"
      />
    </figure>
  );
}

function WorkList({ work }: Readonly<{ work: WorkItem[] }>) {
  return (
    <div className="mt-2 flex flex-col gap-2.5">
      {work.map((workItem) => (
        <div key={workItem.text}>
          {workItem.label && (
            <p className="mb-1 text-[12px] font-bold text-ink">
              {workItem.label}
            </p>
          )}
          <ul className="flex flex-col gap-1">
            {workItem.text.split("／").map((task) => (
              <li
                key={task}
                className="flex items-start gap-2 text-[12px] leading-[1.7] text-muted"
              >
                <span
                  aria-hidden="true"
                  className="mt-[8px] h-px w-2.5 shrink-0 bg-teal-600"
                />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function CaseCard({
  item,
  index,
}: Readonly<{ item: CaseItem; index: number }>) {
  const caseNumber = String(index + 1).padStart(2, "0");

  return (
    <article className="reveal rounded-xl border border-hairline bg-white p-5 shadow-[0_1px_2px_rgba(19,34,38,0.06)]">
      {/* case label + title */}
      <p className="font-mono text-[11px] leading-none tracking-[0.22em] text-teal-600">
        CASE {caseNumber}
      </p>
      <h3 className="mt-2 border-b border-hairline pb-3 text-[16px] font-bold leading-snug tracking-tight text-ink">
        {item.title}
      </h3>

      {/* before / after photos */}
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <BeforeAfterPhoto
          src={item.beforeImg}
          alt={item.beforeAlt}
          label="BEFORE"
        />
        <BeforeAfterPhoto
          src={item.afterImg}
          alt={item.afterAlt}
          label="AFTER"
        />
      </div>

      {/* description / price-range reasons */}
      {item.desc && (
        <p className="mt-4 text-[13px] leading-[1.9] text-ink">{item.desc}</p>
      )}
      {item.reasons && (
        <div className="mt-4">
          <p className="text-[13px] font-bold leading-[1.9] text-ink">
            ▼価格に幅が出る場合の主な理由
          </p>
          <ul className="mt-1">
            {item.reasons.map((reason) => (
              <li
                key={reason}
                className="flex text-[13px] leading-[1.9] text-ink"
              >
                <span className="shrink-0">・</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* work content */}
      <div className="mt-4">
        <h4 className="text-[12px] font-bold tracking-wide text-ink">
          作業内容
        </h4>
        <WorkList work={item.work} />
      </div>

      {/* reference price */}
      <div className="mt-5 border-t border-hairline pt-4">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h4 className="text-[12px] font-bold tracking-wide text-ink">
            参考価格
          </h4>
          <p className="leading-none">
            <span className="font-mono text-[28px] font-bold tracking-tight text-alert">
              {item.price}
            </span>
            <span className="ml-1 text-[14px] font-bold text-ink">円</span>
          </p>
        </div>
        {item.priceNotes.length > 0 && (
          <ul className="mt-2 text-[11px] leading-[1.7] text-muted">
            {item.priceNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default function Jisseki() {
  return (
    <section id="jisseki" className="w-full bg-mist px-4 py-14">
      <p className="font-mono text-[11px] leading-none tracking-[0.22em] text-teal-600">
        08 — CASES &amp; PRICING
      </p>
      <h2 className="mt-2 text-[26px] font-bold tracking-tight text-ink">
        実績・参考料金
      </h2>

      {/* pricing disclaimer note */}
      <div className="mt-5 rounded-lg border border-hairline bg-white px-4 py-3">
        <p className="text-[11.5px] leading-[1.8] text-muted">
          ※汚染範囲、臭気の強さ、残置物量、体液付着状況、建物構造により金額は変動します。正式な金額は必ず現地確認後にお見積りします。
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-6">
        {CASES.map((caseItem, index) => (
          <CaseCard key={caseItem.title} item={caseItem} index={index} />
        ))}
      </div>
    </section>
  );
}
