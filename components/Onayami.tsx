import fs from "node:fs";
import path from "node:path";

/**
 * お悩みセクション — pixel reproduction of the provided mockup.
 * Ivory ground, gold flourish heading, green check circles, and a calm
 * living-room photo blended into the bottom-right corner.
 *
 * Photo asset expected at public/img/onayami_room.jpg (provided by client).
 */

const ROOM = "/img/onayami_room.jpg";

const CONCERNS = [
  "孤独死や事故で、部屋の臭いや汚れがひどく、どうすればいいか分からない",
  "大家・管理会社から、原状回復を急いでほしいと言われている",
  "遠方に住んでいて、立ち会いや片付けができない",
  "費用が心配。追加料金が発生しないか不安",
  "近隣に知られたくない。静かに対応してほしい",
  "どこに相談すればよいか分からず、困っている",
];

function CheckCircle() {
  return (
    <svg viewBox="0 0 24 24" className="mt-[1px] h-5 w-5 shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#1d5138" />
      <path
        d="m7.4 12.2 3 3 6-6.4"
        fill="none"
        stroke="#fff"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GoldFlourish({ flip = false }: Readonly<{ flip?: boolean }>) {
  return (
    <svg
      viewBox="0 0 56 12"
      className={`h-3 w-14 shrink-0 ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M0 6h40" stroke="#c09a4a" strokeWidth="1.2" />
      <path d="M46 1.5 50.5 6 46 10.5 41.5 6z" fill="none" stroke="#c09a4a" strokeWidth="1.2" />
      <circle cx="54" cy="6" r="1.4" fill="#c09a4a" />
    </svg>
  );
}

export default function Onayami() {
  const roomExists = fs.existsSync(
    path.join(process.cwd(), "public", "img", "onayami_room.jpg"),
  );

  return (
    <section className="relative w-full overflow-hidden bg-ivory pb-10 pt-9">
      {/* heading with gold flourishes */}
      <h2 className="flex items-center justify-center gap-2 px-2">
        <GoldFlourish />
        <span className="whitespace-nowrap font-display text-[19px] font-bold tracking-[0.02em] text-forest-950">
          このようなお悩みはありませんか？
        </span>
        <GoldFlourish flip />
      </h2>

      {/* living-room photo blended into bottom-right */}
      <div
        className="absolute -right-4 bottom-0 h-[240px] w-[58%] bg-cover bg-center"
        style={{
          backgroundImage: roomExists ? `url(${ROOM})` : undefined,
          maskImage:
            "linear-gradient(to left, #000 55%, transparent 96%), linear-gradient(to bottom, transparent 0%, #000 40%)",
          WebkitMaskImage:
            "linear-gradient(to left, #000 55%, transparent 96%), linear-gradient(to bottom, transparent 0%, #000 40%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
        aria-hidden="true"
      >
        {!roomExists && (
          <p className="pl-24 pt-40 text-right text-[9px] leading-relaxed text-[#8b8270] opacity-70">
            部屋写真: public/img/onayami_room.jpg
            <br />
            を配置してください
          </p>
        )}
      </div>

      {/* checklist */}
      <ul className="relative z-10 mt-6 flex flex-col gap-[15px] px-4">
        {CONCERNS.map((text) => (
          <li key={text} className="flex items-start gap-2.5">
            <CheckCircle />
            <p
              className="text-[12.5px] font-bold leading-[1.75] text-ink"
              style={{
                textShadow:
                  "0 0 6px #f6f1e6, 0 0 4px #f6f1e6, 0 0 2px #f6f1e6",
              }}
            >
              {text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
