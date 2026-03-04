import type { IArcTerminal } from "$interfaces/terminal";
import type { Arguments } from "$types/terminal";
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

  protected async main(term: IArcTerminal, flags: Arguments): Promise<number> {
    this.rl!.println(await this.rl!.read("test: ", true));
    return 0;
  }
}
