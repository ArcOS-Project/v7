
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

export const ProcessStates = [
  "starting",
  "running",
  "stopping",
  "error",
  "constructing",
  "unknown",
  "disposed",
  "rendering",
] as const;

export type ProcessState = (typeof ProcessStates)[number];

export const ProcessStateIcons: Record<ProcessState, string> = {
  starting: "rocket",
  running: "play",
  stopping: "square",
  error: "circle-alert",
  constructing: "hammer",
  unknown: "circle-question-mark",
  disposed: "trash-2",
  rendering: "refresh-cw",
};
