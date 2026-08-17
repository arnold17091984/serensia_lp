import { LeafSprig, LuxHeading } from "./McyLux";
import OpenReviewsButton from "./OpenReviewsButton";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, REVIEWS } from "./reviews-data";

/**
 * お客様の声 — real Google reviews read INLINE (no navigation), so the social
 * proof never causes drop-off. Shows 3 featured reviews (clamped) + a button
 * that opens the reviews modal (all reviews, still on-page). Crawlable text.
 */

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

export default function McyReviews() {
  const featured = REVIEWS.slice(0, 3);
  return (
    <section data-section="reviews" className="lux-rays relative w-full overflow-hidden px-4 py-[clamp(28px,8vw,46px)]">
      <LeafSprig className="left-[-10px] top-[clamp(50px,13vw,90px)] h-[clamp(54px,15vw,84px)] w-auto opacity-55" />

      <div className="relative">
        <LuxHeading kicker="お客様の声" watermark="VOICE">
          Googleクチコミ <span className="text-lux-green">★{GOOGLE_RATING}</span>
        </LuxHeading>

        {/* rating badge */}
        <div className="mx-auto mt-[clamp(10px,2.8vw,14px)] flex w-fit items-center gap-[clamp(5px,1.6vw,9px)] rounded-full border border-lux-gold/45 bg-white px-[clamp(12px,3.4vw,18px)] py-[clamp(6px,1.8vw,9px)] shadow-[0_2px_8px_rgba(18,61,40,0.1)]">
          <GoogleG className="h-[clamp(16px,4.4vw,20px)] w-[clamp(16px,4.4vw,20px)]" />
          <Stars className="h-[clamp(12px,3.2vw,15px)] w-[clamp(12px,3.2vw,15px)]" />
          <span className="font-display text-[clamp(15px,4vw,19px)] font-black leading-none text-lux-green-ink">{GOOGLE_RATING}</span>
          <span className="text-[clamp(10px,2.8vw,12px)] font-bold text-lux-green-ink/70">／{GOOGLE_REVIEW_COUNT}件</span>
        </div>

        {/* featured reviews (read inline — no navigation) */}
        <ul className="mx-auto mt-[clamp(16px,4.4vw,24px)] flex max-w-[520px] flex-col gap-[clamp(10px,2.8vw,14px)]">
          {featured.map((r) => (
            <li
              key={r.name}
              className="rounded-[16px] border border-lux-gold/30 bg-white px-[clamp(13px,3.6vw,18px)] py-[clamp(12px,3.2vw,16px)] shadow-[0_6px_18px_rgba(18,61,40,0.1)]"
            >
              <div className="flex items-center gap-[clamp(8px,2.4vw,11px)]">
                <span className="grid h-[clamp(32px,8.5vw,40px)] w-[clamp(32px,8.5vw,40px)] shrink-0 place-items-center rounded-full bg-lux-green/10 font-display text-[clamp(14px,3.8vw,17px)] font-black text-lux-green">
                  {r.initial}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[clamp(12.5px,3.4vw,14.5px)] font-bold text-lux-green-ink">{r.name}</p>
                  <p className="mt-[1px] flex items-center gap-1.5 text-[clamp(9.5px,2.6vw,11px)] text-lux-green-ink/60">
                    <Stars className="h-[11px] w-[11px]" />
                    <span>{r.date}</span>
                  </p>
                </div>
                <GoogleG className="h-[clamp(15px,4vw,18px)] w-[clamp(15px,4vw,18px)] shrink-0 opacity-70" />
              </div>
              <p className="mt-[clamp(5px,1.6vw,8px)] text-[clamp(10px,2.8vw,12px)] font-bold text-lux-green-ink/75 [word-break:auto-phrase]">
                {r.area}
              </p>
              <p className="mt-[3px] line-clamp-5 text-[clamp(11.5px,3.1vw,13.5px)] leading-[1.85] text-lux-green-ink/85 [word-break:auto-phrase]">
                {r.text}
              </p>
            </li>
          ))}
        </ul>

        {/* open modal (all reviews, still on-page) */}
        <div className="mt-[clamp(14px,4vw,20px)] text-center">
          <OpenReviewsButton
            gtm="reviews_open_section"
            ariaLabel="お客様の声をもっと見る"
            className="mcy-cta-nudge inline-flex items-center gap-2 rounded-full border-2 border-lux-green/35 bg-white px-[clamp(20px,6vw,30px)] py-[clamp(11px,3vw,14px)] text-[clamp(12.5px,3.4vw,14.5px)] font-black text-lux-green-ink shadow-[0_4px_12px_rgba(18,61,40,0.12)] transition-[background-color,transform] hover:bg-lux-green-soft active:scale-[0.98]"
          >
            口コミを読む
            <span aria-hidden="true">→</span>
          </OpenReviewsButton>
          <p className="mt-[7px] text-[clamp(11px,3vw,12px)] font-medium text-lux-green-ink/75">
            ※実際のGoogleクチコミ{GOOGLE_REVIEW_COUNT}件から抜粋（このページ内で開きます）
          </p>
        </div>
      </div>
    </section>
  );
}
