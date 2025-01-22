import { AppProcess } from "$ts/apps/process";
import { SettingsIcon } from "$ts/images/general";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { settingsPageStore } from "./store";

export class SettingsRuntime extends AppProcess {
  currentPage = Store<string>("");

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    page?: string
  ) {
    super(handler, pid, parentPid, app);

    this.switchPage(page || "account");
  }

  switchPage(pageId: string) {
    if (!settingsPageStore.has(pageId)) return;

    const page = settingsPageStore.get(pageId);

    this.currentPage.set(pageId);

    this.windowTitle.set(`${page?.name}`);
    this.windowIcon.set(page?.icon || SettingsIcon);
  }
}
