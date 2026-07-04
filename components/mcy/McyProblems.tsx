import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from "./McyHeader";
import McyManga from "./McyManga";

/**
 * No.33 — worries (manga) / solution / strengths / 6-step process / restoration.
 * Layered grounds (blurred photo + white veil, sky gradient + dot grid),
 * navy mincho headings with turquoise ribbon kickers, gold diamond ornaments,
 * watermark English behind headings, deep-shadow white cards.
 * The worries are told as a 5-chapter manga (McyManga) instead of a bullet list.
 */

const STRENGTH_CHECKS = [
  "体液が染みた床材の撤去",
  "血痕の除去",
  "夏場の強い腐敗臭",
  "長年蓄積したタバコ臭",
];

const PROCESS = [
  { name: "汚染箇所の解体・仕上げ", desc: "原因除去からリフォームまで一貫対応。" },
  { name: "防臭・特殊コーティング", desc: "臭いの再発を長期的に防止。" },
  { name: "感染リスク対応消毒", desc: "最適な薬剤で二次感染リスクを防止。" },
  { name: "特許取得水系消臭", desc: "環境にも人体にも優しい強力消臭を実現。" },
  { name: "特殊ルームクリーニング", desc: "素材を傷めず臭気・汚れを除去。" },
  { name: "専用薬剤", desc: "植物由来成分で即効性と安全性を両立。" },
];

/* gold "—◆—" heading ornament */
function GoldOrnament() {
  return (
    <span aria-hidden="true" className="mt-[clamp(9px,2.4vw,13px)] flex items-center justify-center gap-[7px]">
      <span className="h-px w-[clamp(32px,9vw,50px)] bg-gradient-to-r from-transparent to-mcy-gold" />
      <span className="h-[7px] w-[7px] rotate-45 border border-mcy-gold-deep bg-mcy-gold shadow-[0_0_4px_rgba(201,162,79,0.6)]" />
      <span className="h-px w-[clamp(32px,9vw,50px)] bg-gradient-to-l from-transparent to-mcy-gold" />
    </span>
  );
}

/* tiny sparkle accent — decorative only */
function Sparkle({ className }: Readonly<{ className: string }>) {
  return (
    <span aria-hidden="true" className={`pointer-events-none absolute select-none leading-none ${className}`}>
      ✦
    </span>
  );
}

function RibbonHeading({
  kicker,
  watermark,
  children,
}: Readonly<{ kicker?: string; watermark?: string; children: React.ReactNode }>) {
  return (
    <div className="relative text-center">
      {watermark && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-[0.32em] select-none font-display text-[clamp(44px,14vw,74px)] font-black italic leading-none tracking-[0.08em] text-mcy-turq/10"
        >
          {watermark}
        </span>
      )}
      {kicker && (
        <span className="relative inline-block bg-gradient-to-r from-mcy-turq to-mcy-turq-deep px-[clamp(16px,4.6vw,26px)] py-[clamp(6px,1.7vw,9px)] text-[clamp(10px,2.9vw,14px)] font-black tracking-[0.06em] text-white shadow-[0_4px_10px_rgba(11,127,133,0.3)] [clip-path:polygon(4%_0,96%_0,100%_50%,96%_100%,4%_100%,0_50%)]">
          {kicker}
        </span>
      )}
      <h2 className="relative mt-[clamp(9px,2.6vw,14px)] font-display text-[clamp(22px,6vw,30px)] font-black leading-snug tracking-[0.01em] text-mcy-navy [text-shadow:0_1px_0_rgba(255,255,255,0.8)]">
        {children}
      </h2>
      <GoldOrnament />
    </div>
  );
}

/* turquoise-gradient circle check with white ring */
function Check() {
  return (
    <span
      aria-hidden="true"
      className="mt-[2px] grid h-[clamp(17px,4.8vw,22px)] w-[clamp(17px,4.8vw,22px)] shrink-0 place-items-center rounded-full bg-gradient-to-br from-mcy-turq-bright to-mcy-turq-deep text-[clamp(9px,2.6vw,12px)] font-black text-white shadow-[0_2px_6px_rgba(11,127,133,0.35)] ring-1 ring-white/70"
    >
      ✓
    </span>
  );
}

export default function McyProblems() {
  return (
    <>
      {/* ===== worries ===== */}
      <section className="relative w-full overflow-hidden px-4 py-[clamp(28px,8vw,46px)]">
        {/* layered ground: blurred live photo + white veil */}
        <div
          aria-hidden="true"
          className="absolute inset-0 scale-110 bg-[url(/img/onayami_room.jpg)] bg-cover bg-center opacity-60 blur-[6px]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/86 to-mcy-sky/95" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(43,199,205,0.16),transparent_55%)]"
        />
        <Sparkle className="left-[6%] top-[clamp(14px,4vw,26px)] text-[clamp(12px,3.4vw,17px)] text-mcy-turq/50" />
        <Sparkle className="right-[7%] top-[clamp(30px,9vw,54px)] text-[clamp(10px,3vw,15px)] text-mcy-gold/70" />

        <div className="relative">
          <RibbonHeading kicker="こんなお悩みはありませんか？" watermark="WORRIES">
            こんな<span className="text-mcy-turq-deep">お悩み</span>を
            <br />
            すべて解決します！
          </RibbonHeading>

          {/* worries told as a 5-chapter manga (scroll-revealed, progressive) */}
          <McyManga />

          {/* closing navy band → gold-rimmed rounded card */}
          <div className="relative mx-auto mt-[clamp(16px,4.4vw,24px)] max-w-[460px] overflow-hidden rounded-2xl border-2 border-mcy-gold/70 bg-gradient-to-br from-mcy-navy to-mcy-navy-deep px-4 py-[clamp(12px,3.2vw,17px)] shadow-[0_12px_30px_rgba(18,41,63,0.35)]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent"
            />
            <Sparkle className="left-3 top-2 text-[11px] text-mcy-gold/80" />
            <Sparkle className="bottom-2 right-3 text-[11px] text-mcy-gold/80" />
            <p className="relative text-center text-[clamp(11px,3vw,13.5px)] font-black leading-[1.7] text-white">
              どんな状況でも、まずはご相談ください。
              <br />
              専門スタッフが丁寧に対応します。
            </p>
          </div>

          {/* fact-based urgency + inline dual CTA (data-cta-section hides the sticky bar while visible) */}
          <div
            data-cta-section
            className="relative mx-auto mt-[clamp(14px,4vw,22px)] max-w-[460px] overflow-hidden rounded-2xl border-2 border-mcy-gold/60 bg-white/90 px-4 py-[clamp(14px,4vw,20px)] shadow-[0_10px_26px_rgba(18,58,92,0.14)] backdrop-blur-[2px]"
          >
            <p className="text-center font-display text-[clamp(15px,4.2vw,19px)] font-black leading-snug text-mcy-navy">
              特殊清掃は<span className="text-mcy-turq-deep">“時間との勝負”</span>です
            </p>
            <GoldOrnament />
            <p className="mt-[clamp(8px,2.4vw,12px)] text-center text-[clamp(11px,3.1vw,13.5px)] font-medium leading-[1.9] text-mcy-navy/90 [word-break:auto-phrase]">
              臭いや体液は、時間の経過とともに床材・壁材へ浸透し、害虫の発生や原状回復費用の増大につながります。夏場は特に進行が速いため、早めのご相談が結果的に費用を抑えることにつながります。
            </p>

            <div className="mt-[clamp(12px,3.4vw,18px)] flex flex-col gap-[10px]">
              {/* phone pill */}
              <a
                href={PHONE_TEL}
                data-gtm="cta_tel_worries"
                className="relative flex min-h-[clamp(74px,21vw,92px)] items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-white/75 bg-gradient-to-b from-mcy-turq-bright via-mcy-turq to-mcy-turq-deep px-4 py-[clamp(8px,2.4vw,12px)] text-white shadow-[0_8px_20px_rgba(11,143,150,0.4)] ring-1 ring-mcy-gold/70 transition-[filter] active:brightness-90"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-[6%] top-[3px] h-[46%] rounded-full bg-gradient-to-b from-white/40 to-transparent"
                />
                <span className="grid h-[clamp(26px,7vw,36px)] w-[clamp(26px,7vw,36px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_5px_rgba(0,0,0,0.18)]">
                  <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" fill="#0b7f85" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                <span className="relative min-w-0 text-center leading-none">
                  <span className="block whitespace-nowrap text-[clamp(9.5px,2.7vw,12px)] font-black">
                    最短即日で現地確認に伺います
                  </span>
                  <span className="mt-[4px] block whitespace-nowrap text-[clamp(19px,5.5vw,26px)] font-black tracking-[-0.01em]">
                    {PHONE_DISPLAY}
                  </span>
                  <span className="mt-[4px] block whitespace-nowrap text-[clamp(7.5px,2.1vw,10px)] font-bold opacity-95">
                    相談無料｜9:00〜21:00 年中無休
                  </span>
                </span>
                <span className="grid h-[clamp(20px,5.6vw,26px)] w-[clamp(20px,5.6vw,26px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
                  <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" aria-hidden="true">
                    <path d="m9.5 5.5 6.5 6.5-6.5 6.5" fill="none" stroke="#0b7f85" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
              {/* LINE pill */}
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-gtm="cta_line_worries"
                className="relative flex min-h-[clamp(74px,21vw,92px)] items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-white/75 bg-gradient-to-b from-[#25d94e] to-[#06a32a] px-4 py-[clamp(8px,2.4vw,12px)] text-white shadow-[0_8px_20px_rgba(6,163,42,0.35)] ring-1 ring-mcy-gold/70 transition-[filter] active:brightness-90"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-[6%] top-[3px] h-[46%] rounded-full bg-gradient-to-b from-white/40 to-transparent"
                />
                <span className="grid h-[clamp(26px,7vw,36px)] w-[clamp(26px,7vw,36px)] shrink-0 place-items-center rounded-full bg-white text-[clamp(7px,2vw,10px)] font-black text-[#06a32a] shadow-[0_2px_5px_rgba(0,0,0,0.18)]">
                  LINE
                </span>
                <span className="relative min-w-0 text-center leading-none">
                  <span className="block whitespace-nowrap text-[clamp(9.5px,2.7vw,12px)] font-black">
                    写真を送るだけ・無料相談
                  </span>
                  <span className="mt-[4px] block whitespace-nowrap text-[clamp(17px,4.8vw,23px)] font-black tracking-[-0.01em]">
                    LINEで写真相談する
                  </span>
                  <span className="mt-[4px] block whitespace-nowrap text-[clamp(7.5px,2.1vw,10px)] font-bold opacity-95">
                    24時間受付｜写真がなくてもOK
                  </span>
                </span>
                <span className="grid h-[clamp(20px,5.6vw,26px)] w-[clamp(20px,5.6vw,26px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
                  <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" aria-hidden="true">
                    <path d="m9.5 5.5 6.5 6.5-6.5 6.5" fill="none" stroke="#06a32a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <span
            aria-hidden="true"
            className="mx-auto mt-[clamp(10px,2.8vw,15px)] block h-0 w-0 border-l-[11px] border-r-[11px] border-t-[11px] border-l-transparent border-r-transparent border-t-mcy-turq-deep/60"
          />
        </div>
      </section>

      {/* ===== solution ===== */}
      <section className="relative w-full overflow-hidden px-4 py-[clamp(28px,8vw,46px)]">
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-white via-white to-mcy-sky" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(43,199,205,0.14),transparent_50%)]"
        />
        <Sparkle className="right-[8%] top-[clamp(16px,4.6vw,30px)] text-[clamp(11px,3.2vw,16px)] text-mcy-gold/70" />

        <div className="relative">
          <div className="relative text-center">
            {/* large soft turquoise circular glow behind the headline */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[clamp(190px,56vw,280px)] w-[clamp(190px,56vw,280px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(43,199,205,0.24),rgba(43,199,205,0)_70%)]"
            />
            <p className="relative font-display text-[clamp(15px,4.2vw,20px)] font-bold text-mcy-navy">
              そのお悩みはセレンシアが
            </p>
            <p className="relative mt-[clamp(4px,1.4vw,8px)] font-display font-black leading-[1.15] [text-shadow:0_1px_0_rgba(255,255,255,0.85)]">
              <span className="text-[clamp(32px,9.2vw,48px)] text-mcy-turq-deep">対応力</span>
              <span className="mx-1 text-[clamp(21px,6vw,30px)] text-mcy-gold">&</span>
              <span className="text-[clamp(32px,9.2vw,48px)] text-mcy-turq-deep">技術力</span>
              <span className="ml-1 text-[clamp(25px,7vw,36px)] text-mcy-navy">で解決！</span>
            </p>
            <GoldOrnament />
            <p className="relative mt-[clamp(8px,2.2vw,12px)] text-[clamp(11.5px,3.2vw,14px)] font-bold text-mcy-navy/85">
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
            className="mt-[clamp(14px,3.8vw,20px)] w-full rounded-[14px] border-4 border-white object-cover shadow-[0_12px_28px_rgba(18,58,92,0.18)]"
          />

          {/* strengths card: photo header + 2-col chips */}
          <div className="mt-[clamp(16px,4.4vw,24px)] overflow-hidden rounded-2xl border border-white/70 bg-white shadow-[0_10px_30px_rgba(18,58,92,0.14)]">
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
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent"
              />
            </div>
            <div className="px-4 pb-5 pt-1 text-center">
              <p className="inline-block rounded-full border border-mcy-turq/30 bg-mcy-turq-light px-[clamp(12px,3.4vw,18px)] py-[3px] text-[clamp(10px,2.8vw,13px)] font-bold tracking-[0.04em] text-mcy-turq-deep">
                豊富な現場と対応実績あり
              </p>
              <h3 className="mt-2 font-display text-[clamp(18px,5vw,24px)] font-black leading-snug text-mcy-navy">
                孤独死・事故死現場など
                <br />
                どんなケースにも対応
              </h3>
              <span
                aria-hidden="true"
                className="mx-auto mt-2 block h-[3px] w-[clamp(44px,12vw,64px)] rounded-full bg-gradient-to-r from-mcy-turq-bright to-mcy-turq-deep"
              />
              <ul className="mt-3 grid grid-cols-1 gap-[7px] min-[420px]:grid-cols-2">
                {STRENGTH_CHECKS.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-2 rounded-[10px] border border-mcy-turq/20 bg-mcy-sky px-3 py-2 shadow-[0_2px_6px_rgba(18,58,92,0.06)]"
                  >
                    <Check />
                    <span className="text-[clamp(10.5px,3vw,13px)] font-bold text-mcy-navy">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6-step process ===== */}
      <section className="relative w-full overflow-hidden px-4 py-[clamp(28px,8vw,46px)]">
        {/* sky gradient + dot grid + soft glow */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-mcy-sky via-mcy-turq-light to-mcy-sky" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle,rgba(18,165,171,0.18)_1px,transparent_1.5px)] [background-size:16px_16px]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(255,255,255,0.9),transparent_45%)]"
        />
        <Sparkle className="right-[6%] top-[clamp(16px,4.6vw,30px)] text-[clamp(11px,3.2vw,16px)] text-mcy-turq/50" />
        <Sparkle className="left-[7%] bottom-[clamp(20px,6vw,40px)] text-[clamp(10px,3vw,14px)] text-mcy-gold/60" />

        <div className="relative">
          <RibbonHeading kicker="セレンシアの技術" watermark="PROCESS">
            特殊清掃の基本
            <span className="mx-1 font-display text-[clamp(32px,9vw,46px)] text-mcy-turq-deep">6</span>
            工程
          </RibbonHeading>

          <ol className="mx-auto mt-[clamp(14px,4vw,22px)] flex max-w-[460px] flex-col gap-[clamp(8px,2.3vw,12px)]">
            {PROCESS.map((s, i) => (
              <li
                key={s.name}
                className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white px-[clamp(10px,3vw,15px)] py-[clamp(10px,2.8vw,14px)] shadow-[0_8px_22px_rgba(18,58,92,0.13)]"
              >
                {/* turquoise-gradient rounded-square number block */}
                <span className="relative grid h-[clamp(38px,10.2vw,48px)] w-[clamp(38px,10.2vw,48px)] shrink-0 place-items-center overflow-hidden rounded-[12px] bg-gradient-to-br from-mcy-turq-bright via-mcy-turq to-mcy-turq-deep font-display text-[clamp(17px,4.8vw,22px)] font-black text-white shadow-[0_5px_12px_rgba(11,127,133,0.4)] ring-1 ring-white/60">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-[3px] top-[3px] h-2/5 rounded-t-[9px] bg-gradient-to-b from-white/45 to-transparent"
                  />
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[clamp(13px,3.6vw,16px)] font-black leading-snug text-mcy-navy">{s.name}</p>
                  <p className="mt-[2px] text-[clamp(10px,2.8vw,12.5px)] font-medium leading-[1.6] text-mcy-navy/75">
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-3 max-w-[460px] text-center text-[clamp(9px,2.5vw,11px)] font-medium text-mcy-navy/65">
            ※現場の状況により一部工程を実施しない場合がございます。
          </p>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="cta_line_process"
            className="mx-auto mt-[clamp(8px,2.2vw,12px)] block max-w-[460px] py-[12px] text-center text-[clamp(11px,3.1vw,13px)] font-bold text-mcy-navy underline decoration-mcy-gold decoration-2 underline-offset-4 [word-break:auto-phrase]"
          >
            うちの場合はどの工程が必要？ → LINEで写真を送って確認する（24時間受付）
          </a>
        </div>
      </section>

      {/* ===== restoration goal ===== */}
      <section className="relative w-full overflow-hidden px-4 py-[clamp(28px,8vw,46px)]">
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-white via-white to-mcy-sky" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_88%_6%,rgba(43,199,205,0.14),transparent_50%)]"
        />
        <Sparkle className="left-[7%] top-[clamp(16px,4.6vw,30px)] text-[clamp(11px,3.2vw,16px)] text-mcy-gold/70" />

        <div className="relative">
          <div className="relative text-center">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-[0.3em] select-none font-display text-[clamp(44px,14vw,74px)] font-black italic leading-none tracking-[0.08em] text-mcy-turq/10"
            >
              GOAL
            </span>
            <p className="relative text-[clamp(11px,3.1vw,14px)] font-bold text-mcy-navy/80">
              悲惨な状況の影も見えなくなるような
            </p>
            <h2 className="relative mt-[clamp(5px,1.6vw,9px)] font-display text-[clamp(22px,6.2vw,31px)] font-black leading-snug text-mcy-navy [text-shadow:0_1px_0_rgba(255,255,255,0.8)]">
              誰が見ても<span className="text-mcy-turq-deep">納得</span>の
              <br />
              <span className="text-mcy-turq-deep">原状回復</span>がゴールです
            </h2>
            <GoldOrnament />
          </div>

          {/* quote-framed body: gold corner lines */}
          <div className="relative mx-auto mt-[clamp(14px,3.8vw,20px)] max-w-[460px] px-[clamp(14px,4vw,20px)] py-[clamp(12px,3.4vw,18px)]">
            <span aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-6 w-9 border-l-2 border-t-2 border-mcy-gold/80" />
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-6 w-9 border-b-2 border-r-2 border-mcy-gold/80" />
            <p className="text-[clamp(11.5px,3.2vw,14px)] font-medium leading-[2] text-mcy-navy/90 [word-break:auto-phrase]">
              清掃だけでなく、汚染箇所の建材撤去も行い、再利用できる素材を適切に処理します。作業後には、建材の補修や清掃を行い、元の状態に戻します。さらに、防臭・特殊コーティングで臭いの再発を長期的に防止します。原状回復まで一括で作業をすることで、皆様に安心いただける、徹底した特殊清掃ができることがセレンシアの強みです。
            </p>
          </div>

          {/* +α card: full-width photo with navy scrim + gold badge overlay */}
          <div className="relative mx-auto mt-[clamp(14px,3.8vw,20px)] max-w-[460px] overflow-hidden rounded-[20px] shadow-[0_16px_38px_rgba(18,41,63,0.28)] ring-1 ring-mcy-gold/40">
            <img
              src="/img/kaiketsu_s4.jpg"
              alt="専用コーティング剤を噴霧する作業"
              width={370}
              height={500}
              loading="lazy"
              decoding="async"
              className="h-[clamp(158px,44vw,220px)] w-full object-cover object-center"
            />
            {/* navy scrim bottom→transparent for legible text */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mcy-navy-deep via-mcy-navy-deep/72 to-transparent"
            />
            {/* diagonal glass shine */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-1/4 right-0 h-[150%] w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
            {/* soft gold hairline inset */}
            <span aria-hidden="true" className="pointer-events-none absolute inset-[7px] rounded-[14px] ring-1 ring-white/15" />
            <Sparkle className="right-[14px] top-[12px] text-[clamp(11px,3vw,15px)] text-mcy-gold" />

            <div className="absolute inset-x-0 bottom-0 p-[clamp(14px,4vw,20px)] text-white">
              <span className="inline-flex items-center gap-[6px] rounded-full bg-gradient-to-r from-mcy-gold to-mcy-gold-deep px-[clamp(10px,2.8vw,14px)] py-[clamp(4px,1.2vw,6px)] shadow-[0_3px_10px_rgba(165,129,58,0.5)] ring-1 ring-white/40">
                <span aria-hidden="true" className="text-[clamp(9px,2.4vw,11px)] leading-none">✦</span>
                <span className="font-display text-[clamp(11px,3vw,14px)] font-black tracking-[0.12em]">
                  さらに ＋α
                </span>
              </span>
              <p className="mt-[clamp(8px,2.2vw,11px)] font-display text-[clamp(16px,4.6vw,21px)] font-black leading-snug [text-shadow:0_2px_10px_rgba(0,0,0,0.45)] [word-break:auto-phrase]">
                専用コーティング剤で
                <span className="text-mcy-gold-light">封じ込め“密閉”</span>
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
