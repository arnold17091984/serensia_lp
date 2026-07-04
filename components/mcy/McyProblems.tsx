/**
 * No.33 — worries / solution / strengths / 6-step process / restoration goal.
 * White & turquoise-light alternating grounds, navy mincho headings with
 * turquoise ribbon kickers, gold number medallions.
 */

const WORRIES = [
  ["部屋に入れない", "ほど臭いが強い"],
  ["孤独死・事故現場", "で何から始めればいいか分からない"],
  ["遠方", "で立ち会えない"],
  ["", "近隣に知られず静かに対応してほしい"],
  ["", "大家・管理会社から急ぎで対応を求められている"],
  ["", "費用がどれくらいか不安"],
] as const;

const STRENGTH_CHECKS = [
  "体液が染みた床材の撤去",
  "血痕の除去",
  "夏場の強い腐敗臭",
  "長年蓄積したタバコ臭",
];

const PROCESS = [
  { name: "汚染箇所の解体・仕上げ", desc: "原因除去からリフォームまで一貫対応。" },
  { name: "防臭・特殊コーティング", desc: "臭いの再発を長期的に防止。" },
  { name: "感染リスク対応消毒", desc: "最適な薬剤で二次感染リスクを防止。" },
  { name: "特許取得水系消臭", desc: "環境にも人体にも優しい強力消臭を実現。" },
  { name: "特殊ルームクリーニング", desc: "素材を傷めず臭気・汚れを除去。" },
  { name: "専用薬剤", desc: "植物由来成分で即効性と安全性を両立。" },
];

function RibbonHeading({ kicker, children }: Readonly<{ kicker?: string; children: React.ReactNode }>) {
  return (
    <div className="text-center">
      {kicker && (
        <span className="inline-block bg-gradient-to-r from-mcy-turq to-mcy-turq-deep px-[clamp(14px,4vw,22px)] py-[clamp(5px,1.5vw,8px)] text-[clamp(10px,2.9vw,14px)] font-black tracking-[0.06em] text-white [clip-path:polygon(4%_0,96%_0,100%_50%,96%_100%,4%_100%,0_50%)]">
          {kicker}
        </span>
      )}
      <h2 className="mt-[clamp(8px,2.4vw,13px)] font-display text-[clamp(19px,5.4vw,27px)] font-black leading-snug tracking-[0.01em] text-mcy-navy">
        {children}
      </h2>
      <span aria-hidden="true" className="mx-auto mt-[clamp(8px,2.2vw,12px)] block h-[3px] w-[clamp(48px,13vw,72px)] rounded-full bg-mcy-gold" />
    </div>
  );
}

function Check() {
  return (
    <span aria-hidden="true" className="mt-[2px] grid h-[clamp(16px,4.4vw,21px)] w-[clamp(16px,4.4vw,21px)] shrink-0 place-items-center rounded-full bg-mcy-turq text-[clamp(9px,2.6vw,12px)] font-black text-white">
      ✓
    </span>
  );
}

export default function McyProblems() {
  return (
    <>
      {/* ===== worries ===== */}
      <section className="w-full bg-mcy-turq-light px-4 py-[clamp(20px,6vw,32px)]">
        <RibbonHeading kicker="こんなお悩みはありませんか？">
          こんな<span className="text-mcy-turq-deep">お悩み</span>を
          <br />
          すべて解決します！
        </RibbonHeading>
        <ul className="mx-auto mt-[clamp(12px,3.6vw,20px)] flex max-w-[460px] flex-col gap-[clamp(7px,2vw,11px)]">
          {WORRIES.map(([em, rest]) => (
            <li key={em + rest} className="flex items-start gap-2 rounded-[10px] border border-mcy-turq/25 bg-white px-3 py-[clamp(8px,2.3vw,12px)] shadow-[0_1px_4px_rgba(27,58,92,0.07)]">
              <Check />
              <p className="text-[clamp(11.5px,3.2vw,14px)] font-bold leading-[1.65] text-mcy-navy [word-break:auto-phrase]">
                {em && <span className="text-mcy-turq-deep underline decoration-mcy-gold decoration-2 underline-offset-4">{em}</span>}
                {rest}
              </p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-[clamp(12px,3.4vw,18px)] max-w-[460px] rounded-[10px] bg-mcy-navy px-4 py-[clamp(9px,2.6vw,13px)] text-center text-[clamp(11px,3vw,13.5px)] font-black leading-[1.7] text-white">
          どんな状況でも、まずはご相談ください。
          <br />
          専門スタッフが丁寧に対応します。
        </p>
      </section>

      {/* ===== solution ===== */}
      <section className="w-full bg-white px-4 py-[clamp(20px,6vw,32px)]">
        <div className="text-center">
          <p className="font-display text-[clamp(15px,4.2vw,20px)] font-bold text-mcy-navy">
            そのお悩みはセレンシアが
          </p>
          <p className="mt-[clamp(4px,1.4vw,8px)] font-display font-black leading-[1.15]">
            <span className="text-[clamp(30px,8.6vw,44px)] text-mcy-turq-deep">対応力</span>
            <span className="mx-1 text-[clamp(20px,5.6vw,28px)] text-mcy-gold">&</span>
            <span className="text-[clamp(30px,8.6vw,44px)] text-mcy-turq-deep">技術力</span>
            <span className="ml-1 text-[clamp(24px,6.8vw,34px)] text-mcy-navy">で解決！</span>
          </p>
          <p className="mt-[clamp(8px,2.2vw,12px)] text-[clamp(11.5px,3.2vw,14px)] font-bold text-mcy-navy/85">
            セレンシアだからできる、特殊清掃の強みをチェック！
          </p>
        </div>

        <img
          src="/img/kaiketsu_photo.jpg"
          alt="特殊清掃の作業風景"
          width={948}
          height={188}
          loading="lazy"
          decoding="async"
          className="mt-[clamp(12px,3.4vw,18px)] w-full rounded-[12px] border-2 border-mcy-turq/30 object-cover shadow-[0_3px_10px_rgba(27,58,92,0.12)]"
        />

        {/* strengths card */}
        <div className="mt-[clamp(14px,4vw,22px)] overflow-hidden rounded-[14px] border-2 border-mcy-turq/30 bg-white shadow-[0_3px_12px_rgba(27,58,92,0.1)]">
          <img
            src="/img/kaiketsu_s2.jpg"
            alt="特殊清掃の現場写真（浴室・玄関・床の汚染箇所）"
            width={1000}
            height={175}
            loading="lazy"
            decoding="async"
            className="w-full border-b-2 border-mcy-gold/40 object-cover"
          />
          <div className="px-4 pb-5 pt-4 text-center">
            <p className="text-[clamp(10px,2.8vw,13px)] font-bold tracking-[0.04em] text-mcy-turq-deep">
              豊富な現場と対応実績あり
            </p>
            <h3 className="mt-1 font-display text-[clamp(17px,4.8vw,23px)] font-black leading-snug text-mcy-navy">
              孤独死・事故死現場など
              <br />
              どんなケースにも対応
            </h3>
            <ul className="mt-3 grid grid-cols-1 gap-[6px] min-[420px]:grid-cols-2">
              {STRENGTH_CHECKS.map((c) => (
                <li key={c} className="flex items-center gap-2 rounded-[8px] bg-mcy-turq-light px-3 py-2">
                  <Check />
                  <span className="text-[clamp(10.5px,3vw,13px)] font-bold text-mcy-navy">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 6-step process ===== */}
      <section className="w-full bg-mcy-turq-light px-4 py-[clamp(20px,6vw,32px)]">
        <RibbonHeading kicker="セレンシアの技術">
          特殊清掃の基本
          <span className="mx-1 font-display text-[clamp(30px,8.6vw,44px)] text-mcy-turq-deep">6</span>
          工程
        </RibbonHeading>
        <ol className="mx-auto mt-[clamp(12px,3.6vw,20px)] flex max-w-[460px] flex-col gap-[clamp(7px,2vw,11px)]">
          {PROCESS.map((s, i) => (
            <li key={s.name} className="flex items-center gap-3 rounded-[12px] border border-mcy-gold/40 bg-white px-3 py-[clamp(9px,2.6vw,13px)] shadow-[0_1px_4px_rgba(27,58,92,0.07)]">
              <span className="grid h-[clamp(30px,8.4vw,40px)] w-[clamp(30px,8.4vw,40px)] shrink-0 place-items-center rounded-full border-2 border-mcy-gold bg-white font-display text-[clamp(14px,4vw,19px)] font-black text-mcy-gold-deep">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="text-[clamp(13px,3.6vw,16px)] font-black leading-snug text-mcy-navy">
                  {s.name}
                </p>
                <p className="mt-[2px] text-[clamp(10px,2.8vw,12.5px)] font-medium leading-[1.6] text-mcy-navy/75">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-3 max-w-[460px] text-center text-[clamp(9px,2.5vw,11px)] font-medium text-mcy-navy/65">
          ※現場の状況により一部工程を実施しない場合がございます。
        </p>
      </section>

      {/* ===== restoration goal ===== */}
      <section className="w-full bg-white px-4 py-[clamp(20px,6vw,32px)]">
        <div className="text-center">
          <p className="text-[clamp(11px,3.1vw,14px)] font-bold text-mcy-navy/80">
            悲惨な状況の影も見えなくなるような
          </p>
          <h2 className="mt-[clamp(5px,1.6vw,9px)] font-display text-[clamp(21px,6vw,30px)] font-black leading-snug text-mcy-navy">
            誰が見ても<span className="text-mcy-turq-deep">納得</span>の
            <br />
            <span className="text-mcy-turq-deep">原状回復</span>がゴールです
          </h2>
          <span aria-hidden="true" className="mx-auto mt-[clamp(8px,2.2vw,12px)] block h-[3px] w-[clamp(48px,13vw,72px)] rounded-full bg-mcy-gold" />
        </div>
        <p className="mx-auto mt-[clamp(10px,3vw,16px)] max-w-[460px] text-[clamp(11.5px,3.2vw,14px)] font-medium leading-[2] text-mcy-navy/90 [word-break:auto-phrase]">
          清掃だけでなく、汚染箇所の建材撤去も行い、再利用できる素材を適切に処理します。作業後には、建材の補修や清掃を行い、元の状態に戻します。さらに、防臭・特殊コーティングで臭いの再発を長期的に防止します。原状回復まで一括で作業をすることで、皆様に安心いただける、徹底した特殊清掃ができることがセレンシアの強みです。
        </p>
        <div className="mx-auto mt-[clamp(12px,3.4vw,18px)] flex max-w-[460px] items-stretch overflow-hidden rounded-[14px] border-2 border-mcy-turq/30 shadow-[0_3px_10px_rgba(27,58,92,0.1)]">
          <img
            src="/img/kaiketsu_s4.jpg"
            alt="専用コーティング剤を噴霧する作業"
            width={370}
            height={500}
            loading="lazy"
            decoding="async"
            className="w-2/5 object-cover"
          />
          <div className="flex w-3/5 flex-col items-center justify-center bg-gradient-to-br from-mcy-navy to-mcy-navy-deep px-4 py-6 text-center text-white">
            <p className="font-display text-[clamp(14px,4vw,18px)] font-bold">
              さらに<span className="ml-1 text-[clamp(20px,5.6vw,26px)] text-mcy-gold">+α</span>
            </p>
            <p className="mt-2 text-[clamp(12px,3.4vw,15px)] font-bold leading-[1.8]">
              専用コーティング剤で
              <br />
              封じ込め<span className="text-mcy-gold">“密閉”</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
