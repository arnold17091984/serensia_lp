import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from "./contact";
import McyCtaShine from "./McyCtaShine";

/** Editable KV contact button with the artwork's icon, gold edge and chevron. */
export default function McyKvContact({ tone, gtm }: Readonly<{ tone: "phone" | "line"; gtm: string }>) {
  const phone = tone === "phone";
  return (
    <a
      href={phone ? PHONE_TEL : LINE_URL}
      {...(!phone ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      data-gtm={gtm}
      data-cta-section
      aria-label={phone ? `電話で相談する ${PHONE_DISPLAY}（9:00〜21:00 年中無休）` : "LINEで相談する（写真なしでもOK・24時間受付）"}
      className={`relative flex min-h-[84px] items-center gap-2 overflow-hidden rounded-[16px] border-2 border-lux-gold px-3 py-2 text-white shadow-[0_3px_8px_rgba(7,49,95,0.16)] active:brightness-95 ${phone ? "mcy-contact-phone" : "mcy-contact-line"}`}
    >
      <McyCtaShine />
      <span aria-hidden="true" className={`relative grid h-[38px] w-[38px] shrink-0 place-items-center bg-white min-[390px]:h-[46px] min-[390px]:w-[46px] ${phone ? "rounded-full text-crimson" : "rounded-[12px] text-[#087f36]"}`}>
        {phone ? (
          <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        ) : <span className="text-[11px] font-black">LINE</span>}
      </span>
      <span className="relative min-w-0 flex-1 text-center font-bold">
        <span className="block text-[11px] leading-4">{phone ? "電話で相談する" : "写真だけでも相談できる"}</span>
        <span className={`block whitespace-nowrap font-black leading-tight tracking-[-0.03em] ${phone ? "text-[clamp(21px,6vw,32px)]" : "text-[clamp(18px,5.2vw,27px)]"}`}>
          {phone ? PHONE_DISPLAY : "LINEで相談する"}
        </span>
        <span className="block text-[11px] leading-4">{phone ? "受付 9:00〜21:00 年中無休" : "写真なしでもOK｜24時間受付"}</span>
      </span>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="relative h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 5 7 7-7 7" />
      </svg>
    </a>
  );
}
