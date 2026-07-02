/**
 * Section: 柔軟なサポート体制 — FV-aligned redesign.
 * Ivory ground, gold flourish heading, 2x2 white cards with gold
 * numbered circles, and a closing call card (gold hairline frame,
 * FV-style crimson phone CTA + green LINE CTA).
 */

function GoldFlourish({ flip = false }: Readonly<{ flip?: boolean }>) {
  return (
    <svg
      viewBox="0 0 56 12"
      className={`h-3 w-[clamp(28px,10vw,56px)] shrink-0 ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M0 6h40" stroke="#c09a4a" strokeWidth="1.2" />
      <path d="M46 1.5 50.5 6 46 10.5 41.5 6z" fill="none" stroke="#c09a4a" strokeWidth="1.2" />
      <circle cx="54" cy="6" r="1.4" fill="#c09a4a" />
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

const SUPPORT_ITEMS = [
  {
    no: "01",
    body: (
      <>
        <span className="text-ink">立会い</span>
        <span className="text-forest-700">不要</span>
      </>
    ),
  },
  {
    no: "02",
    body: (
      <>
        <span className="text-forest-700">鍵のお預り</span>
        <span className="text-ink">可能</span>
      </>
    ),
  },
  {
    no: "03",
    body: (
      <>
        <span className="block text-[clamp(10px,2.7vw,12px)] font-bold leading-[1.5] text-ink">
          代表または副社長が
        </span>
        <span className="text-forest-700">現地立ち合い</span>
      </>
    ),
  },
  {
    no: "04",
    body: (
      <>
        <span className="text-forest-700">近隣への配慮</span>
        <span className="text-ink">を徹底</span>
      </>
    ),
  },
];

export default function Support() {
  return (
    <section className="w-full bg-ivory px-4 pb-10 pt-9">
      {/* lead + heading with gold flourishes */}
      <p className="text-center text-[clamp(11px,3vw,13.5px)] font-bold leading-[1.8] tracking-[0.03em] text-[#4b5450]">
        特殊清掃の不安やお悩みを和らげる
      </p>
      <h2 className="mt-1.5 flex items-center justify-center gap-2 px-2">
        <GoldFlourish />
        <span className="whitespace-nowrap font-display text-[clamp(16px,4.4vw,21px)] font-bold tracking-[0.04em] text-forest-950">
          柔軟なサポート体制
        </span>
        <GoldFlourish flip />
      </h2>

      {/* 2x2 numbered cards */}
      <ul className="mt-6 grid grid-cols-2 gap-3">
        {SUPPORT_ITEMS.map((item) => (
          <li
            key={item.no}
            className="flex flex-col items-center justify-center gap-2.5 rounded-xl bg-white px-3 py-5 text-center shadow-[0_2px_10px_rgba(60,50,30,0.06)]"
          >
            <span className="flex h-[clamp(30px,8vw,36px)] w-[clamp(30px,8vw,36px)] items-center justify-center rounded-full bg-[#c09a4a] font-serif text-[clamp(13px,3.4vw,15.5px)] font-bold leading-none text-white">
              {item.no}
            </span>
            <p className="text-[clamp(13.5px,3.7vw,17px)] font-bold leading-[1.5] tracking-[0.02em]">
              {item.body}
            </p>
          </li>
        ))}
      </ul>

      {/* closing call card */}
      <div className="mt-7 rounded-xl border border-[#d9c8a3] bg-white px-3.5 pb-5 pt-6 shadow-[0_2px_10px_rgba(60,50,30,0.06)]">
        <p className="text-center font-display text-[clamp(15px,4.2vw,19px)] font-bold tracking-[0.04em] text-forest-950">
          まずは相談事をお聞かせください
        </p>

        {/* phone CTA (FV style, reduced) */}
        <a
          href="tel:0344002098"
          className="mt-4 flex items-center gap-2 rounded-[18px] bg-gradient-to-b from-[#c8252c] to-[#a5151d] px-4 pb-[17px] pt-[15px] text-white shadow-[0_4px_14px_rgba(157,21,30,0.32)]"
        >
          <svg viewBox="0 0 24 24" className="h-9 w-9 shrink-0" fill="currentColor" aria-hidden="true">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span className="flex min-w-0 flex-1 flex-col items-center">
            <span className="whitespace-nowrap text-[clamp(11px,3vw,13.5px)] font-bold leading-none tracking-[0.04em]">
              緊急時も対応｜タップで発信
            </span>
            <span className="mt-2 whitespace-nowrap text-[clamp(29px,8vw,38px)] font-black leading-none tracking-[-0.01em]">
              03-4400-2098
            </span>
            <span className="mt-[9px] whitespace-nowrap rounded-full border-[1.5px] border-white/90 px-4 py-[5px] text-[clamp(9px,2.4vw,11px)] font-bold leading-none tracking-[0.02em]">
              9:00〜21:00 年中無休
            </span>
          </span>
          <ChevronCircle color="#b01218" />
        </a>

        {/* LINE CTA (FV style, reduced) */}
        <a
          href="https://page.line.me/782qjphg"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center gap-2.5 rounded-[18px] bg-gradient-to-b from-[#0bd160] to-[#05b04a] px-4 pb-[17px] pt-[15px] text-white shadow-[0_4px_14px_rgba(5,166,72,0.32)]"
        >
          <svg viewBox="0 0 24 24" className="h-[clamp(34px,9vw,42px)] w-[clamp(34px,9vw,42px)] shrink-0" aria-hidden="true">
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
            <span className="whitespace-nowrap text-[clamp(10.5px,2.9vw,13px)] font-bold leading-none tracking-[0.03em]">
              見積無料｜まずは現地調査から
            </span>
            <span className="mt-2 whitespace-nowrap text-[clamp(17px,4.7vw,21px)] font-bold leading-none tracking-[0.02em]">
              まずはLINEで相談する
            </span>
            <span className="mt-[9px] whitespace-nowrap rounded-full border-[1.5px] border-white/90 px-4 py-[5px] text-[clamp(9px,2.4vw,11px)] font-bold leading-none tracking-[0.02em]">
              24時間受付
            </span>
          </span>
          <ChevronCircle color="#06b14e" />
        </a>
      </div>
    </section>
  );
}
