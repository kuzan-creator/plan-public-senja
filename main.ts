// Hybrid 30-day plan: paid escrow gigs build the bankroll,
// then only escrowed bounties that duel-beat the live #1 get entered.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const plan =
  "Day 1: publish plan + wallet, list a $25 bug-fix gig on Fiverr. Days 2-30: ship 2 paid escrow fixes daily, bankroll only escrowed make.fun bounties, duel-test each draft vs live top 10, enter only if it beats #1. $1,740 day 30, $725 floor, every payout published.";

// Write the plan as plain UTF-8 text, exactly as composed above.
writeFileSync(join(targetDir, "entry.txt"), plan, "utf8");
