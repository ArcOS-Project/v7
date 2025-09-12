import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { DefaultIcon } from "$ts/images/apps";
import { ErrorIcon, WarningIcon } from "$ts/images/dialog";
import { ComponentIcon } from "$ts/images/general";
import { KernelStack } from "$ts/env";
import type { Process } from "$ts/process/instance";
import { ProcessKillResultCaptions } from "$ts/process/store";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { ElevationLevel } from "$types/elevation";
import type { ProcessKillResult } from "$types/process";

export class ProcessManagerRuntime extends AppProcess {
  public selected = Store<number>();
  public running = Store<number>(0);

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);
  }

  //#endregion

  async kill(proc: Process) {
    const elevated = await this.userDaemon?.manuallyElevate({
      what: `ArcOS needs your permission to kill a process`,
      image: proc instanceof AppProcess ? proc.windowIcon() || ComponentIcon : DefaultIcon,
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
        image: WarningIcon,
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
                this.selected.set(-1);
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
        image: ErrorIcon,
        sound: "arcos.dialog.error",
      },
      this.pid,
      true
    );
  }
}
