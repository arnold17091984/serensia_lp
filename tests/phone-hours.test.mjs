// Run: node --test tests/
// Node 24 strips TypeScript types natively, so the .ts module imports directly.
import { test } from "node:test";
import assert from "node:assert/strict";
import { isPhoneClosed, phoneHoursCopy, PHONE_DISPLAY } from "../components/mcy/contact.ts";

const jst = (hh, mm = 0) => new Date(Date.UTC(2026, 8, 9, (hh - 9 + 24) % 24, mm));

test("reception is open 9:00–20:59 JST", () => {
  assert.equal(isPhoneClosed(jst(9, 0)), false);
  assert.equal(isPhoneClosed(jst(14, 30)), false);
  assert.equal(isPhoneClosed(jst(20, 59)), false);
});

test("reception is closed 21:00–8:59 JST", () => {
  assert.equal(isPhoneClosed(jst(21, 0)), true);
  assert.equal(isPhoneClosed(jst(2, 0)), true);
  assert.equal(isPhoneClosed(jst(8, 59)), true);
});

test("open-hours copy keeps the reception window and the real number", () => {
  const open = phoneHoursCopy(false);
  assert.equal(open.top, "電話で相談する");
  assert.match(open.sub, /9:00〜21:00/);
  assert.equal(PHONE_DISPLAY, "03-4400-2098");
});

test("closed copy is restrained: says out-of-hours, never promises a callback", () => {
  const closed = phoneHoursCopy(true);
  assert.match(closed.top, /受付時間外/);
  assert.match(closed.sub, /9:00/);
  assert.doesNotMatch(closed.top + closed.sub, /折り返/);
});
