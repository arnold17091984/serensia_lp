import type { ReactNode } from "react";

/* Orange gradient text with a thick white outline (layered spans) */
function GradText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span
        aria-hidden="true"
        className="absolute inset-0 text-white [-webkit-text-stroke:0.18em_white]"
      >
        {children}
      </span>
      <span className="relative bg-gradient-to-b from-[#ffd23f] via-[#f59b0b] to-[#e2590e] bg-clip-text text-transparent">
        {children}
      </span>
    </span>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 28 28" className="h-7 w-7 shrink-0" aria-hidden="true">
      <rect width="28" height="28" rx="5" className="fill-teal-500" />
      <path
        d="M7 14.5l5 5 9-11"
        fill="none"
        stroke="#fff"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CtaSection() {
  return (
    <section className="w-full bg-[#f2f1ee]">
      {/* ===== green gradient area ===== */}
      <div className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-800 to-brand-500 pb-24 pt-8">
        {/* decorative Kanto-area silhouette */}
        <svg
          aria-hidden="true"
          viewBox="0 0 100 120"
          className="absolute right-2 top-1 h-64 w-auto opacity-25"
        >
          <path
            d="M38 6 L64 2 L86 14 L96 34 L88 52 L96 66 L86 88 L70 84 L66 100 L54 96 L50 112 L38 104 L42 88 L28 80 L10 84 L2 64 L10 44 L6 26 L22 18 Z"
            fill="#8fdcbb"
            stroke="#ffffff"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <path
            d="M38 6 L44 40 L28 80 M44 40 L88 52 M44 40 L66 100"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.7"
            opacity="0.6"
          />
        </svg>

        {/* headline */}
        <div className="relative z-10 px-5">
          <p className="-rotate-3 font-serif text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">
            <span className="text-[32px] font-black tracking-wide">
              東京・神奈川
            </span>
            <span className="ml-1 text-[20px] font-bold">を中心に</span>
          </p>
          <p className="-mt-1 ml-1 -rotate-3">
            <span className="relative inline-block px-3 py-1 font-serif text-[42px] font-black tracking-wider text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">
              <svg
                aria-hidden="true"
                viewBox="0 0 240 74"
                preserveAspectRatio="none"
                className="absolute -inset-x-3 inset-y-0 h-full w-[calc(100%+24px)]"
              >
                <ellipse
                  cx="120"
                  cy="37"
                  rx="112"
                  ry="30"
                  fill="none"
                  stroke="#d0342c"
                  strokeWidth="5"
                />
              </svg>
              関東一円
            </span>
          </p>
        </div>

        {/* 出張費用・お見積り 0円 */}
        <div className="relative z-10 mt-3 flex items-end justify-center gap-2 px-4 drop-shadow-[0_3px_3px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col gap-2 pb-5 font-serif font-black leading-none">
            <GradText className="text-[42px] tracking-wide">出張費用</GradText>
            <GradText className="text-[42px] tracking-wide">お見積り</GradText>
          </div>
          <div className="flex items-end font-serif font-black leading-none">
            <GradText className="text-[128px] tracking-[-0.05em]">0</GradText>
            <GradText className="pb-2 text-[46px]">円</GradText>
          </div>
        </div>

        {/* white diagonal cut */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-16 w-full bg-[#f2f1ee] [clip-path:polygon(0_100%,100%_0,100%_100%)]"
        />
      </div>

      {/* ===== red-bordered yellow box ===== */}
      <div className="relative z-10 mx-4 -mt-14 overflow-hidden rounded-md border-4 border-accent bg-[#fdf584] shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
        <div className="bg-accent px-3 py-2.5 text-center">
          <p className="font-serif text-[22px] font-bold leading-tight text-white">
            お電話1本！まずはご相談を
          </p>
        </div>

        <ul className="px-5 pt-4">
          <li className="flex items-center gap-3 border-b border-dotted border-ink/40 pb-3">
            <CheckIcon />
            <span className="text-[17px] font-bold">
              最短即日対応！緊急時もご相談ください
            </span>
          </li>
          <li className="flex items-center gap-3 border-b border-dotted border-ink/40 py-3">
            <CheckIcon />
            <span className="text-[17px] font-bold">
              追加費用一切なし！{/* TODO: 景表法対応: 例外条件の明記を検討 */}
            </span>
          </li>
          <li className="flex items-center gap-3 border-b border-dotted border-ink/40 py-3">
            <CheckIcon />
            <span className="text-[17px] font-bold">
              クレジットカードご利用可能
            </span>
          </li>
        </ul>

        <div className="px-3 pb-5 pt-3 text-center">
          <p className="text-[15px] font-bold text-accent">▼タップで発信</p>
          <a
            href="tel:0344002098"
            className="mt-1 flex items-center justify-center gap-2 text-accent"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-9 w-9 shrink-0 fill-current"
              aria-hidden="true"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span className="text-[44px] font-black leading-none tracking-tight">
              03-4400-2098
            </span>
          </a>
          <p className="mt-2 text-[12px] font-bold leading-relaxed">
            お電話受付 9:00〜21:00（不定休）
            <br />
            ／LINE・メールは24時間受付・緊急時は折り返し対応
          </p>
        </div>
      </div>

      {/* ===== LINE button ===== */}
      <div className="px-5 pb-12 pt-8">
        <a
          href="https://page.line.me/782qjphg"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-gradient-to-b from-[#52bb66] to-[#178c3c] p-[3px] shadow-[0_5px_12px_rgba(0,0,0,0.3)]"
        >
          <span className="flex items-center gap-2.5 rounded-full border-2 border-white/90 py-2.5 pl-2.5 pr-4">
            <span className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-full bg-accent text-[13px] font-bold leading-tight text-white">
              <span>見積</span>
              <span>無料</span>
            </span>
            <span className="flex-1 text-center text-white">
              <span className="block text-[13px] font-bold leading-tight">
                まずは現地調査から
              </span>
              <span className="block font-serif text-[23px] font-bold leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
                今すぐLINEで依頼する
              </span>
            </span>
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7 shrink-0 rounded-full border border-white"
              aria-hidden="true"
            >
              <path
                d="M10 7l5 5-5 5"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
