// TODO: メールフォームURLが決まったら設定（空の間はメールCTAを非表示）
const MAIL_FORM_URL: string = "";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-hairline bg-white/95 backdrop-blur">
      <div className="flex items-center justify-between gap-2 px-4 py-2.5">
        {/* Logo block */}
        <div className="flex min-w-0 items-center gap-2">
          <svg
            viewBox="0 0 32 32"
            className="h-8 w-8 shrink-0"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="1.5"
              y="1.5"
              width="29"
              height="29"
              rx="7"
              stroke="#0f7280"
              strokeWidth="1.5"
            />
            {/* leaf / heart motif, thin clinical stroke */}
            <path
              d="M16 11.2c-2.2-2.4-5.9-1.9-6.8.8-.7 2.2 1 4.6 6.8 8.5 5.8-3.9 7.5-6.3 6.8-8.5-.9-2.7-4.6-3.2-6.8-.8z"
              stroke="#0f7280"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="min-w-0 leading-none">
            <p className="whitespace-nowrap text-[15px] font-bold tracking-[0.08em] text-ink">
              セレンシア
            </p>
            <p className="mt-1 whitespace-nowrap text-[10px] font-medium tracking-[0.06em] text-muted">
              特殊清掃・遺品整理
            </p>
          </div>
        </div>

        {/* CTA mini buttons */}
        <div className="flex shrink-0 items-center gap-1.5">
          <a
            href="tel:0344002098"
            className="flex items-center gap-1.5 rounded-lg bg-signal px-2.5 py-2 text-[11px] font-bold leading-none text-white shadow-[0_1px_2px_rgba(19,34,38,0.12)]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2z" />
            </svg>
            お電話で依頼
          </a>
          {MAIL_FORM_URL !== "" && (
            <a
              href={MAIL_FORM_URL}
              className="flex items-center gap-1.5 rounded-lg border border-hairline bg-white px-2.5 py-2 text-[11px] font-bold leading-none text-teal-800"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
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
              メールで依頼
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
