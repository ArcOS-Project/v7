import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";

export class CrTpaCommand extends TerminalProcess {
  public static keyword: string = "crtpa";
  public static description: string = "Create an ArcOS Third Party Application (TPA) project";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);
  }

  //#endregion

  protected async main(term: ArcTerminal): Promise<number> {
    term.Warning(
      "\ncrtpa is deprecated and removed in ArcOS 7.0.4 and above. Please use the v7cli\n\nFor more information, visit: https://docs.arcapi.nl/.",
      "FEATURE REMOVED"
    );
    return 1;
  }
}
