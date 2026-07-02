/**
 * お悩み section — faithful reproduction of the client KV worries block.
 * Cream card, dark ribbon heading (お悩み in yellow), 6 green-check items,
 * room photo, and a clipped yellow reassurance note.
 */

type Seg = { text: string; em?: boolean };

const CONCERNS: Seg[][] = [
  [{ text: "部屋に入れない", em: true }, { text: "ほど臭いが強い" }],
  [{ text: "孤独死・事故現場", em: true }, { text: "で何から始めればいいか分からない" }],
  [{ text: "遠方", em: true }, { text: "で立ち会えない" }],
  [{ text: "近隣に知られず" }, { text: "静かに対応", em: true }, { text: "してほしい" }],
  [{ text: "大家・管理会社から" }, { text: "急ぎ", em: true }, { text: "で対応を求められている" }],
  [{ text: "費用がどれくらいか不安" }],
];

function Check() {
  return (
    <span
      aria-hidden="true"
      className="mt-[2px] grid h-[clamp(15px,4.2vw,20px)] w-[clamp(15px,4.2vw,20px)] shrink-0 place-items-center rounded-full bg-kv-green text-[clamp(9px,2.6vw,12px)] font-black text-white"
    >
      ✓
    </span>
  );
}

export default function Onayami() {
  return (
    <section className="w-full bg-kv-bg px-3 pb-8 pt-2">
      <div className="overflow-hidden rounded-[12px] border border-kv-gold/60 bg-kv-cream shadow-[0_2px_10px_rgba(0,0,0,0.18)]">
        {/* dark ribbon heading */}
        <div className="bg-gradient-to-r from-kv-green-deep to-[#0b6d3a] py-[clamp(7px,2.2vw,12px)] pl-[clamp(12px,4vw,22px)] pr-[clamp(18px,6vw,40px)] [clip-path:polygon(0_0,100%_0,94%_100%,0_100%)]">
          <h2 className="text-[clamp(15px,4.4vw,23px)] font-black tracking-[0.02em] text-white">
            こんな<span className="text-kv-yellow">お悩み</span>をすべて解決します！
          </h2>
        </div>

        <div className="relative px-[clamp(10px,3.2vw,18px)] pb-[clamp(10px,3vw,16px)] pt-[clamp(10px,3vw,16px)]">
          {/* checklist */}
          <ul className="flex w-[62%] flex-col gap-[clamp(6px,2vw,11px)]">
            {CONCERNS.map((segs) => (
              <li key={segs.map((s) => s.text).join("")} className="flex items-start gap-2">
                <Check />
                <p className="text-[clamp(10.5px,3vw,14px)] font-bold leading-[1.3] text-ink [word-break:auto-phrase]">
                  {segs.map((s) =>
                    s.em ? (
                      <span key={s.text} className="text-kv-red">
                        {s.text}
                      </span>
                    ) : (
                      <span key={s.text}>{s.text}</span>
                    ),
                  )}
                </p>
              </li>
            ))}
          </ul>

          {/* room photo */}
          <img
            src="/img/kv_room.jpg"
            alt="清潔で明るい室内イメージ"
            width={329}
            height={244}
            loading="lazy"
            decoding="async"
            className="absolute right-0 top-0 h-auto w-[38%] rounded-bl-[10px] object-cover"
          />

          {/* yellow reassurance note */}
          <p className="mt-[clamp(8px,2.5vw,14px)] ml-auto w-[70%] bg-gradient-to-br from-[#fff2a8] to-[#e9c45d] px-[clamp(8px,2.6vw,14px)] py-[clamp(7px,2.2vw,11px)] text-center text-[clamp(10px,2.9vw,13.5px)] font-black leading-[1.4] text-ink [clip-path:polygon(8%_0,100%_0,100%_100%,0_100%)]">
            どんな状況でも、まずはご相談ください。
            <br />
            専門スタッフが丁寧に対応します。
          </p>
        </div>
      </div>
    </section>
  );
}
