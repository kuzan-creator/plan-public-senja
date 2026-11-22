// Entry: a 30-day public plan for turning $100 into the most money.
// The program only writes the plan text to entry.txt; it never touches
// the output directory itself.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The plan, assembled from its building blocks: public day 1, paid
// escrow bug fixes on days 2-30, bankroll spent only on escrowed
// make.fun bounties, duel-tested against the live top 10.
const plan =
  "Day 1 in public: post plan + wallet, list a $25 bug-fix gig on Fiverr. " +
  "Days 2-30: fix 2 escrowed bugs a day, spend it ONLY on escrowed make.fun bounties, " +
  "duel-test every draft vs live top 10, enter only if it beats #1. " +
  "$1,740 day 30, $725 floor, every payout published.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard: the bounty caps an entry at 280 Unicode code points.
if ([...plan].length > 280) {
  throw new Error(`plan is ${[...plan].length} code points, over the 280 limit`);
}
writeFileSync(join(outDir, "entry.txt"), plan, "utf8");
