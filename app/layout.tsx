import type { Metadata } from "next";
import Script from "next/script";
import {
  Noto_Sans_JP,
  Noto_Serif_JP,
  Shippori_Mincho_B1,
} from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-noto-serif",
  display: "swap",
});

const shippori = Shippori_Mincho_B1({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-shippori",
  display: "swap",
});

// NOTE: 現行LPと同じGTMコンテナを使用（AB計測を同一プロパティに集約するため）
const GTM_ID = "GTM-M3SM8R2M";

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
    <html
      lang="ja"
      className={`${notoSans.variable} ${notoSerif.variable} ${shippori.variable}`}
    >
      <body className="font-sans antialiased">
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
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
        {children}
      </body>
    </html>
  );
}
