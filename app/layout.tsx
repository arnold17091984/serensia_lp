import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import McyTracking from "@/components/mcy/McyTracking";

// Fonts are served from the OS font stack (see globals.css @theme). Google Fonts
// is intentionally not used at build time so the static export builds anywhere;
// the mincho/gothic system fallbacks match the design on iOS/Mac/Windows.

// NOTE: 現行LPと同じGTMコンテナを使用（AB計測を同一プロパティに集約するため）
const GTM_ID = "GTM-M3SM8R2M";
// GA4 (Google tag). Loaded directly so page_view + cta_click reach GA4 without
// requiring any GTM UI work. Coexists with GTM (which has no GA4 tag).
const GA4_ID = "G-0VCKZL8TG7";

// JSON-LD: mirrors on-page text (FAQ + business info). Reinforces landing-page
// relevance/transparency for Google Ads without adding any new claims.
const FAQ_LD = [
  ["相談や見積りにお金はかかりますか？", "ご相談・お見積り・出張費用はすべて無料です。お見積り確定後の追加費用もありません。金額にご納得いただいてから作業を開始します。"],
  ["すぐに来てもらえますか？", "東京・神奈川を中心に、最短即日で現地確認に伺います。お急ぎの場合は、まずはお電話（9:00〜21:00 年中無休）でご相談ください。"],
  ["夜間に発見した場合はどうすればいいですか？", "LINE・メールは24時間受付しております。緊急の場合も内容を確認次第、折り返しご連絡いたします。"],
  ["ご近所へ迷惑をかけたくない", "作業時はご近所へのご負担をできる限り抑えられるよう、十分に配慮しております。ロゴや業者名の入った服装は避け、目立たない形で訪問・作業を行います。"],
  ["遠方に住んでいて立ち会えません。依頼できますか？", "立ち会い不要で対応可能です。鍵のお預かりも承っております。作業前後の状況は写真などでご報告いたします。"],
  ["クレジットカードで支払いできますか？", "はい、クレジットカードでのお支払いが可能です。各種カードに対応しています。"],
  ["見積もりの所要時間は？", "見積もりは現場調査後、通常30分〜1時間程度でお伝えしています。"],
  ["作業の所要時間は？", "作業の内容や規模により異なりますが、一般的には1日〜数日で完了します。"],
  ["保険や保証はありますか？", "万が一の事故に備え、東京海上日動火災保険の賠償責任保険に加入しております。"],
] as const;

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "セレンシア（特殊清掃・遺品整理）",
      description:
        "孤独死・事故現場の特殊清掃、腐敗臭・体液汚染の除去、遺品整理、原状回復。東京・神奈川を中心に関東一円、最短即日で現地確認。",
      telephone: "+81-3-4400-2098",
      image: "/img/og.jpg",
      priceRange: "¥50,000〜¥460,000",
      areaServed: ["東京都", "神奈川県", "関東一円"],
      openingHours: "Mo-Su 09:00-21:00",
      parentOrganization: { "@type": "Organization", name: "株式会社TAKAKU" },
      makesOffer: {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "特殊清掃・遺品整理・原状回復" },
        priceCurrency: "JPY",
        priceSpecification: { "@type": "PriceSpecification", minPrice: 50000, priceCurrency: "JPY" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_LD.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export const metadata: Metadata = {
  // TODO: 本番デプロイ先ドメインが決まったら NEXT_PUBLIC_SITE_URL を設定
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://tokuso-serenshia.com",
  ),
  title: "セレンシア｜特殊清掃・遺品整理（東京・神奈川 最短即日対応）",
  description:
    "孤独死・腐敗臭・体液汚染の特殊清掃と遺品整理。東京・神奈川を中心に関東一円、出張費用・お見積り0円。近隣への配慮徹底・秘密厳守。",
  robots: { index: false, follow: false }, // 広告流入専用LP（現行運用を踏襲）
  openGraph: {
    title: "セレンシア｜特殊清掃・遺品整理",
    description:
      "臭いの原因から徹底除去。相談と見積無料、料金をすぐにご提示します。",
    images: ["/img/og.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <script
          type="application/ld+json"
          // structured data mirrors on-page FAQ + business info
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA4_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            title="Google Tag Manager"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <McyTracking />
        {children}
      </body>
    </html>
  );
}
