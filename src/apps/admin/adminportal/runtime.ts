import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { ShareManager } from "$ts/fs/shares";
import { ElevationIcon } from "$ts/images/general";
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
  redacted = Store<boolean>(true);
  shares: ShareManager;
  admin: AdminBootstrapper;

  protected overlayStore: Record<string, App> = {
    userdata: BugHuntUserDataApp,
  };

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, page?: string) {
    super(handler, pid, parentPid, app);

    this.admin = this.userDaemon!.serviceHost!.getService<AdminBootstrapper>("AdminBootstrapper")!;
    this.shares = this.userDaemon!.serviceHost!.getService<ShareManager>("ShareMgmt")!;
    this.switchPage(page || "dashboard");
  }

  async switchPage(pageId: string, props: Record<string, any> = {}, force = false) {
    this.Log(`Loading page '${pageId}'`);

    if (!AdminPortalPageStore.has(pageId)) {
      MessageBox(
        {
          title: "Broken link",
          message:
            "The page you tried to navigate to isn't registered in the Admin Portal's page store. If you didn't do this yourself, please check in with Izaak.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: ElevationIcon,
          sound: "arcos.dialog.warning",
        },
        this.pid,
        true
      );
      return;
    }

    const page = AdminPortalPageStore.get(pageId);

    this.switchPageProps.set(props);
    if (force) {
      this.currentPage.set("");
      await Sleep(0); // Wait a frame for the store change to process
    }
    this.currentPage.set(pageId);

    this.windowTitle.set(`${page?.name} - Admin Portal`);
  }
}
