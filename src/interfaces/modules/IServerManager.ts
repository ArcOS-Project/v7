import type { ServerInfo, ServerOption } from "$types/server";
import type { AxiosInstance } from "axios";
import type { IKernelModule } from "./IKernelModule";

export interface IServerManager extends IKernelModule {
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
  GetConn<T extends IServerConnector>(id: string, token: "" | string): T;
}

export declare class IServerConnector {
  name: string;
  get server(): AxiosInstance;
}
