import { AppProcess } from "$ts/apps/process";
import { KernelStack } from "$ts/env";
import type { AppProcessData } from "$types/app";

export class SystemShortcutsRuntime extends AppProcess {
  //#region LIFECYCLE
  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
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
          this.userDaemon?.workspaces?.previousDesktop();
        },
      },
      {
        alt: true,
        key: "]",
        global: true,
        action: () => {
          this.userDaemon?.workspaces?.nextDesktop();
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

    const focusedPid = KernelStack().renderer?.focusedPid();
    if (!focusedPid) return;

    const focusedProc = KernelStack().getProcess(focusedPid);

    if (!focusedProc || !(focusedProc instanceof AppProcess)) return;

    await focusedProc?.closeWindow();

    const appProcesses = (KernelStack().renderer?.currentState || [])
      .map((pid) => KernelStack().getProcess(pid))
      .filter((proc) => proc && !proc._disposed && proc instanceof AppProcess && !proc.app.data.core && !proc.app.data.overlay)
      .filter((proc) => !!proc);

    const targetProcess = appProcesses[appProcesses.length - 1];

    if (!targetProcess) return;

    KernelStack().renderer?.focusPid(targetProcess.pid);
  }
}
