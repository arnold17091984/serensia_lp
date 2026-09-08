/** A personal welcome followed by the practical path to a consultation. */
export default function McyConsultationGuide() {
  return (
    <section
      data-section="consultation_guide"
      aria-labelledby="consultation-guide-title"
      className="mx-3 mb-5 mt-4 overflow-hidden rounded-[18px] border border-[#d8c7a0] bg-white text-lux-green-ink tracking-normal shadow-[0_6px_20px_rgba(7,49,95,0.06)]"
    >
      <div className="px-4 pb-5 pt-5 min-[390px]:px-5">
        <div className="grid grid-cols-[minmax(0,1fr)_76px] items-center gap-x-3 gap-y-3 min-[390px]:grid-cols-[minmax(0,1fr)_96px] min-[390px]:gap-y-2">
          <h2 id="consultation-guide-title" className="font-display text-[20px] font-bold leading-[1.65] min-[390px]:text-[26px]">
            ご相談だけでも、<br />大丈夫です。
          </h2>
          <figure className="col-start-2 row-start-1 min-[390px]:row-span-2">
            <img src="/img/daihyo_photo.webp" alt="セレンシア代表 太田 貴也" width={760} height={862} loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-t-[48px] rounded-b-[10px] object-cover" />
            <figcaption className="mt-2 text-center text-[12px] leading-5">代表 <span className="font-bold">太田</span></figcaption>
          </figure>
          <p className="col-span-2 text-[14px] leading-[1.8] min-[390px]:col-span-1">
            うまく説明できなくても、お話を伺いながらご案内します。
          </p>
        </div>

        <div className="mt-5 border-l-2 border-lux-gold pl-3">
          <p className="text-[15px] font-bold leading-6"><span className="inline-block">最初は、市区町村と</span><span className="inline-block">お困りのことから。</span></p>
          <p className="mt-1 text-[14px] leading-6 text-[#4b6075]">写真がなくてもご相談いただけます。</p>
        </div>
      </div>

      <div className="bg-[#f2f8ff] px-3 pb-4 pt-4 min-[390px]:px-5">
        <ol aria-label="相談からご契約まで" className="relative grid grid-cols-3 gap-2 text-center before:absolute before:left-[16.666%] before:right-[16.666%] before:top-[19px] before:border-t before:border-[#c8d9e9]">
          <li className="relative">
            <span aria-hidden="true" className="relative mx-auto grid h-10 w-10 place-items-center rounded-full bg-lux-green text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 11a8 8 0 0 1-8 8H5l-3 3V11a9 9 0 0 1 18 0Z" /><path d="M7 10h8M7 14h5" /></svg>
            </span>
            <p className="mt-2 text-[14px] font-bold leading-6">ご相談</p>
            <p className="mt-1 text-[12px] leading-5 text-[#4b6075]">電話・LINEで</p>
          </li>
          <li className="relative">
            <span aria-hidden="true" className="relative mx-auto grid h-10 w-10 place-items-center rounded-full border border-[#c8d9e9] bg-white text-lux-green">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 4H5v17h14V4h-4M9 3h6v4H9zM8 12h8M8 16h5" /></svg>
            </span>
            <p className="mt-2 text-[14px] font-bold leading-6">現地確認</p>
            <p className="mt-1 text-[12px] leading-5 text-[#4b6075]">お見積り</p>
          </li>
          <li>
            <span aria-hidden="true" className="relative mx-auto grid h-10 w-10 place-items-center rounded-full border border-[#c8d9e9] bg-white text-lux-green">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z" /><path d="m8 12 3 3 5-6" /></svg>
            </span>
            <p className="mt-2 text-[14px] font-bold leading-6">ご契約</p>
            <p className="mt-1 text-[12px] leading-5 text-[#4b6075]">納得してから</p>
          </li>
        </ol>
      </div>
      <a href="#nagare" data-gtm="consultation_guide_flow" className="flex min-h-[52px] items-center justify-between gap-3 border-t border-[#c8d9e9] px-4 text-[14px] font-bold transition-colors hover:bg-[#f2f8ff] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-lux-green min-[390px]:px-5">
        ご依頼の流れを詳しく見る
        <span aria-hidden="true" className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#d8c7a0]">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-5-5 5 5-5 5" /></svg>
        </span>
      </a>
    </section>
  );
}
