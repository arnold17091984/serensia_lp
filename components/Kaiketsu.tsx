/**
 * Kaiketsu section: "solution" statement + strengths + 6-step process.
 * Clinical-trust redesign: white ground, mono overline, hairline frames,
 * chip grid for case coverage, and a lab-report style process list.
 * Swipe-navigation wording from the original design is intentionally removed
 * because this rebuild is a single vertical column.
 */

const CASE_CHECKS = [
  "体液が染みた床材の撤去",
  "血痕の除去",
  "夏場の強い腐敗臭",
  "長年蓄積したタバコ臭",
] as const;

const PROCESS_STEPS = [
  {
    name: "汚染箇所の解体・仕上げ",
    desc: "原因除去からリフォームまで一貫対応。",
  },
  {
    name: "防臭・特殊コーティング",
    desc: "臭いの再発を長期的に防止。",
  },
  {
    name: "感染リスク対応消毒",
    desc: "最適な薬剤で二次感染リスクを防止。",
  },
  {
    name: "特許取得水系消臭",
    desc: "環境にも人体にも優しい強力消臭を実現。",
  },
  {
    name: "特殊ルームクリーニング",
    desc: "素材を傷めず臭気・汚れを除去。",
  },
  {
    name: "専用薬剤",
    desc: "植物由来成分で即効性と安全性を両立。",
  },
] as const;

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-3.5 w-3.5 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M4 12.5 9.5 18 20 6"
        fill="none"
        stroke="#0f7280"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Small "+" register mark used as a quiet instrument-like detail. */
function CornerMark({ className }: Readonly<{ className: string }>) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute font-mono text-[10px] leading-none text-teal-600/40 ${className}`}
    >
      +
    </span>
  );
}

export default function Kaiketsu() {
  return (
    <section id="kaiketsu" className="w-full bg-white px-5 py-14">
      {/* ===== overline + statement heading ===== */}
      <div className="reveal">
        <p className="font-mono text-[11px] tracking-[0.22em] text-teal-600">
          03 — SOLUTION
        </p>
        <h2 className="mt-3 text-[26px] font-bold leading-snug tracking-tight text-ink">
          そのお悩みはセレンシアが
          <br />
          <span className="text-teal-700">対応力</span>
          <span className="mx-1 font-mono text-[21px] font-medium text-teal-600">
            &amp;
          </span>
          <span className="text-teal-700">技術力</span>で解決！
        </h2>
      </div>

      {/* ===== primary photo in hairline frame ===== */}
      <div className="reveal mt-6 overflow-hidden rounded-xl border border-hairline">
        <img
          src="/img/kaiketsu_photo.jpg"
          alt="防護服を着たスタッフによる特殊清掃の作業風景"
          width={948}
          height={188}
          loading="lazy"
          decoding="async"
          className="h-auto w-full object-cover"
        />
      </div>

      {/* ===== lead ===== */}
      <p className="reveal mt-4 text-[14px] leading-relaxed text-muted">
        セレンシアだからできる、<span className="font-bold text-ink">特殊清掃の強みをチェック！</span>
      </p>

      {/* ===== case coverage: chip grid ===== */}
      <div className="reveal mt-10 overflow-hidden rounded-xl border border-hairline bg-white shadow-[0_1px_2px_rgba(19,34,38,0.06)]">
        <img
          src="/img/kaiketsu_s2.jpg"
          alt="特殊清掃の現場写真（浴室・玄関・床の汚染箇所）"
          width={1000}
          height={175}
          loading="lazy"
          decoding="async"
          className="h-auto w-full border-b border-hairline object-cover"
        />
        <div className="px-5 pb-6 pt-5">
          <p className="font-mono text-[11px] tracking-[0.22em] text-teal-600">
            CASE COVERAGE
          </p>
          <p className="mt-2 text-[13px] font-bold tracking-wide text-muted">
            豊富な現場と対応実績あり
          </p>
          <h3 className="mt-1 text-[22px] font-bold leading-snug tracking-tight text-ink">
            <span className="text-teal-700">孤独死・事故死現場</span>など
            <br />
            どんなケースにも対応
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {CASE_CHECKS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-1.5 rounded-lg border border-hairline bg-mist px-3 py-2"
              >
                <CheckIcon />
                <span className="text-[12px] font-bold leading-snug text-ink">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===== showpiece: 6-step process (clinical report list) ===== */}
      <div className="reveal relative mt-10 rounded-xl border border-hairline bg-white px-5 pb-5 pt-6 shadow-[0_1px_2px_rgba(19,34,38,0.06)]">
        <CornerMark className="left-2 top-2" />
        <CornerMark className="right-2 top-2" />
        <CornerMark className="bottom-2 left-2" />
        <CornerMark className="bottom-2 right-2" />

        <p className="font-mono text-[11px] tracking-[0.22em] text-teal-600">
          PROCESS 01 — 06
        </p>
        <h3 className="mt-2 text-[22px] font-bold leading-snug tracking-tight text-ink">
          特殊清掃の基本<span className="mx-1 font-mono text-[30px] font-medium leading-none text-teal-600">6</span>工程
        </h3>

        <ol className="mt-4 divide-y divide-hairline border-t border-hairline">
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.name} className="flex items-start gap-4 py-4">
              <span className="pt-0.5 font-mono text-[20px] font-medium leading-none text-teal-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-[16px] font-bold leading-snug text-ink">
                  {step.name}
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="border-t border-hairline pt-3 text-[11px] leading-relaxed text-muted">
          ※現場の状況により一部工程を実施しない場合がございます。
        </p>
      </div>

      {/* ===== restoration goal ===== */}
      <div className="reveal mt-10">
        <p className="text-[13px] font-bold tracking-wide text-muted">
          悲惨な状況の影も見えなくなるような
        </p>
        <h3 className="mt-2 text-[24px] font-bold leading-snug tracking-tight text-ink">
          誰が見ても<span className="text-teal-700">納得</span>の
          <br />
          <span className="text-teal-700">原状回復</span>がゴールです
        </h3>
        <p className="mt-4 text-[14px] leading-relaxed text-ink">
          清掃だけでなく、汚染箇所の建材撤去も行い、再利用できる素材を適切に処理します。作業後には、建材の補修や清掃を行い、元の状態に戻します。さらに、防臭・特殊コーティングで臭いの再発を長期的に防止します。原状回復まで一括で作業をすることで、皆様に安心いただける、徹底した特殊清掃ができることがセレンシアの強みです。
        </p>

        <div className="mt-5 flex items-stretch overflow-hidden rounded-xl border border-hairline">
          <img
            src="/img/kaiketsu_s4.jpg"
            alt="専用コーティング剤を噴霧するスタッフ"
            width={370}
            height={500}
            loading="lazy"
            decoding="async"
            className="w-2/5 object-cover"
          />
          <div className="flex w-3/5 flex-col justify-center bg-teal-900 px-5 py-6 text-white">
            <p className="text-[15px] font-bold">
              さらに<span className="ml-1 font-mono text-[24px] font-medium leading-none">+α</span>
            </p>
            <p className="mt-2 text-[15px] font-bold leading-relaxed">
              専用コーティング剤で
              <br />
              封じ込め&ldquo;密閉&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
