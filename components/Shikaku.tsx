/**
 * 保有許可・資格 — FVデザイン言語での刷新版。
 * White ground, gold-flourish heading, serif lead copy, and a white card
 * listing six qualifications with gold numbered circles and gold hairline
 * dividers. Staff photo sits inside the card (rounded, ivory border).
 */

const QUALIFICATIONS = [
  "東京都公安委員会 古物商番号 第303312321474号",
  "遺品整理協会認定遺品整理士 地区統括会員",
  "特定遺品整理士",
  "事件現場特殊清掃士",
  "丸のこ等取扱作業従事者安全衛生教育",
  "不用品回収健全化指導員",
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

function GoldNumber({ n }: Readonly<{ n: number }>) {
  return (
    <span className="flex h-[clamp(22px,5.8vw,26px)] w-[clamp(22px,5.8vw,26px)] shrink-0 items-center justify-center rounded-full border-[1.4px] border-[#c09a4a] font-display text-[clamp(11px,2.9vw,13px)] font-bold leading-none text-[#a67c2e]">
      {n}
    </span>
  );
}

export default function Shikaku() {
  return (
    <section className="w-full bg-white px-4 pb-10 pt-9">
      {/* heading with gold flourishes */}
      <h2 className="flex items-center justify-center gap-2 px-2">
        <GoldFlourish />
        <span className="whitespace-nowrap font-display text-[clamp(16px,4.4vw,21px)] font-bold tracking-[0.06em] text-forest-950">
          保有許可・資格
        </span>
        <GoldFlourish flip />
      </h2>

      {/* serif lead copy */}
      <p className="mt-5 text-center font-display text-[clamp(15px,4vw,19px)] font-bold tracking-[0.12em] text-forest-700">
        技術を磨き、住まいを磨く。
      </p>

      {/* body */}
      <p className="mt-3.5 px-1 text-[clamp(12px,3.2vw,13.5px)] leading-[1.9] text-ink [word-break:auto-phrase]">
        セレンシアでは、安心してお任せいただけるよう、多くの資格を持ったプロフェッショナルが特殊清掃や遺品整理に対応します。
      </p>

      {/* white card: numbered qualification list + staff photo */}
      <div className="mt-6 rounded-xl bg-white px-4 pb-4 pt-1.5 shadow-[0_2px_10px_rgba(60,50,30,0.06)]">
        <ul>
          {QUALIFICATIONS.map((item, i) => (
            <li
              key={item}
              className={`flex items-center gap-2.5 py-[11px] ${
                i > 0 ? "border-t border-[#d9c8a3]" : ""
              }`}
            >
              <GoldNumber n={i + 1} />
              <p className="text-[clamp(11px,3vw,13.5px)] font-bold leading-[1.7] text-ink [word-break:auto-phrase]">
                {item}
              </p>
            </li>
          ))}
        </ul>
        <img
          src="/img/shikaku_photo.jpg"
          alt="遺品整理を行うセレンシアのスタッフ"
          width={794}
          height={312}
          loading="lazy"
          decoding="async"
          className="mt-3 h-auto w-full rounded-xl border border-[#e5decf]"
        />
      </div>
    </section>
  );
}
