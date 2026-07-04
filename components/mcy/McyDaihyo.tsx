import type { ReactNode } from "react";
import { GoldCard } from "./McyLux";

/**
 * 代表メッセージ — placed right after the manga story so the emotional
 * manga read-through (manga-style 太田) is followed by the REAL 代表 太田 photo
 * for trust, before the CTAs. Green×gold to match the KV/body theme.
 * Real photo asset (daihyo_ota.webp, sliced from the approved design card);
 * copy is editable/crawlable. Badges are verified selling points
 * (秘密厳守 / 明朗会計＝追加料金なし / 最後まで＝原状回復まで一貫対応).
 */

const POINTS: readonly { label: string; icon: ReactNode }[] = [
  {
    label: "秘密厳守",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10.5" width="12" height="9" rx="2" />
        <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
        <path d="M12 14v2" />
      </g>
    ),
  },
  {
    label: "明朗会計",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5.5" y="3.5" width="13" height="17" rx="2" />
        <rect x="8" y="6.5" width="8" height="3" rx="0.6" />
        <path d="M8.5 13h.01M12 13h.01M15.5 13h.01M8.5 16.5h.01M12 16.5h.01M15.5 16.5h3" />
      </g>
    ),
  },
  {
    label: "最後まで\nサポート",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20c0-3.3 1.8-5 4.5-5 1 0 1.9.3 3.5 1.2 1.6-.9 2.5-1.2 3.5-1.2 2.7 0 4.5 1.7 4.5 5" />
        <path d="M12 11.5c-2.6-1.6-4-3.1-4-4.8A2.2 2.2 0 0 1 12 5.3a2.2 2.2 0 0 1 4 1.4c0 1.7-1.4 3.2-4 4.8Z" />
      </g>
    ),
  },
];

function GoldFlourish() {
  return (
    <span aria-hidden="true" className="flex items-center justify-center gap-[6px] text-lux-gold-deep">
      <span className="h-px w-[clamp(26px,7vw,42px)] bg-gradient-to-r from-transparent to-lux-gold" />
      <span className="text-[clamp(10px,2.8vw,13px)] leading-none">❧</span>
      <span className="h-px w-[clamp(26px,7vw,42px)] bg-gradient-to-l from-transparent to-lux-gold" />
    </span>
  );
}

export default function McyDaihyo() {
  return (
    <div className="relative mx-auto mt-[clamp(20px,5.4vw,30px)] max-w-[460px]">
      {/* header + portrait */}
      <div className="flex items-stretch gap-[clamp(10px,3vw,16px)]">
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <GoldFlourish />
          <h3 className="mt-[clamp(6px,1.8vw,9px)] text-center font-display text-[clamp(20px,5.6vw,27px)] font-black leading-tight text-lux-green">
            代表 太田<span className="text-[0.7em] text-lux-green-ink">より</span>
          </h3>
          <div className="mt-[clamp(6px,1.8vw,9px)]">
            <GoldFlourish />
          </div>
          <p className="mt-[clamp(10px,2.8vw,14px)] text-[clamp(11.5px,3.2vw,14px)] font-medium leading-[1.9] text-lux-green-ink/90 [word-break:auto-phrase]">
            ご遺族・大家様・管理会社様の不安に寄り添い、最後まで丁寧に対応します。
          </p>
        </div>

        <img
          src="/img/daihyo_ota.webp"
          alt="セレンシア 代表 太田"
          width={416}
          height={645}
          loading="lazy"
          decoding="async"
          className="h-auto w-[clamp(140px,40vw,190px)] shrink-0 self-start drop-shadow-[0_12px_26px_rgba(18,61,40,0.22)]"
        />
      </div>

      {/* three trust points */}
      <div className="mt-[clamp(14px,4vw,20px)] grid grid-cols-3 gap-[clamp(7px,2vw,11px)]">
        {POINTS.map((p) => (
          <GoldCard key={p.label}>
            <div className="flex h-full flex-col items-center px-1 py-[clamp(11px,3vw,15px)] text-center">
              <span className="grid h-[clamp(38px,10.5vw,50px)] w-[clamp(38px,10.5vw,50px)] place-items-center rounded-full bg-gradient-to-br from-lux-green-2 to-lux-green text-white shadow-[0_4px_10px_rgba(18,61,40,0.3)] ring-1 ring-lux-gold/50">
                <svg viewBox="0 0 24 24" className="h-[56%] w-[56%]">
                  {p.icon}
                </svg>
              </span>
              <span className="mt-[7px] whitespace-pre-line text-[clamp(10.5px,3vw,13px)] font-black leading-[1.35] text-lux-green-ink">
                {p.label}
              </span>
            </div>
          </GoldCard>
        ))}
      </div>
    </div>
  );
}
