import type { ReadableServiceStore, Service, ServiceChangeResult, ServiceStore } from "$types/service";
import type { IProcess } from "./process";

export interface IBaseService extends IProcess {
  host: IServiceHost;
  activated: boolean;
  deactivate(broadcast?: (m: string) => void): Promise<void>;
}

export interface IServiceHost extends IProcess {
  Services: ReadableServiceStore;
  _holdRestart: boolean;
  initialRun(broadcast?: (m: string) => void): Promise<void>;
  init(broadcast?: (m: string) => void): Promise<void>;
  stop(): Promise<void>;
  readonly STORE: Map<string, Service>;
  loadStore(store: ServiceStore): boolean;
  getServiceInfo(id: string): Service | undefined;
  startService(id: string): Promise<ServiceChangeResult>;
  stopService(id: string): Promise<ServiceChangeResult>;
  restartService(id: string): Promise<ServiceChangeResult>;
  verifyServicesProcesses(): Promise<void>;
  getService<T extends IBaseService = IBaseService>(id: string): T | undefined;
  hasService(id: string): boolean;
  spinDown(broadcast?: (message: string) => void): Promise<void>;
}
