/**
 * Hero — faithful reproduction of the client KV (kv_reference.png).
 * LIGHT / bright key visual: green-foliage background, black+green outlined
 * headline, red accents, teal phone CTA, gold laurel proof — NOT a dark theme.
 * Built responsively (normal-flow text + one decorative portrait cutout).
 */

const PHONE = "tel:0344002098";
const LINE = "https://page.line.me/782qjphg";

/* white outline used on the big headline over the bright foliage */
const OUTLINE_WHITE =
  "2px 2px 0 #fff, -2px 2px 0 #fff, 2px -2px 0 #fff, -2px -2px 0 #fff, 0 2px 0 #fff, 2px 0 0 #fff, 0 -2px 0 #fff, -2px 0 0 #fff, 0 4px 7px rgba(0,0,0,0.16)";
const OUTLINE_SM =
  "1.5px 1.5px 0 #fff, -1.5px 1.5px 0 #fff, 1.5px -1.5px 0 #fff, -1.5px -1.5px 0 #fff, 0 2px 4px rgba(0,0,0,0.12)";

/* ---- benefit icons (dark-green line) ---- */
function IcoDoc() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" fill="none" stroke="#0a7a30" strokeWidth="3.2" aria-hidden="true">
      <path d="M14 6h26l10 10v42H14z" strokeLinejoin="round" />
      <path d="M40 6v10h10M22 28h20M22 37h20M22 46h13" strokeLinecap="round" />
    </svg>
  );
}
function IcoYen() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" fill="none" stroke="#0a7a30" strokeWidth="3.2" aria-hidden="true">
      <circle cx="32" cy="32" r="25" />
      <path d="M22 20l10 15 10-15M22 39h20M22 46h20M32 35v17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IcoPerson() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" fill="#0a7a30" aria-hidden="true">
      <circle cx="32" cy="21" r="12" />
      <path d="M11 57c1-13 10-21 21-21s20 8 21 21H11Z" />
    </svg>
  );
}
function IcoLock() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" fill="none" stroke="#0a7a30" strokeWidth="3.2" aria-hidden="true">
      <rect x="15" y="28" width="34" height="29" rx="5" />
      <path d="M23 28v-7a9 9 0 0 1 18 0v7" strokeLinecap="round" />
      <circle cx="32" cy="42" r="3.2" fill="#0a7a30" stroke="none" />
      <path d="M32 45v6" strokeLinecap="round" />
    </svg>
  );
}

/* gold laurel branch */
function LaurelBranch({ flip = false }: Readonly<{ flip?: boolean }>) {
  return (
    <svg viewBox="0 0 34 64" className={`h-full w-auto ${flip ? "-scale-x-100" : ""}`} fill="#d8a52e" aria-hidden="true">
      <path d="M24 62C13 55 8 43 11 30 8 42 13 54 24 62Z" />
      <g>
        <path d="M11 46c4-1 7 .6 8.6 4-4 1-7.2-.4-8.6-4Z" />
        <path d="M10.5 37c3.8-.5 6.8 1.5 7.8 5-3.8.2-6.8-1.6-7.8-5Z" />
        <path d="M11.5 28c3.4 0 6.2 2.2 6.8 5.7-3.4-.2-6-2.3-6.8-5.7Z" />
        <path d="M13.5 20c3 .7 5 3 5 6.4-3-.9-4.8-3.2-5-6.4Z" />
        <path d="M17 13c2.4 1.3 3.6 3.8 3 7-2.4-1.6-3.4-4-3-7Z" />
      </g>
    </svg>
  );
}

const BENEFITS = [
  { icon: <IcoDoc />, top: "相談・見積り", val: "無料" },
  { icon: <IcoYen />, top: "追加料金", val: "なし" },
  { icon: <IcoPerson />, top: "立ち会い", val: "不要" },
  { icon: <IcoLock />, top: "近隣配慮", val: "秘密厳守" },
];

export default function Hero() {
  return (
    <section className="w-full bg-[#f7fbf4]">
      {/* ======================= HERO VISUAL ======================= */}
      <div className="relative min-h-[clamp(320px,88vw,470px)] overflow-hidden">
        {/* bright green-foliage background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/img/kv_hero_bg.jpg)" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.45) 60%, #f7fbf4 100%)",
          }}
        />

        {/* portrait (decorative, top-anchored so the face clears the headline) */}
        <img
          src="/img/kv_person.png"
          alt="セレンシア代表 太田"
          width={282}
          height={421}
          loading="eager"
          fetchPriority="high"
          className="absolute inset-y-0 right-0 z-[2] h-full w-auto max-w-[54%] object-contain object-right-top drop-shadow-[0_2px_10px_rgba(0,0,0,0.18)]"
        />

        {/* area ribbon (dark green) */}
        <div className="relative z-[3] mt-[clamp(8px,2.6vw,14px)] inline-flex items-center bg-gradient-to-r from-kv-green-deep to-[#0a7a30] py-[clamp(5px,1.6vw,9px)] pl-[clamp(12px,4vw,22px)] pr-[clamp(18px,6vw,36px)] text-white shadow-[0_2px_5px_rgba(0,0,0,0.2)] [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]">
          <span className="text-[clamp(13px,3.7vw,18px)] font-black tracking-[0.02em]">
            東京・神奈川 全域対応
          </span>
        </div>

        {/* headline + lead (dark text on light) */}
        <div className="relative z-[3] px-4 pb-[clamp(14px,4vw,22px)] pt-[clamp(8px,2.6vw,14px)]">
          <p
            className="text-[clamp(17px,5vw,26px)] font-black leading-none text-[#111]"
            style={{ textShadow: OUTLINE_SM }}
          >
            孤独死・事故現場の
          </p>

          <h1 className="mt-[clamp(4px,1.4vw,8px)] flex items-center gap-[clamp(4px,1.4vw,9px)]">
            <span
              className="text-[clamp(48px,14vw,78px)] font-black leading-[0.9] tracking-[-0.03em] text-[#0a8a35]"
              style={{ textShadow: OUTLINE_WHITE }}
            >
              特殊清掃
            </span>
            <span className="mt-[6px] grid h-[clamp(28px,8vw,44px)] shrink-0 place-items-center rounded-[3px] bg-kv-green-deep px-[clamp(4px,1.4vw,8px)] text-[clamp(15px,4.4vw,25px)] font-black leading-none text-white shadow-[1px_2px_3px_rgba(0,0,0,0.2)]">
              専門
            </span>
          </h1>

          <p
            className="mt-[clamp(6px,2.2vw,13px)] text-[clamp(31px,9.2vw,52px)] font-black leading-[0.95] tracking-[-0.04em]"
            style={{ textShadow: OUTLINE_SM }}
          >
            <span className="text-kv-red">臭い・体液汚染</span>
            <span className="text-[0.7em] text-[#111]">を</span>
          </p>

          <p
            className="mt-[clamp(5px,1.8vw,11px)] text-[clamp(28px,8.3vw,46px)] font-black leading-[0.98] tracking-[-0.04em] text-[#111]"
            style={{ textShadow: OUTLINE_SM }}
          >
            最短
            <span className="mx-[0.04em] text-[1.26em] text-kv-orange">即日</span>
            で現地確認
          </p>

          <p
            className="mt-[clamp(9px,2.8vw,15px)] max-w-[62%] text-[clamp(11px,3.1vw,15px)] font-black leading-[1.5] text-[#1a1a1a]"
            style={{ textShadow: OUTLINE_SM }}
          >
            強い腐敗臭・体液汚染・害虫の発生まで
            <br />
            原因を特定し、<span className="text-kv-green-deep">根本から解決します。</span>
          </p>
        </div>

        {/* name plate */}
        <div className="absolute bottom-[clamp(6px,2vw,12px)] right-[clamp(6px,2vw,12px)] z-[4] rounded-[7px] bg-gradient-to-br from-[#0bb452] to-[#067833] px-[clamp(8px,2.6vw,14px)] py-[clamp(5px,1.6vw,9px)] text-white shadow-[0_3px_8px_rgba(0,0,0,0.25)]">
          <p className="text-[clamp(11px,3.2vw,16px)] font-black leading-tight">
            代表 太田
          </p>
          <p className="mt-[2px] text-[clamp(7px,1.9vw,9.5px)] font-bold leading-[1.35] text-white/95">
            遺品整理士・認定協会 認定優良事業所
            <br />
            事件現場特殊清掃士
          </p>
        </div>
      </div>

      {/* ======================= BENEFIT CARDS ======================= */}
      <div className="px-3 pb-[clamp(8px,2.5vw,14px)] pt-[clamp(6px,2vw,12px)]">
        <div className="grid grid-cols-4 gap-[clamp(5px,1.6vw,10px)]">
          {BENEFITS.map((b) => (
            <div
              key={b.val}
              className="flex flex-col items-center rounded-[9px] border border-kv-gold/45 bg-kv-cream px-1 py-[clamp(6px,2vw,11px)] text-center shadow-[0_1px_4px_rgba(0,0,0,0.08)]"
            >
              <span className="h-[clamp(20px,6vw,30px)] w-[clamp(20px,6vw,30px)]">
                {b.icon}
              </span>
              <span className="mt-1 text-[clamp(8.5px,2.4vw,12px)] font-bold leading-tight text-ink">
                {b.top}
              </span>
              <span className="text-[clamp(13px,3.8vw,19px)] font-black leading-tight text-kv-red">
                {b.val}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ======================= DUAL CTA ======================= */}
      <div className="grid grid-cols-2 gap-[clamp(6px,2vw,11px)] px-3 pb-[clamp(8px,2.5vw,14px)]">
        {/* phone (teal) */}
        <a
          href={PHONE}
          className="flex items-center gap-[clamp(4px,1.5vw,9px)] rounded-[11px] bg-gradient-to-br from-[#19bed0] to-[#057681] px-[clamp(8px,2.4vw,14px)] py-[clamp(8px,2.6vw,14px)] text-white shadow-[0_3px_9px_rgba(6,110,120,0.35)]"
        >
          <span className="grid h-[clamp(28px,8vw,44px)] w-[clamp(28px,8vw,44px)] shrink-0 place-items-center rounded-full bg-white">
            <svg viewBox="0 0 24 24" className="h-[60%] w-[60%]" fill="#057681" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </span>
          <span className="min-w-0 leading-none">
            <span className="block text-[clamp(9px,2.6vw,13px)] font-black">
              電話で今すぐ相談する
            </span>
            <span className="mt-[4px] block whitespace-nowrap text-[clamp(16px,4.7vw,25px)] font-black tracking-[-0.02em]">
              03-4400-2098
            </span>
            <span className="mt-[3px] block text-[clamp(6.5px,1.9vw,9px)] font-bold">
              受付時間 9:00〜21:00 / 年中無休
            </span>
          </span>
        </a>

        {/* LINE */}
        <a
          href={LINE}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[clamp(4px,1.5vw,9px)] rounded-[11px] bg-gradient-to-br from-[#1ecb3a] to-[#029b21] px-[clamp(8px,2.4vw,14px)] py-[clamp(8px,2.6vw,14px)] text-white shadow-[0_3px_9px_rgba(6,160,72,0.35)]"
        >
          <span className="grid h-[clamp(28px,8vw,44px)] w-[clamp(28px,8vw,44px)] shrink-0 place-items-center rounded-full bg-white text-[clamp(7px,2vw,10px)] font-black text-kv-line">
            LINE
          </span>
          <span className="min-w-0 leading-none">
            <span className="block text-[clamp(9px,2.6vw,13px)] font-black">
              LINEで写真を送るだけ
            </span>
            <span className="mt-[4px] block text-[clamp(13px,3.9vw,20px)] font-black leading-tight">
              写真相談・概算見積り
            </span>
            <span className="mt-[3px] block text-[clamp(6.5px,1.9vw,9px)] font-bold">
              簡単・安心・すぐに回答します
            </span>
          </span>
        </a>
      </div>

      {/* ======================= PROOF PANEL ======================= */}
      <div className="px-3 pb-[clamp(12px,4vw,20px)]">
        <div className="grid grid-cols-2 overflow-hidden rounded-[11px] border border-kv-gold/45 bg-kv-cream shadow-[0_1px_5px_rgba(0,0,0,0.09)]">
          {/* google */}
          <div className="px-[clamp(6px,2vw,12px)] py-[clamp(8px,2.6vw,14px)] text-center">
            <p className="text-[clamp(11px,3.2vw,16px)] font-bold leading-none">
              <span className="font-black">
                <span className="text-[#4285f4]">G</span>
                <span className="text-[#ea4335]">o</span>
                <span className="text-[#fbbc05]">o</span>
                <span className="text-[#4285f4]">g</span>
                <span className="text-[#34a853]">l</span>
                <span className="text-[#ea4335]">e</span>
              </span>
              <span className="ml-1 text-ink">クチコミ高評価</span>
            </p>
            <p className="mt-1 flex items-center justify-center gap-1 leading-none">
              <span className="text-[clamp(14px,4.3vw,22px)] tracking-[0.05em] text-[#f2b01e]">
                ★★★★★
              </span>
              <span className="text-[clamp(18px,5.4vw,28px)] font-black text-kv-red">
                4.9
              </span>
              <span className="text-[clamp(9px,2.6vw,13px)] font-bold text-ink">
                /5.0
              </span>
            </p>
            <p className="mt-[6px] flex items-center justify-center gap-1.5 text-[clamp(9px,2.7vw,13px)] font-black text-ink">
              <span className="rounded-[5px] bg-kv-green px-2 py-[3px] text-white">
                クチコミ
              </span>
              120件以上
            </p>
          </div>

          {/* record */}
          <div className="relative border-l border-kv-gold/40 px-[clamp(6px,2vw,12px)] py-[clamp(8px,2.6vw,14px)] text-center">
            <span className="pointer-events-none absolute left-[3px] top-[20%] h-[58%]">
              <LaurelBranch />
            </span>
            <span className="pointer-events-none absolute right-[3px] top-[20%] h-[58%]">
              <LaurelBranch flip />
            </span>
            <p className="text-[clamp(11px,3.2vw,16px)] font-black leading-none text-ink">
              ご相談実績
            </p>
            <p className="mt-1 leading-none">
              <span className="text-[clamp(26px,7.8vw,40px)] font-black text-kv-red">
                2,000
              </span>
              <span className="text-[clamp(11px,3.2vw,16px)] font-black text-ink">
                件以上
              </span>
            </p>
            <p className="mt-[5px] text-[clamp(7.5px,2.2vw,11px)] font-bold leading-[1.4] text-ink">
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
