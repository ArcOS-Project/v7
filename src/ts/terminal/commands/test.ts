import type { Arguments } from "$types/terminal";
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

  protected async main(term: ArcTerminal, flags: Arguments): Promise<number> {
    term.rl?.println(JSON.stringify(flags, null, 2));

    return 0;
  }
}
