/**
 * Section: 大家様・管理会社様向け — Clinical Trust redesign.
 * Mist background, mono overline, chip badge, heading, body copy,
 * 3 horizontal stat cards, and a hairline-framed work photo.
 */

const STAT_CARDS = [
  { label: "解体から原状回復まで", value: "一貫対応" },
  { label: "近隣住民への配慮を", value: "徹底" },
  { label: "緊急時も", value: "迅速対応" },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0 text-teal-600"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12.5l4.5 4.5L19 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Ooya() {
  return (
    <section className="w-full bg-mist px-5 py-14">
      <div className="reveal">
        <p className="font-mono text-[11px] tracking-[0.22em] text-teal-600">
          04 — FOR OWNERS
        </p>

        {/* Chip badge */}
        <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white px-3 py-1.5 text-[12px] font-bold text-teal-800">
          <CheckIcon />
          次の入居者のために物件を回復
        </p>

        <h2 className="mt-3 text-[26px] font-bold leading-[1.45] tracking-tight text-ink">
          大家様・管理会社様の
          <br />
          SOSも緊急対応
        </h2>

        {/* Body copy */}
        <p className="mt-5 text-[15px] font-medium leading-[2] text-ink">
          管理をする物件で事故やトラブルが発生した際は緊急を要することで、ご相談をいただくことが多くあります。一刻も早く、次の入居者が安心して住める状態に戻すため、セレンシアが迅速に駆けつけます。汚染除去・消臭・消毒から、必要に応じた建材撤去や原状回復の段取りまで一括で進められます。
        </p>
      </div>

      {/* Stat cards (formerly gold circle badges) */}
      <ul className="reveal mt-7 grid grid-cols-3 gap-2">
        {STAT_CARDS.map((card) => (
          <li
            key={card.value}
            className="flex flex-col justify-between rounded-xl border border-hairline bg-white px-2.5 py-3.5 text-center shadow-[0_1px_2px_rgba(19,34,38,0.06)]"
          >
            <p className="text-[10.5px] font-medium leading-[1.6] text-muted">
              {card.label}
            </p>
            <p className="mt-1.5 text-[16px] font-bold leading-tight tracking-tight text-teal-800">
              {card.value}
            </p>
          </li>
        ))}
      </ul>

      {/* Work photo in hairline frame */}
      <figure className="reveal mt-6 overflow-hidden rounded-xl border border-hairline bg-white p-1.5 shadow-[0_1px_2px_rgba(19,34,38,0.06)]">
        <img
          src="/img/ooya_photo.jpg"
          alt="物件のドアを丁寧に清掃するセレンシアのスタッフ"
          width={1000}
          height={410}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full rounded-lg"
        />
      </figure>
    </section>
  );
}
