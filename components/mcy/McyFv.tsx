import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from "./McyHeader";

/**
 * No.33 first view — white ground, turquoise angled kicker ribbon,
 * navy mincho headline with turquoise/gold keywords, dual CTA,
 * gold-laurel benefit medallions, and the proof panel.
 * 人物は生成しない（No.33規範）— モチーフは実写の建築・室内写真。
 */

const BENEFITS = [
  { top: "相談・見積り", main: "無料" },
  { top: "追加料金", main: "なし" },
  { top: "立ち会い", main: "不要" },
  { top: "近隣配慮", main: "秘密厳守" },
];

function Laurel({ flip = false }: Readonly<{ flip?: boolean }>) {
  return (
    <svg
      viewBox="0 0 30 60"
      className={`h-full w-auto ${flip ? "-scale-x-100" : ""}`}
      fill="#c9a24f"
      aria-hidden="true"
    >
      <path d="M22 58C11 51 7 39 10 27 7 39 12 51 22 58Z" />
      <path d="M10 43c3.6-.9 6.4.6 7.8 3.7-3.6.9-6.5-.4-7.8-3.7ZM9.6 34.5c3.4-.5 6.1 1.4 7 4.6-3.4.2-6.1-1.5-7-4.6ZM10.6 26c3 0 5.5 2 6.1 5.1-3-.2-5.4-2-6.1-5.1ZM12.5 18.5c2.7.7 4.5 2.8 4.5 5.8-2.7-.8-4.3-2.9-4.5-5.8ZM15.8 12c2.2 1.2 3.2 3.4 2.7 6.3-2.2-1.4-3-3.6-2.7-6.3Z" />
    </svg>
  );
}

export default function McyFv() {
  return (
    <section className="w-full bg-white">
      {/* angled turquoise kicker ribbon */}
      <div className="pt-[clamp(10px,3vw,16px)]">
        <div className="inline-flex items-center bg-gradient-to-r from-mcy-turq to-mcy-turq-deep py-[clamp(6px,1.8vw,10px)] pl-[clamp(14px,4.4vw,24px)] pr-[clamp(20px,6.5vw,38px)] text-white shadow-[0_2px_6px_rgba(11,127,133,0.25)] [clip-path:polygon(0_0,100%_0,92%_100%,0_100%)]">
          <span className="text-[clamp(13px,3.7vw,18px)] font-black tracking-[0.04em]">
            東京・神奈川 全域対応
          </span>
        </div>
      </div>

      {/* headline */}
      <div className="px-4 pt-[clamp(12px,3.6vw,20px)] text-center">
        <p className="font-display text-[clamp(17px,4.9vw,25px)] font-bold leading-snug tracking-[0.02em] text-mcy-navy">
          孤独死・事故現場の
        </p>
        <h1 className="mt-[clamp(4px,1.2vw,8px)] flex items-center justify-center gap-[clamp(5px,1.5vw,9px)]">
          <span className="font-display text-[clamp(42px,12vw,64px)] font-black leading-[1.02] tracking-[-0.01em] text-mcy-turq-deep">
            特殊清掃
          </span>
          <span className="grid h-[clamp(30px,8.5vw,46px)] shrink-0 place-items-center rounded-[4px] bg-mcy-navy px-[clamp(5px,1.6vw,9px)] font-display text-[clamp(16px,4.6vw,26px)] font-black leading-none text-white shadow-[2px_2px_0_rgba(27,58,92,0.25)]">
            専門
          </span>
        </h1>
        <p className="mt-[clamp(10px,3vw,16px)] font-display font-black leading-[1.2]">
          <span className="text-[clamp(26px,7.6vw,42px)] tracking-[-0.02em] text-mcy-navy">
            臭い・体液汚染を
          </span>
          <br />
          <span className="text-[clamp(24px,7vw,38px)] tracking-[-0.02em] text-mcy-navy">
            最短
            <span className="mx-[0.06em] border-b-[3px] border-mcy-gold text-[1.25em] text-mcy-turq-deep">
              即日
            </span>
            で現地確認
          </span>
        </p>
        <p className="mx-auto mt-[clamp(10px,3vw,16px)] max-w-[430px] text-[clamp(12px,3.3vw,15px)] font-bold leading-[1.9] text-mcy-navy/90">
          強い腐敗臭・体液汚染・害虫の発生まで
          <br />
          原因を特定し、<span className="text-mcy-turq-deep">根本から解決</span>します。
        </p>
      </div>

      {/* room photo strip (人物なし・実写素材) */}
      <div className="mt-[clamp(12px,3.6vw,20px)] px-4">
        <img
          src="/img/kv_room.jpg"
          alt="原状回復後の清潔で明るい室内"
          width={1448}
          height={1086}
          fetchPriority="high"
          className="h-[clamp(120px,34vw,180px)] w-full rounded-[12px] border-2 border-mcy-gold/40 object-cover shadow-[0_4px_14px_rgba(27,58,92,0.14)]"
        />
      </div>

      {/* dual CTA */}
      <div className="mt-[clamp(14px,4vw,22px)] grid grid-cols-1 gap-[clamp(8px,2.4vw,12px)] px-4">
        <a
          href={PHONE_TEL}
          data-gtm="cta_tel_fv"
          className="relative flex items-center justify-center gap-[clamp(6px,1.8vw,10px)] rounded-full border-2 border-mcy-gold/70 bg-gradient-to-b from-[#19b8be] via-mcy-turq to-mcy-turq-deep px-5 py-[clamp(10px,3vw,15px)] text-white shadow-[0_4px_12px_rgba(11,127,133,0.4)] transition-[filter] active:brightness-90"
        >
          <span className="grid h-[clamp(30px,8.4vw,44px)] w-[clamp(30px,8.4vw,44px)] shrink-0 place-items-center rounded-full bg-white">
            <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" fill="#0b7f85" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </span>
          <span className="min-w-0 text-center leading-none">
            <span className="block whitespace-nowrap text-[clamp(10px,2.8vw,14px)] font-black">
              電話で今すぐ相談する
            </span>
            <span className="mt-[5px] block whitespace-nowrap text-[clamp(21px,6vw,30px)] font-black tracking-[-0.01em]">
              {PHONE_DISPLAY}
            </span>
            <span className="mt-[4px] block whitespace-nowrap text-[clamp(8px,2.2vw,11px)] font-bold opacity-95">
              受付時間 9:00〜21:00 / 年中無休
            </span>
          </span>
          <svg viewBox="0 0 24 24" className="h-[clamp(14px,4vw,20px)] w-[clamp(14px,4vw,20px)] shrink-0" aria-hidden="true">
            <path d="m9 5.5 7 6.5-7 6.5" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-gtm="cta_line_fv"
          className="relative flex items-center justify-center gap-[clamp(6px,1.8vw,10px)] rounded-full border-2 border-mcy-gold/70 bg-gradient-to-b from-[#25d94e] to-[#06a32a] px-5 py-[clamp(10px,3vw,15px)] text-white shadow-[0_4px_12px_rgba(6,163,42,0.35)] transition-[filter] active:brightness-90"
        >
          <span className="grid h-[clamp(30px,8.4vw,44px)] w-[clamp(30px,8.4vw,44px)] shrink-0 place-items-center rounded-full bg-white text-[clamp(7px,2vw,10px)] font-black text-[#06a32a]">
            LINE
          </span>
          <span className="min-w-0 text-center leading-none">
            <span className="block whitespace-nowrap text-[clamp(10px,2.8vw,14px)] font-black">
              LINEで写真を送るだけ
            </span>
            <span className="mt-[5px] block whitespace-nowrap text-[clamp(16px,4.6vw,23px)] font-black">
              写真相談・概算見積り
            </span>
            <span className="mt-[4px] block whitespace-nowrap text-[clamp(8px,2.2vw,11px)] font-bold opacity-95">
              簡単・安心・すぐにご回答します｜24時間受付
            </span>
          </span>
          <svg viewBox="0 0 24 24" className="h-[clamp(14px,4vw,20px)] w-[clamp(14px,4vw,20px)] shrink-0" aria-hidden="true">
            <path d="m9 5.5 7 6.5-7 6.5" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* gold laurel benefit medallions */}
      <div className="mt-[clamp(16px,4.6vw,24px)] grid grid-cols-4 gap-[clamp(4px,1.4vw,8px)] px-3">
        {BENEFITS.map((b) => (
          <div key={b.main} className="flex flex-col items-center">
            <div className="flex h-[clamp(58px,16vw,84px)] items-center justify-center gap-[2px]">
              <Laurel />
              <div className="flex h-[clamp(46px,13vw,68px)] w-[clamp(46px,13vw,68px)] flex-col items-center justify-center rounded-full border-2 border-mcy-gold/70 bg-mcy-turq-light text-center">
                <span className="text-[clamp(6.5px,1.8vw,9px)] font-bold leading-tight text-mcy-navy">
                  {b.top}
                </span>
                <span className="text-[clamp(10px,2.9vw,15px)] font-black leading-tight text-mcy-turq-deep">
                  {b.main}
                </span>
              </div>
              <Laurel flip />
            </div>
            <span className="mt-[2px] text-[clamp(7px,2vw,10px)] tracking-[0.2em] text-mcy-gold">
              ★★★
            </span>
          </div>
        ))}
      </div>

      {/* proof panel */}
      <div className="mt-[clamp(12px,3.4vw,18px)] px-4 pb-[clamp(16px,4.6vw,24px)]">
        <div className="grid grid-cols-2 overflow-hidden rounded-[12px] border-2 border-mcy-gold/50 bg-white shadow-[0_2px_10px_rgba(27,58,92,0.1)]">
          <div className="px-2 py-[clamp(10px,3vw,15px)] text-center">
            <p className="text-[clamp(10px,2.9vw,14px)] font-bold leading-none">
              <span className="font-black">
                <span className="text-[#4285f4]">G</span>
                <span className="text-[#ea4335]">o</span>
                <span className="text-[#fbbc05]">o</span>
                <span className="text-[#4285f4]">g</span>
                <span className="text-[#34a853]">l</span>
                <span className="text-[#ea4335]">e</span>
              </span>
              <span className="ml-1 text-mcy-navy">クチコミ高評価</span>
            </p>
            <p className="mt-[6px] flex items-center justify-center gap-1 leading-none">
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
            <p className="mt-[6px] text-[clamp(8.5px,2.5vw,12px)] font-black text-mcy-navy">
              <span className="mr-1 rounded-[4px] bg-mcy-turq px-[7px] py-[3px] text-white">
                クチコミ
              </span>
              120件以上
            </p>
          </div>
          <div className="border-l border-mcy-gold/40 px-2 py-[clamp(10px,3vw,15px)] text-center">
            <p className="text-[clamp(10px,2.9vw,14px)] font-black leading-none text-mcy-navy">
              ご相談実績
            </p>
            <p className="mt-[6px] leading-none">
              <span className="font-display text-[clamp(24px,7vw,36px)] font-black text-mcy-turq-deep">
                2,000
              </span>
              <span className="text-[clamp(10px,3vw,15px)] font-black text-mcy-navy">
                件以上
              </span>
            </p>
            <p className="mt-[6px] text-[clamp(7px,2vw,10px)] font-bold leading-[1.5] text-mcy-navy/80">
              ご遺族・大家様・管理会社様から
              <br />
              多くご相談いただいています
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
