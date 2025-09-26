import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { KernelStack } from "$ts/env";
import type { Process } from "$ts/process/instance";
import { ProcessKillResultCaptions } from "$ts/process/store";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { ElevationLevel } from "$types/elevation";
import type { ProcessKillResult } from "$types/process";
import type { Component } from "svelte";
import Processes from "./ProcessManager/Page/Processes.svelte";
import Services from "./ProcessManager/Page/Services.svelte";
import type { ServiceHost } from "$ts/services";

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
    this.host = this.userDaemon?.serviceHost!;
    if (page && this.tabs[page]) this.currentTab.set(page);
  }

  //#endregion

  async kill(proc: Process) {
    const name = proc instanceof AppProcess ? proc.app.data.metadata.name : proc.name;

    const elevated = await this.userDaemon?.manuallyElevate({
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
              const result = await KernelStack().kill(proc.pid, true);

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
    const caption = ProcessKillResultCaptions[result];

    MessageBox(
      {
        title: `Couldn't kill ${name}!`,
        message: `An error occured while trying to end the process. ${caption}`,
        buttons: [{ caption: "Okay", action() {}, suggested: true }],
        image: "ErrorIcon",
        sound: "arcos.dialog.error",
      },
      this.pid,
      true
    );
  }

  async stopService(id: string) {
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
              this.userDaemon?.serviceHost?.stopService(id);
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
    if (this.host.getService(id)) return;
    this.userDaemon?.serviceHost?.startService(id);
  }

  serviceInfoFor(id: string) {
    if (!this.host.hasService(id)) return;

    this.spawnOverlayApp("ServiceInfo", +this.env.get("shell_pid"), id);
  }
}
