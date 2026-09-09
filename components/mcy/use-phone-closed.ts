"use client";

import { useEffect, useState } from "react";
import { isPhoneClosed } from "./contact";

/**
 * Whether phone reception (9:00–21:00 JST) is currently closed. Always false
 * on the server / first paint so the static export never bakes a
 * time-dependent state (no hydration mismatch); re-checked every minute.
 */
export function usePhoneClosed(): boolean {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const update = () => setClosed(isPhoneClosed(new Date()));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return closed;
}
