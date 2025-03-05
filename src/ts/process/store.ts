import type { ProcessKillResult } from "$types/process";

export const ProcessKillResultCaptions: Record<ProcessKillResult, string> = {
  err_criticalProcess: "The process is required for ArcOS to run properly.",
  err_disposed: "The process is already killed.",
  err_elevation: "Elevation was required, but wasn't provided.",
  err_noExist: "The process doesn't exist.",
  success: "The process was killed successfully.",
  err_killCancel:
    "The process did not permit the kill. It might still have pending operations.",
};
