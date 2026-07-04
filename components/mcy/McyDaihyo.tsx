/**
 * 代表メッセージ — placed right after the manga story so the manga-style read
 * (manga 太田) is followed by the REAL 代表 太田 photo for trust, before the CTAs.
 * Uses the approved green×gold design card (daihyo_section.webp) which carries a
 * handwritten script line that can't be faithfully reproduced in code; it blends
 * on the section's cream ground. Full text mirrored in sr-only/alt for SEO &
 * screen readers. Copy verified against content.json.
 */
export default function McyDaihyo() {
  return (
    <div className="mx-auto mt-[clamp(14px,4vw,22px)] max-w-[472px]">
      <h3 className="sr-only">代表 太田より</h3>
      <p className="sr-only">
        ご遺族・大家様・管理会社様の不安に寄り添い、最後まで丁寧に対応します。どんな状況でも、まずはご相談ください。
        秘密厳守：ご相談内容は厳重に管理し、外部に漏れることは一切ありません。
        明朗会計：追加料金なしの明確な料金体系で、事前にご提示します。
        最後までサポート：ご相談から作業完了後まで、責任を持って最後まで対応いたします。
      </p>
      <img
        src="/img/daihyo_section.webp"
        alt="代表 太田より。ご遺族・大家様・管理会社様の不安に寄り添い、最後まで丁寧に対応します。どんな状況でも、まずはご相談ください。秘密厳守・明朗会計・最後までサポート。"
        width={1202}
        height={1169}
        loading="lazy"
        decoding="async"
        className="block w-full"
      />
    </div>
  );
}
