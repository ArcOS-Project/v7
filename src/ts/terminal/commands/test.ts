import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class TestCommand extends TerminalProcess {
  public static keyword: string = "test";
  public static description: string = "test";
  public static hidden: boolean = true;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: ArcTerminal): Promise<number> {
    term.rl?.println(`${this.HAS_SUDO}`);

    return 0
  }
}
