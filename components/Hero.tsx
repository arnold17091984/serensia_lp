// TODO: メールフォームURLが決まったら設定（空の間はメールCTAを非表示）
const MAIL_FORM_URL: string = "";

const OUTLINE_GREEN =
  "2px 2px 0 #145c45, -2px 2px 0 #145c45, 2px -2px 0 #145c45, -2px -2px 0 #145c45, 2px 0 0 #145c45, -2px 0 0 #145c45, 0 2px 0 #145c45, 0 -2px 0 #145c45";

const BADGES = ["孤独死", "腐敗臭", "体液汚染"];

const CIRCLES: { top: string[]; bottom: string }[] = [
  { top: ["建材撤去から", "原状回復まで"], bottom: "一貫対応" },
  { top: ["重度現場も"], bottom: "実績多数" },
  { top: ["大家様", "管理会社様へ"], bottom: "賃貸対応" },
];

export default function Hero() {
  return (
    <section className="w-full">
      {/* (1) Green leaf background + representative photo */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#d9edc2] via-[#a9d48a] to-[#65a94a]">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 18% 12%, rgba(255,255,255,.8), transparent 42%), radial-gradient(circle at 72% 70%, rgba(20,92,69,.35), transparent 48%), radial-gradient(circle at 35% 90%, rgba(14,77,58,.3), transparent 42%)",
          }}
        />
        {/* decorative leaves */}
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="absolute -left-4 top-10 h-28 w-28 rotate-[30deg] opacity-25"
          fill="#145c45"
        >
          <path d="M12 2C6.5 6.5 3.5 12 5 17.5c5.5 1.5 11-1.5 13.5-7C20 7.5 18 3.5 12 2z" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="absolute bottom-6 left-1/3 h-20 w-20 -rotate-45 opacity-20"
          fill="#0e4d3a"
        >
          <path d="M12 2C6.5 6.5 3.5 12 5 17.5c5.5 1.5 11-1.5 13.5-7C20 7.5 18 3.5 12 2z" />
        </svg>

        {/* 代表写真: マスクを弱め・拡大し、下のテキスト開始位置を顔の下まで下げて
            元LPと同じ「顔がはっきり見える」構図にする */}
        <img
          src="/img/hero_daihyo.jpg"
          alt="特殊清掃・遺品整理 セレンシア 代表 太田"
          width={260}
          height={265}
          loading="eager"
          fetchPriority="high"
          className="absolute right-0 top-2 h-auto w-[58%]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0, #000 9%), linear-gradient(to top, transparent 0, #000 12%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0, #000 9%), linear-gradient(to top, transparent 0, #000 12%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />

        <div className="relative z-10 px-4 pb-6 pt-5">
          {/* (2) White rounded badges */}
          <div className="flex items-start gap-2">
            {BADGES.map((label) => (
              <div key={label} className="flex flex-col">
                <span className="rounded-lg bg-white px-2.5 py-1 font-serif text-[clamp(17px,5.4vw,26px)] font-bold leading-tight text-brand-950 shadow-md">
                  {label}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-1 h-1 w-full -rotate-1 rounded-full bg-accent"
                />
              </div>
            ))}
          </div>

          {/* (3) Area / same-day line — 顔にかからない位置まで下げる */}
          <p
            className="mt-32 whitespace-nowrap font-serif text-[clamp(20px,6.3vw,31px)] font-black tracking-tight text-white"
            style={{ textShadow: OUTLINE_GREEN }}
          >
            東京・神奈川本日対応可能！
          </p>

          {/* (4) Giant title */}
          <h1
            className="mt-1 whitespace-nowrap bg-gradient-to-b from-[#6fd39a] via-brand-500 to-brand-800 bg-clip-text font-serif text-[clamp(62px,20.4vw,104px)] font-black leading-[1.08] tracking-[0.01em] text-transparent"
            style={{
              filter:
                "drop-shadow(0 0 2px #fff) drop-shadow(0 0 1px #fff) drop-shadow(0 4px 6px rgba(10,63,47,.4))",
            }}
          >
            特殊清掃
          </h1>
          <p
            className="-mt-1 pr-2 text-right font-serif text-[clamp(16px,5vw,24px)] font-bold text-white"
            style={{ textShadow: "0 1px 5px rgba(0,0,0,.6)" }}
          >
            代表　太田
          </p>
        </div>
      </div>

      {/* (5)(6) Gold band: catch copy + three circle badges */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#fdf2cd] via-[#f8cd68] to-[#efa038] px-3 pb-5 pt-4 text-center">
        <span
          aria-hidden="true"
          className="absolute right-4 top-3 text-2xl text-white"
        >
          ✦
        </span>
        <span
          aria-hidden="true"
          className="absolute right-10 top-12 text-base text-white/80"
        >
          ✦
        </span>
        <p className="font-serif text-[clamp(25px,7.6vw,39px)] font-black leading-tight text-accent">
          臭いの原因から徹底除去
        </p>
        <p className="mt-1 font-serif text-[clamp(15px,4.8vw,25px)] font-bold leading-snug text-ink">
          個人・法人問わず最短即日で現地確認
        </p>

        <div className="mt-4 flex items-stretch justify-center gap-2">
          {CIRCLES.map((circle) => (
            <div
              key={circle.bottom}
              className="flex aspect-square w-[31.5%] flex-col items-center justify-center rounded-full border-[3px] border-gold-500 bg-white text-center shadow-[inset_0_0_0_2px_#f4ead3,0_3px_6px_rgba(138,100,35,.35)]"
            >
              <p className="font-serif text-[clamp(10px,3.1vw,16px)] font-bold leading-[1.35] text-ink">
                {circle.top.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p className="font-serif text-[clamp(15px,4.7vw,24px)] font-black leading-tight text-accent">
                {circle.bottom}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* (7) Work site photos */}
      <div className="flex w-full">
        <img
          src="/img/hero_photo1.jpg"
          alt="清掃前の汚損したトイレと洗面台"
          width={300}
          height={160}
          loading="lazy"
          decoding="async"
          className="h-[88px] w-[30%] object-cover"
        />
        <img
          src="/img/hero_photo2.jpg"
          alt="防護服を着用した作業員による特殊清掃の様子"
          width={420}
          height={160}
          loading="lazy"
          decoding="async"
          className="h-[88px] w-[42%] object-cover"
        />
        <img
          src="/img/hero_photo3.jpg"
          alt="汚染が残る清掃前の床"
          width={280}
          height={160}
          loading="lazy"
          decoding="async"
          className="h-[88px] w-[28%] object-cover"
        />
      </div>

      {/* (8) Teal band */}
      <div className="bg-teal-500 px-2 py-3 text-center">
        <p className="whitespace-nowrap text-[clamp(15px,4.6vw,23px)] font-extrabold tracking-tight text-white">
          相談と見積無料！料金をすぐにご提示します
        </p>
        <div className="mt-2 flex items-stretch justify-center gap-1.5">
          <p className="bg-white px-2 py-1 text-[clamp(13px,4vw,20px)] font-extrabold leading-snug text-[#1b3e6e]">
            近隣への配慮徹底・秘密厳守
          </p>
          <p className="bg-white px-2 py-1 text-[clamp(13px,4vw,20px)] font-extrabold leading-snug text-[#1b3e6e]">
            徹底消臭
          </p>
        </div>
      </div>

      {/* (9) CTA block */}
      <div className="bg-white px-3 py-4">
        <div className="grid grid-cols-[10fr_19fr] gap-2">
          {/* LINE / Mail buttons */}
          <div className="flex flex-col gap-2">
            <a
              href="https://page.line.me/782qjphg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center gap-1.5 rounded-xl border-b-4 border-[#049a43] bg-gradient-to-b from-[#37d270] to-line px-2 py-2 shadow-md"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                  <path
                    fill="#06c755"
                    d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.2 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.8c-.1.3-.2 1 .9.6 1.1-.5 6-3.5 8.2-6C21.4 14 22 12.6 22 11c0-4.4-4.5-8-10-8z"
                  />
                  <text
                    x="12"
                    y="13.3"
                    textAnchor="middle"
                    fontSize="5"
                    fontWeight="bold"
                    fill="#fff"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    LINE
                  </text>
                </svg>
              </span>
              <span className="leading-tight text-white">
                <span className="block text-[10px] font-bold">
                  友だち追加で
                </span>
                <span className="block text-[15px] font-extrabold">
                  今すぐ相談
                </span>
              </span>
            </a>
            {MAIL_FORM_URL !== "" && (
            <a
              href={MAIL_FORM_URL}
              className="flex flex-1 items-center gap-1.5 rounded-xl border-b-4 border-[#174a94] bg-gradient-to-b from-[#3b7de0] to-[#1e5bb8] px-2 py-2 shadow-md"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="#2563b0"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <span className="leading-tight text-white">
                <span className="block text-[10px] font-bold">
                  メールフォームで
                </span>
                <span className="block text-[15px] font-extrabold">
                  今すぐ相談
                </span>
              </span>
            </a>
            )}
          </div>

          {/* Phone button + number + hours */}
          <div className="flex flex-col items-center">
            <a
              href="tel:0344002098"
              className="relative flex w-full flex-col items-center justify-center rounded-2xl border-2 border-b-[6px] border-[#e8380d] bg-gradient-to-b from-[#ff9d3f] via-cta to-cta-deep px-3 py-3 shadow-md"
            >
              <span
                className="text-center font-serif text-[clamp(17px,5.4vw,27px)] font-black leading-[1.3] text-white"
                style={{ textShadow: "0 2px 3px rgba(0,0,0,.3)" }}
              >
                お電話1本！
                <br />
                タップで発信
              </span>
              <svg
                viewBox="0 0 24 24"
                className="absolute -bottom-2 -right-1 h-9 w-9"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  fill="#fff"
                  stroke="#e8380d"
                  strokeWidth="1"
                />
                <path
                  d="M10 5.5a1.6 1.6 0 0 1 3.2 0v5.6l2.9.8a2.2 2.2 0 0 1 1.5 2.7l-.9 2.9a2.6 2.6 0 0 1-2.5 1.9h-2.6c-.8 0-1.5-.3-2-.9l-2.8-3a1.4 1.4 0 0 1 2-1.9l1.2 1.1V5.5z"
                  fill="#54bdea"
                />
                <path
                  d="M8.3 4.6a4.2 4.2 0 0 1 6.6.2"
                  fill="none"
                  stroke="#54bdea"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a
              href="tel:0344002098"
              className="mt-2 flex items-center justify-center gap-1 text-ink"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 shrink-0"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
              </svg>
              <span className="whitespace-nowrap text-[clamp(22px,7vw,32px)] font-black tracking-tight">
                03-4400-2098
              </span>
            </a>
            <p className="mt-1 text-center text-[11px] font-bold leading-snug text-ink">
              お電話受付 9:00〜21:00（不定休）／LINE・メールは24時間受付・緊急時は折り返し対応
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
