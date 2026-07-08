"use client";

import type { ReactNode } from "react";

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

export default function OpenReviewsButton({ children, className, ariaLabel, gtm }: OpenReviewsButtonProps) {
  return (
    <button
      type="button"
      data-gtm={gtm}
      aria-haspopup="dialog"
      aria-label={ariaLabel}
      onClick={() => window.dispatchEvent(new Event("open-reviews"))}
      className={className}
    >
      {children}
    </button>
  );
}
