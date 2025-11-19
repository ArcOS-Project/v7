import type { ArcTerminal } from "..";
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

  protected async main(term: ArcTerminal) {
    term.daemon?.powerContext!.restart();
    return -256;
  }
}
