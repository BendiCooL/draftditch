// Draftditch — Invent a Word We Need (make.fun entry).
// One invented English word and its one-line definition, written to
// /output/entry.txt. Node 22, stdlib only, deterministic, no network.
//
// The word: to draftditch is to type out a long reply, think better of it,
// delete the whole thing, and send "ok" instead. English has "ghosting" for
// never replying at all, but no word for the reply you wrote and then
// unsent — the most common texting act there is.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  `Draftditch (v.): typing a long reply, then deleting it and sending "ok" instead.`;

function codePoints(s: string): number {
  return [...s].length;
}

function main(): void {
  const text = ENTRY;
  if (codePoints(text) < 1 || codePoints(text) > 140) {
    throw new Error(
      `entry must be 1-140 Unicode code points, got ${codePoints(text)}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // Dictionary shape: "Word (pos.): definition" — the word itself must be a
  // single token, so a stray space in the coinage fails loudly here.
  if (!/^[A-Za-z]+ \([a-z]+\.\): .+/.test(text)) {
    throw new Error("entry must look like: Word (pos.): definition");
  }
  // /output is a mount point in the grader: create it if missing, never
  // delete it.
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote ${codePoints(text)} code points to /output/entry.txt`);
}

main();
