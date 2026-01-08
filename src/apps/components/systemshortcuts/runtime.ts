import { AppProcess } from "$ts/apps/process";
import { Env, Stack } from "$ts/env";
import { Daemon } from "$ts/server/user/daemon";
import type { AppProcessData } from "$types/app";

export class SystemShortcutsRuntime extends AppProcess {
  //#region LIFECYCLE
  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
  }
  
  //#endregion

  async render() {
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
          Daemon?.workspaces?.previousDesktop();
        },
      },
      {
        alt: true,
        key: "]",
        global: true,
        action: () => {
          Daemon?.workspaces?.nextDesktop();
        },
      },
      {
        ctrl: true,
        key: "/",
        action: () => {
          this.spawnOverlayApp("AcceleratorOverview", +Env.get("shell_pid"));
        },
        global: true,
      }
    );
  }

  async closeFocused() {
    this.Log("Attempting to close focused window");

    const focusedPid = Stack.renderer?.focusedPid();
    if (!focusedPid) return;

    const focusedProc = Stack.getProcess(focusedPid);

    if (!focusedProc || !(focusedProc instanceof AppProcess)) return;

    await focusedProc?.closeWindow();

    const appProcesses = (Stack.renderer?.currentState || [])
      .map((pid) => Stack.getProcess(pid))
      .filter((proc) => proc && !proc._disposed && proc instanceof AppProcess && !proc.app.data.core && !proc.app.data.overlay)
      .filter((proc) => !!proc);

    const targetProcess = appProcesses[appProcesses.length - 1];

    if (!targetProcess) return;

    Stack.renderer?.focusPid(targetProcess.pid);
  }
}
