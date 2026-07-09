import type { IArcTerminal } from "$interfaces/IArcTerminal";
import { State } from "$ts/env";
import { BRBLUE, RESET } from "../colors";
import { TerminalProcess } from "../process";

export class LogoutCommand extends TerminalProcess {
  public static keyword = "logout";
  public static description = "Log out of ArcOS";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal) {
    if (this.term?.IS_ARCTERM_MODE) {
      this.rl?.println(`${BRBLUE}Goodbye.${RESET}`);

      term.terminalMode?.resetCookies();
      await term.daemon?.account?.discontinueToken();
      await term.daemon?.serviceHost?.stop();
      await term.daemon?.killSelf();
      term.term?.dispose();
      await term.terminalMode?.killSelf();
      await State.loadState("arcterm", {});
    } else {
      term.daemon?.power?.logoff();
    }
    return -256;
  }
}
