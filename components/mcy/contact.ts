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
