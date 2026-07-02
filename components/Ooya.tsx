/**
 * Section: 大家様・管理会社様向け（design-refs/05_ooya.jpg）
 * Deep-green diagonal header + body copy + 3 gold circle badges over a work photo.
 */

function GoldCircleBadge({
  small,
  big,
}: {
  small: string[];
  big: string;
}) {
  return (
    <div className="aspect-square w-[31.5%] max-w-[160px] rounded-full bg-gradient-to-br from-gold-400 via-gold-700 to-gold-400 p-[5px] shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
      <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#f7f1e3] to-[#eee3cb] text-center">
        <p className="text-[11px] font-bold leading-[1.4] text-ink">
          {small.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <p className="mt-0.5 font-serif text-[17px] font-bold leading-tight text-[#7a1618]">
          {big}
        </p>
      </div>
    </div>
  );
}

export default function Ooya() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f4f2ed] to-[#e9e6df]">
      {/* Deep-green header with diagonal bottom edge */}
      <div className="relative overflow-hidden bg-gradient-to-b from-brand-900 to-brand-950 px-5 pb-16 pt-9 text-center [clip-path:polygon(0_0,100%_0,100%_89%,0_100%)]">
        {/* subtle lighter diagonal sheen */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-brand-700/30 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
        <p className="relative inline-block rounded border-2 border-white bg-accent px-4 py-1.5 text-[17px] font-bold tracking-wide text-white">
          次の入居者のために物件を回復
        </p>
        <h2 className="relative mt-3 font-serif font-bold text-white">
          <span className="block text-[30px] leading-[1.4] tracking-wide">
            大家様・管理会社様の
          </span>
          <span className="block text-[35px] leading-[1.35] tracking-wide">
            SOSも緊急対応
          </span>
        </h2>
      </div>

      {/* Body copy */}
      <p className="px-5 pt-7 text-[16px] font-medium leading-[2] text-ink">
        管理をする物件で事故やトラブルが発生した際は緊急を要することで、ご相談をいただくことが多くあります。一刻も早く、次の入居者が安心して住める状態に戻すため、セレンシアが迅速に駆けつけます。汚染除去・消臭・消毒から、必要に応じた建材撤去や原状回復の段取りまで一括で進められます。
      </p>

      {/* Gold circle badges overlapping the photo below */}
      <div className="relative z-10 -mb-12 mt-6 flex items-stretch justify-center gap-2 px-3">
        <GoldCircleBadge small={["解体から", "原状回復まで"]} big="一貫対応" />
        <GoldCircleBadge small={["近隣住民", "への配慮を"]} big="徹底" />
        <GoldCircleBadge small={["緊急時も"]} big="迅速対応" />
      </div>

      {/* Work photo */}
      <img
        src="/img/ooya_photo.jpg"
        alt="物件のドアを丁寧に清掃するセレンシアのスタッフ"
        width={1000}
        height={410}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
    </section>
  );
}
