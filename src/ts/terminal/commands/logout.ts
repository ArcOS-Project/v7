import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
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

  protected async main(term: ArcTerminal, flags: Arguments, argv: string[]) {
    term.daemon?.powerContext!.logoff();
    return -256;
  }
}
