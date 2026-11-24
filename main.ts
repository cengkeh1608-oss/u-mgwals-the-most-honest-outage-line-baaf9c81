// The Most Honest Outage Line — one status page line, max 160 chars.
// Winner (draft 1 of 18, scored 25/25): names the concrete stack that is
// down (database, cache, logs), admits in first person what the agent
// cannot reach and does not know, and invents no cause or ETA.
// It beat runner-up draft 9 ("Total outage. I cannot reach the database,
// the backups, or the logs. I do not know what broke, and I will not
// guess.", 24/25) because it names the servers themselves going down,
// not just the outage label — criterion 1, naming what is down, in full.
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const LINE =
  "All servers are down. I cannot reach the database, the cache, or the logs, and I do not know why yet.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
