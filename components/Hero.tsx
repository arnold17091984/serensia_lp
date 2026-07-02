/**
 * Hero — pixel-perfect reproduction of the client KV (kv_reference.png).
 * The approved design is rendered as the image itself; interactive phone/LINE
 * regions are transparent <a> hotspots layered on top, and the marketing copy
 * is provided as visually-hidden real text for SEO / screen readers.
 *
 * Hotspot coordinates (%) come from the design's own pixel-perfect map.
 */

const PHONE = "tel:0344002098";
const LINE = "https://page.line.me/782qjphg";

interface Hotspot {
  label: string;
  href: string;
  external?: boolean;
  /** GTM: dataLayer event / CV label (configure the tag to fire on this) */
  gtm: string;
  left: string;
  top: string;
  width: string;
  height: string;
}

const HOTSPOTS: Hotspot[] = [
  { label: "電話で相談する 03-4400-2098", href: PHONE, gtm: "cta_tel_header", left: "58.5%", top: "1.1%", width: "21.8%", height: "6.5%" },
  { label: "LINEで写真相談する", href: LINE, external: true, gtm: "cta_line_header", left: "82%", top: "1.2%", width: "16%", height: "6.4%" },
  { label: "電話で今すぐ相談する 03-4400-2098", href: PHONE, gtm: "cta_tel_fv", left: "1.7%", top: "55.5%", width: "47.1%", height: "10.3%" },
  { label: "LINEで写真を送って相談する", href: LINE, external: true, gtm: "cta_line_fv", left: "50.3%", top: "55.5%", width: "48.1%", height: "10.3%" },
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
        強い腐敗臭・体液汚染・害虫の発生まで原因を特定し、根本から解決します。相談・見積り無料、追加料金なし、立ち会い不要、近隣配慮・秘密厳守。Googleクチコミ高評価4.9（120件以上）、ご相談実績2,000件以上。電話
        03-4400-2098（受付9:00〜21:00 年中無休）／LINEで写真を送るだけの写真相談・概算見積り。
      </p>

      {/* the approved key visual */}
      <img
        src="/img/kv.jpg"
        alt="特殊清掃・遺品整理 セレンシア｜孤独死・事故現場の特殊清掃専門。最短即日で現地確認。相談・見積り無料、秘密厳守。"
        width={941}
        height={1672}
        fetchPriority="high"
        className="block w-full"
      />

      {/* transparent interactive hotspots over the baked CTAs (live + trackable) */}
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
          className="absolute rounded-[12px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          style={{ left: h.left, top: h.top, width: h.width, height: h.height }}
        />
      ))}
    </section>
  );
}
