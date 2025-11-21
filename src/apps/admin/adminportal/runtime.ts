import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { AdminBootstrapper } from "$ts/server/admin";
import { ShareManager } from "$ts/shares";
import { Sleep } from "$ts/sleep";
import { textToBlob } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/app";
import type { BugReport } from "$types/bughunt";
import axios from "axios";
import { AdminPortalAltMenu } from "./altmenu";
import { AdminPortalPageStore } from "./store";
import type { BugReportFileUrlParseResult, BugReportTpaFile } from "./types";
import { BugHuntUserDataApp } from "./userdata/metadata";
import { Fs } from "$ts/env";
import { Daemon } from "$ts/server/user/daemon";

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

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, page?: string, props?: Record<string, any>) {
    super(pid, parentPid, app);

    this.admin = Daemon!.serviceHost!.getService<AdminBootstrapper>("AdminBootstrapper")!;
    this.shares = Daemon!.serviceHost!.getService<ShareManager>("ShareMgmt")!;
    this.switchPage(page || "dashboard", props || {});
    this.altMenu.set(AdminPortalAltMenu(this));

    this.setSource(__SOURCE__);
  }

  async start() {
    await Fs.createDirectory("T:/Apps/AdminPortal"); // temp folder for saveTpaFilesOfBugReport

    if (!this.admin) {
      this.switchPage("noAdminBootstrapper", {}, true);
    }
  }

  //#endregion
  //#region PAGINATION

  async switchPage(pageId: string, props: Record<string, any> = {}, force = false) {
    this.Log(`Loading page '${pageId}'`);

    if (!AdminPortalPageStore.has(pageId)) {
      // This probably won't ever happen, but just in case
      MessageBox(
        {
          title: "Broken link",
          message:
            "The page you tried to navigate to isn't registered in the Admin Portal's page store. If you didn't do this yourself, please check in with Izaak.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: "ElevationIcon",
          sound: "arcos.dialog.warning",
        },
        this.pid,
        true
      );
      return;
    }

    const page = AdminPortalPageStore.get(pageId);

    this.switchPageProps.set(props);

    // If forced, invoke a complete rerender by setting the page to nothing
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
    // Regular expression assumes URL format:
    // https://domain.tld/tpa/v3/userId/timestamp/appId@filename.js
    const regex =
      /http(s|):\/\/[a-zA-Z.-]+\/tpa\/v3\/(?<userId>[a-z0-9+]+)\/(?<timestamp>[0-9]+)\/(?<appId>.*?)@(?<filename>.*?\.js)/gm;
    const result: BugReportTpaFile[] = [];
    const tpaFiles = report.body
      .matchAll(regex) // Gather all the TPA file URLs
      .toArray()
      .map((r) => ({ ...r.groups, url: r[0] })) // The named groups (as seen in the regex) along with the URL
      .filter(Boolean) as BugReportFileUrlParseResult[]; // Filter empty shit

    for (const file of tpaFiles) {
      // Had to choose a unique-ish filename that still made sense... Oh well.
      const filePath = join(`T:/Apps/AdminPortal/${file.userId}-${file.timestamp}@${file.appId}/${file.filename}`);

      try {
        const content = await axios.get(file.url, { responseType: "text" }); // responseType ensures we get a string back
        const source = content.data as string;
        await Fs.writeFile(filePath, textToBlob(source, "text/javascript")); // Now we write the code to temp

        // Finally save it
        result.push({
          filename: file.filename,
          filePath,
          size: source.length,
        });
      } catch {
        // File no longer in the server's RAM, so mark as unavailable
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
