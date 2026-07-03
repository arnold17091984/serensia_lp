/**
 * Hero — pixel-perfect reproduction of the approved KV
 * (ChatGPT Image 2026-07-03 17:50, 1024x1536).
 *
 * Hybrid build per the client's parts-kit policy:
 * - The design is served as 6 section slices (seams fall on flat dark-green
 *   ground, so they are invisible). Any future copy tweak only needs the
 *   affected slice regenerated, not the whole KV.
 * - Phone/LINE are real <a> hotspots aligned to the baked buttons
 *   (coordinates measured on the source pixels), tagged with data-gtm for
 *   conversion tracking.
 * - Headline/lead/proof copy is provided as visually-hidden text for
 *   SEO / screen readers.
 */

const PHONE = "tel:0344002098";
const LINE = "https://page.line.me/782qjphg";

const SLICES = [
  { src: "/img/kv_s1_header.jpg", h: 128, alt: "特殊清掃・遺品整理 セレンシア｜相談・見積り無料（24時間受付・年中無休）" },
  { src: "/img/kv_s2_hero.jpg", h: 598, alt: "東京・神奈川全域対応。孤独死・事故現場の特殊清掃専門。臭い・体液汚染を最短即日で現地確認。代表 太田（遺品整理士認定協会 認定優良事業所／事件現場特殊清掃士）" },
  { src: "/img/kv_s3_benefits.jpg", h: 110, alt: "相談・見積り無料／追加料金なし／立ち会い不要／近隣配慮・秘密厳守" },
  { src: "/img/kv_s4_cta.jpg", h: 164, alt: "電話で今すぐ相談する 03-4400-2098（受付時間9:00〜21:00・年中無休）／LINEで写真を送るだけ 写真相談・概算見積り" },
  { src: "/img/kv_s5_proof.jpg", h: 220, alt: "Googleクチコミ高評価 4.9/5.0 クチコミ120件以上／ご相談実績2,000件以上" },
  { src: "/img/kv_s6_worries.jpg", h: 316, alt: "こんなお悩みをすべて解決します。部屋に入れないほど臭いが強い、孤独死・事故現場で何から始めればいいか分からない、遠方で立ち会えない、近隣に知られず静かに対応してほしい、大家・管理会社から急ぎで対応を求められている、費用がどれくらいか不安" },
];

interface Hotspot {
  label: string;
  href: string;
  external?: boolean;
  /** GTM: fire the CV tag on clicks where data-gtm matches */
  gtm: string;
  left: string;
  top: string;
  width: string;
  height: string;
}

/* measured on the 1024x1536 source (ruler-verified) */
const HOTSPOTS: Hotspot[] = [
  { label: "電話で相談する 03-4400-2098（受付9:00〜21:00 年中無休）", href: PHONE, gtm: "cta_tel_header", left: "53.9%", top: "1.4%", width: "27.9%", height: "5.6%" },
  { label: "LINEで写真相談する", href: LINE, external: true, gtm: "cta_line_header", left: "82.5%", top: "1.4%", width: "15.9%", height: "5.6%" },
  { label: "電話で今すぐ相談する 03-4400-2098", href: PHONE, gtm: "cta_tel_fv", left: "2.7%", top: "54.6%", width: "45.9%", height: "9.6%" },
  { label: "LINEで写真を送るだけ 写真相談・概算見積り", href: LINE, external: true, gtm: "cta_line_fv", left: "50.6%", top: "54.6%", width: "46.7%", height: "9.6%" },
];

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* visually-hidden copy for SEO / accessibility */}
      <h1 className="sr-only">
        孤独死・事故現場の特殊清掃専門。臭い・体液汚染を最短即日で現地確認｜セレンシア（東京・神奈川
        全域対応）
      </h1>
      <p className="sr-only">
        強い腐敗臭・体液汚染・害虫の発生まで原因を特定し、根本から解決します。相談・見積り無料、追加料金なし、立ち会い不要、近隣配慮・秘密厳守。Googleクチコミ高評価4.9／5.0（クチコミ120件以上）、ご相談実績2,000件以上。電話
        03-4400-2098（受付9:00〜21:00 年中無休）／LINEで写真を送るだけの写真相談・概算見積り、簡単・安心・すぐにご回答します。
      </p>

      {/* the approved key visual, sliced per section */}
      {SLICES.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          width={1024}
          height={s.h}
          {...(i === 0
            ? { fetchPriority: "high" as const }
            : i >= 4
              ? { loading: "lazy" as const, decoding: "async" as const }
              : {})}
          className="block w-full"
        />
      ))}

      {/* live, trackable hotspots over the baked CTAs */}
      {HOTSPOTS.map((h) => (
        <a
          key={h.gtm}
          href={h.href}
          aria-label={h.label}
          data-gtm={h.gtm}
          data-cta={h.gtm}
          {...(h.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="absolute rounded-[10px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          style={{ left: h.left, top: h.top, width: h.width, height: h.height }}
        />
      ))}
    </section>
  );
}
