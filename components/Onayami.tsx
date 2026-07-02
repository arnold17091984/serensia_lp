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
      viewBox="0 0 24 24"
      className="mt-1 h-5 w-5 shrink-0 -rotate-3"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="4"
        width="17"
        height="17"
        rx="2"
        fill="none"
        stroke="#d8e455"
        strokeWidth="2.5"
      />
      <path
        d="M6 12 L11 17 L22 3"
        fill="none"
        stroke="#d8e455"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Onayami() {
  return (
    <section
      className="w-full px-4 pb-14 pt-10"
      style={{
        background:
          "radial-gradient(circle at 15% 20%, rgba(122,146,128,0.55) 0%, transparent 45%), radial-gradient(circle at 85% 10%, rgba(70,70,68,0.6) 0%, transparent 35%), radial-gradient(circle at 80% 70%, rgba(126,150,132,0.4) 0%, transparent 45%), linear-gradient(165deg, #5c7365 0%, #47604f 45%, #33493d 100%)",
      }}
    >
      {/* green band */}
      <p className="mx-auto max-w-[440px] bg-brand-700 px-4 py-3 text-center text-[19px] font-bold leading-snug text-white">
        ご自身やご家族のため
        <br />
        近隣の方や入居者様のために
      </p>

      {/* headline */}
      <div className="mt-7 px-1 font-serif text-white">
        <p className="text-[30px] font-bold leading-tight">
          個人・法人の皆様は
        </p>
        <p className="mt-1 flex items-end justify-center gap-1">
          <span className="pb-2 text-[24px] font-bold">このように</span>
          <span className="relative -rotate-2 text-[46px] font-bold italic leading-none text-[#f2ea4d]">
            お悩み
            {/* underline swoosh */}
            <svg
              className="absolute -bottom-2 left-[-25%] w-[150%]"
              viewBox="0 0 200 14"
              aria-hidden="true"
            >
              <path
                d="M6 12 C 60 2, 150 0, 196 6"
                fill="none"
                stroke="#9aa89e"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </p>
        <p className="mt-4 text-right text-[26px] font-bold">
          ではありませんか？
        </p>
      </div>

      {/* dark box with checklist, bottom arrow shape */}
      <div className="mt-8">
        <ul className="space-y-5 rounded-t-md bg-[#4b4b49]/95 px-5 pb-4 pt-8">
          {CONCERNS.map((segments) => (
            <li
              key={segments.map((s) => s.text).join("")}
              className="flex items-start gap-3"
            >
              <CheckIcon />
              <p className="font-serif text-[16px] font-medium leading-relaxed text-white">
                {segments.map((seg) =>
                  seg.em ? (
                    <span key={seg.text} className="text-[#f2ea4d]">
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
        {/* downward arrow bottom edge */}
        <div
          className="h-12 bg-[#4b4b49]/95"
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
        />
      </div>
    </section>
  );
}
