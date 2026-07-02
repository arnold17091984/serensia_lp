import fs from "node:fs";
import path from "node:path";

/**
 * Hero — pixel reproduction of the provided mockup.
 * Ivory ground / dark-green serif headline with dotted rules / large portrait
 * with name plate / benefit bar / Google + track-record bar / phone & LINE
 * CTAs / 4-feature bar.
 *
 * Photo assets expected at public/img/hero_portrait.jpg (provided by client).
 * Until the file exists, a placeholder with instructions is rendered.
 */

const PORTRAIT = "/img/hero_portrait.jpg";

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
    <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" aria-hidden="true">
      <circle cx="16" cy="11" r="6.2" fill="none" stroke="#c09a4a" strokeWidth="1.5" />
      <path
        d="M13.4 8.2 16 11.8m0 0 2.6-3.6M16 11.8v3.4m-2.2-2h4.4m-4.4 1.9h4.4"
        fill="none"
        stroke="#c09a4a"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M4.5 24.5c3.6-3 7.4-3.6 11-1.8M4.5 24.5c2.6 2.8 7.6 3.8 11.6 2.2 3.6-1.4 7-2 11.4-1.6"
        fill="none"
        stroke="#1d5138"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCalc({ color = "#1d5138" }: Readonly<{ color?: string }>) {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" aria-hidden="true">
      <rect x="8" y="4.5" width="16" height="23" rx="2.4" fill="none" stroke={color} strokeWidth="1.5" />
      <rect x="11.2" y="8" width="9.6" height="4.4" rx="1" fill="none" stroke={color} strokeWidth="1.3" />
      <g fill={color}>
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
    <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" aria-hidden="true">
      <circle cx="11.5" cy="11" r="3.6" fill="none" stroke="#1d5138" strokeWidth="1.5" />
      <path d="M4.8 25c.7-4.4 3.4-6.8 6.7-6.8s6 2.4 6.7 6.8" fill="none" stroke="#1d5138" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="21.5" cy="11.6" r="3" fill="none" stroke="#c09a4a" strokeWidth="1.4" />
      <path d="M19.4 17.6c3.4-.5 6.7 1.6 7.6 6" fill="none" stroke="#c09a4a" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" aria-hidden="true">
      <rect x="8.5" y="13.5" width="15" height="12.5" rx="2.2" fill="none" stroke="#1d5138" strokeWidth="1.5" />
      <path d="M11.5 13.5V10a4.5 4.5 0 0 1 9 0v3.5" fill="none" stroke="#c09a4a" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="19" r="1.6" fill="#1d5138" />
      <path d="M16 20.4v2.6" stroke="#1d5138" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconDocCheck() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6 shrink-0" aria-hidden="true">
      <path d="M9 4.5h10.5L24 9v18.5H9z" fill="none" stroke="#1d5138" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 12h6m-6 4h8" stroke="#1d5138" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="21.5" cy="22.5" r="4.6" fill="none" stroke="#c09a4a" strokeWidth="1.4" />
      <path d="m19.6 22.6 1.4 1.4 2.4-2.8" fill="none" stroke="#c09a4a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconHeartHand() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6 shrink-0" aria-hidden="true">
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
    <svg viewBox="0 0 32 32" className="h-6 w-6 shrink-0" aria-hidden="true">
      <path d="m5.5 15.5 10.5-9 10.5 9" fill="none" stroke="#c09a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 14v12h15V14" fill="none" stroke="#1d5138" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13.5 26v-6.5h5V26" fill="none" stroke="#1d5138" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function IconLaurel() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" aria-hidden="true">
      <g fill="none" stroke="#c09a4a" strokeWidth="1.3" strokeLinecap="round">
        <path d="M13 33c-4.5-2.4-7-7-6.4-12" />
        <path d="M27 33c4.5-2.4 7-7 6.4-12" />
        {/* left leaves */}
        <path d="M7.2 24.5c1.8-.3 3.3.4 4 1.9-1.8.4-3.3-.3-4-1.9zM7.8 19.5c1.7.2 2.9 1.3 3.2 2.9-1.7-.1-3-1.2-3.2-2.9zM9.6 14.8c1.5.6 2.4 1.9 2.3 3.5-1.6-.5-2.5-1.8-2.3-3.5zM12.6 10.9c1.2 1 1.7 2.5 1.2 4-1.4-.9-1.9-2.4-1.2-4z" />
        {/* right leaves */}
        <path d="M32.8 24.5c-1.8-.3-3.3.4-4 1.9 1.8.4 3.3-.3 4-1.9zM32.2 19.5c-1.7.2-2.9 1.3-3.2 2.9 1.7-.1 3-1.2 3.2-2.9zM30.4 14.8c-1.5.6-2.4 1.9-2.3 3.5 1.6-.5 2.5-1.8 2.3-3.5zM27.4 10.9c-1.2 1-1.7 2.5-1.2 4 1.4-.9 1.9-2.4 1.2-4z" />
      </g>
    </svg>
  );
}

function IconGoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="h-9 w-9 shrink-0" aria-hidden="true">
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.8-2.1 5.1-4.4 6.7v5.5h7.1c4.2-3.9 6.6-9.6 6.6-16.2z" />
      <path fill="#34A853" d="M24 46c6 0 11-2 14.6-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.5 2.1-5.8 0-10.7-3.9-12.4-9.2H4.2v5.7C7.9 41.1 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.6 28.1c-.4-1.3-.7-2.7-.7-4.1s.3-2.8.7-4.1v-5.7H4.2C2.8 17 2 20.4 2 24s.8 7 2.2 9.8l7.4-5.7z" />
      <path fill="#EA4335" d="M24 10.8c3.3 0 6.2 1.1 8.5 3.3l6.3-6.3C35 4.2 30 2 24 2 15.4 2 7.9 6.9 4.2 14.2l7.4 5.7c1.7-5.3 6.6-9.1 12.4-9.1z" />
    </svg>
  );
}

function ChevronCircle({ color }: Readonly<{ color: string }>) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path d="m9 5.5 7 6.5-7 6.5" fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/* ---------- bars ---------- */

const BENEFITS = [
  { icon: <IconHandsYen />, top: "相談・見積り", bottom: "無料" },
  { icon: <IconCalc color="#1d5138" />, top: "追加料金", bottom: "なし" },
  { icon: <IconPeople />, top: "立ち会い", bottom: "不要" },
  { icon: <IconLock />, top: "近隣配慮・", bottom: "秘密厳守" },
];

const FEATURES = [
  { icon: <IconDocCheck />, title: "完全無料", sub: "相談・見積り無料" },
  { icon: <IconCalc color="#1d5138" />, title: "明朗会計", sub: "追加料金なし" },
  { icon: <IconHeartHand />, title: "丁寧な対応", sub: "心に寄り添う対応" },
  { icon: <IconHouse />, title: "近隣へ配慮", sub: "静かに・丁寧に対応" },
];

export default function Hero() {
  const portraitExists = hasPublicFile("img/hero_portrait.jpg");

  return (
    <section className="w-full bg-ivory">
      {/* ===== hero visual ===== */}
      <div className="relative overflow-hidden">
        {/* portrait (right, bleeds to edge) */}
        <div
          className="absolute right-0 top-0 h-[400px] w-[50%] bg-cover bg-top"
          style={{
            backgroundImage: portraitExists ? `url(${PORTRAIT})` : undefined,
            backgroundColor: "#ece4d2",
            maskImage:
              "linear-gradient(to left, #000 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, #000 88%, transparent 100%)",
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
        <div className="absolute right-0 top-[318px] z-10 rounded-l-md bg-forest-900 px-6 py-2 text-center text-white shadow-md">
          <p className="text-[10.5px] font-medium leading-none">セレンシア代表</p>
          <p className="mt-1.5 font-display text-[19px] font-bold leading-none tracking-[0.2em]">
            太田
          </p>
        </div>

        {/* left copy */}
        <div className="relative z-[5] px-4 pb-5 pt-5">
          {/* location pill */}
          <p className="inline-flex items-center gap-1.5 rounded-full bg-forest-900 py-[7px] pl-3 pr-4 text-[12px] font-bold leading-none text-white">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
              <path d="M12 2a7.4 7.4 0 0 0-7.4 7.4c0 5.5 7.4 12.6 7.4 12.6s7.4-7.1 7.4-12.6A7.4 7.4 0 0 0 12 2zm0 10a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2z" />
            </svg>
            東京・神奈川を中心に対応
          </p>

          {/* headline */}
          <h1 className="mt-5 font-display font-bold leading-[1.55] text-forest-950">
            <span className="inline border-b-[3px] border-dotted border-forest-700/50 pb-1 text-[25px] tracking-[0.02em]">
              孤独死・事故現場の
            </span>
            <br />
            <span className="inline border-b-[3px] border-dotted border-forest-700/50 pb-1 text-[25px] tracking-[0.02em]">
              臭い・体液汚染を
            </span>
            <span className="mt-3 block text-[48px] font-extrabold leading-[1.28] tracking-[0.03em]">
              最短即日で
              <br />
              現地確認
            </span>
          </h1>

          {/* body */}
          <p
            className="mt-4 max-w-[62%] text-[12.5px] font-medium leading-[2] text-ink"
            style={{
              textShadow:
                "0 0 6px #f6f1e6, 0 0 4px #f6f1e6, 0 0 2px #f6f1e6",
            }}
          >
            原状回復から臭気除去まで一貫対応。
            <br />
            <span className="whitespace-nowrap">
              ご遺族・大家様・管理会社様を丁寧にサポートします。
            </span>
          </p>
        </div>
      </div>

      {/* ===== benefit bar ===== */}
      <div className="mx-3 mt-2 flex items-stretch rounded-xl bg-white px-1 py-3 shadow-[0_1px_6px_rgba(0,0,0,0.05)]">
        {BENEFITS.map((b, i) => (
          <div
            key={b.bottom}
            className={`flex flex-1 items-center justify-center gap-1 ${
              i > 0 ? "border-l border-gold-400/60" : ""
            }`}
          >
            {b.icon}
            <div className="leading-tight">
              <p className="text-[9px] font-bold text-ink">{b.top}</p>
              <p className="text-[14px] font-bold tracking-wide text-ink">
                {b.bottom}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Google / track-record bar ===== */}
      <div className="mx-3 mt-2.5 flex items-center rounded-xl bg-white px-2 py-3 shadow-[0_1px_6px_rgba(0,0,0,0.05)]">
        <div className="flex flex-1 items-center justify-center gap-2">
          <IconGoogleG />
          <div className="leading-tight">
            <p className="text-[10.5px] font-bold text-ink">Googleクチコミ</p>
            <p className="font-display text-[17px] font-bold leading-tight text-forest-950">
              高評価
            </p>
            <p className="text-[11px] leading-none tracking-[0.1em] text-[#e7a93a]">
              ★★★★★
            </p>
          </div>
        </div>
        <div className="flex flex-[1.4] items-center justify-center gap-1.5 border-l border-gold-400/60 pl-1">
          <IconLaurel />
          <div className="leading-tight">
            <p className="font-display text-[16.5px] font-bold text-forest-950">
              相談実績 <span className="text-[19px]">多数</span>
            </p>
            <p className="mt-1 text-[8px] font-medium leading-[1.5] text-[#4b5450]">
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
        className="mx-3 mt-4 flex items-center gap-2 rounded-[18px] bg-gradient-to-b from-crimson to-crimson-deep px-4 py-4 text-white shadow-[0_3px_10px_rgba(157,21,30,0.35)]"
      >
        <svg viewBox="0 0 24 24" className="h-10 w-10 shrink-0" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        <span className="flex min-w-0 flex-1 flex-col items-center">
          <span className="text-[13px] font-bold leading-none">
            お電話で今すぐ相談する
          </span>
          <span className="mt-1.5 whitespace-nowrap text-[35px] font-black leading-none tracking-tight">
            03-4400-2098
          </span>
          <span className="mt-2 rounded-full border border-white/85 px-4 py-[5px] text-[10.5px] font-bold leading-none">
            9:00〜21:00 年中無休｜タップで電話
          </span>
        </span>
        <ChevronCircle color="#c0202a" />
      </a>

      {/* ===== LINE CTA ===== */}
      <a
        href="https://page.line.me/782qjphg"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 mt-3 flex items-center gap-2.5 rounded-[18px] bg-gradient-to-b from-[#0bd160] to-[#05b64c] px-4 py-4 text-white shadow-[0_3px_10px_rgba(5,166,72,0.35)]"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/18">
          <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
            <path
              fill="#fff"
              d="M12 3.5C6.8 3.5 2.5 6.9 2.5 11c0 3.7 3.3 6.8 7.7 7.4.3.1.7.2.8.5.1.2.1.6 0 .9l-.1.7c0 .2-.2.9.8.5s5.6-3.3 7.7-5.6c1.4-1.6 2.1-3 2.1-4.4 0-4.1-4.3-7.5-9.5-7.5z"
            />
            <text
              x="12"
              y="12.9"
              textAnchor="middle"
              fontSize="4.6"
              fontWeight="bold"
              fill="#06c755"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              LINE
            </text>
          </svg>
        </span>
        <span className="flex min-w-0 flex-1 flex-col items-center">
          <span className="whitespace-nowrap text-[21px] font-bold leading-none">
            LINEで無料相談する
          </span>
          <span className="mt-2 whitespace-nowrap rounded-full border border-white/85 px-3.5 py-[5px] text-[10.5px] font-bold leading-none">
            写真を送るだけで簡単見積り｜24時間受付中
          </span>
        </span>
        <ChevronCircle color="#06b14e" />
      </a>

      {/* ===== features bar ===== */}
      <div className="mx-3 mb-6 mt-4 flex items-stretch rounded-xl bg-white px-1 py-3 shadow-[0_1px_6px_rgba(0,0,0,0.05)]">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className={`flex flex-1 flex-col items-center justify-start gap-1 px-0.5 text-center ${
              i > 0 ? "border-l border-[#e2ded2]" : ""
            }`}
          >
            {f.icon}
            <p className="text-[11.5px] font-bold leading-tight text-ink">
              {f.title}
            </p>
            <p className="text-[8px] font-medium leading-tight text-[#4b5450]">
              {f.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
