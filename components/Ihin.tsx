/**
 * 遺品整理 — FVデザイン言語での刷新版。
 * Ivory ground, gold-hairline chip (Google口コミ), FV-style dotted underline
 * on the big serif title, and an FV-benefit-style white bar with two cells
 * (thin-line gold/green icons, gold hairline divider).
 */

/** Round-dot underline (FV mockup style) as an inline background. */
const DOT_RULE = {
  backgroundImage:
    "radial-gradient(circle, rgba(29,81,56,0.52) 1.7px, transparent 1.9px)",
  backgroundSize: "9px 4px",
  backgroundRepeat: "repeat-x",
  backgroundPosition: "0 100%",
} as const;

function ChipCheck() {
  return (
    <svg viewBox="0 0 24 24" className="h-[15px] w-[15px] shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#1d5138" />
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

/* ---------- thin-line icons (gold/green, stroke-based) ---------- */

function IconCertStaff() {
  return (
    <svg viewBox="0 0 32 32" className="h-[clamp(26px,7vw,36px)] w-[clamp(26px,7vw,36px)] shrink-0" aria-hidden="true">
      <circle cx="13" cy="10.5" r="4.2" fill="none" stroke="#1d5138" strokeWidth="1.5" />
      <path
        d="M5.2 26c.8-5 3.9-7.6 7.8-7.6 1.9 0 3.6.6 5 1.9"
        fill="none"
        stroke="#1d5138"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="23.2" cy="19.2" r="3.7" fill="none" stroke="#c09a4a" strokeWidth="1.4" />
      <path
        d="m21.7 19.3 1.2 1.2 2.1-2.4"
        fill="none"
        stroke="#c09a4a"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m21.7 22.4-.9 3.7 2.4-1.3 2.4 1.3-.9-3.7"
        fill="none"
        stroke="#c09a4a"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBoxYen() {
  return (
    <svg viewBox="0 0 32 32" className="h-[clamp(26px,7vw,36px)] w-[clamp(26px,7vw,36px)] shrink-0" aria-hidden="true">
      <circle cx="21.5" cy="9" r="5.4" fill="none" stroke="#c09a4a" strokeWidth="1.4" />
      <path
        d="M19.4 6.6 21.5 9.5m0 0 2.1-2.9M21.5 9.5v2.4m-1.7-1.4h3.4m-3.4 1.4h3.4"
        fill="none"
        stroke="#c09a4a"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M5.5 16.5h13V26a.6.6 0 0 1-.6.6H6.1a.6.6 0 0 1-.6-.6z" fill="none" stroke="#1d5138" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 13.5h16l-1.4 3H5.4z" fill="none" stroke="#1d5138" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9.5 20.4h5" stroke="#1d5138" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- data ---------- */

const STRENGTHS = [
  { icon: <IconCertStaff />, top: "遺品整理士が", bottom: "在籍" },
  { icon: <IconBoxYen />, top: "不用品の", bottom: "買取可能" },
];

export default function Ihin() {
  return (
    <section className="w-full bg-ivory px-4 pb-10 pt-9">
      {/* gold hairline chip */}
      <p className="mx-auto flex w-fit items-center gap-1.5 rounded-full border border-[#c09a4a] bg-white px-[15px] py-[7px] shadow-[0_1px_4px_rgba(60,50,30,0.06)]">
        <ChipCheck />
        <span className="whitespace-nowrap text-[clamp(10.5px,2.9vw,12.5px)] font-bold tracking-[0.02em] leading-none text-forest-950">
          Google口コミ高評価獲得！
        </span>
      </p>

      {/* heading */}
      <h2 className="mt-5 text-center font-display font-bold">
        <span className="block text-[clamp(13px,3.6vw,16px)] tracking-[0.05em] text-forest-700">
          経験豊富なスタッフが対応する
        </span>
        <span
          className="mt-1.5 inline-block pb-[10px] text-[clamp(30px,8.5vw,40px)] font-extrabold leading-[1.3] tracking-[0.1em] text-forest-950"
          style={DOT_RULE}
        >
          遺品整理
        </span>
      </h2>

      {/* TODO: 優良事業所 再認定確認後に認定証セクションを復活 */}

      {/* strengths bar (FV benefit style) */}
      <div className="mt-6 flex items-stretch rounded-xl bg-white px-1 py-4 shadow-[0_2px_10px_rgba(60,50,30,0.06)]">
        {STRENGTHS.map((s, i) => (
          <div
            key={s.bottom}
            className={`flex flex-1 items-center justify-center gap-2 ${
              i > 0 ? "border-l border-[#d9c8a3]" : ""
            }`}
          >
            {s.icon}
            <div className="leading-tight">
              <p className="whitespace-nowrap text-[clamp(9px,2.4vw,11px)] font-bold tracking-[0.01em] text-ink">
                {s.top}
              </p>
              <p className="mt-[2px] whitespace-nowrap text-[clamp(13px,3.5vw,17px)] font-bold tracking-[0.04em] text-ink">
                {s.bottom}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
