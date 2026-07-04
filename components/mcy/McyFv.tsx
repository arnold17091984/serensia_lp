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

        {/* CTA buttons — only THIS block flags data-cta-section, so the bottom
            sticky bar re-appears the moment the hero buttons scroll off (no dead zone) */}
        <div data-cta-section>
          {/* phone button (design piece) — tappable + shine */}
          <a
            href={PHONE_TEL}
            data-gtm="cta_tel_fv"
            aria-label="電話で今すぐ相談する 03-4400-2098（受付 9:00〜21:00 不定休）"
            className="relative block overflow-hidden transition-[filter] active:brightness-95"
          >
            <img src="/img/kv_btn_phone.webp" alt="電話で今すぐ相談する 03-4400-2098" width={753} height={140} loading="eager" decoding="async" className="block w-full" />
            <Shine />
          </a>

          {/* LINE button (design piece) — tappable + shine (offset so it alternates) */}
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="cta_line_fv"
            aria-label="LINEで写真を送って相談する（写真相談・概算見積り・24時間受付）"
            className="relative block overflow-hidden transition-[filter] active:brightness-95"
          >
            <img src="/img/kv_btn_line.webp" alt="LINEで写真を送るだけ 写真相談・概算見積り" width={753} height={142} loading="eager" decoding="async" className="block w-full" />
            <Shine delay="1.8s" />
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
