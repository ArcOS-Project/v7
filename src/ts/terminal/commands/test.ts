import type { ProcessHandler } from "$ts/process/handler";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class TestCommand extends TerminalProcess {
  public static keyword: string = "test";
  public static description: string = "test";
  public static hidden: boolean = true;

  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);
  }

  protected async main(term: ArcTerminal): Promise<number> {
    const result = await term.rl?.read("[sudo] Password for izkuipers: ", true);

    term.Info(`${result}`);

    return 0;
  }
}
