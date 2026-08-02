"use client";

import { useEffect, useState } from "react";

/** Phone reception is 9:00–21:00 (JST, the audience's local time). */
export function isPhoneClosed(date: Date): boolean {
  const h = date.getHours();
  return h >= 21 || h < 9;
}

/**
 * Out-of-hours notice for phone CTAs. The FV phone button stays visible 24/7,
 * but between 21:00 and 9:00 a tap is a dead end (call goes unanswered while
 * still counting as an ad conversion). Rendered empty on the server / first
 * paint so the static export never bakes a time-dependent state (no hydration
 * mismatch); after mount it re-checks every minute.
 */
export default function PhoneHoursNotice() {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const update = () => setClosed(isPhoneClosed(new Date()));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!closed) return null;

  return (
    <p
      role="status"
      className="rounded-[10px] border border-amber-300 bg-amber-50 px-[clamp(10px,3vw,14px)] py-[clamp(8px,2.2vw,10px)] text-center text-[clamp(11px,3vw,12.5px)] font-bold leading-[1.7] text-[#7a4a00] [word-break:auto-phrase]"
    >
      ただいま電話受付時間外です（受付 9:00〜21:00）
      <span className="mt-[2px] block">
        <span className="text-[#0b7a20]">LINEなら24時間受付中</span>
        ——下の緑のボタンからどうぞ
      </span>
    </p>
  );
}
