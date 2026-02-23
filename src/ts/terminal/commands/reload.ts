import type { IArcTerminal } from "$interfaces/terminal";
import { TerminalProcess } from "../process";

export class ReloadCommand extends TerminalProcess {
  public static keyword = "reload";
  public static description = "Reload the terminal";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal): Promise<number> {
    await term.reload();
    return 0;
  }
}
