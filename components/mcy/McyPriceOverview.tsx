import { CASES } from "./McyPricing";
import { LINE_URL } from "./McyHeader";

const FEATURED_CASES = [0, 1, 3] as const;

export default function McyPriceOverview() {
  return (
    <section id="price-overview" data-section="price_overview" aria-labelledby="price-overview-title" className="scroll-mt-5 border-y border-lux-gold/40 bg-white px-4 py-7 text-lux-green-ink tracking-normal">
      <p className="text-center text-[14px] font-bold text-lux-gold-deep">作業内容と費用を、事例で確認</p>
      <h2 id="price-overview-title" className="mt-2 text-center text-[23px] font-black leading-normal">特殊清掃の料金事例</h2>
      <p className="mt-3 text-[15px] leading-7">必要な作業は、汚染の範囲や臭いの状態で変わります。実際の事例と作業内容をご覧ください。</p>
      <div className="mt-4 divide-y divide-lux-gold/30 border-y border-lux-gold/30">
        {FEATURED_CASES.map((index) => {
          const item = CASES[index];
          return (
            <a key={item.title} href={`#case-${index + 1}`} data-gtm={`price_overview_case_${index + 1}`} className="grid grid-cols-[72px_minmax(0,1fr)] items-center gap-3 py-4 transition-colors hover:bg-lux-green-soft/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lux-green">
              <img src={item.after} alt={`${item.title}の施工後`} width={72} height={72} loading="lazy" decoding="async" className="aspect-square w-[72px] rounded-[6px] object-cover" />
              <div className="min-w-0">
                <h3 className="text-[14px] font-bold leading-6">{item.title}</h3>
                <p className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-[23px] font-black tabular-nums text-[#b32921]">{item.price}<span className="ml-1 text-[13px]">円</span></span>
                  <span className="text-[14px] font-bold text-lux-green">作業内訳を見る →</span>
                </p>
              </div>
            </a>
          );
        })}
      </div>
      <p className="mt-4 text-[14px] leading-6">掲載金額は各事例の料金です。同じ場所・間取りでも、必要な作業により費用は異なります。</p>
      <p className="mt-2 text-[14px] leading-6">特殊清掃は50,000円から。空間除菌・消毒のみの事例と、体液除去・消臭・家財撤去を含む事例では、作業範囲が異なります。現地確認のうえ、お見積りをご提示します。</p>
      <a href={LINE_URL} target="_blank" rel="noopener noreferrer" data-gtm="cta_line_price_overview" className="mt-5 flex min-h-12 items-center justify-center rounded-[8px] bg-[#087f36] px-3 py-3 text-center text-[15px] font-bold leading-6 text-white transition-colors hover:bg-[#06682c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lux-green">自分の場合の費用をLINEで相談</a>
      <p className="mt-2 text-center text-[14px] leading-6">写真がなくても相談できます｜24時間受付</p>
      <nav aria-label="お急ぎの方へ" className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-3 text-[13px] font-bold">
        <a href="#ryokin" data-gtm="price_overview_all" className="underline underline-offset-4">すべての料金事例</a>
        <a href="#business-support" data-gtm="price_overview_business" className="underline underline-offset-4">大家・管理会社様へ</a>
      </nav>
    </section>
  );
}
