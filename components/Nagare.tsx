import type { ReactNode } from "react";

/**
 * ご依頼の流れ — restyled to match the FV design language.
 * Ivory ground, gold flourish heading with a large gold "5", a crimson
 * pill band, and a vertical timeline: gold serif number medallions on a
 * gold hairline, white cards with two-tone (gold/green) line icons.
 */

interface Step {
  title: string;
  description: string;
  icon: ReactNode;
  tel?: string;
}

/* ---------- thin-line icons (gold/green, stroke-based, Hero style) ---------- */

const ICON_CLASS =
  "h-[clamp(26px,7vw,34px)] w-[clamp(26px,7vw,34px)] shrink-0";

function IconChat() {
  return (
    <svg viewBox="0 0 32 32" className={ICON_CLASS} aria-hidden="true">
      <path
        d="M5.5 6.5h21A1.5 1.5 0 0 1 28 8v12a1.5 1.5 0 0 1-1.5 1.5h-12L9 26v-4.5H5.5A1.5 1.5 0 0 1 4 20V8a1.5 1.5 0 0 1 1.5-1.5Z"
        fill="none"
        stroke="#1d5138"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12h13m-13 4.5h9"
        stroke="#c09a4a"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg viewBox="0 0 32 32" className={ICON_CLASS} aria-hidden="true">
      <circle cx="13.5" cy="13.5" r="7.6" fill="none" stroke="#1d5138" strokeWidth="1.5" />
      <path
        d="M10 13a3.8 3.8 0 0 1 3-3"
        fill="none"
        stroke="#c09a4a"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="m19.2 19.2 7.3 7.3"
        stroke="#c09a4a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconContract() {
  return (
    <svg viewBox="0 0 32 32" className={ICON_CLASS} aria-hidden="true">
      <path
        d="M7.5 4.5H18L22.5 9v18.5h-15z"
        fill="none"
        stroke="#1d5138"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10.5 12.5h6m-6 4h8" stroke="#1d5138" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="m19.4 26.2 6.6-6.6 2.2 2.2-6.6 6.6-2.9.7z"
        fill="none"
        stroke="#c09a4a"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSpray() {
  return (
    <svg viewBox="0 0 32 32" className={ICON_CLASS} aria-hidden="true">
      <path
        d="M13.5 14h7.5l1.5 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-7.5a1.5 1.5 0 0 1-1.5-1.5v-8z"
        fill="none"
        stroke="#1d5138"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 14v-4h5m-5 0h-4v3"
        fill="none"
        stroke="#1d5138"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g fill="none" stroke="#c09a4a" strokeWidth="1.4" strokeLinecap="round">
        <path d="M8 6.5 6 4.8" />
        <path d="M7 10h-2.6" />
        <path d="m24.5 6 1.8-1.8" />
        <circle cx="25.5" cy="11" r="1.3" />
      </g>
    </svg>
  );
}

function IconHouseCheck() {
  return (
    <svg viewBox="0 0 32 32" className={ICON_CLASS} aria-hidden="true">
      <path
        d="m4.5 14.5 10-8.5 10 8.5"
        fill="none"
        stroke="#c09a4a"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7.5 13.5V26h14V13.5" fill="none" stroke="#1d5138" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="23.5" cy="22.5" r="4.8" fill="#fff" stroke="#c09a4a" strokeWidth="1.4" />
      <path
        d="m21.5 22.6 1.5 1.5 2.5-3"
        fill="none"
        stroke="#c09a4a"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- data ---------- */

const STEPS: Step[] = [
  {
    title: "お問い合わせ",
    description: "お電話・LINEでご連絡ください（タップで発信）。",
    icon: <IconChat />,
    tel: "tel:0344002098",
  },
  {
    title: "現地調査・お見積り",
    description: "現場を確認し、無料でお見積りを作成。",
    icon: <IconSearch />,
  },
  {
    title: "ご契約",
    description: "内容にご納得いただいた後、契約へ。",
    icon: <IconContract />,
  },
  {
    title: "特殊清掃・消臭作業開始",
    description: "高度な技術で、徹底的に清掃・消臭。",
    icon: <IconSpray />,
  },
  {
    title: "作業完了・お引き渡し",
    description: "仕上がりをご確認いただき、お引き渡しとなります。",
    icon: <IconHouseCheck />,
  },
];

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

export default function Nagare() {
  return (
    <section id="nagare" className="w-full bg-ivory pb-10 pt-9">
      {/* heading with gold flourishes */}
      <h2 className="flex items-center justify-center gap-2 px-2">
        <GoldFlourish />
        <span className="whitespace-nowrap font-display text-[clamp(16px,4.4vw,21px)] font-bold tracking-[0.04em] text-forest-950">
          ご依頼の流れ
        </span>
        <GoldFlourish flip />
      </h2>

      {/* sub heading: big gold "5" */}
      <p className="mt-3 flex items-baseline justify-center gap-[3px] font-display font-bold text-forest-950">
        <span className="text-[clamp(14px,3.8vw,17px)] tracking-[0.05em]">
          作業完了までの
        </span>
        <span className="px-[2px] text-[clamp(32px,8.5vw,40px)] leading-none text-[#c09a4a]">
          5
        </span>
        <span className="text-[clamp(14px,3.8vw,17px)] tracking-[0.05em]">
          ステップ
        </span>
      </p>

      {/* crimson emergency pill */}
      <p className="mx-auto mt-3.5 w-fit rounded-full bg-gradient-to-b from-[#c8252c] to-[#a5151d] px-[18px] py-[7px] text-center text-[clamp(10.5px,2.8vw,12.5px)] font-bold leading-none tracking-[0.02em] text-white shadow-[0_2px_8px_rgba(157,21,30,0.25)]">
        即日対応可能！緊急時もご相談ください
      </p>

      {/* staff photo */}
      <div className="mx-4 mt-5 overflow-hidden rounded-xl border border-[#e5decf]">
        <img
          src="/img/nagare_photo.jpg"
          alt="電話で相談を受ける男性スタッフ"
          width={355}
          height={432}
          loading="lazy"
          decoding="async"
          className="h-[clamp(150px,42vw,200px)] w-full object-cover object-[50%_22%]"
        />
      </div>

      {/* vertical timeline */}
      <ol className="relative mx-4 mt-6 flex flex-col gap-[14px]">
        {/* gold hairline connecting the medallions */}
        <span
          aria-hidden="true"
          className="absolute bottom-[22px] left-[21px] top-[22px] w-[2px] bg-[#d9c8a3]"
        />
        {STEPS.map((step, index) => (
          <li key={step.title} className="relative flex items-start gap-3">
            {/* gold serif number medallion */}
            <span className="z-10 flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-full bg-[#c09a4a] text-white shadow-[0_1px_4px_rgba(140,110,50,0.3)]">
              <span className="text-[7.5px] font-bold leading-none tracking-[0.08em]">
                STEP
              </span>
              <span className="mt-[2px] font-display text-[19px] font-bold leading-none">
                {index + 1}
              </span>
            </span>
            {/* white card (STEP1 is tap-to-call) */}
            {step.tel ? (
              <a
                href={step.tel}
                className="flex min-h-11 flex-1 items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-[0_2px_10px_rgba(60,50,30,0.06)] ring-1 ring-[#d9c8a3]"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-[clamp(13px,3.5vw,15px)] font-bold leading-[1.5] tracking-[0.02em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[clamp(10.5px,2.8vw,12.5px)] leading-[1.8] text-[#4b5450]">
                    {step.description}
                  </p>
                </div>
                {step.icon}
              </a>
            ) : (
              <div className="flex min-h-11 flex-1 items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-[0_2px_10px_rgba(60,50,30,0.06)]">
                <div className="min-w-0 flex-1">
                  <h3 className="text-[clamp(13px,3.5vw,15px)] font-bold leading-[1.5] tracking-[0.02em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[clamp(10.5px,2.8vw,12.5px)] leading-[1.8] text-[#4b5450]">
                    {step.description}
                  </p>
                </div>
                {step.icon}
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
