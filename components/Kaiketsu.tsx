/**
 * Kaiketsu — bridge section right after Onayami ("solution" pitch +
 * strengths + six-step process + restoration goal).
 * Rebuilt in the FV design language: ivory ground, gold flourish heading,
 * white cards with gold hairline dividers, forest/gold two-tone accents.
 * Swipe-navigation wording from the original design is intentionally removed
 * because this rebuild is a single vertical column.
 */

/** Round-dot underline (FV mockup style) as an inline background. */
const DOT_RULE = {
  backgroundImage:
    "radial-gradient(circle, rgba(29,81,56,0.52) 1.7px, transparent 1.9px)",
  backgroundSize: "9px 4px",
  backgroundRepeat: "repeat-x",
  backgroundPosition: "0 100%",
} as const;

const CASE_CHECKS = [
  "体液が染みた床材の撤去",
  "血痕の除去",
  "夏場の強い腐敗臭",
  "長年蓄積したタバコ臭",
] as const;

const PROCESS_STEPS = [
  {
    pre: "汚染箇所の",
    em: "解体・仕上げ",
    post: "",
    desc: "原因除去からリフォームまで一貫対応。",
  },
  {
    pre: "",
    em: "防臭・特殊",
    post: "コーティング",
    desc: "臭いの再発を長期的に防止。",
  },
  {
    pre: "",
    em: "感染リスク対応",
    post: "消毒",
    desc: "最適な薬剤で二次感染リスクを防止。",
  },
  {
    pre: "",
    em: "特許取得",
    post: "水系消臭",
    desc: "環境にも人体にも優しい強力消臭を実現。",
  },
  {
    pre: "",
    em: "特殊",
    post: "ルームクリーニング",
    desc: "素材を傷めず臭気・汚れを除去。",
  },
  {
    pre: "",
    em: "専用薬剤",
    post: "",
    desc: "植物由来成分で即効性と安全性を両立。",
  },
] as const;

/* ---------- ornaments & icons (inline SVG, FV style) ---------- */

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

/** Gold + forest double chevron: quiet visual bridge from the concerns list. */
function DoubleChevronDown() {
  return (
    <svg
      viewBox="0 0 34 26"
      className="mx-auto h-[clamp(18px,5vw,24px)] w-[clamp(24px,6.5vw,31px)]"
      aria-hidden="true"
    >
      <path
        d="m5 3.5 12 8.5 12-8.5"
        fill="none"
        stroke="#c09a4a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m5 13.5 12 8.5 12-8.5"
        fill="none"
        stroke="#1d5138"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckCircle() {
  return (
    <svg viewBox="0 0 24 24" className="mt-[2px] h-5 w-5 shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#1d5138" />
      <path
        d="m7.4 12.2 3 3 6-6.4"
        fill="none"
        stroke="#fff"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Gold-rimmed white circle with a serif numeral (①-⑥ mood). */
function StepNumber({ n }: Readonly<{ n: number }>) {
  return (
    <span
      aria-hidden="true"
      className="flex h-[clamp(32px,8.5vw,38px)] w-[clamp(32px,8.5vw,38px)] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#c09a4a] bg-white font-display text-[clamp(15px,4vw,18px)] font-bold leading-none text-[#a67c2e]"
    >
      {n}
    </span>
  );
}

export default function Kaiketsu() {
  return (
    <section id="kaiketsu" className="w-full bg-ivory px-3.5 pb-10 pt-8">
      <DoubleChevronDown />

      {/* ===== lead heading: そのお悩みは → 対応力&技術力で解決 ===== */}
      <h2 className="mt-4 text-center">
        <span className="flex items-center justify-center gap-2 px-1">
          <GoldFlourish />
          <span className="whitespace-nowrap font-display text-[clamp(16px,4.4vw,21px)] font-bold tracking-[0.04em] text-forest-950">
            そのお悩みはセレンシアが
          </span>
          <GoldFlourish flip />
        </span>
        <span className="mt-[14px] block font-display font-extrabold leading-none">
          <span className="text-[clamp(33px,9vw,42px)] tracking-[0.02em] text-forest-700">
            対応力
          </span>
          <span className="mx-[3px] align-middle text-[clamp(22px,6vw,28px)] font-bold text-[#c09a4a]">
            &amp;
          </span>
          <span className="text-[clamp(33px,9vw,42px)] tracking-[0.02em] text-forest-700">
            技術力
          </span>
        </span>
        <span className="mt-3 block font-display font-bold text-forest-950">
          <span className="align-baseline text-[clamp(16px,4.4vw,21px)]">で</span>
          <span
            className="ml-1 inline-block pb-[8px] text-[clamp(25px,6.8vw,31px)] leading-[1.3] tracking-[0.04em]"
            style={DOT_RULE}
          >
            解決！
          </span>
        </span>
      </h2>

      <img
        src="/img/kaiketsu_photo.jpg"
        alt="防護服を着たスタッフによる特殊清掃の作業風景"
        width={948}
        height={188}
        loading="lazy"
        decoding="async"
        className="mt-5 h-auto w-full rounded-xl border border-[#e5decf] object-cover"
      />

      {/* ===== bridge line into the strengths cards ===== */}
      <div className="mt-7 text-center">
        <p className="text-[clamp(12px,3.2vw,14px)] font-bold tracking-[0.05em] text-forest-700">
          セレンシアだからできる
        </p>
        <p className="mt-2 font-display text-[clamp(16.5px,4.6vw,22px)] font-bold tracking-[0.04em] text-forest-950">
          <span className="inline-block pb-[8px]" style={DOT_RULE}>
            特殊清掃の強みをチェック！
          </span>
        </p>
      </div>

      {/* ===== strength card: case coverage ===== */}
      <div className="mt-5 rounded-xl bg-white px-4 pb-5 pt-4 shadow-[0_2px_10px_rgba(60,50,30,0.06)]">
        <img
          src="/img/kaiketsu_s2.jpg"
          alt="特殊清掃の現場写真（浴室・玄関・床の汚染箇所）"
          width={1000}
          height={175}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-xl border border-[#e5decf] object-cover"
        />
        <div className="pt-4 text-center">
          <p className="text-[clamp(11px,2.9vw,13px)] font-bold tracking-[0.06em] text-[#4b5450]">
            豊富な現場と対応実績あり
          </p>
          <h3 className="mt-1.5 font-display text-[clamp(17.5px,4.8vw,23px)] font-bold leading-[1.6] text-forest-950">
            <span className="text-forest-700">孤独死・事故死現場</span>など
            <br />
            どんなケースにも対応
          </h3>
        </div>
        <ul className="mt-3">
          {CASE_CHECKS.map((item, i) => (
            <li
              key={item}
              className={`flex items-start gap-2.5 py-[11px] ${
                i > 0 ? "border-t border-[#d9c8a3]" : ""
              }`}
            >
              <CheckCircle />
              <span className="text-[clamp(12.5px,3.4vw,15px)] font-bold leading-[1.8] text-ink">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* ===== strength card: six-step process ===== */}
      <div className="mt-5 rounded-xl bg-white px-4 pb-4 pt-5 shadow-[0_2px_10px_rgba(60,50,30,0.06)]">
        <h3 className="border-b border-[#d9c8a3] pb-3.5 text-center font-display font-bold text-forest-950">
          <span className="text-[clamp(17px,4.6vw,22px)] tracking-[0.05em]">特殊清掃</span>
          <span className="text-[clamp(13px,3.5vw,16px)]">の基本</span>
          <span className="mx-[3px] align-[-2px] text-[clamp(26px,7vw,34px)] font-black leading-none text-[#c09a4a]">
            6
          </span>
          <span className="text-[clamp(16px,4.4vw,20px)]">工程</span>
        </h3>
        <ol>
          {PROCESS_STEPS.map((step, i) => (
            <li
              key={step.em + step.post}
              className={`flex items-center gap-3 py-[13px] ${
                i > 0 ? "border-t border-[#d9c8a3]" : ""
              }`}
            >
              <StepNumber n={i + 1} />
              <div className="min-w-0">
                <p className="font-display text-[clamp(14px,3.8vw,17.5px)] font-bold leading-[1.5] text-forest-950">
                  {step.pre}
                  <span className="text-forest-700">{step.em}</span>
                  {step.post}
                </p>
                <p className="mt-[3px] text-[clamp(10.5px,2.8vw,13px)] font-medium leading-[1.7] text-[#4b5450]">
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="border-t border-[#d9c8a3] pt-3 text-[clamp(9px,2.4vw,10.5px)] leading-[1.7] text-[#4b5450]">
          ※現場の状況により一部工程を実施しない場合がございます。
        </p>
      </div>

      {/* ===== strength card: restoration goal ===== */}
      <div className="mt-5 rounded-xl bg-white px-4 pb-4 pt-6 shadow-[0_2px_10px_rgba(60,50,30,0.06)]">
        <p className="text-center text-[clamp(11px,2.9vw,13px)] font-bold tracking-[0.05em] text-[#4b5450]">
          悲惨な状況の影も見えなくなるような
        </p>
        <h3 className="mt-2.5 text-center font-display font-bold text-forest-950">
          <span className="block text-[clamp(16px,4.4vw,21px)] leading-[1.7]">
            誰が見ても<span className="text-[clamp(19px,5.2vw,25px)]">納得</span>の
          </span>
          <span
            className="mt-[5px] inline-block pb-[9px] text-[clamp(26px,7.2vw,34px)] leading-[1.35] tracking-[0.03em]"
            style={DOT_RULE}
          >
            原状回復<span className="text-[clamp(16px,4.4vw,21px)]">がゴールです</span>
          </span>
        </h3>
        <p className="mt-4 text-[clamp(12px,3.2vw,13.5px)] leading-[1.95] text-ink">
          清掃だけでなく、汚染箇所の建材撤去も行い、再利用できる素材を適切に処理します。作業後には、建材の補修や清掃を行い、元の状態に戻します。さらに、防臭・特殊コーティングで臭いの再発を長期的に防止します。原状回復まで一括で作業をすることで、皆様に安心いただける、徹底した特殊清掃ができることがセレンシアの強みです。
        </p>
        <div className="mt-4 flex items-stretch gap-3">
          <img
            src="/img/kaiketsu_s4.jpg"
            alt="専用コーティング剤を噴霧するスタッフ"
            width={370}
            height={500}
            loading="lazy"
            decoding="async"
            className="w-[38%] rounded-xl border border-[#e5decf] object-cover"
          />
          <div className="flex flex-1 flex-col items-center justify-center rounded-xl bg-forest-900 px-3 py-6 text-center text-white shadow-[0_2px_10px_rgba(17,49,38,0.22)]">
            <p className="font-display text-[clamp(14px,3.8vw,18px)] font-bold leading-none">
              さらに<span className="ml-1 align-[-2px] text-[clamp(21px,5.8vw,27px)] font-black">+α</span>
            </p>
            <p className="mt-3.5 font-display text-[clamp(11.5px,3.2vw,15px)] font-bold leading-[1.9]">
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
