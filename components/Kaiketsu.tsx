/**
 * Kaiketsu section: "solution" hero (04_1) + strengths detail cards (04_2-04_4).
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

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M3 13.5 9 20 21 4"
        fill="none"
        stroke="#b81c22"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Kaiketsu() {
  return (
    <section id="kaiketsu" className="w-full">
      {/* ===== 04_1: aqua bubble hero ===== */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#d9f4f2] via-[#9fdfd8] to-[#3aa896] px-5 pb-8 pt-5 text-center">
        {/* bubble decorations */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-6 top-40 h-24 w-24 rounded-full border-2 border-white/60 bg-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-6 h-14 w-14 rounded-full border-2 border-white/50 bg-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 bottom-40 h-28 w-28 rounded-full border-2 border-white/40 bg-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-8 bottom-24 h-10 w-10 rounded-full border-2 border-white/50 bg-white/10"
        />

        {/* double down chevron */}
        <svg
          viewBox="0 0 48 44"
          className="mx-auto h-10 w-11"
          aria-hidden="true"
        >
          <path
            d="M4 2l20 14L44 2v10L24 26 4 12zM4 20l20 14 20-14v10L24 44 4 30z"
            fill="#0f9b8e"
          />
        </svg>

        <h2 className="relative mt-3 font-serif font-bold">
          <span className="block text-[22px] leading-snug text-white [text-shadow:0_1px_6px_rgba(10,90,80,.45)]">
            そのお悩みはセレンシアが
          </span>
          <span className="mt-1 block [filter:drop-shadow(0_2px_1px_rgba(255,255,255,.85))]">
            <span className="bg-gradient-to-b from-[#43c9a4] to-[#0d7a56] bg-clip-text text-[40px] leading-none tracking-tight text-transparent">
              対応力
            </span>
            <span className="bg-gradient-to-b from-[#bfe6e2] to-[#8fc6c0] bg-clip-text align-middle text-[30px] text-transparent">
              &amp;
            </span>
            <span className="bg-gradient-to-b from-[#43c9a4] to-[#0d7a56] bg-clip-text text-[40px] leading-none tracking-tight text-transparent">
              技術力
            </span>
          </span>
          <span className="mt-2 block">
            <span className="text-[22px] text-white [text-shadow:0_1px_6px_rgba(10,90,80,.45)]">
              で
            </span>
            <span className="ml-2 bg-gradient-to-b from-[#ffd24d] via-cta to-accent bg-clip-text text-[36px] leading-none text-transparent [filter:drop-shadow(0_1px_0_rgba(255,255,255,.9))]">
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
          className="mt-5 h-auto w-full rounded-xl border-2 border-gold-400 object-cover shadow-lg"
        />

        <div className="mt-5 rounded-xl border border-gold-400 bg-gradient-to-b from-brand-700 to-brand-500 px-4 py-4 shadow-md">
          <p className="font-serif text-[15px] font-bold text-white">
            セレンシアだからできる
          </p>
          <p className="mt-1 font-serif text-[19px] font-bold leading-snug text-white">
            特殊清掃の強みをチェック！
          </p>
        </div>
      </div>

      {/* ===== strengths cards (04_2 / 04_3 / 04_4) ===== */}
      <div className="space-y-6 bg-cream px-4 py-8">
        {/* --- 04_2: case coverage --- */}
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <img
            src="/img/kaiketsu_s2.jpg"
            alt="特殊清掃の現場写真（浴室・玄関・床の汚染箇所）"
            width={1000}
            height={175}
            loading="lazy"
            decoding="async"
            className="h-auto w-full object-cover"
          />
          <div className="px-5 pb-6 pt-4 text-center">
            <p className="text-[14px] font-bold tracking-wide text-ink">
              豊富な現場と対応実績あり
            </p>
            <h3 className="mt-1 font-serif text-[22px] font-bold leading-snug">
              <span className="text-brand-700">孤独死・事故死現場</span>
              <span className="text-ink">など</span>
              <br />
              <span className="text-ink">どんなケースにも対応</span>
            </h3>
            <ul className="mt-4 space-y-2.5 text-left">
              {CASE_CHECKS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="bg-[linear-gradient(transparent_55%,#f9f06b_55%)] px-0.5 text-[15px] font-bold text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- 04_3: six-step process --- */}
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <div className="bg-gradient-to-r from-brand-700 to-brand-500 px-5 py-4">
            <h3 className="font-serif text-[21px] font-bold text-white">
              特殊清掃<span className="text-[16px]">の基本</span>
              <span className="ml-1.5 bg-gradient-to-b from-[#ffe9a8] via-gold-400 to-gold-600 bg-clip-text text-[30px] leading-none text-transparent">
                6
              </span>
              <span className="text-[20px]">工程</span>
            </h3>
          </div>
          <ol className="divide-y divide-dotted divide-gray-300 px-5 py-2">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.em + step.post} className="flex items-center gap-4 py-4">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center bg-gradient-to-b from-[#e9e9e9] via-[#b9b9b9] to-[#8f8f8f] font-serif text-[20px] font-bold text-ink [clip-path:polygon(25%_0,75%_0,100%_50%,75%_100%,25%_100%,0_50%)]"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-serif text-[18px] font-bold leading-snug">
                    {step.pre && <span className="text-ink">{step.pre}</span>}
                    <span className="text-accent">{step.em}</span>
                    {step.post && <span className="text-ink">{step.post}</span>}
                  </p>
                  <p className="mt-0.5 text-[13px] leading-relaxed text-ink">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="px-5 pb-5 text-[11px] leading-relaxed text-gray-600">
            ※現場の状況により一部工程を実施しない場合がございます。
          </p>
        </div>

        {/* --- 04_4: restoration goal --- */}
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <div className="bg-gradient-to-b from-[#eef7fb] to-white px-5 pt-6 text-center">
            <p className="text-[14px] font-bold tracking-wide text-gray-600">
              悲惨な状況の影も見えなくなるような
            </p>
            <h3 className="mt-2 font-serif font-bold leading-snug">
              <span className="block bg-gradient-to-b from-[#5db9e8] to-[#1c5fae] bg-clip-text text-[22px] text-transparent">
                誰が見ても<span className="text-[26px]">納得</span>の
              </span>
              <span className="block bg-gradient-to-b from-[#5db9e8] to-[#1c5fae] bg-clip-text text-[34px] leading-tight text-transparent">
                原状回復<span className="text-[22px]">が</span>
              </span>
              <span className="block bg-gradient-to-b from-[#5db9e8] to-[#1c5fae] bg-clip-text text-[24px] text-transparent">
                ゴール<span className="text-[18px]">です</span>
              </span>
            </h3>
          </div>
          <p className="px-5 pt-4 text-[14px] leading-relaxed text-ink">
            清掃だけでなく、汚染箇所の建材撤去も行い、再利用できる素材を適切に処理します。作業後には、建材の補修や清掃を行い、元の状態に戻します。さらに、防臭・特殊コーティングで臭いの再発を長期的に防止します。原状回復まで一括で作業をすることで、皆様に安心いただける、徹底した特殊清掃ができることがセレンシアの強みです。
          </p>
          <div className="mt-4 flex items-stretch">
            <img
              src="/img/kaiketsu_s4.jpg"
              alt="専用コーティング剤を噴霧するスタッフ"
              width={370}
              height={500}
              loading="lazy"
              decoding="async"
              className="w-2/5 object-cover"
            />
            <div className="flex w-3/5 flex-col items-center justify-center bg-gradient-to-br from-[#2f7fc2] via-[#1c5fae] to-[#0d3f86] px-4 py-6 text-center text-white">
              <p className="font-serif text-[20px] font-bold">
                さらに<span className="ml-1 text-[26px]">+α</span>
              </p>
              <p className="mt-2 font-serif text-[15px] font-bold leading-relaxed">
                専用コーティング剤で
                <br />
                封じ込め&ldquo;密閉&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
