import type { UserDaemon } from "$ts/server/user/daemon";
import type { BaseService } from "$ts/services/base";
import type { ReadableStore } from "$ts/writable";
import type { MaybePromise } from "./common";

export interface Service {
  name: string;
  description: string;
  process: typeof BaseService;
  startCondition?: (daemon: UserDaemon) => MaybePromise<boolean>;
  pid?: number;
  id?: string;
  initialState?: InitialServiceState;
  loadedAt?: number;
  changedAt?: number;
}

export type ServiceStore = Map<string, Service>;
export type ReadableServiceStore = ReadableStore<ServiceStore>;
export type InitialServiceState = "stopped" | "started";
export type ServiceChangeResult =
  | "err_noExist"
  | "err_alreadyRunning"
  | "err_notRunning"
  | "err_startCondition"
  | "err_spawnFailed"
  | "err_noManager"
  | "err_elevation"
  | "err_managerPaused"
  | "success";
