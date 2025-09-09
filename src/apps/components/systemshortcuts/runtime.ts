import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import type { AppProcessData } from "$types/app";

export class SystemShortcutsRuntime extends AppProcess {
  //#region ELCYCEFIL
  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);
  }

  async start() {
    if (await this.closeIfSecondInstance()) return false;

    this.acceleratorStore.push(
      {
        ctrl: true,
        key: "q",
        global: true,
        action: () => {
          this.closeFocused();
        },
      },
      {
        alt: true,
        key: "[",
        global: true,
        action: () => {
          this.userDaemon?.previousDesktop();
        },
      },
      {
        alt: true,
        key: "]",
        global: true,
        action: () => {
          this.userDaemon?.nextDesktop();
        },
      },
      {
        ctrl: true,
        key: "/",
        action: () => {
          this.spawnOverlayApp("AcceleratorOverview", +this.env.get("shell_pid"));
        },
        global: true,
      }
    );
  }

  //#endregion

  async closeFocused() {
    this.Log("Attempting to close focused window");

    const focusedPid = this.handler.renderer?.focusedPid();
    if (!focusedPid) return;

    const focusedProc = this.handler.getProcess(focusedPid);

    if (!focusedProc || !(focusedProc instanceof AppProcess)) return;

    await focusedProc?.closeWindow();

    const appProcesses = (this.handler.renderer?.currentState || [])
      .map((pid) => this.handler.getProcess(pid))
      .filter((proc) => proc && !proc._disposed && proc instanceof AppProcess && !proc.app.data.core && !proc.app.data.overlay)
      .filter((proc) => !!proc);

    const targetProcess = appProcesses[appProcesses.length - 1];

    if (!targetProcess) return;

    this.handler.renderer?.focusPid(targetProcess.pid);
  }
}
