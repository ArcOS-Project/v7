import type { IArcTerminal } from "$interfaces/terminal";
import { TerminalProcess } from "../process";

export class RestartCommand extends TerminalProcess {
  public static keyword = "restart";
  public static description = "Restart ArcOS";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal) {
    term.daemon?.power?.restart();
    return -256;
  }
}
