/**
 * Hero — faithful reproduction of the client KV design, built responsively
 * (normal-flow text + one decorative absolutely-positioned portrait), NOT a
 * fixed absolute-positioned artboard, so it never collides or shrinks illegibly.
 *
 * Zones: dark-green hero visual (ribbon + headline + lead + portrait + name
 * plate) → 4 benefit cards → dual CTA → Google/record proof panel.
 */

const PHONE = "tel:0344002098";
const LINE = "https://page.line.me/782qjphg";

/* ---- benefit icons (dark-green line, matches KV) ---- */
function IcoDoc() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" fill="#063f25" aria-hidden="true">
      <path d="M12 4h30l10 10v46H12V4Zm28 4v8h8l-8-8ZM20 26h24v5H20v-5Zm0 11h24v5H20v-5Zm0 11h15v5H20v-5Z" />
    </svg>
  );
}
function IcoYen() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" fill="none" stroke="#063f25" strokeWidth="3.4" aria-hidden="true">
      <circle cx="32" cy="32" r="26" />
      <path d="M22 20l10 15 10-15M22 38h20M22 46h20M32 35v17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IcoPerson() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" fill="#063f25" aria-hidden="true">
      <circle cx="32" cy="20" r="12" />
      <path d="M10 58c1-14 10-22 22-22s21 8 22 22H10Z" />
    </svg>
  );
}
function IcoLock() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" fill="none" stroke="#063f25" strokeWidth="3.4" aria-hidden="true">
      <rect x="14" y="28" width="36" height="30" rx="5" />
      <path d="M22 28v-7a10 10 0 0 1 20 0v7" strokeLinecap="round" />
      <circle cx="32" cy="42" r="3.4" fill="#063f25" stroke="none" />
      <path d="M32 45v6" strokeLinecap="round" />
    </svg>
  );
}

function Laurel({ flip = false }: Readonly<{ flip?: boolean }>) {
  return (
    <svg viewBox="0 0 40 60" className={`h-full w-auto ${flip ? "-scale-x-100" : ""}`} fill="none" stroke="#d8a52e" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <path d="M26 56C13 51 7 39 9 26" />
      <path d="M9 41c3.4-.5 6 .9 7.4 3.8-3.4.8-6-.6-7.4-3.8ZM9.4 32c3.2.3 5.6 2.4 6.2 5.6-3.2-.2-5.6-2.3-6.2-5.6ZM11 23c3 1.2 4.8 3.7 4.5 7-3-1-4.9-3.6-4.5-7ZM14.4 15c2.6 2 3.6 5 2.6 8-2.6-1.8-3.7-4.8-2.6-8ZM19.4 9c2 2.4 2.3 5.6.8 8.4-2-2.2-2.5-5.4-.8-8.4Z" fill="#d8a52e" stroke="none" />
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
    <section className="w-full">
      {/* ======================= HERO VISUAL ======================= */}
      <div className="relative overflow-hidden bg-kv-bg">
        {/* stained-room bg image, upper half, darkened */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[62%] bg-cover bg-top opacity-[0.5]"
          style={{ backgroundImage: "url(/img/kv_hero_bg.jpg)" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,59,35,0.55) 0%, rgba(12,59,35,0.72) 46%, #0c3b23 82%)",
          }}
        />

        {/* portrait (decorative, bleeds right) */}
        <img
          src="/img/kv_person.png"
          alt="セレンシア代表 太田"
          width={282}
          height={421}
          loading="eager"
          fetchPriority="high"
          className="absolute bottom-0 right-0 z-[2] h-auto w-[46%] max-w-[260px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
        />

        {/* area ribbon */}
        <div className="relative z-[3] inline-flex items-center bg-kv-maroon py-[clamp(5px,1.6vw,9px)] pl-[clamp(12px,4vw,22px)] pr-[clamp(16px,6vw,34px)] text-white shadow-[0_2px_5px_rgba(0,0,0,0.25)] [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]">
          <span className="text-[clamp(13px,3.7vw,18px)] font-black tracking-[0.02em]">
            東京・神奈川 全域対応
          </span>
        </div>

        {/* headline + lead (left, padded so it clears the portrait) */}
        <div className="relative z-[3] px-4 pb-[clamp(16px,5vw,26px)] pt-[clamp(10px,3vw,16px)]">
          <p className="text-[clamp(17px,5vw,26px)] font-black leading-none text-white [text-shadow:1px_1px_0_rgba(0,0,0,0.3)]">
            孤独死・事故現場の
          </p>

          <h1 className="mt-[clamp(4px,1.4vw,8px)] flex items-center gap-[clamp(4px,1.4vw,9px)]">
            <span className="font-display text-[clamp(46px,13.5vw,74px)] font-black leading-[0.9] tracking-[-0.02em] text-white [text-shadow:2px_2px_0_#063f25,-1px_-1px_0_#063f25,0_3px_6px_rgba(0,0,0,0.3)]">
              特殊清掃
            </span>
            <span className="mt-[6px] grid h-[clamp(28px,8vw,44px)] shrink-0 place-items-center bg-kv-green-deep px-[clamp(4px,1.4vw,8px)] text-[clamp(15px,4.4vw,25px)] font-black leading-none text-white shadow-[2px_2px_0_rgba(0,0,0,0.25)]">
              専門
            </span>
          </h1>

          <p className="mt-[clamp(8px,2.6vw,15px)] text-[clamp(30px,9vw,50px)] font-black leading-[0.95] tracking-[-0.03em] [text-shadow:1px_1px_0_rgba(0,0,0,0.3)]">
            <span className="text-kv-orange">臭い・体液汚染</span>
            <span className="text-[0.72em] text-white">を</span>
          </p>

          <p className="mt-[clamp(6px,2vw,12px)] text-[clamp(27px,8vw,44px)] font-black leading-[0.98] tracking-[-0.03em] text-white [text-shadow:1px_1px_0_rgba(0,0,0,0.3)]">
            最短
            <span className="mx-[0.05em] text-[1.28em] text-kv-orange">即日</span>
            で現地確認
          </p>

          <p className="mt-[clamp(10px,3vw,16px)] max-w-[64%] text-[clamp(11px,3.1vw,15px)] font-bold leading-[1.5] text-white [text-shadow:1px_1px_0_rgba(0,0,0,0.3)]">
            強い腐敗臭・体液汚染・害虫の発生まで
            <br />
            原因を特定し、<span className="text-kv-yellow">根本から解決します。</span>
          </p>
        </div>

        {/* name plate */}
        <div className="absolute bottom-[clamp(8px,2.5vw,16px)] right-[clamp(8px,2.5vw,14px)] z-[4] rounded-[7px] bg-gradient-to-br from-[#0bb452] to-[#067833] px-[clamp(8px,2.6vw,14px)] py-[clamp(5px,1.6vw,9px)] text-white shadow-[0_3px_8px_rgba(0,0,0,0.3)]">
          <p className="text-[clamp(11px,3.2vw,16px)] font-black leading-tight">
            代表 太田
          </p>
          <p className="mt-[2px] text-[clamp(7px,1.9vw,9.5px)] font-bold leading-[1.35] text-white/95">
            遺品整理士認定協会 認定優良事業所
            <br />
            事件現場特殊清掃士
          </p>
        </div>
      </div>

      {/* ======================= BENEFIT CARDS ======================= */}
      <div className="bg-kv-bg px-3 pb-[clamp(10px,3vw,16px)] pt-1">
        <div className="grid grid-cols-4 gap-[clamp(5px,1.6vw,10px)]">
          {BENEFITS.map((b) => (
            <div
              key={b.val}
              className="flex flex-col items-center rounded-[9px] border border-kv-gold/70 bg-kv-cream px-1 py-[clamp(6px,2vw,11px)] text-center shadow-[0_2px_6px_rgba(0,0,0,0.2)]"
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
      <div className="grid grid-cols-2 gap-[clamp(6px,2vw,11px)] bg-kv-bg px-3 pb-[clamp(8px,2.5vw,14px)]">
        {/* phone */}
        <a
          href={PHONE}
          className="flex items-center gap-[clamp(4px,1.5vw,9px)] rounded-[11px] border-2 border-white/60 bg-gradient-to-br from-kv-red to-kv-red-deep px-[clamp(8px,2.4vw,14px)] py-[clamp(8px,2.6vw,14px)] text-white shadow-[0_3px_9px_rgba(150,15,20,0.4)]"
        >
          <span className="grid h-[clamp(28px,8vw,44px)] w-[clamp(28px,8vw,44px)] shrink-0 place-items-center rounded-full bg-white">
            <svg viewBox="0 0 24 24" className="h-[60%] w-[60%]" fill="#cf1f1f" aria-hidden="true">
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
          className="flex items-center gap-[clamp(4px,1.5vw,9px)] rounded-[11px] border-2 border-white/60 bg-gradient-to-br from-[#1ecb3a] to-[#029b21] px-[clamp(8px,2.4vw,14px)] py-[clamp(8px,2.6vw,14px)] text-white shadow-[0_3px_9px_rgba(6,160,72,0.4)]"
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
              簡単・安心・すぐにご回答します
            </span>
          </span>
        </a>
      </div>

      {/* ======================= PROOF PANEL ======================= */}
      <div className="bg-kv-bg px-3 pb-[clamp(12px,4vw,20px)]">
        <div className="grid grid-cols-2 overflow-hidden rounded-[11px] border border-kv-gold/70 bg-kv-cream shadow-[0_2px_8px_rgba(0,0,0,0.18)]">
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
              <span className="text-[clamp(14px,4.3vw,22px)] tracking-[0.05em] text-[#e9a900]">
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
          <div className="relative border-l border-kv-gold/50 px-[clamp(6px,2vw,12px)] py-[clamp(8px,2.6vw,14px)] text-center">
            <span className="pointer-events-none absolute left-1 top-[22%] h-[52%]">
              <Laurel />
            </span>
            <span className="pointer-events-none absolute right-1 top-[22%] h-[52%]">
              <Laurel flip />
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
