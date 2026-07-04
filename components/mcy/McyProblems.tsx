/**
 * No.33 — worries / solution / strengths / 6-step process / restoration goal.
 * Layered grounds (blurred photo + white veil, sky gradient + dot grid),
 * navy mincho headings with turquoise ribbon kickers, gold diamond ornaments,
 * watermark English behind headings, deep-shadow white cards.
 */

const WORRIES = [
  ["部屋に入れない", "ほど臭いが強い"],
  ["孤独死・事故現場", "で何から始めればいいか分からない"],
  ["遠方", "で立ち会えない"],
  ["", "近隣に知られず静かに対応してほしい"],
  ["", "大家・管理会社から急ぎで対応を求められている"],
  ["", "費用がどれくらいか不安"],
] as const;

/* small live-photo thumbs cycled on the right edge of each worry pill */
const WORRY_THUMBS = [
  { src: "/img/hero_photo1.jpg", w: 300, h: 160 },
  { src: "/img/hero_photo2.jpg", w: 420, h: 160 },
  { src: "/img/hero_photo3.jpg", w: 280, h: 160 },
] as const;

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

          <ul className="mx-auto mt-[clamp(14px,4vw,22px)] flex max-w-[460px] flex-col gap-[clamp(8px,2.3vw,12px)]">
            {WORRIES.map(([em, rest], i) => {
              const thumb = WORRY_THUMBS[i % WORRY_THUMBS.length];
              return (
                <li
                  key={em + rest}
                  className="flex items-center gap-[clamp(7px,2vw,11px)] rounded-xl border border-white/70 bg-white/90 py-[clamp(8px,2.3vw,12px)] pl-[clamp(10px,2.8vw,14px)] pr-[clamp(8px,2.3vw,12px)] shadow-[0_6px_18px_rgba(18,58,92,0.12)] backdrop-blur-[2px]"
                >
                  <Check />
                  <span aria-hidden="true" className="h-[clamp(20px,5.6vw,26px)] w-px shrink-0 bg-mcy-turq/30" />
                  <p className="min-w-0 flex-1 text-[clamp(11.5px,3.2vw,14px)] font-bold leading-[1.65] text-mcy-navy [word-break:auto-phrase]">
                    {em && (
                      <span className="text-mcy-turq-deep underline decoration-mcy-gold decoration-2 underline-offset-4">
                        {em}
                      </span>
                    )}
                    {rest}
                  </p>
                  <img
                    src={thumb.src}
                    alt=""
                    aria-hidden="true"
                    width={thumb.w}
                    height={thumb.h}
                    loading="lazy"
                    decoding="async"
                    className="h-[clamp(38px,10.5vw,50px)] w-[clamp(52px,14.5vw,72px)] shrink-0 rounded-lg object-cover shadow-[0_2px_6px_rgba(18,58,92,0.18)] ring-1 ring-mcy-turq/20"
                  />
                </li>
              );
            })}
          </ul>

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
                <svg
                  aria-hidden="true"
                  viewBox="0 0 8 14"
                  className="h-[clamp(12px,3.4vw,16px)] w-auto shrink-0 text-mcy-turq/60"
                >
                  <path
                    d="M1 1l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-3 max-w-[460px] text-center text-[clamp(9px,2.5vw,11px)] font-medium text-mcy-navy/65">
            ※現場の状況により一部工程を実施しない場合がございます。
          </p>
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

          {/* +α card: navy gradient, gold rim, glass shine */}
          <div className="mx-auto mt-[clamp(14px,3.8vw,20px)] flex max-w-[460px] items-stretch overflow-hidden rounded-2xl border-2 border-mcy-gold/60 shadow-[0_12px_30px_rgba(18,41,63,0.3)]">
            <img
              src="/img/kaiketsu_s4.jpg"
              alt="専用コーティング剤を噴霧する作業"
              width={370}
              height={500}
              loading="lazy"
              decoding="async"
              className="w-2/5 object-cover"
            />
            <div className="relative flex w-3/5 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-mcy-navy to-mcy-navy-deep px-4 py-6 text-center text-white">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-1/4 top-0 h-[140%] w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />
              <Sparkle className="right-3 top-2 text-[11px] text-mcy-gold/80" />
              <p className="relative font-display text-[clamp(14px,4vw,18px)] font-bold text-mcy-gold-light">
                さらに<span className="ml-1 text-[clamp(22px,6vw,28px)] font-black text-mcy-gold">+α</span>
              </p>
              <span
                aria-hidden="true"
                className="relative mt-1 block h-px w-[clamp(60px,17vw,90px)] bg-gradient-to-r from-transparent via-mcy-gold to-transparent"
              />
              <p className="relative mt-2 text-[clamp(12px,3.4vw,15px)] font-bold leading-[1.8]">
                専用コーティング剤で
                <br />
                封じ込め<span className="text-mcy-gold">“密閉”</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
