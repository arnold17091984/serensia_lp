import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜セレンシア（株式会社TAKAKU）",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[520px] bg-white px-5 pb-16 pt-10 text-[14px] leading-[1.9] text-ink">
      <h1 className="border-l-4 border-brand-800 pl-3 font-serif text-[22px] font-bold">
        プライバシーポリシー
      </h1>

      <p className="mt-6">
        株式会社TAKAKU（以下「当社」といいます）は、特殊清掃・遺品整理サービス「セレンシア」の提供にあたり、お客様の個人情報を以下の方針に基づき適切に取り扱います。
      </p>

      <section className="mt-8">
        <h2 className="border-b border-neutral-200 pb-1.5 font-serif text-[17px] font-bold">
          1. 取得する個人情報
        </h2>
        <p className="mt-3">
          当社は、サービスの提供に必要な範囲で、次の個人情報を取得します。
        </p>
        <ul className="mt-2 space-y-1">
          <li className="flex">
            <span className="shrink-0">・</span>
            <span>氏名</span>
          </li>
          <li className="flex">
            <span className="shrink-0">・</span>
            <span>連絡先（電話番号・メールアドレス・LINEアカウント等）</span>
          </li>
          <li className="flex">
            <span className="shrink-0">・</span>
            <span>作業現場の住所　等</span>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="border-b border-neutral-200 pb-1.5 font-serif text-[17px] font-bold">
          2. 利用目的
        </h2>
        <p className="mt-3">取得した個人情報は、次の目的で利用します。</p>
        <ul className="mt-2 space-y-1">
          <li className="flex">
            <span className="shrink-0">・</span>
            <span>お見積りのご案内</span>
          </li>
          <li className="flex">
            <span className="shrink-0">・</span>
            <span>特殊清掃・遺品整理・原状回復等の作業のご提供</span>
          </li>
          <li className="flex">
            <span className="shrink-0">・</span>
            <span>お問い合わせへのご連絡・ご対応</span>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="border-b border-neutral-200 pb-1.5 font-serif text-[17px] font-bold">
          3. 第三者提供
        </h2>
        <p className="mt-3">
          当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供しません。
        </p>
      </section>

      <section className="mt-8">
        <h2 className="border-b border-neutral-200 pb-1.5 font-serif text-[17px] font-bold">
          4. 業務委託
        </h2>
        <p className="mt-3">
          当社は、利用目的の達成に必要な範囲で個人情報の取り扱いを外部に委託する場合があります。その場合、委託先に対して必要かつ適切な監督を行います。
        </p>
      </section>

      <section className="mt-8">
        <h2 className="border-b border-neutral-200 pb-1.5 font-serif text-[17px] font-bold">
          5. 開示等の請求
        </h2>
        <p className="mt-3">
          ご本人からの個人情報の開示・訂正・利用停止等のご請求には、法令に基づき速やかに対応します。ご請求の窓口は次のとおりです。
        </p>
        <p className="mt-2">
          {/* TODO: 開示請求窓口（担当部署・連絡先）を記入 */}
          開示請求窓口：【要記入】
        </p>
      </section>

      <div className="mt-10 text-right text-[13px] text-neutral-600">
        <p>
          {/* TODO: 制定日を記入 */}
          制定日：【要記入】
        </p>
        <p className="mt-1">株式会社TAKAKU</p>
      </div>

      <p className="mt-10 text-center text-[13px]">
        <a href="/" className="text-brand-800 underline underline-offset-2">
          ← トップページへ戻る
        </a>
      </p>
    </main>
  );
}
