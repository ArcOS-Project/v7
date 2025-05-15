import { AppProcess } from "$ts/apps/process";
import { getAllImages, getGroupedIcons } from "$ts/images";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { IconPickerData } from "./types";

export class IconPickerRuntime extends AppProcess {
  forWhat: string;
  defaultIcon: string;
  selected = Store<string>();
  groups = getGroupedIcons();
  store = getAllImages();
  returnId: string;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, data: IconPickerData) {
    super(handler, pid, parentPid, app);

    const { forWhat, defaultIcon, returnId } = data;

    this.forWhat = forWhat;
    this.defaultIcon = defaultIcon;
    this.selected.set(defaultIcon);
    this.returnId = returnId; // Identifying string from invocator
  }

  async confirm() {
    this.systemDispatch.dispatch("ip-confirm", [this.returnId, this.selected()]); // Return selection to invocator

    await this.closeWindow();
  }

  async cancel() {
    this.systemDispatch.dispatch("ip-cancel", [this.returnId]); // Broadcast cancel to invocator

    await this.closeWindow();
  }
}
