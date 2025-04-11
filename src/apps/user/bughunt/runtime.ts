import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import type { BugHuntUserSpaceProcess } from "$ts/server/user/bughunt";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { BugReport } from "$types/bughunt";

export class BugHuntRuntime extends AppProcess {
  loading = Store<boolean>(true);
  currentTab = Store<string>();
  store = Store<BugReport[]>([]);
  bughunt: BugHuntUserSpaceProcess;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);

    this.bughunt = this.userDaemon?.bughunt!;
  }

  async render() {
    await this.changeTab("private");
  }

  async changeTab(tab: string) {
    this.loading.set(true);
    this.store.set(tab === "private" ? await this.bughunt.getPrivateReports() : await this.bughunt.getPublicReports());
    this.currentTab.set(tab);
    this.loading.set(false);
  }
}
