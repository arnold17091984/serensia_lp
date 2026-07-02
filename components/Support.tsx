/**
 * Section: 柔軟なサポート体制（design-refs/06_support.jpg）
 * Pale-green leaf background + 4 numbered white cards + red band
 * + yellow phone box + green LINE button.
 */

function Leaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M0 24C0 10.7 10.7 0 24 0c0 13.3-10.7 24-24 24Z" />
    </svg>
  );
}

const SUPPORT_ITEMS = [
  {
    no: "01",
    body: (
      <>
        <span className="text-ink">立会い</span>
        <span className="text-accent">不要</span>
      </>
    ),
  },
  {
    no: "02",
    body: (
      <>
        <span className="text-accent">鍵のお預り</span>
        <span className="text-ink">可能</span>
      </>
    ),
  },
  {
    no: "03",
    body: (
      <>
        <span className="mr-1 inline-block align-middle text-[13px] font-bold leading-[1.4] text-ink">
          代表または
          <br />
          副社長が
        </span>
        <span className="align-middle text-accent">現地立ち合い</span>
      </>
    ),
  },
  {
    no: "04",
    body: (
      <>
        <span className="text-accent">近隣への配慮</span>
        <span className="text-ink">を徹底</span>
      </>
    ),
  },
];

export default function Support() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-brand-100/70 to-brand-100">
      {/* Decorative leaves */}
      <Leaf className="absolute -left-6 top-16 h-24 w-24 rotate-[160deg] text-brand-500/25" />
      <Leaf className="absolute -right-5 top-8 h-20 w-20 rotate-[-20deg] text-brand-500/20" />
      <Leaf className="absolute -right-8 top-[45%] h-28 w-28 rotate-[210deg] text-brand-600/20" />
      <Leaf className="absolute -left-8 bottom-40 h-24 w-24 rotate-[40deg] text-brand-500/15" />

      {/* Heading */}
      <div className="relative px-4 pt-10 text-center">
        <p className="text-[18px] font-bold tracking-wide text-ink">
          特殊清掃の不安やお悩みを和らげる
        </p>
        <h2 className="mt-1 font-serif font-bold">
          <span className="block bg-gradient-to-b from-brand-800 to-brand-500 bg-clip-text text-[32px] leading-[1.3] text-transparent">
            柔軟な
          </span>
          <span className="block bg-gradient-to-b from-brand-800 to-brand-500 bg-clip-text text-[41px] leading-[1.25] tracking-[0.06em] text-transparent">
            サポート体制
          </span>
        </h2>

        {/* Numbered cards */}
        <ul className="mt-7 space-y-4">
          {SUPPORT_ITEMS.map((item) => (
            <li
              key={item.no}
              className="flex items-center gap-4 rounded-xl bg-white px-5 py-5 text-left shadow-[0_4px_16px_rgba(20,92,69,0.12)]"
            >
              <span className="font-serif text-[30px] font-bold italic leading-none text-brand-500">
                {item.no}
              </span>
              <p className="text-[23px] font-bold leading-tight">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Red band */}
      <div className="relative mt-9 bg-gradient-to-r from-[#8e1116] via-accent to-[#8e1116] py-3 text-center">
        <p className="font-serif text-[25px] font-bold tracking-wide text-white">
          まずは相談事をお聞かせください
        </p>
      </div>

      {/* Yellow phone box */}
      <a href="tel:0344002098" className="relative block bg-[#ffe600] py-4 pl-3 pr-2">
        <div className="flex items-center gap-2">
          <p className="shrink-0 text-center text-[17px] font-bold leading-[1.35] text-ink">
            緊急時も
            <br />
            対応
          </p>
          <span
            className="h-0 w-0 shrink-0 border-y-[22px] border-l-[14px] border-y-transparent border-l-accent"
            aria-hidden="true"
          />
          <div className="min-w-0 flex-1 text-center">
            <p className="text-[13px] font-bold text-accent">▼タップで発信</p>
            <p className="text-[34px] font-bold leading-none tracking-tight text-accent">
              03-4400-2098
            </p>
            <p className="mt-1.5 text-[10px] font-bold leading-[1.5] text-ink">
              お電話受付 9:00〜21:00（不定休）／LINE・メールは24時間受付・緊急時は折り返し対応
            </p>
          </div>
        </div>
      </a>

      {/* LINE button */}
      <div className="relative px-4 pb-10 pt-6">
        <a
          href="https://page.line.me/782qjphg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-brand-500 to-brand-700 px-4 py-3 shadow-[0_5px_14px_rgba(14,77,58,0.35)]"
        >
          <span className="flex h-[54px] w-[54px] shrink-0 flex-col items-center justify-center rounded-full bg-accent text-center text-[14px] font-bold leading-[1.25] text-white">
            <span>見積</span>
            <span>無料</span>
          </span>
          <span className="text-center text-white">
            <span className="block text-[14px] font-bold tracking-wide">
              まずは現地調査から
            </span>
            <span className="block font-serif text-[22px] font-bold leading-tight">
              今すぐLINEで依頼する
            </span>
          </span>
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand-700" fill="none">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
