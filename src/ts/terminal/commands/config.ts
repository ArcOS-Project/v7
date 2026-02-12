import type { IArcTerminal } from "$interfaces/terminal";
import { TerminalProcess } from "../process";
import { BRBLACK, BRBLUE, RESET } from "../store";

export class ConfigCommand extends TerminalProcess {
  public static keyword = "config";
  public static description = "List the ArcTerm configuration";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal): Promise<number> {
    for (const [key, value] of Object.entries(term.config)) {
      term.rl?.println(`# ${BRBLUE}${key}${BRBLACK}:${RESET} ${value}`);
    }
    return 0;
  }
}
