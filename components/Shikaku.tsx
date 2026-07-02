const QUALIFICATIONS = [
  "東京都公安委員会 古物商番号 第303312321474号",
  "遺品整理協会認定遺品整理士 地区統括会員",
  "特定遺品整理士",
  "事件現場特殊清掃士",
  "丸のこ等取扱作業従事者安全衛生教育",
  "不用品回収健全化指導員",
];

export default function Shikaku() {
  return (
    <section className="bg-blueprint-dark relative w-full overflow-hidden bg-teal-950 px-5 py-14">
      {/* measurement-style corner marks */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-3 font-mono text-[13px] leading-none text-teal-100/25"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-3 font-mono text-[13px] leading-none text-teal-100/25"
      >
        +
      </span>

      <div className="reveal">
        <p className="font-mono text-[11px] tracking-[0.22em] text-teal-100/70">
          06 — LICENSE
        </p>
        <h2 className="mt-3 text-[26px] font-bold tracking-tight text-white">
          保有許可・資格
        </h2>
        <p className="mt-2 text-[15px] font-medium tracking-wide text-teal-100">
          技術を磨き、住まいを磨く。
        </p>
        <p className="mt-5 text-[14px] leading-[1.9] text-teal-50/90">
          セレンシアでは、安心してお任せいただけるよう、多くの資格を持ったプロフェッショナルが特殊清掃や遺品整理に対応します。
        </p>
      </div>

      {/* qualification list card (definition-list style) */}
      <div className="reveal mt-8 overflow-hidden rounded-xl border border-hairline bg-white shadow-[0_1px_2px_rgba(19,34,38,0.06)]">
        <ul className="divide-y divide-hairline">
          {QUALIFICATIONS.map((item, index) => (
            <li key={item} className="flex items-baseline gap-3 px-5 py-3.5">
              <span className="shrink-0 font-mono text-[12px] tracking-wide text-teal-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[14px] font-bold leading-relaxed text-ink">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* framed staff photo */}
      <figure className="reveal mt-5 rounded-xl border border-hairline bg-white p-2 shadow-[0_1px_2px_rgba(19,34,38,0.06)]">
        <img
          src="/img/shikaku_photo.jpg"
          alt="遺品整理を行うセレンシアのスタッフ"
          width={794}
          height={312}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-lg"
        />
      </figure>
    </section>
  );
}
