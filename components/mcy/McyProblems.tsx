import type { ReactNode } from "react";
import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from "./McyHeader";
import McyManga from "./McyManga";
import McyDaihyo from "./McyDaihyo";
import {
  CheckGreen,
  GoldCard,
  GoldDiamond,
  LeafSprig,
  LuxCtaPill,
  LuxHeading,
  Shield,
  Sparkle,
} from "./McyLux";

/**
 * Body block 1 — worries (manga) / solution / strengths / 6-step process /
 * restoration goal. Reproduces design mockups (1)(2)(3) in the KV-matched
 * green×gold luxury theme: cream grounds with soft window-light + gold dot
 * texture, deep-emerald shields, gold hairline frames, mincho headings.
 * All copy verified against content.json (no baked/garbled text).
 */

const STRENGTH_CHECKS = [
  "体液が染みた床材の撤去",
  "血痕の除去",
  "夏場の強い腐敗臭",
  "長年蓄積したタバコ臭",
];

const PROCESS: readonly { name: string; desc: string; icon: ReactNode }[] = [
  {
    name: "汚染箇所の解体・仕上げ",
    desc: "原因除去からリフォームまで一貫対応。",
    icon: <path d="M10 3h6v4h2v3h-8V7h-2V5h2V3Zm-1 9h10l-1 11H10L9 12Z" />,
  },
  {
    name: "防臭・特殊コーティング",
    desc: "臭いの再発を長期的に防止。",
    icon: <path d="M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5l8-3Zm-1 12 5-5-1.4-1.4L11 11.2 9.4 9.6 8 11l3 3Z" />,
  },
  {
    name: "感染リスク対応消毒",
    desc: "最適な薬剤で二次感染リスクを防止。",
    icon: <path d="M11 2h2v3h-2V2ZM4.2 5.6l1.4-1.4 2.1 2.1L6.3 7.7 4.2 5.6ZM2 11h3v2H2v-2Zm2.2 7.4 2.1-2.1 1.4 1.4-2.1 2.1-1.4-1.4ZM11 19h2v3h-2v-3Zm7.4-.7-2.1-2.1 1.4-1.4 2.1 2.1-1.4 1.4ZM19 11h3v2h-3v-2Zm-.7-5.4 1.4 1.4-2.1 2.1-1.4-1.4 2.1-2.1ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />,
  },
  {
    name: "特許取得水系消臭",
    desc: "環境にも人体にも優しい強力消臭を実現。",
    icon: <path d="M12 2.5c3.6 4.2 6.5 8 6.5 11.4A6.5 6.5 0 0 1 5.5 13.9C5.5 10.5 8.4 6.7 12 2.5Z" />,
  },
  {
    name: "特殊ルームクリーニング",
    desc: "素材を傷めず臭気・汚れを除去。",
    icon: <path d="M12 2l1.6 4.3L18 8l-4.4 1.7L12 14l-1.6-4.3L6 8l4.4-1.7L12 2Zm6 10 .9 2.3 2.3.9-2.3.9L18 20l-.9-2.3-2.3-.9 2.3-.9L18 12ZM6 14l.7 1.8 1.8.7-1.8.7L6 19l-.7-1.8L3.5 16.5l1.8-.7L6 14Z" />,
  },
  {
    name: "専用薬剤",
    desc: "植物由来成分で即効性と安全性を両立。",
    icon: <path d="M20 4c-8 0-13 4-13 10 0 1.2.2 2.3.6 3.3L4 21l1.4 1.4 3.7-3.7c1 .4 2.1.6 3.3.6 6 0 10-5 10-13V4h-2.4ZM9 15c2-5 5-7 9-8-3 4-5 6-9 8Z" />,
  },
];

export default function McyProblems() {
  return (
    <>
      {/* ===== worries (manga) ===== */}
      <section className="lux-rays relative w-full overflow-hidden px-4 py-[clamp(28px,8vw,46px)]">
        {/* seamless blend from the KV image bottom (warm cream) into this section */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[clamp(60px,16vw,96px)] bg-gradient-to-b from-[#f7f5ef] to-transparent"
        />
        <LeafSprig className="left-[-8px] top-[6px] h-[clamp(62px,17vw,96px)] w-auto opacity-70" />
        <LeafSprig flip className="right-[-8px] top-[clamp(20px,6vw,40px)] h-[clamp(50px,14vw,80px)] w-auto opacity-60" />
        <Sparkle className="right-[9%] top-[clamp(28px,8vw,50px)] text-[clamp(10px,3vw,15px)] text-lux-gold/80" />

        <div className="relative">
          <LuxHeading kicker="はじめてでも安心" watermark="STORY">
            マンガでわかる
            <br />
            <span className="text-lux-green">ご相談〜解決</span>の流れ
          </LuxHeading>

          <McyManga />

          {/* real 代表 太田 photo + message right after the manga (trust bridge) */}
          <McyDaihyo />

          {/* fact-based urgency + inline dual CTA (data-cta-section hides sticky bar) */}
          <GoldCard className="mx-auto mt-[clamp(16px,4.4vw,24px)] max-w-[460px]">
            <div data-cta-section className="px-4 py-[clamp(15px,4.2vw,21px)]">
              <p className="text-center font-display text-[clamp(15px,4.2vw,19px)] font-black leading-snug text-lux-green-ink">
                特殊清掃は<span className="text-lux-crimson">“時間との勝負”</span>です
              </p>
              <GoldDiamond />
              <p className="mt-[clamp(8px,2.4vw,12px)] text-center text-[clamp(11px,3.1vw,13.5px)] font-medium leading-[1.9] text-lux-green-ink/85 [word-break:auto-phrase]">
                臭いや体液は、時間の経過とともに床材・壁材へ浸透し、害虫の発生や原状回復費用の増大につながります。夏場は特に進行が速いため、早めのご相談が結果的に費用を抑えることにつながります。
              </p>

              <div className="mt-[clamp(12px,3.4vw,18px)] flex flex-col gap-[10px]">
                <LuxCtaPill
                  tone="phone"
                  href={PHONE_TEL}
                  gtm="cta_tel_worries"
                  ariaLabel="電話で今すぐ相談する 03-4400-2098（受付 9:00〜21:00 不定休）"
                  top="最短即日で現地確認に伺います"
                  main={PHONE_DISPLAY}
                  sub="相談無料｜9:00〜21:00 不定休"
                />
                <LuxCtaPill
                  tone="line"
                  href={LINE_URL}
                  gtm="cta_line_worries"
                  ariaLabel="LINEで写真を送って相談する（写真相談・無料・24時間受付）"
                  top="写真を送るだけ・無料相談"
                  main="LINEで写真相談する"
                  sub="24時間受付｜写真がなくてもOK"
                  external
                />
              </div>
            </div>
          </GoldCard>

          <span
            aria-hidden="true"
            className="mx-auto mt-[clamp(10px,2.8vw,15px)] block h-0 w-0 border-l-[11px] border-r-[11px] border-t-[11px] border-l-transparent border-r-transparent border-t-lux-green/50"
          />
        </div>
      </section>

      {/* ===== solution + strengths (mockup 1) ===== */}
      <section className="lux-rays relative w-full overflow-hidden px-4 py-[clamp(28px,8vw,46px)]">
        <LeafSprig flip className="right-[-10px] top-[10px] h-[clamp(60px,16vw,92px)] w-auto opacity-65" />
        <Sparkle className="left-[7%] top-[clamp(16px,4.6vw,30px)] text-[clamp(11px,3.2vw,16px)] text-lux-gold/80" />

        <div className="relative">
          <div className="relative text-center">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[clamp(190px,56vw,280px)] w-[clamp(190px,56vw,280px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,162,78,0.16),rgba(200,162,78,0)_70%)]"
            />
            <p className="relative font-display text-[clamp(15px,4.2vw,20px)] font-bold text-lux-green-ink">
              そのお悩みはセレンシアが
            </p>
            <p className="relative mt-[clamp(4px,1.4vw,8px)] font-display font-black leading-[1.15] [text-shadow:0_1px_0_rgba(255,255,255,0.85)]">
              <span className="text-[clamp(32px,9.2vw,48px)] text-lux-green">対応力</span>
              <span className="mx-1 text-[clamp(21px,6vw,30px)] text-lux-gold-deep">&amp;</span>
              <span className="text-[clamp(32px,9.2vw,48px)] text-lux-green">技術力</span>
              <span className="ml-1 text-[clamp(25px,7vw,36px)] text-lux-green-ink">で解決！</span>
            </p>
            <GoldDiamond />
            <p className="relative mt-[clamp(8px,2.2vw,12px)] text-[clamp(11.5px,3.2vw,14px)] font-bold text-lux-green-ink/85">
              セレンシアだからできる、特殊清掃の強みをチェック！
            </p>
          </div>

          <img
            src="/img/kaiketsu_photo.jpg"
            alt="特殊清掃の作業風景"
            width={948}
            height={188}
            loading="lazy"
            decoding="async"
            className="mt-[clamp(14px,3.8vw,20px)] w-full rounded-[14px] border-4 border-white object-cover shadow-[0_12px_28px_rgba(18,61,40,0.2)] ring-1 ring-lux-gold/40"
          />

          <GoldCard className="mt-[clamp(16px,4.4vw,24px)] overflow-hidden">
            <div className="overflow-hidden rounded-[18px]">
              <div className="relative">
                <img
                  src="/img/kaiketsu_s2.jpg"
                  alt="特殊清掃の現場写真（浴室・玄関・床の汚染箇所）"
                  width={1000}
                  height={175}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover"
                />
                <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
              </div>
              <div className="px-4 pb-5 pt-1 text-center">
                <p className="inline-block rounded-full border border-lux-gold/40 bg-lux-cream px-[clamp(12px,3.4vw,18px)] py-[3px] text-[clamp(10px,2.8vw,13px)] font-bold tracking-[0.04em] text-lux-green">
                  豊富な現場と対応実績あり
                </p>
                <h3 className="mt-2 font-display text-[clamp(18px,5vw,24px)] font-black leading-snug text-lux-green-ink">
                  孤独死・事故死現場など
                  <br />
                  どんなケースにも対応
                </h3>
                <span aria-hidden="true" className="mx-auto mt-2 block h-[3px] w-[clamp(44px,12vw,64px)] rounded-full bg-gradient-to-r from-lux-gold-light to-lux-gold-deep" />
                <ul className="mt-3 grid grid-cols-1 gap-[7px] min-[420px]:grid-cols-2">
                  {STRENGTH_CHECKS.map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-2 rounded-[10px] border border-lux-gold/25 bg-lux-cream px-3 py-2 shadow-[0_2px_6px_rgba(18,61,40,0.06)]"
                    >
                      <CheckGreen className="mt-[2px] h-[clamp(17px,4.8vw,22px)] w-[clamp(17px,4.8vw,22px)]" />
                      <span className="text-[clamp(10.5px,3vw,13px)] font-bold text-lux-green-ink">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GoldCard>
        </div>
      </section>

      {/* ===== 6-step process (mockup 2) ===== */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-lux-cream to-lux-cream-2 px-4 py-[clamp(28px,8vw,46px)]">
        <div aria-hidden="true" className="lux-dots absolute inset-0 opacity-60" />
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(255,255,255,0.9),transparent_45%)]" />
        <LeafSprig className="left-[-10px] top-[clamp(30px,9vw,60px)] h-[clamp(56px,15vw,86px)] w-auto opacity-60" />
        <Sparkle className="right-[6%] top-[clamp(16px,4.6vw,30px)] text-[clamp(11px,3.2vw,16px)] text-lux-gold/80" />

        <div className="relative">
          <LuxHeading kicker="セレンシアの技術" watermark="PROCESS">
            特殊清掃の基本
            <span className="mx-1 font-display text-[clamp(32px,9vw,46px)] text-lux-green">6</span>
            工程
          </LuxHeading>

          <ol className="mx-auto mt-[clamp(14px,4vw,22px)] flex max-w-[460px] flex-col gap-[clamp(9px,2.4vw,13px)]">
            {PROCESS.map((s, i) => (
              <li key={s.name}>
                <GoldCard>
                  <div className="flex items-center gap-3 px-[clamp(10px,3vw,15px)] py-[clamp(10px,2.8vw,14px)]">
                    <Shield n={i + 1} className="h-[clamp(40px,10.8vw,52px)] w-[clamp(36px,9.6vw,46px)]" />
                    <div className="min-w-0 flex-1">
                      <p className="text-[clamp(13px,3.6vw,16px)] font-black leading-snug text-lux-green-ink">{s.name}</p>
                      <p className="mt-[2px] text-[clamp(10px,2.8vw,12.5px)] font-medium leading-[1.6] text-lux-green-ink/70">
                        {s.desc}
                      </p>
                    </div>
                    <svg viewBox="0 0 24 24" className="h-[clamp(24px,6.6vw,34px)] w-[clamp(24px,6.6vw,34px)] shrink-0 fill-lux-green/20" aria-hidden="true">
                      {s.icon}
                    </svg>
                  </div>
                </GoldCard>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-3 max-w-[460px] text-center text-[clamp(9px,2.5vw,11px)] font-medium text-lux-green-ink/60">
            ※現場の状況により一部工程を実施しない場合がございます。
          </p>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="cta_line_process"
            className="mx-auto mt-[clamp(8px,2.2vw,12px)] block max-w-[460px] py-[12px] text-center text-[clamp(11px,3.1vw,13px)] font-bold text-lux-green-ink underline decoration-lux-gold decoration-2 underline-offset-4 [word-break:auto-phrase]"
          >
            うちの場合はどの工程が必要？ → LINEで写真を送って確認する（24時間受付）
          </a>
        </div>
      </section>

      {/* ===== restoration goal (mockup 3) ===== */}
      <section className="lux-rays relative w-full overflow-hidden px-4 py-[clamp(28px,8vw,46px)]">
        <LeafSprig className="left-[-10px] top-[8px] h-[clamp(58px,16vw,90px)] w-auto opacity-65" />
        <Sparkle className="right-[8%] top-[clamp(16px,4.6vw,30px)] text-[clamp(11px,3.2vw,16px)] text-lux-gold/80" />

        <div className="relative">
          <div className="relative text-center">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-[0.3em] select-none font-display text-[clamp(44px,14vw,74px)] font-black italic leading-none tracking-[0.08em] text-lux-green/[0.07]"
            >
              GOAL
            </span>
            <p className="relative text-[clamp(11px,3.1vw,14px)] font-bold text-lux-green-ink/75">
              悲惨な状況の影も見えなくなるような
            </p>
            <h2 className="relative mt-[clamp(5px,1.6vw,9px)] font-display text-[clamp(22px,6.2vw,31px)] font-black leading-snug text-lux-green-ink [text-shadow:0_1px_0_rgba(255,255,255,0.8)]">
              誰が見ても<span className="text-lux-green">納得</span>の
              <br />
              <span className="text-lux-green">原状回復</span>がゴールです
            </h2>
            <GoldDiamond />
          </div>

          <div className="relative mx-auto mt-[clamp(14px,3.8vw,20px)] max-w-[460px] px-[clamp(14px,4vw,20px)] py-[clamp(12px,3.4vw,18px)]">
            <span aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-6 w-9 border-l-2 border-t-2 border-lux-gold/80" />
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-6 w-9 border-b-2 border-r-2 border-lux-gold/80" />
            <p className="text-[clamp(11.5px,3.2vw,14px)] font-medium leading-[2] text-lux-green-ink/90 [word-break:auto-phrase]">
              清掃だけでなく、汚染箇所の建材撤去も行い、再利用できる素材を適切に処理します。作業後には、建材の補修や清掃を行い、元の状態に戻します。さらに、防臭・特殊コーティングで臭いの再発を長期的に防止します。原状回復まで一括で作業をすることで、皆様に安心いただける、徹底した特殊清掃ができることがセレンシアの強みです。
            </p>
          </div>

          {/* +α card: full-width photo with emerald scrim + gold badge overlay */}
          <div className="relative mx-auto mt-[clamp(14px,3.8vw,20px)] max-w-[460px] overflow-hidden rounded-[20px] shadow-[0_16px_38px_rgba(12,44,28,0.3)] ring-1 ring-lux-gold/50">
            <img
              src="/img/kaiketsu_s4.jpg"
              alt="専用コーティング剤を噴霧する作業"
              width={370}
              height={500}
              loading="lazy"
              decoding="async"
              className="h-[clamp(158px,44vw,220px)] w-full object-cover object-center"
            />
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a2c1b] via-[#0a2c1b]/72 to-transparent" />
            <span aria-hidden="true" className="pointer-events-none absolute -top-1/4 right-0 h-[150%] w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span aria-hidden="true" className="pointer-events-none absolute inset-[7px] rounded-[14px] ring-1 ring-white/15" />
            <Sparkle className="right-[14px] top-[12px] text-[clamp(11px,3vw,15px)] text-lux-gold-light" />

            <div className="absolute inset-x-0 bottom-0 p-[clamp(14px,4vw,20px)] text-white">
              <span className="inline-flex items-center gap-[6px] rounded-full bg-gradient-to-r from-lux-gold-light via-lux-gold to-lux-gold-deep px-[clamp(10px,2.8vw,14px)] py-[clamp(4px,1.2vw,6px)] shadow-[0_3px_10px_rgba(156,119,41,0.5)] ring-1 ring-white/40">
                <span aria-hidden="true" className="text-[clamp(9px,2.4vw,11px)] leading-none text-lux-green">✦</span>
                <span className="font-display text-[clamp(11px,3vw,14px)] font-black tracking-[0.12em] text-lux-green">
                  さらに ＋α
                </span>
              </span>
              <p className="mt-[clamp(8px,2.2vw,11px)] font-display text-[clamp(16px,4.6vw,21px)] font-black leading-snug [text-shadow:0_2px_10px_rgba(0,0,0,0.45)] [word-break:auto-phrase]">
                専用コーティング剤で
                <span className="text-lux-gold-light">封じ込め“密閉”</span>
              </p>
              <p className="mt-[5px] text-[clamp(10px,2.8vw,12.5px)] font-bold leading-[1.7] text-white/85 [word-break:auto-phrase]">
                臭いの再発を長期的に防ぐ、仕上げの一手間。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
