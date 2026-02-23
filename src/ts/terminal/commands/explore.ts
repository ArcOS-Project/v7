import type { IArcTerminal } from "$interfaces/terminal";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";

export class ExploreCommand extends TerminalProcess {
  public static keyword = "explore";
  public static description = "Open a folder in the File manager";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const path = argv.join(" ");

    term.daemon?.spawn?.spawnApp("fileManager", term.pid, path ? term.join(path) : term.path);
    return 0;
  }
}
