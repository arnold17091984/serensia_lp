type StatCardProps = {
  index: string;
  lines: string[];
  keyword: string;
};

function StatCard({ index, lines, keyword }: Readonly<StatCardProps>) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-hairline bg-white px-2 pb-4 pt-3.5 text-center shadow-[0_1px_2px_rgba(19,34,38,0.06)]">
      <p
        className="font-mono text-[10px] tracking-[0.18em] text-teal-600"
        aria-hidden="true"
      >
        {index}
      </p>
      <p className="mt-2 text-[12px] font-medium leading-snug text-ink">
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
      <p className="mt-auto pt-1.5 text-[15px] font-bold leading-snug text-teal-700">
        {keyword}
      </p>
    </div>
  );
}

/* Google brand "G" mark (official brand colors, used small and quiet) */
function GoogleGIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

export default function Kuchikomi() {
  return (
    <section className="w-full border-t border-hairline bg-white px-5 py-14">
      {/* TODO: Googleクチコミの★数・件数・実口コミへのリンクを追加すると効果的（要実データ） */}

      <div className="reveal">
        <p className="font-mono text-[11px] tracking-[0.22em] text-teal-600">
          02 — REPUTATION
        </p>
        <h2 className="mt-3 text-[26px] font-bold tracking-tight text-ink">
          特殊清掃の豊富な実績
        </h2>
      </div>

      {/* Google reviews card */}
      <div className="reveal relative mt-7 rounded-xl border border-hairline bg-white px-5 py-6 text-center shadow-[0_1px_2px_rgba(19,34,38,0.06)]">
        <span
          className="absolute left-2 top-1.5 font-mono text-[11px] leading-none text-teal-600/40"
          aria-hidden="true"
        >
          +
        </span>
        <span
          className="absolute bottom-1.5 right-2 font-mono text-[11px] leading-none text-teal-600/40"
          aria-hidden="true"
        >
          +
        </span>
        <p className="flex items-center justify-center gap-2">
          <GoogleGIcon />
          <span className="text-[16px] font-bold tracking-tight text-ink">
            Google
          </span>
          <span className="text-[16px] font-bold text-ink">クチコミ</span>
        </p>
        <p className="mt-2 text-[28px] font-bold tracking-tight text-teal-700">
          高評価獲得
        </p>
      </div>

      {/* three achievement stats */}
      <div className="reveal mt-4 grid grid-cols-3 gap-2">
        <StatCard
          index="01"
          lines={["孤独死", "事故死現場"]}
          keyword="実績多数"
        />
        <StatCard
          index="02"
          lines={["代表自らが", "現場へ"]}
          keyword="立ち合い"
        />
        <StatCard index="03" lines={["管理会社様から"]} keyword="継続依頼" />
      </div>

      <p className="reveal mt-6 text-center text-[13px] leading-relaxed text-muted">
        本当にありがとうございます!
      </p>
    </section>
  );
}
