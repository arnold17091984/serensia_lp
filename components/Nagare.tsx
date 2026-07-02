import type { ReactNode } from "react";

interface Step {
  title: string;
  description: string;
  icon: ReactNode;
}

const ICON_PROPS = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const STEPS: Step[] = [
  {
    title: "お問い合わせ",
    description: "お電話・LINE・メールでご連絡ください。",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" {...ICON_PROPS} aria-hidden="true">
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
      <svg viewBox="0 0 24 24" className="h-5 w-5" {...ICON_PROPS} aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="5.8" />
        <path d="m14.8 14.8 5.2 5.2" />
      </svg>
    ),
  },
  {
    title: "ご契約",
    description: "内容にご納得いただいた後、契約へ。",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" {...ICON_PROPS} aria-hidden="true">
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
      <svg viewBox="0 0 24 24" className="h-5 w-5" {...ICON_PROPS} aria-hidden="true">
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
      <svg viewBox="0 0 24 24" className="h-5 w-5" {...ICON_PROPS} aria-hidden="true">
        {/* house + check */}
        <path d="m3.5 11 8.5-6.5L20.5 11" />
        <path d="M6 10.5V19h12v-8.5" />
        <path d="m9.3 14.3 2.2 2.2 3.6-3.8" />
      </svg>
    ),
  },
];

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export default function Nagare() {
  return (
    <section id="nagare" className="w-full bg-mist">
      <div className="px-5 py-14">
        <p className="font-mono text-[11px] tracking-[0.22em] text-teal-600">
          10 — FLOW
        </p>
        <h2 className="mt-2 text-[24px] font-bold tracking-tight text-ink">
          ご依頼の流れ
          <span className="mt-1.5 block text-[15px] font-bold tracking-normal text-muted">
            {"作業完了までの"}
            <span className="mx-0.5 inline-block align-[-0.08em] font-mono text-[20px] font-semibold text-teal-600">{"5"}</span>
            {"ステップ"}
          </span>
        </h2>

        {/* photo — hairline frame, clinical presentation */}
        <div className="reveal mt-7 rounded-xl border border-hairline bg-white p-1.5 shadow-[0_1px_2px_rgba(19,34,38,0.06)]">
          <img
            src="/img/nagare_photo.jpg"
            alt="電話で相談を受ける男性スタッフ"
            width={355}
            height={432}
            loading="lazy"
            decoding="async"
            className="h-48 w-full rounded-lg object-cover object-top"
          />
        </div>

        {/* same-day availability — quiet signal band */}
        <p className="reveal mt-5 flex items-center justify-center gap-2 rounded-lg border border-signal/30 bg-signal/10 px-4 py-2.5 text-[13px] font-bold text-signal-deep">
          <ClockIcon />
          即日対応可能！緊急時もご相談ください
        </p>

        {/* vertical timeline */}
        <ol className="mt-8">
          {STEPS.map((step, index) => {
            const isLast = index === STEPS.length - 1;
            return (
              <li key={step.title} className="flex gap-4">
                {/* left rail: mono step number + hairline */}
                <div className="flex w-8 shrink-0 flex-col items-center">
                  <span className="pt-1 font-mono text-[13px] font-semibold tracking-[0.08em] text-teal-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {!isLast && (
                    <span
                      className="mt-2 w-px flex-1 bg-hairline"
                      aria-hidden="true"
                    />
                  )}
                </div>
                {/* right: step card */}
                <div className={`min-w-0 flex-1${isLast ? "" : " pb-4"}`}>
                  <div className="reveal rounded-xl border border-hairline bg-white p-4 shadow-[0_1px_2px_rgba(19,34,38,0.06)]">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-teal-100 bg-teal-50 text-teal-600">
                        {step.icon}
                      </span>
                      <h3 className="text-[15px] font-bold leading-snug tracking-tight text-ink">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
