/**
 * Site header — pixel reproduction of the provided mockup:
 * white bar / leaf-hand logo + brand / red phone button / green LINE button.
 */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between gap-1.5 px-2.5 py-2">
        {/* Logo block */}
        <div className="flex min-w-0 items-center gap-1.5">
          <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
            {/* heart-leaf */}
            <path
              d="M20 10c-2.2-3-6.8-2.6-7.9.6-.9 2.6 1.3 5.3 7.9 9.8 6.6-4.5 8.8-7.2 7.9-9.8-1.1-3.2-5.7-3.6-7.9-.6z"
              fill="none"
              stroke="#1d5138"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
            {/* supporting hand */}
            <path
              d="M8 27c4-3.4 9-4.2 12.5-2.2M8 27c2.8 3.2 8.6 4.4 13 2.6 4-1.6 7.6-2.4 11-2"
              fill="none"
              stroke="#c09a4a"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <div className="min-w-0 leading-none">
            <p className="text-[8.5px] font-medium tracking-[0.14em] text-[#4b5450]">
              特殊清掃・遺品整理
            </p>
            <p className="mt-1 whitespace-nowrap font-display text-[19px] font-bold tracking-[0.08em] text-ink">
              セレンシア
            </p>
          </div>
        </div>

        {/* Phone button */}
        <a
          href="tel:0344002098"
          className="flex shrink-0 flex-col items-center rounded-[9px] bg-crimson px-2.5 py-1.5 text-white shadow-sm"
        >
          <span className="flex items-center gap-1 leading-none">
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 shrink-0"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span className="text-[14.5px] font-bold tracking-tight">
              03-4400-2098
            </span>
          </span>
          <span className="mt-[3px] text-[8px] font-medium leading-none">
            9:00〜21:00 年中無休
          </span>
        </a>

        {/* LINE button */}
        <a
          href="https://page.line.me/782qjphg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-1.5 rounded-[9px] bg-line px-2 py-1.5 text-white shadow-sm"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[7px] bg-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                fill="#06c755"
                d="M12 3.5C6.8 3.5 2.5 6.9 2.5 11c0 3.7 3.3 6.8 7.7 7.4.3.1.7.2.8.5.1.2.1.6 0 .9l-.1.7c0 .2-.2.9.8.5s5.6-3.3 7.7-5.6c1.4-1.6 2.1-3 2.1-4.4 0-4.1-4.3-7.5-9.5-7.5z"
              />
              <text
                x="12"
                y="12.9"
                textAnchor="middle"
                fontSize="4.6"
                fontWeight="bold"
                fill="#fff"
                fontFamily="Arial, Helvetica, sans-serif"
              >
                LINE
              </text>
            </svg>
          </span>
          <span className="leading-none">
            <span className="block text-[12px] font-bold">LINEで無料相談</span>
            <span className="mt-[3px] block text-[7.5px] font-medium">
              写真を送るだけで簡単見積り
            </span>
          </span>
        </a>
      </div>
    </header>
  );
}
