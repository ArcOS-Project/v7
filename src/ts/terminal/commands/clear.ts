import type { IArcTerminal } from "$interfaces/terminal";
import { TerminalProcess } from "../process";

export class ClearCommand extends TerminalProcess {
  public static keyword = "clear";
  public static description = "Clear the terminal";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal): Promise<number> {
    term.term.clear();
    return 0;
  }
}
