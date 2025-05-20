import type { ProcessHandler } from "$ts/process/handler";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import type { DevEnvActivationResult, ProjectMetadata } from "$types/devenv";
import type { AxiosInstance } from "axios";
import axios from "axios";
import { io, type Socket } from "socket.io-client";
import { DevDrive } from "./drive";
import type { Service } from "$types/service";
import type { UserDaemon } from "$ts/server/user/daemon";
import { AppProcess } from "$ts/apps/process";

export class DevelopmentEnvironment extends BaseService {
  public connected = false;
  private port?: number;
  private url?: string;
  private client: Socket | undefined;
  private axios?: AxiosInstance;
  private meta?: ProjectMetadata;
  private daemon: UserDaemon;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(handler, pid, parentPid, name, host);

    window.addEventListener("onbeforeunload", () => {
      this.stop();
    });

    this.daemon = this.handler.getProcess(+this.env.get("userdaemon_pid"))!;
  }

  async connect(port: number): Promise<DevEnvActivationResult> {
    const abort = (code: DevEnvActivationResult) => {
      return new Promise<DevEnvActivationResult>((r) => {
        this.disconnect();
        r(code);
      });
    };

    if (this.connected) return abort("already_connected");

    this.url = `http://localhost:${port}`;
    this.port = port;
    this.axios = axios.create({
      baseURL: this.url,
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });

    this.meta = await this.getProjectMeta();

    if (!this.meta) return abort("ping_failed");
    if ((this.meta.devPort || 3128) !== this.port) return abort("port_mismatch");

    const drive = await this.mountDevDrive();

    if (!drive) return abort("drivemnt_failed");

    return new Promise((r) => {
      let resolved = false;

      this.client = io(this.url, { transports: ["websocket"] });
      this.client.on("connect", async () => {
        resolved = true;
        r("success");
      });

      this.client.on("open-file", (file: string) => {
        this.daemon.openFile(file);
      });
      this.client.on("restart-tpa", () => this.restartTpa());

      setTimeout(() => {
        if (!resolved) {
          r("websock_failed");
          this.disconnect();
        }
      }, 3000);
    });
  }

  async disconnect() {
    this.axios = undefined;
    this.url = undefined;
    this.port = undefined;
    this.client?.disconnect();
    this.connected = false;
    await this.fs.umountDrive("devenv", true);
  }

  async getProjectMeta() {
    try {
      const response = await this.axios?.get("/ping");

      return response?.data as ProjectMetadata;
    } catch {
      return undefined;
    }
  }

  async mountDevDrive() {
    const result = await this.fs.mountDrive("devenv", DevDrive, "V", undefined, this.axios, this.url);

    return !!result;
  }

  async restartTpa() {
    const procs = [...this.handler.store()]
      .filter(([pid, proc]) => proc instanceof AppProcess && proc.app.id === this.meta?.metadata.appId)
      .map(([pid]) => pid);

    for (const pid of procs) {
      await this.handler.kill(pid, true);
    }

    await this.daemon.openFile("V:/_app.tpa");
  }
}

export const devEnvironmentService: Service = {
  name: "Development Environment",
  description: "Enables the development of apps",
  process: DevelopmentEnvironment,
  initialState: "stopped",
};
