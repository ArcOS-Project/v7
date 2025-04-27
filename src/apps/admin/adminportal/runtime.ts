import { AppProcess } from "$ts/apps/process";
import { ElevationIcon } from "$ts/images/general";
import type { ProcessHandler } from "$ts/process/handler";
import { AdminBootstrapper } from "$ts/server/admin";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { AdminPortalPageStore } from "./store";

export class AdminPortalRuntime extends AppProcess {
  currentPage = Store<string>("");
  admin: AdminBootstrapper;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, page?: string) {
    super(handler, pid, parentPid, app);

    this.admin = this.userDaemon!.serviceHost!.getService<AdminBootstrapper>("AdminBootstrapper")!;
    this.switchPage(page || "dashboard");
  }

  switchPage(pageId: string) {
    this.Log(`Loading page '${pageId}'`);

    if (!AdminPortalPageStore.has(pageId)) return;

    const page = AdminPortalPageStore.get(pageId);

    this.currentPage.set(pageId);

    this.windowTitle.set(`${page?.name} - Admin Portal`);
  }
}
