import type { ReactNode } from "react";

interface Step {
  title: string;
  description: string;
  icon: ReactNode;
}

const ICON_PROPS = {
  fill: "none",
  stroke: "#ffffff",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const STEPS: Step[] = [
  {
    title: "お問い合わせ",
    description: "お電話・LINE・メールでご連絡ください。",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" {...ICON_PROPS} aria-hidden="true">
        <path d="M4 5h15a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-8.5L6 19.5V16H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
        <path d="M7.5 9h8.5" />
        <path d="M7.5 12h5.5" />
      </svg>
    ),
  },
  {
    title: "現地調査・お見積り",
    description: "現場を確認し、無料でお見積りを作成。",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" {...ICON_PROPS} aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="5.8" />
        <path d="m14.8 14.8 5.2 5.2" strokeWidth="2.2" />
      </svg>
    ),
  },
  {
    title: "ご契約",
    description: "内容にご納得いただいた後、契約へ。",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" {...ICON_PROPS} aria-hidden="true">
        {/* simplified handshake */}
        <path d="m2.5 9.5 4-3 4.5 2 4.5-2.5 6 4" />
        <path d="m7 10.5 5 4.5 4.5-4" />
        <path d="M9.5 13.2 8 14.8" />
        <path d="M14.7 13.4l1.5 1.4" />
      </svg>
    ),
  },
  {
    title: "特殊清掃・消臭作業開始",
    description: "高度な技術で、徹底的に清掃・消臭。",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" {...ICON_PROPS} aria-hidden="true">
        {/* broom + bucket + bubbles */}
        <path d="M12.5 3 8.5 12" />
        <path d="M4.5 12.5h6.5l1.2 5H3.8Z" />
        <path d="M14.5 14.5h6l-.9 5.5h-4.2Z" />
        <circle cx="16.5" cy="6" r="1.4" />
        <circle cx="19.5" cy="9.5" r="1" />
        <circle cx="15.8" cy="10.5" r="0.7" />
      </svg>
    ),
  },
  {
    title: "作業完了・お引き渡し",
    description: "仕上がりをご確認いただき、お引き渡しとなります。",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" {...ICON_PROPS} aria-hidden="true">
        {/* house + check */}
        <path d="m3.5 11 8.5-6.5L20.5 11" />
        <path d="M6 10.5V19h12v-8.5" />
        <path d="m9.3 14.3 2.2 2.2 3.6-3.8" />
      </svg>
    ),
  },
];

function ChevronDown() {
  return (
    <svg
      viewBox="0 0 24 20"
      className="h-5 w-5"
      fill="none"
      stroke="#14bd87"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 3 7 6 7-6" />
      <path d="m5 11 7 6 7-6" />
    </svg>
  );
}

export default function Nagare() {
  return (
    <section id="nagare" className="w-full">
      {/* green header with photo */}
      <div className="relative overflow-hidden bg-[#17bf8b]">
        <img
          src="/img/nagare_photo.jpg"
          alt="電話で相談を受ける男性スタッフ"
          width={355}
          height={432}
          loading="lazy"
          decoding="async"
          className="absolute bottom-0 left-0 h-full w-auto"
        />
        <div className="relative ml-[38%] py-6 pr-4">
          {/* title with dot + line + arrow decoration */}
          <div className="relative pl-3">
            <span className="absolute left-0 top-0 h-2 w-2 rounded-full bg-white" />
            <span className="absolute left-[3.5px] top-2 h-[calc(100%-8px)] w-px bg-white/90" />
            <h2 className="font-serif text-[30px] font-bold leading-tight text-white">
              ご依頼<span className="text-[0.62em]">の</span>流れ
            </h2>
          </div>
          <svg
            viewBox="0 0 260 10"
            className="mt-1 h-[10px] w-full"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.4"
            aria-hidden="true"
          >
            <path d="M0 5h252" />
            <path d="m244 1 8 4-8 4" fill="#ffffff" stroke="none" />
          </svg>

          <div className="mt-3 flex items-end gap-1.5">
            <span
              className="bg-gradient-to-b from-[#c6f7c0] via-[#4fd671] to-[#12a24e] bg-clip-text font-serif text-[86px] font-bold italic leading-[0.85] text-transparent [filter:drop-shadow(1px_1px_0_rgba(255,255,255,0.85))_drop-shadow(-1px_-1px_0_rgba(255,255,255,0.85))]"
            >
              5
            </span>
            <div className="flex min-w-0 flex-col pb-1">
              <span className="bg-[#18805f] px-2 py-1 text-center font-serif text-[13px] font-bold tracking-[0.08em] text-white">
                作業完了までの
              </span>
              <span className="mt-1 font-serif text-[38px] font-bold italic leading-none text-white [text-shadow:2px_3px_2px_rgba(6,72,48,0.5)]">
                ステップ
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* orange emergency band */}
      <p className="bg-gradient-to-r from-[#f5952f] via-[#ffe973] to-[#ee7d20] py-2.5 text-center font-serif text-[18px] font-bold leading-none tracking-tight text-[#c6180f]">
        即日対応可能！緊急時もご相談ください
      </p>

      {/* step cards */}
      <div className="bg-gradient-to-b from-white to-[#f2f8f1] px-4 pb-10 pt-8">
        {STEPS.map((step, index) => (
          <div key={step.title}>
            {index > 0 && (
              <div className="my-2 flex w-[74px] justify-center">
                <ChevronDown />
              </div>
            )}
            <div className="flex items-center">
              <div className="z-10 flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-full bg-[#14bd87]">
                {step.icon}
              </div>
              <span className="h-[3px] w-3 shrink-0 bg-[#14bd87]" />
              <div className="min-h-[74px] flex-1 border-2 border-[#3fbf92] bg-white px-4 py-3">
                <h3 className="text-[15px] font-bold leading-snug text-ink">
                  {step.title}
                </h3>
                <p className="mt-1 text-[13px] leading-snug text-neutral-600">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
