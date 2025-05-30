import type { ProcessHandler } from "$ts/process/handler";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import type { DevEnvActivationResult, ProjectMetadata } from "$types/devenv";
import type { AxiosInstance } from "axios";
import axios from "axios";
import { io, Socket } from "socket.io-client";
import { DevDrive } from "./drive";
import type { Service } from "$types/service";
import type { UserDaemon } from "$ts/server/user/daemon";
import { AppProcess } from "$ts/apps/process";
import { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import { MessageBox } from "$ts/dialog";
import { ErrorIcon } from "$ts/images/dialog";
import { ArcBuild } from "$ts/metadata/build";

export class DevelopmentEnvironment extends BaseService {
  public connected = false;
  private port?: number;
  private url?: string;
  private client: Socket | undefined;
  private axios?: AxiosInstance;
  public meta?: ProjectMetadata;
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

    if (this._disposed) {
      abort("ping_failed");
    }

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

    this.handler.store.subscribe((v) => {
      if (this._disposed) return;

      const procs = [...v]
        .filter(([_, proc]) => proc instanceof ThirdPartyAppProcess && proc.app.id === this.meta?.metadata.appId)
        .map(([pid]) => pid);

      if (this.connected) this.client?.emit("pids", procs);
    });

    this.meta = await this.getProjectMeta();

    if (!this.meta) return abort("ping_failed");
    if ((this.meta.devPort || 3128) !== this.port) return abort("port_mismatch");
    if (this.meta.buildHash !== ArcBuild()) return abort("build_mismatch");

    const drive = await this.mountDevDrive();

    if (!drive) return abort("drivemnt_failed");

    return new Promise((r) => {
      let resolved = false;

      this.client = io(this.url, { transports: ["websocket"] });
      this.client.on("connect", async () => {
        if (this._disposed) return this.disconnect();

        this.connected = true;
        resolved = true;
        r("success");
      });

      this.client.on("disconnect", (reason) => {
        MessageBox(
          {
            title: "ArcDev stopped",
            message: `The websocket connection was lost. Please reconnect to continue development. Disconnect reason was '${reason}'`,
            image: ErrorIcon,
            sound: "arcos.dialog.error",
            buttons: [{ caption: "Okay", action: () => {} }],
          },
          +this.env.get("shell_pid"),
          true
        );

        this.killTpa();
        this.host.stopService("DevEnvironment");
      });

      this.client.on("open-file", (file: string) => {
        if (this._disposed) return this.disconnect();
        this.daemon.openFile(file);
      });
      this.client.on("restart-tpa", () => {
        if (this._disposed) return this.disconnect();
        this.restartTpa();
      });
      this.kernel.Logs.subscribe((v) => {
        if (this._disposed) return;
        this.client?.emit("log-item", v[v.length - 1]);
      });

      setTimeout(() => {
        if (this._disposed) return this.disconnect();

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
    return undefined;
  }

  async getProjectMeta() {
    if (this._disposed) return this.disconnect();

    try {
      const response = await this.axios?.get("/ping");

      return response?.data as ProjectMetadata;
    } catch {
      return undefined;
    }
  }

  async mountDevDrive() {
    if (this._disposed) return this.disconnect();

    const result = await this.fs.mountDrive("devenv", DevDrive, "V", undefined, this.axios, this.url);

    return !!result;
  }

  async restartTpa() {
    if (this._disposed) return this.disconnect();

    await this.killTpa();
    await this.daemon.openFile("V:/_app.tpa");
  }

  async killTpa() {
    if (this._disposed) return this.disconnect();

    const procs = [...this.handler.store()]
      .filter(([_, proc]) => proc instanceof ThirdPartyAppProcess && proc.app.id === this.meta?.metadata.appId)
      .map(([pid]) => pid);

    for (const pid of procs) {
      await this.handler.kill(pid, true);
    }
  }

  async stop() {
    await this.disconnect();
  }
}

export const devEnvironmentService: Service = {
  name: "Development Environment",
  description: "Enables the development of apps",
  process: DevelopmentEnvironment,
  initialState: "stopped",
};
