"use client";

import { useEffect, useState } from "react";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "./reviews-data";

/**
 * Live Google rating / review count. The static export renders the fallback
 * constants; after hydration every <ReviewRating/> / <ReviewCount/> swaps in the
 * values from /reviews-meta.json, which a daily job refreshes on the server from
 * the Google Places API (no rebuild needed). Bad, missing or stale (>45 days)
 * data keeps the fallback, so the page never shows an unverified number.
 */

interface ReviewMeta {
  rating: string;
  count: number;
}

const MAX_AGE_DAYS = 45;
const FALLBACK: ReviewMeta = { rating: GOOGLE_RATING, count: GOOGLE_REVIEW_COUNT };
let metaPromise: Promise<ReviewMeta | null> | null = null;

function parseMeta(data: unknown): ReviewMeta | null {
  if (!data || typeof data !== "object") return null;
  const { rating, count, fetched_at: fetchedAt } = data as Record<string, unknown>;
  const r = Number(rating);
  const c = Number(count);
  const age = (Date.now() - Date.parse(String(fetchedAt))) / 86_400_000;
  if (!(r >= 1 && r <= 5) || !Number.isInteger(c) || c < 1 || !(age >= 0 && age <= MAX_AGE_DAYS)) return null;
  return { rating: r.toFixed(1), count: c };
}

function loadMeta(): Promise<ReviewMeta | null> {
  metaPromise ??= fetch("/reviews-meta.json", { cache: "no-store" })
    .then((res) => (res.ok ? res.json() : null))
    .then(parseMeta)
    .catch(() => null);
  return metaPromise;
}

function useReviewMeta(): ReviewMeta {
  const [meta, setMeta] = useState<ReviewMeta>(FALLBACK);
  useEffect(() => {
    let alive = true;
    loadMeta().then((m) => {
      if (alive && m) setMeta(m);
    });
    return () => {
      alive = false;
    };
  }, []);
  return meta;
}

export function ReviewRating() {
  return <>{useReviewMeta().rating}</>;
}

export function ReviewCount() {
  return <>{useReviewMeta().count.toLocaleString("ja-JP")}</>;
}
