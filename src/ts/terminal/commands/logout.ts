import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class LogoutCommand extends TerminalProcess {
  public static keyword = "logout";
  public static description = "Log out of ArcOS";

  protected async main(term: ArcTerminal, flags: Arguments, argv: string[]) {
    term.daemon?.logoff();
    return -256;
  }
}
