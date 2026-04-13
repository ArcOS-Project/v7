import type { LogLevel } from "$types/logging";
import type { ServerInfo, ServerOption } from "$types/server";
import type { AxiosInstance } from "axios";

export interface IServerManager {
  connected: boolean;
  serverInfo?: ServerInfo;
  previewBranch?: string;
  servers: ServerOption[];
  url?: string;
  hostname?: string;
  authCode?: string;
  checkUsernameAvailability(username: string): Promise<boolean>;
  checkEmailAvailability(username: string): Promise<boolean>;
  switchServer(url: string): Promise<boolean>;
  loadServers(): void;
  writeServers(servers: ServerOption[]): void;
  resetServers(): void;
  addServer(config: ServerOption): boolean;
  removeServer(url: string): boolean;
  isAdded(url: string): boolean;
}

export declare class IServerConnector {
  static prefix: string;
  static server: AxiosInstance;
}
