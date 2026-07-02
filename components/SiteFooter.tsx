const FOOTER_LINKS = [
  { href: "/company", label: "会社概要" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/legal", label: "特定商取引法に基づく表記" },
];

function PhoneIcon() {
  return (
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="w-full bg-teal-950">
      <div className="bg-blueprint-dark relative px-5 pb-28 pt-12 text-center text-white">
        {/* measurement-style corner marks */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-3 font-mono text-[13px] leading-none text-white/25"
        >
          +
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-3 font-mono text-[13px] leading-none text-white/25"
        >
          +
        </span>

        {/* logo text */}
        <p className="font-mono text-[11px] tracking-[0.25em] text-teal-100/75">
          特殊清掃・遺品整理
        </p>
        <p className="mt-2 text-[26px] font-bold tracking-[0.2em] text-white">
          セレンシア
        </p>
        <p className="mt-3 text-[12px] leading-relaxed text-white/70">
          運営会社：株式会社TAKAKU
        </p>

        {/* phone */}
        <div className="mt-8">
          <a
            href="tel:0344002098"
            className="inline-flex items-center justify-center gap-2.5 text-white"
          >
            <PhoneIcon />
            <span className="font-mono text-[26px] font-semibold leading-none tracking-tight">
              03-4400-2098
            </span>
          </a>
          <p className="mt-3 text-[11px] leading-relaxed text-white/70">
            お電話受付 9:00〜21:00（不定休）／
            <br />
            LINE・メールは24時間受付・緊急時は折り返し対応
          </p>
        </div>

        {/* service area */}
        <p className="mt-6 text-[12px] leading-relaxed text-white/70">
          対応エリア：東京・神奈川を中心に関東一円
        </p>

        {/* legal links */}
        <nav className="mt-9 flex flex-wrap items-center justify-center gap-y-1.5 border-t border-white/15 pt-7 text-[12px] text-white/75">
          {FOOTER_LINKS.map((link, i) => (
            <span key={link.href} className="flex items-center">
              {i > 0 && (
                <span aria-hidden="true" className="mx-2.5 text-white/25">
                  ｜
                </span>
              )}
              <a
                href={link.href}
                className="underline decoration-white/30 underline-offset-4"
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>

        {/* copyright */}
        <p className="mt-8 font-mono text-[11px] tracking-[0.18em] text-white/40">
          © 株式会社TAKAKU
        </p>
      </div>
    </footer>
  );
}
