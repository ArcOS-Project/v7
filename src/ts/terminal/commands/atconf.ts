import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class AtConfCommand extends TerminalProcess {
  public static keyword = "atconf";
  public static description = "Edit the ArcTerm configuration file";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);
  }

  //#endregion

  protected async main(term: ArcTerminal): Promise<number> {
    await term.daemon?.openFile(term.CONFIG_PATH);
    return 0;
  }
}
