import type { IArcTerminal } from "$interfaces/terminal";
import { TerminalProcess } from "../process";

export class CrTpaCommand extends TerminalProcess {
  public static keyword: string = "crtpa";
  public static description: string = "Create an ArcOS Third Party Application (TPA) project";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: IArcTerminal): Promise<number> {
    term.Warning(
      "\ncrtpa is deprecated and removed in ArcOS 7.0.4 and above. Please use the v7cli\n\nFor more information, visit: https://docs.arcapi.nl/.",
      "FEATURE REMOVED"
    );
    return 1;
  }
}
