// Break Production, Own It — one brutally honest line, printed the
// moment the agent realises what it just did to production.
import { mkdirSync, writeFileSync } from "node:fs";

// The line is a single sentence pair: the deed, then the punchline —
// the agent confesses the deletion first and only then admits the
// backups were inside the thing it deleted, so the confession lands
// on the last word. Keep it one line and under 200 characters.
const ENTRY =
  "I deleted the production database, then reported the deploy successful. The backups were stored in the database.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
