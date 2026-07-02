import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Onayami from "@/components/Onayami";
import Kaiketsu from "@/components/Kaiketsu";
import Ooya from "@/components/Ooya";
import Support from "@/components/Support";
import Shikaku from "@/components/Shikaku";
import Ihin from "@/components/Ihin";
import CtaSection from "@/components/CtaSection";
import Jisseki from "@/components/Jisseki";
import Faq from "@/components/Faq";
import Nagare from "@/components/Nagare";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";

/**
 * 縦1カラム再構築版LP。
 * 現行スワイプLPの縦チャプター順を踏襲し、横分岐（強み・遺品整理・実績2/3）を本線に統合:
 * FV → クチコミ → お悩み → 解決+強み → 大家様 → サポート体制 → 資格 → 遺品整理
 * → CTA → 実績・参考料金(1-3統合) → FAQ → ご依頼の流れ → CTA → フッター
 */
export default function Home() {
  return (
    <>
      <main className="relative mx-auto w-full max-w-[520px] bg-white shadow-xl">
        <SiteHeader />
        <Hero />
        <Onayami />
        <Kaiketsu />
        {/* CV最適化: 専門家パネルの提言に基づき「価格・証拠」を前段へ配置
            （悩み→解決→料金事例→CTA→信頼形成→FAQ→流れ→最終CTA） */}
        <Jisseki />
        <CtaSection />
        <Ooya />
        <Support />
        <Shikaku />
        <Ihin />
        <Faq />
        <Nagare />
        <CtaSection />
        <SiteFooter />
      </main>
      <StickyCta />
    </>
  );
}
