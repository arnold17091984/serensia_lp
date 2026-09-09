"use client";

import type { ReactNode } from "react";
import CtaButton from "./CtaButton";

/**
 * Opens the reviews modal (McyReviewsModal listens for the "open-reviews"
 * event) instead of navigating to Google — keeps the visitor on the LP so
 * social proof doesn't cause drop-off. Usable from server components as a child.
 */
interface OpenReviewsButtonProps {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  gtm?: string;
}

const openReviews = () => window.dispatchEvent(new Event("open-reviews"));

export default function OpenReviewsButton({ children, className, ariaLabel, gtm }: OpenReviewsButtonProps) {
  return (
    <button type="button" data-gtm={gtm} aria-haspopup="dialog" aria-label={ariaLabel} onClick={openReviews} className={className}>
      {children}
    </button>
  );
}

/** Same action as a secondary CtaButton (white / navy edge) for section footers. */
export function OpenReviewsCta({ gtm, main, ariaLabel }: Readonly<{ gtm?: string; main: string; ariaLabel?: string }>) {
  return <CtaButton variant="secondary" size="md" gtm={gtm} main={main} ariaLabel={ariaLabel} onClick={openReviews} />;
}
