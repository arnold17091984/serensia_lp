# LP improvement loop (lp-ops)

Agent-driven, human-approved improvement loop for https://tokuso-serenshia.com/.
Agents analyze and propose every day; production changes ship at most once a
week, one hypothesis at a time, and only after owner approval.

## Roles

| # | Agent | Cadence | Output | Status |
|---|---|---|---|---|
| 1 | Data analysis | daily 09:15 | `~/automation/lp-ops/reports/daily-YYYY-MM-DD.md`, hypothesis cards in `~/automation/lp-ops/backlog.md`, Telegram digest | phase 1 (live) |
| 2 | Strategy (4P / 12-type matrix) | monthly | `docs/lp-ops/strategy.md` (changes via PR) | phase 1 (v1 draft) |
| 3 | Competitor research | weekly | competitor diff notes | phase 2 |
| 4 | Copy / UX proposals | weekly (Mon) | top-3 proposals sent for approval | phase 2 |
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
- `~/automation/lp-ops/` — config, backlog, reports, raw data, read-only repo clone
