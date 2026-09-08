import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from "./McyHeader";

const SUPPORT = [
  ["立ち会い不要・鍵のお預かり", "遠方のご遺族や、現地へ伺うことが難しい大家様もご相談ください。"],
  ["写真で作業状況をご報告", "現地にいらっしゃらない場合も、作業前後の状況を写真などでご報告します。"],
  ["近隣への配慮・原状回復まで", "周囲に配慮して作業を進め、消臭・汚染箇所の処理から原状回復までご相談いただけます。"],
] as const;

export default function McyBusinessSupport() {
  return (
    <section id="business-support" data-section="business_support" aria-labelledby="business-support-title" className="scroll-mt-5 border-y border-lux-gold/40 bg-lux-green-soft px-5 py-7 text-lux-green-ink tracking-normal">
      <p className="text-[12px] font-bold text-lux-gold-deep">遠方のご遺族・大家様・管理会社様へ</p>
      <h2 id="business-support-title" className="mt-2 text-[22px] font-black leading-normal">現地に行けなくても、<br />まずはご相談ください</h2>
      <dl className="mt-5 divide-y divide-lux-green/15">
        {SUPPORT.map(([title, detail]) => (
          <div key={title} className="py-3 first:pt-0">
            <dt className="text-[15px] font-bold">{title}</dt>
            <dd className="mt-1 text-[13px] leading-7">{detail}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-[13px] leading-7">現場の市区町村・分かる範囲の状況・現地確認のご希望をお知らせください。写真のご用意がなくても大丈夫です。</p>
      <a href={LINE_URL} target="_blank" rel="noopener noreferrer" data-gtm="cta_line_business_support" className="mt-4 flex min-h-12 items-center justify-center rounded-[8px] bg-lux-green px-3 py-3 text-center text-[15px] font-bold leading-6 text-white hover:bg-lux-green-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lux-green">現場の対応をLINEで相談</a>
      <p className="mt-2 text-center text-[12px]">LINEは24時間受付</p>
      <a href={PHONE_TEL} data-gtm="cta_tel_business_support" className="mt-3 flex min-h-11 flex-wrap items-center justify-center gap-x-2 rounded-[6px] border border-[#b32921]/30 bg-white px-3 py-2 text-center text-[14px] font-bold text-[#a52c25] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lux-green"><span>電話で相談</span><span className="tabular-nums">{PHONE_DISPLAY}</span></a>
      <p className="mt-2 text-center text-[12px]">電話受付 9:00〜21:00</p>
    </section>
  );
}
