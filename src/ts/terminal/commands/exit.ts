import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class ExitCommand extends TerminalProcess {
  public static keyword = "exit";
  public static description = "Exit the terminal process";

  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);
  }

  protected async main(term: ArcTerminal): Promise<number> {
    const proc = term.handler.getProcess<AppProcess>(term.parentPid);

    if (!(proc instanceof AppProcess)) {
      return 1;
    }
    await proc.closeWindow();

    return -256;
  }
}
