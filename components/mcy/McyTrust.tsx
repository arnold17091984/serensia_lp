import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from "./McyHeader";

/**
 * No.33 — trust block: owners / support / license & insurance / ihin.
 * 実写写真のみ使用（生成人物なし）。代表写真は実在アセットのため掲載可。
 * Visual language: layered photo/gradient backgrounds, deep-shadow white
 * cards, gold medallions, glossy pill CTAs (per No.33 turquoise sample).
 */

const OWNER_BADGES = [
  { icon: "home", label: "解体から原状回復まで一貫対応" },
  { icon: "shield", label: "近隣住民への配慮を徹底" },
  { icon: "clock", label: "緊急時も迅速対応" },
] as const;

const SUPPORT_ITEMS: ReadonlyArray<{
  no: string;
  icon: IconName;
  title: string;
  sub?: string;
}> = [
  { no: "01", icon: "document", title: "立会い不要" },
  { no: "02", icon: "key", title: "鍵のお預り可能" },
  { no: "03", icon: "person", title: "代表または副社長が現地立ち合い" },
  {
    no: "04",
    icon: "home",
    title: "近隣への配慮を徹底",
    sub: "社名の入っていない車両・私服でお伺いします",
  },
];

const LICENSES = [
  "東京都公安委員会 古物商番号 第303312321474号",
  "遺品整理協会認定遺品整理士 地区統括会員",
  "特定遺品整理士",
  "事件現場特殊清掃士",
  "丸のこ等取扱作業従事者安全衛生教育",
  "不用品回収健全化指導員",
];

type IconName = "home" | "shield" | "clock" | "document" | "key" | "person";

const ICON_PATHS: Record<IconName, React.ReactNode> = {
  home: (
    <>
      <path d="M3.5 11 12 4l8.5 7" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5.5h4V20" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 5 6v5.2c0 4.4 2.9 7.4 7 9.3 4.1-1.9 7-4.9 7-9.3V6z" />
      <path d="m9 11.8 2.2 2.2L15 9.8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  document: (
    <>
      <path d="M7 3.5h7l4 4V20.5H7z" />
      <path d="M14 3.5V8h4" />
      <path d="M9.5 12h5M9.5 15.5h5" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15.5" r="4" />
      <path d="M11 12.5 20 3.5" />
      <path d="m16 7.5 3 3" />
      <path d="m13.5 10 2 2" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5" />
    </>
  ),
};

function LineIcon({ name, className }: Readonly<{ name: IconName; className?: string }>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

function Sparkle({ className }: Readonly<{ className?: string }>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c1 7 4 11 12 12-8 1-11 5-12 12-1-7-4-11-12-12C8 11 11 7 12 0z" />
    </svg>
  );
}

function ArrowBubble({ className }: Readonly<{ className: string }>) {
  return (
    <span
      aria-hidden="true"
      className={`relative grid h-[clamp(20px,5.6vw,26px)] w-[clamp(20px,5.6vw,26px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_1px_3px_rgba(18,41,63,0.35)] ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[55%] w-[55%]"
      >
        <path d="m9 5 7 7-7 7" />
      </svg>
    </span>
  );
}

/** Glossy top highlight for pill CTAs (needs relative + overflow-hidden parent). */
function PillGloss() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-[8%] top-[3px] h-[42%] rounded-full bg-gradient-to-b from-white/45 to-transparent"
    />
  );
}

function SectionHeading({
  kicker,
  watermark,
  tone = "light",
  children,
}: Readonly<{
  kicker: string;
  watermark: string;
  tone?: "light" | "dark";
  children: React.ReactNode;
}>) {
  const dark = tone === "dark";
  return (
    <div className="relative text-center">
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-[clamp(2px,0.8vw,6px)] select-none whitespace-nowrap font-display text-[clamp(38px,11.5vw,58px)] font-black uppercase leading-none tracking-[0.08em] ${
          dark ? "text-white/10" : "text-mcy-turq/10"
        }`}
      >
        {watermark}
      </span>
      <span
        className={`relative inline-block px-[clamp(14px,4vw,22px)] py-[clamp(5px,1.5vw,8px)] text-[clamp(10px,2.9vw,14px)] font-black tracking-[0.06em] [clip-path:polygon(4%_0,96%_0,100%_50%,96%_100%,4%_100%,0_50%)] ${
          dark
            ? "bg-white text-mcy-turq-deep"
            : "bg-gradient-to-r from-mcy-turq to-mcy-turq-deep text-white"
        }`}
      >
        {kicker}
      </span>
      <h2
        className={`relative mt-[clamp(8px,2.4vw,13px)] font-display text-[clamp(22px,5.8vw,30px)] font-black leading-snug ${
          dark ? "text-white" : "text-mcy-navy"
        }`}
      >
        {children}
      </h2>
      <span
        aria-hidden="true"
        className="relative mx-auto mt-[clamp(9px,2.4vw,13px)] flex items-center justify-center gap-[6px]"
      >
        <span
          className={`h-px w-[clamp(28px,8vw,44px)] bg-gradient-to-l to-transparent ${
            dark ? "from-mcy-gold-light" : "from-mcy-gold"
          }`}
        />
        <span
          className={`h-[7px] w-[7px] rotate-45 shadow-[0_0_6px_rgba(201,162,79,0.6)] ${
            dark ? "bg-mcy-gold-light" : "bg-mcy-gold"
          }`}
        />
        <span
          className={`h-px w-[clamp(28px,8vw,44px)] bg-gradient-to-r to-transparent ${
            dark ? "from-mcy-gold-light" : "from-mcy-gold"
          }`}
        />
      </span>
    </div>
  );
}

export default function McyTrust() {
  return (
    <>
      {/* ===== owners ===== */}
      <section className="relative w-full overflow-hidden px-4 py-[clamp(24px,7vw,40px)]">
        {/* layered bg: blurred real photo + white veil + soft turq glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 scale-110 bg-[url(/img/ooya_photo.jpg)] bg-cover bg-center opacity-60 blur-[7px]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/86 to-mcy-sky/95"
        />
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(43,199,205,0.3),transparent_70%)] blur-2xl"
        />
        <Sparkle className="absolute left-[6%] top-[clamp(14px,4vw,24px)] h-[clamp(12px,3.4vw,18px)] w-[clamp(12px,3.4vw,18px)] text-mcy-gold/70" />

        <div className="relative">
          <SectionHeading watermark="OWNER" kicker="次の入居者のために物件を回復">
            大家様・管理会社様の
            <br />
            <span className="text-mcy-turq-deep">SOS</span>も緊急対応
          </SectionHeading>
          <p className="mx-auto mt-[clamp(10px,3vw,16px)] max-w-[460px] text-[clamp(11.5px,3.2vw,14px)] font-medium leading-[2] text-mcy-navy/90 [word-break:auto-phrase]">
            管理をする物件で事故やトラブルが発生した際は緊急を要することで、ご相談をいただくことが多くあります。一刻も早く、次の入居者が安心して住める状態に戻すため、セレンシアが迅速に駆けつけます。汚染除去・消臭・消毒から、必要に応じた建材撤去や原状回復の段取りまで一括で進められます。万が一に備え、東京海上日動火災保険の賠償責任保険にも加入しています。
          </p>
          <div className="mx-auto mt-[clamp(14px,4vw,20px)] grid max-w-[460px] grid-cols-3 gap-[clamp(6px,1.8vw,10px)]">
            {OWNER_BADGES.map((b) => (
              <div
                key={b.label}
                className="flex flex-col items-center rounded-2xl border border-white/70 bg-white px-2 py-[clamp(11px,3.2vw,16px)] text-center shadow-[0_10px_26px_rgba(18,58,92,0.14)]"
              >
                <span className="grid h-[clamp(34px,9.5vw,44px)] w-[clamp(34px,9.5vw,44px)] place-items-center rounded-full bg-gradient-to-b from-mcy-turq-bright via-mcy-turq to-mcy-turq-deep text-white shadow-[0_4px_10px_rgba(11,127,133,0.35)] ring-2 ring-white">
                  <LineIcon name={b.icon} className="h-[56%] w-[56%]" />
                </span>
                <span className="mt-2 text-[clamp(9.5px,2.7vw,12px)] font-black leading-[1.5] text-mcy-navy [word-break:auto-phrase]">
                  {b.label}
                </span>
              </div>
            ))}
          </div>

          {/* dedicated phone CTA for owners / property managers (same glossy pill as the support call card) */}
          <a
            href={PHONE_TEL}
            data-gtm="cta_tel_owners"
            className="relative mx-auto mt-[clamp(12px,3.4vw,18px)] flex max-w-[460px] items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-white/75 bg-gradient-to-b from-mcy-turq-bright via-mcy-turq to-mcy-turq-deep px-4 py-[clamp(9px,2.7vw,13px)] text-white shadow-[0_10px_24px_rgba(11,143,150,0.45)] ring-1 ring-mcy-gold/70 transition-[filter] active:brightness-90"
          >
            <PillGloss />
            <span className="relative min-w-0 text-center leading-none">
              <span className="block whitespace-nowrap text-[clamp(9.5px,2.7vw,12px)] font-black">
                大家様・管理会社様の緊急対応窓口
              </span>
              <span className="mt-[4px] block whitespace-nowrap text-[clamp(19px,5.5vw,26px)] font-black tracking-[-0.01em]">
                {PHONE_DISPLAY}
              </span>
              <span className="mt-[4px] block whitespace-nowrap text-[clamp(7.5px,2.1vw,10px)] font-bold opacity-95">
                最短即日で現地確認｜原状回復まで一括対応
              </span>
            </span>
            <ArrowBubble className="text-mcy-turq-deep" />
          </a>

          <img
            src="/img/ooya_photo.jpg"
            alt="物件のドアを丁寧に清掃する作業"
            width={1000}
            height={410}
            loading="lazy"
            decoding="async"
            className="mx-auto mt-[clamp(14px,4vw,20px)] w-full max-w-[460px] rounded-[16px] border-[3px] border-white object-cover shadow-[0_12px_30px_rgba(18,58,92,0.22)]"
          />
        </div>
      </section>

      {/* ===== support ===== */}
      <section className="relative w-full overflow-hidden px-4 py-[clamp(24px,7vw,40px)]">
        {/* layered bg: sky gradient + micro dots + soft glows */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-mcy-sky via-mcy-turq-light to-mcy-sky"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle,rgba(18,165,171,0.16)_1px,transparent_1.4px)] [background-size:18px_18px]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(43,199,205,0.35),transparent_70%)] blur-2xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(201,162,79,0.22),transparent_70%)] blur-2xl"
        />

        <div className="relative">
          <SectionHeading watermark="SUPPORT" kicker="特殊清掃の不安やお悩みを和らげる">
            柔軟な<span className="text-mcy-turq-deep">サポート体制</span>
          </SectionHeading>
          <div className="mx-auto mt-[clamp(20px,5.2vw,28px)] grid max-w-[460px] grid-cols-2 gap-x-[clamp(8px,2.2vw,12px)] gap-y-[clamp(18px,4.8vw,24px)]">
            {SUPPORT_ITEMS.map((s) => (
              <div
                key={s.no}
                className="relative rounded-2xl border border-white/80 bg-white px-3 pb-[clamp(12px,3.4vw,17px)] pt-[clamp(16px,4.4vw,22px)] text-center shadow-[0_10px_30px_rgba(18,58,92,0.14)]"
              >
                {/* gold number medallion */}
                <span className="absolute -top-[13px] left-1/2 grid h-[clamp(26px,7.2vw,32px)] w-[clamp(26px,7.2vw,32px)] -translate-x-1/2 place-items-center rounded-full bg-gradient-to-b from-mcy-gold-light via-mcy-gold to-mcy-gold-deep font-display text-[clamp(11px,3.1vw,14px)] font-black text-white shadow-[0_4px_10px_rgba(165,129,58,0.45)] ring-2 ring-white">
                  {s.no}
                </span>
                <span className="mx-auto grid h-[clamp(38px,10.5vw,48px)] w-[clamp(38px,10.5vw,48px)] place-items-center rounded-xl bg-gradient-to-b from-mcy-turq-light to-white text-mcy-turq-deep ring-1 ring-mcy-turq/25">
                  <LineIcon name={s.icon} className="h-[58%] w-[58%]" />
                </span>
                <p className="mt-2 text-[clamp(11.5px,3.2vw,14px)] font-black leading-[1.6] text-mcy-navy [word-break:auto-phrase]">
                  {s.title}
                </p>
                {s.sub ? (
                  <p className="mt-1 text-[clamp(9.5px,2.7vw,11.5px)] font-medium leading-[1.6] text-mcy-navy/75 [word-break:auto-phrase]">
                    {s.sub}
                  </p>
                ) : null}
              </div>
            ))}
          </div>

          {/* call card — glass + gold frame (data-cta-section hides the sticky bar while visible) */}
          <div data-cta-section className="relative mx-auto mt-[clamp(16px,4.4vw,24px)] max-w-[460px] overflow-hidden rounded-2xl border-2 border-mcy-gold/60 bg-white/80 px-4 pb-5 pt-4 text-center shadow-[0_14px_34px_rgba(18,58,92,0.18)] ring-1 ring-inset ring-white/70 backdrop-blur">
            <Sparkle className="absolute right-[10px] top-[10px] h-[clamp(10px,2.8vw,14px)] w-[clamp(10px,2.8vw,14px)] text-mcy-gold/70" />
            <p className="flex items-center justify-center gap-2 font-display text-[clamp(14px,4vw,18px)] font-black text-mcy-navy">
              <span aria-hidden="true" className="h-[6px] w-[6px] shrink-0 rotate-45 bg-mcy-gold" />
              <span>まずは相談事をお聞かせください</span>
              <span aria-hidden="true" className="h-[6px] w-[6px] shrink-0 rotate-45 bg-mcy-gold" />
            </p>
            <a
              href={PHONE_TEL}
              data-gtm="cta_tel_support"
              className="relative mt-3 flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-white/75 bg-gradient-to-b from-mcy-turq-bright via-mcy-turq to-mcy-turq-deep px-4 py-[clamp(9px,2.7vw,13px)] text-white shadow-[0_10px_24px_rgba(11,143,150,0.45)] ring-1 ring-mcy-gold/70 transition-[filter] active:brightness-90"
            >
              <PillGloss />
              <span className="relative min-w-0 text-center leading-none">
                <span className="block whitespace-nowrap text-[clamp(9.5px,2.7vw,12px)] font-black">
                  緊急時も対応｜タップで発信
                </span>
                <span className="mt-[4px] block whitespace-nowrap text-[clamp(19px,5.5vw,26px)] font-black tracking-[-0.01em]">
                  {PHONE_DISPLAY}
                </span>
                <span className="mt-[4px] block whitespace-nowrap text-[clamp(7.5px,2.1vw,10px)] font-bold opacity-95">
                  9:00〜21:00 年中無休
                </span>
              </span>
              <ArrowBubble className="text-mcy-turq-deep" />
            </a>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-gtm="cta_line_support"
              className="relative mt-3 flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-white/75 bg-gradient-to-b from-[#25d94e] to-[#06a32a] px-4 py-[clamp(8px,2.4vw,12px)] text-white shadow-[0_8px_20px_rgba(6,163,42,0.4)] ring-1 ring-[#06a32a]/45 transition-[filter] active:brightness-90"
            >
              <PillGloss />
              <span className="relative grid h-[clamp(22px,6.2vw,30px)] w-[clamp(22px,6.2vw,30px)] shrink-0 place-items-center rounded-full bg-white text-[clamp(5px,1.4vw,7px)] font-black text-[#06a32a]">
                LINE
              </span>
              <span className="relative min-w-0 text-center leading-none">
                <span className="block whitespace-nowrap text-[clamp(12px,3.4vw,16px)] font-black">
                  まずはLINEで相談する
                </span>
                <span className="mt-[3px] block whitespace-nowrap text-[clamp(7.5px,2.1vw,10px)] font-bold opacity-95">
                  見積無料｜まずは現地調査から｜24時間受付
                </span>
              </span>
              <ArrowBubble className="text-[#06a32a]" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== license & insurance ===== */}
      <section className="relative w-full overflow-hidden bg-white px-4 pb-[clamp(36px,10vw,54px)] pt-[clamp(24px,7vw,40px)]">
        {/* bottom layer: blurred real photo fading into white */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[46%] overflow-hidden">
          <div className="absolute inset-0 scale-110 bg-[url(/img/shikaku_photo.jpg)] bg-cover bg-center opacity-50 blur-[6px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white/65" />
        </div>
        <Sparkle className="absolute right-[7%] top-[clamp(16px,4.4vw,26px)] h-[clamp(12px,3.4vw,18px)] w-[clamp(12px,3.4vw,18px)] text-mcy-turq/50" />

        <div className="relative">
          <SectionHeading watermark="LICENSE" kicker="技術を磨き、住まいを磨く。">
            保有許可・<span className="text-mcy-turq-deep">資格</span>
          </SectionHeading>
          <p className="mx-auto mt-[clamp(10px,3vw,16px)] max-w-[460px] text-[clamp(11.5px,3.2vw,14px)] font-medium leading-[2] text-mcy-navy/90 [word-break:auto-phrase]">
            セレンシアでは、安心してお任せいただけるよう、多くの資格を持ったプロフェッショナルが特殊清掃や遺品整理に対応します。
          </p>
          <div className="mx-auto mt-[clamp(14px,4vw,20px)] max-w-[460px] overflow-hidden rounded-2xl border border-white/70 bg-white shadow-[0_12px_32px_rgba(18,58,92,0.16)]">
            <ul className="divide-y divide-mcy-turq/15">
              {LICENSES.map((l, i) => (
                <li
                  key={l}
                  className="flex items-center gap-3 px-4 py-[clamp(10px,2.8vw,14px)] odd:bg-white even:bg-mcy-turq-light/60"
                >
                  <span className="grid h-[clamp(22px,6vw,28px)] w-[clamp(22px,6vw,28px)] shrink-0 place-items-center rounded-full bg-gradient-to-b from-mcy-gold-light via-mcy-gold to-mcy-gold-deep font-display text-[clamp(10px,2.8vw,13px)] font-black text-white shadow-[0_2px_6px_rgba(165,129,58,0.4)] ring-1 ring-white/70">
                    {i + 1}
                  </span>
                  <span className="text-[clamp(11px,3.1vw,13.5px)] font-bold leading-[1.6] text-mcy-navy [word-break:auto-phrase]">
                    {l}
                  </span>
                </li>
              ))}
            </ul>
            <p className="bg-gradient-to-r from-mcy-gold-deep via-mcy-gold to-mcy-gold-deep px-4 py-[clamp(11px,3vw,15px)] text-center text-[clamp(10.5px,2.9vw,13px)] font-black text-white [text-shadow:0_1px_2px_rgba(122,90,32,0.4)]">
              万が一に備え、東京海上日動火災保険の
              <br className="min-[420px]:hidden" />
              賠償責任保険に加入しています
            </p>
          </div>
          <img
            src="/img/shikaku_photo.jpg"
            alt="遺品整理を行うスタッフの作業"
            width={794}
            height={312}
            loading="lazy"
            decoding="async"
            className="mx-auto mt-[clamp(14px,4vw,20px)] w-full max-w-[460px] rounded-[16px] border-[3px] border-white object-cover shadow-[0_12px_30px_rgba(18,58,92,0.22)]"
          />
        </div>

        {/* wave seam into the turquoise ihin section below */}
        <svg
          aria-hidden="true"
          viewBox="0 0 375 26"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-[-1px] h-[clamp(14px,4.5vw,24px)] w-full"
        >
          <path
            d="M0 26h375V12c-62-10-125-2-188 4C124 22 62 20 0 8z"
            fill="var(--color-mcy-turq)"
          />
        </svg>
      </section>

      {/* ===== ihin ===== */}
      <section className="relative w-full overflow-hidden px-4 py-[clamp(24px,7vw,40px)]">
        {/* layered bg: turq gradient + glow + micro dots */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-mcy-turq to-mcy-turq-deep"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.28),transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1.4px)] [background-size:18px_18px]"
        />
        <Sparkle className="absolute left-[7%] top-[clamp(18px,5vw,28px)] h-[clamp(12px,3.4vw,18px)] w-[clamp(12px,3.4vw,18px)] text-mcy-gold-light/90" />
        <Sparkle className="absolute bottom-[clamp(14px,4vw,22px)] right-[8%] h-[clamp(10px,2.8vw,14px)] w-[clamp(10px,2.8vw,14px)] text-white/70" />

        <div className="relative">
          <SectionHeading tone="dark" watermark="KEEPSAKE" kicker="Google口コミ高評価獲得！">
            経験豊富なスタッフが対応する
            <br />
            <span className="text-mcy-gold-light">遺品整理</span>
          </SectionHeading>
          <div className="mx-auto mt-[clamp(14px,4vw,22px)] grid max-w-[460px] grid-cols-2 gap-[clamp(8px,2.2vw,12px)]">
            {["遺品整理士が在籍", "不用品の買取可能"].map((b) => (
              <div
                key={b}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/70 bg-white px-3 py-[clamp(15px,4.2vw,21px)] shadow-[0_12px_30px_rgba(9,50,55,0.35)]"
              >
                <span
                  aria-hidden="true"
                  className="grid h-[clamp(26px,7.2vw,34px)] w-[clamp(26px,7.2vw,34px)] shrink-0 place-items-center rounded-full bg-gradient-to-b from-mcy-turq-bright to-mcy-turq-deep shadow-[0_3px_8px_rgba(11,127,133,0.4)] ring-2 ring-mcy-turq-light"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth={3.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[58%] w-[58%]"
                  >
                    <path d="m4.5 12.5 5 5L19.5 7" />
                  </svg>
                </span>
                <span className="text-[clamp(12px,3.4vw,15px)] font-black text-mcy-navy">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
