import type { IAppProcess } from "$interfaces/IAppProcess";
import { AppProcess } from "$ts/apps/process";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/apps/app";
import type { MinesweeperRuntime } from "../../runtime";

export class MineSweeperHighScoreRuntime extends AppProcess implements IAppProcess {
  parent: MinesweeperRuntime;
  winnerName = Store<string>();

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

  save() {
    this.parent.Settings.update((v) => {
      (v.scores as any)[v.mode] = {
        name: this.winnerName(),
        seconds: Math.min(Math.floor((this.parent.endTimeMs() - this.parent.startTimeMs()) / 1000), 999),
      };
      return v;
    });
    this.closeWindow();
  }
}
