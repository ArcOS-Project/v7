import type { ShellRuntime } from "$apps/components/shell/runtime";
import type { ShellTrayIcon, TrayPopup } from "$apps/components/shell/types";
import type { ProcessHandler } from "$ts/process/handler";
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

  constructor(handler: ProcessHandler, pid: number, parentPid: number, data: ShellTrayIcon) {
    super(handler, pid, parentPid);

    this.targetPid = data.pid;
    this.identifier = data.identifier;
    this.popup = data.popup;
    this.icon = data.icon;
    this.context = data.context;
    this.action = data.action;
    this.shell = this.handler.getProcess(+this.env.get("shell_pid"))!;
  }

  async __render() {
    const popupBody = this.getPopupBody();
    const target = this.handler.getProcess(this.targetPid)!;

    if (this.popup?.component) {
      this.Log("Mounting tray popup component");

      this.componentMount = mount(this.popup?.component, {
        target: popupBody!,
        props: {
          process: target,
          tray: this,
          pid: this.pid,
          kernel: this.kernel,
          handler: this.handler,
        },
      });
    }

    this.renderPopup(popupBody! as HTMLDivElement, target);
  }

  async stop() {
    if (this.componentMount && Object.entries(this.componentMount).length) unmount(this.componentMount);

    this.shell.trayHost.disposeTrayIcon?.(this.targetPid, this.identifier);
  }

  async renderPopup(popup: HTMLDivElement, target: Process) {}

  getPopupBody() {
    const body = document.querySelector(`[data-selector="${this.targetPid}#${this.identifier}"]`);

    return body;
  }
}
