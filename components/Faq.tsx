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

export default function Faq() {
  return (
    <section id="faq" className="w-full bg-white">
      <div className="px-5 py-14">
        <p className="font-mono text-[11px] tracking-[0.22em] text-teal-600">
          09 — FAQ
        </p>
        <h2 className="mt-2 text-[24px] font-bold tracking-tight text-ink">
          よくある質問
        </h2>

        <div className="mt-8 border-y border-hairline">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={item.question}
              className={`reveal py-6${
                index > 0 ? " border-t border-hairline" : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-teal-100 bg-teal-50 font-mono text-[13px] font-semibold leading-none text-teal-600">
                  Q
                </span>
                <h3 className="pt-1 text-[15px] font-bold leading-snug tracking-tight text-ink">
                  {item.question}
                </h3>
              </div>
              <p className="mt-3 pl-10 text-[13.5px] leading-[1.9] text-muted">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
