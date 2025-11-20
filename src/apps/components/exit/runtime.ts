import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/server/user/daemon";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { ExitActions } from "./store";
import type { ExitAction } from "./types";

export class ExitRuntime extends AppProcess {
  selected = Store<string>();

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, selected?: string) {
    super(pid, parentPid, app);

    if (selected) this.selected.set(selected);

    this.setSource(__SOURCE__);
  }

  //#endregion

  async go(action: ExitAction | undefined, alternate = false) {
    const option = action || ExitActions[this.selected()];

    if (!option) return;

    await this.closeWindow();

    if (alternate && option.alternateAction)
      option.alternateAction(Daemon()!); // Alternate: when shift key is pressed
    else option.action(Daemon()!);
  }
}
