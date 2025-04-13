import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import type { BugHuntUserSpaceProcess } from "$ts/server/user/bughunt";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/app";
import type { BugReport } from "$types/bughunt";
import { BugReportsCreatorApp } from "./creator/metadata";
import { BugHuntUserDataApp } from "./userdata/metadata";

export class BugHuntRuntime extends AppProcess {
  loading = Store<boolean>(true);
  currentTab = Store<string>();
  store = Store<BugReport[]>([]);
  selectedReport = Store<string>();
  bughunt: BugHuntUserSpaceProcess;

  protected overlayStore: Record<string, App> = {
    creator: BugReportsCreatorApp,
    userdata: BugHuntUserDataApp,
  };

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);

    this.bughunt = this.userDaemon?.bughunt!;
  }

  async render() {
    await this.changeTab("private");
  }

  async changeTab(tab: string) {
    if (this.currentTab() === tab) return;

    this.loading.set(true);
    await this.refresh(tab);
    this.currentTab.set(tab);
    this.selectedReport.set("");
    this.loading.set(false);
  }

  async refresh(tab = this.currentTab()) {
    this.store.set(tab === "private" ? await this.bughunt.getPrivateReports() : await this.bughunt.getPublicReports());
  }

  async invalidateCaches(restoreSelected = false) {
    const selected = this.selectedReport();
    this.loading.set(true);
    await this.bughunt.refreshAllCaches();
    await this.refresh();
    this.selectedReport.set(restoreSelected ? selected : "");
    this.loading.set(false);
  }

  newReport() {
    this.spawnOverlay("creator");
  }

  viewLogs() {
    const selected = this.selectedReport();
    const report = this.store().filter((r) => r._id === selected)[0];

    if (!report || !report.logs || !report.logs.length) return;

    this.spawnOverlayApp("logging", this.pid, "", "all", report.logs);
  }

  userData() {
    const selected = this.selectedReport();
    const report = this.store().filter((r) => r._id === selected)[0];

    if (!report || !report.userData) return;

    this.spawnOverlay("userdata", report.userData);
  }
}
