import fs from "node:fs";
import path from "node:path";

/**
 * Hero — pixel reproduction of the provided mockup (precision pass v2).
 * All metrics derived from the 953px mockup (=2x 476px), rescaled to the
 * 520px container (x1.09). Round-dot rules are drawn with radial-gradients
 * to match the mockup's dotted underlines exactly.
 */

const PORTRAIT = "/img/hero_portrait.jpg";

// TODO: 実際のGoogleビジネスプロフィール(クチコミ)URLに差し替える
const GOOGLE_REVIEW_URL = "https://www.google.com/search?q=セレンシア+特殊清掃";

/** Round-dot underline (mockup-style) as an inline background. */
const DOT_RULE = {
  backgroundImage:
    "radial-gradient(circle, rgba(29,81,56,0.52) 1.7px, transparent 1.9px)",
  backgroundSize: "9px 4px",
  backgroundRepeat: "repeat-x",
  backgroundPosition: "0 100%",
} as const;

const IVORY_GLOW = {
  textShadow:
    "0 0 6px #f6f1e6, 0 0 3px #f6f1e6",
} as const;

function hasPublicFile(rel: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", rel));
  } catch {
    return false;
  }
}

/* ---------- thin-line icons (gold/green, stroke-based) ---------- */

function IconHandsYen() {
  return (
    <svg viewBox="0 0 32 32" className="h-[clamp(26px,7vw,36px)] w-[clamp(26px,7vw,36px)] shrink-0" aria-hidden="true">
      <circle cx="16" cy="10.5" r="6" fill="none" stroke="#c09a4a" strokeWidth="1.5" />
      <path
        d="M13.6 7.8 16 11.2m0 0 2.4-3.4M16 11.2v3.2m-2-1.9h4m-4 1.8h4"
        fill="none"
        stroke="#c09a4a"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M4.5 24c3.6-3 7.4-3.6 11-1.8M4.5 24c2.6 2.8 7.6 3.8 11.6 2.2 3.6-1.4 7-2 11.4-1.6"
        fill="none"
        stroke="#1d5138"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCalc() {
  return (
    <svg viewBox="0 0 32 32" className="h-[clamp(26px,7vw,36px)] w-[clamp(26px,7vw,36px)] shrink-0" aria-hidden="true">
      <rect x="8" y="4.5" width="16" height="23" rx="2.4" fill="none" stroke="#1d5138" strokeWidth="1.5" />
      <rect x="11.2" y="8" width="9.6" height="4.4" rx="1" fill="none" stroke="#1d5138" strokeWidth="1.3" />
      <g fill="#1d5138">
        <circle cx="12.4" cy="16.6" r="1.15" />
        <circle cx="16" cy="16.6" r="1.15" />
        <circle cx="19.6" cy="16.6" r="1.15" />
        <circle cx="12.4" cy="20.6" r="1.15" />
        <circle cx="16" cy="20.6" r="1.15" />
        <circle cx="19.6" cy="20.6" r="1.15" />
        <circle cx="12.4" cy="24.4" r="1.15" />
        <circle cx="16" cy="24.4" r="1.15" />
        <circle cx="19.6" cy="24.4" r="1.15" />
      </g>
    </svg>
  );
}

function IconPeople() {
  return (
    <svg viewBox="0 0 32 32" className="h-[clamp(26px,7vw,36px)] w-[clamp(26px,7vw,36px)] shrink-0" aria-hidden="true">
      <circle cx="11.5" cy="11" r="3.6" fill="none" stroke="#1d5138" strokeWidth="1.5" />
      <path d="M4.8 25c.7-4.4 3.4-6.8 6.7-6.8s6 2.4 6.7 6.8" fill="none" stroke="#1d5138" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="21.5" cy="11.6" r="3" fill="none" stroke="#c09a4a" strokeWidth="1.4" />
      <path d="M17.4 23.2c.7-3.6 2.2-5.6 4.1-5.6s3.4 2 4.1 5.6" fill="none" stroke="#c09a4a" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg viewBox="0 0 32 32" className="h-[clamp(26px,7vw,36px)] w-[clamp(26px,7vw,36px)] shrink-0" aria-hidden="true">
      <rect x="8.5" y="13.5" width="15" height="12.5" rx="2.2" fill="none" stroke="#1d5138" strokeWidth="1.5" />
      <path d="M11.5 13.5V10a4.5 4.5 0 0 1 9 0v3.5" fill="none" stroke="#c09a4a" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="19" r="1.6" fill="#1d5138" />
      <path d="M16 20.4v2.6" stroke="#1d5138" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconDocCheck() {
  return (
    <svg viewBox="0 0 32 32" className="h-[clamp(24px,6.4vw,32px)] w-[clamp(24px,6.4vw,32px)] shrink-0" aria-hidden="true">
      <path d="M9 4.5h10.5L24 9v18.5H9z" fill="none" stroke="#1d5138" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 12h6m-6 4h8" stroke="#1d5138" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="21.5" cy="22.5" r="4.6" fill="none" stroke="#c09a4a" strokeWidth="1.4" />
      <path d="m19.6 22.6 1.4 1.4 2.4-2.8" fill="none" stroke="#c09a4a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconHeartHand() {
  return (
    <svg viewBox="0 0 32 32" className="h-[clamp(24px,6.4vw,32px)] w-[clamp(24px,6.4vw,32px)] shrink-0" aria-hidden="true">
      <path
        d="M16 10.5c-1.8-2.4-5.4-2-6.3.5-.7 2 1 4.2 6.3 7.8 5.3-3.6 7-5.8 6.3-7.8-.9-2.5-4.5-2.9-6.3-.5z"
        fill="none"
        stroke="#1d5138"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M6 25.5c3.4-2.6 6.8-3.2 10-1.6m-10 1.6c2.4 2.4 7 3.2 10.6 1.8 3.2-1.2 6.2-1.8 9.4-1.4" fill="none" stroke="#c09a4a" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconHouse() {
  return (
    <svg viewBox="0 0 32 32" className="h-[clamp(24px,6.4vw,32px)] w-[clamp(24px,6.4vw,32px)] shrink-0" aria-hidden="true">
      <path d="m5.5 15.5 10.5-9 10.5 9" fill="none" stroke="#c09a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 14v12h15V14" fill="none" stroke="#1d5138" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13.5 26v-6.5h5V26" fill="none" stroke="#1d5138" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function IconLaurel() {
  return (
    <svg viewBox="0 0 40 40" className="h-[clamp(38px,10vw,48px)] w-[clamp(38px,10vw,48px)] shrink-0" aria-hidden="true">
      <g fill="none" stroke="#c09a4a" strokeWidth="1.45" strokeLinecap="round">
        <path d="M13 33c-4.5-2.4-7-7-6.4-12" />
        <path d="M27 33c4.5-2.4 7-7 6.4-12" />
        <path d="M7.2 24.5c1.8-.3 3.3.4 4 1.9-1.8.4-3.3-.3-4-1.9zM7.8 19.5c1.7.2 2.9 1.3 3.2 2.9-1.7-.1-3-1.2-3.2-2.9zM9.6 14.8c1.5.6 2.4 1.9 2.3 3.5-1.6-.5-2.5-1.8-2.3-3.5zM12.6 10.9c1.2 1 1.7 2.5 1.2 4-1.4-.9-1.9-2.4-1.2-4z" />
        <path d="M32.8 24.5c-1.8-.3-3.3.4-4 1.9 1.8.4 3.3-.3 4-1.9zM32.2 19.5c-1.7.2-2.9 1.3-3.2 2.9 1.7-.1 3-1.2 3.2-2.9zM30.4 14.8c-1.5.6-2.4 1.9-2.3 3.5 1.6-.5 2.5-1.8 2.3-3.5zM27.4 10.9c-1.2 1-1.7 2.5-1.2 4 1.4-.9 1.9-2.4 1.2-4z" />
      </g>
    </svg>
  );
}

function IconGoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="h-[clamp(34px,9vw,44px)] w-[clamp(34px,9vw,44px)] shrink-0" aria-hidden="true">
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.8-2.1 5.1-4.4 6.7v5.5h7.1c4.2-3.9 6.6-9.6 6.6-16.2z" />
      <path fill="#34A853" d="M24 46c6 0 11-2 14.6-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.5 2.1-5.8 0-10.7-3.9-12.4-9.2H4.2v5.7C7.9 41.1 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.6 28.1c-.4-1.3-.7-2.7-.7-4.1s.3-2.8.7-4.1v-5.7H4.2C2.8 17 2 20.4 2 24s.8 7 2.2 9.8l7.4-5.7z" />
      <path fill="#EA4335" d="M24 10.8c3.3 0 6.2 1.1 8.5 3.3l6.3-6.3C35 4.2 30 2 24 2 15.4 2 7.9 6.9 4.2 14.2l7.4 5.7c1.7-5.3 6.6-9.1 12.4-9.1z" />
    </svg>
  );
}

function ChevronCircle({ color }: Readonly<{ color: string }>) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
        <path d="m9 5.5 7 6.5-7 6.5" fill="none" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/* ---------- data ---------- */

const BENEFITS = [
  { icon: <IconHandsYen />, top: "相談・見積り", bottom: "無料" },
  { icon: <IconCalc />, top: "追加料金", bottom: "なし" },
  { icon: <IconPeople />, top: "立ち会い", bottom: "不要" },
  { icon: <IconLock />, top: "近隣配慮・", bottom: "秘密厳守" },
];

const FEATURES = [
  { icon: <IconDocCheck />, title: "完全無料", sub: "相談・見積り無料" },
  { icon: <IconCalc />, title: "明朗会計", sub: "追加料金なし" },
  { icon: <IconHeartHand />, title: "丁寧な対応", sub: "心に寄り添う対応" },
  { icon: <IconHouse />, title: "近隣へ配慮", sub: "静かに・丁寧に対応" },
];

export default function Hero() {
  const portraitExists = hasPublicFile("img/hero_portrait.jpg");

  return (
    <section className="w-full bg-ivory">
      {/* ===== hero visual ===== */}
      <div className="relative min-h-[496px] overflow-hidden">
        {/* portrait (right, bleeds to edge) */}
        <div
          className="absolute right-0 top-0 h-[478px] w-[52%] bg-cover bg-top"
          style={{
            backgroundImage: portraitExists ? `url(${PORTRAIT})` : undefined,
            backgroundColor: portraitExists ? undefined : "#ece4d2",
            maskImage:
              "linear-gradient(to left, #000 80%, transparent 100%), linear-gradient(to bottom, #000 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, #000 80%, transparent 100%), linear-gradient(to bottom, #000 88%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
          role="img"
          aria-label="セレンシア代表 太田"
        >
          {!portraitExists && (
            <p className="px-3 pt-28 text-center text-[9px] leading-relaxed text-[#8b8270] opacity-80">
              代表写真
              <br />
              public/img/hero_portrait.jpg
              <br />
              を配置してください
            </p>
          )}
        </div>

        {/* name plate */}
        <div className="absolute right-0 bottom-[22px] z-10 rounded-l-lg bg-forest-950 py-2.5 pl-7 pr-6 text-center text-white shadow-[0_2px_8px_rgba(17,49,38,0.35)]">
          <p className="text-[11px] font-medium leading-none tracking-[0.06em]">
            セレンシア代表
          </p>
          <p className="mt-2 pl-[0.32em] font-display text-[21px] font-bold leading-none tracking-[0.32em]">
            太田
          </p>
        </div>

        {/* left copy */}
        <div className="relative z-[5] px-[18px] pb-6 pt-[22px]">
          {/* location pill */}
          <p className="inline-flex items-center gap-1.5 rounded-full bg-forest-900 py-[9px] pl-3.5 pr-[18px] text-[13px] font-bold leading-none tracking-[0.02em] text-white shadow-[0_1px_4px_rgba(17,49,38,0.25)]">
            <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor" aria-hidden="true">
              <path d="M12 2a7.4 7.4 0 0 0-7.4 7.4c0 5.5 7.4 12.6 7.4 12.6s7.4-7.1 7.4-12.6A7.4 7.4 0 0 0 12 2zm0 10a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2z" />
            </svg>
            東京・神奈川を中心に対応
          </p>

          {/* headline */}
          <h1 className="mt-[26px] font-display font-bold text-forest-900">
            <span
              className="inline pb-[10px] text-[clamp(21px,5.7vw,27px)] leading-[1.9] tracking-[0.05em]"
              style={DOT_RULE}
            >
              孤独死・事故現場の
            </span>
            <br />
            <span
              className="inline pb-[10px] text-[clamp(21px,5.7vw,27px)] leading-[1.9] tracking-[0.05em]"
              style={DOT_RULE}
            >
              臭い・体液汚染を
            </span>
            <span className="mt-[18px] block text-[clamp(41px,11vw,52px)] font-extrabold leading-[1.24] tracking-[0.035em] text-forest-950">
              最短即日で
              <br />
              現地確認
            </span>
          </h1>

          {/* body */}
          <p
            className="mt-[18px] text-[clamp(11px,2.9vw,13.5px)] font-medium leading-[2.05] text-[#2c2e2a]"
            style={IVORY_GLOW}
          >
            原状回復から臭気除去まで一貫対応。
            <br />
            ご遺族・大家様・管理会社様を
            <br />
            丁寧にサポートします。
          </p>
        </div>
      </div>

      {/* ===== benefit bar ===== */}
      <div className="mx-3.5 mt-2.5 flex items-stretch rounded-xl bg-white px-1 py-4 shadow-[0_2px_10px_rgba(60,50,30,0.06)]">
        {BENEFITS.map((b, i) => (
          <div
            key={b.bottom}
            className={`flex flex-1 items-center justify-center gap-1.5 ${
              i > 0 ? "border-l border-[#d9c8a3]" : ""
            }`}
          >
            {b.icon}
            <div className="leading-tight">
              <p className="text-[clamp(8.5px,2.2vw,10px)] font-bold tracking-[0.01em] text-ink">
                {b.top}
              </p>
              <p className="mt-[2px] whitespace-nowrap text-[clamp(12px,3.2vw,16px)] font-bold tracking-[0.04em] text-ink">
                {b.bottom}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Google / track-record bar ===== */}
      {/* TODO: GOOGLE_REVIEW_URL を実際のGoogleビジネスプロフィールURLに差し替え、
          ★とレーティングは実際の評価値に合わせること（景表法・優良誤認の回避） */}
      <div className="mx-3.5 mt-3 flex items-center rounded-xl bg-white px-2 py-[15px] shadow-[0_2px_10px_rgba(60,50,30,0.06)]">
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2.5"
        >
          <IconGoogleG />
          <div className="leading-tight">
            <p className="text-[clamp(9.5px,2.5vw,11.5px)] font-bold text-ink">
              Google<span className="ml-0.5">クチコミ</span>
            </p>
            <p className="mt-[2px] font-display text-[clamp(16px,4.3vw,20px)] font-bold leading-tight text-forest-950">
              高評価
            </p>
            <p className="mt-[2px] text-[clamp(11px,2.8vw,13px)] leading-none tracking-[0.14em] text-[#c09a4a]">
              ★★★★★
            </p>
            <p className="mt-[3px] text-[clamp(8.5px,2.2vw,10px)] font-bold text-forest-700 underline decoration-[#c09a4a] underline-offset-2">
              クチコミを見る →
            </p>
          </div>
        </a>
        <div className="flex flex-[1.35] items-center justify-center gap-2 border-l border-[#d9c8a3] pl-1.5">
          <IconLaurel />
          <div className="leading-tight">
            <p className="whitespace-nowrap font-display text-[clamp(14.5px,3.9vw,18px)] font-bold tracking-[0.03em] text-forest-950">
              相談実績 <span className="text-[clamp(17px,4.5vw,21px)]">多数</span>
            </p>
            <p className="mt-[5px] text-[clamp(8px,2vw,9px)] font-medium leading-[1.6] text-[#4b5450]">
              ご遺族・大家様・管理会社様
              <br />
              から多くのご相談をいただいています
            </p>
          </div>
        </div>
      </div>

      {/* ===== phone CTA ===== */}
      <a
        href="tel:0344002098"
        className="mx-3.5 mt-[18px] flex items-center gap-2 rounded-[18px] bg-gradient-to-b from-[#c8252c] to-[#a5151d] px-4 pb-[17px] pt-[15px] text-white shadow-[0_4px_14px_rgba(157,21,30,0.32)]"
      >
        <svg viewBox="0 0 24 24" className="h-11 w-11 shrink-0" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        <span className="flex min-w-0 flex-1 flex-col items-center">
          <span className="text-[clamp(12.5px,3.6vw,15px)] font-bold leading-none tracking-[0.04em]">
            お電話で今すぐ相談する
          </span>
          <span className="mt-2 whitespace-nowrap text-[clamp(29px,8vw,38px)] font-black leading-none tracking-[-0.01em]">
            03-4400-2098
          </span>
          <span className="mt-[10px] whitespace-nowrap rounded-full border-[1.5px] border-white/90 px-[18px] py-[6px] text-[clamp(9.5px,2.5vw,11.5px)] font-bold leading-none tracking-[0.02em]">
            9:00〜21:00 年中無休｜タップで電話
          </span>
        </span>
        <ChevronCircle color="#b01218" />
      </a>

      {/* ===== LINE CTA ===== */}
      <a
        href="https://page.line.me/782qjphg"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3.5 mt-3 flex items-center gap-2.5 rounded-[18px] bg-gradient-to-b from-[#0bd160] to-[#05b04a] px-4 pb-[17px] pt-[15px] text-white shadow-[0_4px_14px_rgba(5,166,72,0.32)]"
      >
        <svg viewBox="0 0 24 24" className="h-[clamp(38px,10vw,48px)] w-[clamp(38px,10vw,48px)] shrink-0" aria-hidden="true">
          <path
            fill="#fff"
            d="M12 3.2C6.6 3.2 2.2 6.7 2.2 11c0 3.8 3.4 7 8 7.7.3.1.7.2.8.5.1.2.1.6.1.9l-.2.8c0 .2-.2.9.8.5 1.1-.4 5.8-3.4 7.9-5.8 1.5-1.6 2.2-3.2 2.2-4.6 0-4.3-4.4-7.8-9.8-7.8z"
          />
          <text
            x="12"
            y="12.9"
            textAnchor="middle"
            fontSize="4.8"
            fontWeight="bold"
            fill="#06b14e"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            LINE
          </text>
        </svg>
        <span className="flex min-w-0 flex-1 flex-col items-center">
          <span className="whitespace-nowrap text-[clamp(19px,5vw,23px)] font-bold leading-none tracking-[0.02em]">
            LINE<span className="text-[clamp(16px,4.2vw,19px)]">で</span>無料相談する
          </span>
          <span className="mt-[10px] whitespace-nowrap rounded-full border-[1.5px] border-white/90 px-4 py-[6px] text-[clamp(9.5px,2.5vw,11.5px)] font-bold leading-none tracking-[0.01em]">
            写真を送るだけで簡単見積り｜24時間受付中
          </span>
        </span>
        <ChevronCircle color="#06b14e" />
      </a>

      {/* ===== features bar ===== */}
      <div className="mx-3.5 mb-5 mt-[18px] flex items-stretch rounded-xl bg-white px-1 py-4 shadow-[0_2px_10px_rgba(60,50,30,0.06)]">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className={`flex flex-1 flex-col items-center justify-start gap-[5px] px-0.5 text-center ${
              i > 0 ? "border-l border-[#d9c8a3]" : ""
            }`}
          >
            {f.icon}
            <p className="text-[clamp(10.5px,2.8vw,13px)] font-bold leading-tight tracking-[0.01em] text-ink">
              {f.title}
            </p>
            <p className="text-[clamp(8px,2vw,9px)] font-medium leading-tight text-[#4b5450]">
              {f.sub}
            </p>
          </div>
        ))}
      </div>

      {/* ===== 料金セクションへの導線 ===== */}
      <div className="pb-7 text-center">
        <a
          href="#ryokin"
          className="inline-flex items-center gap-1.5 font-display text-[clamp(12.5px,3.4vw,14.5px)] font-bold tracking-[0.05em] text-forest-700 underline decoration-[#c09a4a] decoration-[1.5px] underline-offset-[6px]"
        >
          参考料金・施工事例を見る
          <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" aria-hidden="true">
            <path
              d="m6 9 6 6 6-6"
              fill="none"
              stroke="#c09a4a"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
