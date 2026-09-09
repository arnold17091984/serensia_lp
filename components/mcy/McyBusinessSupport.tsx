import { LineCta, PhoneCta } from "./CtaButton";

export default function McyBusinessSupport() {
  return (
    <section id="business-support" data-section="business_support" aria-labelledby="business-support-title" className="scroll-mt-[80px] border-y border-lux-border bg-lux-green-soft px-5 py-7 text-lux-green-ink tracking-normal">
      <h2 id="business-support-title" className="text-[22px] font-black leading-normal">ご事情に合わせて、<br />必要な対応をご案内します</h2>
      <dl className="mt-5 divide-y divide-lux-green/15">
        <div className="pb-4">
          <dt className="text-[16px] font-bold">ご遺族・遠方のご親族へ</dt>
          <dd className="mt-2 text-[15px] leading-7">何を頼めばよいか分からない場合もご相談ください。特殊清掃と一緒に、遺品整理・供養についてもお話を伺います。</dd>
        </div>
        <div className="py-4">
          <dt className="text-[16px] font-bold">大家様・管理会社様へ</dt>
          <dd className="mt-2 text-[15px] leading-7">臭いや汚染箇所の処理から原状回復まで。現地確認のご希望を伺い、近隣に配慮して対応します。</dd>
        </div>
      </dl>
      <div className="border-l-2 border-lux-gold pl-4">
        <h3 className="text-[15px] font-bold">現地に行けない方もご相談ください</h3>
        <p className="mt-2 text-[15px] leading-7">立ち会い不要・鍵のお預かりに対応。作業前後の状況を写真などでご報告します。</p>
      </div>
      {/* compact (md) pair — the section is a text block, not a decision point */}
      <div className="mt-4 flex flex-col gap-[10px]">
        <LineCta size="md" gtm="cta_line_business_support" main="現場の対応をLINEで相談" sub="24時間受付" ariaLabel="現場の対応をLINEで相談する（24時間受付）" />
        <PhoneCta size="md" gtm="cta_tel_business_support" sub="電話受付 9:00〜21:00" />
      </div>
    </section>
  );
}
