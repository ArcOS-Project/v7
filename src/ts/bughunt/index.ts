import { ArcOSVersion } from "$ts/env";
import type { WaveKernel } from "$ts/kernel";
import type { Environment } from "$ts/kernel/env";
import { KernelModule } from "$ts/kernel/module";
import { ProcessHandler } from "$ts/process/handler";
import { ServerManager } from "$ts/server";
import { Axios } from "$ts/server/axios";
import { UserDaemon } from "$ts/server/user/daemon";
import type { BugReport, OutgoingBugReport } from "$types/bughunt";
import { defaultReportOptions } from "./store";

export class BugHunt extends KernelModule {
  server: ServerManager;
  env: Environment;
  handler: ProcessHandler;

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);

    this.server = kernel.getModule<ServerManager>("server");
    this.env = kernel.getModule<Environment>("env");
    this.handler = kernel.getModule<ProcessHandler>("stack");
  }

  async _init(): Promise<void> {}

  createReport(options = defaultReportOptions): OutgoingBugReport {
    const server = URL.parse(this.server.url)?.host;

    return {
      title: options.title,
      body: options.body || "No body",
      logs: this.kernel.Logs(),
      version: ArcOSVersion,
      location: window.location,
      userAgent: navigator.userAgent,
      api: server,
      frontend: location.host,
      meta: import.meta.env,
      mode: this.kernel.ARCOS_MODE,
      build: this.kernel.ARCOS_BUILD,
    };
  }

  async sendReport(outgoing: OutgoingBugReport): Promise<boolean> {
    try {
      const response = await Axios.post("/bughunt/report", outgoing, {
        headers: { Authorization: `Bearer ${this.getToken()}` },
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
}
