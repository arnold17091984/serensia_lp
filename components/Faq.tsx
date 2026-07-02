/**
 * よくある質問 — restyled to match the FV design language.
 * White ground, gold flourish heading, gold "Q" / forest "A" medallions,
 * and QA items separated by gold hairlines (#d9c8a3).
 */

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "クレジットカードで支払いできますか？",
    answer:
      "はい、当社ではクレジットカードでのお支払いが可能です。安心してご利用いただけるよう各種カードに対応しています。詳細についてはお問い合わせください。",
  },
  {
    question: "見積もりの所要時間は？",
    answer:
      "見積もりは現場調査後、通常30分〜1時間程度でお伝えしています。お急ぎの場合はお電話でご相談ください。",
  },
  {
    question: "作業の所要時間は？",
    answer:
      "作業の内容や規模により異なりますが、一般的には1日〜数日で完了します。作業前に詳細なスケジュールをご案内いたします。",
  },
  {
    question: "ご近所へ迷惑をかけたくない",
    answer:
      "作業時はご近所へのご負担をできる限り抑えられるよう、十分に配慮しております。ロゴや業者名の入った服装は避け、目立たない形で訪問・作業を行います。搬出時の動きやお声がけなどにも気を配り、近隣の方に配慮しながら進めます。",
  },
  {
    question: "保険や保証はありますか？",
    answer:
      "万が一の事故に備え、東京海上日動火災保険の賠償責任保険に加入しております。作業中の予期せぬトラブルにも対応できる体制を整えておりますので、安心してご依頼いただけます。",
  },
  {
    question: "夜間に発見した場合はどうすればいいですか？",
    answer:
      "LINE・メールは24時間受付しております。緊急の場合も内容を確認次第、折り返しご連絡いたします。",
  },
];

function GoldFlourish({ flip = false }: Readonly<{ flip?: boolean }>) {
  return (
    <svg
      viewBox="0 0 56 12"
      className={`h-3 w-[clamp(28px,10vw,56px)] shrink-0 ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M0 6h40" stroke="#c09a4a" strokeWidth="1.2" />
      <path d="M46 1.5 50.5 6 46 10.5 41.5 6z" fill="none" stroke="#c09a4a" strokeWidth="1.2" />
      <circle cx="54" cy="6" r="1.4" fill="#c09a4a" />
    </svg>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="w-full bg-white pb-10 pt-9">
      {/* heading with gold flourishes */}
      <h2 className="flex items-center justify-center gap-2 px-2">
        <GoldFlourish />
        <span className="whitespace-nowrap font-display text-[clamp(16px,4.4vw,21px)] font-bold tracking-[0.04em] text-forest-950">
          よくある質問
        </span>
        <GoldFlourish flip />
      </h2>

      {/* QA list, gold hairline separated */}
      <div className="mt-6 divide-y divide-[#d9c8a3] px-4">
        {FAQ_ITEMS.map((item) => (
          <div key={item.question} className="py-5 first:pt-1 last:pb-1">
            {/* Question */}
            <div className="flex items-start gap-2.5">
              <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#c09a4a] pb-[1px] font-display text-[15px] font-bold leading-none text-white">
                Q
              </span>
              <p className="pt-[3px] text-[clamp(12.5px,3.4vw,14.5px)] font-bold leading-[1.7] tracking-[0.02em] text-ink [word-break:auto-phrase]">
                {item.question}
              </p>
            </div>
            {/* Answer */}
            <div className="mt-2.5 flex items-start gap-2.5">
              <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-forest-700 pb-[1px] font-display text-[15px] font-bold leading-none text-white">
                A
              </span>
              <p className="pt-[2px] text-[clamp(11.5px,3vw,13px)] leading-[1.9] text-[#4b5450]">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
