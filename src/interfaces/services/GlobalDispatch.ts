import type { IServerManager } from "$interfaces/modules/server";
import type { IBaseService } from "$interfaces/service";
import type { GlobalDispatchClient } from "$types/dispatch";
import type { Socket } from "socket.io-client";

export interface IGlobalDispatch extends IBaseService {
  client: Socket | undefined;
  server: IServerManager;
  authorized: boolean;
  start(): Promise<void>;
  stop(): Promise<void>;
  connected(): Promise<void>;
  sendUpdate(): void;
  subscribe<T extends Array<any> = any[]>(event: string, callback: (...data: T) => void): void;
  emit(event: string, ...data: any[]): void;
  getClients(): Promise<GlobalDispatchClient[]>;
  disconnectClient(clientId: string): Promise<boolean>;
}
