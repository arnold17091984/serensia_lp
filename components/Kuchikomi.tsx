const SHIELD_CLIP =
  "polygon(50% 0%, 100% 7%, 100% 66%, 50% 100%, 0% 66%, 0% 7%)";

type ShieldProps = {
  lines: string[];
  red: string;
};

function Shield({ lines, red }: ShieldProps) {
  return (
    <div
      className="w-full p-[3px] drop-shadow-[0_4px_6px_rgba(90,60,10,0.35)]"
      style={{
        clipPath: SHIELD_CLIP,
        background:
          "linear-gradient(180deg, #e8c463 0%, #b8862c 60%, #8a6423 100%)",
      }}
    >
      <div
        className="flex w-full flex-col items-center px-2 pb-[32%] pt-3 text-center"
        style={{
          clipPath: SHIELD_CLIP,
          background:
            "linear-gradient(180deg, #ffffff 0%, #f8efd8 45%, #ecd9a8 100%)",
        }}
      >
        {/* star arc */}
        <p
          className="flex items-end gap-[3px] leading-none text-gold-500"
          aria-hidden="true"
        >
          <span className="text-[8px]">★</span>
          <span className="text-[11px]">★</span>
          <span className="text-[14px]">★</span>
          <span className="text-[11px]">★</span>
          <span className="text-[8px]">★</span>
        </p>
        <p className="mt-1.5 font-serif text-[17px] font-bold leading-snug text-[#2b2416]">
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <p className="mt-1 whitespace-nowrap font-serif text-[24px] font-black leading-none text-accent">
          {red}
        </p>
      </div>
    </div>
  );
}

export default function Kuchikomi() {
  return (
    <section className="w-full">
      {/* TODO: Googleクチコミの★数・件数・実口コミへのリンクを追加すると効果的（要実データ） */}

      {/* Upper: dark brown area with sparkles */}
      <div
        className="relative overflow-hidden px-5 pb-24 pt-10 text-center"
        style={{
          background:
            "radial-gradient(circle at 20% 15%, #4a3524 0%, transparent 45%), radial-gradient(circle at 80% 60%, #45301f 0%, transparent 50%), linear-gradient(180deg, #332216 0%, #3d2a1a 60%, #2e1f12 100%)",
        }}
      >
        {/* sparkle decorations */}
        <span
          aria-hidden="true"
          className="absolute left-5 top-10 text-xl text-[#f4e3ae]/80"
        >
          ✦
        </span>
        <span
          aria-hidden="true"
          className="absolute right-8 top-6 text-sm text-white/60"
        >
          ✦
        </span>
        <span
          aria-hidden="true"
          className="absolute left-10 top-44 text-[10px] text-white/50"
        >
          ✦
        </span>
        <span
          aria-hidden="true"
          className="absolute right-5 top-56 text-lg text-[#f4e3ae]/70"
        >
          ✦
        </span>
        <span
          aria-hidden="true"
          className="absolute bottom-24 left-6 text-base text-white/40"
        >
          ✦
        </span>

        <h2 className="relative bg-gradient-to-b from-white via-[#fdf6dd] to-[#e3bf6b] bg-clip-text font-serif text-[27px] font-bold tracking-wide text-transparent">
          特殊清掃の豊富な実績
        </h2>

        {/* gold crown */}
        <svg
          viewBox="0 0 96 60"
          className="mx-auto mt-4 h-12 w-20"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="kuchikomiCrownGold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f4d98a" />
              <stop offset="0.5" stopColor="#d3a343" />
              <stop offset="1" stopColor="#a2731f" />
            </linearGradient>
          </defs>
          <path
            d="M10 48 L4 16 L28 32 L48 6 L68 32 L92 16 L86 48 Z"
            fill="url(#kuchikomiCrownGold)"
          />
          <rect
            x="10"
            y="51"
            width="76"
            height="7"
            rx="2"
            fill="url(#kuchikomiCrownGold)"
          />
          <circle cx="4" cy="13" r="3.5" fill="#f4d98a" />
          <circle cx="48" cy="5" r="4" fill="#f4d98a" />
          <circle cx="92" cy="13" r="3.5" fill="#f4d98a" />
        </svg>

        {/* Google クチコミ */}
        <p className="mt-4 flex items-center justify-center gap-2">
          <span className="rounded-full bg-white px-3 py-1.5 text-[26px] font-bold leading-none tracking-tight">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
          <span className="text-[22px] font-bold text-white">クチコミ</span>
        </p>

        <p className="mt-2 bg-gradient-to-b from-[#fbeec2] via-[#e9c25f] to-[#a87c22] bg-clip-text font-serif text-[52px] font-black leading-tight tracking-wide text-transparent">
          高評価獲得
        </p>
      </div>

      {/* Lower: gold gradient area with shield badges */}
      <div
        className="relative px-4 pb-8"
        style={{
          background:
            "linear-gradient(135deg, #f7e6ae 0%, #eccb72 35%, #d9a94a 70%, #c9942e 100%)",
        }}
      >
        <div className="relative z-10 -mt-16 flex justify-center">
          <div className="w-[230px]">
            <Shield lines={["孤独死", "事故死現場"]} red="実績多数" />
          </div>
        </div>
        <div className="relative z-10 -mt-4 flex justify-center gap-2">
          <div className="w-[47%]">
            <Shield lines={["代表自らが", "現場へ"]} red="立ち合い" />
          </div>
          <div className="w-[47%]">
            <Shield lines={["管理会社様", "から"]} red="継続依頼" />
          </div>
        </div>
      </div>

      {/* bottom band */}
      <p className="bg-[#57511f] py-3 text-center font-serif text-[20px] font-bold tracking-wide text-[#f6ecc9]">
        本当にありがとうございます!
      </p>
    </section>
  );
}
