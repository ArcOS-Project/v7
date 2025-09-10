import { AppProcess } from "$ts/apps/process";
import { KernelStack } from "$ts/process/handler";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class ExitCommand extends TerminalProcess {
  public static keyword = "exit";
  public static description = "Exit the terminal process";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);
  }

  //#endregion

  protected async main(term: ArcTerminal): Promise<number> {
    const proc = KernelStack().getProcess<AppProcess>(term.parentPid);

    if (!(proc instanceof AppProcess)) {
      return 1;
    }
    await proc.closeWindow();

    return -256;
  }
}
