// TODO: メールフォームURLが決まったら設定（空の間はメールCTAを非表示）
const MAIL_FORM_URL: string = "";

const CONDITION_TAGS = ["孤独死", "腐敗臭", "体液汚染"];

const CAPABILITY_CHIPS = [
  "建材撤去から原状回復まで一貫対応",
  "重度現場も実績多数",
  "大家様・管理会社様へ賃貸対応",
];

const EVIDENCE_PHOTOS = [
  {
    src: "/img/hero_photo1.jpg",
    alt: "清掃前の汚損したトイレと洗面台",
    width: 300,
    height: 160,
    label: "RECORD 01",
  },
  {
    src: "/img/hero_photo2.jpg",
    alt: "防護服を着用した作業員による特殊清掃の様子",
    width: 420,
    height: 160,
    label: "RECORD 02",
  },
  {
    src: "/img/hero_photo3.jpg",
    alt: "汚染が残る清掃前の床",
    width: 280,
    height: 160,
    label: "RECORD 03",
  },
] as const;

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-px h-3.5 w-3.5 shrink-0"
      fill="none"
      stroke="#0f7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="w-full">
      {/* (a)(b)(c)(d) First view — white + blueprint grid */}
      <div className="bg-blueprint relative overflow-hidden bg-white px-4 pb-8 pt-7">
        {/* measurement corner marks */}
        <span
          aria-hidden="true"
          className="absolute left-2 top-2 font-mono text-xs leading-none text-teal-100"
        >
          +
        </span>
        <span
          aria-hidden="true"
          className="absolute right-2 top-2 font-mono text-xs leading-none text-teal-100"
        >
          +
        </span>

        {/* (a) mono overline */}
        <p className="font-mono text-[11px] tracking-[0.22em] text-teal-600">
          TOKYO / KANAGAWA — 特殊清掃・遺品整理
        </p>

        {/* (b) headline hierarchy */}
        <h1 className="mt-3 text-[46px] font-bold leading-none tracking-tight text-ink">
          特殊清掃
        </h1>
        <p className="mt-3 text-[21px] font-bold leading-snug tracking-tight text-teal-800">
          臭いの原因から徹底除去
        </p>
        <p className="mt-3 flex items-center gap-2 border-l-2 border-teal-600 pl-2.5 text-[15px] font-bold leading-snug text-ink">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
          />
          <span>東京・神奈川本日対応可能！</span>
        </p>
        <p className="mt-1.5 pl-3 text-[13px] leading-snug text-muted">
          個人・法人問わず最短即日で現地確認
        </p>

        {/* (c) representative photo + (d) chips */}
        <div className="mt-6 flex items-start gap-3">
          <figure className="w-[52%] shrink-0">
            <div className="overflow-hidden rounded-xl border border-hairline bg-white p-1.5 shadow-[0_1px_2px_rgba(19,34,38,0.06)]">
              <img
                src="/img/nagare_photo.jpg"
                alt="特殊清掃・遺品整理 セレンシア 代表 太田"
                width={355}
                height={432}
                loading="eager"
                fetchPriority="high"
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
            <figcaption className="mt-1.5 font-mono text-[10px] tracking-[0.1em] text-muted">
              代表 太田 — 現場立ち会い
            </figcaption>
          </figure>

          <div className="flex min-w-0 flex-1 flex-col gap-3">
            {/* condition tags */}
            <div className="flex flex-wrap gap-1.5">
              {CONDITION_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-teal-950 px-2 py-1 text-[11px] font-bold leading-none text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* capability chips */}
            <ul className="flex flex-col gap-1.5">
              {CAPABILITY_CHIPS.map((chip) => (
                <li
                  key={chip}
                  className="flex items-start gap-1.5 rounded-lg border border-hairline bg-white px-2 py-1.5 text-[11px] font-bold leading-snug text-ink shadow-[0_1px_2px_rgba(19,34,38,0.06)]"
                >
                  <CheckIcon />
                  <span>{chip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* (e) evidence thumbnails */}
        <div className="mt-6 grid grid-cols-3 gap-2">
          {EVIDENCE_PHOTOS.map((photo) => (
            <figure key={photo.src}>
              <div className="overflow-hidden rounded-lg border border-hairline bg-white p-1">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  decoding="async"
                  className="h-[72px] w-full rounded-md object-cover"
                />
              </div>
              <figcaption className="mt-1 font-mono text-[9px] tracking-[0.14em] text-muted">
                {photo.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* (f) dark band — free estimate / consideration */}
      <div className="bg-blueprint-dark bg-teal-950 px-4 py-6">
        <p className="text-center text-[17px] font-bold leading-snug tracking-tight text-white">
          相談と見積無料！料金をすぐにご提示します
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
          <p className="flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-1.5 text-[12px] font-bold leading-none text-white">
            <svg
              viewBox="0 0 24 24"
              className="h-3 w-3 shrink-0"
              fill="none"
              stroke="#dcecef"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m5 12.5 4.5 4.5L19 7.5" />
            </svg>
            近隣への配慮徹底・秘密厳守
          </p>
          <p className="flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-1.5 text-[12px] font-bold leading-none text-white">
            <svg
              viewBox="0 0 24 24"
              className="h-3 w-3 shrink-0"
              fill="none"
              stroke="#dcecef"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m5 12.5 4.5 4.5L19 7.5" />
            </svg>
            徹底消臭
          </p>
        </div>
      </div>

      {/* (g) CTA block */}
      <div className="bg-mist px-4 py-6">
        <a
          href="tel:0344002098"
          className="flex flex-col items-center rounded-xl bg-signal px-4 py-4 text-white shadow-[0_1px_2px_rgba(19,34,38,0.12)]"
        >
          <span className="text-[14px] font-bold leading-none">
            お電話1本！タップで発信
          </span>
          <span className="mt-2 flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2z" />
            </svg>
            <span className="font-mono text-[34px] font-bold leading-none tracking-tight">
              03-4400-2098
            </span>
          </span>
        </a>
        <p className="mt-2 text-center text-[10.5px] leading-snug text-muted">
          お電話受付 9:00〜21:00（不定休）／LINE・メールは24時間受付・緊急時は折り返し対応
        </p>

        <div className="mt-3 flex gap-2">
          <a
            href="https://page.line.me/782qjphg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-line px-3 py-3 text-white shadow-[0_1px_2px_rgba(19,34,38,0.12)]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 11.3c0 4-4 7.3-9 7.3-.7 0-1.4-.1-2-.2L5.5 20l.6-3C4.2 15.7 3 13.6 3 11.3 3 7.3 7 4 12 4s9 3.3 9 7.3z" />
            </svg>
            <span className="leading-tight">
              <span className="block text-[10px] font-bold">友だち追加で</span>
              <span className="block text-[15px] font-bold">今すぐ相談</span>
            </span>
          </a>
          {MAIL_FORM_URL !== "" && (
            <a
              href={MAIL_FORM_URL}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-hairline bg-white px-3 py-3 text-teal-800 shadow-[0_1px_2px_rgba(19,34,38,0.06)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0"
                fill="none"
                stroke="#0f7280"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <span className="leading-tight">
                <span className="block text-[10px] font-bold">
                  メールフォームで
                </span>
                <span className="block text-[15px] font-bold">今すぐ相談</span>
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
