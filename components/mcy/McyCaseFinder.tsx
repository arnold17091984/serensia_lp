import { CASES } from "./pricing-data";
import { LuxHeading } from "./McyLux";
import { LineCta } from "./CtaButton";

/**
 * "Does this apply to me?" (lp-ops strategy step 1). Visitors pick the
 * situation or role closest to theirs and jump to the matching priced case or
 * role guidance. Prices come straight from pricing-data CASES so they can never
 * drift from the case reports. Each pick fires engagement_click with its
 * data-gtm id, which tells us which situations visitors actually have.
 */

// Labels are phrase segments; a line may only break between segments (320px safe).
const SITUATIONS: readonly { caseIndex: number; label: readonly string[] }[] = [
  { caseIndex: 0, label: ["トイレで亡くなっていた"] },
  { caseIndex: 1, label: ["浴室で亡くなっていた"] },
  { caseIndex: 2, label: ["玄関・廊下に", "血液の汚れがある"] },
  { caseIndex: 3, label: ["畳・床の上で、", "臭いが強い"] },
  { caseIndex: 4, label: ["臭いに加えて、", "家財の片付けも必要"] },
  { caseIndex: 5, label: ["消毒と一緒に、", "遺品整理も頼みたい"] },
];

const ROLES: readonly { id: string; label: readonly string[]; sub: readonly string[] }[] = [
  { id: "family", label: ["ご遺族・", "遠方にお住まいの方"], sub: ["立ち会い不要・", "鍵のお預かりに対応"] },
  { id: "owner", label: ["大家様・管理会社様・", "不動産業者様"], sub: ["臭い・汚染の処理から", "原状回復まで"] },
];

function Phrases({ parts }: Readonly<{ parts: readonly string[] }>) {
  return (
    <>
      {parts.map((p) => (
        <span key={p} className="inline-block">{p}</span>
      ))}
    </>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-lux-green" fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

const rowClass =
  "flex items-center gap-3 rounded-[14px] border border-lux-border bg-white px-4 py-[14px] shadow-[0_6px_16px_rgba(7,49,95,0.08)] transition-colors hover:bg-lux-green-soft/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lux-green";

export default function McyCaseFinder() {
  return (
    <section
      id="case-finder"
      data-section="case_finder"
      aria-label="あなたのご状況に近いものはどれですか"
      className="relative w-full scroll-mt-[80px] bg-gradient-to-b from-white to-lux-cream px-4 py-[clamp(28px,8vw,44px)]"
    >
      <LuxHeading kicker="ご状況の確認">
        あなたのご状況に
        <br />
        近いものはどれですか？
      </LuxHeading>
      <p className="mx-auto mt-3 max-w-[460px] text-center text-[clamp(15px,4.1vw,17px)] font-medium leading-[1.8] text-lux-green-ink/90 [text-wrap:pretty]">
        近いものを選ぶと、似た現場の
        <br />
        作業内容と参考価格をご覧いただけます。
      </p>

      <h3 className="mx-auto mt-6 max-w-[460px] text-[clamp(15px,4.1vw,17px)] font-black text-lux-green-ink">現場の状況</h3>
      <ul className="mx-auto mt-3 flex max-w-[460px] flex-col gap-[10px]">
        {SITUATIONS.map((s) => (
          <li key={s.caseIndex}>
            <a href={`#case-${s.caseIndex + 1}`} data-gtm={`case_finder_case_${s.caseIndex + 1}`} className={rowClass}>
              <span className="min-w-0 flex-1">
                <span className="block text-[clamp(15px,4.1vw,17px)] font-bold leading-[1.5] text-lux-green-ink">
                  <Phrases parts={s.label} />
                </span>
                <span className="mt-[2px] block text-[clamp(14px,3.8vw,15.5px)] font-medium text-lux-green-ink/90">
                  似た事例の参考価格{" "}
                  <span className="font-black text-lux-crimson">{CASES[s.caseIndex].price}円</span>
                </span>
              </span>
              <Chevron />
            </a>
          </li>
        ))}
      </ul>

      <h3 className="mx-auto mt-6 max-w-[460px] text-[clamp(15px,4.1vw,17px)] font-black text-lux-green-ink">ご相談される方</h3>
      <ul className="mx-auto mt-3 flex max-w-[460px] flex-col gap-[10px]">
        {ROLES.map((r) => (
          <li key={r.id}>
            <a href="#business-support" data-gtm={`case_finder_role_${r.id}`} className={rowClass}>
              <span className="min-w-0 flex-1">
                <span className="block text-[clamp(15px,4.1vw,17px)] font-bold leading-[1.5] text-lux-green-ink">
                  <Phrases parts={r.label} />
                </span>
                <span className="mt-[2px] block text-[clamp(14px,3.8vw,15.5px)] font-medium text-lux-green-ink/90">
                  <Phrases parts={r.sub} />
                </span>
              </span>
              <Chevron />
            </a>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-6 max-w-[460px]">
        <p className="text-center text-[clamp(15px,4.1vw,17px)] font-bold text-lux-green-ink">どれにも当てはまらない・分からない方へ</p>
        <div className="mt-3">
          <LineCta size="md" gtm="cta_line_case_finder" main="LINEで状況を相談する" sub="写真なしでもOK｜24時間受付"
            ariaLabel="LINEで状況を相談する（写真なしでもOK・24時間受付）" />
        </div>
      </div>
    </section>
  );
}
