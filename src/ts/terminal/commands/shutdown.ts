import { State, SysDispatch } from "$ts/env";
import { logItemToStr } from "$ts/util";
import { type LogItem } from "$types/logging";
import { TerminalProcess } from "../process";
import { BRBLUE, RESET } from "../store";

export class ShutdownCommand extends TerminalProcess {
  public static keyword = "shutdown";
  public static description = "Shut down ArcOS";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  protected async main() {
    if (this.term?.IS_ARCTERM_MODE) {
      this.rl?.println(`${BRBLUE}Goodbye.${RESET}`);

      SysDispatch.subscribe<[LogItem]>("kernel-log", ([data]) => {
        this.rl?.println(logItemToStr(data));
      });

      await this.daemon?.serviceHost?.stop();
      await this.daemon?.killSelf();
      State.loadState("turnedOff");
    } else {
      await this.daemon?.power?.shutdown();
    }

    return -256;
  }

  //#endregion
}
