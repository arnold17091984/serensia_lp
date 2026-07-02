/**
 * Site footer — forest-green ground with gold hairline accents.
 * Matches the FV design language: Shippori Mincho display type,
 * white/gold line-art logo mark, fluid clamp() sizing.
 */

const FOOTER_LINKS = [
  { href: "/company", label: "会社概要" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/legal", label: "特定商取引法に基づく表記" },
];

/** Header logo mark, recolored to white/gold line art for the dark ground. */
function LogoMark() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="mx-auto h-[clamp(36px,9.6vw,46px)] w-[clamp(36px,9.6vw,46px)]"
      aria-hidden="true"
    >
      <path
        d="M20 9.5c-2.3-3.1-7-2.7-8.1.7-.9 2.7 1.3 5.5 8.1 10.1 6.8-4.6 9-7.4 8.1-10.1-1.1-3.4-5.8-3.8-8.1-.7z"
        fill="none"
        stroke="#f6f1e6"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M7.5 27c4.1-3.5 9.3-4.3 12.9-2.3M7.5 27c2.9 3.3 8.9 4.5 13.4 2.7 4.1-1.6 7.8-2.5 11.3-2.1"
        fill="none"
        stroke="#c09a4a"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Short centered gold rule with a diamond, echoing the GoldFlourish motif. */
function GoldDivider() {
  return (
    <svg
      viewBox="0 0 128 8"
      className="mx-auto h-2 w-[clamp(104px,32vw,128px)]"
      aria-hidden="true"
    >
      <path d="M4 4h50" stroke="#c09a4a" strokeWidth="1" opacity="0.55" />
      <path
        d="M64 1.2 66.8 4 64 6.8 61.2 4z"
        fill="none"
        stroke="#c09a4a"
        strokeWidth="1"
      />
      <path d="M74 4h50" stroke="#c09a4a" strokeWidth="1" opacity="0.55" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-[#c09a4a] bg-forest-950 px-5 pb-28 pt-12 text-center text-white">
      {/* logo */}
      <LogoMark />
      <p className="mt-4 text-[clamp(9.5px,2.6vw,11px)] font-medium leading-none tracking-[0.26em] text-[#d9c8a3]">
        特殊清掃・遺品整理
      </p>
      <p className="mt-3 font-display text-[clamp(23px,6.4vw,28px)] font-bold leading-none tracking-[0.22em] text-white">
        セレンシア
      </p>
      <p className="mt-4 text-[clamp(10.5px,2.8vw,12px)] leading-none tracking-[0.04em] text-white/70">
        運営会社：株式会社TAKAKU
      </p>

      <div className="mt-9">
        <GoldDivider />
      </div>

      {/* phone */}
      <div className="mt-8">
        <a
          href="tel:0344002098"
          className="inline-flex items-center justify-center gap-[10px] text-white"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-[clamp(20px,5.4vw,26px)] w-[clamp(20px,5.4vw,26px)] shrink-0"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span className="whitespace-nowrap text-[clamp(27px,7.6vw,34px)] font-black leading-none tracking-[-0.01em]">
            03-4400-2098
          </span>
        </a>
        <p className="mt-4 text-[clamp(10px,2.7vw,11.5px)] leading-[1.9] text-white/75">
          お電話受付 9:00〜21:00 年中無休／
          <br />
          LINE・メールは24時間受付・緊急時は折り返し対応
        </p>
      </div>

      {/* service area */}
      <p className="mt-7 text-[clamp(10.5px,2.8vw,12px)] leading-none tracking-[0.04em] text-white/70">
        対応エリア：東京・神奈川を中心に関東一円
      </p>

      {/* legal links */}
      <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 text-[clamp(10.5px,2.9vw,12px)] text-white/85">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="inline-block px-1.5 py-2 underline decoration-[#c09a4a] decoration-1 underline-offset-4"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* copyright */}
      <p className="mt-10 text-[clamp(9.5px,2.6vw,11px)] leading-none tracking-[0.14em] text-white/45">
        © 株式会社TAKAKU
      </p>
    </footer>
  );
}
