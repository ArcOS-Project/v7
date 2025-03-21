import { formatBytes } from "$ts/fs/util";
import type { TerminalCommand } from "$types/terminal";
import { BRBLACK, BRBLUE, RESET } from "../store";

export const QuotaCommand: TerminalCommand = {
  keyword: "quota",
  async exec(term, flags, argv) {
    const BAR_LENGTH = 50;
    const quota = await term.fs.drives.userfs?.quota();

    if (!quota) {
      term.Error("failed to get UserFS quota!");
      return 1;
    }

    const perc = (100 / quota.max) * quota.used;
    const filled = perc / 2;
    const filler = "#".repeat(filled).padEnd(BAR_LENGTH, " ");
    const used = formatBytes(quota.used);
    const max = formatBytes(quota.max);
    const sub = `${BRBLACK}${used.padEnd(BAR_LENGTH + 2 - max.length, " ") + max}${RESET}`;

    term.rl?.println(`(${BRBLUE}${filler}${RESET})`);
    term.rl?.println(sub);

    return 0;
  },
  description: "Display your ArcOS filesystem quota",
};
