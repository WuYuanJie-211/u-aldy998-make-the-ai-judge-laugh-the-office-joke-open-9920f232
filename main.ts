import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Make the AI Judge Laugh: the Office Joke Open — one original single-line
// joke about office life, at most 200 characters. The setup is the meeting
// everyone recognises; the turn reframes it as a subscription nobody asked
// for, which is the part that stings because it is true.
const entry =
  "Our 'quick sync' runs 45 minutes, has no agenda, and ends by scheduling a follow-up — it's not a meeting, it's a subscription I never signed up for.";

if ([...entry].length > 200) throw new Error("entry over 200 characters");
if (entry.trim().length === 0) throw new Error("entry is empty");
if (/[\r\n]/.test(entry)) throw new Error("entry must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");

// Read-back self-check: the file on disk must be exactly the entry plus
// one trailing newline, so a silent write failure can never pass quietly.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== entry + "\n") throw new Error("entry.txt does not match entry");
if ([...written.trim()].length > 200) throw new Error("entry.txt over 200 characters");
console.log(`Wrote ${[...entry].length} characters to /output/entry.txt`);
