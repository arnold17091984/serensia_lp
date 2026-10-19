import { preload } from "react-dom";
import { LineCta, PhoneCta } from "./CtaButton";
import { mcyKvAssets } from "./kv-assets";
import { CASES } from "./pricing-data";

/**
 * KV01 (2026-09-09 版, 984×1599, no burned-in margins): rows 0..1032 and
 * 1329..1598 as q85 WebP slices. Rows 1033..1328 — the artwork's phone/LINE
 * band, which carries a WRONG number (03-4400-2106) — are never shipped; the
 * CSS buttons stand in for them.
 */
// H-012: the artwork only shows the entry price (50,000円〜); state the range of
// the published case totals so the first screen matches the case reports.
const caseTotals = CASES.map((c) => Number(c.price.replace(/,/g, "")));
const yen = (n: number) => n.toLocaleString("ja-JP");
const CASE_MIN = yen(Math.min(...caseTotals));
const CASE_MAX = yen(Math.max(...caseTotals));

export default function McyFv() {
  // LCP image: put it in <head> as a high-priority preload so the browser starts
  // fetching it before parsing the body (Lighthouse: ~3s of LCP was load delay).
  preload(mcyKvAssets.kv01Top, { as: "image", fetchPriority: "high" });
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <h1 className="sr-only">
        孤独死・事故現場の特殊清掃専門 セレンシア｜東京・神奈川 全域対応・最短即日で現地確認
      </h1>
      <div className="relative w-full">
        <img
          src={mcyKvAssets.kv01Top}
          alt="特殊清掃専門のセレンシア。東京・神奈川全域対応。相談・見積無料、追加料金なし、立ち会い不要、近隣配慮。料金目安50,000円〜。"
          width={984}
          height={1033}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="block h-auto w-full"
        />
      </div>
      {/* the KV mock's two actions, rebuilt in HTML (T-99). 12px side gutters and a
          10px gap match the artwork; data-cta-section hides the sticky bar while
          these are on screen. Out-of-hours copy lives inside the phone button. */}
      <div data-cta-section className="flex flex-col gap-[10px] bg-gradient-to-b from-[#e5f3f1] to-[#f7fcfc] px-3 pb-3 pt-2">
        <a
          href="#ryokin"
          data-gtm="fv_case_total_range"
          className="flex items-center justify-center gap-x-2 rounded-[12px] border border-lux-border bg-white px-3 py-[9px] text-lux-green-ink shadow-[0_2px_8px_rgba(7,49,95,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lux-green"
        >
          <span className="flex flex-wrap items-baseline justify-center gap-x-[6px] text-center">
            <span className="text-[clamp(14px,3.8vw,15.5px)] font-bold">掲載事例の総額</span>
            <span className="whitespace-nowrap text-[clamp(16px,4.4vw,18px)] font-black text-lux-crimson">
              {CASE_MIN}円〜{CASE_MAX}円
            </span>
          </span>
          <span className="shrink-0 whitespace-nowrap text-[clamp(13.5px,3.6vw,15px)] font-bold text-lux-green underline decoration-lux-gold underline-offset-4">
            事例を見る
          </span>
        </a>
        <PhoneCta gtm="cta_tel_fv" />
        <LineCta gtm="cta_line_fv" top="写真だけでも相談できる" sub="写真なしでもOK｜24時間受付" />
      </div>
      <img
        src={mcyKvAssets.kv01Bottom}
        alt="Googleクチコミ5.0（191件）、ご相談実績2,000件以上。どんなお悩みでも、まずはご相談ください。"
        width={984}
        height={270}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
    </section>
  );
}
