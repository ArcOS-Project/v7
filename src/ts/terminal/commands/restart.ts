import type { IArcTerminal } from "$interfaces/terminal";
import { SysDispatch } from "$ts/env";
import { logItemToStr } from "$ts/util";
import type { LogItem } from "$types/logging";
import { TerminalProcess } from "../process";
import { BRBLUE, RESET } from "../store";

export class RestartCommand extends TerminalProcess {
  public static keyword = "restart";
  public static description = "Restart ArcOS";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal) {
    if (term.IS_ARCTERM_MODE) {
      term.rl?.println(`${BRBLUE}Goodbye.${RESET}`);

      SysDispatch.subscribe<[LogItem]>("kernel-log", ([data]) => {
        term.rl?.println(logItemToStr(data));
      });

      await term.daemon?.serviceHost?.stop();
      await term.daemon?.killSelf();
      location.reload();

      return -256;
    } else {
      term.daemon?.power?.restart();
      return -256;
    }
  }
}
