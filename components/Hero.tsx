/**
 * Hero — KV reproduction per the まーしー式 No.33 split rules:
 * visuals stay AI-designed images, but CTA buttons are NOT baked in —
 * they are live HTML elements (editable copy, tap states, GTM tracking)
 * positioned over button-free backgrounds:
 *   - kv_s1_headerbg.jpg : header with the two baked buttons patched out
 *   - kv_s4_ctabg.jpg    : CTA band synthesized from adjacent edges
 * Structure data: public/lp-structure/lp_sections.json + cta_buttons.json.
 *
 * Font sizes/radii use min(vw, px-cap) so text tracks the image scale
 * below the 520px container cap and freezes above it.
 */

const PHONE = "tel:0344002098";
const LINE = "https://page.line.me/782qjphg";

function TelIcon({ className }: Readonly<{ className: string }>) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* visually-hidden copy for SEO / accessibility */}
      <h1 className="sr-only">
        孤独死・事故現場の特殊清掃専門。臭い・体液汚染を最短即日で現地確認｜セレンシア（東京・神奈川
        全域対応）
      </h1>
      <p className="sr-only">
        強い腐敗臭・体液汚染・害虫の発生まで原因を特定し、根本から解決します。相談・見積り無料、追加料金なし、立ち会い不要、近隣配慮・秘密厳守。Googleクチコミ高評価4.9／5.0（クチコミ120件以上）、ご相談実績2,000件以上。
      </p>

      {/* ===== S1: header (buttons are live HTML) ===== */}
      <div className="relative">
        <img
          src="/img/kv_s1_headerbg.jpg"
          alt="特殊清掃・遺品整理 セレンシア｜相談・見積り無料（24時間受付・年中無休）"
          width={1024}
          height={128}
          fetchPriority="high"
          className="block w-full"
        />
        <a
          href={PHONE}
          data-gtm="cta_tel_header"
          data-cta="cta_tel_header"
          aria-label="03-4400-2098へ電話する（受付9:00〜21:00 年中無休）"
          className="absolute left-[53.9%] top-[15%] flex h-[70%] w-[27.9%] flex-col items-center justify-center rounded-[min(1.2vw,6px)] text-white shadow-[0_2px_5px_rgba(0,0,0,0.25)] transition-[filter] active:brightness-90"
          style={{
            background:
              "linear-gradient(180deg, #c34c45 0%, #a72521 42%, #8c1613 100%)",
          }}
        >
          <span className="flex items-center gap-[min(0.7vw,4px)] leading-none">
            <TelIcon className="h-[min(2.4vw,12px)] w-[min(2.4vw,12px)] shrink-0" />
            <span className="whitespace-nowrap text-[min(3.25vw,17px)] font-black tracking-[-0.03em]">
              03-4400-2098
            </span>
          </span>
          <span className="mt-[min(0.9vw,5px)] whitespace-nowrap text-[min(1.62vw,8.5px)] font-bold leading-none">
            受付 9:00〜21:00 / 年中無休
          </span>
        </a>
        <a
          href={LINE}
          target="_blank"
          rel="noopener noreferrer"
          data-gtm="cta_line_header"
          data-cta="cta_line_header"
          aria-label="LINEで写真相談する"
          className="absolute left-[82.5%] top-[15%] flex h-[70%] w-[15.9%] items-center justify-center gap-[min(1vw,5px)] rounded-[min(1.2vw,6px)] text-white shadow-[0_2px_5px_rgba(0,0,0,0.25)] transition-[filter] active:brightness-90"
          style={{
            background:
              "linear-gradient(180deg, #529f49 0%, #35862e 45%, #276f23 100%)",
          }}
        >
          <span className="grid h-[min(4.3vw,22px)] w-[min(4.3vw,22px)] shrink-0 place-items-center rounded-full bg-white text-[min(1.25vw,6.5px)] font-black text-[#1f7d12]">
            LINE
          </span>
          <span className="leading-tight">
            <span className="block whitespace-nowrap text-[min(1.95vw,10px)] font-bold">
              LINEで
            </span>
            <span className="block whitespace-nowrap text-[min(2.3vw,12px)] font-black">
              写真相談する
            </span>
          </span>
        </a>
      </div>

      {/* ===== S2: hero visual ===== */}
      <img
        src="/img/kv_s2_hero.jpg"
        alt="東京・神奈川全域対応。孤独死・事故現場の特殊清掃専門。臭い・体液汚染を最短即日で現地確認。代表 太田（遺品整理士認定協会 認定優良事業所／事件現場特殊清掃士）"
        width={1024}
        height={598}
        className="block w-full"
      />

      {/* ===== S3: benefits ===== */}
      <img
        src="/img/kv_s3_benefits.jpg"
        alt="相談・見積り無料／追加料金なし／立ち会い不要／近隣配慮・秘密厳守"
        width={1024}
        height={110}
        className="block w-full"
      />

      {/* ===== S4: CTA band (buttons are live HTML on a button-free bg) ===== */}
      <div className="relative">
        <img
          src="/img/kv_s4_ctabg.jpg"
          alt=""
          aria-hidden="true"
          width={1024}
          height={164}
          className="block w-full"
        />
        {/* phone */}
        <a
          href={PHONE}
          data-gtm="cta_tel_fv"
          data-cta="cta_tel_fv"
          aria-label="電話で今すぐ相談する 03-4400-2098"
          className="absolute left-[2.7%] top-[3%] flex h-[88%] w-[45.9%] items-center justify-center gap-[min(1.2vw,6px)] rounded-[min(1.6vw,8px)] border-[1.5px] border-[#e8dcb8] text-white shadow-[0_3px_8px_rgba(0,0,0,0.35)] transition-[filter] active:brightness-90"
          style={{
            background:
              "linear-gradient(180deg, #cb2822 0%, #ba1512 45%, #98100e 100%)",
          }}
        >
          <span className="relative grid shrink-0 place-items-center">
            <span
              aria-hidden="true"
              className="absolute h-[min(9vw,46px)] w-[min(9vw,46px)] rounded-full opacity-70"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,240,200,0.75) 0%, transparent 68%)",
              }}
            />
            <TelIcon className="relative h-[min(6.2vw,32px)] w-[min(6.2vw,32px)] -scale-x-100" />
          </span>
          <span className="min-w-0 text-center leading-none">
            <span className="block whitespace-nowrap text-[min(2.6vw,13.5px)] font-black">
              電話で今すぐ相談する
            </span>
            <span className="mt-[min(0.9vw,5px)] block whitespace-nowrap text-[min(5.3vw,27.5px)] font-black tracking-[-0.02em]">
              03-4400-2098
            </span>
            <span className="mt-[min(0.9vw,5px)] block whitespace-nowrap text-[min(2.25vw,11.5px)] font-bold">
              受付時間 9:00〜21:00 / 年中無休
            </span>
          </span>
        </a>
        {/* LINE */}
        <a
          href={LINE}
          target="_blank"
          rel="noopener noreferrer"
          data-gtm="cta_line_fv"
          data-cta="cta_line_fv"
          aria-label="LINEで写真を送るだけ 写真相談・概算見積り"
          className="absolute left-[50.6%] top-[3%] flex h-[88%] w-[46.7%] items-center justify-center gap-[min(1.4vw,7px)] rounded-[min(1.6vw,8px)] border-[1.5px] border-[#e8dcb8] text-white shadow-[0_3px_8px_rgba(0,0,0,0.35)] transition-[filter] active:brightness-90"
          style={{
            background:
              "linear-gradient(180deg, #37a51e 0%, #248a13 45%, #176c0b 100%)",
          }}
        >
          <span className="grid h-[min(8.7vw,45px)] w-[min(8.7vw,45px)] shrink-0 place-items-center rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
            <span className="text-[min(2.3vw,12px)] font-black text-[#1f7d12]">
              LINE
            </span>
          </span>
          <span className="min-w-0 text-center leading-none">
            <span className="block whitespace-nowrap text-[min(2.5vw,13px)] font-black">
              LINEで写真を送るだけ
            </span>
            <span className="mt-[min(0.9vw,5px)] block whitespace-nowrap text-[min(3.7vw,19px)] font-black">
              写真相談・概算見積り
            </span>
            <span className="mt-[min(0.9vw,5px)] block whitespace-nowrap text-[min(2.2vw,11.5px)] font-bold">
              簡単・安心・すぐにご回答します
            </span>
          </span>
        </a>
      </div>

      {/* ===== S5: proof ===== */}
      <img
        src="/img/kv_s5_proof.jpg"
        alt="Googleクチコミ高評価 4.9/5.0 クチコミ120件以上／ご相談実績2,000件以上（ご遺族・大家様・管理会社様から多くご相談いただいています）"
        width={1024}
        height={220}
        loading="lazy"
        decoding="async"
        className="block w-full"
      />

      {/* ===== S6: worries ===== */}
      <img
        src="/img/kv_s6_worries.jpg"
        alt="こんなお悩みをすべて解決します。部屋に入れないほど臭いが強い、孤独死・事故現場で何から始めればいいか分からない、遠方で立ち会えない、近隣に知られず静かに対応してほしい、大家・管理会社から急ぎで対応を求められている、費用がどれくらいか不安"
        width={1024}
        height={316}
        loading="lazy"
        decoding="async"
        className="block w-full"
      />
    </section>
  );
}
