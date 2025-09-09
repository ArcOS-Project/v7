import type { ProcessHandler } from "$ts/process/handler";
import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class ClearCommand extends TerminalProcess {
  public static keyword = "clear";
  public static description = "Clear the terminal";

  //#region LIFECYCLE

  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);
  }

  //#endregion

  protected async main(term: ArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    term.term.clear();
    return 0;
  }
}
