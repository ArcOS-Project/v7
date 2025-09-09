import type { ProcessHandler } from "$ts/process/handler";
import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class CdCommand extends TerminalProcess {
  public static keyword = "cd";
  public static description = "Change the current directory";

  //#region ELCYCEFIL

  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);
  }

  //#endregion

  protected async main(term: ArcTerminal, _: Arguments, argv: string[]): Promise<number> {
    const path = argv.join(" ");

    if (!path) return 1;

    return (await term.changeDirectory(term.join(path))) ? 0 : 1;
  }
}
