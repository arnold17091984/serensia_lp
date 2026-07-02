function CrownIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 40 26"
      fill="none"
    >
      <path
        d="M4 23 L2 7 L12 13 L20 2 L28 13 L38 7 L36 23 Z"
        fill="#c09a4a"
        stroke="#8a6423"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <circle cx="2" cy="6" r="2" fill="#d4b46a" />
      <circle cx="20" cy="2.5" r="2" fill="#d4b46a" />
      <circle cx="38" cy="6" r="2" fill="#d4b46a" />
    </svg>
  );
}

function GoldBadge({
  lines,
  className,
}: {
  lines: string[];
  className?: string;
}) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <CrownIcon className="absolute -top-5 left-1/2 h-7 w-11 -translate-x-1/2" />
      <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[radial-gradient(circle_at_32%_26%,#f5e7bd_0%,#d4b46a_45%,#b08a3c_80%,#c09a4a_100%)] shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
        <p className="text-center font-serif text-[19px] font-bold leading-snug text-[#5d3f16]">
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default function Ihin() {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#fdfcfa_0%,#f8f3ea_34%,#8a5a30_58%,#4c2d16_74%,#c3a075_90%,#f2ebe0_100%)] px-4 pb-14 pt-8">
      {/* gold confetti decorations */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-2 top-[30%] h-10 w-8 rotate-12 opacity-90"
        viewBox="0 0 24 32"
        fill="none"
      >
        <path d="M2 2 C14 6 20 4 22 0 L22 28 C12 24 6 26 2 32 Z" fill="#c09a4a" />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-2 top-[52%] h-9 w-7 -rotate-45 opacity-90"
        viewBox="0 0 24 32"
        fill="none"
      >
        <path d="M2 2 C14 6 20 4 22 0 L22 28 C12 24 6 26 2 32 Z" fill="#d4b46a" />
      </svg>

      {/* red band */}
      <p className="bg-accent py-3 text-center font-serif text-[24px] font-bold tracking-wide text-white">
        Google口コミ高評価獲得！
      </p>

      {/* headings */}
      <p className="mt-5 text-center font-serif text-[21px] font-bold tracking-[0.05em] text-[#6b4423]">
        経験豊富なスタッフが対応する
      </p>
      <h2 className="mt-1 text-center font-serif text-[58px] font-bold tracking-[0.08em] text-[#8a5527]">
        遺品整理
      </h2>

      {/* TODO: 優良事業所 再認定確認後に認定証セクションを復活 */}

      {/* gold circle badges */}
      <div className="mt-10 flex items-start justify-center gap-1 pb-4">
        <GoldBadge lines={["遺品", "整理士", "が在籍"]} />
        <GoldBadge lines={["不用品の", "買取可能"]} className="mt-7 -ml-3" />
      </div>
    </section>
  );
}
