/**
 * Contact constants shared by server and client components.
 * Kept in a plain module (no "use client"): importing a string from a client
 * module inside a server component yields a client *reference*, and
 * stringifying it (template literal / concatenation) emits the reference's
 * throwing stub instead of the value — which is how an aria-label ended up
 * carrying "function(){throw Error(...)}" in the static export.
 */
export const PHONE_TEL = "tel:0344002098";
export const PHONE_DISPLAY = "03-4400-2098";
export const LINE_URL = "https://page.line.me/782qjphg";

export const PHONE_HOURS = "9:00〜21:00";

/** Phone reception is 9:00–21:00 (JST, the audience's local time). */
export function isPhoneClosed(date: Date): boolean {
  const h = (date.getUTCHours() + 9) % 24;
  return h >= 21 || h < 9;
}

export interface PhoneHoursCopy {
  top: string;
  sub: string;
}

/**
 * Phone-button labels by reception state. Out of hours the button stays
 * tappable (the line still records the call attempt) but says so quietly
 * inside the button instead of a separate warning box; it deliberately does
 * not promise a callback, which nobody on the client side has committed to.
 */
export function phoneHoursCopy(closed: boolean): PhoneHoursCopy {
  return closed
    ? { top: "ただいま受付時間外", sub: `受付 ${PHONE_HOURS}・LINEは24時間` }
    : { top: "電話で相談する", sub: `受付 ${PHONE_HOURS} 年中無休` };
}
