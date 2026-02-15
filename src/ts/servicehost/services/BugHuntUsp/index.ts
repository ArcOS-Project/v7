import type { IBugHunt } from "$interfaces/modules/bughunt";
import type { IBugHuntUserSpaceProcess } from "$interfaces/services/BugHuntUsp";
import { Daemon } from "$ts/daemon";
import { getKMod } from "$ts/env";
import type { ServiceHost } from "$ts/servicehost";
import { BaseService } from "$ts/servicehost/base";
import type { BugReport, ReportOptions } from "$types/bughunt";
import type { Service } from "$types/service";

export class BugHuntUserSpaceProcess extends BaseService implements IBugHuntUserSpaceProcess {
  INVALIDATION_THRESHOLD = 10;
  privateCache: BugReport[] = [];
  publicCache: BugReport[] = [];
  cachedPrivateResponseCount = 0;
  cachedPublicResponseCount = 0;
  module: IBugHunt;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost, initBroadcast?: (msg: string) => void) {
    super(pid, parentPid, name, host, initBroadcast);

    this.module = getKMod<IBugHunt>("bughunt");

    this.setSource(__SOURCE__);
  }

  async afterActivate() {
    await this.refreshAllCaches();
  }

  async start() {
    this.initBroadcast?.("Activating Bug Hunt");
  }

  //#endregion

  async sendBugReport(options: ReportOptions): Promise<boolean> {
    const data = this.module.createReport(options);

    return await this.module.sendReport(data, Daemon!.token, options);
  }

  async getPrivateReports(forceInvalidate = false) {
    if (this.privateCache.length) {
      this.cachedPrivateResponseCount++;

      if (this.cachedPrivateResponseCount <= this.INVALIDATION_THRESHOLD && !forceInvalidate) {
        return this.privateCache;
      } else {
        this.Log("Invalidating private report cache");
        this.cachedPrivateResponseCount = 0;
      }
    }

    const reports = (await this.module.getUserBugReports(Daemon!.token!)).reverse();

    this.privateCache = reports;

    return reports;
  }

  async getPublicReports(forceInvalidate = false) {
    if (this.publicCache.length) {
      this.cachedPublicResponseCount++;

      if (this.cachedPublicResponseCount <= this.INVALIDATION_THRESHOLD && !forceInvalidate) {
        return this.publicCache;
      } else {
        this.Log("Invalidating public report cache");
        this.cachedPublicResponseCount = 0;
      }
    }

    const reports = (await this.module.getPublicBugReports()).reverse();

    this.publicCache = reports;

    return reports;
  }

  async refreshPrivateCache() {
    this.Log("Refreshing private cache");

    await this.getPrivateReports(true);
  }

  async refreshPublicCache() {
    this.Log("Refreshing public cache");

    await this.getPublicReports(true);
  }

  async refreshAllCaches() {
    await this.refreshPublicCache();
    await this.refreshPrivateCache();
  }
}

export const bhuspService: Service = {
  initialState: "started",
  name: "User process for bug reports",
  description: "Manages your ArcOS bug reports",
  process: BugHuntUserSpaceProcess,
};
