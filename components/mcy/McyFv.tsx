import { LINE_URL, PHONE_TEL } from "./McyHeader";

/**
 * First view — the approved KV design (kv.png) shown as one full image (header to
 * footer band) with the red phone / green LINE buttons kept in the artwork.
 * Transparent, percentage-positioned hotspots sit exactly over those two buttons
 * so they are tappable and GTM-tracked (cta_tel_fv / cta_line_fv) while the
 * design stays untouched. The KV carries its own header, so the sticky McyHeader
 * stays hidden at the top and only slides in on scroll (see McyHeader).
 * Baked copy kept crawlable via sr-only h1 + alt. data-cta-section lets the
 * bottom sticky bar auto-hide while the FV is on screen.
 */
export default function McyFv() {
  return (
    <section className="relative w-full overflow-hidden bg-[#efece4]">
      <h1 className="sr-only">
        孤独死・事故現場の特殊清掃専門 セレンシア｜東京・神奈川 全域対応・最短即日で現地確認
      </h1>

      <div data-cta-section className="relative w-full">
        <img
          src="/img/kv_fv_full.webp"
          alt="孤独死・事故現場の特殊清掃専門 セレンシア。東京・神奈川 全域対応。臭い・体液汚染を最短即日で現地確認。代表 太田が対応。相談・見積り無料／追加料金なし／立ち会い不要／近隣配慮・秘密厳守。Googleクチコミ4.9（120件以上）・ご相談実績2,000件以上。部屋に入れないほど臭いが強い、何から始めればいいか分からない、近隣に知られたくない等のお悩みをすべて解決します。"
          width={941}
          height={1672}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="block w-full align-bottom"
        />

        {/* live tappable hotspot over the phone button in the design */}
        <a
          href={PHONE_TEL}
          data-gtm="cta_tel_fv"
          aria-label="電話で今すぐ相談する 03-4400-2098（受付 9:00〜21:00 年中無休）"
          className="absolute left-[3.4%] top-[58.9%] h-[8.3%] w-[93.2%] rounded-[16px] transition-colors active:bg-black/10"
        />
        {/* live tappable hotspot over the LINE button in the design */}
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-gtm="cta_line_fv"
          aria-label="LINEで写真を送って相談する（写真相談・概算見積り・24時間受付）"
          className="absolute left-[3%] top-[67.4%] h-[10.5%] w-[94%] rounded-[16px] transition-colors active:bg-black/10"
        />
      </div>
    </section>
  );
}
