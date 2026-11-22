import { writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "Day 1: publish plan and wallet, list a $25 bug-fix gig on Fiverr. Days 2-30: 2 escrow-paid fixes/day build the bankroll; profits enter only escrowed bounties, duel-tested vs top 10, enter only if it beats #1. $1,740 day 30, $725 floor, every payout published.";

// Output dir comes from MAKEFUN_OUTPUT_DIR (default "/output"); the program
// writes entry.txt there and never creates or modifies the directory itself.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
