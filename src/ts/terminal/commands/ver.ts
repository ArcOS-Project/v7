import { ArcOSVersion } from "$ts/env";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";
import { BRBLUE, RESET } from "../store";

export class VerCommand extends TerminalProcess {
  public static keyword: string = "ver";
  public static description: string = "Reports the ArcOS version number";
  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#region LIFECYCLE

  protected async main(term: ArcTerminal): Promise<number> {
    term.rl?.println(`ArcTerm & ArcOS ${BRBLUE}v${ArcOSVersion}${RESET}-${ArcMode()} (${ArcBuild()})\n`);

    return 0;
  }

  //#endregion
}
