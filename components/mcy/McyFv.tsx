import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from "./McyHeader";

/**
 * No.33 first view — layered photo background (blurred room + white veil +
 * turquoise side glows), 3D folded area ribbon, navy mincho headline with
 * turquoise/gold keywords, glossy dual CTA pills (gold hairline frame +
 * white circle arrow), gold-laurel benefit medallions with turquoise icons,
 * and a glass proof panel.
 * 人物は生成しない（No.33規範）— モチーフは実写の建築・室内写真。
 */

const BENEFITS = [
  { top: "相談・見積り", main: "無料", icon: "doc" },
  { top: "追加料金", main: "なし", icon: "yen" },
  { top: "立ち会い", main: "不要", icon: "clock" },
  { top: "近隣配慮", main: "秘密厳守", icon: "shield" },
] as const;

type BenefitIconKind = (typeof BENEFITS)[number]["icon"];

function Laurel({ flip = false }: Readonly<{ flip?: boolean }>) {
  return (
    <svg
      viewBox="0 0 30 60"
      className={`h-full w-auto ${flip ? "-scale-x-100" : ""}`}
      fill="url(#mcyFvGold)"
      aria-hidden="true"
    >
      <path d="M22 58C11 51 7 39 10 27 7 39 12 51 22 58Z" />
      <path d="M10 43c3.6-.9 6.4.6 7.8 3.7-3.6.9-6.5-.4-7.8-3.7ZM9.6 34.5c3.4-.5 6.1 1.4 7 4.6-3.4.2-6.1-1.5-7-4.6ZM10.6 26c3 0 5.5 2 6.1 5.1-3-.2-5.4-2-6.1-5.1ZM12.5 18.5c2.7.7 4.5 2.8 4.5 5.8-2.7-.8-4.3-2.9-4.5-5.8ZM15.8 12c2.2 1.2 3.2 3.4 2.7 6.3-2.2-1.4-3-3.6-2.7-6.3Z" />
    </svg>
  );
}

function BenefitIcon({ kind }: Readonly<{ kind: BenefitIconKind }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[62%] w-[62%]"
      fill="none"
      stroke="#fff"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {kind === "doc" && (
        <>
          <path d="M7.5 3.5h6l3.5 3.5v13.5h-9.5z" />
          <path d="M13.5 3.5V7H17" />
          <path d="M10 11.5h4.5M10 14.5h4.5" />
        </>
      )}
      {kind === "yen" && (
        <path d="M8.5 5.5 12 11l3.5-5.5M12 11v7M9 13.5h6M9 16.5h6" />
      )}
      {kind === "clock" && (
        <>
          <circle cx="12" cy="12" r="7.5" />
          <path d="M12 8v4.4l3 1.8" />
        </>
      )}
      {kind === "shield" && (
        <>
          <path d="M12 3.5 18.5 6v5.2c0 4.3-2.8 7.4-6.5 9-3.7-1.6-6.5-4.7-6.5-9V6z" />
          <path d="m9.5 11.6 1.9 1.9 3.4-3.6" />
        </>
      )}
    </svg>
  );
}

function Sparkle({ className }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0c.8 6.4 4.8 10.4 12 12-7.2 1.6-11.2 5.6-12 12-.8-6.4-4.8-10.4-12-12C7.2 10.4 11.2 6.4 12 0Z" />
    </svg>
  );
}

function CtaArrow({ color }: Readonly<{ color: string }>) {
  return (
    <span className="grid h-[clamp(22px,6vw,30px)] w-[clamp(22px,6vw,30px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
      <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" aria-hidden="true">
        <path
          d="m9.5 5.5 6.5 6.5-6.5 6.5"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function McyFv() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* shared gold gradient for laurels */}
      <svg aria-hidden="true" focusable="false" className="absolute h-0 w-0">
        <defs>
          <linearGradient id="mcyFvGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e6cd8d" />
            <stop offset="0.5" stopColor="#c9a24f" />
            <stop offset="1" stopColor="#a5813a" />
          </linearGradient>
        </defs>
      </svg>

      {/* layered background: blurred room photo → white veil → turquoise side glows → dot texture */}
      <div
        aria-hidden
        className="absolute inset-0 scale-110 bg-[url(/img/kv_room.jpg)] bg-cover bg-center blur-[6px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/85 to-mcy-sky/95"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(43,199,205,0.22),rgba(255,255,255,0)_20%,rgba(255,255,255,0)_80%,rgba(43,199,205,0.22))]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(18,165,171,0.16)_1px,transparent_1.4px)] [background-size:18px_18px]"
      />
      <Sparkle className="absolute right-[clamp(12px,4vw,26px)] top-[clamp(88px,24vw,132px)] h-[clamp(13px,3.6vw,18px)] w-[clamp(13px,3.6vw,18px)] text-mcy-turq-bright/50" />

      <div className="relative">
        {/* 3D folded area ribbon */}
        <div className="flex justify-center pt-[clamp(16px,4.4vw,24px)]">
          <div className="relative drop-shadow-[0_6px_12px_rgba(11,127,133,0.3)]">
            {/* dovetail tails (behind the band, offset down) */}
            <span
              aria-hidden
              className="absolute -left-[clamp(14px,4vw,20px)] top-[clamp(5px,1.5vw,8px)] h-full w-[clamp(22px,6vw,32px)] bg-gradient-to-b from-mcy-turq to-mcy-turq-deep [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,38%_50%)]"
            />
            <span
              aria-hidden
              className="absolute -right-[clamp(14px,4vw,20px)] top-[clamp(5px,1.5vw,8px)] h-full w-[clamp(22px,6vw,32px)] bg-gradient-to-b from-mcy-turq to-mcy-turq-deep [clip-path:polygon(0_0,100%_0,62%_50%,100%_100%,0_100%)]"
            />
            {/* fold shadows under the band corners */}
            <span
              aria-hidden
              className="absolute left-0 top-full h-[clamp(5px,1.5vw,8px)] w-[clamp(7px,2vw,11px)] bg-[#06575c] [clip-path:polygon(0_0,100%_0,100%_100%)]"
            />
            <span
              aria-hidden
              className="absolute right-0 top-full h-[clamp(5px,1.5vw,8px)] w-[clamp(7px,2vw,11px)] bg-[#06575c] [clip-path:polygon(0_0,100%_0,0_100%)]"
            />
            {/* main band */}
            <div className="relative overflow-hidden bg-gradient-to-b from-mcy-turq-bright via-mcy-turq to-mcy-turq-deep px-[clamp(20px,6vw,34px)] py-[clamp(7px,2vw,11px)] text-white">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent"
              />
              <span className="relative text-[clamp(13px,3.7vw,18px)] font-black tracking-[0.04em]">
                東京・神奈川 全域対応
              </span>
            </div>
          </div>
        </div>

        {/* headline */}
        <div className="relative px-4 pt-[clamp(14px,4vw,22px)] text-center">
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[clamp(2px,0.8vw,6px)] -translate-x-1/2 select-none whitespace-nowrap font-display text-[clamp(46px,13vw,74px)] font-black italic leading-none text-mcy-turq/[0.08]"
          >
            Special Clean
          </span>
          <p className="relative font-display text-[clamp(17px,4.9vw,25px)] font-bold leading-snug tracking-[0.02em] text-mcy-navy">
            孤独死・事故現場の
          </p>
          <h1 className="relative mt-[clamp(4px,1.2vw,8px)] flex items-center justify-center gap-[clamp(5px,1.5vw,9px)]">
            <span className="font-display text-[clamp(42px,12vw,64px)] font-black leading-[1.02] tracking-[-0.01em] text-mcy-turq-deep drop-shadow-[0_3px_6px_rgba(11,127,133,0.18)]">
              特殊清掃
            </span>
            <span className="grid h-[clamp(30px,8.5vw,46px)] shrink-0 place-items-center rounded-[6px] bg-gradient-to-b from-mcy-navy to-mcy-navy-deep px-[clamp(5px,1.6vw,9px)] font-display text-[clamp(16px,4.6vw,26px)] font-black leading-none text-white shadow-[0_5px_12px_rgba(18,41,63,0.4)] ring-1 ring-white/40">
              専門
            </span>
          </h1>
          <p className="relative mt-[clamp(10px,3vw,16px)] font-display font-black leading-[1.2]">
            <span className="text-[clamp(26px,7.6vw,42px)] tracking-[-0.02em] text-mcy-navy">
              臭い・体液汚染を
            </span>
            <br />
            <span className="text-[clamp(24px,7vw,38px)] tracking-[-0.02em] text-mcy-navy">
              最短<span className="mx-[0.06em] border-b-[3px] border-mcy-gold text-[1.25em] text-mcy-turq-deep">即日</span>で現地確認
            </span>
          </p>
          {/* gold ―◆― divider */}
          <div
            aria-hidden
            className="mt-[clamp(10px,3vw,16px)] flex items-center justify-center gap-[clamp(8px,2.4vw,12px)]"
          >
            <span className="h-px w-[clamp(36px,11vw,64px)] bg-gradient-to-r from-transparent to-mcy-gold" />
            <span className="h-[7px] w-[7px] rotate-45 bg-mcy-gold shadow-[0_1px_2px_rgba(165,129,58,0.5)]" />
            <span className="h-px w-[clamp(36px,11vw,64px)] bg-gradient-to-l from-transparent to-mcy-gold" />
          </div>
          <p className="relative mx-auto mt-[clamp(8px,2.4vw,14px)] max-w-[430px] text-[clamp(12px,3.3vw,15px)] font-bold leading-[1.9] text-mcy-navy/90">
            強い腐敗臭・体液汚染・害虫の発生まで
            <br />
            原因を特定し、<span className="text-mcy-turq-deep">根本から解決</span>します。
          </p>
        </div>

        {/* room photo card (人物なし・実写素材) — white frame + deep shadow + gold sparkle */}
        <div className="mt-[clamp(14px,4vw,22px)] px-4">
          <div className="relative rounded-[18px] bg-white p-[clamp(5px,1.4vw,8px)] shadow-[0_16px_36px_rgba(18,58,92,0.22)] ring-1 ring-mcy-navy/5">
            <img
              src="/img/kv_room.jpg"
              alt="原状回復後の清潔で明るい室内"
              width={1448}
              height={1086}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-[clamp(130px,36vw,190px)] w-full rounded-[12px] object-cover"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-[clamp(5px,1.4vw,8px)] rounded-[12px] ring-1 ring-white/60"
            />
            <Sparkle className="absolute -left-[7px] -top-[10px] h-[clamp(18px,5vw,26px)] w-[clamp(18px,5vw,26px)] text-mcy-gold drop-shadow-[0_1px_2px_rgba(165,129,58,0.45)]" />
            <Sparkle className="absolute left-[clamp(14px,4vw,20px)] -top-[2px] h-[clamp(8px,2.2vw,12px)] w-[clamp(8px,2.2vw,12px)] text-mcy-gold/70" />
          </div>
        </div>

        {/* dual CTA — glossy pills in gold hairline frames */}
        <div className="mt-[clamp(16px,4.6vw,24px)] grid grid-cols-1 gap-[clamp(10px,2.8vw,14px)] px-4">
          <div className="rounded-full bg-gradient-to-b from-[#e9d59c] via-mcy-gold to-mcy-gold-deep p-[2px] shadow-[0_10px_24px_rgba(11,143,150,0.45)]">
            <a
              href={PHONE_TEL}
              data-gtm="cta_tel_fv"
              className="relative flex items-center justify-center gap-[clamp(6px,1.8vw,10px)] overflow-hidden rounded-full border-2 border-white/75 bg-gradient-to-b from-mcy-turq-bright via-mcy-turq to-mcy-turq-deep px-[clamp(12px,3.4vw,18px)] py-[clamp(11px,3.2vw,16px)] text-white transition-[filter] active:brightness-90"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-[6%] top-[3px] h-[46%] rounded-full bg-gradient-to-b from-white/40 to-transparent"
              />
              <span className="grid h-[clamp(30px,8.4vw,44px)] w-[clamp(30px,8.4vw,44px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_5px_rgba(0,0,0,0.18)]">
                <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" fill="#0b7f85" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              <span className="relative min-w-0 text-center leading-none">
                <span className="block whitespace-nowrap text-[clamp(10px,2.8vw,14px)] font-black">
                  電話で今すぐ相談する
                </span>
                <span className="mt-[5px] block whitespace-nowrap text-[clamp(21px,6vw,30px)] font-black tracking-[-0.01em] drop-shadow-[0_2px_3px_rgba(7,80,84,0.35)]">
                  {PHONE_DISPLAY}
                </span>
                <span className="mt-[4px] block whitespace-nowrap text-[clamp(8px,2.2vw,11px)] font-bold opacity-95">
                  受付時間 9:00〜21:00 / 年中無休
                </span>
              </span>
              <CtaArrow color="#0b7f85" />
            </a>
          </div>
          <div className="rounded-full bg-gradient-to-b from-[#e9d59c] via-mcy-gold to-mcy-gold-deep p-[2px] shadow-[0_10px_24px_rgba(6,163,42,0.35)]">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-gtm="cta_line_fv"
              className="relative flex items-center justify-center gap-[clamp(6px,1.8vw,10px)] overflow-hidden rounded-full border-2 border-white/75 bg-gradient-to-b from-[#25d94e] to-[#06a32a] px-[clamp(12px,3.4vw,18px)] py-[clamp(11px,3.2vw,16px)] text-white transition-[filter] active:brightness-90"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-[6%] top-[3px] h-[46%] rounded-full bg-gradient-to-b from-white/40 to-transparent"
              />
              <span className="grid h-[clamp(30px,8.4vw,44px)] w-[clamp(30px,8.4vw,44px)] shrink-0 place-items-center rounded-full bg-white text-[clamp(7px,2vw,10px)] font-black text-[#06a32a] shadow-[0_2px_5px_rgba(0,0,0,0.18)]">
                LINE
              </span>
              <span className="relative min-w-0 text-center leading-none">
                <span className="block whitespace-nowrap text-[clamp(10px,2.8vw,14px)] font-black">
                  LINEで写真を送るだけ
                </span>
                <span className="mt-[5px] block whitespace-nowrap text-[clamp(16px,4.6vw,23px)] font-black drop-shadow-[0_2px_3px_rgba(4,90,26,0.35)]">
                  写真相談・概算見積り
                </span>
                <span className="mt-[4px] block whitespace-nowrap text-[clamp(8px,2.2vw,11px)] font-bold opacity-95">
                  簡単・安心・すぐにご回答します｜24時間受付
                </span>
              </span>
              <CtaArrow color="#06a32a" />
            </a>
          </div>
        </div>

        {/* gold laurel benefit medallions — turquoise icon + ★★★ */}
        <div className="mt-[clamp(18px,5vw,28px)] grid grid-cols-4 gap-[clamp(4px,1.4vw,8px)] px-3">
          {BENEFITS.map((b) => (
            <div key={b.main} className="flex flex-col items-center">
              <div className="flex h-[clamp(64px,17.5vw,90px)] items-center justify-center gap-[2px]">
                <Laurel />
                <div className="flex w-[clamp(46px,12.5vw,64px)] flex-col items-center justify-center gap-[clamp(2px,0.7vw,4px)]">
                  <span className="grid h-[clamp(20px,5.6vw,28px)] w-[clamp(20px,5.6vw,28px)] place-items-center rounded-full bg-gradient-to-b from-mcy-turq-bright to-mcy-turq-deep shadow-[0_2px_6px_rgba(11,127,133,0.4)] ring-1 ring-white/70">
                    <BenefitIcon kind={b.icon} />
                  </span>
                  <span className="whitespace-nowrap text-[clamp(6.5px,1.8vw,9px)] font-bold leading-tight text-mcy-navy">
                    {b.top}
                  </span>
                  <span className="whitespace-nowrap text-[clamp(10px,2.9vw,14.5px)] font-black leading-none text-mcy-turq-deep">
                    {b.main}
                  </span>
                </div>
                <Laurel flip />
              </div>
              <span className="mt-[2px] text-[clamp(7px,2vw,10px)] tracking-[0.2em] text-mcy-gold [text-shadow:0_1px_1px_rgba(165,129,58,0.35)]">
                ★★★
              </span>
            </div>
          ))}
        </div>

        {/* proof panel — glass card with gold hairline */}
        <div className="mt-[clamp(14px,4vw,22px)] px-4 pb-[clamp(20px,5.6vw,30px)]">
          <div className="relative overflow-hidden rounded-[18px] border border-white/80 bg-white/75 shadow-[0_14px_32px_rgba(18,58,92,0.18)] backdrop-blur-md">
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-mcy-gold-light via-mcy-gold to-mcy-gold-light"
            />
            <div className="grid grid-cols-2">
              <div className="px-2 py-[clamp(12px,3.4vw,18px)] text-center">
                <p className="flex justify-center leading-none">
                  <span className="inline-flex items-center whitespace-nowrap rounded-full bg-white px-[clamp(8px,2.4vw,12px)] py-[5px] text-[clamp(10px,2.9vw,14px)] font-bold leading-none shadow-[0_2px_6px_rgba(18,58,92,0.12)] ring-1 ring-mcy-turq/15">
                    <span className="font-black">
                      <span className="text-[#4285f4]">G</span>
                      <span className="text-[#ea4335]">o</span>
                      <span className="text-[#fbbc05]">o</span>
                      <span className="text-[#4285f4]">g</span>
                      <span className="text-[#34a853]">l</span>
                      <span className="text-[#ea4335]">e</span>
                    </span>
                    <span className="ml-1 text-mcy-navy">クチコミ高評価</span>
                  </span>
                </p>
                <p className="mt-[8px] flex items-center justify-center gap-1 leading-none">
                  <span className="text-[clamp(12px,3.6vw,18px)] tracking-[0.04em] text-mcy-gold">
                    ★★★★★
                  </span>
                  <span className="font-display text-[clamp(19px,5.6vw,28px)] font-black text-mcy-turq-deep">
                    4.9
                  </span>
                  <span className="text-[clamp(8px,2.4vw,12px)] font-bold text-mcy-navy">
                    /5.0
                  </span>
                </p>
                <p className="mt-[8px] text-[clamp(8.5px,2.5vw,12px)] font-black text-mcy-navy">
                  <span className="mr-1 rounded-full bg-gradient-to-b from-mcy-turq-bright to-mcy-turq-deep px-[8px] py-[3px] text-white shadow-[0_2px_4px_rgba(11,127,133,0.3)]">クチコミ</span>120件以上
                </p>
              </div>
              <div className="border-l border-mcy-navy/10 px-2 py-[clamp(12px,3.4vw,18px)] text-center">
                <p className="text-[clamp(10px,2.9vw,14px)] font-black leading-none text-mcy-navy">
                  ご相談実績
                </p>
                <p className="mt-[8px] leading-none">
                  <span className="font-display text-[clamp(24px,7vw,36px)] font-black text-mcy-turq-deep">
                    2,000
                  </span>
                  <span className="text-[clamp(10px,3vw,15px)] font-black text-mcy-navy">
                    件以上
                  </span>
                </p>
                <p className="mt-[8px] text-[clamp(7px,2vw,10px)] font-bold leading-[1.5] text-mcy-navy/80">
                  ご遺族・大家様・管理会社様から
                  <br />
                  多くご相談いただいています
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
