import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from "./McyHeader";

/**
 * No.33 — trust block: owners / support / license & insurance / ihin.
 * 実写写真のみ使用（生成人物なし）。代表写真は実在アセットのため掲載可。
 */

const OWNER_BADGES = ["解体から原状回復まで一貫対応", "近隣住民への配慮を徹底", "緊急時も迅速対応"];

const SUPPORT_ITEMS = [
  { no: "01", title: "立会い不要" },
  { no: "02", title: "鍵のお預り可能" },
  { no: "03", title: "代表または副社長が現地立ち合い" },
  { no: "04", title: "近隣への配慮を徹底" },
];

const LICENSES = [
  "東京都公安委員会 古物商番号 第303312321474号",
  "遺品整理協会認定遺品整理士 地区統括会員",
  "特定遺品整理士",
  "事件現場特殊清掃士",
  "丸のこ等取扱作業従事者安全衛生教育",
  "不用品回収健全化指導員",
];

function SectionHeading({ kicker, children }: Readonly<{ kicker: string; children: React.ReactNode }>) {
  return (
    <div className="text-center">
      <span className="inline-block bg-gradient-to-r from-mcy-turq to-mcy-turq-deep px-[clamp(14px,4vw,22px)] py-[clamp(5px,1.5vw,8px)] text-[clamp(10px,2.9vw,14px)] font-black tracking-[0.06em] text-white [clip-path:polygon(4%_0,96%_0,100%_50%,96%_100%,4%_100%,0_50%)]">
        {kicker}
      </span>
      <h2 className="mt-[clamp(8px,2.4vw,13px)] font-display text-[clamp(19px,5.4vw,27px)] font-black leading-snug text-mcy-navy">
        {children}
      </h2>
      <span aria-hidden="true" className="mx-auto mt-[clamp(8px,2.2vw,12px)] block h-[3px] w-[clamp(48px,13vw,72px)] rounded-full bg-mcy-gold" />
    </div>
  );
}

export default function McyTrust() {
  return (
    <>
      {/* ===== owners ===== */}
      <section className="w-full bg-white px-4 py-[clamp(20px,6vw,32px)]">
        <SectionHeading kicker="次の入居者のために物件を回復">
          大家様・管理会社様の
          <br />
          <span className="text-mcy-turq-deep">SOS</span>も緊急対応
        </SectionHeading>
        <p className="mx-auto mt-[clamp(10px,3vw,16px)] max-w-[460px] text-[clamp(11.5px,3.2vw,14px)] font-medium leading-[2] text-mcy-navy/90 [word-break:auto-phrase]">
          管理をする物件で事故やトラブルが発生した際は緊急を要することで、ご相談をいただくことが多くあります。一刻も早く、次の入居者が安心して住める状態に戻すため、セレンシアが迅速に駆けつけます。汚染除去・消臭・消毒から、必要に応じた建材撤去や原状回復の段取りまで一括で進められます。
        </p>
        <div className="mx-auto mt-[clamp(12px,3.4vw,18px)] grid max-w-[460px] grid-cols-3 gap-[clamp(5px,1.6vw,9px)]">
          {OWNER_BADGES.map((b) => (
            <div key={b} className="flex items-center justify-center rounded-[10px] border border-mcy-gold/50 bg-mcy-turq-light px-2 py-[clamp(9px,2.6vw,13px)] text-center">
              <span className="text-[clamp(9.5px,2.7vw,12px)] font-black leading-[1.5] text-mcy-navy [word-break:auto-phrase]">
                {b}
              </span>
            </div>
          ))}
        </div>
        <img
          src="/img/ooya_photo.jpg"
          alt="物件のドアを丁寧に清掃する作業"
          width={1000}
          height={410}
          loading="lazy"
          decoding="async"
          className="mx-auto mt-[clamp(12px,3.4vw,18px)] w-full max-w-[460px] rounded-[12px] border-2 border-mcy-turq/25 object-cover shadow-[0_3px_10px_rgba(27,58,92,0.12)]"
        />
      </section>

      {/* ===== support ===== */}
      <section className="w-full bg-mcy-turq-light px-4 py-[clamp(20px,6vw,32px)]">
        <SectionHeading kicker="特殊清掃の不安やお悩みを和らげる">
          柔軟な<span className="text-mcy-turq-deep">サポート体制</span>
        </SectionHeading>
        <div className="mx-auto mt-[clamp(12px,3.6vw,20px)] grid max-w-[460px] grid-cols-2 gap-[clamp(7px,2vw,11px)]">
          {SUPPORT_ITEMS.map((s) => (
            <div key={s.no} className="rounded-[12px] border border-mcy-gold/40 bg-white px-3 py-[clamp(11px,3.2vw,16px)] text-center shadow-[0_1px_4px_rgba(27,58,92,0.07)]">
              <span className="mx-auto grid h-[clamp(26px,7.2vw,34px)] w-[clamp(26px,7.2vw,34px)] place-items-center rounded-full bg-mcy-gold font-display text-[clamp(11px,3.1vw,14px)] font-black text-white">
                {s.no}
              </span>
              <p className="mt-2 text-[clamp(11.5px,3.2vw,14px)] font-black leading-[1.6] text-mcy-navy [word-break:auto-phrase]">
                {s.title}
              </p>
            </div>
          ))}
        </div>

        {/* call card */}
        <div className="mx-auto mt-[clamp(12px,3.4vw,18px)] max-w-[460px] rounded-[14px] border-2 border-mcy-gold/60 bg-white px-4 pb-5 pt-4 text-center shadow-[0_3px_12px_rgba(27,58,92,0.1)]">
          <p className="font-display text-[clamp(14px,4vw,18px)] font-black text-mcy-navy">
            まずは相談事をお聞かせください
          </p>
          <a
            href={PHONE_TEL}
            data-gtm="cta_tel_support"
            className="mt-3 flex items-center justify-center gap-2 rounded-full border-2 border-mcy-gold/70 bg-gradient-to-b from-[#19b8be] via-mcy-turq to-mcy-turq-deep px-4 py-[clamp(9px,2.7vw,13px)] text-white shadow-[0_4px_12px_rgba(11,127,133,0.4)] transition-[filter] active:brightness-90"
          >
            <span className="min-w-0 text-center leading-none">
              <span className="block whitespace-nowrap text-[clamp(9.5px,2.7vw,12px)] font-black">
                緊急時も対応｜タップで発信
              </span>
              <span className="mt-[4px] block whitespace-nowrap text-[clamp(19px,5.5vw,26px)] font-black tracking-[-0.01em]">
                {PHONE_DISPLAY}
              </span>
              <span className="mt-[4px] block whitespace-nowrap text-[clamp(7.5px,2.1vw,10px)] font-bold opacity-95">
                9:00〜21:00 年中無休
              </span>
            </span>
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="cta_line_support"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#25d94e] to-[#06a32a] px-4 py-[clamp(8px,2.4vw,12px)] text-white shadow-[0_3px_10px_rgba(6,163,42,0.35)] transition-[filter] active:brightness-90"
          >
            <span className="grid h-[clamp(22px,6.2vw,30px)] w-[clamp(22px,6.2vw,30px)] shrink-0 place-items-center rounded-full bg-white text-[clamp(5px,1.4vw,7px)] font-black text-[#06a32a]">
              LINE
            </span>
            <span className="min-w-0 text-center leading-none">
              <span className="block whitespace-nowrap text-[clamp(12px,3.4vw,16px)] font-black">
                まずはLINEで相談する
              </span>
              <span className="mt-[3px] block whitespace-nowrap text-[clamp(7.5px,2.1vw,10px)] font-bold opacity-95">
                見積無料｜まずは現地調査から｜24時間受付
              </span>
            </span>
          </a>
        </div>
      </section>

      {/* ===== license & insurance ===== */}
      <section className="w-full bg-white px-4 py-[clamp(20px,6vw,32px)]">
        <SectionHeading kicker="技術を磨き、住まいを磨く。">
          保有許可・<span className="text-mcy-turq-deep">資格</span>
        </SectionHeading>
        <p className="mx-auto mt-[clamp(10px,3vw,16px)] max-w-[460px] text-[clamp(11.5px,3.2vw,14px)] font-medium leading-[2] text-mcy-navy/90 [word-break:auto-phrase]">
          セレンシアでは、安心してお任せいただけるよう、多くの資格を持ったプロフェッショナルが特殊清掃や遺品整理に対応します。
        </p>
        <div className="mx-auto mt-[clamp(12px,3.4vw,18px)] max-w-[460px] overflow-hidden rounded-[14px] border border-mcy-gold/50 bg-white shadow-[0_3px_12px_rgba(27,58,92,0.1)]">
          <ul className="divide-y divide-mcy-gold/30">
            {LICENSES.map((l, i) => (
              <li key={l} className="flex items-center gap-3 px-4 py-[clamp(9px,2.6vw,13px)]">
                <span className="grid h-[clamp(22px,6vw,28px)] w-[clamp(22px,6vw,28px)] shrink-0 place-items-center rounded-full border-2 border-mcy-gold bg-white font-display text-[clamp(10px,2.8vw,13px)] font-black text-mcy-gold-deep">
                  {i + 1}
                </span>
                <span className="text-[clamp(11px,3.1vw,13.5px)] font-bold leading-[1.6] text-mcy-navy [word-break:auto-phrase]">
                  {l}
                </span>
              </li>
            ))}
          </ul>
          <p className="border-t-2 border-mcy-gold/40 bg-mcy-turq-light px-4 py-3 text-center text-[clamp(10.5px,2.9vw,13px)] font-black text-mcy-navy">
            万が一に備え、東京海上日動火災保険の
            <br className="min-[420px]:hidden" />
            賠償責任保険に加入しています
          </p>
        </div>
        <img
          src="/img/shikaku_photo.jpg"
          alt="遺品整理を行うスタッフの作業"
          width={794}
          height={312}
          loading="lazy"
          decoding="async"
          className="mx-auto mt-[clamp(12px,3.4vw,18px)] w-full max-w-[460px] rounded-[12px] border-2 border-mcy-turq/25 object-cover shadow-[0_3px_10px_rgba(27,58,92,0.12)]"
        />
      </section>

      {/* ===== ihin ===== */}
      <section className="w-full bg-mcy-turq-light px-4 py-[clamp(20px,6vw,32px)]">
        <SectionHeading kicker="Google口コミ高評価獲得！">
          経験豊富なスタッフが対応する
          <br />
          <span className="text-mcy-turq-deep">遺品整理</span>
        </SectionHeading>
        <div className="mx-auto mt-[clamp(12px,3.6vw,20px)] grid max-w-[460px] grid-cols-2 gap-[clamp(7px,2vw,11px)]">
          {["遺品整理士が在籍", "不用品の買取可能"].map((b) => (
            <div key={b} className="flex items-center justify-center gap-2 rounded-[12px] border border-mcy-gold/50 bg-white px-3 py-[clamp(12px,3.4vw,17px)] shadow-[0_1px_4px_rgba(27,58,92,0.07)]">
              <span aria-hidden="true" className="grid h-[clamp(18px,5vw,23px)] w-[clamp(18px,5vw,23px)] shrink-0 place-items-center rounded-full bg-mcy-turq text-[clamp(9px,2.6vw,12px)] font-black text-white">
                ✓
              </span>
              <span className="text-[clamp(12px,3.4vw,15px)] font-black text-mcy-navy">{b}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
