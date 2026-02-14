import type { IUserDaemon } from "$interfaces/daemon";
import type { IBugHunt, IWaveKernel } from "$interfaces/kernel";
import { ArcOSVersion, Env, Server, Stack } from "$ts/env";
import { KernelLogs } from "$ts/kernel/getters";
import { KernelModule } from "$ts/kernel/module";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { Backend } from "$ts/kernel/mods/server/axios";
import type { App } from "$types/app";
import type { BugReport, OutgoingBugReport } from "$types/bughunt";
import { defaultReportOptions } from "./store";

export class BugHunt extends KernelModule implements IBugHunt {
  //#region LIFECYCLE

  constructor(kernel: IWaveKernel, id: string) {
    super(kernel, id);
  }

  async _init(): Promise<void> {}

  //#endregion

  createReport(options = defaultReportOptions, app?: App, storeItemId?: string): OutgoingBugReport {
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
    const daemonPid = +Env.get("userdaemon_pid");
    const userDaemon = Stack.getProcess<IUserDaemon>(daemonPid);

    if (!daemonPid || !userDaemon) return "";

    return userDaemon.token;
  }

  async getUserBugReports(token: string): Promise<BugReport[]> {
    try {
      const response = await Backend.get("/bughunt/reports/private", { headers: { Authorization: `Bearer ${token}` } });

      return response.data as BugReport[];
    } catch {
      return [];
    }
  }

  async getPublicBugReports(): Promise<BugReport[]> {
    try {
      const response = await Backend.get(`/bughunt/reports/public`);

      return response.data as BugReport[];
    } catch {
      return [];
    }
  }
}
