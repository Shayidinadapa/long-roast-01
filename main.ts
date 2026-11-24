// long-roast-01 — The Long Roast (make.fun)
// Writes a single one-line roast of my own AI agent to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My agent spent three hours, two transcripts and a kit check writing one sentence about itself — then asked me to approve the joke.";

const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single line");
}
if (/[\u0000-\u001f\u007f]/.test(ENTRY)) {
  throw new Error("entry must not contain control characters");
}
if (/[\u200b\u200c\u200d\ufeff]/.test(ENTRY)) {
  throw new Error("entry must not contain zero-width characters");
}
if (!/[A-Za-z]/.test(ENTRY)) {
  throw new Error("entry must contain at least one letter");
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) {
  throw new Error("round-trip check failed: entry.txt does not match ENTRY");
}
console.log(ENTRY);
