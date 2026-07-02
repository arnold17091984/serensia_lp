/**
 * 実績・参考料金セクション — FV デザイン言語（アイボリー地・白カード・金アクセント）で刷新。
 * design-refs/09_1_jisseki.jpg / 09_2_jisseki.jpg / 09_3_jisseki.jpg 由来の実績6ケースを、
 * CVR 施策として【価格の安い順】に掲載。冒頭に入口価格アンカー（特殊清掃 50,000円〜）、
 * 末尾に LINE 簡単見積りのミニ CTA を配置。コピーは旧実装から転記。
 */

const GOLD = "#c09a4a";
const GOLD_LINE = "#d9c8a3";
const PRICE_RED = "#c0202a";
const SUB_TEXT = "#4b5450";

type WorkGroup = {
  /** Bold prefix label (e.g. 特殊清掃（簡易対応）) */
  label?: string;
  items: string[];
};

type CasePhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type CaseItem = {
  title: string;
  before: CasePhoto;
  after: CasePhoto;
  /** Plain description paragraph */
  desc?: string;
  /** ▼価格に幅が出る場合の主な理由 bullet list */
  reasons?: string[];
  work: WorkGroup[];
  price: string;
  priceNotes: string[];
};

/* 価格の安い順（150,000 → 460,000） */
const CASES: CaseItem[] = [
  {
    title: "トイレ｜孤独死の特殊清掃",
    before: {
      src: "/img/jisseki_3b.jpg",
      alt: "トイレの特殊清掃 作業前",
      width: 202,
      height: 272,
    },
    after: {
      src: "/img/jisseki_3a.jpg",
      alt: "トイレの特殊清掃 作業後",
      width: 205,
      height: 272,
    },
    reasons: [
      "発見までの日数",
      "便器脱着の有無",
      "臭気の強さ",
      "床下まで体液が浸透しているか",
    ],
    work: [
      {
        items: [
          "体液・汚染物の除去",
          "床・壁・便器まわりの特殊洗浄",
          "除菌・消毒処理",
          "臭気対策（薬剤＋機械脱臭）",
          "必要に応じて便器脱着・床材撤去",
        ],
      },
    ],
    price: "150,000",
    priceNotes: [],
  },
  {
    title: "浴室｜孤独死の特殊清掃",
    before: {
      src: "/img/jisseki_4b.jpg",
      alt: "浴室の特殊清掃 作業前",
      width: 202,
      height: 267,
    },
    after: {
      src: "/img/jisseki_4a.jpg",
      alt: "浴室の特殊清掃 作業後",
      width: 205,
      height: 267,
    },
    reasons: [
      "浴槽下や排水管への汚染",
      "腐敗臭の残留レベル",
      "建材への染み込み具合",
      "解体作業の有無",
    ],
    work: [
      {
        items: [
          "浴槽内・床・排水口の体液除去",
          "壁面・天井の特殊洗浄",
          "除菌・消毒",
          "強力消臭処理",
          "必要に応じて浴槽パン・床材撤去",
        ],
      },
    ],
    price: "200,000",
    priceNotes: [],
  },
  {
    title: "事件現場｜玄関前の血液浸透・飛散除去",
    before: {
      src: "/img/jisseki_2b.jpg",
      alt: "玄関前の血液除去 作業前",
      width: 202,
      height: 275,
    },
    after: {
      src: "/img/jisseki_2a.jpg",
      alt: "玄関前の血液除去 作業後",
      width: 205,
      height: 275,
    },
    desc: "玄関前に血液が飛び散り、床面へ浸透している状態。棚・下駄箱・ドアにも血痕が付着。臭気レベルは中程度（通常レベル）。",
    work: [
      {
        items: [
          "液付着物の除去",
          "床面の浸透部洗浄処理",
          "棚・下駄箱・ドアの血液除去",
          "除菌・消毒作業",
          "臭気対策（薬剤処理）",
        ],
      },
    ],
    price: "220,000",
    priceNotes: ["※汚染範囲・床材の種類・浸透深度により変動"],
  },
  {
    title: "畳の上での孤独死｜腐敗臭が強いケース",
    before: {
      src: "/img/jisseki_1b.jpg",
      alt: "畳の上での孤独死 特殊清掃の作業前",
      width: 202,
      height: 275,
    },
    after: {
      src: "/img/jisseki_1a.jpg",
      alt: "畳の上での孤独死 特殊清掃の作業後",
      width: 205,
      height: 275,
    },
    desc: "和室の畳上で亡くなられていたケース。発見までに時間が経過しており、体液が畳・床下まで浸透。室内全体に強い腐敗臭が広がっている状態。",
    work: [
      {
        items: [
          "畳撤去・汚染物の回収処分",
          "体液付着部の除去",
          "床面の特殊洗浄",
          "除菌・消毒作業",
          "強力消臭処理",
        ],
      },
    ],
    price: "330,000",
    priceNotes: ["※畳撤去・特殊清掃・除菌消臭を含む"],
  },
  {
    title: "孤独死｜腐敗臭＋タバコ臭＋残置物撤去",
    before: {
      src: "/img/jisseki_6b.jpg",
      alt: "腐敗臭・タバコ臭・残置物撤去 作業前",
      width: 60,
      height: 110,
    },
    after: {
      src: "/img/jisseki_6a.jpg",
      alt: "腐敗臭・タバコ臭・残置物撤去 作業後",
      width: 80,
      height: 110,
    },
    desc: "腐敗臭レベルは中程度（普通）だが長年の生活によるタバコ臭も重なって残留。家具・生活用品などの残置物あり。一部残置物にも体液が付着している状態。",
    work: [
      {
        items: [
          "体液付着部の除去",
          "床・壁の特殊洗浄",
          "除菌・消毒作業",
          "消臭処理",
          "体液が付着した残置物の分別・撤去・処分",
          "室内残置物の撤去・処分",
        ],
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
  {
    title: "孤独死｜空間除菌消毒のみ＋遺品整理",
    before: {
      src: "/img/jisseki_5b.jpg",
      alt: "空間除菌消毒と遺品整理 作業前",
      width: 60,
      height: 108,
    },
    after: {
      src: "/img/jisseki_5a.jpg",
      alt: "空間除菌消毒と遺品整理 作業後",
      width: 80,
      height: 108,
    },
    desc: "管理会社の判断により、本格的な特殊清掃（床剥がし・体液除去等）は不要となり、体液付着箇所を含む空間全体の除菌・消毒のみ実施。その後、遺品整理をご依頼いただいたケース。",
    work: [
      {
        label: "特殊清掃（簡易対応）",
        items: [
          "体液付着箇所を含む空間除菌・消毒",
          "室内全体の簡易消臭・衛生処理",
        ],
      },
      {
        label: "遺品整理",
        items: ["室内残置物の仕分け", "不用品の搬出・処分", "貴重品探索"],
      },
    ],
    price: "460,000",
    priceNotes: [
      "・特殊清掃：50,000円",
      "※空間除菌消毒のみ",
      "・遺品整理(2LDK)：410,000円",
    ],
  },
];

/* ---------- decorative parts (FV / Onayami の様式) ---------- */

function GoldFlourish({ flip = false }: Readonly<{ flip?: boolean }>) {
  return (
    <svg
      viewBox="0 0 56 12"
      className={`h-3 w-[clamp(28px,10vw,56px)] shrink-0 ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M0 6h40" stroke={GOLD} strokeWidth="1.2" />
      <path
        d="M46 1.5 50.5 6 46 10.5 41.5 6z"
        fill="none"
        stroke={GOLD}
        strokeWidth="1.2"
      />
      <circle cx="54" cy="6" r="1.4" fill={GOLD} />
    </svg>
  );
}

function GoldCheck() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="mt-[6px] h-[11px] w-[11px] shrink-0"
      aria-hidden="true"
    >
      <path
        d="m2.5 8.5 4 4 7-9.5"
        fill="none"
        stroke={GOLD}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LineBadge() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[clamp(38px,10vw,48px)] w-[clamp(38px,10vw,48px)] shrink-0"
      aria-hidden="true"
    >
      <path
        fill="#fff"
        d="M12 3.2C6.6 3.2 2.2 6.7 2.2 11c0 3.8 3.4 7 8 7.7.3.1.7.2.8.5.1.2.1.6.1.9l-.2.8c0 .2-.2.9.8.5 1.1-.4 5.8-3.4 7.9-5.8 1.5-1.6 2.2-3.2 2.2-4.6 0-4.3-4.4-7.8-9.8-7.8z"
      />
      <text
        x="12"
        y="12.9"
        textAnchor="middle"
        fontSize="4.8"
        fontWeight="bold"
        fill="#06b14e"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        LINE
      </text>
    </svg>
  );
}

function ChevronCircle({ color }: Readonly<{ color: string }>) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
        <path
          d="m9 5.5 7 6.5-7 6.5"
          fill="none"
          stroke={color}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* ---------- case card parts ---------- */

function CasePhotoFigure({
  photo,
  label,
  en,
}: Readonly<{ photo: CasePhoto; label: string; en: string }>) {
  return (
    <figure className="relative">
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading="lazy"
        decoding="async"
        className="aspect-[3/4] w-full rounded-xl border border-[#e5decf] object-cover"
      />
      <figcaption className="absolute left-1.5 top-1.5 rounded-[5px] border border-[#c09a4a] bg-white/95 px-[8px] py-[4px] text-center leading-none shadow-sm">
        <span className="block text-[clamp(9px,2.4vw,10.5px)] font-bold tracking-[0.1em] text-forest-950">
          {label}
        </span>
        <span className="mt-[3px] block text-[clamp(7.5px,1.9vw,8px)] font-bold tracking-[0.18em] text-[#c09a4a]">
          {en}
        </span>
      </figcaption>
    </figure>
  );
}

function CaseCard({ item, index }: Readonly<{ item: CaseItem; index: number }>) {
  return (
    <article className="rounded-xl bg-white px-4 pb-5 pt-[18px] shadow-[0_2px_10px_rgba(60,50,30,0.06)]">
      {/* case number + title (ink bold + gold bottom rule) */}
      <p className="font-display text-[clamp(9.5px,2.5vw,11px)] font-bold tracking-[0.26em] text-[#c09a4a]">
        CASE 0{index + 1}
      </p>
      <h3
        className="mt-1.5 border-b pb-2.5 font-display text-[clamp(14px,3.9vw,18px)] font-bold leading-[1.5] tracking-[0.02em] text-ink"
        style={{ borderColor: GOLD_LINE }}
      >
        {item.title}
      </h3>

      {/* before / after photos */}
      <div className="mt-3.5 grid grid-cols-2 gap-2.5">
        <CasePhotoFigure photo={item.before} label="施工前" en="BEFORE" />
        <CasePhotoFigure photo={item.after} label="施工後" en="AFTER" />
      </div>

      {/* description */}
      {item.desc && (
        <p className="mt-3 text-[clamp(11px,2.9vw,13px)] leading-[1.9] text-ink">
          {item.desc}
        </p>
      )}

      {/* ▼価格に幅が出る場合の主な理由 */}
      {item.reasons && (
        <div className="mt-3">
          <p className="text-[clamp(11px,2.9vw,13px)] font-bold leading-[1.9] text-forest-950">
            ▼価格に幅が出る場合の主な理由
          </p>
          <ul className="mt-0.5 text-[clamp(11px,2.9vw,13px)] leading-[1.9] text-ink">
            {item.reasons.map((reason) => (
              <li key={reason} className="flex">
                <span className="shrink-0">・</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* work content */}
      <div className="mt-4">
        <h4 className="flex items-center gap-1.5 font-display text-[clamp(12.5px,3.4vw,15px)] font-bold tracking-[0.04em] text-forest-950">
          <span
            className="h-[15px] w-[3px] shrink-0 rounded-full"
            style={{ backgroundColor: GOLD }}
            aria-hidden="true"
          />
          <span>作業内容</span>
        </h4>
        {item.work.map((group) => (
          <div key={group.label ?? group.items[0]} className="mt-2">
            {group.label && (
              <p className="text-[clamp(11px,2.9vw,13px)] font-bold leading-[1.8] text-forest-950">
                {group.label}
              </p>
            )}
            <ul className="mt-0.5 flex flex-col gap-[2px]">
              {group.items.map((workText) => (
                <li
                  key={workText}
                  className="flex items-start gap-1.5 text-[clamp(11px,2.9vw,13px)] leading-[1.85] text-ink"
                >
                  <GoldCheck />
                  <span>{workText}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* reference price (bottom right, oversized) */}
      <div
        className="mt-4 flex items-end justify-between gap-3 border-t pt-3.5"
        style={{ borderColor: GOLD_LINE }}
      >
        {item.priceNotes.length > 0 ? (
          <ul
            className="min-w-0 text-[clamp(9.5px,2.5vw,11px)] font-medium leading-[1.75]"
            style={{ color: SUB_TEXT }}
          >
            {item.priceNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        ) : (
          <span aria-hidden="true" />
        )}
        <p className="shrink-0 text-right">
          <span
            className="block text-[clamp(9.5px,2.5vw,11px)] font-bold tracking-[0.12em]"
            style={{ color: SUB_TEXT }}
          >
            参考価格
          </span>
          <span
            className="mt-1 block whitespace-nowrap font-black leading-none tracking-[-0.01em]"
            style={{ color: PRICE_RED }}
          >
            <span className="text-[clamp(28px,7.8vw,37px)]">{item.price}</span>
            <span className="ml-0.5 text-[clamp(13px,3.6vw,16px)] font-bold">
              円
            </span>
          </span>
        </p>
      </div>
    </article>
  );
}

/* ---------- section ---------- */

export default function Jisseki() {
  return (
    <section id="ryokin" className="w-full bg-ivory px-4 pb-12 pt-10">
      {/* heading with gold flourishes */}
      <h2 className="flex items-center justify-center gap-2 px-2">
        <GoldFlourish />
        <span className="whitespace-nowrap font-display text-[clamp(16px,4.4vw,21px)] font-bold tracking-[0.04em] text-forest-950">
          実績・参考料金
        </span>
        <GoldFlourish flip />
      </h2>
      <p
        className="mx-auto mt-3.5 max-w-[460px] text-[clamp(10px,2.7vw,12px)] font-medium leading-[1.9]"
        style={{ color: SUB_TEXT }}
      >
        ※汚染範囲、臭気の強さ、残置物量、体液付着状況、建物構造により金額は変動します。正式な金額は必ず現地確認後にお見積りします。
      </p>

      {/* entry price anchor */}
      <div className="mt-6 rounded-xl bg-white px-4 pb-[22px] pt-6 text-center shadow-[0_2px_10px_rgba(60,50,30,0.06)]">
        <p className="font-display text-[clamp(14px,3.9vw,18px)] font-bold tracking-[0.12em] text-forest-950">
          特殊清掃
        </p>
        <p
          className="mt-2 whitespace-nowrap font-black leading-none"
          style={{ color: PRICE_RED }}
        >
          <span className="text-[clamp(46px,12.5vw,60px)] tracking-[-0.01em]">
            50,000
          </span>
          <span className="ml-1 text-[clamp(18px,4.9vw,24px)] font-bold">
            円〜
          </span>
        </p>
        <div
          className="mx-auto mt-4 w-fit border-t pt-3"
          style={{ borderColor: GOLD_LINE }}
        >
          <p
            className="text-[clamp(10px,2.7vw,12px)] font-medium leading-[1.9]"
            style={{ color: SUB_TEXT }}
          >
            ※50,000円は空間除菌・消毒のみの場合。体液除去を伴う特殊清掃は150,000円〜が目安です
          </p>
          <p className="mt-0.5 flex items-start justify-center gap-1.5 text-[clamp(10.5px,2.8vw,12.5px)] font-bold leading-[1.9] text-ink">
            <GoldCheck />
            <span>お見積り後の追加費用はありません（クレジットカード可）</span>
          </p>
        </div>
      </div>

      {/* six cases, cheapest first */}
      <div className="mt-7 flex flex-col gap-5">
        {CASES.map((caseItem, index) => (
          <CaseCard key={caseItem.title} item={caseItem} index={index} />
        ))}
      </div>

      {/* mini CTA: LINE quick estimate */}
      <div className="mt-9">
        <p className="text-center font-display text-[clamp(13px,3.6vw,16px)] font-bold tracking-[0.03em] text-forest-950">
          あなたのケースの概算が知りたい方へ
        </p>
        <a
          href="https://page.line.me/782qjphg"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3.5 flex items-center gap-2.5 rounded-[18px] bg-gradient-to-b from-[#0bd160] to-[#05b04a] px-4 pb-[17px] pt-[15px] text-white shadow-[0_4px_14px_rgba(5,166,72,0.32)]"
        >
          <LineBadge />
          <span className="flex min-w-0 flex-1 flex-col items-center">
            <span className="whitespace-nowrap text-[clamp(15px,4.1vw,19px)] font-bold leading-none tracking-[0.02em]">
              写真を送るだけで簡単見積り
            </span>
            <span className="mt-[10px] whitespace-nowrap rounded-full border-[1.5px] border-white/90 px-4 py-[6px] text-[clamp(9.5px,2.5vw,11.5px)] font-bold leading-none tracking-[0.01em]">
              LINEで無料相談｜24時間受付
            </span>
          </span>
          <ChevronCircle color="#06b14e" />
        </a>
        <a
          href="tel:0344002098"
          className="mt-3 block text-center text-[clamp(12px,3.3vw,14px)] font-bold text-forest-700 underline decoration-[#c09a4a] decoration-[1.5px] underline-offset-[5px]"
        >
          お急ぎの方はお電話で 03-4400-2098（9:00〜21:00）
        </a>
      </div>
    </section>
  );
}
