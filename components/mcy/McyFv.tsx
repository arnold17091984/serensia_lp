import { LineCta, PhoneCta } from "./CtaButton";

/**
 * KV01 (2026-09-09 版, 984×1599, no burned-in margins): rows 0..1032 and
 * 1329..1598 as q85 WebP slices. Rows 1033..1328 — the artwork's phone/LINE
 * band, which carries a WRONG number (03-4400-2106) — are never shipped; the
 * CSS buttons stand in for them.
 */
export default function McyFv() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <h1 className="sr-only">
        孤独死・事故現場の特殊清掃専門 セレンシア｜東京・神奈川 全域対応・最短即日で現地確認
      </h1>
      <div className="relative w-full">
        <img
          src="/img/kv-serenshia-01-top.webp"
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
        <PhoneCta gtm="cta_tel_fv" />
        <LineCta gtm="cta_line_fv" top="写真だけでも相談できる" sub="写真なしでもOK｜24時間受付" />
      </div>
      <img
        src="/img/kv-serenshia-01-bottom.webp"
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
