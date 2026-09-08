import { FAQ } from "@/components/mcy/faq-data";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import McyTracking from "@/components/mcy/McyTracking";

// Fonts are served from the OS font stack (see globals.css @theme). Google Fonts
// is intentionally not used at build time so the static export builds anywhere;
// the mincho/gothic system fallbacks match the design on iOS/Mac/Windows.

// GA4 (Google tag), loaded directly. GTM (GTM-M3SM8R2M) was removed on purpose:
// the container only held the OLD LP's triggers plus a stale GA4 property
// (G-184ZZJZ34M), so it cost ~150KB/PV and double-sent page_view while never
// firing on this LP's events. All tracking goes through gtag + McyTracking.
const GA4_ID = "G-0VCKZL8TG7";

// Google Ads call tracking (website call conversions, 2026-08-27). For visitors
// arriving from an ad click (gclid), gtag swaps the displayed 03-4400-2098 for a
// Google forwarding number so MANUAL dials get measured with call duration —
// taps were already tracked (phone_click), this closes the see-number-and-dial
// blind spot. Callers still reach the real line; non-ad visitors see the real
// number unchanged.
const AW_ID = "AW-16684609359";
const AW_PHONE_CONVERSION_LABEL = "AW-16684609359/5SehCL_FwOgcEM_e65M-";
const PHONE_DISPLAY_FOR_SWAP = "03-4400-2098";

// JSON-LD: mirrors on-page text (FAQ + business info). Reinforces landing-page
// relevance/transparency for Google Ads without adding any new claims.
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "セレンシア（特殊清掃・遺品整理）",
      description:
        "孤独死・事故現場の特殊清掃、腐敗臭・体液汚染の除去、遺品整理、原状回復。東京・神奈川を中心に関東一円、最短即日で現地確認。",
      telephone: "+81-3-4400-2098",
      image: "https://tokuso-serenshia.com/img/og.jpg",
      address: {
        "@type": "PostalAddress",
        postalCode: "158-0087",
        addressRegion: "東京都",
        addressLocality: "世田谷区",
        streetAddress: "玉堤1丁目21-12",
      },
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
      mainEntity: FAQ.map(([q, a]) => ({
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
    images: [{ url: "/img/og.jpg?v=2", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "セレンシア｜特殊清掃・遺品整理",
    description:
      "臭いの原因から徹底除去。相談と見積無料、料金をすぐにご提示します。",
    images: ["/img/og.jpg?v=2"],
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
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA4_ID}');gtag('config','${AW_ID}');gtag('config','${AW_PHONE_CONVERSION_LABEL}',{'phone_conversion_number':'${PHONE_DISPLAY_FOR_SWAP}'});`}
        </Script>
        <McyTracking />
        {children}
      </body>
    </html>
  );
}
