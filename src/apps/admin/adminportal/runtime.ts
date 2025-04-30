import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import { AdminBootstrapper } from "$ts/server/admin";
import { Sleep } from "$ts/sleep";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/app";
import { AdminPortalPageStore } from "./store";
import { BugHuntUserDataApp } from "./userdata/metadata";

export class AdminPortalRuntime extends AppProcess {
  ready = Store<boolean>(false);
  currentPage = Store<string>("");
  switchPageProps = Store<Record<string, any>>({});
  admin: AdminBootstrapper;

  protected overlayStore: Record<string, App> = {
    userdata: BugHuntUserDataApp,
  };

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, page?: string) {
    super(handler, pid, parentPid, app);

    this.admin = this.userDaemon!.serviceHost!.getService<AdminBootstrapper>("AdminBootstrapper")!;
    this.switchPage(page || "dashboard");
  }

  async switchPage(pageId: string, props: Record<string, any> = {}, force = false) {
    this.Log(`Loading page '${pageId}'`);

    if (!AdminPortalPageStore.has(pageId)) return;

    const page = AdminPortalPageStore.get(pageId);

    this.switchPageProps.set(props);
    if (force) {
      this.currentPage.set("");
      await Sleep(0);
    }
    this.currentPage.set(pageId);

    this.windowTitle.set(`${page?.name} - Admin Portal`);
  }
}
