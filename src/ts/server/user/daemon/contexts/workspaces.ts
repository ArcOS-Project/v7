import { AppProcess } from "$ts/apps/process";
import { KernelStack } from "$ts/env";
import { Sleep } from "$ts/sleep";
import { UUID } from "$ts/uuid";
import type { UserPreferences } from "$types/user";
import { Daemon, type UserDaemon } from "..";
import { UserContext } from "../context";

export class WorkspaceUserContext extends UserContext {
  private virtualDesktops: Record<string, HTMLDivElement> = {};
  private virtualDesktopIndex = -1;
  private virtualdesktopChangingTimeout: NodeJS.Timeout | undefined;
  public virtualDesktop: HTMLDivElement | undefined;

  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async syncVirtualDesktops(v: UserPreferences) {
    if (this._disposed) return;
    if (!this.virtualDesktop) return;

    this.Log(`Syncing virtual desktop render state`);

    const { desktops, index } = v.workspaces;

    for (const { uuid } of desktops) {
      this.virtualDesktop?.querySelector(`[id*="${uuid}"]`)?.classList.remove("selected");
      if (!this.virtualDesktops[uuid]) this.renderVirtualDesktop(uuid);
    }

    if (this.virtualDesktopIndex === index) return;

    if (v.shell.visuals.noAnimations) {
      this.virtualDesktop.setAttribute("style", `--index: ${index};`);
    } else {
      this.virtualDesktop.classList.add("changing");
      this.virtualDesktop.setAttribute("style", `--index: ${index};`);

      this.virtualDesktop?.children[index]?.classList.add("selected");

      if (this.virtualdesktopChangingTimeout) clearTimeout(this.virtualdesktopChangingTimeout);

      this.virtualdesktopChangingTimeout = setTimeout(() => {
        this.virtualDesktop?.classList.remove("changing");
      }, 300);
    }

    this.virtualDesktopIndex = index;
  }

  renderVirtualDesktop(uuid: string) {
    if (this._disposed) return;

    this.Log(`Rendering virtual desktop "${uuid}"`);

    const desktop = document.createElement("div");

    desktop.className = "workspace";
    desktop.id = uuid;

    this.virtualDesktop?.append(desktop);
    this.virtualDesktops[uuid] = desktop;
  }

  async deleteVirtualDesktop(uuid: string) {
    if (this._disposed) return;

    this.Log(`Deleting virtual desktop "${uuid}"`);

    const index = this.getDesktopIndexByUuid(uuid);

    if (this.getCurrentDesktop()?.id === uuid) {
      this.previousDesktop();
    }

    if (index < 0) return;

    Daemon()!.preferences.update((v) => {
      v.workspaces.desktops.splice(index, 1);

      return v;
    });

    const desktop = this.virtualDesktop?.querySelector(`[id*="${uuid}"]`);

    if (!desktop) return;

    await this.killWindowsOfDesktop(uuid);

    desktop.remove();
    delete this.virtualDesktops[uuid];
  }

  getCurrentDesktop(): HTMLDivElement | undefined {
    if (this._disposed) return;

    const { workspaces } = Daemon()!.preferences();

    if (!workspaces.desktops.length) {
      this.createWorkspace("Default");
      this.createWorkspace();
      this.createWorkspace();
      return this.getCurrentDesktop();
    }

    const uuid = workspaces.desktops[workspaces.index]?.uuid;

    if (!uuid) return undefined;

    return this.virtualDesktops[uuid];
  }

  createWorkspace(name?: string) {
    if (this._disposed) return;

    this.Log(`Creating new workspace "${name || "<NO NAME>"}"`);

    const uuid = UUID();

    Daemon()!.preferences.update((v) => {
      v.workspaces.desktops.push({ uuid, name });
      return v;
    });
  }

  getDesktopIndexByUuid(uuid: string) {
    if (this._disposed) return -1;

    const {
      workspaces: { desktops },
    } = Daemon()!.preferences();

    for (let i = 0; i < desktops.length; i++) {
      if (uuid === desktops[i].uuid) return i;
    }

    return -1;
  }

  switchToDesktopByUuid(uuid: string) {
    if (this._disposed) return;

    this.Log(`Switching to workspace with UUID "${uuid}"`);

    const i = this.getDesktopIndexByUuid(uuid);

    if (i < 0) return;

    Daemon()!.preferences.update((v) => {
      v.workspaces.index = i;
      return v;
    });
  }

  async killWindowsOfDesktop(uuid: string) {
    if (this._disposed) return;

    this.Log(`Killing processes on workspace with UUID "${uuid}"`);

    const processes = KernelStack().store();

    for (const [_, proc] of [...processes]) {
      if (!(proc instanceof AppProcess)) continue;

      if (proc.app.desktop === uuid) await proc.closeWindow();

      return true;
    }

    return false;
  }

  nextDesktop() {
    this.Log(`Switching to the next available workspace`);

    const {
      workspaces: { desktops, index },
    } = Daemon()!.preferences();

    if (desktops.length - 1 >= index + 1) {
      Daemon()!.preferences.update((v) => {
        v.workspaces.index++;

        return v;
      });

      return true;
    }

    return false;
  }

  previousDesktop() {
    this.Log(`Switching to the previous available workspace`);

    const {
      workspaces: { index },
    } = Daemon()!.preferences();

    if (index - 1 >= 0) {
      Daemon()!.preferences.update((v) => {
        v.workspaces.index--;

        return v;
      });
    }
  }

  async moveWindow(pid: number, destination: string) {
    this.Log(`Moving window ${pid} to destination ${destination}`);

    const proc = KernelStack().getProcess(pid);
    const destinationWorkspace = this.virtualDesktops[destination];
    const window = document.querySelector(`#appRenderer div.window[data-pid*='${pid}']`);

    if (!proc || !(proc instanceof AppProcess) || !destinationWorkspace || !window) return;

    const currentWorkspace = proc.app.desktop;

    if (currentWorkspace && this.getCurrentDesktop()?.id === currentWorkspace && KernelStack().renderer?.focusedPid() === pid) {
      this.switchToDesktopByUuid(destination);
    }

    await Sleep(100);

    destinationWorkspace.appendChild(window);
    proc.app.desktop = destination;
    KernelStack().store.update((v) => {
      v.set(pid, proc);

      return v;
    });
  }
}
