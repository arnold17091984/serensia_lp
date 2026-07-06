import McyFv from "@/components/mcy/McyFv";
import McyProblems from "@/components/mcy/McyProblems";
import McyGallery from "@/components/mcy/McyGallery";
import McyReasons from "@/components/mcy/McyReasons";
import McyPricing from "@/components/mcy/McyPricing";
import McyCta from "@/components/mcy/McyCta";
import McyTrust from "@/components/mcy/McyTrust";
import McyClosing from "@/components/mcy/McyClosing";
import McyFooter from "@/components/mcy/McyFooter";
import McyStickyCta from "@/components/mcy/McyStickyCta";

/**
 * セレンシアLP — 緑×金の高級テーマ（新KVと統一）。
 * 原稿: content/content.md（現行LPから抽出）。テキストは全て content.json 準拠。
 * 配色: 緑×金×赤／人物は生成しない（KV/漫画のイラスト・実写のみ）／CTAは全て生きたHTML。
 * 流れ: FV(自前ヘッダー内蔵) → 悩み(漫画) → 解決・強み・工程 → 現場ギャラリー → 選ばれる理由 → 料金・実績 → CTA → 信頼形成 → FAQ → 流れ → CTA。
 * スクロール追従ヘッダーは廃止（KVがヘッダーを内蔵しているため）。
 */
export default function Home() {
  return (
    <>
      <main className="relative mx-auto w-full max-w-[520px] bg-white shadow-xl">
        <McyFv />
        <McyProblems />
        <McyGallery />
        <McyReasons />
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
