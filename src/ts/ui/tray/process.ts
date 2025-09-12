import type { ShellRuntime } from "$apps/components/shell/runtime";
import type { ShellTrayIcon, TrayPopup } from "$apps/components/shell/types";
import { KernelStack } from "$ts/kernel/mods/stack";
import { Process } from "$ts/process/instance";
import type { ContextMenuItem } from "$types/app";
import { mount, unmount } from "svelte";

export class TrayIconProcess extends Process {
  targetPid: number;
  identifier: string;
  popup?: TrayPopup;
  context?: ContextMenuItem[];
  action?: (targetedProcess: Process) => void;
  componentMount: Record<string, any> = {};
  icon: string;
  shell: ShellRuntime;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, data: ShellTrayIcon) {
    super(pid, parentPid);

    this.targetPid = data.pid;
    this.identifier = data.identifier;
    this.popup = data.popup;
    this.icon = data.icon;
    this.context = data.context;
    this.action = data.action;
    this.shell = KernelStack().getProcess(+this.env.get("shell_pid"))!;
    this.name = "TrayIconProcess";
  }

  async __render() {
    const popupBody = this.getPopupBody();
    const target = KernelStack().getProcess(this.targetPid)!;

    if (this.popup?.component) {
      this.Log("Mounting tray popup component");

      this.componentMount = mount(this.popup?.component, {
        target: popupBody!,
        props: {
          process: target,
          tray: this,
          pid: this.pid,
        },
      });
    }

    this.renderPopup(popupBody! as HTMLDivElement, target);
  }

  async stop() {
    if (this.componentMount && Object.entries(this.componentMount).length) unmount(this.componentMount);

    this.shell.trayHost?.disposeTrayIcon?.(this.targetPid, this.identifier);
  }

  async renderPopup(popup: HTMLDivElement, target: Process) {}

  //#endregion

  getPopupBody() {
    const body = document.querySelector(`[data-selector="${this.targetPid}#${this.identifier}"]`);

    return body;
  }
}
