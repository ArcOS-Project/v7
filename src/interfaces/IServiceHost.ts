import type { ReadableServiceStore, Service, ServiceChangeResult, ServiceStore } from "$types/service";
import type { IProcess } from "./IProcess";
import type { IServerConnector } from "./modules/IServerManager";

export interface IBaseService extends IProcess {
  host: IServiceHost;
  activated: boolean;
  deactivate(broadcast?: (m: string) => void): Promise<void>;
  GetConnector<T extends IServerConnector>(name: string): T;
}

export interface IServiceHost extends IProcess {
  Services: ReadableServiceStore;
  _holdRestart: boolean;
  initialRun(broadcast?: (m: string) => void): Promise<void>;
  init(broadcast?: (m: string) => void): Promise<void>;
  stop(): Promise<void>;
  readonly STORE: Map<ServiceIdentifier, Service>;
  loadStore(store: ServiceStore): boolean;
  getServiceInfo(id: ServiceIdentifier): Service | undefined;
  startService(id: ServiceIdentifier): Promise<ServiceChangeResult>;
  stopService(id: ServiceIdentifier): Promise<ServiceChangeResult>;
  restartService(id: ServiceIdentifier): Promise<ServiceChangeResult>;
  verifyServicesProcesses(): Promise<void>;
  getService<T extends IBaseService = IBaseService>(id: ServiceIdentifier): T | undefined;
  hasService(id: ServiceIdentifier): boolean;
  spinDown(broadcast?: (message: string) => void): Promise<void>;
}

export const ServiceIdentifiers = [
  "TrashSvc",
  "BugHuntUsp",
  "ShareMgmt",
  "AppStorage",
  "ProtoService",
  "AdminBootstrapper",
  "FileAssocSvc",
  "GlobalDispatch",
  "MessagingService",
  "DevEnvironment",
  "DistribSvc",
  "IconService",
  "LibMgmtSvc",
  "MigrationSvc",
  "RecentFilesSvc",
] as const;

export type ServiceIdentifier = (typeof ServiceIdentifiers)[number];
