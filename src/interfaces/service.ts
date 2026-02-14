import type { ReadableServiceStore, Service, ServiceChangeResult, ServiceStore } from "$types/service";
import type { IProcess } from "./process";

export interface IBaseService extends IProcess {
  host: IServiceHost;
  activated: boolean;
}

export interface IServiceHost extends IProcess {
  Services: ReadableServiceStore;
  _holdRestart: boolean;
  initialRun(svcPreRun?: (service: Service) => void): Promise<void>;
  init(svcPreRun?: (service: Service) => void): Promise<void>;
  stop(): Promise<void>;
  readonly STORE: Map<string, Service>;
  loadStore(store: ServiceStore): boolean;
  getServiceInfo(id: string): Service | undefined;
  startService(id: string): Promise<"success" | "err_noExist" | "err_alreadyRunning" | "err_startCondition" | "err_spawnFailed">;
  stopService(id: string): Promise<ServiceChangeResult>;
  restartService(id: string): Promise<ServiceChangeResult>;
  verifyServicesProcesses(): Promise<void>;
  getService<T extends IBaseService = IBaseService>(id: string): T | undefined;
  hasService(id: string): boolean;
}
