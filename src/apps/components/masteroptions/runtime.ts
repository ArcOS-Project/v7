import type { IAppProcess } from "$interfaces/app";
import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/daemon";
import { Stack } from "$ts/env";
import { Plural } from "$ts/util";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class MasterOptionsRuntime extends AppProcess {
  loading = Store<boolean>(false);

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
  }

  async render() {
    if (await this.closeIfSecondInstance()) return;
  }

  //#endregion LIFECYCLE

  async killGhosts() {
    const state = Stack.renderer?.currentState || [];
    const ghosts = [];

    for (const pid of state) {
      const proc = Stack.getProcess(pid);
      if (!proc) {
        await Stack.renderer?.remove(pid);
        ghosts.push(pid);
      }
    }

    await Daemon.getShell()?.ShowToast(
      {
        content: `Removed ${ghosts.length} ${Plural("ghost", ghosts.length)} from the renderer.`,
        icon: "ghost",
      },
      4000
    );
  }

  async killUserApps() {
    const userApps: IAppProcess[] = [...Stack.store()]
      .map(([_, v]) => v as IAppProcess)
      .filter(
        (proc) => proc instanceof AppProcess && !proc.app.data.core && proc.app.id !== "arcShell" && proc.app.id !== "wallpaper"
      );

    for (const proc of userApps) {
      await Stack.kill(proc.pid, true);
    }

    await Daemon.getShell()?.ShowToast(
      {
        content: `Forcefully terminated ${userApps.length} ${Plural("application", userApps.length)}.`,
        icon: "power",
      },
      4000
    );
  }
}
