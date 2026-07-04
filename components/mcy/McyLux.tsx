import type { ReactNode } from "react";

/**
 * Shared luxury (green×gold) primitives for the Serenshia LP body.
 * These reproduce the visual language of the approved design mockups
 * (deep-emerald shields, gold hairline frames, mincho headings, gold
 * diamond ornaments, foliage + sparkle accents) in accessible, editable
 * code — text stays correct and crawlable, layout stays responsive.
 * Matched to the KV so the whole page reads as one cohesive premium theme.
 */

/* small gold diamond ornament under headings: —◆— */
export function GoldDiamond() {
  return (
    <span aria-hidden="true" className="mt-[clamp(9px,2.4vw,13px)] flex items-center justify-center gap-[7px]">
      <span className="h-px w-[clamp(34px,9.5vw,54px)] bg-gradient-to-r from-transparent to-lux-gold" />
      <span className="h-[8px] w-[8px] rotate-45 bg-gradient-to-br from-lux-gold-light to-lux-gold-deep shadow-[0_0_5px_rgba(200,162,78,0.7)]" />
      <span className="h-px w-[clamp(34px,9.5vw,54px)] bg-gradient-to-l from-transparent to-lux-gold" />
    </span>
  );
}

/* decorative sparkle */
export function Sparkle({ className }: Readonly<{ className: string }>) {
  return (
    <span aria-hidden="true" className={`pointer-events-none absolute select-none leading-none ${className}`}>
      ✦
    </span>
  );
}

/* soft two-tone foliage sprig (SVG) — corner decoration */
export function LeafSprig({ className, flip = false }: Readonly<{ className: string; flip?: boolean }>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 120"
      className={`pointer-events-none absolute select-none ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      <g fill="none" stroke="#2e6b45" strokeWidth="2.4" strokeLinecap="round" opacity="0.5">
        <path d="M18 112C34 78 58 54 96 40" />
        <path d="M70 46c-2-12 4-24 18-30 3 12-3 24-18 30Z" fill="#3f7d55" stroke="none" opacity="0.55" />
        <path d="M52 62c-4-11 0-23 12-31 5 11 1 24-12 31Z" fill="#4a8a60" stroke="none" opacity="0.5" />
        <path d="M36 82c-6-9-5-22 4-32 7 9 6 23-4 32Z" fill="#3f7d55" stroke="none" opacity="0.45" />
      </g>
    </svg>
  );
}

/* deep-emerald hexagon ribbon kicker with gold diamonds on each side */
export function LuxKicker({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <span className="relative inline-flex items-center gap-[clamp(6px,2vw,10px)] bg-gradient-to-b from-lux-green-2 to-lux-green px-[clamp(20px,5.4vw,32px)] py-[clamp(6px,1.7vw,9px)] text-white shadow-[0_5px_14px_rgba(18,61,40,0.32)] ring-1 ring-lux-gold/60 [clip-path:polygon(6%_0,94%_0,100%_50%,94%_100%,6%_100%,0_50%)]">
      <span aria-hidden className="text-[clamp(7px,1.9vw,10px)] leading-none text-lux-gold-light">◆</span>
      <span className="text-[clamp(11px,3vw,15px)] font-black tracking-[0.08em] [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">
        {children}
      </span>
      <span aria-hidden className="text-[clamp(7px,1.9vw,10px)] leading-none text-lux-gold-light">◆</span>
    </span>
  );
}

/* full section heading: kicker ribbon + big mincho heading + gold diamond */
export function LuxHeading({
  kicker,
  watermark,
  children,
}: Readonly<{ kicker?: string; watermark?: string; children: ReactNode }>) {
  return (
    <div className="relative text-center">
      {watermark && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-[0.34em] select-none font-display text-[clamp(44px,14vw,76px)] font-black italic leading-none tracking-[0.08em] text-lux-green/[0.07]"
        >
          {watermark}
        </span>
      )}
      {kicker && <LuxKicker>{kicker}</LuxKicker>}
      <h2 className="relative mt-[clamp(9px,2.6vw,14px)] font-display text-[clamp(23px,6.2vw,32px)] font-black leading-snug tracking-[0.01em] text-lux-green-ink [text-shadow:0_1px_0_rgba(255,255,255,0.85)]">
        {children}
      </h2>
      <GoldDiamond />
    </div>
  );
}

/* white card wrapped in a thin gold hairline frame (double-border look) */
export function GoldCard({
  children,
  className = "",
}: Readonly<{ children: ReactNode; className?: string }>) {
  return (
    <div
      className={`rounded-[20px] bg-gradient-to-br from-lux-gold-light via-lux-gold to-lux-gold-deep p-[2px] shadow-[0_14px_34px_rgba(18,61,40,0.16)] ${className}`}
    >
      <div className="h-full rounded-[18px] bg-white">{children}</div>
    </div>
  );
}

/* deep-emerald gem shield with a number (design-image style) */
export function Shield({ n, className = "" }: Readonly<{ n: number; className?: string }>) {
  return (
    <span
      aria-hidden="true"
      className={`relative grid shrink-0 place-items-center bg-gradient-to-br from-lux-gold-light to-lux-gold-deep p-[2px] [clip-path:polygon(0_0,100%_0,100%_64%,50%_100%,0_64%)] ${className}`}
    >
      <span className="relative grid h-full w-full place-items-center bg-gradient-to-br from-lux-green-2 via-lux-green to-[#0c2c1c] [clip-path:polygon(0_0,100%_0,100%_64%,50%_100%,0_64%)]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[10%] top-[8%] h-[34%] bg-gradient-to-b from-white/25 to-transparent [clip-path:polygon(0_0,100%_0,80%_100%,20%_100%)]"
        />
        <span className="relative font-display text-[clamp(18px,4.9vw,24px)] font-black text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.4)]">
          {n}
        </span>
      </span>
    </span>
  );
}

/* shared CTA pill (deep-green phone / LINE-green) with gold ring + glass top */
export function LuxCtaPill({
  tone,
  href,
  gtm,
  ariaLabel,
  top,
  main,
  sub,
  external = false,
}: Readonly<{
  tone: "phone" | "line";
  href: string;
  gtm: string;
  ariaLabel: string;
  top: string;
  main: string;
  sub: string;
  external?: boolean;
}>) {
  const isPhone = tone === "phone";
  const bg = isPhone
    ? "from-lux-green-2 via-lux-green to-[#0c2c1c]"
    : "from-[#37d857] via-[#12bb38] to-[#06a32a]";
  const arrowStroke = isPhone ? "#123d28" : "#06a32a";
  return (
    <a
      href={href}
      data-gtm={gtm}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      style={{ animationDelay: isPhone ? "0s" : "0.5s" }}
      className={`mcy-cta-nudge relative flex min-h-[clamp(74px,21vw,92px)] items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-white/40 bg-gradient-to-b ${bg} px-4 py-[clamp(8px,2.4vw,12px)] text-white shadow-[0_9px_22px_rgba(18,61,40,0.34)] ring-1 ring-lux-gold/70 transition-[filter] active:brightness-95`}
    >
      <span aria-hidden className="pointer-events-none absolute inset-x-[6%] top-[3px] h-[46%] rounded-full bg-gradient-to-b from-white/35 to-transparent" />
      {isPhone ? (
        <span className="grid h-[clamp(26px,7vw,36px)] w-[clamp(26px,7vw,36px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
          <svg viewBox="0 0 24 24" className="h-[56%] w-[56%]" fill="#123d28" aria-hidden="true">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </span>
      ) : (
        <span className="grid h-[clamp(26px,7vw,36px)] w-[clamp(26px,7vw,36px)] shrink-0 place-items-center rounded-full bg-white text-[clamp(7px,2vw,10px)] font-black text-[#06a32a] shadow-[0_2px_5px_rgba(0,0,0,0.18)]">
          LINE
        </span>
      )}
      <span className="relative min-w-0 text-center leading-none">
        <span className="block whitespace-nowrap text-[clamp(9.5px,2.7vw,12px)] font-black">{top}</span>
        <span className={`mt-[4px] block whitespace-nowrap text-[clamp(18px,5.2vw,25px)] font-black tracking-[-0.01em] ${isPhone ? "text-lux-amber [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" : ""}`}>
          {main}
        </span>
        <span className="mt-[4px] block whitespace-nowrap text-[clamp(7.5px,2.1vw,10px)] font-bold opacity-95">{sub}</span>
      </span>
      <span className="grid h-[clamp(20px,5.6vw,26px)] w-[clamp(20px,5.6vw,26px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
        <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" aria-hidden="true">
          <path d="m9.5 5.5 6.5 6.5-6.5 6.5" fill="none" stroke={arrowStroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}

/* emerald circle check with gold ring */
export function CheckGreen({ className = "" }: Readonly<{ className?: string }>) {
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-lux-green-2 to-lux-green text-white shadow-[0_2px_6px_rgba(18,61,40,0.3)] ring-1 ring-lux-gold/60 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.5l4.5 4.5L19 7" />
      </svg>
    </span>
  );
}
