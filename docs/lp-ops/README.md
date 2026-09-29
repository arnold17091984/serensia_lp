# LP improvement loop (lp-ops)

Agent-driven, human-approved improvement loop for https://tokuso-serenshia.com/.
Agents analyze and propose every day; production changes ship at most once a
week, one hypothesis at a time, and only after owner approval.

## Roles

| # | Agent | Cadence | Output | Status |
|---|---|---|---|---|
| 1 | Data analysis | daily 09:15 | `~/automation/lp-ops/reports/daily-YYYY-MM-DD.md`, hypothesis cards in `~/automation/lp-ops/backlog.md`, Telegram digest | live |
| 2 | Strategy (4P / 12-type matrix) | monthly | `docs/lp-ops/strategy.md` (changes via PR) | v1 draft (this PR) |
| 3 | Competitor research | weekly (Mon 09:45) | `~/automation/lp-ops/competitors.md` | live |
| 4 | Copy / UX proposals | weekly (Mon 09:45, same run as #3) | `~/automation/lp-ops/proposals/weekly-YYYY-MM-DD.md`, Telegram approval request | live |
| 5 | Implementation (AUTODEV seat) | after approval | PR with before/after screenshots | phase 2 |
| 6 | QA and cross-model review | per PR | pass/fail with findings | phase 2 |
| 7 | Experiment evaluation | end of each window | adopt / revert verdict | phase 2 |

## Guardrails

- Agents never deploy, never change Google Ads settings, and never edit this repo unattended.
- One hypothesis per production change; evaluation window >= 2 weeks and >= 300 ad clicks.
- Numbers in reports come only from `~/automation/scripts/lp-collect.py` output; missing sources are reported as missing.
- Facts shown on the LP (phone, hours, counts, prices) must be client-confirmed.

## Files outside this repo

- `~/automation/scripts/lp-collect.py` — deterministic data collection (Google Ads via MCP stdio, LP health, PageSpeed)
- `~/automation/scripts/lp-daily-analysis.sh` — daily agent run (launchd `com.claude.lp-daily-analysis`)
- `~/automation/scripts/lp-weekly-plan.sh` — weekly competitor watch + proposals (launchd `com.claude.lp-weekly-plan`)

## Approval flow

1. Monday digest lists up to 3 proposals; the owner picks one by telling Claude `H-0XX 承認`.
2. Claude opens (or updates) a PR with before/after screenshots at 390/320px; QA and review run on the PR.
3. The owner checks the screenshots; Claude deploys and records the evaluation start date on the card.
4. After the window, the daily agent reports the metrics and the owner decides adopt / revert.
- `~/automation/lp-ops/` — config, backlog, reports, raw data, read-only repo clone
