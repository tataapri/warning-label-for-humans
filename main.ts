import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "WARNING: This human has read the instructions, understood none of them, and is now explaining them to you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
