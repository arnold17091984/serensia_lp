/**
 * No.33 — FAQ + request flow.
 * FAQ: white ground with soft turquoise glow (top-right), each Q&A as a floating
 * white card (turquoise accent bar / turq-gradient Q block / gold A medallion).
 * Flow: layered sky ground, turquoise-gradient STEP blocks + white cards with
 * thin-line icons, turquoise gradient timeline. STEP1 card is the live tel CTA.
 */

const FAQ = [
  { q: "すぐに来てもらえますか？", a: "東京・神奈川を中心に、最短即日で現地確認に伺います。お急ぎの場合は、まずはお電話（9:00〜21:00 年中無休）でご相談ください。" },
  { q: "相談や見積りにお金はかかりますか？", a: "ご相談・お見積り・出張費用はすべて無料です。お見積り確定後の追加費用もありません。金額にご納得いただいてから作業を開始します。" },
  { q: "遠方に住んでいて立ち会えません。依頼できますか？", a: "立ち会い不要で対応可能です。鍵のお預かりも承っております。作業前後の状況は写真などでご報告いたしますので、遠方の方も安心してご依頼いただけます。" },
  { q: "ご近所へ迷惑をかけたくない", a: "作業時はご近所へのご負担をできる限り抑えられるよう、十分に配慮しております。ロゴや業者名の入った服装は避け、目立たない形で訪問・作業を行います。搬出時の動きやお声がけなどにも気を配り、近隣の方に配慮しながら進めます。" },
  { q: "夜間に発見した場合はどうすればいいですか？", a: "LINE・メールは24時間受付しております。緊急の場合も内容を確認次第、折り返しご連絡いたします。" },
  { q: "クレジットカードで支払いできますか？", a: "はい、当社ではクレジットカードでのお支払いが可能です。安心してご利用いただけるよう各種カードに対応しています。詳細についてはお問い合わせください。" },
  { q: "見積もりの所要時間は？", a: "見積もりは現場調査後、通常30分〜1時間程度でお伝えしています。お急ぎの場合はお電話でご相談ください。" },
  { q: "作業の所要時間は？", a: "作業の内容や規模により異なりますが、一般的には1日〜数日で完了します。作業前に詳細なスケジュールをご案内いたします。" },
  { q: "保険や保証はありますか？", a: "万が一の事故に備え、東京海上日動火災保険の賠償責任保険に加入しております。作業中の予期せぬトラブルにも対応できる体制を整えておりますので、安心してご依頼いただけます。" },
];

const STEPS = [
  { title: "お問い合わせ", desc: "お電話・LINEでご連絡ください（タップで発信）。", tel: true },
  { title: "現地調査・お見積り", desc: "現場を確認し、無料でお見積りを作成。" },
  { title: "ご契約", desc: "内容にご納得いただいた後、契約へ。" },
  { title: "特殊清掃・消臭作業開始", desc: "高度な技術で、徹底的に清掃・消臭。" },
  { title: "作業完了・お引き渡し", desc: "仕上がりをご確認いただき、お引き渡しとなります。" },
];

/** Thin-line icons for each flow step (index-matched with STEPS). */
const STEP_ICON_PATHS: readonly React.ReactNode[] = [
  /* 1: phone */
  <path key="p" d="M5 4h3.5l1.8 4.5-2.2 1.6a12.6 12.6 0 0 0 5.8 5.8l1.6-2.2L20 15.5V19a1.8 1.8 0 0 1-1.8 1.8A15.3 15.3 0 0 1 3.2 5.8 1.8 1.8 0 0 1 5 4Z" />,
  /* 2: magnifier over estimate lines */
  <g key="s">
    <circle cx="10.5" cy="10.5" r="5.5" />
    <path d="m14.8 14.8 5.2 5.2M8.3 9.3h4.4M8.3 11.8h2.6" />
  </g>,
  /* 3: contract document */
  <g key="c">
    <path d="M7 3.5h6.5L18 8v12.5H7Z" />
    <path d="M13.5 3.5V8H18M9.6 12.5h4.8M9.6 15.5h3" />
  </g>,
  /* 4: cleaning sparkle */
  <g key="k">
    <path d="M11.5 4.5 13.3 9.7 18.5 11.5l-5.2 1.8-1.8 5.2-1.8-5.2-5.2-1.8 5.2-1.8Z" />
    <path d="M18.5 4v3M17 5.5h3" />
  </g>,
  /* 5: handover (house + check) */
  <g key="h">
    <path d="m4 11 8-7 8 7M6.5 9.5V20h11V9.5" />
    <path d="m9.5 14.2 2 2 3.5-3.7" />
  </g>,
];

function StepIcon({ index }: Readonly<{ index: number }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[clamp(18px,5vw,22px)] w-[clamp(18px,5vw,22px)]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {STEP_ICON_PATHS[index]}
    </svg>
  );
}

/** Small four-point sparkle (gold/turquoise section accents). */
function Sparkle({ className }: Readonly<{ className: string }>) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 1c.8 6 5.2 10.2 11 11-5.8.8-10.2 5-11 11-.8-6-5.2-10.2-11-11C6.8 11.2 11.2 7 12 1Z" />
    </svg>
  );
}

function SectionHeading({ kicker, watermark, children }: Readonly<{ kicker: string; watermark: string; children: React.ReactNode }>) {
  return (
    <div className="relative text-center">
      {/* oversized english watermark behind the heading */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[clamp(54px,16vw,84px)] font-black uppercase leading-none tracking-[0.08em] text-mcy-turq/10"
      >
        {watermark}
      </span>
      <span className="relative inline-block [filter:drop-shadow(0_3px_6px_rgba(11,127,133,0.3))]">
        <span className="inline-block bg-gradient-to-r from-mcy-turq-bright via-mcy-turq to-mcy-turq-deep px-[clamp(14px,4vw,22px)] py-[clamp(5px,1.5vw,8px)] text-[clamp(10px,2.9vw,14px)] font-black tracking-[0.06em] text-white [clip-path:polygon(4%_0,96%_0,100%_50%,96%_100%,4%_100%,0_50%)]">
          {kicker}
        </span>
      </span>
      <h2 className="relative mt-[clamp(8px,2.4vw,13px)] font-display text-[clamp(22px,6vw,30px)] font-black leading-snug text-mcy-navy">
        {children}
      </h2>
      {/* gold ―◆― ornament */}
      <span aria-hidden="true" className="relative mx-auto mt-[clamp(8px,2.4vw,13px)] flex items-center justify-center gap-[7px]">
        <span className="h-px w-[clamp(30px,9vw,48px)] bg-gradient-to-r from-transparent via-mcy-gold/70 to-mcy-gold" />
        <span className="h-[7px] w-[7px] rotate-45 rounded-[1px] bg-gradient-to-br from-mcy-gold to-mcy-gold-deep shadow-[0_0_6px_rgba(201,162,79,0.55)]" />
        <span className="h-px w-[clamp(30px,9vw,48px)] bg-gradient-to-l from-transparent via-mcy-gold/70 to-mcy-gold" />
      </span>
    </div>
  );
}

export default function McyClosing() {
  return (
    <>
      {/* ===== FAQ ===== */}
      <section id="faq" className="relative w-full overflow-hidden bg-white px-4 py-[clamp(24px,7vw,40px)]">
        {/* layered background: turq glow top-right / faint gold glow bottom-left / micro dots */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-[16%] -top-[8%] h-[clamp(190px,56vw,310px)] w-[clamp(190px,56vw,310px)] rounded-full bg-[radial-gradient(circle,rgba(43,199,205,0.17),transparent_65%)]" />
          <div className="absolute -left-[14%] bottom-[4%] h-[clamp(150px,45vw,250px)] w-[clamp(150px,45vw,250px)] rounded-full bg-[radial-gradient(circle,rgba(201,162,79,0.11),transparent_65%)]" />
          <div className="absolute inset-0 [background-image:radial-gradient(rgba(18,165,171,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />
          <Sparkle className="absolute right-[7%] top-[clamp(18px,5vw,30px)] h-[clamp(10px,2.8vw,14px)] w-[clamp(10px,2.8vw,14px)] text-mcy-gold/75" />
          <Sparkle className="absolute left-[8%] top-[clamp(56px,15vw,90px)] h-[clamp(7px,2vw,10px)] w-[clamp(7px,2vw,10px)] text-mcy-turq/50" />
        </div>

        <div className="relative">
          <SectionHeading kicker="ご不安にお答えします" watermark="FAQ">
            よくある<span className="text-mcy-turq-deep">質問</span>
          </SectionHeading>

          <div className="mx-auto mt-[clamp(14px,4vw,22px)] flex max-w-[460px] flex-col gap-[clamp(10px,2.8vw,14px)]">
            {FAQ.map((f) => (
              <div
                key={f.q}
                className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/85 py-[clamp(12px,3.4vw,17px)] pl-[clamp(16px,4.4vw,21px)] pr-[clamp(12px,3.4vw,17px)] shadow-[0_10px_30px_rgba(18,58,92,0.12)] backdrop-blur-[2px]"
              >
                {/* turquoise accent bar */}
                <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[4px] bg-gradient-to-b from-mcy-turq-bright via-mcy-turq to-mcy-turq-deep" />
                <div className="flex items-start gap-2.5">
                  <span className="grid h-[clamp(24px,6.6vw,30px)] w-[clamp(24px,6.6vw,30px)] shrink-0 place-items-center rounded-[9px] bg-gradient-to-br from-mcy-turq-bright to-mcy-turq-deep font-display text-[clamp(12px,3.3vw,15px)] font-black text-white shadow-[0_3px_8px_rgba(11,127,133,0.35)]">
                    Q
                  </span>
                  <p className="pt-[3px] text-[clamp(12px,3.4vw,14.5px)] font-black leading-[1.65] text-mcy-navy [word-break:auto-phrase]">
                    {f.q}
                  </p>
                </div>
                <div className="mt-[clamp(8px,2.3vw,11px)] flex items-start gap-2.5 border-t border-dashed border-mcy-turq/25 pt-[clamp(8px,2.3vw,11px)]">
                  <span className="grid h-[clamp(24px,6.6vw,30px)] w-[clamp(24px,6.6vw,30px)] shrink-0 place-items-center rounded-full bg-gradient-to-br from-mcy-gold to-mcy-gold-deep font-display text-[clamp(12px,3.3vw,15px)] font-black text-white shadow-[0_3px_8px_rgba(165,129,58,0.35)]">
                    A
                  </span>
                  <p className="pt-[3px] text-[clamp(11px,3.1vw,13px)] font-medium leading-[1.9] text-mcy-navy/85 [word-break:auto-phrase]">
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== flow ===== */}
      <section id="nagare" className="relative w-full overflow-hidden px-4 pb-[clamp(26px,7.5vw,42px)] pt-[clamp(30px,8.5vw,48px)]">
        {/* layered sky background + white wave connecting from the FAQ section */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-mcy-sky via-mcy-turq-light to-mcy-sky" />
          <div className="absolute -left-[18%] top-[3%] h-[clamp(170px,50vw,280px)] w-[clamp(170px,50vw,280px)] rounded-full bg-[radial-gradient(circle,rgba(43,199,205,0.22),transparent_65%)]" />
          <div className="absolute -right-[15%] bottom-[5%] h-[clamp(150px,44vw,250px)] w-[clamp(150px,44vw,250px)] rounded-full bg-[radial-gradient(circle,rgba(201,162,79,0.14),transparent_65%)]" />
          <div className="absolute inset-0 [background-image:radial-gradient(rgba(18,165,171,0.08)_1px,transparent_1px)] [background-size:16px_16px]" />
          <svg viewBox="0 0 520 26" preserveAspectRatio="none" className="absolute left-0 top-0 h-[clamp(14px,4vw,24px)] w-full">
            <path d="M0 0h520v6c-84 13-173 20-260 20S84 19 0 6Z" fill="#ffffff" />
          </svg>
          <Sparkle className="absolute left-[7%] top-[clamp(34px,9vw,54px)] h-[clamp(9px,2.5vw,13px)] w-[clamp(9px,2.5vw,13px)] text-mcy-turq/55" />
          <Sparkle className="absolute right-[6%] top-[clamp(60px,16vw,96px)] h-[clamp(7px,2vw,10px)] w-[clamp(7px,2vw,10px)] text-mcy-gold/70" />
        </div>

        <div className="relative">
          <SectionHeading kicker="即日対応可能！緊急時もご相談ください" watermark="FLOW">
            ご依頼の流れ
            <span className="mx-1 font-display text-[clamp(28px,8vw,40px)] text-mcy-turq-deep">5</span>
            ステップ
          </SectionHeading>

          <ol className="relative mx-auto mt-[clamp(14px,4vw,22px)] flex max-w-[460px] flex-col gap-[clamp(11px,3vw,15px)]">
            {/* turquoise gradient timeline */}
            <span
              aria-hidden="true"
              className="absolute bottom-[clamp(20px,5.5vw,25px)] left-[clamp(18.5px,5.2vw,23.5px)] top-[clamp(20px,5.5vw,25px)] w-[3px] rounded-full bg-gradient-to-b from-mcy-turq-bright via-mcy-turq to-mcy-turq-deep opacity-60"
            />
            {STEPS.map((s, i) => {
              const card = (
                <div
                  className={`flex min-h-[52px] flex-1 items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-[0_10px_24px_rgba(18,58,92,0.12)] backdrop-blur-[2px] ${
                    s.tel ? "ring-2 ring-mcy-turq/50" : ""
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[clamp(12.5px,3.5vw,15px)] font-black leading-snug text-mcy-navy">
                      {s.title}
                    </h3>
                    <p className="mt-[3px] text-[clamp(10px,2.8vw,12.5px)] font-medium leading-[1.75] text-mcy-navy/75">
                      {s.desc}
                    </p>
                    {s.tel ? (
                      <span className="mt-[6px] inline-flex items-center gap-[5px] rounded-full bg-gradient-to-b from-mcy-turq-bright to-mcy-turq-deep px-[clamp(9px,2.5vw,12px)] py-[3px] text-[clamp(9px,2.5vw,11px)] font-bold text-white shadow-[0_3px_8px_rgba(11,127,133,0.35)] ring-1 ring-white/60">
                        <svg viewBox="0 0 24 24" className="h-[10px] w-[10px]" fill="currentColor" aria-hidden="true">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                        タップで発信
                      </span>
                    ) : null}
                  </div>
                  {/* thin-line icon */}
                  <span
                    aria-hidden="true"
                    className="grid h-[clamp(34px,9.4vw,42px)] w-[clamp(34px,9.4vw,42px)] shrink-0 place-items-center rounded-full border border-mcy-turq/35 bg-mcy-turq-light/70 text-mcy-turq-deep"
                  >
                    <StepIcon index={i} />
                  </span>
                </div>
              );
              return (
                <li key={s.title} className="relative flex items-start gap-3">
                  {/* turquoise gradient STEP block */}
                  <span className="z-10 flex h-[clamp(40px,11vw,50px)] w-[clamp(40px,11vw,50px)] shrink-0 flex-col items-center justify-center rounded-[12px] bg-gradient-to-br from-mcy-turq-bright via-mcy-turq to-mcy-turq-deep text-white shadow-[0_6px_14px_rgba(11,127,133,0.4)] ring-2 ring-white/70">
                    <span className="text-[clamp(6px,1.7vw,8px)] font-bold leading-none tracking-[0.14em]">
                      STEP
                    </span>
                    <span className="mt-[2px] font-display text-[clamp(17px,4.7vw,22px)] font-black leading-none">
                      {i + 1}
                    </span>
                  </span>
                  {s.tel ? (
                    <a href="tel:0344002098" data-gtm="cta_tel_flow" className="flex min-w-0 flex-1 transition-[filter] active:brightness-95">
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </>
  );
}
