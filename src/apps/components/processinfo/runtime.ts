import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { KernelStack, Stack } from "$ts/env";
import type { Process } from "$ts/process/instance";
import { ProcessKillResultCaptions } from "$ts/process/store";
import { Daemon } from "$ts/server/user/daemon";
import type { AppProcessData } from "$types/app";
import { ElevationLevel } from "$types/elevation";
import type { ProcessKillResult } from "$types/process";

export class ProcessInfoRuntime extends AppProcess {
  parent?: Process;
  proc?: Process;
  inherit?: typeof Process;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, proc: Process) {
    super(pid, parentPid, app);

    this.proc = proc || this;
    this.parent = Stack().getProcess(this.proc.parentPid);
    this.inherit = Object.getPrototypeOf(this.proc.constructor);

    this.setSource(__SOURCE__);
  }

  //#endregion

  async kill(proc: Process) {
    const elevated = await Daemon()!.elevation!.manuallyElevate({
      what: `ArcOS needs your permission to kill a process`,
      image:
        this.getIconCached(proc instanceof AppProcess ? proc.windowIcon() || "ComponentIcon" : "DefaultIcon") || "ComponentIcon",
      title: proc.name,
      description: proc instanceof AppProcess ? "Application" : "Process",
      level: ElevationLevel.high,
    });

    if (!elevated) return;

    const name = proc instanceof AppProcess ? proc.app.data.metadata.name : proc.name;

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
        message: `An error occurred while trying to end the process. ${caption}`,
        buttons: [{ caption: "Okay", action() {}, suggested: true }],
        image: "ErrorIcon",
        sound: "arcos.dialog.error",
      },
      this.pid,
      true
    );
  }
}
