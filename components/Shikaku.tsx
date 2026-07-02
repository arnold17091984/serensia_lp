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
    <section className="relative w-full overflow-hidden bg-[#3a2415] px-4 pb-10 pt-8">
      {/* sparkle decoration (top-left) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1 top-24 h-16 w-16 opacity-80"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M32 0 L36 28 L64 32 L36 36 L32 64 L28 36 L0 32 L28 28 Z"
          fill="#fff8e7"
        />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-14 top-40 h-6 w-6 opacity-60"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M32 0 L36 28 L64 32 L36 36 L32 64 L28 36 L0 32 L28 28 Z"
          fill="#f4ead3"
        />
      </svg>

      {/* gold gradient title band */}
      <h2 className="bg-gradient-to-r from-[#6d4c20] via-gold-600 to-gold-400 py-3 text-center font-serif text-[30px] font-bold tracking-[0.1em] text-white">
        保有許可・資格
      </h2>

      {/* gold italic catch copy */}
      <p className="mt-5 text-center font-serif text-[22px] font-bold italic tracking-wide">
        <span className="bg-gradient-to-r from-gold-500 via-gold-100 to-gold-500 bg-clip-text text-transparent">
          技術を磨き、住まいを磨く。
        </span>
      </p>

      {/* lead text */}
      <p className="mt-4 text-[15px] leading-[1.9] text-white">
        セレンシアでは、安心してお任せいただけるよう、多くの資格を持ったプロフェッショナルが特殊清掃や遺品整理に対応します。
      </p>

      {/* white card: qualification list + photo */}
      <div className="mt-6 bg-white px-5 pb-5 pt-6">
        <ul className="space-y-1.5 text-[15px] leading-relaxed text-ink">
          {QUALIFICATIONS.map((item) => (
            <li key={item} className="flex">
              <span className="shrink-0">・</span>
              <span>{item}</span>
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
          className="mt-4 h-auto w-full"
        />
      </div>
    </section>
  );
}
