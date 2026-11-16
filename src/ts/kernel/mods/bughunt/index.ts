import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { IWaveKernel, KernelOpModuleName } from "$interfaces/IWaveKernel";
import type { IBugHuntKernelModule } from "$interfaces/modules/IBugHunt";
import { ArcOSVersion, Env, Kernel, Server, Stack } from "$ts/env";
import { KernelLogs } from "$ts/kernel/getters";
import { Backend } from "$ts/kernel/mods/server/axios";
import { KernelModule } from "$ts/kernel/module";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import type { App } from "$types/apps/app";
import type { BugReport, OutgoingBugReport } from "$types/server/bughunt";
import { defaultReportOptions } from "./store";

export class BugHuntKernelModule extends KernelModule implements IBugHuntKernelModule {
  //#region LIFECYCLE

  constructor(kernel: IWaveKernel, id: string) {
    super(kernel, id);
  }

  async _init(): Promise<void> {}

  //#endregion

  createReport(options = defaultReportOptions, app?: App, storeItemId?: string): OutgoingBugReport {
    Kernel.LogOperation("kmod", "bughunt", "createReport");

    const server = URL.parse(Server.url || "https://arcapi.nl")?.host;

    return {
      title: options.title,
      body: options.body || "No body",
      logs: options.noLogs ? [] : KernelLogs(),
      version: ArcOSVersion,
      location: window.location,
      userAgent: navigator.userAgent,
      api: server,
      frontend: location.host,
      meta: import.meta.env,
      mode: ArcMode(),
      build: ArcBuild(),
      public: options.public,
      isAppReport: !!app,
      reportAppId: app?.id,
      reportAppPkgId: storeItemId,
    };
  }

  async sendReport(outgoing: OutgoingBugReport, token = this.getToken(), options = defaultReportOptions): Promise<boolean> {
    Kernel.LogOperation("kmod", "bughunt", "sendReport");

    try {
      const response = await Backend.post("/bughunt/report", outgoing, {
        headers: { Authorization: `Bearer ${options.anonymous ? "" : token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  getToken() {
    Kernel.LogOperation("kmod", "bughunt", "getToken");

    const daemonPid = +Env.get("userdaemon_pid");
    const userDaemon = Stack.getProcess<IUserDaemon>(daemonPid);

    if (!daemonPid || !userDaemon) return "";

    return userDaemon.token;
  }

  async getUserBugReports(token: string): Promise<BugReport[]> {
    Kernel.LogOperation("kmod", "bughunt", "getUserBugReports");

    try {
      const response = await Backend.get("/bughunt/reports/private", { headers: { Authorization: `Bearer ${token}` } });

      return response.data as BugReport[];
    } catch {
      return [];
    }
  }

  async getPublicBugReports(token: string): Promise<BugReport[]> {
    Kernel.LogOperation("kmod", "bughunt", "getPublicBugReports");

    try {
      const response = await Backend.get(`/bughunt/reports/public`, { headers: { Authorization: `Bearer ${token}` } });

      return response.data as BugReport[];
    } catch {
      return [];
    }
  }
}
