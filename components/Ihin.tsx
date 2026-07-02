const STATS = ["遺品整理士が在籍", "不用品の買取可能"];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5l4.2 4L16 5.5" />
    </svg>
  );
}

export default function Ihin() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-14">
      <div className="reveal">
        <p className="font-mono text-[11px] tracking-[0.22em] text-teal-600">
          07 — IHIN SEIRI
        </p>

        {/* review chip */}
        <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-mist px-3 py-1 text-[12px] font-medium text-teal-800">
          <CheckIcon className="h-3.5 w-3.5 shrink-0 text-teal-600" />
          Google口コミ高評価獲得！
        </p>

        {/* heading */}
        <h2 className="mt-4">
          <span className="block text-[15px] font-bold text-muted">
            経験豊富なスタッフが対応する
          </span>
          <span className="mt-1 block text-[30px] font-bold tracking-tight text-ink">
            遺品整理
          </span>
        </h2>
      </div>

      {/* TODO: 優良事業所 再認定確認後に認定証セクションを復活 */}

      {/* stat cards */}
      <div className="reveal mt-8 grid grid-cols-2 gap-3">
        {STATS.map((label) => (
          <div
            key={label}
            className="rounded-xl border border-hairline bg-white p-4 shadow-[0_1px_2px_rgba(19,34,38,0.06)]"
          >
            <CheckIcon className="h-5 w-5 text-teal-600" />
            <p className="mt-2 text-[14px] font-bold leading-snug text-ink">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
