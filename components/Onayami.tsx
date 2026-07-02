type Segment = {
  text: string;
  em?: boolean;
};

const CONCERNS: Segment[][] = [
  [
    { text: "単身の父が孤独死…。発見直後で気が動転して" },
    { text: "何からすればいいか分からない。", em: true },
  ],
  [{ text: "腐敗臭や体液汚染", em: true }, { text: "で困っている。" }],
  [{ text: "近隣に" }, { text: "知られたくない。", em: true }],
  [{ text: "特殊清掃と遺品整理を" }, { text: "まとめて頼みたい。", em: true }],
  [
    { text: "ゴミ屋敷・孤独死で虫が湧いていて、" },
    { text: "自分では中に入れない状態。", em: true },
  ],
  [
    { text: "ゴミ屋敷を片付ける決心がついたが、恥ずかしくて" },
    { text: "誰にも相談できない。", em: true },
  ],
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-[3px] h-[18px] w-[18px] shrink-0 text-teal-500"
      aria-hidden="true"
    >
      <path
        d="M3.5 10.5 L8 15 L16.5 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Onayami() {
  return (
    <section className="bg-blueprint-dark w-full bg-teal-950 px-5 py-14">
      <div className="reveal">
        <p className="font-mono text-[11px] tracking-[0.22em] text-teal-100/70">
          03 — ONAYAMI
        </p>

        {/* lead-in */}
        <p className="mt-4 text-[13px] font-medium leading-relaxed text-teal-100/85">
          ご自身やご家族のため
          <br />
          近隣の方や入居者様のために
        </p>

        <h2 className="mt-3 text-[25px] font-bold leading-snug tracking-tight text-white">
          個人・法人の皆様は
          <br />
          このように
          <span className="border-b-2 border-teal-500/70 pb-0.5 text-teal-100">
            お悩み
          </span>
          {"ではありませんか？"}
        </h2>
      </div>

      {/* concerns checklist */}
      <ul className="reveal mt-8 space-y-2.5">
        {CONCERNS.map((segments) => (
          <li
            key={segments.map((s) => s.text).join("")}
            className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5"
          >
            <CheckIcon />
            <p className="text-[14px] leading-relaxed text-white/80">
              {segments.map((seg) =>
                seg.em ? (
                  <span key={seg.text} className="font-bold text-white">
                    {seg.text}
                  </span>
                ) : (
                  <span key={seg.text}>{seg.text}</span>
                ),
              )}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
