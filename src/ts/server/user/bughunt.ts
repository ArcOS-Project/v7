import { BugHunt } from "$ts/bughunt";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import type { BugReport, ReportOptions } from "$types/bughunt";

export class BugHuntUserSpaceProcess extends Process {
  INVALIDATION_THRESHOLD = 10;
  privateCache: BugReport[] = [];
  publicCache: BugReport[] = [];
  cachedPrivateResponseCount = 0;
  cachedPublicResponseCount = 0;
  token: string;
  module: BugHunt;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, token: string) {
    super(handler, pid, parentPid);

    this.token = token;
    this.module = this.kernel.getModule<BugHunt>("bughunt");
  }

  protected async start(): Promise<any> {
    await this.refreshAllCaches();
  }

  async sendBugReport(options: ReportOptions): Promise<boolean> {
    const data = this.module.createReport(options);

    return await this.module.sendReport(data, this.token);
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

    const reports = (await this.module.getUserBugReports(this.token)).reverse();

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
