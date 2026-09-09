"use client";

import McyCtaShine from "./McyCtaShine";
import { LINE_URL, PHONE_DISPLAY, PHONE_TEL, phoneHoursCopy } from "./contact";
import { usePhoneClosed } from "./use-phone-closed";

/** Shared T-96 gold frame / glossy face, with reception-aware phone labels. */

export type CtaVariant = "phone" | "line" | "primary" | "secondary";
export type CtaSize = "lg" | "md";
export type CtaIcon = "phone" | "line" | "book" | "none";

export interface CtaButtonProps {
  variant: CtaVariant;
  size?: CtaSize;
  href?: string;
  onClick?: () => void;
  gtm?: string;
  /** small line above the main label (lg only) */
  top?: string;
  /** main label; defaults to the phone number / "LINEで相談する" */
  main?: string;
  /** small line under the main label */
  sub?: string;
  ariaLabel?: string;
  icon?: CtaIcon;
  external?: boolean;
  hoursAware?: boolean;
  tabIndex?: number;
  className?: string;
  /** vertical chevron (▼) for reveal actions instead of the right arrow */
  chevron?: "right" | "down" | "none";
  /** phone only: sub label while reception is closed (defaults to the shared copy) */
  closedSub?: string;
  /** smaller main label for long copy (e.g. KV02's "LINEで写真相談・概算見積り") */
  dense?: boolean;
}

const DEFAULT_ICON: Record<CtaVariant, CtaIcon> = {
  phone: "phone",
  line: "line",
  primary: "none",
  secondary: "none",
};

const DEFAULT_MAIN: Record<CtaVariant, string> = {
  phone: PHONE_DISPLAY,
  line: "LINEで相談する",
  primary: "",
  secondary: "",
};

const ICON_TONE: Record<CtaVariant, string> = {
  phone: "text-[#d81b24]",
  line: "text-[#06c755]",
  primary: "text-lux-green",
  secondary: "text-lux-green",
};

function PhoneGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-[54%] w-[54%]" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function LineGlyph() {
  return (
    <svg viewBox="0 0 32 32" className="h-[78%] w-[78%]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16 3.2C8.3 3.2 2 8.3 2 14.5c0 5.6 5 10.2 11.7 11.1.46.1 1.08.3 1.24.69.14.35.09.9.05 1.25l-.2 1.2c-.06.35-.28 1.38 1.21.75 1.49-.62 8.03-4.73 10.96-8.1C29.9 20.9 31 18 31 14.5 31 8.3 24.7 3.2 16 3.2Z"
      />
      <text x="16" y="15.3" textAnchor="middle" dominantBaseline="central" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="7.2" letterSpacing="-0.2" fill="#fff">
        LINE
      </text>
    </svg>
  );
}

function BookGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-[56%] w-[56%]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 6.5C10.5 5 8.5 4.5 4.5 4.5v13C8.5 17.5 10.5 18 12 19.5M12 6.5c1.5-1.5 3.5-2 7.5-2v13c-4 0-6 .5-7.5 2M12 6.5v13" />
    </svg>
  );
}

function IconDisc({ icon, variant, size }: Readonly<{ icon: CtaIcon; variant: CtaVariant; size: CtaSize }>) {
  if (icon === "none") return null;
  const dim = size === "lg" ? "h-[clamp(34px,12.5cqw,54px)] w-[clamp(34px,12.5cqw,54px)]" : "h-[clamp(26px,8vw,34px)] w-[clamp(26px,8vw,34px)]";
  return (
    <span aria-hidden="true" className={`cta-disc relative grid shrink-0 place-items-center rounded-full bg-white ${dim} ${ICON_TONE[variant]}`}>
      {icon === "phone" && <PhoneGlyph />}
      {icon === "line" && <LineGlyph />}
      {icon === "book" && <BookGlyph />}
    </span>
  );
}

function Chevron({ dir, size }: Readonly<{ dir: "right" | "down" | "none"; size: CtaSize }>) {
  if (dir === "none") return null;
  return (
    <svg viewBox="0 0 24 24" className={`relative shrink-0 ${size === "lg" ? "h-[clamp(19px,5.2vw,27px)] w-[clamp(19px,5.2vw,27px)]" : "h-[18px] w-[18px]"}`} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === "down" ? "m5 9 7 7 7-7" : "m9 5 7 7-7 7"} />
    </svg>
  );
}

export default function CtaButton({
  variant,
  size = "lg",
  href,
  onClick,
  gtm,
  top,
  main,
  sub,
  ariaLabel,
  icon,
  external,
  hoursAware = true,
  tabIndex,
  className = "",
  chevron = "right",
  closedSub,
  dense = false,
}: Readonly<CtaButtonProps>) {
  const closed = usePhoneClosed();
  const isPhone = variant === "phone";
  const hours = phoneHoursCopy(isPhone && hoursAware ? closed : false);

  const topText = isPhone && hoursAware ? (closed ? hours.top : (top ?? hours.top)) : top;
  const subText = isPhone && hoursAware ? (closed ? (closedSub ?? hours.sub) : (sub ?? hours.sub)) : sub;
  const mainText = main ?? DEFAULT_MAIN[variant];
  const iconKind = icon ?? DEFAULT_ICON[variant];
  const lg = size === "lg";
  // Keep voice control and screen readers aligned with the rendered copy,
  // including the reception state. Caller context must never replace it.
  const visibleLabel = [lg ? topText : undefined, mainText, subText].filter(Boolean).join(" ");
  const label = ariaLabel && !(isPhone && hoursAware && closed)
    ? `${visibleLabel}。${ariaLabel}`
    : visibleLabel;

  const shell = [
    "cta",
    `cta-${variant}`,
    `cta-${size}`,
    "block w-full text-left",
    className,
  ].join(" ");

  const face = [
    "cta-face relative flex w-full items-center overflow-hidden",
    lg
      ? "min-h-[clamp(72px,19vw,86px)] gap-[clamp(5px,2cqw,10px)] px-[clamp(7px,3cqw,12px)] py-[clamp(8px,2.2vw,12px)]"
      : "min-h-[clamp(58px,17vw,68px)] gap-[clamp(5px,1.6vw,8px)] px-[clamp(6px,2vw,10px)] py-[6px]",
    variant === "secondary" ? "justify-center" : "",
  ].join(" ");

  const mainClass = [
    "block whitespace-nowrap font-black leading-none",
    isPhone
      ? lg
        ? "text-[clamp(23px,6.7vw,33px)] tracking-[-0.01em]"
        : "text-[clamp(12px,3.8vw,16px)] tracking-[-0.01em]"
      : variant === "line"
        ? lg
          ? dense
            ? "text-[clamp(13px,5.1cqw,19px)] tracking-[-0.01em]"
            : "text-[clamp(18px,5.3vw,25px)] tracking-[0.01em]"
          : "text-[clamp(12px,3.8vw,16px)]"
        : variant === "primary"
          ? lg
            ? "text-[clamp(17px,5.6cqw,21px)] tracking-[0.02em]"
            : "text-[clamp(14px,4vw,16px)]"
          : "text-[clamp(13px,3.7vw,15px)] tracking-[0.02em]",
  ].join(" ");

  const inner = (
    <span className={face}>
      {variant !== "secondary" && <McyCtaShine />}
      <IconDisc icon={iconKind} variant={variant} size={size} />
      <span className={`cta-text relative min-w-0 flex-1 text-center leading-none ${variant === "secondary" ? "flex-none" : ""}`}>
        {lg && topText ? <span className="block text-[13px] font-bold leading-[1.3]">{topText}</span> : null}
        <span className={`${mainClass} ${lg && topText ? "mt-[3px]" : ""}`}>{mainText}</span>
        {subText ? (
          <span className={`block font-bold leading-[1.4] ${lg ? "mt-[4px] text-[clamp(10.5px,3.1vw,12px)]" : "mt-[3px] text-[clamp(10px,3vw,11.5px)]"}`}>{subText}</span>
        ) : null}
      </span>
      <Chevron dir={chevron} size={size} />
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        data-gtm={gtm}
        aria-label={label}
        tabIndex={tabIndex}
        className={shell}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} data-gtm={gtm} aria-label={label} tabIndex={tabIndex} className={shell}>
      {inner}
    </button>
  );
}

/** Convenience: the LINE action with the LP's default copy. */
export function LineCta(props: Readonly<Omit<CtaButtonProps, "variant" | "href" | "external">>) {
  return <CtaButton variant="line" href={LINE_URL} external {...props} />;
}

/** Convenience: the phone action (labels swap outside reception hours). */
export function PhoneCta(props: Readonly<Omit<CtaButtonProps, "variant" | "href">>) {
  return <CtaButton variant="phone" href={PHONE_TEL} {...props} />;
}
