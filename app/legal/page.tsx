import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記｜セレンシア（株式会社TAKAKU）",
  robots: { index: false, follow: false },
};

const LEGAL_ROWS: { label: string; value: React.ReactNode }[] = [
  { label: "事業者名", value: "株式会社TAKAKU" },
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
    label: "連絡先",
    value: (
      <>
        <a
          href="tel:0344002098"
          className="font-mono text-[15px] font-medium tracking-tight text-teal-700 underline decoration-hairline underline-offset-4"
        >
          03-4400-2098
        </a>
        <span className="mt-1.5 block text-[12px] leading-relaxed text-muted">
          お電話受付 9:00〜21:00（不定休）／LINE・メールは24時間受付・緊急時は折り返し対応
        </span>
      </>
    ),
  },
  {
    label: "役務の内容",
    value: "特殊清掃・遺品整理・原状回復",
  },
  {
    label: "料金",
    value: "現地でのお見積りにより確定します。",
  },
  {
    label: "支払方法",
    value: "現金／クレジットカード",
  },
  {
    label: "キャンセルについて",
    value: (
      <>
        {/* TODO: 契約書面のキャンセル規定に合わせて記入 */}
        【要記入】
      </>
    ),
  },
];

export default function LegalPage() {
  return (
    <main className="bg-blueprint mx-auto min-h-screen w-full max-w-[520px] bg-white px-5 pb-16 pt-12">
      <p className="font-mono text-[11px] tracking-[0.22em] text-teal-600">
        LEGAL NOTICE
      </p>
      <h1 className="mt-3 text-[24px] font-bold tracking-tight text-ink">
        特定商取引法に基づく表記
      </h1>

      <dl className="mt-8 divide-y divide-hairline border-y border-hairline text-[14px] leading-relaxed text-ink">
        {LEGAL_ROWS.map((row) => (
          <div key={row.label} className="py-4">
            <dt className="text-[13px] font-bold leading-relaxed text-muted">
              {row.label}
            </dt>
            <dd className="mt-1.5">{row.value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-12 text-center text-[13px]">
        <a
          href="/"
          className="text-teal-700 underline decoration-hairline underline-offset-4"
        >
          ← トップページへ戻る
        </a>
      </p>
    </main>
  );
}
