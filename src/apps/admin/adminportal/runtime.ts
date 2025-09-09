import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { textToBlob } from "$ts/fs/convert";
import { ShareManager } from "$ts/fs/shares";
import { join } from "$ts/fs/util";
import { ElevationIcon } from "$ts/images/general";
import type { ProcessHandler } from "$ts/process/handler";
import { AdminBootstrapper } from "$ts/server/admin";
import { Sleep } from "$ts/sleep";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/app";
import type { BugReport } from "$types/bughunt";
import axios from "axios";
import { AdminPortalAltMenu } from "./altmenu";
import { AdminPortalPageStore } from "./store";
import type { BugReportFileUrlParseResult, BugReportTpaFile } from "./types";
import { BugHuntUserDataApp } from "./userdata/metadata";

export class AdminPortalRuntime extends AppProcess {
  ready = Store<boolean>(false);
  currentPage = Store<string>("");
  switchPageProps = Store<Record<string, any>>({});
  redacted = Store<boolean>(true);
  propSize = Store<number>(0);
  shares: ShareManager;
  admin: AdminBootstrapper;

  protected overlayStore: Record<string, App> = {
    userdata: BugHuntUserDataApp,
  };

  //#region ELCYCEFIL

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    page?: string,
    props?: Record<string, any>
  ) {
    super(handler, pid, parentPid, app);

    this.admin = this.userDaemon!.serviceHost!.getService<AdminBootstrapper>("AdminBootstrapper")!;
    this.shares = this.userDaemon!.serviceHost!.getService<ShareManager>("ShareMgmt")!;
    this.switchPage(page || "dashboard", props || {});
    this.altMenu.set(AdminPortalAltMenu(this));
  }

  async start() {
    await this.fs.createDirectory("T:/Apps/AdminPortal");
  }

  //#endregion
  //#region PAGINATION

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

  //#endregion
  //#region TPA

  async saveTpaFilesOfBugReport(report: BugReport) {
    const regex =
      /http(s|):\/\/[a-zA-Z.-]+\/tpa\/v3\/(?<userId>[a-z0-9+]+)\/(?<timestamp>[0-9]+)\/(?<appId>.*?)@(?<filename>.*?\.js)/gm;
    const result: BugReportTpaFile[] = [];
    const tpaFiles = report.body
      .matchAll(regex)
      .toArray()
      .map((r) => ({ ...r.groups, url: r[0] }))
      .filter(Boolean) as BugReportFileUrlParseResult[];

    for (const file of tpaFiles) {
      const filePath = join(`T:/Apps/AdminPortal/${file.userId}-${file.timestamp}@${file.appId}/${file.filename}`);

      try {
        const content = await axios.get(file.url, { responseType: "text" });
        const source = content.data as string;
        await this.fs.writeFile(filePath, textToBlob(source, "text/javascript"));

        result.push({
          filename: file.filename,
          filePath,
          size: source.length,
        });
      } catch {
        result.push({
          filename: file.filename,
          size: -1,
          filePath,
          unavailable: true,
        });
      }
    }

    return result;
  }

  //#endregion
}
