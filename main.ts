import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Day 1 in public: post $100, plan, wallet — $0 fees. Days 2-30: escrowed make.fun bounties only. Duel every draft vs top 10; enter only if it beats #1; quit on 2 losses. Publish duels first. 120 entries, verified, settled, 24-48h payouts: $1,557 day 30, $871 floor, reinvest wins.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, text, "utf8");
