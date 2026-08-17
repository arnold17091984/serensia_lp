"use client";

import { useEffect, useRef, useState } from "react";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_REVIEWS_URL, REVIEWS } from "./reviews-data";

function GoogleG({ className }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}

function Stars({ className = "h-[13px] w-[13px]" }: Readonly<{ className?: string }>) {
  return (
    <span aria-hidden="true" className="inline-flex">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className={className} fill="#f6b500">
          <path d="M12 2l2.9 6.26L21.8 9l-5.1 4.55L18.2 20.4 12 16.9 5.8 20.4l1.5-6.85L2.2 9l6.9-.74z" />
        </svg>
      ))}
    </span>
  );
}

export default function McyReviewsModal() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const openIt = () => setOpen(true);
    window.addEventListener("open-reviews", openIt);
    return () => window.removeEventListener("open-reviews", openIt);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    // remember the opener so keyboard/AT users land back where they started
    const opener = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      opener?.focus?.();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4">
      {/* overlay */}
      <button
        type="button"
        tabIndex={-1}
        aria-label="閉じる"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/55 backdrop-blur-[2px] motion-safe:animate-[mcyFadeIn_.18s_ease]"
      />
      {/* dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="reviews-modal-title"
        className="relative flex max-h-[88vh] w-full max-w-[520px] flex-col overflow-hidden rounded-t-[20px] bg-lux-cream shadow-[0_-8px_40px_rgba(0,0,0,0.35)] sm:rounded-[20px] motion-safe:animate-[mcySlideUp_.24s_ease]"
      >
        {/* header */}
        <div className="flex items-center gap-3 border-b border-lux-gold/30 bg-white px-[clamp(14px,4vw,20px)] py-3.5">
          <GoogleG className="h-[clamp(20px,5.5vw,24px)] w-[clamp(20px,5.5vw,24px)] shrink-0" />
          <div className="min-w-0 flex-1">
            <p id="reviews-modal-title" className="text-[clamp(12px,3.3vw,14px)] font-black text-lux-green-ink">
              お客様の声（Googleクチコミ）
            </p>
            <p className="mt-[1px] flex items-center gap-1.5 text-[clamp(10.5px,2.9vw,12px)] font-bold text-lux-green-ink/75">
              <Stars />
              <span className="font-display text-[clamp(14px,3.8vw,16px)] font-black text-lux-green-ink">{GOOGLE_RATING}</span>
              <span>／{GOOGLE_REVIEW_COUNT}件から抜粋</span>
            </p>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="閉じる"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-lux-green-ink/70 transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lux-green"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* scrollable reviews */}
        <ul className="flex-1 space-y-[10px] overflow-y-auto overscroll-contain px-[clamp(10px,3vw,16px)] py-[clamp(12px,3.4vw,16px)]">
          {REVIEWS.map((r) => (
            <li
              key={r.name}
              className="rounded-[14px] border border-lux-gold/25 bg-white px-[clamp(12px,3.4vw,16px)] py-[clamp(11px,3vw,14px)] shadow-[0_2px_8px_rgba(18,61,40,0.06)]"
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-[clamp(30px,8vw,36px)] w-[clamp(30px,8vw,36px)] shrink-0 place-items-center rounded-full bg-lux-green/10 font-display text-[clamp(13px,3.6vw,16px)] font-black text-lux-green">
                  {r.initial}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[clamp(12px,3.3vw,14px)] font-bold text-lux-green-ink">{r.name}</p>
                  <p className="mt-[1px] flex items-center gap-1.5 text-[clamp(9.5px,2.6vw,11px)] text-lux-green-ink/60">
                    <Stars className="h-[11px] w-[11px]" />
                    <span>{r.date}</span>
                  </p>
                </div>
                <GoogleG className="h-4 w-4 shrink-0 opacity-70" />
              </div>
              <p className="mt-[6px] text-[clamp(10px,2.8vw,12px)] font-bold text-lux-green-ink/75">{r.area}</p>
              <p className="mt-[3px] text-[clamp(11.5px,3.1vw,13px)] leading-[1.85] text-lux-green-ink/85 [word-break:auto-phrase]">
                {r.text}
              </p>
            </li>
          ))}
        </ul>

        {/* footer: verify on Google */}
        <div className="border-t border-lux-gold/30 bg-white px-5 py-3 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="review_google_modal"
            className="inline-flex items-center gap-1.5 text-[clamp(11.5px,3.1vw,13px)] font-bold text-lux-green underline decoration-lux-gold decoration-2 underline-offset-2"
          >
            <GoogleG className="h-4 w-4" />
            Googleで全ての口コミを見る（{GOOGLE_REVIEW_COUNT}件）
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
