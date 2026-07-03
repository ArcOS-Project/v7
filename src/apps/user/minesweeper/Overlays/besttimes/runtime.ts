import { AppProcess } from "$ts/apps/process";
import type { AppProcessData } from "$types/apps/app";
import type { MinesweeperRuntime } from "../../runtime";
import { DefaultMinesweeperConfiguration } from "../../store";
import { IAppProcess } from "$interfaces/IAppProcess";

export class MinesweeperBestTimesRuntime extends AppProcess implements IAppProcess {
  parent: MinesweeperRuntime;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, parent: MinesweeperRuntime) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
    this.parent = parent;
  }

  async start() {}

  async stop() {}

  async render() {}

  //#endregion LIFECYCLE

  resetScores() {
    this.parent.Settings.update((v) => {
      v.scores = DefaultMinesweeperConfiguration.scores;
      return v;
    });
  }
}
