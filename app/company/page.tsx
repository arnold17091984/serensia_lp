import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要｜セレンシア（株式会社TAKAKU）",
  robots: { index: false, follow: false },
};

const COMPANY_ROWS: { label: string; value: React.ReactNode }[] = [
  { label: "会社名", value: "株式会社TAKAKU" },
  { label: "サービス名", value: "セレンシア" },
  {
    label: "代表者",
    value: (
      <>
        {/* TODO: 代表 太田様のフルネームを記入 */}
        【要記入】
      </>
    ),
  },
  {
    label: "所在地",
    value: (
      <>
        {/* TODO: 所在地を記入 */}
        【要記入】
      </>
    ),
  },
  {
    label: "電話番号",
    value: (
      <>
        <a href="tel:0344002098" className="underline underline-offset-2">
          03-4400-2098
        </a>
        <span className="mt-1 block text-[12px] leading-relaxed text-neutral-500">
          お電話受付 9:00〜21:00（不定休）／LINE・メールは24時間受付・緊急時は折り返し対応
        </span>
      </>
    ),
  },
  { label: "事業内容", value: "特殊清掃・遺品整理・原状回復" },
];

export default function CompanyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[520px] bg-white px-5 pb-16 pt-10">
      <h1 className="border-l-4 border-brand-800 pl-3 font-serif text-[22px] font-bold text-ink">
        会社概要
      </h1>

      <dl className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200 text-[14px] leading-relaxed text-ink">
        {COMPANY_ROWS.map((row) => (
          <div key={row.label} className="flex py-3.5">
            <dt className="w-24 shrink-0 font-bold text-neutral-600">
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
