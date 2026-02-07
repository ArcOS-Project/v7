import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { Env, Stack } from "$ts/env";
import type { Process } from "$ts/process/instance";
import { ProcessKillResultCaptions } from "$ts/process/store";
import { Daemon } from "$ts/server/user/daemon";
import type { ServiceHost } from "$ts/services";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { ElevationLevel } from "$types/elevation";
import type { ProcessKillResult } from "$types/process";
import type { Component } from "svelte";
import Processes from "./ProcessManager/Page/Processes.svelte";
import Services from "./ProcessManager/Page/Services.svelte";

export class ProcessManagerRuntime extends AppProcess {
  public selected = Store<string>();
  public running = Store<number>(0);
  public currentTab = Store<string>("Processes");
  public tabs: Record<string, Component> = {
    Processes: Processes as any,
    Services: Services as any,
  };
  host: ServiceHost;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, page?: string) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
    this.host = Daemon?.serviceHost!;
    if (page && this.tabs[page]) this.currentTab.set(page);
  }

  async render() {
    const existingInstance = await this.closeIfSecondInstance();

    if (existingInstance) {
      existingInstance.currentTab.set(this.currentTab());
      return false;
    }
  }

  //#endregion

  async kill(proc: Process) {
    this.Log(`kill: ${proc.pid}`);

    const name = proc instanceof AppProcess ? proc.app.data.metadata.name : proc.name;

    const elevated = await Daemon!.elevation!.manuallyElevate({
      what: `ArcOS needs your permission to kill a process`,
      image: proc instanceof AppProcess ? proc.windowIcon() || "ComponentIcon" : "DefaultIcon",
      title: name,
      description: proc instanceof AppProcess ? "Application" : "Process",
      level: ElevationLevel.high,
    });

    if (!elevated) return;

    MessageBox(
      {
        title: `Do you want to end ${name}?`,
        message:
          "By killing this process, its window will close and you will lose any unsaved information. If you end a system process, ArcOS might crash or become unstable. Are you sure you want to continue?",
        image: "WarningIcon",
        sound: "arcos.dialog.warning",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "End process",
            action: async () => {
              const result = await Stack.kill(proc.pid, true);

              if (result !== "success") {
                this.killError(name, result);
              } else {
                this.selected.set("");
              }
            },
            suggested: true,
          },
        ],
      },
      this.pid,
      true
    );
  }

  killError(name: string, result: ProcessKillResult) {
    this.Log(`killError: ${name}, ${result}`);

    const caption = ProcessKillResultCaptions[result];

    MessageBox(
      {
        title: `Couldn't kill ${name}!`,
        message: `An error occurred while trying to end the process. ${caption}`,
        buttons: [{ caption: "Okay", action() {}, suggested: true }],
        image: "ErrorIcon",
        sound: "arcos.dialog.error",
      },
      this.pid,
      true
    );
  }

  async stopService(id: string) {
    this.Log(`stopService: ${id}`);

    if (!this.host.getService(id)) return;
    MessageBox(
      {
        title: "Stop service?",
        message: "Are you sure you want to stop this service? This may have unforseen consequences.",
        buttons: [
          {
            caption: "Cancel",
            action: () => {},
          },
          {
            caption: "Stop service",
            action: () => {
              Daemon?.serviceHost?.stopService(id);
            },
            suggested: true,
          },
        ],
        image: "WarningIcon",
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  async restartService(id: string) {
    this.Log("Restarting selected service");

    MessageBox(
      {
        title: "Restart service?",
        message: "Are you sure you want to restart this service? This may have unforseen consequences.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Restart service",
            action: async () => {
              await this.host.restartService(id);
            },
            suggested: true,
          },
        ],
        sound: "arcos.dialog.warning",
        image: "WarningIcon",
      },
      this.pid,
      true
    );
  }

  async startService(id: string) {
    this.Log(`startService: ${id}`);

    if (this.host.getService(id)) return;
    Daemon?.serviceHost?.startService(id);
  }

  serviceInfoFor(id: string) {
    this.Log(`serviceInfoFor: ${id}`);

    if (!this.host.hasService(id)) return;
    this.spawnOverlayApp("ServiceInfo", +Env.get("shell_pid"), id);
  }

  appInfoFor(proc: AppProcess) {
    this.Log(`appInfoFor: ${proc.pid}`);
    this.spawnOverlayApp("AppInfo", +Env.get("shell_pid"), proc.app.id);
  }

  processInfoFor(proc: Process) {
    this.Log(`processInfoFor: ${proc.pid}`);
    this.spawnOverlayApp("ProcessInfoApp", +Env.get("shell_pid"), proc);
  }
}
