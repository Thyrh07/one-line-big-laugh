// One Line, Big Laugh — entry program.
// Writes a single hilarious line (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;
const OUTPUT = "/output/entry.txt";

const LINE =
  "I told my smart speaker I was lonely. It said, 'Playing: sounds of a crowded room.' Now we're both pretending.";

// Gate validation: the entry must be 1-200 non-whitespace UTF-8 characters.
if (LINE.length < 1 || LINE.length > MAX_CHARS || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, LINE, "utf8");
console.log(LINE);
