import { UserPaths } from "$ts/user/store";
import type { QuickSetting, StartMenuAction } from "./types";

export const QuickSettings: QuickSetting[] = [
  {
    caption: "Enable animations",
    icon: "sparkle",
    isActive: (p) => !p.userPreferences().shell.visuals.noAnimations,
    action: (p) =>
      p.userPreferences.update((v) => {
        v.shell.visuals.noAnimations = !v.shell.visuals.noAnimations;
        return v;
      }),
  },
  {
    caption: "Enable glass effects",
    icon: "blend",
    isActive: (p) => !p.userPreferences().shell.visuals.noGlass,
    action: (p) =>
      p.userPreferences.update((v) => {
        v.shell.visuals.noGlass = !v.shell.visuals.noGlass;
        return v;
      }),
  },
  {
    caption: "Dock the shell",
    icon: "dock",
    isActive: (p) => p.userPreferences().shell.taskbar.docked,
    action: (p) =>
      p.userPreferences.update((v) => {
        v.shell.taskbar.docked = !v.shell.taskbar.docked;
        return v;
      }),
  },
  {
    caption: "Dark mode",
    icon: "moon",
    isActive: (p) => p.userPreferences().desktop.theme === "dark",
    action: (p) =>
      p.userPreferences.update((v) => {
        v.desktop.theme = v.desktop.theme === "light" ? "dark" : "light";
        return v;
      }),
  },
  {
    caption: "Enable broad accent colors",
    icon: "palette",
    isActive: (p) => p.userPreferences().shell.taskbar.colored,
    action: (p) =>
      p.userPreferences.update((v) => {
        v.shell.taskbar.colored = !v.shell.taskbar.colored;
        return v;
      }),
  },
];

export const DefaultStartMenuActions = ["$$", "fileManager", "settings", "exit"];

export const StartMenuActions: Record<string, StartMenuAction> = {
  fileManager: {
    caption: "File Manager",
    action: (process) => process.spawnApp("fileManager", process.pid),
    icon: "folder-open",
    className: "file-manager",
  },
  documents: {
    caption: "Documents",
    action: (process) => process.spawnApp("fileManager", process.pid, UserPaths.Documents),
    icon: "file-text",
  },
  pictures: {
    caption: "Pictures",
    action: (process) => process.spawnApp("fileManager", process.pid, UserPaths.Pictures),
    icon: "file-image",
  },
  music: {
    caption: "Music",
    action: (process) => process.spawnApp("fileManager", process.pid, UserPaths.Music),
    icon: "file-music",
  },
  downloads: {
    caption: "Downloads",
    action: (process) => process.spawnApp("fileManager", process.pid, UserPaths.Downloads),
    icon: "file-down",
  },
  settings: {
    caption: "Settings",
    action: (process) => process.spawnApp("systemSettings", process.pid),
    icon: "settings-2",
  },
  processes: {
    caption: "Processes",
    action: (process) => process.spawnApp("processManager", process.pid, "Processes"),
    icon: "activity",
  },
  services: {
    caption: "Services",
    action: (process) => process.spawnApp("processManager", process.pid, "Services"),
    icon: "hand-helping",
  },
  exit: {
    caption: "Exit ArcOS",
    action: (process) => process.exit(),
    icon: "power",
  },
};

export const DefaultPinnedApps = ["$", "fileManager", "Messages", "AppStore", "systemSettings", "processManager"];
