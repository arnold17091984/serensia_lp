/**
 * ビフォー・アフター — paired photos of real special-cleaning sites, shown inside
 * the gallery section. Before shots are mosaicked over the contaminated area and
 * anything owner-identifying is blurred (publication approved by the client).
 * "After" is the state right after removal / deodorizing work, not a finished
 * renovation, so the labels say exactly that.
 */

const CASES: ReadonlyArray<{ id: number; place: string; work: string }> = [
  { id: 1, place: "台所の床", work: "床材を撤去し、下地を防臭コーティング" },
  { id: 2, place: "居間", work: "家財を搬出し、床材の撤去と消臭を実施" },
  { id: 3, place: "寝室", work: "寝具・家財を搬出し、汚染した床材を撤去" },
  { id: 4, place: "リビング", work: "家財搬出・床材撤去・防臭コーティング" },
];

function Shot({ id, phase, place }: Readonly<{ id: number; phase: "before" | "after"; place: string }>) {
  const isBefore = phase === "before";
  return (
    <figure className="relative min-w-0 flex-1 overflow-hidden rounded-[10px] ring-1 ring-lux-gold/35">
      <img
        src={`/img/ba_${id}_${phase}.webp`}
        alt={`特殊清掃の${isBefore ? "作業前" : "作業後"}：${place}${isBefore ? "（汚染箇所はモザイク処理）" : ""}`}
        width={720}
        height={960}
        loading="lazy"
        decoding="async"
        className="aspect-[3/4] w-full object-cover object-center"
      />
      <figcaption
        className={`absolute left-0 top-0 rounded-br-[10px] px-[clamp(9px,2.6vw,12px)] py-[clamp(4px,1.2vw,6px)] text-[clamp(13.5px,3.6vw,15px)] font-black leading-none tracking-[0.04em] text-white ${
          isBefore ? "bg-[#3b4652]" : "bg-lux-green"
        }`}
      >
        {isBefore ? "作業前" : "作業後"}
      </figcaption>
    </figure>
  );
}

export default function McyBeforeAfter() {
  return (
    <div className="mx-auto mt-[clamp(16px,4.4vw,24px)] flex max-w-[460px] flex-col gap-[clamp(12px,3.4vw,16px)]">
      {CASES.map((c) => (
        <article
          key={c.id}
          className="rounded-[16px] border-[3px] border-white bg-white p-[clamp(8px,2.4vw,12px)] shadow-[0_8px_22px_rgba(7,49,95,0.14)]"
        >
          <div className="flex items-stretch gap-[clamp(5px,1.6vw,8px)]">
            <Shot id={c.id} phase="before" place={c.place} />
            <span aria-hidden="true" className="flex shrink-0 items-center text-[clamp(16px,4.6vw,20px)] font-black text-lux-gold-deep">
              ▶
            </span>
            <Shot id={c.id} phase="after" place={c.place} />
          </div>
          <div className="mt-[clamp(8px,2.2vw,10px)] flex items-start gap-[7px] px-[2px] text-lux-green-ink">
            <span aria-hidden="true" className="mt-[4px] h-[clamp(38px,10.4vw,44px)] w-[3px] shrink-0 rounded-full bg-gradient-to-b from-lux-gold-light to-lux-gold-deep" />
            <p className="min-w-0">
              <span className="block text-[clamp(15px,4.1vw,17px)] font-black leading-[1.5]">{c.place}</span>
              <span className="block text-[clamp(14px,3.75vw,15.5px)] font-bold leading-[1.5] [text-wrap:balance]">{c.work}</span>
            </p>
          </div>
        </article>
      ))}
      <p className="text-center text-[clamp(13.5px,3.6vw,15px)] font-medium leading-[1.7] text-lux-green-ink/90 [text-wrap:pretty]">
        ※作業前の写真は、汚染箇所にモザイク処理をしています。作業後は、撤去・消臭を終えた時点の状態です。
      </p>
    </div>
  );
}
