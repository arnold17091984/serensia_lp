interface CaseItem {
  title: string;
  price: string;
  desc?: string;
  reasons?: string[];
  work: string[];
  workGroups?: { label: string; items: string[] }[];
  priceNotes: string[];
  before: string;
  after: string;
}

export const CASES: CaseItem[] = [
  {
    title: "トイレ｜孤独死の特殊清掃",
    price: "150,000",
    reasons: [
      "発見までの日数",
      "便器脱着の有無",
      "臭気の強さ",
      "床下まで体液が浸透しているか",
    ],
    work: [
      "体液・汚染物の除去",
      "床・壁・便器まわりの特殊洗浄",
      "除菌・消毒処理",
      "臭気対策（薬剤＋機械脱臭）",
      "必要に応じて便器脱着・床材撤去",
    ],
    priceNotes: [],
    before: "/img/before_toilet.webp",
    after: "/img/jisseki_3a.jpg",
  },
  {
    title: "浴室｜孤独死の特殊清掃",
    price: "200,000",
    reasons: [
      "浴槽下や排水管への汚染",
      "腐敗臭の残留レベル",
      "建材への染み込み具合",
      "解体作業の有無",
    ],
    work: [
      "浴槽内・床・排水口の体液除去",
      "壁面・天井の特殊洗浄",
      "除菌・消毒",
      "強力消臭処理",
      "必要に応じて浴槽パン・床材撤去",
    ],
    priceNotes: [],
    before: "/img/jisseki_4b.jpg",
    after: "/img/jisseki_4a.jpg",
  },
  {
    title: "事件現場｜玄関前の血液浸透・飛散除去",
    price: "220,000",
    desc: "玄関前に血液が飛び散り、床面へ浸透している状態。棚・下駄箱・ドアにも血痕が付着。臭気レベルは中程度（通常レベル）。",
    work: [
      "液付着物の除去",
      "床面の浸透部洗浄処理",
      "棚・下駄箱・ドアの血液除去",
      "除菌・消毒作業",
      "臭気対策（薬剤処理）",
    ],
    priceNotes: ["※汚染範囲・床材の種類・浸透深度により変動"],
    before: "/img/jisseki_2b.jpg",
    after: "/img/jisseki_2a.jpg",
  },
  {
    title: "畳の上での孤独死｜腐敗臭が強いケース",
    price: "330,000",
    desc: "和室の畳上で亡くなられていたケース。発見までに時間が経過しており、体液が畳・床下まで浸透。室内全体に強い腐敗臭が広がっている状態。",
    work: [
      "畳撤去・汚染物の回収処分",
      "体液付着部の除去",
      "床面の特殊洗浄",
      "除菌・消毒作業",
      "強力消臭処理",
    ],
    priceNotes: ["※畳撤去・特殊清掃・除菌消臭を含む"],
    before: "/img/before_tatami.webp",
    after: "/img/jisseki_1a.jpg",
  },
  {
    title: "孤独死｜腐敗臭＋タバコ臭＋残置物撤去",
    price: "380,000",
    desc: "腐敗臭レベルは中程度（普通）だが長年の生活によるタバコ臭も重なって残留。家具・生活用品などの残置物あり。一部残置物にも体液が付着している状態。",
    work: [
      "体液付着部の除去",
      "床・壁の特殊洗浄",
      "除菌・消毒作業",
      "消臭処理",
      "体液が付着した残置物の分別・撤去・処分",
      "室内残置物の撤去・処分",
    ],
    priceNotes: [
      "・特殊清掃：180,000円（※体液除去、除菌・消毒、消臭作業）",
      "・遺品整理(1DK)：200,000円（※体液付着物を含む）",
    ],
    before: "/img/jisseki_6b.jpg",
    after: "/img/jisseki_6a.jpg",
  },
  {
    title: "孤独死｜空間除菌消毒のみ＋遺品整理",
    price: "460,000",
    desc: "管理会社の判断により、本格的な特殊清掃（床剥がし・体液除去等）は不要となり、体液付着箇所を含む空間全体の除菌・消毒のみ実施。その後、遺品整理をご依頼いただいたケース。",
    work: [],
    workGroups: [
      {
        label: "特殊清掃（簡易対応）",
        items: [
          "体液付着箇所を含む空間除菌・消毒",
          "室内全体の簡易消臭・衛生処理",
        ],
      },
      {
        label: "遺品整理",
        items: ["室内残置物の仕分け", "不用品の搬出・処分", "貴重品探索"],
      },
    ],
    priceNotes: [
      "・特殊清掃：50,000円（※空間除菌消毒のみ）",
      "・遺品整理(2LDK)：410,000円",
    ],
    before: "/img/jisseki_5b.jpg",
    after: "/img/jisseki_5a.jpg",
  },
];
