import type { IUserDaemon } from "../interfaces/daemon";
import type { MaybePromise } from "./common";
import type { ReadableStore } from "./writable";

export interface Service {
  name: string;
  description: string;
  process: Function;
  startCondition?: (daemon: IUserDaemon) => MaybePromise<boolean>;
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
