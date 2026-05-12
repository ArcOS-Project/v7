import type { IAppProcess } from "$interfaces/IAppProcess";
import type { BooleanStore, StringStore } from "$types/writable";

export interface IAddServerRuntime extends IAppProcess {
  loading: BooleanStore;
  action: StringStore;

  addServer(hostname: string, port: number, authCode?: string): Promise<void>;
  createServerUrl(hostname: string, port: number): string;
  testServer(hostname: string, port: number, authCode?: string): Promise<void>;
}
