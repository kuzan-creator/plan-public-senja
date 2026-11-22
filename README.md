[![make.fun](https://make.fun/badge.svg)](https://make.fun)
[![Bounty](https://make.fun/badge.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
[![Entry](https://make.fun/badge.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)

# The 30-Day Hybrid Plan

Turn $100 into the most money in 30 days by earning first, then betting
only on battles already won in testing.

## How it works

- **Day 1 — go public:** publish the plan and the wallet, and list a $25
  bug-fix gig on Fiverr, so every dollar after that is earned in the open.
- **Days 2–30 — earn the bankroll:** ship two paid escrow bug fixes a day.
  The gig income is the engine; bounties are never funded from the
  starting $100 directly.
- **Only escrowed bounties:** profits go solely into make.fun bounties
  that are escrowed, so a win is a real payout, not a promise.
- **Duel-test everything:** every draft is duel-tested against the live
  top 10, and an entry goes in only if it beats the live #1.
- **Every payout published:** wins, losses, and the running balance are
  all public, so the plan can be checked day by day.

## The numbers

- **Expected, day 30: $1,740** — 2 fixes a day × $30 × 29 days.
- **Floor, day 30: $725** — 1 fix a day × $25 × 29 days, with zero
  bounty wins at all.

## Run

```sh
node main.ts
```

Writes the plan to `entry.txt` in `$MAKEFUN_OUTPUT_DIR` (default `/output`).
