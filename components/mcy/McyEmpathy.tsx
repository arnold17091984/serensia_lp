import { CheckGreen, LeafSprig, LuxHeading, Sparkle } from "./McyLux";
import { LINE_URL } from "./McyHeader";

/**
 * Empathy + reassurance bridge, placed right after the first view. Lowers the
 * psychological barrier to reaching out ("just talking is enough") and answers
 * the unspoken worries of a grieving family / stressed property manager before
 * the story/solution. All copy is live text (crawlable, editable). Service
 * promises only — no performance/superlative claims (景表法 safe).
 */

const REASSURE: readonly string[] = [
  "しつこい営業は一切しません",
  "他社で断られた案件もご相談OK",
  "深夜・早朝の発見もまずLINEで",
  "秘密厳守・近隣に知られず対応",
  "お見積り後の追加料金なし",
  "立ち会い不要・鍵のお預かり可",
];

export default function McyEmpathy() {
  return (
    <section className="lux-rays relative w-full overflow-hidden px-4 py-[clamp(26px,7.5vw,44px)]">
      {/* seamless blend from the KV bottom (warm cream) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[clamp(48px,13vw,86px)] bg-gradient-to-b from-[#f7f5ef] to-transparent"
      />
      <LeafSprig flip className="right-[-8px] top-[8px] h-[clamp(54px,15vw,86px)] w-auto opacity-60" />
      <Sparkle className="left-[7%] top-[clamp(16px,4.6vw,30px)] text-[clamp(11px,3.2vw,16px)] text-lux-gold/80" />

      <div className="relative">
        <LuxHeading kicker="まずはご相談ください" watermark="RELAX">
          「どうすればいい…」と迷ったら、
          <br />
          <span className="text-lux-green">“話すだけ”</span>で大丈夫です
        </LuxHeading>

        <p className="mx-auto mt-[clamp(12px,3.4vw,18px)] max-w-[460px] text-center text-[clamp(12px,3.3vw,14.5px)] font-medium leading-[2] text-lux-green-ink/90 [word-break:auto-phrase]">
          うまく状況を説明できなくても、写真が無くても構いません。専門スタッフがひとつずつ丁寧にお話を伺い、いま取れる最善の方法をご提案します。深夜・早朝に気づかれた場合も、まずはLINEにひと言お送りください。
        </p>

        {/* reassurance chips — answers the unspoken worries */}
        <ul className="mx-auto mt-[clamp(16px,4.4vw,24px)] grid max-w-[500px] grid-cols-1 gap-[8px] min-[420px]:grid-cols-2">
          {REASSURE.map((t) => (
            <li
              key={t}
              className="flex items-center gap-2 rounded-[12px] border border-lux-gold/30 bg-white px-3 py-[10px] shadow-[0_2px_8px_rgba(18,61,40,0.06)]"
            >
              <CheckGreen className="h-[clamp(18px,5vw,22px)] w-[clamp(18px,5vw,22px)]" />
              <span className="text-[clamp(11px,3vw,13.5px)] font-bold leading-[1.5] text-lux-green-ink [word-break:auto-phrase]">
                {t}
              </span>
            </li>
          ))}
        </ul>

        {/* soft, low-pressure entry point */}
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-gtm="cta_line_empathy"
          className="mx-auto mt-[clamp(14px,3.8vw,20px)] block max-w-[460px] py-[10px] text-center text-[clamp(11px,3.1vw,13px)] font-bold text-lux-green-ink underline decoration-lux-gold decoration-2 underline-offset-4 [word-break:auto-phrase]"
        >
          いきなり電話はちょっと…という方へ → まずはLINEで状況をひと言（無料・24時間）
        </a>
      </div>
    </section>
  );
}
