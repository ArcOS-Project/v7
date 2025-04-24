import { formatBytes } from "$ts/fs/util";
import type { ProcessHandler } from "$ts/process/handler";
import type { Arguments, TerminalCommand } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";
import { BRBLACK, BRBLUE, RESET } from "../store";

export class QuotaCommand extends TerminalProcess {
  public static keyword = "quota";
  public static description = "Display your ArcOS filesystem quota";

  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);
  }

  protected async main(term: ArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
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
  }
}
