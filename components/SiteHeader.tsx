/**
 * Site header — pixel reproduction of the provided mockup (precision v2).
 * Fluid clamp() sizing keeps the three blocks on one row from 390px up.
 */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-[0_1px_5px_rgba(0,0,0,0.07)]">
      <div className="flex items-center justify-between gap-[6px] px-2.5 py-[9px]">
        {/* Logo block */}
        <div className="flex min-w-0 items-center gap-[6px]">
          <svg
            viewBox="0 0 40 40"
            className="h-[clamp(28px,7.6vw,38px)] w-[clamp(28px,7.6vw,38px)] shrink-0"
            aria-hidden="true"
          >
            <path
              d="M20 9.5c-2.3-3.1-7-2.7-8.1.7-.9 2.7 1.3 5.5 8.1 10.1 6.8-4.6 9-7.4 8.1-10.1-1.1-3.4-5.8-3.8-8.1-.7z"
              fill="none"
              stroke="#1d5138"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
            <path
              d="M7.5 27c4.1-3.5 9.3-4.3 12.9-2.3M7.5 27c2.9 3.3 8.9 4.5 13.4 2.7 4.1-1.6 7.8-2.5 11.3-2.1"
              fill="none"
              stroke="#c09a4a"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <div className="min-w-0 leading-none">
            <p className="whitespace-nowrap text-[clamp(8px,2.05vw,8.8px)] font-medium tracking-[0.14em] text-[#4b5450]">
              特殊清掃・遺品整理
            </p>
            <p className="mt-[5px] whitespace-nowrap font-display text-[clamp(13px,3.6vw,17px)] font-bold tracking-[0.08em] text-ink">
              セレンシア
            </p>
          </div>
        </div>

        {/* Phone button */}
        <a
          href="tel:0344002098"
          className="flex min-h-[44px] shrink-0 flex-col items-center justify-center rounded-[10px] bg-gradient-to-b from-[#c8252c] to-[#a5151d] px-[clamp(8px,2.4vw,13px)] py-[7px] text-white shadow-sm"
        >
          <span className="flex items-center gap-1 leading-none">
            <svg
              viewBox="0 0 24 24"
              className="h-[clamp(11px,3vw,14px)] w-[clamp(11px,3vw,14px)] shrink-0"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span className="whitespace-nowrap text-[clamp(11.5px,3.2vw,15px)] font-bold tracking-[-0.01em]">
              03-4400-2098
            </span>
          </span>
          <span className="mt-[4px] whitespace-nowrap text-[clamp(7.5px,1.9vw,8.5px)] font-medium leading-none tracking-[0.02em]">
            9:00〜21:00 年中無休
          </span>
        </a>

        {/* LINE button */}
        <a
          href="https://page.line.me/782qjphg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[44px] shrink-0 items-center gap-[6px] rounded-[10px] bg-gradient-to-b from-[#0bd160] to-[#05b04a] px-[clamp(7px,2vw,11px)] py-[7px] text-white shadow-sm"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-[clamp(22px,6vw,29px)] w-[clamp(22px,6vw,29px)] shrink-0"
            aria-hidden="true"
          >
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
          <span className="leading-none">
            <span className="block whitespace-nowrap text-[clamp(10px,2.8vw,13px)] font-bold">
              LINEで無料相談
            </span>
            <span className="mt-[4px] hidden whitespace-nowrap text-[clamp(7.5px,1.9vw,8px)] min-[430px]:block font-medium tracking-[0.01em]">
              写真を送るだけで簡単見積り
            </span>
          </span>
        </a>
      </div>
    </header>
  );
}
