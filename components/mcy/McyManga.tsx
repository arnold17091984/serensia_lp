"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Manga storytelling block (client) — replaces the worry list under the
 * "こんなお悩みはありませんか？" heading. Five illustrated chapters take the reader
 * through the emotional journey (worry → first LINE contact → on-site check →
 * work → completion & promise). To keep a long strip from causing drop-off:
 * - each panel fades/slides in on scroll (IntersectionObserver)
 * - chapters 3–5 stay behind a "続きを読む" reveal so the default section is short
 * - chapter markers + a "つづく" cue give a sense of progress
 * Respects prefers-reduced-motion (panels appear instantly, no transform).
 * All manga content matches the site's verified facts; illustrations only.
 */

interface Chapter {
  no: number;
  src: string;
  w: number;
  h: number;
  title: string;
}

const CHAPTERS: readonly Chapter[] = [
  { no: 1, src: "/manga/manga1.webp", w: 724, h: 2172, title: "突然の知らせ" },
  { no: 2, src: "/manga/manga2.webp", w: 582, h: 2703, title: "はじめての相談" },
  { no: 3, src: "/manga/manga3.webp", w: 631, h: 2493, title: "その日のうちに、現地確認へ" },
  { no: 4, src: "/manga/manga4.webp", w: 631, h: 2493, title: "専門スタッフが作業開始" },
  { no: 5, src: "/manga/manga5.webp", w: 597, h: 2635, title: "作業完了・セレンシアの約束" },
];

const HEAD_COUNT = 2; // chapters shown before the "続きを読む" reveal

function ChapterMarker({ no, title }: Readonly<{ no: number; title: string }>) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="inline-flex items-center gap-[6px] rounded-full bg-gradient-to-r from-lux-green-2 to-lux-green px-[clamp(12px,3.4vw,18px)] py-[clamp(5px,1.5vw,7px)] text-white shadow-[0_4px_10px_rgba(18,61,40,0.32)] ring-1 ring-lux-gold/60">
        <span aria-hidden className="h-[6px] w-[6px] shrink-0 animate-pulse rounded-full bg-lux-gold-light" />
        <span className="font-display text-[clamp(11px,3vw,14px)] font-black tracking-[0.08em]">
          第{no}話
        </span>
      </span>
      <p className="mt-[6px] font-display text-[clamp(13px,3.7vw,17px)] font-black leading-snug text-lux-green-ink [word-break:auto-phrase]">
        {title}
      </p>
    </div>
  );
}

function MangaPanel({ chapter, eager }: Readonly<{ chapter: Chapter; eager?: boolean }>) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.04 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <ChapterMarker no={chapter.no} title={chapter.title} />
      <div
        className={`mt-[clamp(10px,2.8vw,16px)] w-full transition-all duration-700 ease-out ${
          shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-[18px] bg-white p-[clamp(4px,1.2vw,7px)] shadow-[0_14px_34px_rgba(18,61,40,0.18)] ring-1 ring-lux-gold/30">
          <img
            src={chapter.src}
            alt={`セレンシア 第${chapter.no}話「${chapter.title}」`}
            width={chapter.w}
            height={chapter.h}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            className="w-full rounded-[13px]"
          />
        </div>
      </div>
    </div>
  );
}

/** Vertical "つづく ↓" connector between chapters. */
function ChapterConnector() {
  return (
    <div aria-hidden="true" className="flex flex-col items-center py-[clamp(10px,3vw,16px)]">
      <span className="h-[clamp(18px,5vw,28px)] w-[2px] rounded-full bg-gradient-to-b from-lux-gold/60 to-lux-green/50" />
      <span className="my-[3px] text-[clamp(9px,2.5vw,11px)] font-bold tracking-[0.2em] text-lux-green/70">
        つづく
      </span>
      <span className="animate-bounce text-[clamp(12px,3.2vw,15px)] leading-none text-lux-green/70">
        ▼
      </span>
    </div>
  );
}

export default function McyManga() {
  const [expanded, setExpanded] = useState(false);
  const head = CHAPTERS.slice(0, HEAD_COUNT);
  const tail = CHAPTERS.slice(HEAD_COUNT);

  return (
    <div className="mx-auto mt-[clamp(16px,4.4vw,24px)] max-w-[460px]">
      {head.map((c, i) => (
        <div key={c.no}>
          {i > 0 && <ChapterConnector />}
          <MangaPanel chapter={c} eager={c.no === 1} />
        </div>
      ))}

      {!expanded ? (
        <div className="mt-[clamp(14px,4vw,22px)] flex flex-col items-center">
          <ChapterConnector />
          <button
            type="button"
            onClick={() => setExpanded(true)}
            data-gtm="manga_read_more"
            className="relative flex w-full max-w-[380px] flex-col items-center overflow-hidden rounded-full border-2 border-white/40 bg-gradient-to-b from-lux-green-2 via-lux-green to-[#0c2c1c] px-5 py-[clamp(11px,3.2vw,15px)] text-white shadow-[0_10px_24px_rgba(18,61,40,0.4)] ring-1 ring-lux-gold/70 transition-[filter] active:brightness-90"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-[6%] top-[3px] h-[42%] rounded-full bg-gradient-to-b from-white/40 to-transparent"
            />
            <span className="relative text-[clamp(13px,3.7vw,16px)] font-black">続きを読む</span>
            <span className="relative mt-[3px] text-[clamp(9px,2.5vw,11px)] font-bold opacity-95">
              この後、解決までの流れ（全{CHAPTERS.length}話）
            </span>
            <span aria-hidden className="relative mt-[4px] animate-bounce text-[13px] leading-none">
              ▼
            </span>
          </button>
        </div>
      ) : (
        <>
          {tail.map((c) => (
            <div key={c.no}>
              <ChapterConnector />
              <MangaPanel chapter={c} />
            </div>
          ))}
        </>
      )}

      {/* quick path to pricing (preserved from the old worry-list) */}
      <div className="mt-[clamp(14px,4vw,22px)] flex justify-center">
        <a
          href="#ryokin"
          data-gtm="manga_to_pricing"
          className="inline-flex items-center gap-[6px] whitespace-nowrap rounded-full bg-lux-cream px-[14px] py-[8px] text-[clamp(10.5px,3vw,13px)] font-bold text-lux-green ring-1 ring-lux-gold/40"
        >
          料金の目安を見る →
        </a>
      </div>
    </div>
  );
}
