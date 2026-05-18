import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/daemon";
import { Env, Stack } from "$ts/env";
import type { AppProcessData } from "$types/app";

export class SystemShortcutsRuntime extends AppProcess {
  closingFocused = false;

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
      },
      {
        ctrl: true,
        alt: true,
        key: "Backspace",
        action: () => {
          this.spawnOverlayApp("MasterOptions", +Env.get("shell_pid"));
        },
        global: true,
      }
    );
  }

  async closeFocused() {
    this.Log("Attempting to close focused window");

    if (this.closingFocused) return;

    const focusedPid = Stack.renderer?.focusedPid();
    if (!focusedPid) return;

    const focusedProc = Stack.getProcess(focusedPid);
    if (!focusedProc || !(focusedProc instanceof AppProcess) || focusedProc.app.data.overlay) return;

    this.closingFocused = true;

    const closeResult = await focusedProc?.closeWindow();
    if (!closeResult) {
      this.closingFocused = false;
      return; // onClose did not permit the exit
    }

    const appProcesses = (Stack.renderer?.currentState || [])
      .map((pid) => Stack.getProcess(pid))
      .filter((proc) => proc && !proc._disposed && proc instanceof AppProcess && !proc.app.data.core && !proc.app.data.overlay)
      .filter((proc) => !!proc);

    this.closingFocused = false;

    const targetProcess = appProcesses[appProcesses.length - 1];
    if (!targetProcess) {
      return;
    }

    Stack.renderer?.focusPid(targetProcess.pid);
  }
}
