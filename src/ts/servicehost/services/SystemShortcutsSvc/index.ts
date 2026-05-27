import type { IBaseService, IServiceHost } from "$interfaces/IServiceHost";
import { AppProcess, bannedKeys } from "$ts/apps/process";
import { State, Stack, Daemon, Env } from "$ts/env";
import { BaseService } from "$ts/servicehost/base";
import type { AppKeyCombinations } from "$types/apps/accelerator";
import type { Service } from "$types/services/service";

export class SystemShortcutsService extends BaseService implements IBaseService {
  closingFocused = false;
  acceleratorStore: AppKeyCombinations = [
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
        Daemon.spawn!.spawnApp("AcceleratorOverview", +Env.get("shell_pid"), { asOverlay: true });
      },
      global: true,
    },
    {
      ctrl: true,
      alt: true,
      key: "Backspace",
      action: () => {
        Daemon.spawn!.spawnApp("MasterOptions", +Env.get("shell_pid"), { asOverlay: true });
      },
      global: true,
    },
  ];

  constructor(pid: number, parentPid: number, name: string, host: IServiceHost, initBroadcast?: (message: string) => void) {
    super(pid, parentPid, name, host, initBroadcast);

    this.setSource(__SOURCE__);
  }

  async start() {
    document.addEventListener("keydown", (e) => this.processor(e));
  }

  async stop() {
    document.removeEventListener("keydown", (e) => this.processor(e));
  }

  private async processor(e: KeyboardEvent) {
    if (!e.key || this._disposed) return;

    if (bannedKeys.includes(e.key.toLowerCase()) && State?.currentState === "desktop") {
      e.preventDefault();

      return false;
    }

    this.unfocusActiveElement();

    const state = State?.currentState;

    if (state != "desktop" || this._disposed) return;

    for (const combo of this.acceleratorStore) {
      const alt = combo.alt ? e.altKey : true;
      const ctrl = combo.ctrl ? e.ctrlKey : true;
      const shift = combo.shift ? e.shiftKey : true;
      /** */
      const modifiers = alt && ctrl && shift;
      /** */
      const pK = e.key.toLowerCase().trim();
      const key = combo.key?.trim().toLowerCase();
      const codedKey = String.fromCharCode(e.keyCode).toLowerCase();
      /** */
      const isFocused = Stack.renderer?.focusedPid() == this.pid || combo.global;

      if (!modifiers || (key != pK && key && key != codedKey) || !isFocused) continue;

      if (!Daemon?.elevation!._elevating) await combo.action(this, e);

      break;
    }
  }

  public unfocusActiveElement() {
    const el = document.activeElement as HTMLButtonElement;

    if (!el || el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el.isContentEditable) return;

    el.blur();
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

export const systemShortcutsService: Service = {
  name: "System Shortcuts",
  description: "Registers global system shortcuts",
  process: SystemShortcutsService,
  initialState: "started",
};
