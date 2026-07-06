import { LINE_URL, PHONE_TEL } from "./McyHeader";

/**
 * First view — the approved KV design (Downloads/kv.png) rendered as clean
 * sliced pieces stacked with a little breathing room. The red phone button and
 * green LINE button stay as the artwork; each is wrapped in a live, GTM-tracked
 * link (cta_tel_fv / cta_line_fv) with an animated diagonal shine (.mcy-shine).
 * The KV carries its own header, so the sticky McyHeader stays hidden at the top
 * and slides in on scroll. The design's "マンガでわかる" heading is left off the
 * slice and rendered by McyProblems instead (editable, theme-consistent).
 * Baked copy kept crawlable via sr-only h1 + alt. data-cta-section lets the
 * bottom sticky bar auto-hide while the FV is visible.
 */

/**
 * A bright diagonal band that sweeps across the whole button (`.mcy-shine`).
 * Covers the full slice so the glint clearly crosses the button artwork.
 */
function Shine({ delay = "0s" }: Readonly<{ delay?: string }>) {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <span
        className="mcy-shine absolute inset-y-[-40%] left-0 w-[55%] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.12)_38%,rgba(255,255,255,0.98)_50%,rgba(255,255,255,0.12)_62%,transparent_100%)]"
        style={{ animationDelay: delay }}
      />
    </span>
  );
}

export default function McyFv() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fdfbf7]">
      <h1 className="sr-only">
        孤独死・事故現場の特殊清掃専門 セレンシア｜東京・神奈川 全域対応・最短即日で現地確認
      </h1>

      {/* slices sit flush — the KV artwork already bakes in the spacing */}
      <div className="flex w-full flex-col">
        {/* top: header + 全域対応 + headline + 代表 太田 + 4 benefits */}
        <img
          src="/img/kv_top.webp"
          alt="特殊清掃・遺品整理 セレンシア。東京・神奈川 全域対応。孤独死・事故現場の特殊清掃専門。臭い・体液汚染を最短即日で現地確認。代表 太田が対応。相談・見積り無料（24時間受付・年中無休）／追加料金なし／立ち会い不要／近隣配慮・秘密厳守。"
          width={852}
          height={890}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="block w-full"
        />

        {/* CTA buttons — reproduced in HTML/CSS (phone number is real, selectable,
            crawlable text; copy is editable — 年中無休 etc). Only THIS block flags
            data-cta-section so the sticky bar re-appears once the buttons scroll off. */}
        <div data-cta-section className="flex flex-col gap-[clamp(6px,1.8vw,10px)] bg-gradient-to-b from-[#fcf9f1] to-[#fefefe] px-[clamp(6px,1.8vw,12px)] py-[clamp(6px,1.8vw,10px)]">
          {/* phone — red glossy button (gold frame, thicker gold base) */}
          <a
            href={PHONE_TEL}
            data-gtm="cta_tel_fv"
            aria-label="電話で今すぐ相談する 03-4400-2098（受付 9:00〜21:00 年中無休）"
            className="relative block rounded-[18px] bg-gradient-to-b from-[#fff3ac] via-[#f7d63f] to-[#e3b524] px-[2px] pt-[2px] pb-[4px] shadow-[0_7px_16px_rgba(150,20,10,0.3)] transition-[filter] active:brightness-95"
          >
            <span className="relative flex min-h-[clamp(72px,19vw,86px)] items-center gap-[clamp(7px,2.2vw,12px)] overflow-hidden rounded-[15px] bg-gradient-to-b from-[#fe4415] via-[#ee2b0a] to-[#d10405] px-[clamp(10px,3vw,16px)] py-[clamp(8px,2.2vw,12px)] shadow-[inset_0_2px_2px_rgba(255,255,255,0.3),inset_0_-4px_9px_rgba(120,0,0,0.45)]">
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-[2.5%] top-[2px] h-[38%] rounded-full bg-gradient-to-b from-white/45 to-transparent" />
              <Shine />
              <span className="relative grid h-[clamp(44px,11.6vw,54px)] w-[clamp(44px,11.6vw,54px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.28)]">
                <svg viewBox="0 0 24 24" className="h-[56%] w-[56%]" fill="#e21606" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              <span className="relative min-w-0 flex-1 text-center leading-none text-white [text-shadow:0_1px_2px_rgba(120,0,0,0.5)]">
                <span className="block text-[clamp(11px,3.1vw,14.5px)] font-bold tracking-[0.02em]">電話で今すぐ相談する</span>
                <span className="mt-[3px] block text-[clamp(23px,6.7vw,33px)] font-black tracking-[-0.01em]">03-4400-2098</span>
                <span className="mt-[3px] block text-[clamp(8.5px,2.4vw,11px)] font-bold opacity-95">受付時間 9:00〜21:00 / 年中無休</span>
              </span>
              <svg viewBox="0 0 24 24" className="relative h-[clamp(19px,5.2vw,27px)] w-[clamp(19px,5.2vw,27px)] shrink-0" fill="none" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </span>
          </a>

          {/* LINE — green glossy button (gold frame, thicker gold base) */}
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="cta_line_fv"
            aria-label="LINEで写真を送って相談する（写真相談・概算見積り・24時間受付）"
            className="relative block rounded-[18px] bg-gradient-to-b from-[#fff3ac] via-[#f7d63f] to-[#e3b524] px-[2px] pt-[2px] pb-[4px] shadow-[0_7px_16px_rgba(6,120,20,0.28)] transition-[filter] active:brightness-95"
          >
            <span className="relative flex min-h-[clamp(72px,19vw,86px)] items-center gap-[clamp(7px,2.2vw,12px)] overflow-hidden rounded-[15px] bg-gradient-to-b from-[#63ca1a] via-[#28a414] to-[#017c0e] px-[clamp(10px,3vw,16px)] py-[clamp(8px,2.2vw,12px)] shadow-[inset_0_2px_2px_rgba(255,255,255,0.3),inset_0_-4px_9px_rgba(0,70,5,0.45)]">
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-[2.5%] top-[2px] h-[38%] rounded-full bg-gradient-to-b from-white/40 to-transparent" />
              <Shine delay="1.8s" />
              <span className="relative grid h-[clamp(44px,11.6vw,54px)] w-[clamp(44px,11.6vw,54px)] shrink-0 place-items-center rounded-[13px] bg-white shadow-[0_2px_6px_rgba(0,0,0,0.24)]">
                <svg viewBox="0 0 32 32" className="h-[84%] w-[84%]" aria-hidden="true">
                  <path
                    fill="#06C755"
                    d="M16 3.2C8.3 3.2 2 8.3 2 14.5c0 5.6 5 10.2 11.7 11.1.46.1 1.08.3 1.24.69.14.35.09.9.05 1.25l-.2 1.2c-.06.35-.28 1.38 1.21.75 1.49-.62 8.03-4.73 10.96-8.1C29.9 20.9 31 18 31 14.5 31 8.3 24.7 3.2 16 3.2Z"
                  />
                  <text
                    x="16"
                    y="15.3"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontWeight="800"
                    fontSize="7.2"
                    letterSpacing="-0.2"
                    fill="#fff"
                  >
                    LINE
                  </text>
                </svg>
              </span>
              <span className="relative min-w-0 flex-1 text-center leading-none text-white [text-shadow:0_1px_2px_rgba(0,70,5,0.5)]">
                <span className="block text-[clamp(11px,3.1vw,14.5px)] font-bold tracking-[0.02em]">LINEで写真を送るだけ</span>
                <span className="mt-[3px] block whitespace-nowrap text-[clamp(19px,5.6vw,27px)] font-black tracking-[0.01em]">写真相談・概算見積り</span>
                <span className="mt-[3px] block whitespace-nowrap text-[clamp(8.5px,2.4vw,11px)] font-bold opacity-95">簡単・安心・すぐにご回答します</span>
              </span>
              <svg viewBox="0 0 24 24" className="relative h-[clamp(19px,5.2vw,27px)] w-[clamp(19px,5.2vw,27px)] shrink-0" fill="none" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Google reviews + ご相談実績 — coded (real, crawlable 5.0 / 167件) */}
        <div className="grid grid-cols-2 gap-[clamp(6px,1.8vw,10px)] px-[clamp(6px,1.8vw,12px)] pb-[clamp(6px,1.8vw,10px)]">
          {/* Google review card */}
          <div className="flex flex-col justify-center rounded-[12px] border border-lux-gold/45 bg-white px-[clamp(8px,2.3vw,13px)] py-[clamp(9px,2.5vw,13px)] shadow-[0_2px_6px_rgba(18,61,40,0.1)]">
            <div className="flex items-center gap-[clamp(3px,1vw,6px)]">
              <svg viewBox="0 0 48 48" className="h-[clamp(15px,4.2vw,20px)] w-[clamp(15px,4.2vw,20px)] shrink-0" aria-hidden="true">
                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
              </svg>
              <span className="text-[clamp(9px,2.5vw,12px)] font-bold text-lux-green-ink [word-break:auto-phrase]">Google クチコミ高評価</span>
            </div>
            <div className="mt-[clamp(3px,1vw,5px)] flex items-center gap-[clamp(3px,1vw,6px)]">
              <span aria-hidden="true" className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} viewBox="0 0 24 24" className="h-[clamp(11px,3vw,15px)] w-[clamp(11px,3vw,15px)]" fill="#f6b500">
                    <path d="M12 2l2.9 6.26L21.8 9l-5.1 4.55L18.2 20.4 12 16.9 5.8 20.4l1.5-6.85L2.2 9l6.9-.74z" />
                  </svg>
                ))}
              </span>
              <span className="font-display leading-none text-lux-green-ink">
                <span className="text-[clamp(18px,5vw,24px)] font-black">5.0</span>
                <span className="text-[clamp(9px,2.5vw,12px)] font-bold text-lux-green-ink/70">/5.0</span>
              </span>
            </div>
            <span className="mt-[clamp(3px,1vw,5px)] text-[clamp(8.5px,2.4vw,11px)] font-bold text-lux-green-ink/80">クチコミ167件以上</span>
          </div>

          {/* record card */}
          <div className="flex flex-col justify-center rounded-[12px] border border-lux-gold/45 bg-white px-[clamp(8px,2.3vw,13px)] py-[clamp(9px,2.5vw,13px)] shadow-[0_2px_6px_rgba(18,61,40,0.1)]">
            <div className="flex items-center gap-[clamp(4px,1.4vw,8px)]">
              <svg viewBox="0 0 24 24" className="h-[clamp(20px,5.6vw,28px)] w-[clamp(20px,5.6vw,28px)] shrink-0 fill-lux-green" aria-hidden="true">
                <circle cx="7" cy="7" r="2.6" />
                <circle cx="17" cy="7" r="2.6" />
                <circle cx="12" cy="6" r="3" />
                <path d="M2.5 19c0-2.9 2-4.8 4.5-4.8 1 0 1.9.3 2.6.8-1 1.1-1.6 2.5-1.7 4H2.5zM15.4 15c.7-.5 1.6-.8 2.6-.8 2.5 0 4.5 1.9 4.5 4.8h-5.4c-.1-1.5-.7-2.9-1.7-4zM12 13.4c3 0 5.4 2.3 5.4 5.6H6.6c0-3.3 2.4-5.6 5.4-5.6z" />
              </svg>
              <span className="leading-tight">
                <span className="block text-[clamp(8.5px,2.4vw,11px)] font-bold text-lux-green-ink">ご相談実績</span>
                <span className="block font-display text-[clamp(15px,4.3vw,20px)] font-black text-lux-gold-deep">2,000件以上</span>
              </span>
            </div>
            <span className="mt-[clamp(3px,1vw,5px)] block text-[clamp(8px,2.3vw,10.5px)] font-medium leading-[1.5] text-lux-green-ink/80 [word-break:auto-phrase]">
              ご遺族・大家様・管理会社様から多くご相談いただいています
            </span>
          </div>
        </div>

        {/* こんなお悩みをすべて解決します！ + reassurance (専門スタッフが丁寧に対応します) */}
        <img
          src="/img/kv_bottom.webp"
          alt="こんなお悩みをすべて解決します。部屋に入れないほど臭いが強い、近隣に知られず静かに対応してほしい、孤独死・事故現場で何から始めればいいか分からない、大家・管理会社から急ぎで対応を求められている、遠方で立ち会えない、費用がどれくらいか不安。どんな状況でも、まずはご相談ください。専門スタッフが丁寧に対応します。"
          width={852}
          height={518}
          loading="lazy"
          decoding="async"
          className="block w-full"
        />
      </div>
    </section>
  );
}
