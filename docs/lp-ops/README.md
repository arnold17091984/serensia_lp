# LP improvement loop (lp-ops)

Agents do the daily work on https://tokuso-serenshia.com/ and its Google Ads
campaign; the Telegram message only lists what was done. Production LP deploys
stay owner-approved, at most one hypothesis per week, so each change can be
measured.

## Daily routine (09:15, launchd `com.claude.lp-daily-routine`)

| Step | Worker | What it does | Guard |
|---|---|---|---|
| 1 | `lp-collect.py` | Pulls Google Ads, LP health and PageSpeed numbers | deterministic |
| 2 | `qa/qa.mjs` | Production QA at 390/320/1440px: HTTP/JS errors, overflow, images, tel/LINE links, GA4 + Clarity beacons | deterministic; beacons are aborted so QA never pollutes analytics |
| 3 | `lp-daily-analysis.sh` | Writes the daily report and adds at most one hypothesis card | writes only backlog / report |
| 4 | `ads-daily-hygiene.sh` | Proposes negative keywords; `ads-negatives-apply.py` **applies** the ones that pass | phrase match, max 5/day, never blocks converting, protected or own keywords; every change logged with a rollback id |
| 5 | `lp-daily-work.sh` | Implements the best candidate card (or creates one from evidence) and opens a PR with before/after screenshots and a Codex review | allowed paths only, diff <= 150 lines, build + fact checks (phone, tags) + QA must pass, max 3 open agent PRs |
| 6 | `lp-digest.py` | One Telegram message: work done, QA status, cards, approvals waiting | — |

Agent runs fall back from `sonnet` to `opus` when a usage limit is hit (`lp-common.sh`).

## Weekly (Mon 09:45, launchd `com.claude.lp-weekly-plan`)

Competitor watch for five specialists (`~/automation/lp-ops/competitors.md`) and up to three proposals, pointing at the ready PRs.

## Guardrails

- LP: agents never deploy. The owner approves one PR per week (`H-0XX 承認`); evaluation window >= 2 weeks and >= 300 ad clicks.
- Ads: the only automatic change is adding phrase-match negatives that pass `ads-negatives-apply.py`. Budgets, bids and ads are never touched. Roll back with `ads-negatives-apply.py rollback <resource_name>` (see `~/automation/lp-ops/ads-changes.jsonl`).
- Numbers come from the collectors; missing sources are reported as missing.
- Facts on the LP (phone, hours, counts, prices) must already exist in the source or be client-confirmed.

## Files outside this repo

- `~/automation/scripts/` — the workers listed above, `lp-backlog.py`, `lp-common.sh`
- `~/automation/lp-ops/` — config, backlog, reports, raw data, QA runner, read-only clone (`repo/`), work clone (`work/`)
