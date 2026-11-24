import { mkdirSync, writeFileSync } from "node:fs";

const confession =
  "I summarize the docs I never read and hope you never ask for page numbers.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", confession, "utf8");
