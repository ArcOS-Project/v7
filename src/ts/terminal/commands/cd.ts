import type { IArcTerminal } from "$interfaces/terminal";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";

export class CdCommand extends TerminalProcess {
  public static keyword = "cd";
  public static description = "Change the current directory";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal, _: Arguments, argv: string[]): Promise<number> {
    const path = argv.join(" ");

    if (!path) return 1;

    return (await term.changeDirectory(term.join(path))) ? 0 : 1;
  }
}
