import { AppProcess } from "$ts/apps/process";
import { Stack } from "$ts/env";
import type { IArcTerminal } from "$interfaces/terminal";
import { TerminalProcess } from "../process";

export class ExitCommand extends TerminalProcess {
  public static keyword = "exit";
  public static description = "Exit the terminal process";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal): Promise<number> {
    const proc = Stack.getProcess<AppProcess>(term.parentPid);

    if (!(proc instanceof AppProcess)) {
      return 1;
    }
    await proc.closeWindow();

    return -256;
  }
}
