/**
 * Section: 柔軟なサポート体制 — Clinical Trust redesign.
 * White ground, mono overline, 2x2 numbered support cards,
 * signal-framed call card, and LINE-green CTA button.
 */

const SUPPORT_ITEMS = [
  {
    no: "01",
    body: (
      <>
        立会い<span className="text-teal-700">不要</span>
      </>
    ),
  },
  {
    no: "02",
    body: (
      <>
        <span className="text-teal-700">鍵のお預り</span>可能
      </>
    ),
  },
  {
    no: "03",
    body: (
      <>
        代表または副社長が<span className="text-teal-700">現地立ち合い</span>
      </>
    ),
  },
  {
    no: "04",
    body: (
      <>
        <span className="text-teal-700">近隣への配慮</span>を徹底
      </>
    ),
  },
];

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 text-signal-deep"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 text-white"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Support() {
  return (
    <section className="w-full bg-white px-5 py-14">
      <div className="reveal">
        <p className="font-mono text-[11px] tracking-[0.22em] text-teal-600">
          05 — SUPPORT
        </p>
        <h2 className="mt-4 font-bold tracking-tight text-ink">
          <span className="block text-[15px] font-bold leading-[1.7] text-muted">
            特殊清掃の不安やお悩みを和らげる
          </span>
          <span className="block text-[26px] leading-[1.4]">
            柔軟なサポート体制
          </span>
        </h2>
      </div>

      {/* 2x2 support cards */}
      <ul className="reveal mt-7 grid grid-cols-2 gap-2.5">
        {SUPPORT_ITEMS.map((item) => (
          <li
            key={item.no}
            className="rounded-xl border border-hairline bg-white p-4 shadow-[0_1px_2px_rgba(19,34,38,0.06)]"
          >
            <p className="font-mono text-[11px] tracking-[0.18em] text-teal-600">
              {item.no}
            </p>
            <p className="mt-2 text-[16px] font-bold leading-[1.6] text-ink">
              {item.body}
            </p>
          </li>
        ))}
      </ul>

      {/* Call card (signal-framed, replaces red band + yellow box) */}
      <div className="reveal mt-8 rounded-xl border-2 border-signal bg-white p-5 text-center shadow-[0_1px_2px_rgba(19,34,38,0.06)]">
        <p className="text-[17px] font-bold tracking-tight text-ink">
          まずは相談事をお聞かせください
        </p>
        <p className="mt-2.5 inline-flex items-center rounded-full border border-hairline bg-mist px-3 py-1 text-[11px] font-bold text-teal-800">
          緊急時も対応
        </p>
        <a href="tel:0344002098" className="mt-3 block">
          <span className="flex items-center justify-center gap-1.5 text-[12px] font-bold text-signal-deep">
            <PhoneIcon />
            タップで発信
          </span>
          <span className="mt-1 block font-mono text-[32px] font-bold leading-none tracking-tight text-signal-deep">
            03-4400-2098
          </span>
        </a>
        <p className="mt-3 text-[10.5px] font-medium leading-[1.7] text-muted">
          お電話受付 9:00〜21:00（不定休）／LINE・メールは24時間受付・緊急時は折り返し対応
        </p>
      </div>

      {/* LINE button */}
      <a
        href="https://page.line.me/782qjphg"
        target="_blank"
        rel="noopener noreferrer"
        className="reveal mt-4 flex items-center justify-center gap-3 rounded-xl bg-line px-5 py-4 shadow-[0_1px_2px_rgba(19,34,38,0.06)]"
      >
        <span className="shrink-0 rounded-full border border-white/60 px-2.5 py-1 text-[11px] font-bold leading-none text-white">
          見積無料
        </span>
        <span className="text-left text-white">
          <span className="block text-[11px] font-bold leading-[1.5] opacity-90">
            まずは現地調査から
          </span>
          <span className="block text-[17px] font-bold leading-tight">
            今すぐLINEで依頼する
          </span>
        </span>
        <ArrowIcon />
      </a>
    </section>
  );
}
