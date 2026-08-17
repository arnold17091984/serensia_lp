import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from "./McyHeader";

/**
 * Trust block: owners / support / license & insurance / ihin.
 * 実写写真のみ使用（生成人物なし）。Green×gold luxury theme matched to the KV
 * (mockups 8-9): cream grounds, deep-emerald medallions/CTAs, gold frames &
 * number medallions, a single emerald accent band for the ihin section.
 * All licenses/insurance/figures unchanged (verified against content.json).
 */

const OWNER_BADGES: ReadonlyArray<{ icon: IconName; label: string; desc: string }> = [
  { icon: "clock", label: "迅速対応", desc: "最短即日対応で、被害の拡大や空室期間の長期化を防ぎます。" },
  { icon: "search", label: "原因の徹底除去", desc: "目に見えない汚染や臭いの原因まで根本から除去します。" },
  { icon: "home", label: "資産価値の維持", desc: "原状回復・消臭・消毒まで一貫対応し、物件価値を守ります。" },
];

const SUPPORT_ITEMS: ReadonlyArray<{
  no: string;
  icon: IconName;
  title: string;
  sub?: string;
}> = [
  { no: "01", icon: "document", title: "立ち会い不要", sub: "遠方にお住まいでも、鍵の受け渡しのみで対応可能。現地立ち会いは不要です。" },
  { no: "02", icon: "card", title: "クレジットカード利用可能", sub: "お支払いは各種クレジットカードに対応。お手持ちのカードで決済できます。" },
  { no: "03", icon: "key", title: "鍵のお預り可能", sub: "鍵をお預かりし、立ち会いなしで作業を進めます。" },
  { no: "04", icon: "shield", title: "近隣配慮・秘密厳守", sub: "作業は近隣に配慮し、秘密厳守で対応。ロゴや社名の入った服装は避けてお伺いします。" },
];

const LICENSES = [
  "東京都公安委員会 古物商番号 第303312321474号",
  "遺品整理協会認定遺品整理士 地区統括会員",
  "特定遺品整理士",
  "事件現場特殊清掃士",
  "丸のこ等取扱作業従事者安全衛生教育",
  "不用品回収健全化指導員",
];

type IconName = "home" | "shield" | "clock" | "document" | "key" | "person" | "search" | "card";

const ICON_PATHS: Record<IconName, React.ReactNode> = {
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15 15 4.8 4.8" />
      <path d="M8 10.5h5M10.5 8v5" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2.5" />
      <path d="M3 10h18M6.5 14.5h4" />
    </>
  ),
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
      className={`relative grid h-[clamp(20px,5.6vw,26px)] w-[clamp(20px,5.6vw,26px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_1px_3px_rgba(18,61,40,0.35)] ${className}`}
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
      className="pointer-events-none absolute inset-x-[8%] top-[3px] h-[42%] rounded-full bg-gradient-to-b from-white/40 to-transparent"
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
          dark ? "text-white/10" : "text-lux-green/[0.08]"
        }`}
      >
        {watermark}
      </span>
      <span
        className={`relative inline-block px-[clamp(16px,4.4vw,24px)] py-[clamp(5px,1.5vw,8px)] text-[clamp(10px,2.9vw,14px)] font-black tracking-[0.06em] ring-1 ring-lux-gold/60 [clip-path:polygon(5%_0,95%_0,100%_50%,95%_100%,5%_100%,0_50%)] ${
          dark
            ? "bg-white text-lux-green"
            : "bg-gradient-to-b from-lux-green-2 to-lux-green text-white"
        }`}
      >
        {kicker}
      </span>
      <h2
        className={`relative mt-[clamp(8px,2.4vw,13px)] font-display text-[clamp(22px,5.8vw,30px)] font-black leading-snug ${
          dark ? "text-white" : "text-lux-green-ink"
        }`}
      >
        {children}
      </h2>
      <span
        aria-hidden="true"
        className="relative mx-auto mt-[clamp(9px,2.4vw,13px)] flex items-center justify-center gap-[6px]"
      >
        <span className={`h-px w-[clamp(28px,8vw,44px)] bg-gradient-to-l to-transparent ${dark ? "from-lux-gold-light" : "from-lux-gold"}`} />
        <span className={`h-[8px] w-[8px] rotate-45 shadow-[0_0_6px_rgba(200,162,78,0.6)] ${dark ? "bg-lux-gold-light" : "bg-gradient-to-br from-lux-gold-light to-lux-gold-deep"}`} />
        <span className={`h-px w-[clamp(28px,8vw,44px)] bg-gradient-to-r to-transparent ${dark ? "from-lux-gold-light" : "from-lux-gold"}`} />
      </span>
    </div>
  );
}

export default function McyTrust() {
  return (
    <>
      {/* ===== owners ===== */}
      <section className="relative w-full overflow-hidden px-4 py-[clamp(24px,7vw,40px)]">
        {/* layered bg: blurred real photo + cream veil + soft gold glow */}
        <div aria-hidden="true" className="absolute inset-0 scale-110 bg-[url(/img/owner_bg.webp)] bg-cover bg-center opacity-45 blur-[7px]" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-lux-cream/92 via-lux-cream/88 to-lux-cream-2/95" />
        <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(200,162,78,0.24),transparent_70%)] blur-2xl" />
        <Sparkle className="absolute left-[6%] top-[clamp(14px,4vw,24px)] h-[clamp(12px,3.4vw,18px)] w-[clamp(12px,3.4vw,18px)] text-lux-gold/70" />

        <div className="relative">
          <SectionHeading watermark="OWNER" kicker="次の入居者のために物件を回復">
            大家様・管理会社様の
            <br />
            <span className="text-lux-green">SOS</span>も緊急対応
          </SectionHeading>
          <p className="mx-auto mt-[clamp(10px,3vw,16px)] max-w-[460px] text-[clamp(11.5px,3.2vw,14px)] font-medium leading-[2] text-lux-green-ink/90 [word-break:auto-phrase]">
            孤独死が発生した物件は、放置すれば異臭や汚染が広がり、資産価値や入居率の低下につながります。セレンシアは、迅速・丁寧な特殊清掃と原状回復で、次の入居者を安心して迎えられる環境を整えます。万が一に備え、東京海上日動火災保険の賠償責任保険にも加入しています。
          </p>
          <div className="mx-auto mt-[clamp(14px,4vw,20px)] grid max-w-[460px] grid-cols-3 gap-[clamp(6px,1.8vw,10px)]">
            {OWNER_BADGES.map((b) => (
              <div
                key={b.label}
                className="flex flex-col items-center rounded-2xl border border-lux-gold/30 bg-white px-2 py-[clamp(12px,3.4vw,17px)] text-center shadow-[0_10px_26px_rgba(18,61,40,0.14)]"
              >
                <span className="grid h-[clamp(38px,10.5vw,48px)] w-[clamp(38px,10.5vw,48px)] place-items-center rounded-full bg-lux-cream text-lux-gold-deep ring-1 ring-lux-gold/45">
                  <LineIcon name={b.icon} className="h-[54%] w-[54%]" />
                </span>
                <span className="mt-2 text-[clamp(10.5px,3vw,13px)] font-black leading-[1.4] text-lux-green-ink [word-break:auto-phrase]">
                  {b.label}
                </span>
                <span className="mt-[4px] text-[clamp(8.5px,2.4vw,10.5px)] font-medium leading-[1.55] text-lux-green-ink/70 [word-break:auto-phrase]">
                  {b.desc}
                </span>
              </div>
            ))}
          </div>

          {/* dedicated phone CTA for owners / property managers */}
          <a
            href={PHONE_TEL}
            data-gtm="cta_tel_owners"
            className="mcy-cta-nudge relative mx-auto mt-[clamp(12px,3.4vw,18px)] flex min-h-[clamp(82px,20vw,96px)] max-w-[460px] items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-white/40 bg-gradient-to-b from-lux-green-2 via-lux-green to-[#0c2c1c] px-4 py-[clamp(9px,2.7vw,13px)] text-white shadow-[0_10px_24px_rgba(18,61,40,0.45)] ring-1 ring-lux-gold/70 transition-[filter] active:brightness-95"
          >
            <PillGloss />
            <span className="relative min-w-0 text-center leading-none">
              <span className="block whitespace-nowrap text-[clamp(9.5px,2.7vw,12px)] font-black">
                大家様・管理会社様の緊急対応窓口
              </span>
              <span className="mt-[4px] block whitespace-nowrap text-[clamp(19px,5.5vw,26px)] font-black tracking-[-0.01em] text-lux-amber [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">
                {PHONE_DISPLAY}
              </span>
              <span className="mt-[4px] block whitespace-nowrap text-[clamp(11px,2.9vw,12px)] font-bold opacity-95">
                最短即日で現地確認｜原状回復まで一括対応
              </span>
            </span>
            <ArrowBubble className="text-lux-green" />
          </a>
        </div>
      </section>

      {/* ===== support ===== */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-lux-cream to-lux-cream-2 px-4 py-[clamp(24px,7vw,40px)]">
        <div aria-hidden="true" className="lux-dots absolute inset-0 opacity-50" />
        <div aria-hidden="true" className="absolute -right-20 -top-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(29,90,58,0.18),transparent_70%)] blur-2xl" />
        <div aria-hidden="true" className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(200,162,78,0.2),transparent_70%)] blur-2xl" />

        <div className="relative">
          <SectionHeading watermark="SUPPORT" kicker="特殊清掃の不安やお悩みを和らげる">
            柔軟な<span className="text-lux-green">サポート体制</span>
          </SectionHeading>
          <div className="mx-auto mt-[clamp(20px,5.2vw,28px)] grid max-w-[460px] grid-cols-2 gap-x-[clamp(8px,2.2vw,12px)] gap-y-[clamp(18px,4.8vw,24px)]">
            {SUPPORT_ITEMS.map((s) => (
              <div
                key={s.no}
                className="relative rounded-2xl border border-lux-gold/30 bg-white px-3 pb-[clamp(12px,3.4vw,17px)] pt-[clamp(16px,4.4vw,22px)] text-center shadow-[0_10px_30px_rgba(18,61,40,0.14)]"
              >
                {/* gold number medallion */}
                <span className="absolute -top-[13px] left-1/2 grid h-[clamp(26px,7.2vw,32px)] w-[clamp(26px,7.2vw,32px)] -translate-x-1/2 place-items-center rounded-full bg-gradient-to-b from-lux-gold-light via-lux-gold to-lux-gold-deep font-display text-[clamp(11px,3.1vw,14px)] font-black text-white shadow-[0_4px_10px_rgba(156,119,41,0.45)] ring-2 ring-white">
                  {s.no}
                </span>
                <span className="mx-auto grid h-[clamp(38px,10.5vw,48px)] w-[clamp(38px,10.5vw,48px)] place-items-center rounded-xl bg-gradient-to-b from-lux-cream to-white text-lux-green ring-1 ring-lux-gold/30">
                  <LineIcon name={s.icon} className="h-[58%] w-[58%]" />
                </span>
                <p className="mt-2 text-[clamp(11.5px,3.2vw,14px)] font-black leading-[1.6] text-lux-green-ink [word-break:auto-phrase]">
                  {s.title}
                </p>
                {s.sub ? (
                  <p className="mt-1 text-[clamp(9.5px,2.7vw,11.5px)] font-medium leading-[1.6] text-lux-green-ink/75 [word-break:auto-phrase]">
                    {s.sub}
                  </p>
                ) : null}
              </div>
            ))}
          </div>

          {/* call card — gold-framed cream glass (data-cta-section hides sticky bar) */}
          <div data-cta-section className="relative mx-auto mt-[clamp(16px,4.4vw,24px)] max-w-[460px] overflow-hidden rounded-2xl border-2 border-lux-gold/60 bg-white px-4 pb-5 pt-4 text-center shadow-[0_14px_34px_rgba(18,61,40,0.18)]">
            <Sparkle className="absolute right-[10px] top-[10px] h-[clamp(10px,2.8vw,14px)] w-[clamp(10px,2.8vw,14px)] text-lux-gold/70" />
            <p className="flex items-center justify-center gap-2 font-display text-[clamp(14px,4vw,18px)] font-black text-lux-green-ink">
              <span aria-hidden="true" className="h-[6px] w-[6px] shrink-0 rotate-45 bg-lux-gold-deep" />
              <span>まずは相談事をお聞かせください</span>
              <span aria-hidden="true" className="h-[6px] w-[6px] shrink-0 rotate-45 bg-lux-gold-deep" />
            </p>
            <a
              href={PHONE_TEL}
              data-gtm="cta_tel_support"
              className="mcy-cta-nudge relative mt-3 flex min-h-[clamp(82px,20vw,96px)] items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-white/40 bg-gradient-to-b from-lux-green-2 via-lux-green to-[#0c2c1c] px-4 py-[clamp(9px,2.7vw,13px)] text-white shadow-[0_10px_24px_rgba(18,61,40,0.45)] ring-1 ring-lux-gold/70 transition-[filter] active:brightness-95"
            >
              <PillGloss />
              <span className="relative min-w-0 text-center leading-none">
                <span className="block whitespace-nowrap text-[clamp(9.5px,2.7vw,12px)] font-black">
                  緊急時も対応｜タップで発信
                </span>
                <span className="mt-[4px] block whitespace-nowrap text-[clamp(19px,5.5vw,26px)] font-black tracking-[-0.01em]">
                  {PHONE_DISPLAY}
                </span>
                <span className="mt-[4px] block whitespace-nowrap text-[clamp(11px,2.9vw,12px)] font-bold opacity-95">
                  9:00〜21:00 年中無休
                </span>
              </span>
              <ArrowBubble className="text-lux-green" />
            </a>
            {/* gold-framed like the pricing LINE CTA so it reads co-equal with
                the phone pill above (design-team review 2026-08-17) */}
            <div
              style={{ animationDelay: "0.5s" }}
              className="mcy-cta-nudge mt-3 rounded-full bg-gradient-to-b from-lux-gold-light via-lux-gold to-lux-gold-deep p-[2px] shadow-[0_8px_20px_rgba(6,163,42,0.4)]"
            >
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-gtm="cta_line_support"
              className="relative flex min-h-[clamp(82px,20vw,96px)] items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-b from-[#37d857] via-[#12bb38] to-[#06a32a] px-4 py-[clamp(8px,2.4vw,12px)] text-white ring-2 ring-inset ring-white/50 transition-[filter] active:brightness-90"
            >
              <PillGloss />
              <span className="relative grid h-[clamp(22px,6.2vw,30px)] w-[clamp(22px,6.2vw,30px)] shrink-0 place-items-center rounded-full bg-white text-[clamp(5px,1.4vw,7px)] font-black text-[#06a32a]">
                LINE
              </span>
              <span className="relative min-w-0 text-center leading-none">
                <span className="block whitespace-nowrap text-[clamp(12px,3.4vw,16px)] font-black">
                  まずはLINEで相談する
                </span>
                <span className="mt-[3px] block whitespace-nowrap text-[clamp(11px,2.9vw,12px)] font-bold opacity-95">
                  見積無料｜24時間受付
                </span>
              </span>
              <ArrowBubble className="text-[#06a32a]" />
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== license & insurance ===== */}
      <section className="relative w-full overflow-hidden bg-lux-cream px-4 pb-[clamp(36px,10vw,54px)] pt-[clamp(24px,7vw,40px)]">
        {/* bottom layer: blurred real photo fading into cream */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[46%] overflow-hidden">
          <div className="absolute inset-0 scale-110 bg-[url(/img/ihin_work.webp)] bg-cover bg-center opacity-45 blur-[6px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-lux-cream via-lux-cream/85 to-lux-cream/65" />
        </div>
        <Sparkle className="absolute right-[7%] top-[clamp(16px,4.4vw,26px)] h-[clamp(12px,3.4vw,18px)] w-[clamp(12px,3.4vw,18px)] text-lux-gold/60" />

        <div className="relative">
          <SectionHeading watermark="LICENSE" kicker="技術を磨き、住まいを磨く。">
            保有許可・<span className="text-lux-green">資格</span>
          </SectionHeading>
          <p className="mx-auto mt-[clamp(10px,3vw,16px)] max-w-[460px] text-[clamp(11.5px,3.2vw,14px)] font-medium leading-[2] text-lux-green-ink/90 [word-break:auto-phrase]">
            セレンシアでは、安心してお任せいただけるよう、多くの資格を持ったプロフェッショナルが特殊清掃や遺品整理に対応します。
          </p>

          {/* real 代表 太田 photo alongside the credentials (trust) */}
          <div className="mx-auto mt-[clamp(14px,4vw,20px)] flex max-w-[460px] items-center gap-[clamp(12px,3.4vw,18px)] rounded-2xl border border-lux-gold/35 bg-white/75 p-[clamp(10px,2.8vw,14px)] shadow-[0_10px_26px_rgba(18,61,40,0.12)]">
            <img
              src="/img/daihyo_ota.webp"
              alt="セレンシア 代表 太田 貴也"
              width={520}
              height={589}
              loading="lazy"
              decoding="async"
              className="h-auto w-[clamp(112px,31vw,150px)] shrink-0 rounded-2xl object-cover shadow-[0_10px_22px_rgba(18,61,40,0.22)] ring-1 ring-lux-gold/40"
            />
            <p className="text-[clamp(11px,3vw,13.5px)] font-bold leading-[1.95] text-lux-green-ink [word-break:auto-phrase]">
              有資格の専門スタッフが、
              <span className="text-lux-green">責任をもって最後まで</span>
              対応します。まずは代表・太田がお話を伺います。
            </p>
          </div>

          <div className="mx-auto mt-[clamp(14px,4vw,20px)] max-w-[460px] overflow-hidden rounded-2xl border border-lux-gold/40 bg-white shadow-[0_12px_32px_rgba(18,61,40,0.16)]">
            <ul className="divide-y divide-lux-gold/15">
              {LICENSES.map((l, i) => (
                <li
                  key={l}
                  className="flex items-center gap-3 px-4 py-[clamp(10px,2.8vw,14px)] odd:bg-white even:bg-lux-cream"
                >
                  <span className="grid h-[clamp(22px,6vw,28px)] w-[clamp(22px,6vw,28px)] shrink-0 place-items-center rounded-full bg-gradient-to-b from-lux-gold-light via-lux-gold to-lux-gold-deep font-display text-[clamp(10px,2.8vw,13px)] font-black text-white shadow-[0_2px_6px_rgba(156,119,41,0.4)] ring-1 ring-white/70">
                    {i + 1}
                  </span>
                  <span className="text-[clamp(11px,3.1vw,13.5px)] font-bold leading-[1.6] text-lux-green-ink [word-break:auto-phrase]">
                    {l}
                  </span>
                </li>
              ))}
            </ul>
            <p className="bg-gradient-to-r from-lux-gold-deep via-lux-gold to-lux-gold-deep px-4 py-[clamp(11px,3vw,15px)] text-center text-[clamp(10.5px,2.9vw,13px)] font-black text-white [text-shadow:0_1px_2px_rgba(122,90,32,0.4)] [word-break:auto-phrase]">
              万が一に備え、東京海上日動火災保険の
              <br className="min-[480px]:hidden" />
              賠償責任保険に加入しています
            </p>
          </div>
          <img
            src="/img/ihin_work.webp"
            alt="遺品整理を行うセレンシアのスタッフの作業（室内の仕分け・搬出）"
            width={1200}
            height={470}
            loading="lazy"
            decoding="async"
            className="mx-auto mt-[clamp(14px,4vw,20px)] w-full max-w-[460px] rounded-[16px] border-[3px] border-white object-cover shadow-[0_12px_30px_rgba(18,61,40,0.22)] ring-1 ring-lux-gold/30"
          />
        </div>

        {/* wave seam into the emerald ihin section below */}
        <svg
          aria-hidden="true"
          viewBox="0 0 375 26"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-[-1px] h-[clamp(14px,4.5vw,24px)] w-full"
        >
          <path d="M0 26h375V12c-62-10-125-2-188 4C124 22 62 20 0 8z" fill="var(--color-lux-green-2)" />
        </svg>
      </section>

      {/* ===== ihin ===== */}
      <section className="relative w-full overflow-hidden px-4 py-[clamp(24px,7vw,40px)]">
        {/* layered bg: emerald gradient + glow + micro dots */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-lux-green-2 to-lux-green" />
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent_60%)]" />
        <div aria-hidden="true" className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle,rgba(255,255,255,0.14)_1px,transparent_1.4px)] [background-size:18px_18px]" />
        <Sparkle className="absolute left-[7%] top-[clamp(18px,5vw,28px)] h-[clamp(12px,3.4vw,18px)] w-[clamp(12px,3.4vw,18px)] text-lux-gold-light/90" />
        <Sparkle className="absolute bottom-[clamp(14px,4vw,22px)] right-[8%] h-[clamp(10px,2.8vw,14px)] w-[clamp(10px,2.8vw,14px)] text-white/70" />

        <div className="relative">
          <SectionHeading tone="dark" watermark="KEEPSAKE" kicker="Google口コミ高評価獲得！">
            経験豊富なスタッフが対応する
            <br />
            <span className="text-lux-gold-light">遺品整理</span>
          </SectionHeading>
          <div className="mx-auto mt-[clamp(14px,4vw,22px)] grid max-w-[460px] grid-cols-2 gap-[clamp(8px,2.2vw,12px)]">
            {["遺品整理士が在籍", "不用品の買取可能"].map((b) => (
              <div
                key={b}
                className="flex items-center justify-center gap-2 rounded-2xl border border-lux-gold/40 bg-white px-3 py-[clamp(15px,4.2vw,21px)] shadow-[0_12px_30px_rgba(10,44,27,0.35)]"
              >
                <span
                  aria-hidden="true"
                  className="grid h-[clamp(26px,7.2vw,34px)] w-[clamp(26px,7.2vw,34px)] shrink-0 place-items-center rounded-full bg-gradient-to-b from-lux-green-2 to-lux-green shadow-[0_3px_8px_rgba(18,61,40,0.4)] ring-2 ring-lux-gold/50"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round" className="h-[58%] w-[58%]">
                    <path d="m4.5 12.5 5 5L19.5 7" />
                  </svg>
                </span>
                <span className="text-[clamp(12px,3.4vw,15px)] font-black text-lux-green-ink">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
