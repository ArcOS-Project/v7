import type { AppProcess } from "$ts/apps/process";
import { iconIdFromPath } from "$ts/images";
import { AppsIcon } from "$ts/images/general";
import { ShortcutMimeIcon } from "$ts/images/mime";
import { ShutdownIcon } from "$ts/images/power";
import type { AppContextMenu } from "$types/app";
import type { Workspace } from "$types/user";
import type { ShellRuntime } from "./runtime";

export function ShellContextMenu(runtime: ShellRuntime): AppContextMenu {
  return {
    "shell-taskbar": [
      {
        caption: "Settings",
        action: () => {
          runtime.notImplemented();
        },
      },
    ],
    "taskbar-openedapp": [
      {
        caption: "Launch another",
        icon: "rocket",
        action: (proc: AppProcess) => {
          runtime.spawnApp(proc.app.id, runtime.pid);
        },
      },
      { sep: true },
      {
        caption: "Create shortcut",
        icon: "arrow-up-right",
        action: async (proc: AppProcess) => {
          const { data: appData } = proc.app;
          const [path] = await runtime.userDaemon!.LoadSaveDialog({
            title: "Choose where to save the app shortcut",
            icon: ShortcutMimeIcon,
            startDir: "U:/Desktop",
            isSave: true,
            saveName: `${appData.id}.arclnk`,
            extensions: [".arclnk"],
          });

          if (!path) return;

          await runtime.userDaemon?.createShortcut(
            {
              icon: iconIdFromPath(appData.metadata.icon),
              name: appData.metadata.name,
              type: "app",
              target: appData.id,
            },
            path
          );
        },
      },
      {
        caption: "Pin app",
        action: (proc: AppProcess) => {
          if (runtime.userPreferences().pinnedApps?.includes(proc.app.id)) runtime.unpinApp(proc.app.id);
          else runtime.pinApp(proc.app.id);
        },
        isActive: (proc: AppProcess) => runtime.userPreferences().pinnedApps?.includes(proc.app.id),
        icon: "pin",
      },
      { sep: true },
      {
        caption: "App info",
        image: AppsIcon,
        action: (proc: AppProcess) => {
          runtime.spawnOverlayApp("AppInfo", runtime.pid, proc.app.id);
        },
      },
      {
        caption: "Close window",
        image: ShutdownIcon,
        action: (proc: AppProcess) => {
          proc.closeWindow();
        },
      },
    ],
    "actioncenter-weather-card": [
      {
        caption: "Refresh",
        action: (_, refresh) => {
          refresh(true);
        },
        icon: "rotate-cw",
      },
      {
        caption: "Change location...",
        icon: "map-pin",
        action: (changeLocation) => {
          changeLocation();
        },
      },
    ],
    "workspaces-desktop": [
      {
        caption: "Go here",
        action: (desktop: Workspace) => {
          runtime.userDaemon?.switchToDesktopByUuid(desktop.uuid);
        },
      },
      {
        caption: "Delete workspace",
        icon: "trash",
        action: (desktop: Workspace) => {
          runtime.deleteWorkspace(desktop);
        },
      },
    ],
  };
}
