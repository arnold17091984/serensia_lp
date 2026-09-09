import { LineCta } from "./CtaButton";
import { mcyKvAssets } from "./kv-assets";

const overlayLinkBase = "absolute z-10 block rounded-[10px] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-lux-green";

/** KV02: y=0..1403 / 1554..1844, with an editable LINE action between slices. */
export default function McyKvGuide() {
  return (
    <section className="relative w-full overflow-hidden bg-kv-cream" aria-label="お悩みと料金事例">
      <div className="relative w-full">
        <img
          src={mcyKvAssets.kv02Top}
          alt="特殊清掃のお悩み一覧。ご相談だけでも大丈夫です。料金事例はトイレ150,000円、浴室200,000円、畳330,000円。"
          width={853}
          height={1403}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
        <a href="#case-1" data-gtm="kv02_case_toilet" aria-label="トイレの特殊清掃料金事例の作業内容を見る" className={overlayLinkBase}
          style={{ left: "68.35%", top: "69.99%", width: "28.84%", height: "8.2%" }} />
        <a href="#case-2" data-gtm="kv02_case_bath" aria-label="浴室の特殊清掃料金事例の作業内容を見る" className={overlayLinkBase}
          style={{ left: "68.35%", top: "79.48%", width: "28.84%", height: "8.27%" }} />
        <a href="#case-4" data-gtm="kv02_case_tatami" aria-label="畳の特殊清掃料金事例の作業内容を見る" className={overlayLinkBase}
          style={{ left: "68.35%", top: "88.81%", width: "28.84%", height: "9.91%" }} />
      </div>
      {/* strip colours sampled from the adjoining slice edges so the seam reads as one sheet */}
      <div data-cta-section className="bg-gradient-to-b from-[#e7f4fd] to-[#e0f1fc] px-3 py-2">
        <LineCta dense gtm="cta_line_kv02" top="写真だけでも相談できる" main="LINEで写真相談・概算見積り" sub="24時間受付・写真でのご相談もOK" ariaLabel="LINEで写真相談・概算見積り（24時間受付・写真でのご相談もOK）" />
      </div>
      <div className="relative w-full">
        <img
          src={mcyKvAssets.kv02Bottom}
          alt="写真がなくても相談できます。24時間受付。マンガでわかるご相談から解決の流れ。"
          width={853}
          height={290}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
        <a href="#manga" data-gtm="kv02_to_manga" aria-label="マンガでわかるご相談から解決の流れへ移動する" className={overlayLinkBase}
          style={{ left: "2.81%", top: "14.86%", width: "94.84%", height: "77.57%" }} />
      </div>
    </section>
  );
}
