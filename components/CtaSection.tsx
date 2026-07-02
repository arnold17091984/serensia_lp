function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M4.5 10.5l3.8 3.8L15.5 6.2"
        fill="none"
        className="stroke-teal-600"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0 fill-current"
      aria-hidden="true"
    >
      <path d="M12 3C6.48 3 2 6.64 2 11.1c0 2.55 1.42 4.82 3.63 6.3-.16.94-.63 2.42-1.4 3.4 1.86-.27 3.63-1.06 4.75-1.72.97.21 1.98.32 3.02.32 5.52 0 10-3.64 10-8.3S17.52 3 12 3z" />
    </svg>
  );
}

export default function CtaSection() {
  return (
    <section className="w-full bg-gradient-to-b from-teal-900 to-teal-950">
      <div className="bg-blueprint-dark relative px-5 pb-14 pt-12">
        {/* measurement-style corner marks */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-3 font-mono text-[13px] leading-none text-white/25"
        >
          +
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-3 font-mono text-[13px] leading-none text-white/25"
        >
          +
        </span>

        {/* overline + area headline */}
        <div className="reveal">
          <p className="font-mono text-[11px] tracking-[0.22em] text-teal-100/75">
            CONSULTATION — FREE
          </p>
          <h2 className="mt-3 text-[25px] font-bold leading-snug tracking-tight text-white">
            東京・神奈川を中心に
            <br />
            関東一円
          </h2>
        </div>

        {/* 出張費用・お見積り 0円 */}
        <div className="reveal mt-6 flex items-end justify-between gap-4 border-y border-white/15 py-6">
          <div className="pb-2">
            <p className="text-[16px] font-bold leading-relaxed text-teal-100">
              出張費用
            </p>
            <p className="text-[16px] font-bold leading-relaxed text-teal-100">
              お見積り
            </p>
          </div>
          <p className="flex items-end font-mono font-medium leading-none text-white">
            <span className="text-[96px] tracking-tight">0</span>
            <span className="mb-2 ml-1 text-[30px]">円</span>
          </p>
        </div>

        {/* white consultation card */}
        <div className="reveal mt-8 rounded-xl border border-hairline bg-white p-5 shadow-[0_1px_2px_rgba(19,34,38,0.06)]">
          <h3 className="text-center text-[20px] font-bold tracking-tight text-ink">
            お電話1本！まずはご相談を
          </h3>

          <ul className="mt-4 border-t border-hairline">
            <li className="flex items-start gap-3 border-b border-hairline py-3">
              <CheckIcon />
              <span className="text-[15px] font-bold text-ink">
                最短即日対応！緊急時もご相談ください
              </span>
            </li>
            <li className="flex items-start gap-3 border-b border-hairline py-3">
              <CheckIcon />
              <span className="text-[15px] font-bold text-ink">
                追加費用一切なし！{/* TODO: 景表法対応: 例外条件の明記を検討 */}
              </span>
            </li>
            <li className="flex items-start gap-3 border-b border-hairline py-3">
              <CheckIcon />
              <span className="text-[15px] font-bold text-ink">
                クレジットカードご利用可能
              </span>
            </li>
          </ul>

          <div className="pt-5 text-center">
            <p className="text-[12px] font-bold text-signal-deep">
              ▼タップで発信
            </p>
            <a
              href="tel:0344002098"
              className="mt-1 inline-flex items-center justify-center gap-2 text-signal"
            >
              <PhoneIcon />
              <span className="font-mono text-[34px] font-semibold leading-none tracking-tight">
                03-4400-2098
              </span>
            </a>
            <p className="mt-2 text-[11px] leading-relaxed text-muted">
              お電話受付 9:00〜21:00（不定休）
              <br />
              ／LINE・メールは24時間受付・緊急時は折り返し対応
            </p>
          </div>

          {/* LINE full-width button */}
          <a
            href="https://page.line.me/782qjphg"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-3 rounded-lg bg-line px-4 py-3.5 text-white"
          >
            <LineIcon />
            <span className="text-left">
              <span className="block text-[11px] font-bold leading-tight opacity-90">
                見積無料 まずは現地調査から
              </span>
              <span className="block text-[17px] font-bold leading-tight">
                今すぐLINEで依頼する
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
