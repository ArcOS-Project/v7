import type { IServerConnector } from "$interfaces/modules/server";
import { Log } from "$ts/logging";
import { LogLevel } from "$types/logging";
import type { AxiosInstance } from "axios";
import { Backend } from "../axios";

export function ServerConnector(prefix: string = "/"): typeof IServerConnector {
  if (!prefix.startsWith("/") || (prefix.endsWith("/") && prefix.length !== 1))
    throw new Error("Connector prefix must start with a slash and may not end with one");

  class ServerConnectorImpl {
    static prefix: string = prefix;
    static get server(): AxiosInstance {
      if (!Backend.defaults.baseURL) return Backend;

      const url = new URL(Backend.defaults.baseURL);
      url.pathname = prefix; // Add the prefix to the URL in the most reliable way possible

      return Backend.create({
        baseURL: url.toString(),
      });
    }

    protected static Log(message: string, level = LogLevel.info) {
      Log(`ServerConnector::'${prefix}'`, message, level);
    }
  }

  return ServerConnectorImpl as typeof IServerConnector;
}
