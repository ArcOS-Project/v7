import type { IArcTerminal } from "$interfaces/terminal";
import type { Arguments } from "$types/terminal";
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

  protected async main(term: IArcTerminal, flags: Arguments, argv: string[]) {
    term.daemon?.power?.logoff();
    return -256;
  }
}
