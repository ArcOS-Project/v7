import { Env } from "$ts/env";
import type { MasterOption } from "./types";

export const MasterOptionStore: MasterOption[] = [
  {
    caption: "Manage Processes",
    image: "ProcessManagerIcon",
    action: async (runtime) => await runtime.spawnOverlayApp("processManager", +Env.get("shell_pid"), "Processes"),
  },
  {
    caption: "Remove any ghost windows",
    image: "RestartIcon",
    action: async (runtime) => await runtime.killGhosts(),
  },
  {
    caption: "Kill all user applications",
    image: "ErrorIcon",
    action: async (runtime) => await runtime.killUserApps(),
  },
  {
    caption: "Launch ArcTerm",
    image: "ArcTermIcon",
    action: async (runtime) => await runtime.spawnApp("ArcTerm", +Env.get("shell_pid")),
  },
  {
    caption: "Advanced System Settings",
    image: "WindowSettingsIcon",
    action: async (runtime) => await runtime.spawnApp("AdvSystemSettings", +Env.get("shell_pid")),
  },
  {
    caption: "Report a bug",
    image: "BugReportIcon",
    action: async (runtime) => await runtime.spawnOverlayApp("BugHuntCreator", +Env.get("shell_pid")),
  },
];
