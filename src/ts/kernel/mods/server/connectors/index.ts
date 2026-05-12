import type { IEnvironment } from "$interfaces/modules/IEnvironment";
import type { IServerConnector } from "$interfaces/modules/IServerManager";
import { getKMod } from "$ts/env";
import { Log } from "$ts/logging";
import { LogLevel } from "$types/logging";
import type { AxiosInstance } from "axios";
import { Backend } from "../axios";

export abstract class ServerConnector implements IServerConnector {
  protected prefix: string = "";
  protected token?: string;
  public name = "";

  constructor(token?: string) {
    this.token = token;
  }

  get server(): AxiosInstance {
    if (!Backend.defaults.baseURL) return Backend;

    const url = new URL(Backend.defaults.baseURL);
    url.pathname = this.prefix; // Add the prefix to the URL in the most reliable way possible

    const backend = Backend.create({
      baseURL: url.toString(),
      responseType: "json",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });

    backend.interceptors.request.use((config) => {
      config.headers.set("X-Request-ID", getKMod<IEnvironment>("env").get("dispatch_sock_id"));
      return config;
    });

    if (this.token) backend.defaults.headers.common.Authorization = `Bearer ${this.token}`;

    return backend;
  }

  protected Log(message: string, level = LogLevel.info) {
    Log(`ServerConnector::'${this.prefix}'`, message, level);
  }
}
