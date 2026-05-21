import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ServerOption } from "$types/server";
import type { ReadableStore } from "$types/writable";

export interface ISwitchServerRuntime extends IAppProcess {
  servers: ReadableStore<ServerOption[]>;
  selected: ReadableStore<string>;
  loading: ReadableStore<boolean>;
  connectionError: ReadableStore<boolean>;
  subscriber?: number;

  start(): Promise<void>;
  stop(): Promise<void>;
  switchServer(server: ServerOption): Promise<void>;
  removeServer(server: ServerOption): Promise<void>;
  addServer(): Promise<void>;
}
