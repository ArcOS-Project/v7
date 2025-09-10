export interface TypedProcess {
  start?: () => any;
  stop?: () => any;
  killSelf: () => Promise<boolean>;
  pid: number;
  parentPid?: number;
  name: string;
  _disposed: boolean;
  _criticalProcess: boolean;
}

export interface ProcessContext {
  pid: number;
  userId: string | "SYSTEM";
  appId?: string;
}

export type RenderArgs = Record<string, any>;
export type ProcessSpawnResult = "success" | "err_disabled" | "err_aboveLimit";
export type ProcessKillResult =
  | "success"
  | "err_elevation"
  | "err_criticalProcess"
  | "err_disposed"
  | "err_noExist"
  | "err_killCancel";
