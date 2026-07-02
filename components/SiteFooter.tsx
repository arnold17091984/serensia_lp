const FOOTER_LINKS = [
  { href: "/company", label: "会社概要" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/legal", label: "特定商取引法に基づく表記" },
];

export default function SiteFooter() {
  return (
    <footer className="w-full bg-gradient-to-b from-ink to-neutral-900 px-5 pb-28 pt-10 text-center text-white">
      {/* logo text */}
      <p className="text-[11px] tracking-[0.25em] text-neutral-300">
        特殊清掃・遺品整理
      </p>
      <p className="mt-1 font-serif text-[26px] font-bold tracking-[0.2em]">
        セレンシア
      </p>
      <p className="mt-2 text-[12px] text-neutral-300">
        運営会社：株式会社TAKAKU
      </p>

      {/* phone */}
      <div className="mt-7">
        <a
          href="tel:0344002098"
          className="inline-flex items-center justify-center gap-2 font-serif text-[26px] font-bold tracking-wider"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5 shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
          </svg>
          03-4400-2098
        </a>
        <p className="mt-2 text-[11px] leading-relaxed text-neutral-300">
          お電話受付 9:00〜21:00（不定休）／
          <br />
          LINE・メールは24時間受付・緊急時は折り返し対応
        </p>
      </div>

      {/* service area */}
      <p className="mt-5 text-[12px] text-neutral-300">
        対応エリア：東京・神奈川を中心に関東一円
      </p>

      {/* legal links */}
      <nav className="mt-8 flex flex-wrap items-center justify-center gap-y-1.5 text-[12px] text-neutral-300">
        {FOOTER_LINKS.map((link, i) => (
          <span key={link.href} className="flex items-center">
            {i > 0 && (
              <span aria-hidden="true" className="mx-2.5 text-neutral-600">
                ｜
              </span>
            )}
            <a
              href={link.href}
              className="underline decoration-neutral-500 underline-offset-4"
            >
              {link.label}
            </a>
          </span>
        ))}
      </nav>

      {/* copyright */}
      <p className="mt-8 text-[11px] tracking-wider text-neutral-500">
        © 株式会社TAKAKU
      </p>
    </footer>
  );
}
