import { PHONE_TEL } from "./McyHeader";
import McyKvContact from "./McyKvContact";
import PhoneHoursNotice from "./PhoneHoursNotice";

/** KV01: original x=120..1002, y=0..904 / 1174..1402; q85 WebP slices. */
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
          width={882}
          height={904}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="block h-auto w-full"
        />
        <a
          href={PHONE_TEL}
          data-gtm="cta_tel_fv_header"
          aria-label="ヘッダーから 03-4400-2098 に電話する"
          className="absolute z-10 block rounded-[10px] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-lux-gold"
          style={{ left: "57.38%", top: "0.78%", width: "31.8%", height: "8.84%" }}
        />
      </div>
      {/* fades from the top slice's sky tone into the near-white of the bottom slice */}
      <div className="mx-[2.5%] flex flex-col gap-2 bg-gradient-to-b from-[#e4f6fd] to-[#f4fbfe] px-[2.7%] py-2">
        <PhoneHoursNotice />
        <McyKvContact tone="phone" gtm="cta_tel_fv" />
        <McyKvContact tone="line" gtm="cta_line_fv" />
      </div>
      <img
        src="/img/kv-serenshia-01-bottom.webp"
        alt="Googleクチコミ5.0（167件）、ご相談実績2,000件以上。どんなお悩みでも、まずはご相談ください。"
        width={882}
        height={228}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
    </section>
  );
}
