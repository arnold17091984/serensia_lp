import McyHeader from "@/components/mcy/McyHeader";
import McyFv from "@/components/mcy/McyFv";
import McyProblems from "@/components/mcy/McyProblems";
import McyPricing from "@/components/mcy/McyPricing";
import McyCta from "@/components/mcy/McyCta";
import McyTrust from "@/components/mcy/McyTrust";
import McyClosing from "@/components/mcy/McyClosing";
import McyFooter from "@/components/mcy/McyFooter";
import McyStickyCta from "@/components/mcy/McyStickyCta";

/**
 * まーしー式AI-LP No.33「ターコイズ不動産土地活用フォト」文法での全面再構築版。
 * 原稿: content/content.md（現行LPから抽出）。
 * 配色: 白×ターコイズ×ネイビー×ゴールド／人物は生成しない／CTAは全て生きたHTML。
 * 流れ: FV → 悩み → 解決・強み・工程 → 料金・実績 → CTA → 信頼形成 → FAQ → 流れ → CTA。
 */
export default function Home() {
  return (
    <>
      <main className="relative mx-auto w-full max-w-[520px] bg-white shadow-xl">
        <McyHeader />
        <McyFv />
        <McyProblems />
        <McyPricing />
        <McyCta />
        <McyTrust />
        <McyClosing />
        <McyCta />
        <McyFooter />
      </main>
      <McyStickyCta />
    </>
  );
}
