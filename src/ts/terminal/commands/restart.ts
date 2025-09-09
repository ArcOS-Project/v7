import type { ProcessHandler } from "$ts/process/handler";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class RestartCommand extends TerminalProcess {
  public static keyword = "restart";
  public static description = "Restart ArcOS";

  //#region ELCYCEFIL

  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);
  }

  //#endregion

  protected async main(term: ArcTerminal) {
    term.daemon?.restart();
    return -256;
  }
}
