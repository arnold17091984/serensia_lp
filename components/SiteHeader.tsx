/**
 * Site header — faithful reproduction of the client KV design.
 * White bar: logo | 無料 laurel badge | red phone button | green LINE button.
 * Fluid clamp() sizing keeps all four blocks on one row from 360px up.
 */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-[0_1px_5px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between gap-[clamp(3px,1vw,7px)] px-[clamp(5px,1.4vw,9px)] py-[6px]">
        {/* Logo */}
        <a href="/" aria-label="セレンシア" className="shrink-0">
          <img
            src="/img/kv_logo.png"
            alt="特殊清掃・遺品整理 セレンシア"
            width={345}
            height={125}
            className="h-[clamp(27px,7vw,42px)] w-auto"
          />
        </a>

        {/* 無料 laurel badge */}
        <div className="flex shrink-0 items-center gap-[clamp(1px,0.4vw,3px)] leading-none">
          <svg viewBox="0 0 30 60" className="h-[clamp(28px,7vw,44px)] w-auto" fill="#d8a52e" aria-hidden="true">
            <path d="M22 58C11 51 7 39 10 27 7 39 12 51 22 58Z" />
            <path d="M10 43c3.6-.9 6.4.6 7.8 3.7-3.6.9-6.5-.4-7.8-3.7ZM9.6 34.5c3.4-.5 6.1 1.4 7 4.6-3.4.2-6.1-1.5-7-4.6ZM10.6 26c3 0 5.5 2 6.1 5.1-3-.2-5.4-2-6.1-5.1ZM12.5 18.5c2.7.7 4.5 2.8 4.5 5.8-2.7-.8-4.3-2.9-4.5-5.8ZM15.8 12c2.2 1.2 3.2 3.4 2.7 6.3-2.2-1.4-3-3.6-2.7-6.3Z" />
          </svg>
          <p className="text-center leading-none">
            <span className="block text-[clamp(6px,1.5vw,9px)] font-bold text-ink">
              相談・見積り
            </span>
            <span className="my-[1px] block text-[clamp(12px,3.2vw,23px)] font-black leading-none text-kv-orange">
              無料
            </span>
            <span className="block text-[clamp(5px,1.25vw,8px)] font-bold text-ink">
              24時間受付・年中無休
            </span>
          </p>
          <svg viewBox="0 0 30 60" className="h-[clamp(28px,7vw,44px)] w-auto -scale-x-100" fill="#d8a52e" aria-hidden="true">
            <path d="M22 58C11 51 7 39 10 27 7 39 12 51 22 58Z" />
            <path d="M10 43c3.6-.9 6.4.6 7.8 3.7-3.6.9-6.5-.4-7.8-3.7ZM9.6 34.5c3.4-.5 6.1 1.4 7 4.6-3.4.2-6.1-1.5-7-4.6ZM10.6 26c3 0 5.5 2 6.1 5.1-3-.2-5.4-2-6.1-5.1ZM12.5 18.5c2.7.7 4.5 2.8 4.5 5.8-2.7-.8-4.3-2.9-4.5-5.8ZM15.8 12c2.2 1.2 3.2 3.4 2.7 6.3-2.2-1.4-3-3.6-2.7-6.3Z" />
          </svg>
        </div>

        {/* Phone */}
        <a
          href="tel:0344002098"
          className="flex min-h-[42px] shrink-0 items-center gap-[clamp(2px,0.8vw,6px)] rounded-[8px] bg-gradient-to-b from-kv-red to-kv-red-deep px-[clamp(5px,1.5vw,12px)] py-[5px] text-white shadow-[0_2px_5px_rgba(150,15,20,0.3)]"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-[clamp(10px,2.6vw,16px)] w-[clamp(10px,2.6vw,16px)] shrink-0"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span className="leading-none">
            <span className="block whitespace-nowrap text-[clamp(11px,2.9vw,18px)] font-black tracking-[-0.02em]">
              03-4400-2098
            </span>
            <span className="mt-[3px] block whitespace-nowrap text-[clamp(5.5px,1.4vw,8.5px)] font-bold">
              受付 9:00〜21:00 / 年中無休
            </span>
          </span>
        </a>

        {/* LINE */}
        <a
          href="https://page.line.me/782qjphg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[42px] shrink-0 items-center gap-[clamp(2px,0.9vw,6px)] rounded-[8px] bg-gradient-to-b from-[#1ecb3a] to-kv-line px-[clamp(4px,1.2vw,10px)] py-[5px] text-white shadow-[0_2px_5px_rgba(6,160,72,0.3)]"
        >
          <span className="flex h-[clamp(15px,3.9vw,24px)] w-[clamp(15px,3.9vw,24px)] shrink-0 items-center justify-center rounded-full bg-white text-[clamp(4.5px,1.25vw,7px)] font-black text-kv-line">
            LINE
          </span>
          <span className="leading-tight">
            <span className="block whitespace-nowrap text-[clamp(7px,1.8vw,11px)] font-bold">
              LINEで
            </span>
            <span className="block whitespace-nowrap text-[clamp(9px,2.4vw,15px)] font-black">
              写真相談する
            </span>
          </span>
        </a>
      </div>
    </header>
  );
}
