import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class ShutdownCommand extends TerminalProcess {
  public static keyword = "shutdown";
  public static description = "Shut down ArcOS";

  //#region ELCYCEFIL

  protected async main(term: ArcTerminal) {
    term.daemon?.shutdown();
    return -256;
  }

  //#endregion
}
