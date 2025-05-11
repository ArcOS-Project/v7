import type { ProcessHandler } from "$ts/process/handler";
import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class ExploreCommand extends TerminalProcess {
  public static keyword = "explore";
  public static description = "Open a folder in the File manager";

  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);
  }

  protected async main(term: ArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const path = argv.join(" ");

    term.daemon?.spawnApp("fileManager", term.pid, path ? term.join(path) : term.path);
    return 0;
  }
}
