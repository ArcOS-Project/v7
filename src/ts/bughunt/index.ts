import { ArcOSVersion } from "$ts/env";
import type { WaveKernel } from "$ts/kernel";
import type { Environment } from "$ts/kernel/env";
import { KernelLogs } from "$ts/kernel/getters";
import { KernelModule } from "$ts/kernel/module";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { ProcessHandler } from "$ts/process/handler";
import { ServerManager } from "$ts/server";
import { Backend } from "$ts/server/axios";
import { UserDaemon } from "$ts/server/user/daemon";
import type { BugReport, OutgoingBugReport } from "$types/bughunt";
import { defaultReportOptions } from "./store";

export class BugHunt extends KernelModule {
  server: ServerManager;
  env: Environment;
  handler: ProcessHandler;

  //#region LIFECYCLE

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);

    this.server = kernel.getModule<ServerManager>("server");
    this.env = kernel.getModule<Environment>("env");
    this.handler = kernel.getModule<ProcessHandler>("stack");
  }

  async _init(): Promise<void> {}

  //#endregion

  createReport(options = defaultReportOptions): OutgoingBugReport {
    const server = URL.parse(this.server.url)?.host;

    return {
      title: options.title,
      body: options.body || "No body",
      logs: options.noLogs ? [] : KernelLogs()(),
      version: ArcOSVersion,
      location: window.location,
      userAgent: navigator.userAgent,
      api: server,
      frontend: location.host,
      meta: import.meta.env,
      mode: ArcMode(),
      build: ArcBuild(),
      public: options.public,
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
    const daemonPid = +this.env.get("userdaemon_pid");
    const userDaemon = this.handler.getProcess<UserDaemon>(daemonPid);

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
