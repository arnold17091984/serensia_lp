import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記｜セレンシア（株式会社TAKAKU）",
  robots: { index: false, follow: false },
};

const LEGAL_ROWS: { label: string; value: React.ReactNode }[] = [
  { label: "事業者名", value: "株式会社TAKAKU（屋号：セレンシア）" },
  { label: "代表者名", value: "太田 貴也" },
  { label: "所在地", value: "〒158-0087 東京都世田谷区玉堤1丁目21-12" },
  {
    label: "連絡先",
    value: (
      <>
        <a href="tel:0344002098" data-gtm="cta_tel_legal" className="underline underline-offset-2">
          03-4400-2098
        </a>
        <span className="mt-1 block text-[12px] leading-relaxed text-neutral-500">
          お電話受付 9:00〜21:00（年中無休）／LINE・メールは24時間受付・緊急時は折り返し対応
        </span>
      </>
    ),
  },
  { label: "営業時間", value: "9:00〜21:00（年中無休）" },
  {
    label: "役務の内容",
    value:
      "特殊清掃・遺品整理・生前整理・空き家整理・片付け・ハウスクリーニング・リフォーム・原状回復工事",
  },
  { label: "料金", value: "現地でのお見積りにより確定します。" },
  { label: "支払方法", value: "現金／クレジットカード" },
  {
    label: "キャンセルについて",
    value:
      "ご契約後、作業着手前のキャンセルは無料です。作業着手後にキャンセルされる場合は、既に発生した出張費・実費相当分をご負担いただく場合がございます。詳細は契約書面・お見積り時にご説明いたします。",
  },
];

export default function LegalPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[520px] bg-white px-5 pb-16 pt-10">
      <h1 className="border-l-4 border-brand-800 pl-3 font-serif text-[22px] font-bold text-ink">
        特定商取引法に基づく表記
      </h1>

      <dl className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200 text-[14px] leading-relaxed text-ink">
        {LEGAL_ROWS.map((row) => (
          <div key={row.label} className="py-3.5">
            <dt className="font-bold text-neutral-600">{row.label}</dt>
            <dd className="mt-1">{row.value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-10 text-center text-[13px]">
        <a href="/" className="text-brand-800 underline underline-offset-2">
          ← トップページへ戻る
        </a>
      </p>
    </main>
  );
}
