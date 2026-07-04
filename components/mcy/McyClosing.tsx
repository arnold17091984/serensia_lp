/**
 * No.33 — FAQ + request flow.
 * FAQ: gold Q medallions / turquoise A. Flow: numbered gold timeline.
 */

const FAQ = [
  { q: "すぐに来てもらえますか？", a: "東京・神奈川を中心に、最短即日で現地確認に伺います。お急ぎの場合は、まずはお電話（9:00〜21:00 年中無休）でご相談ください。" },
  { q: "相談や見積りにお金はかかりますか？", a: "ご相談・お見積り・出張費用はすべて無料です。お見積り確定後の追加費用もありません。金額にご納得いただいてから作業を開始します。" },
  { q: "遠方に住んでいて立ち会えません。依頼できますか？", a: "立ち会い不要で対応可能です。鍵のお預かりも承っております。作業前後の状況は写真などでご報告いたしますので、遠方の方も安心してご依頼いただけます。" },
  { q: "ご近所へ迷惑をかけたくない", a: "作業時はご近所へのご負担をできる限り抑えられるよう、十分に配慮しております。ロゴや業者名の入った服装は避け、目立たない形で訪問・作業を行います。搬出時の動きやお声がけなどにも気を配り、近隣の方に配慮しながら進めます。" },
  { q: "夜間に発見した場合はどうすればいいですか？", a: "LINE・メールは24時間受付しております。緊急の場合も内容を確認次第、折り返しご連絡いたします。" },
  { q: "クレジットカードで支払いできますか？", a: "はい、当社ではクレジットカードでのお支払いが可能です。安心してご利用いただけるよう各種カードに対応しています。詳細についてはお問い合わせください。" },
  { q: "見積もりの所要時間は？", a: "見積もりは現場調査後、通常30分〜1時間程度でお伝えしています。お急ぎの場合はお電話でご相談ください。" },
  { q: "作業の所要時間は？", a: "作業の内容や規模により異なりますが、一般的には1日〜数日で完了します。作業前に詳細なスケジュールをご案内いたします。" },
  { q: "保険や保証はありますか？", a: "万が一の事故に備え、東京海上日動火災保険の賠償責任保険に加入しております。作業中の予期せぬトラブルにも対応できる体制を整えておりますので、安心してご依頼いただけます。" },
];

const STEPS = [
  { title: "お問い合わせ", desc: "お電話・LINEでご連絡ください（タップで発信）。", tel: true },
  { title: "現地調査・お見積り", desc: "現場を確認し、無料でお見積りを作成。" },
  { title: "ご契約", desc: "内容にご納得いただいた後、契約へ。" },
  { title: "特殊清掃・消臭作業開始", desc: "高度な技術で、徹底的に清掃・消臭。" },
  { title: "作業完了・お引き渡し", desc: "仕上がりをご確認いただき、お引き渡しとなります。" },
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

export default function McyClosing() {
  return (
    <>
      {/* ===== FAQ ===== */}
      <section id="faq" className="w-full bg-white px-4 py-[clamp(20px,6vw,32px)]">
        <SectionHeading kicker="ご不安にお答えします">
          よくある<span className="text-mcy-turq-deep">質問</span>
        </SectionHeading>
        <div className="mx-auto mt-[clamp(12px,3.6vw,20px)] max-w-[460px] divide-y divide-mcy-gold/30">
          {FAQ.map((f) => (
            <div key={f.q} className="py-[clamp(12px,3.4vw,17px)]">
              <div className="flex items-start gap-2.5">
                <span className="grid h-[clamp(22px,6.2vw,28px)] w-[clamp(22px,6.2vw,28px)] shrink-0 place-items-center rounded-full bg-mcy-gold font-display text-[clamp(11px,3.1vw,14px)] font-black text-white">
                  Q
                </span>
                <p className="pt-[2px] text-[clamp(12px,3.4vw,14.5px)] font-black leading-[1.65] text-mcy-navy [word-break:auto-phrase]">
                  {f.q}
                </p>
              </div>
              <div className="mt-2 flex items-start gap-2.5">
                <span className="grid h-[clamp(22px,6.2vw,28px)] w-[clamp(22px,6.2vw,28px)] shrink-0 place-items-center rounded-full bg-mcy-turq font-display text-[clamp(11px,3.1vw,14px)] font-black text-white">
                  A
                </span>
                <p className="pt-[2px] text-[clamp(11px,3.1vw,13px)] font-medium leading-[1.9] text-mcy-navy/85 [word-break:auto-phrase]">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== flow ===== */}
      <section id="nagare" className="w-full bg-mcy-turq-light px-4 py-[clamp(20px,6vw,32px)]">
        <SectionHeading kicker="即日対応可能！緊急時もご相談ください">
          ご依頼の流れ
          <span className="mx-1 font-display text-[clamp(28px,8vw,40px)] text-mcy-turq-deep">5</span>
          ステップ
        </SectionHeading>
        <ol className="relative mx-auto mt-[clamp(12px,3.6vw,20px)] flex max-w-[460px] flex-col gap-[clamp(9px,2.6vw,13px)]">
          <span aria-hidden="true" className="absolute bottom-[24px] left-[19px] top-[24px] w-[2px] bg-mcy-gold/50" />
          {STEPS.map((s, i) => {
            const card = (
              <div className={`flex min-h-[44px] flex-1 items-center rounded-[12px] bg-white px-4 py-3 shadow-[0_1px_5px_rgba(27,58,92,0.08)] ${s.tel ? "ring-2 ring-mcy-turq/40" : ""}`}>
                <div className="min-w-0">
                  <h3 className="text-[clamp(12.5px,3.5vw,15px)] font-black leading-snug text-mcy-navy">
                    {s.title}
                  </h3>
                  <p className="mt-[3px] text-[clamp(10px,2.8vw,12.5px)] font-medium leading-[1.75] text-mcy-navy/75">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
            return (
              <li key={s.title} className="relative flex items-start gap-3">
                <span className="z-10 flex h-[clamp(34px,9.4vw,44px)] w-[clamp(34px,9.4vw,44px)] shrink-0 flex-col items-center justify-center rounded-full bg-mcy-gold text-white shadow-[0_1px_4px_rgba(165,129,58,0.4)]">
                  <span className="text-[clamp(5.5px,1.5vw,7px)] font-bold leading-none tracking-[0.1em]">
                    STEP
                  </span>
                  <span className="mt-[2px] font-display text-[clamp(15px,4.2vw,19px)] font-black leading-none">
                    {i + 1}
                  </span>
                </span>
                {s.tel ? (
                  <a href="tel:0344002098" data-gtm="cta_tel_flow" className="flex min-w-0 flex-1">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
