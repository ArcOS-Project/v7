import { BugHunt } from "$ts/bughunt";
import type { ProcessHandler } from "$ts/process/handler";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import type { BugReport, ReportOptions } from "$types/bughunt";
import type { Service } from "$types/service";

export class BugHuntUserSpaceProcess extends BaseService {
  INVALIDATION_THRESHOLD = 10;
  privateCache: BugReport[] = [];
  publicCache: BugReport[] = [];
  cachedPrivateResponseCount = 0;
  cachedPublicResponseCount = 0;
  token: string | undefined;
  module: BugHunt;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(handler, pid, parentPid, name, host);

    this.module = this.kernel.getModule<BugHunt>("bughunt");
  }

  async activate(token: string) {
    this.token = token;
  }

  async afterActivate() {
    await this.refreshAllCaches();
  }

  async sendBugReport(options: ReportOptions): Promise<boolean> {
    if (!this.activated) return false;

    const data = this.module.createReport(options);

    return await this.module.sendReport(data, this.token, options);
  }

  async getPrivateReports(forceInvalidate = false) {
    if (!this.activated) return [];

    if (this.privateCache.length) {
      this.cachedPrivateResponseCount++;

      if (this.cachedPrivateResponseCount <= this.INVALIDATION_THRESHOLD && !forceInvalidate) {
        return this.privateCache;
      } else {
        this.Log("Invalidating private report cache");
        this.cachedPrivateResponseCount = 0;
      }
    }

    const reports = (await this.module.getUserBugReports(this.token!)).reverse();

    this.privateCache = reports;

    return reports;
  }

  async getPublicReports(forceInvalidate = false) {
    if (!this.activated) return [];

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
    if (!this.activated) return false;

    this.Log("Refreshing private cache");

    await this.getPrivateReports(true);
  }

  async refreshPublicCache() {
    if (!this.activated) return false;

    this.Log("Refreshing public cache");

    await this.getPublicReports(true);
  }

  async refreshAllCaches() {
    if (!this.activated) return false;

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
