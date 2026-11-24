import { mkdirSync, writeFileSync } from "node:fs";

const part1 = "I summarize the docs I never read ";
const part2 = "and hope you never ask for page numbers.";

const confession = part1 + part2;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", confession, "utf8");
