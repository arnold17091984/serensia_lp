import { LINE_URL } from "./McyHeader";
import { LeafSprig, LuxHeading } from "./McyLux";

/**
 * 現場ギャラリー — real special-cleaning site photos (防護服の専門スタッフによる
 * 実作業). Reinforces landing-page relevance & trust with authentic imagery
 * (no stock, no generated people). Placed after the solution/process block as
 * visual proof, before the pricing cases. Privacy: no property/owner-identifying
 * information is shown. Captions are honest process labels (crawlable text).
 */

const SHOTS: ReadonlyArray<{ src: string; caption: string }> = [
  { src: "/img/gallery_1.webp", caption: "腐敗した浴室の汚染除去" },
  { src: "/img/gallery_2.webp", caption: "室内・窓まわりの除菌消毒" },
  { src: "/img/gallery_3.webp", caption: "玄関・床の汚染除去／脱臭" },
  { src: "/img/gallery_4.webp", caption: "汚染した床材・畳の撤去" },
  { src: "/img/gallery_5.webp", caption: "床面の体液除去・特殊洗浄" },
  { src: "/img/gallery_6.webp", caption: "汚染箇所の清掃作業" },
  { src: "/img/gallery_7.webp", caption: "壁面の薬剤噴霧・消毒" },
  { src: "/img/gallery_8.webp", caption: "和室の汚染確認・作業前" },
];

export default function McyGallery() {
  return (
    <section data-section="gallery" className="relative w-full overflow-hidden bg-gradient-to-b from-lux-cream to-lux-cream-2 px-4 py-[clamp(28px,8vw,46px)]">
      {/* layered ground: gold glow + fine dot texture + foliage */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-[130px] top-[8%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(200,162,78,0.16),transparent_65%)]" />
      <div aria-hidden="true" className="lux-dots pointer-events-none absolute inset-0 opacity-50" />
      <LeafSprig className="left-[-10px] top-[clamp(50px,14vw,96px)] h-[clamp(54px,15vw,84px)] w-auto opacity-55" />

      <div className="relative">
        <LuxHeading kicker="実際の現場記録" watermark="GALLERY">
          本物の<span className="text-lux-green">作業実績</span>
        </LuxHeading>
        <p className="mx-auto mt-[clamp(10px,3vw,16px)] max-w-[460px] text-center text-[clamp(11px,3.1vw,13.5px)] font-medium leading-[1.9] text-lux-green-ink/85 [word-break:auto-phrase]">
          実際に対応した特殊清掃の現場です。防護服・専用機材で、汚染の除去から除菌・消臭・原状回復まで一貫して対応します。
        </p>

        <div className="mx-auto mt-[clamp(16px,4.4vw,24px)] grid max-w-[460px] grid-cols-2 gap-[clamp(8px,2.4vw,12px)]">
          {SHOTS.map((s) => (
            <figure
              key={s.src}
              className="group relative overflow-hidden rounded-[14px] border-[3px] border-white shadow-[0_8px_22px_rgba(18,61,40,0.18)] ring-1 ring-lux-gold/35"
            >
              <img
                src={s.src}
                alt={`特殊清掃の作業実績：${s.caption}`}
                width={700}
                height={900}
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover object-center"
              />
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-[#0a2c1b] via-[#0a2c1b]/55 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-[6px] px-[clamp(8px,2.4vw,11px)] pb-[clamp(8px,2.2vw,11px)] pt-6">
                <span aria-hidden="true" className="h-[13px] w-[3px] shrink-0 rounded-full bg-gradient-to-b from-lux-gold-light to-lux-gold-deep" />
                <span className="text-[clamp(9.5px,2.7vw,12px)] font-black leading-[1.4] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.6)] [word-break:auto-phrase]">
                  {s.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mx-auto mt-[clamp(12px,3.2vw,16px)] max-w-[460px] text-center text-[clamp(9px,2.5vw,11px)] font-medium leading-[1.7] text-lux-green-ink/60 [word-break:auto-phrase]">
          ※プライバシー保護のため、物件やご依頼者が特定される情報は一切掲載していません。
        </p>

        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-gtm="cta_line_gallery"
          className="mx-auto mt-[clamp(8px,2.2vw,12px)] block max-w-[460px] py-[12px] text-center text-[clamp(11px,3.1vw,13px)] font-bold text-lux-green-ink underline decoration-lux-gold decoration-2 underline-offset-4 [word-break:auto-phrase]"
        >
          似た状況ですか？ → LINEで写真を送って、いまの状態を相談する<span className="whitespace-nowrap">（無料・24時間）</span>
        </a>
      </div>
    </section>
  );
}
