import type { ServerInfo, ServerOption } from "$types/server";

export interface IServerManager {
  connected: boolean;
  serverInfo?: ServerInfo;
  previewBranch?: string;
  servers: ServerOption[];
  url?: string;
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
