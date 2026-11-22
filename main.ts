import { writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "Day 1 in public: post $100, plan, wallet. Days 2-30 one loop: escrowed make.fun bounties only, duel-test every draft vs top 10, enter only if it beats #1, quit a line after two losses. 120 entries, verified rates, settled only: $1,557 day 30, $871 floor, every payout published.";

// Output dir comes from MAKEFUN_OUTPUT_DIR (default "/output"); the program
// writes entry.txt there and never creates or modifies the directory itself.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
