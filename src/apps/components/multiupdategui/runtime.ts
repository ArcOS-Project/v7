import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/daemon";
import { SysDispatch } from "$ts/env";
import { DistributionServiceProcess } from "$ts/servicehost/services/DistribSvc";
import { Plural } from "$ts/util";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { ElevationLevel } from "$types/elevation";
import type { InstallStatus, StoreItem, UpdateInfo } from "$types/package";
import type { MultiUpdateStatus, MultiUpdateStatusNode } from "./types";

export class MultiUpdateGuiRuntime extends AppProcess {
  private updates: UpdateInfo[];
  private distrib: DistributionServiceProcess;
  private win: HTMLDivElement | undefined;
  public status = Store<MultiUpdateStatus>([]);
  public currentPackage = Store<StoreItem | undefined>();
  public working = Store<boolean>(false);
  public done = Store<boolean>(false);
  public errored = Store<string[]>([]);
  public logs = Store<Record<string, InstallStatus>>({});
  public focused = Store<string>();
  public showLog = Store<boolean>(false);
  public unified = Store<boolean>(false);

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, updates: UpdateInfo[]) {
    super(pid, parentPid, app);

    this.distrib = Daemon!.serviceHost!.getService<DistributionServiceProcess>("DistribSvc")!;
    this.updates = Array.isArray(updates) ? updates : [];

    this.setSource(__SOURCE__);
  }

  async start() {
    if (!this.updates.length) return false;

    const result: MultiUpdateStatus = [];

    for (const update of this.updates) {
      result.push({
        pkg: update.pkg,
        max: 100,
        done: 0,
        state: "pending",
      });
    }

    this.status.set(result);
  }

  async render() {
    this.win = this.getWindow();

    if (this.updates.length > 15) {
      this.unified.set(true);
      this.toggleLog();
    }
  }

  async onClose(): Promise<boolean> {
    SysDispatch.dispatch("mugui-done");

    return true;
  }

  //#endregion
  //#region PACKAGE

  updatePackageStatus(appId: string, newData: Partial<MultiUpdateStatusNode>) {
    this.status.update((v) => {
      const index = v.map((n) => n.pkg.pkg.appId).indexOf(appId);
      v[index] = { ...v[index], ...newData };

      return v;
    });
  }

  packageFailed(appId: string) {
    this.updatePackageStatus(appId, { state: "failed", done: 100, max: 100 });
  }

  //#endregion
  //#region ACTIONS

  async go() {
    this.working.set(true);

    const elevated = await Daemon!.elevation!.manuallyElevate({
      what: `ArcOS needs your permission to update ${this.updates.length} ${Plural("app", this.updates.length)}.`,
      title: this.app.data.metadata.name,
      description: this.app.data.metadata.author,
      image: "UpdateIcon",
      level: ElevationLevel.medium,
    });

    if (!elevated) {
      this.working.set(false);
      return;
    }

    for (const update of this.updates) {
      this.currentPackage.set(update.pkg);
      const id = update.pkg.pkg.appId;
      const installer = await this.distrib.updateStoreItem(update.pkg._id, true, (progress) => {
        this.updatePackageStatus(id, { max: progress.max, done: progress.value, state: "downloading" });
      });

      if (!installer) {
        this.packageFailed(id);
        continue;
      }

      await this.distrib!.removeStoreItemFromInstalled(update.pkg._id);

      installer.TOTAL_COUNT.subscribe((v) => this.updatePackageStatus(id, { max: v }));
      installer.COUNT.subscribe((v) => this.updatePackageStatus(id, { done: v }));

      installer.status.subscribe((v) => {
        this.logs.update((l) => {
          l[update.pkg._id] = v;
          return l;
        });
      });

      installer.focused.subscribe((v) => this.focused.set(v));

      this.updatePackageStatus(id, { state: "working" });

      const result = await installer.__go();

      if (!result) {
        this.packageFailed(id);
        continue;
      }

      this.updatePackageStatus(id, { state: "success", max: 100, done: 100 });
    }

    this.working.set(false);
    this.done.set(true);

    this.checkForErrors();
  }

  checkForErrors() {
    const status = this.status();

    this.errored.set(status.filter((s) => s.state === "failed").map((s) => s.pkg.pkg.appId));
  }

  mainAction() {
    if (this.done()) this.closeWindow();
    else this.go();
  }

  toggleLog() {
    this.showLog.set(!this.showLog());
    this.win?.classList.toggle("expand", this.showLog());
  }

  //#endregion
}
