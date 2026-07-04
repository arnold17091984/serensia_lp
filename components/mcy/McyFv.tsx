import McyFvCtas from "./McyFvCtas";

/**
 * First view — the approved KV design (kv.png) rendered as two sliced images
 * with the CTA button band cut out and replaced by the live, trackable coded
 * buttons (McyFvCtas). This keeps the design pixel-perfect while the CTAs stay
 * tappable, time-aware and GTM-tracked. The baked-in copy is kept crawlable via
 * an sr-only headline and descriptive alt text.
 * Section background matches the KV's warm-white so the button band is seamless.
 */
export default function McyFv() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fdfcf8]">
      <h1 className="sr-only">
        孤独死・事故現場の特殊清掃専門 セレンシア｜東京・神奈川 全域対応・最短即日で現地確認
      </h1>

      {/* hero (approved design image): headline + 代表 太田 + 4 benefits */}
      <img
        src="/img/kv_fv_top.webp"
        alt="孤独死・事故現場の特殊清掃専門 セレンシア。東京・神奈川 全域対応。臭い・体液汚染を最短即日で現地確認。代表 太田が対応。相談・見積り無料／追加料金なし／立ち会い不要／近隣配慮・秘密厳守。"
        width={1086}
        height={614}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="block w-full"
      />

      {/* CTA band sliced out of the design → live, trackable coded buttons */}
      <div className="pb-[clamp(12px,3.4vw,18px)]">
        <McyFvCtas />
      </div>

      {/* proof (approved design image): Google reviews + 相談実績 */}
      <img
        src="/img/kv_fv_proof.webp"
        alt="Googleクチコミ高評価 4.9／5.0（クチコミ120件以上）。ご相談実績2,000件以上。ご遺族・大家様・管理会社様から多くご相談いただいています。"
        width={1086}
        height={149}
        loading="eager"
        decoding="async"
        className="block w-full"
      />
    </section>
  );
}
