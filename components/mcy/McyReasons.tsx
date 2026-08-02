import type { ReactNode } from "react";
import { LeafSprig, LuxHeading, Sparkle } from "./McyLux";

/**
 * 選ばれる理由 — differentiation block placed after the on-site gallery (proof)
 * and before pricing, so the "why us" case is made before the money question.
 * Facts only (speed / one-stop restoration / clear pricing / credentials +
 * insurance), all verified against content.json & the license list — no
 * competitor disparagement, no unprovable superlatives (景表法 safe).
 */

const REASONS: ReadonlyArray<{ icon: ReactNode; title: string; desc: string }> = [
  {
    title: "最短即日・年中無休のスピード対応",
    desc: "東京・神奈川 全域を最短即日で現地確認。緊急のご連絡にも年中無休で動きます。被害の拡大・空室期間の長期化を防ぎます。",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </>
    ),
  },
  {
    title: "原因の根本除去から原状回復まで一貫対応",
    desc: "消臭・除菌から汚染建材の撤去、リフォーム・原状回復まで自社で一括。臭いや汚染の再発を根本から防ぎます。",
    icon: (
      <>
        <path d="M12 3.5 5 6v5.2c0 4.4 2.9 7.4 7 9.3 4.1-1.9 7-4.9 7-9.3V6z" />
        <path d="m9 11.8 2.2 2.2L15 9.8" />
      </>
    ),
  },
  {
    title: "明朗会計・お見積り後の追加料金なし",
    desc: "写真からまず概算をご提示。金額にご納得いただいてから作業を開始し、確定後の追加費用は一切ありません。クレジットカードもご利用可能です。",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 8.5 12 12l3.5-3.5M12 12v4.5M9.5 13.5h5M9.5 15.5h5" />
      </>
    ),
  },
  {
    title: "有資格の専門スタッフ＋損害保険に加入",
    desc: "事件現場特殊清掃士・認定遺品整理士など有資格スタッフが対応。万が一に備え、東京海上日動火災保険の賠償責任保険にも加入しています。",
    icon: (
      <>
        <path d="M12 3l7 3v5c0 4.4-2.9 8-7 9-4.1-1-7-4.6-7-9V6z" />
        <circle cx="12" cy="10.5" r="2.3" />
        <path d="M8.6 17c.5-2 1.8-3 3.4-3s2.9 1 3.4 3" />
      </>
    ),
  },
];

export default function McyReasons() {
  return (
    <section data-section="reasons" className="relative w-full overflow-hidden bg-gradient-to-b from-lux-cream to-lux-cream-2 px-4 py-[clamp(28px,8vw,46px)]">
      <div aria-hidden="true" className="lux-dots pointer-events-none absolute inset-0 opacity-50" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-[130px] top-[6%] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(200,162,78,0.16),transparent_65%)]" />
      <LeafSprig className="left-[-10px] top-[clamp(48px,13vw,90px)] h-[clamp(54px,15vw,84px)] w-auto opacity-55" />
      <Sparkle className="right-[8%] top-[clamp(16px,4.6vw,30px)] text-[clamp(11px,3.2vw,16px)] text-lux-gold/80" />

      <div className="relative">
        <LuxHeading kicker="他社との違い" watermark="REASON">
          セレンシアが<span className="text-lux-green">選ばれる理由</span>
        </LuxHeading>

        <ol className="mx-auto mt-[clamp(16px,4.4vw,24px)] flex max-w-[460px] flex-col gap-[clamp(10px,2.8vw,14px)]">
          {REASONS.map((r, i) => (
            <li key={r.title}>
              <div className="relative rounded-[16px] border border-lux-gold/30 bg-white px-[clamp(12px,3.4vw,18px)] py-[clamp(13px,3.4vw,17px)] shadow-[0_8px_22px_rgba(18,61,40,0.12)]">
                {/* gold number medallion */}
                <span className="absolute -left-[9px] -top-[9px] grid h-[clamp(26px,7vw,32px)] w-[clamp(26px,7vw,32px)] place-items-center rounded-full bg-gradient-to-b from-lux-gold-light via-lux-gold to-lux-gold-deep font-display text-[clamp(12px,3.2vw,15px)] font-black text-white shadow-[0_3px_9px_rgba(156,119,41,0.5)] ring-2 ring-white">
                  {i + 1}
                </span>
                <div className="flex items-start gap-[clamp(10px,3vw,14px)]">
                  <span className="grid h-[clamp(38px,10.5vw,48px)] w-[clamp(38px,10.5vw,48px)] shrink-0 place-items-center rounded-full bg-gradient-to-br from-lux-green-2 to-lux-green shadow-[0_4px_10px_rgba(18,61,40,0.35)] ring-2 ring-lux-gold/45">
                    <svg viewBox="0 0 24 24" className="h-[52%] w-[52%]" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {r.icon}
                    </svg>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[clamp(13px,3.6vw,16px)] font-black leading-snug text-lux-green-ink [word-break:auto-phrase]">
                      {r.title}
                    </p>
                    <p className="mt-[4px] text-[clamp(10.5px,2.9vw,12.5px)] font-medium leading-[1.75] text-lux-green-ink/75 [word-break:auto-phrase]">
                      {r.desc}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-[clamp(14px,3.8vw,20px)] max-w-[460px] text-center text-[clamp(11.5px,3.2vw,14px)] font-bold leading-[1.8] text-lux-green-ink [word-break:auto-phrase]">
          だから、
          <span className="text-lux-green">はじめての方や、他社で迷われた方</span>
          にも安心してお任せいただけます。
        </p>
      </div>
    </section>
  );
}
