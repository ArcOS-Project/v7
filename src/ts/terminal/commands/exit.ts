import type { IAppProcess } from "$interfaces/app";
import type { IArcTerminal } from "$interfaces/terminal";
import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/daemon";
import { Stack, State } from "$ts/env";
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
    const proc = Stack.getProcess<IAppProcess>(term.parentPid);

    if (term?.IS_ARCTERM_MODE) {
      await Daemon?.killSelf();
      await term?.killSelf();
      State.loadState("turnedOff");
      return -256;
    }

    if (!(proc instanceof AppProcess)) {
      return 1;
    }
    await proc.closeWindow();

    return -256;
  }
}
