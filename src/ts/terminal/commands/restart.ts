import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class RestartCommand extends TerminalProcess {
  public static keyword = "restart";
  public static description = "Restart ArcOS";

  protected async main(term: ArcTerminal) {
    term.daemon?.restart();
    return -256;
  }
}
