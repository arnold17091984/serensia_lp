/**
 * "How LINE consultation works" strip shown under LINE CTAs.
 * Closes the biggest post-tap gap found in the CVR audit: the button opens
 * LINE's friend-add page, then the visitor faces an empty chat with no idea
 * what to send. Spell out the 3 steps and give a copy-ready first message so
 * a tap (= the ad conversion) actually becomes an inquiry. Copy stays within
 * what the LP already promises (no reply-time SLA is invented).
 *
 * `collapsible` renders a one-line <details> trigger instead of the full card —
 * used in the FV so the button→social-proof flow stays tight (no JS needed;
 * the summary click is tracked as engagement via data-gtm).
 */

const STEPS = [
  { n: "1", label: "友だち追加", note: "約10秒" },
  { n: "2", label: "ひとこと送信", note: "写真1〜2枚あれば概算が正確・なくてもOK" },
  { n: "3", label: "概算見積りをご返信", note: "内容を確認しだい順次" },
] as const;

interface LineStepsProps {
  dark?: boolean;
  collapsible?: boolean;
}

function StepsBody({ dark }: Readonly<{ dark: boolean }>) {
  const ink = dark ? "text-white" : "text-lux-green-ink";
  const sub = dark ? "text-white/85" : "text-lux-green-ink/75";
  return (
    <>
      <ol className="mt-[clamp(6px,1.8vw,9px)] space-y-[clamp(4px,1.2vw,6px)]">
        {STEPS.map((s) => (
          <li key={s.n} className={`flex items-start gap-[7px] text-[clamp(11px,3vw,12.5px)] leading-[1.6] ${ink}`}>
            <span
              aria-hidden="true"
              className="mt-[1px] grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full bg-[#06a32a] text-[10.5px] font-black text-white"
            >
              {s.n}
            </span>
            <span className="min-w-0 font-bold [word-break:auto-phrase]">
              {s.label}
              <span className={`ml-1 font-medium ${sub}`}>（{s.note}）</span>
            </span>
          </li>
        ))}
      </ol>
      <p
        className={`mt-[clamp(6px,1.8vw,9px)] rounded-[8px] ${
          dark ? "bg-black/20" : "bg-lux-green-soft/60"
        } px-[10px] py-[7px] text-[clamp(11px,3vw,12px)] leading-[1.7] ${sub} [word-break:auto-phrase]`}
      >
        文例：<span className={`font-bold ${ink}`}>「見積り希望です。1DKの実家の遺品整理です」</span>
        —— この一言だけで大丈夫です。
      </p>
    </>
  );
}

export default function LineSteps({ dark = false, collapsible = false }: Readonly<LineStepsProps>) {
  if (collapsible) {
    return (
      <details className="group rounded-[12px] border border-lux-gold/40 bg-white shadow-[0_2px_8px_rgba(18,61,40,0.08)]">
        <summary
          data-gtm="line_steps_open"
          className="flex cursor-pointer list-none items-center justify-center gap-[6px] px-[clamp(10px,3vw,14px)] py-[clamp(9px,2.5vw,11px)] text-[clamp(11.5px,3.2vw,13px)] font-black text-lux-green-ink [&::-webkit-details-marker]:hidden"
        >
          <span aria-hidden="true" className="grid h-[16px] w-[16px] place-items-center rounded-[4px] bg-[#06C755] text-[7px] font-black text-white">
            LINE
          </span>
          LINEで何を送ればいい？（かんたん3ステップ）
          <span aria-hidden="true" className="text-lux-green-ink/50 transition-transform group-open:rotate-180">
            ▼
          </span>
        </summary>
        <div className="px-[clamp(10px,3vw,14px)] pb-[clamp(9px,2.6vw,12px)] text-left">
          <StepsBody dark={false} />
        </div>
      </details>
    );
  }

  const ink = dark ? "text-white" : "text-lux-green-ink";
  return (
    <div
      className={`rounded-[12px] border ${
        dark ? "border-white/25 bg-white/10" : "border-lux-gold/40 bg-white"
      } px-[clamp(10px,3vw,14px)] py-[clamp(9px,2.6vw,12px)] text-left ${
        dark ? "" : "shadow-[0_2px_8px_rgba(18,61,40,0.08)]"
      }`}
    >
      <p className={`text-center text-[clamp(11px,3vw,12.5px)] font-black ${ink}`}>
        LINE相談は かんたん3ステップ
      </p>
      <StepsBody dark={dark} />
    </div>
  );
}
