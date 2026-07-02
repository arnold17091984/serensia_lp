// TODO: メールフォームURLが決まったら設定（空の間はメールCTAを非表示）
const MAIL_FORM_URL: string = "";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/95 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between gap-2 px-3 py-2">
        {/* Logo block */}
        <div className="flex min-w-0 items-center gap-1.5">
          <svg
            viewBox="0 0 32 32"
            className="h-8 w-8 shrink-0"
            aria-hidden="true"
          >
            <circle
              cx="16"
              cy="16"
              r="15"
              fill="#fff"
              stroke="#c09a4a"
              strokeWidth="1.5"
            />
            {/* leaf / heart motif */}
            <path
              d="M16 9c-2.6-2.8-7-2.2-8 1-.8 2.6 1.2 5.4 8 10 6.8-4.6 8.8-7.4 8-10-1-3.2-5.4-3.8-8-1z"
              fill="none"
              stroke="#c09a4a"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M9 23c4.5-2 9.5-2 14 0"
              fill="none"
              stroke="#c09a4a"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <p className="shrink-0 font-serif text-[9px] font-bold leading-[1.3] text-brand-900">
            特殊清掃
            <br />
            遺品整理
          </p>
          <p className="whitespace-nowrap font-serif text-[15px] font-bold tracking-[0.05em] text-[#5f452a]">
            セレンシア
          </p>
        </div>

        {/* CTA mini buttons */}
        <div className="flex shrink-0 items-center gap-1.5">
          <a
            href="tel:0344002098"
            className="flex items-center gap-1 rounded-md bg-cta px-2 py-1.5 text-[11px] font-bold leading-none text-white shadow-sm"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
            </svg>
            お電話で依頼
          </a>
          {MAIL_FORM_URL !== "" && (
          <a
            href={MAIL_FORM_URL}
            className="flex items-center gap-1 rounded-md bg-[#2f6fd0] px-2 py-1.5 text-[11px] font-bold leading-none text-white shadow-sm"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            メールで依頼
          </a>
          )}
        </div>
      </div>
    </header>
  );
}
