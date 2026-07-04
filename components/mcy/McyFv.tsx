import { LINE_URL, PHONE_TEL } from "./McyHeader";

/**
 * First view — the approved KV design (Downloads/kv.png) rendered as clean
 * sliced pieces stacked with a little breathing room. The red phone button and
 * green LINE button stay as the artwork; each is wrapped in a live, GTM-tracked
 * link (cta_tel_fv / cta_line_fv) with an animated diagonal shine (.mcy-shine).
 * The KV carries its own header, so the sticky McyHeader stays hidden at the top
 * and slides in on scroll. The design's "マンガでわかる" heading is left off the
 * slice and rendered by McyProblems instead (editable, theme-consistent).
 * Baked copy kept crawlable via sr-only h1 + alt. data-cta-section lets the
 * bottom sticky bar auto-hide while the FV is visible.
 */

/**
 * A bright diagonal band that sweeps across the whole button (`.mcy-shine`).
 * Covers the full slice so the glint clearly crosses the button artwork.
 */
function Shine({ delay = "0s" }: Readonly<{ delay?: string }>) {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <span
        className="mcy-shine absolute inset-y-[-40%] left-0 w-[55%] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.12)_38%,rgba(255,255,255,0.98)_50%,rgba(255,255,255,0.12)_62%,transparent_100%)]"
        style={{ animationDelay: delay }}
      />
    </span>
  );
}

export default function McyFv() {
  return (
    <section className="relative w-full overflow-hidden bg-lux-cream">
      <h1 className="sr-only">
        孤独死・事故現場の特殊清掃専門 セレンシア｜東京・神奈川 全域対応・最短即日で現地確認
      </h1>

      {/* slices sit flush — the KV artwork already bakes in the spacing */}
      <div className="flex w-full flex-col">
        {/* top: header + 全域対応 + headline + 代表 太田 + 4 benefits */}
        <img
          src="/img/kv_top.webp"
          alt="特殊清掃・遺品整理 セレンシア。東京・神奈川 全域対応。孤独死・事故現場の特殊清掃専門。臭い・体液汚染を最短即日で現地確認。代表 太田が対応。相談・見積り無料／追加料金なし／立ち会い不要／近隣配慮・秘密厳守。"
          width={753}
          height={877}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="block w-full"
        />

        {/* CTA buttons — reproduced in HTML/CSS (phone number is real, selectable,
            crawlable text; copy is editable — 不定休 etc). Only THIS block flags
            data-cta-section so the sticky bar re-appears once the buttons scroll off. */}
        <div data-cta-section className="flex flex-col gap-[clamp(6px,1.8vw,10px)] px-[clamp(6px,1.8vw,12px)] py-[clamp(6px,1.8vw,10px)]">
          {/* phone — red glossy button */}
          <a
            href={PHONE_TEL}
            data-gtm="cta_tel_fv"
            aria-label="電話で今すぐ相談する 03-4400-2098（受付 9:00〜21:00 不定休）"
            className="relative block rounded-[16px] bg-gradient-to-b from-[#e7be77] via-[#c99a51] to-[#9c7233] p-[2px] shadow-[0_7px_16px_rgba(150,20,10,0.3)] transition-[filter] active:brightness-95"
          >
            <span className="relative flex min-h-[clamp(70px,18.2vw,82px)] items-center gap-[clamp(6px,2vw,10px)] overflow-hidden rounded-[14px] bg-gradient-to-b from-[#fc4a12] via-[#ee2809] to-[#d20601] px-[clamp(10px,3vw,16px)] py-[clamp(9px,2.5vw,13px)] shadow-[inset_0_2px_2px_rgba(255,255,255,0.28),inset_0_-4px_8px_rgba(110,0,0,0.45)]">
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-[2.5%] top-[3px] h-[36%] rounded-full bg-gradient-to-b from-white/45 to-transparent" />
              <Shine />
              <span className="relative grid h-[clamp(38px,10vw,48px)] w-[clamp(38px,10vw,48px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_5px_rgba(0,0,0,0.25)]">
                <svg viewBox="0 0 24 24" className="h-[54%] w-[54%]" fill="#e01a06" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              <span className="relative min-w-0 flex-1 text-center leading-none text-white [text-shadow:0_1px_2px_rgba(120,0,0,0.5)]">
                <span className="block text-[clamp(11px,3vw,14px)] font-bold tracking-[0.02em]">電話で今すぐ相談する</span>
                <span className="mt-[3px] block text-[clamp(22px,6.4vw,31px)] font-black tracking-[-0.01em]">03-4400-2098</span>
                <span className="mt-[3px] block text-[clamp(8.5px,2.4vw,11px)] font-bold opacity-95">受付時間 9:00〜21:00 / 不定休</span>
              </span>
              <svg viewBox="0 0 24 24" className="relative h-[clamp(18px,5vw,26px)] w-[clamp(18px,5vw,26px)] shrink-0" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </span>
          </a>

          {/* LINE — green glossy button */}
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="cta_line_fv"
            aria-label="LINEで写真を送って相談する（写真相談・概算見積り・24時間受付）"
            className="relative block rounded-[16px] bg-gradient-to-b from-[#e7be77] via-[#c99a51] to-[#9c7233] p-[2px] shadow-[0_7px_16px_rgba(6,120,20,0.28)] transition-[filter] active:brightness-95"
          >
            <span className="relative flex min-h-[clamp(70px,18.2vw,82px)] items-center gap-[clamp(6px,2vw,10px)] overflow-hidden rounded-[14px] bg-gradient-to-b from-[#6ccf20] via-[#28a516] to-[#017a0c] px-[clamp(10px,3vw,16px)] py-[clamp(9px,2.5vw,13px)] shadow-[inset_0_2px_2px_rgba(255,255,255,0.28),inset_0_-4px_8px_rgba(0,70,5,0.45)]">
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-[2.5%] top-[3px] h-[36%] rounded-full bg-gradient-to-b from-white/40 to-transparent" />
              <Shine delay="1.8s" />
              <span className="relative grid h-[clamp(38px,10vw,48px)] w-[clamp(38px,10vw,48px)] shrink-0 place-items-center rounded-[12px] bg-white shadow-[0_2px_5px_rgba(0,0,0,0.22)]">
                <span className="rounded-[7px] bg-[#06c755] px-[clamp(4px,1.3vw,6px)] py-[clamp(2px,0.8vw,4px)] text-[clamp(7px,2vw,9.5px)] font-black leading-none text-white">
                  LINE
                </span>
              </span>
              <span className="relative min-w-0 flex-1 text-center leading-none text-white [text-shadow:0_1px_2px_rgba(0,70,5,0.5)]">
                <span className="block text-[clamp(11px,3vw,14px)] font-bold tracking-[0.02em]">LINEで写真を送るだけ</span>
                <span className="mt-[3px] block text-[clamp(18px,5.2vw,25px)] font-black tracking-[0.01em]">写真相談・概算見積り</span>
                <span className="mt-[3px] block text-[clamp(8.5px,2.4vw,11px)] font-bold opacity-95">簡単・安心・すぐにご回答します</span>
              </span>
              <svg viewBox="0 0 24 24" className="relative h-[clamp(18px,5vw,26px)] w-[clamp(18px,5vw,26px)] shrink-0" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Google reviews + ご相談実績 */}
        <img
          src="/img/kv_reviews.webp"
          alt="Googleクチコミ高評価 4.9／5.0（クチコミ120件以上）。ご相談実績2,000件以上。ご遺族・大家様・管理会社様から多くご相談いただいています。"
          width={753}
          height={171}
          loading="eager"
          decoding="async"
          className="block w-full"
        />

        {/* こんなお悩みをすべて解決します！ + 6 checks */}
        <img
          src="/img/kv_worries.webp"
          alt="こんなお悩みをすべて解決します。部屋に入れないほど臭いが強い、近隣に知られず静かに対応してほしい、孤独死・事故現場で何から始めればいいか分からない、大家・管理会社から急ぎで対応を求められている、遠方で立ち会えない、費用がどれくらいか不安。"
          width={753}
          height={284}
          loading="lazy"
          decoding="async"
          className="block w-full"
        />

        {/* reassurance: 専門スタッフが丁寧に対応します */}
        <img
          src="/img/kv_reassure.webp"
          alt="どんな状況でも、まずはご相談ください。専門スタッフが丁寧に対応します。"
          width={753}
          height={192}
          loading="lazy"
          decoding="async"
          className="block w-full"
        />
      </div>
    </section>
  );
}
