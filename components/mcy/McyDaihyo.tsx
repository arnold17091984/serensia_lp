import { CheckGreen, Sparkle } from "./McyLux";

/**
 * 代表メッセージ — placed right after the manga story so the manga-style read
 * (manga 太田) is followed by the REAL 代表 太田 photo for trust, before the CTAs.
 * Real cutout-free portrait (photo shoot in front of the company truck) in a
 * green×gold card; message + three promises are live text (crawlable for SEO,
 * editable). Copy verified against content.json. 実写のみ（生成人物なし）。
 */

const PROMISES: ReadonlyArray<{ title: string; desc: string }> = [
  { title: "秘密厳守", desc: "ご相談内容は厳重に管理し、外部に漏れることは一切ありません。" },
  { title: "明朗会計", desc: "追加料金なしの明確な料金体系で、事前にご提示します。" },
  { title: "最後までサポート", desc: "ご相談から作業完了後まで、責任を持って最後まで対応いたします。" },
];

export default function McyDaihyo() {
  return (
    <div className="mx-auto mt-[clamp(14px,4vw,22px)] max-w-[472px]">
      <h3 className="sr-only">代表 太田より</h3>

      <div className="relative rounded-[22px] bg-gradient-to-br from-lux-gold-light via-lux-gold to-lux-gold-deep p-[2px] shadow-[0_14px_34px_rgba(18,61,40,0.16)]">
        <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-b from-white to-lux-cream px-[clamp(14px,4vw,20px)] pb-[clamp(16px,4.4vw,22px)] pt-[clamp(14px,3.8vw,20px)]">
          <Sparkle className="right-[12px] top-[10px] text-[clamp(11px,3vw,15px)] text-lux-gold/70" />

          {/* header: real 代表 photo + name plate */}
          <div className="flex items-center gap-[clamp(12px,3.4vw,18px)]">
            <div className="shrink-0 rounded-[16px] bg-gradient-to-br from-lux-gold-light to-lux-gold-deep p-[2px] shadow-[0_8px_20px_rgba(18,61,40,0.22)]">
              <img
                src="/img/daihyo_photo.webp"
                alt="セレンシア 代表 太田 貴也。特殊清掃・遺品整理をご遺族・大家様・管理会社様に寄り添って対応します。"
                width={760}
                height={744}
                loading="lazy"
                decoding="async"
                className="block w-[clamp(112px,31vw,140px)] rounded-[14px] object-cover"
              />
            </div>

            <div className="min-w-0">
              <span className="inline-flex items-center gap-[6px] rounded-full bg-gradient-to-b from-lux-green-2 to-lux-green px-[clamp(11px,3vw,15px)] py-[clamp(4px,1.2vw,6px)] text-[clamp(10px,2.7vw,12px)] font-black tracking-[0.06em] text-white shadow-[0_3px_9px_rgba(18,61,40,0.3)] ring-1 ring-lux-gold/60">
                <span aria-hidden="true" className="text-[clamp(7px,1.9vw,9px)] leading-none text-lux-gold-light">◆</span>
                <span>代表メッセージ</span>
              </span>
              <p className="mt-[clamp(7px,2vw,10px)] text-[clamp(9.5px,2.6vw,11.5px)] font-bold tracking-[0.04em] text-lux-green-ink/70">
                株式会社TAKAKU（セレンシア）代表
              </p>
              <p className="font-display text-[clamp(20px,5.6vw,26px)] font-black leading-tight text-lux-green-ink [text-shadow:0_1px_0_rgba(255,255,255,0.8)]">
                太田 貴也
              </p>
              <p className="mt-[3px] text-[clamp(9px,2.5vw,11px)] font-bold leading-[1.5] text-lux-green-ink/65 [word-break:auto-phrase]">
                事件現場特殊清掃士／認定遺品整理士
              </p>
            </div>
          </div>

          {/* message */}
          <p className="mt-[clamp(12px,3.4vw,16px)] text-[clamp(11.5px,3.2vw,14px)] font-medium leading-[1.95] text-lux-green-ink/90 [word-break:auto-phrase]">
            ご遺族・大家様・管理会社様の不安に寄り添い、最後まで丁寧に対応します。どんな状況でも、まずはご相談ください。まずは代表・太田が直接お話を伺います。
          </p>

          {/* three promises */}
          <ul className="mt-[clamp(12px,3.4vw,16px)] flex flex-col gap-[8px]">
            {PROMISES.map((p) => (
              <li
                key={p.title}
                className="flex items-start gap-[9px] rounded-[12px] border border-lux-gold/25 bg-white px-3 py-[9px] shadow-[0_2px_8px_rgba(18,61,40,0.06)]"
              >
                <CheckGreen className="mt-[1px] h-[clamp(18px,5vw,22px)] w-[clamp(18px,5vw,22px)]" />
                <span className="min-w-0 text-[clamp(10.5px,2.9vw,13px)] leading-[1.6] text-lux-green-ink/85 [word-break:auto-phrase]">
                  <span className="font-black text-lux-green">{p.title}</span>
                  <span className="mx-[5px] text-lux-gold-deep">｜</span>
                  {p.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
