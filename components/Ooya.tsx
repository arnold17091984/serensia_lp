/**
 * Section: 大家様・管理会社様向け — FV-aligned redesign.
 * White ground, forest pill chip (FV location-pill style), dot-ruled
 * display heading, benefit-bar style 3-column badge card with gold
 * dividers and thin-line icons, and the work photo.
 */

/** Round-dot underline (FV-style) as an inline background. */
const DOT_RULE = {
  backgroundImage:
    "radial-gradient(circle, rgba(29,81,56,0.52) 1.7px, transparent 1.9px)",
  backgroundSize: "9px 4px",
  backgroundRepeat: "repeat-x",
  backgroundPosition: "0 100%",
} as const;

/* ---------- thin-line icons (gold/green, stroke-based) ---------- */

function IconCycle() {
  return (
    <svg viewBox="0 0 32 32" className="h-[clamp(24px,6.4vw,32px)] w-[clamp(24px,6.4vw,32px)] shrink-0" aria-hidden="true">
      <path d="M8 13a8.5 8.5 0 0 1 14.8-3.2" fill="none" stroke="#1d5138" strokeWidth="1.5" strokeLinecap="round" />
      <path d="m21.4 6.4 1.4 3.4 3.3-1.6" fill="none" stroke="#1d5138" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 19a8.5 8.5 0 0 1-14.8 3.2" fill="none" stroke="#c09a4a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10.6 25.6 9.2 22.2l-3.3 1.6" fill="none" stroke="#c09a4a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconNeighbors() {
  return (
    <svg viewBox="0 0 32 32" className="h-[clamp(24px,6.4vw,32px)] w-[clamp(24px,6.4vw,32px)] shrink-0" aria-hidden="true">
      <path d="m3.5 15 7-6 7 6" fill="none" stroke="#1d5138" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 13.2v11.3h9V13.2" fill="none" stroke="#1d5138" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m17.5 18 5-4.3 5 4.3" fill="none" stroke="#c09a4a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.5 16.6v7.9h6v-7.9" fill="none" stroke="#c09a4a" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function IconClockDash() {
  return (
    <svg viewBox="0 0 32 32" className="h-[clamp(24px,6.4vw,32px)] w-[clamp(24px,6.4vw,32px)] shrink-0" aria-hidden="true">
      <circle cx="19" cy="16" r="8.8" fill="none" stroke="#1d5138" strokeWidth="1.5" />
      <path d="M19 10.8V16l3.6 2.4" fill="none" stroke="#1d5138" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 11.5h6M2.5 16h5m-4 4.5h6" fill="none" stroke="#c09a4a" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- data ---------- */

const BADGES = [
  { icon: <IconCycle />, small: ["解体から", "原状回復まで"], big: "一貫対応" },
  { icon: <IconNeighbors />, small: ["近隣住民", "への配慮を"], big: "徹底" },
  { icon: <IconClockDash />, small: ["緊急時も"], big: "迅速対応" },
];

export default function Ooya() {
  return (
    <section className="w-full bg-white px-[18px] pb-10 pt-9">
      {/* chip (FV location-pill style) */}
      <div className="text-center">
        <p className="inline-flex items-center gap-1.5 rounded-full bg-forest-900 py-[9px] pl-3.5 pr-[18px] text-[13px] font-bold leading-none tracking-[0.02em] text-white shadow-[0_1px_4px_rgba(17,49,38,0.25)]">
          <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor" aria-hidden="true">
            <path d="M12 3.2 3.5 10.4h2.3V21h5v-5.6h2.4V21h5V10.4h2.3z" />
          </svg>
          次の入居者のために物件を回復
        </p>
      </div>

      {/* heading */}
      <h2 className="mt-[22px] text-center font-display font-bold text-forest-900">
        <span
          className="inline pb-[9px] text-[clamp(16px,4.5vw,21px)] leading-[1.9] tracking-[0.05em]"
          style={DOT_RULE}
        >
          大家様・管理会社様の
        </span>
        <span className="mt-[14px] block text-[clamp(24px,6.8vw,32px)] font-extrabold leading-[1.35] tracking-[0.04em] text-forest-950">
          SOSも緊急対応
        </span>
      </h2>

      {/* body copy */}
      <p className="mt-5 text-[clamp(11px,2.95vw,13.5px)] font-medium leading-[2.05] text-ink">
        管理をする物件で事故やトラブルが発生した際は緊急を要することで、ご相談をいただくことが多くあります。一刻も早く、次の入居者が安心して住める状態に戻すため、セレンシアが迅速に駆けつけます。汚染除去・消臭・消毒から、必要に応じた建材撤去や原状回復の段取りまで一括で進められます。
      </p>

      {/* 3 badges (FV benefit-bar style) */}
      <div className="mt-6 flex items-stretch rounded-xl border border-[#e5decf] bg-white px-1 py-4 shadow-[0_2px_10px_rgba(60,50,30,0.06)]">
        {BADGES.map((b, i) => (
          <div
            key={b.big}
            className={`flex flex-1 flex-col items-center justify-start gap-[6px] px-0.5 text-center ${
              i > 0 ? "border-l border-[#d9c8a3]" : ""
            }`}
          >
            {b.icon}
            <p className="flex min-h-[2.9em] items-center text-[clamp(8px,2.2vw,9.5px)] font-bold leading-[1.45] tracking-[0.01em] text-[#4b5450]">
              <span>
                {b.small.map((line, li) => (
                  <span key={line}>
                    {li > 0 && <br />}
                    {line}
                  </span>
                ))}
              </span>
            </p>
            <p className="whitespace-nowrap text-[clamp(13px,3.5vw,17px)] font-bold tracking-[0.04em] text-ink">
              {b.big}
            </p>
          </div>
        ))}
      </div>

      {/* work photo */}
      <img
        src="/img/ooya_photo.jpg"
        alt="物件のドアを丁寧に清掃するセレンシアのスタッフ"
        width={1000}
        height={410}
        loading="lazy"
        decoding="async"
        className="mt-5 block h-auto w-full rounded-xl border border-[#e5decf]"
      />
    </section>
  );
}
