import { AppProcess } from "$ts/apps/process";
import type { AppProcessData } from "$types/app";
import type { MinesweeperRuntime } from "../../runtime";
import { DefaultMinesweeperConfiguration } from "../../store";

export class MinesweeperBestTimesRuntime extends AppProcess {
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
