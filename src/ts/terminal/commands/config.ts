import type { ProcessHandler } from "$ts/process/handler";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";
import { BRBLACK, BRBLUE, RESET } from "../store";

export class ConfigCommand extends TerminalProcess {
  public static keyword = "config";
  public static description = "List the ArcTerm configuration";

  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);
  }

  protected async main(term: ArcTerminal): Promise<number> {
    for (const [key, value] of Object.entries(term.config)) {
      term.rl?.println(`# ${BRBLUE}${key}${BRBLACK}:${RESET} ${value}`);
    }
    return 0;
  }
}
