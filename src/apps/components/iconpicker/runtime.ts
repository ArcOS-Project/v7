import { AppProcess } from "$ts/apps/process";
import { IconService } from "$ts/icon";
import { getGroupedIcons } from "$ts/images";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { IconPickerData } from "./types";

export class IconPickerRuntime extends AppProcess {
  forWhat?: string;
  defaultIcon?: string;
  selected = Store<string>();
  groups: Record<string, Record<string, string>> = {};
  store: Record<string, string> = {};
  returnId?: string;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, data: IconPickerData) {
    super(pid, parentPid, app);

    if (data) {
      const { forWhat, defaultIcon, returnId } = data;

      this.forWhat = forWhat;
      this.defaultIcon = defaultIcon;
      this.selected.set(defaultIcon);
      this.returnId = returnId; // Identifying string from invocator
    }

    this.setSource(__SOURCE__);
  }

  async start() {
    if (!this.forWhat) return false;

    const iconService = this.userDaemon?.serviceHost?.getService<IconService>("IconService");

    if (!iconService) return false;
    this.store = iconService.Configuration();
    this.groups = iconService.getGroupedIcons();
  }

  //#endregion

  async confirm() {
    this.systemDispatch.dispatch("ip-confirm", [this.returnId, this.selected()]); // Return selection to invocator

    await this.closeWindow();
  }

  async cancel() {
    this.systemDispatch.dispatch("ip-cancel", [this.returnId]); // Broadcast cancel to invocator

    await this.closeWindow();
  }
}
