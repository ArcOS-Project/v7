import { SacrudaVersion } from "$ts/env";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { BRBLUE, RESET } from "../colors";
import { TerminalProcess } from "../process";

export class VerCommand extends TerminalProcess {
  public static keyword: string = "ver";
  public static description: string = "Reports the Sacruda version number";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  protected async main(): Promise<number> {
    this.rl?.println(`Sacruda Terminal ${BRBLUE}v${SacrudaVersion}${RESET}-${ArcMode()} (${ArcBuild()})\n`);

    return 0;
  }

  //#endregion
}
