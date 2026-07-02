/**
 * CtaSection — the closing conversion block (used mid-page and at the end).
 * The only dark section of the LP: a forest-950 ground with a thin gold rule
 * on top, white serif area copy, an oversized "0円", and a white card that
 * holds the FV-identical phone / LINE buttons.
 */

/** Round-dot underline (FV mockup style) as an inline background. */
const DOT_RULE = {
  backgroundImage:
    "radial-gradient(circle, rgba(29,81,56,0.52) 1.7px, transparent 1.9px)",
  backgroundSize: "9px 4px",
  backgroundRepeat: "repeat-x",
  backgroundPosition: "0 100%",
} as const;

/* ---------- ornaments & icons (inline SVG, FV style) ---------- */

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

function GoldCheck() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-[2px] h-[clamp(18px,5vw,22px)] w-[clamp(18px,5vw,22px)] shrink-0"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="#c09a4a" />
      <path
        d="m7.4 12.2 3 3 6-6.4"
        fill="none"
        stroke="#fff"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

export default function CtaSection() {
  return (
    <section data-cta-section className="w-full bg-forest-950">
      {/* thin gold rule on top */}
      <div
        aria-hidden="true"
        className="h-[2px] w-full bg-gradient-to-r from-[#8a6423] via-[#d4b46a] to-[#8a6423]"
      />

      <div className="px-3.5 pb-9 pt-8">
        {/* ===== area heading (white serif on deep green) ===== */}
        <h2 className="flex items-center justify-center gap-2 px-2">
          <GoldFlourish />
          <span className="whitespace-nowrap font-display text-[clamp(14px,3.8vw,18px)] font-bold tracking-[0.06em] text-white">
            東京・神奈川を中心に
          </span>
          <GoldFlourish flip />
        </h2>
        <p className="mt-1.5 text-center font-display text-[clamp(27px,7.4vw,34px)] font-bold leading-tight tracking-[0.16em] text-white">
          関東一円
        </p>

        {/* ===== 出張費用・お見積り 0円 ===== */}
        <div className="mt-2.5 flex items-end justify-center gap-2.5">
          <div className="flex flex-col gap-2.5 pb-[15px] font-display font-bold leading-none text-white">
            <span className="text-[clamp(19px,5.2vw,24px)] tracking-[0.12em]">
              出張費用
            </span>
            <span className="text-[clamp(19px,5.2vw,24px)] tracking-[0.12em]">
              お見積り
            </span>
          </div>
          <p className="flex items-end leading-none">
            <span className="text-[clamp(64px,17vw,84px)] font-black tracking-[-0.02em] text-white">
              0
            </span>
            <span className="pb-[7px] font-display text-[clamp(24px,6.4vw,30px)] font-bold text-[#c09a4a]">
              円
            </span>
          </p>
        </div>

        {/* ===== white card ===== */}
        <div className="mt-[22px] rounded-xl bg-white pb-[10px] pt-5 shadow-[0_2px_10px_rgba(60,50,30,0.06)]">
          <h3 className="px-4 text-center">
            <span
              className="inline pb-[8px] font-display text-[clamp(16px,4.4vw,21px)] font-bold tracking-[0.03em] text-ink"
              style={DOT_RULE}
            >
              お電話1本！まずはご相談を
            </span>
          </h3>

          {/* checklist */}
          <ul className="mt-4 px-5">
            <li className="flex items-start gap-2.5 border-b border-[#d9c8a3] py-[11px]">
              <GoldCheck />
              <span className="text-[clamp(11.5px,3.1vw,13.5px)] font-bold leading-[1.9] text-ink">
                最短即日対応！緊急時もご相談ください
              </span>
            </li>
            <li className="flex items-start gap-2.5 border-b border-[#d9c8a3] py-[11px]">
              <GoldCheck />
              <span className="text-[clamp(11.5px,3.1vw,13.5px)] font-bold leading-[1.9] text-ink">
お見積り確定後の追加費用なし
              </span>
            </li>
            <li className="flex items-start gap-2.5 py-[11px]">
              <GoldCheck />
              <span className="text-[clamp(11.5px,3.1vw,13.5px)] font-bold leading-[1.9] text-ink">
                クレジットカードご利用可能
              </span>
            </li>
          </ul>

          {/* ===== phone CTA (FV-identical) ===== */}
          <a
            href="tel:0344002098"
            className="mx-2 mt-2 flex items-center gap-2 rounded-[18px] bg-gradient-to-b from-[#c8252c] to-[#a5151d] px-4 pb-[17px] pt-[15px] text-white shadow-[0_4px_14px_rgba(157,21,30,0.32)]"
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

          {/* ===== LINE CTA (FV-identical) ===== */}
          <a
            href="https://page.line.me/782qjphg"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 mb-2 mt-3 flex items-center gap-2.5 rounded-[18px] bg-gradient-to-b from-[#0bd160] to-[#05b04a] px-4 pb-[17px] pt-[15px] text-white shadow-[0_4px_14px_rgba(5,166,72,0.32)]"
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
        </div>
      </div>
    </section>
  );
}
