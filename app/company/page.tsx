import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要｜セレンシア（株式会社TAKAKU）",
  robots: { index: false, follow: false },
};

const COMPANY_ROWS: { label: string; value: React.ReactNode }[] = [
  { label: "会社名", value: "株式会社TAKAKU" },
  { label: "サービス名", value: "セレンシア" },
  { label: "代表者", value: "太田 貴也" },
  { label: "所在地", value: "〒158-0087 東京都世田谷区玉堤1丁目21-12" },
  {
    label: "電話番号",
    value: (
      <>
        <a href="tel:0344002098" className="underline underline-offset-2">
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
    label: "事業内容",
    value:
      "特殊清掃・遺品整理・生前整理・空き家整理・片付け・ハウスクリーニング・リフォーム・原状回復工事",
  },
  {
    label: "保有資格・許可",
    value: "東京都公安委員会 古物商許可 第303312321474号／遺品整理協会認定 遺品整理士（地区統括会員）",
  },
];

export default function CompanyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[520px] bg-white px-5 pb-16 pt-10">
      <h1 className="border-l-4 border-brand-800 pl-3 font-serif text-[22px] font-bold text-ink">
        会社概要
      </h1>

      <dl className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200 text-[14px] leading-relaxed text-ink">
        {COMPANY_ROWS.map((row) => (
          <div key={row.label} className="flex gap-3 py-3.5">
            <dt className="w-28 shrink-0 font-bold text-neutral-600">
              {row.label}
            </dt>
            <dd className="min-w-0 flex-1">{row.value}</dd>
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
