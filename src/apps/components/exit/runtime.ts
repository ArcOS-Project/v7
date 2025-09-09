import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { ExitActions } from "./store";
import type { ExitAction } from "./types";

export class ExitRuntime extends AppProcess {
  selected = Store<string>();

  //#region ELCYCEFIL

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, selected?: string) {
    super(handler, pid, parentPid, app);

    if (selected) this.selected.set(selected);
  }

  //#endregion

  async go(action: ExitAction | undefined, alternate = false) {
    const option = action || ExitActions[this.selected()];

    if (!option) return;

    await this.closeWindow();

    if (alternate && option.alternateAction)
      option.alternateAction(this.userDaemon!); // Alternate: when shift key is pressed
    else option.action(this.userDaemon!);
  }
}
