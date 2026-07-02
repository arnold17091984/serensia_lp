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

function LeafSprig({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M8 82C30 66 52 42 112 12"
        stroke="#8fae72"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <ellipse cx="34" cy="58" rx="14" ry="6" transform="rotate(-38 34 58)" fill="#a9c98b" opacity="0.75" />
      <ellipse cx="58" cy="42" rx="14" ry="6" transform="rotate(-32 58 42)" fill="#7fae6e" opacity="0.7" />
      <ellipse cx="82" cy="28" rx="13" ry="5.5" transform="rotate(-28 82 28)" fill="#b9d6a0" opacity="0.8" />
      <ellipse cx="48" cy="66" rx="12" ry="5" transform="rotate(-52 48 66)" fill="#94bd7d" opacity="0.6" />
      <ellipse cx="102" cy="16" rx="11" ry="4.5" transform="rotate(-24 102 16)" fill="#e0a54a" opacity="0.75" />
    </svg>
  );
}

export default function Faq() {
  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#edf4e6] via-[#f8faf3] to-[#e9f1e6]"
    >
      {/* leaf decorations */}
      <LeafSprig className="absolute -left-4 -top-2 w-28 -scale-x-100" />
      <LeafSprig className="absolute -right-4 -top-2 w-28" />

      <div className="relative px-4 py-10">
        <div className="rounded-md bg-white/95 px-5 pb-8 pt-9 shadow-[0_2px_12px_rgba(60,90,70,0.10)]">
          <h2 className="text-center font-serif text-[29px] font-bold leading-none tracking-[0.1em] text-[#2c2729]">
            よくある質問
          </h2>

          <div className="mt-8 space-y-7">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question}>
                {/* Question */}
                <div className="flex items-start gap-3">
                  <span className="shrink-0 font-serif text-[26px] font-bold italic leading-none text-[#0b5245]">
                    Q
                  </span>
                  <p className="pt-[3px] font-serif text-[16px] font-bold leading-snug text-[#0b3f37]">
                    {item.question}
                  </p>
                </div>
                <div className="mt-2 border-b-2 border-dotted border-[#2c6b62]/50" />
                {/* Answer */}
                <div className="mt-3 flex items-start gap-3">
                  <span className="shrink-0 font-serif text-[26px] font-bold italic leading-none text-[#2d8685]">
                    A
                  </span>
                  <p className="pt-[4px] text-[13.5px] leading-[1.8] text-[#3b3839]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
