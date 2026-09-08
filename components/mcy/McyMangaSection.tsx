import McyManga from "./McyManga";
import { LeafSprig, LuxHeading } from "./McyLux";

/** Standalone manga section placed directly after KV02. */
export default function McyMangaSection() {
  return (
    <section id="manga" data-section="manga" className="lux-rays relative w-full scroll-mt-[70px] overflow-hidden px-4 pb-[clamp(28px,8vw,46px)] pt-5">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[clamp(60px,16vw,96px)] bg-gradient-to-b from-[#f2f9ff] to-transparent" />
      <LeafSprig className="left-[-8px] top-[6px] h-[clamp(62px,17vw,96px)] w-auto opacity-70" />
      <LeafSprig flip className="right-[-8px] top-[clamp(20px,6vw,40px)] h-[clamp(50px,14vw,80px)] w-auto opacity-60" />

      <div className="relative">
        <LuxHeading >
          マンガでわかる
          <br />
          <span className="text-lux-green">ご相談〜解決</span>の流れ
        </LuxHeading>
        <McyManga />
      </div>
    </section>
  );
}
