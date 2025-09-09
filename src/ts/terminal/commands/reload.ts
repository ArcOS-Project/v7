import type { ProcessHandler } from "$ts/process/handler";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class ReloadCommand extends TerminalProcess {
  public static keyword = "reload";
  public static description = "Reload the terminal";

  //#region ELCYCEFIL

  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);
  }

  //#endregion

  protected async main(term: ArcTerminal): Promise<number> {
    await term.reload();
    return 0;
  }
}
