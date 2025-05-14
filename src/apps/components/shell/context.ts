import type { AppProcess } from "$ts/apps/process";
import { iconIdFromPath } from "$ts/images";
import { ProcessManagerIcon } from "$ts/images/apps";
import { ShortcutMimeIcon } from "$ts/images/mime";
import { ShutdownIcon } from "$ts/images/power";
import { UserPaths } from "$ts/server/user/store";
import type { App, AppContextMenu } from "$types/app";
import type { Workspace } from "$types/user";
import type { ShellRuntime } from "./runtime";

export function ShellContextMenu(runtime: ShellRuntime): AppContextMenu {
  return {
    "shell-taskbar": [
      {
        caption: "Settings",
        icon: "settings",
        action: () => {
          runtime.spawnApp("systemSettings", runtime.pid);
        },
      },
      {
        caption: "Processes",
        image: ProcessManagerIcon,
        action: () => {
          runtime.spawnApp("processManager", runtime.pid);
        },
      },
    ],
    "startmenu-app": [
      {
        caption: "Launch",
        icon: "rocket",
        action: (app: App) => {
          runtime.spawnApp(app.id, runtime.pid);
        },
      },
      { sep: true },
      {
        caption: "Create shortcut",
        icon: "arrow-up-right",
        action: async (app: App) => {
          const [path] = await runtime.userDaemon!.LoadSaveDialog({
            title: "Choose where to save the app shortcut",
            icon: ShortcutMimeIcon,
            startDir: UserPaths.Desktop,
            isSave: true,
            saveName: `${app.id}.arclnk`,
            extensions: [".arclnk"],
          });

          if (!path) return;

          await runtime.userDaemon?.createShortcut(
            {
              icon: iconIdFromPath(app.metadata.icon),
              name: app.metadata.name,
              type: "app",
              target: app.id,
            },
            path
          );
        },
      },
      {
        caption: "Pin app",
        action: async (app: App) => {
          if (runtime.userPreferences().pinnedApps?.includes(app.id)) runtime.unpinApp(app.id);
          else await runtime.pinApp(app.id);
        },
        disabled: async (app: App) => {
          const x = await runtime.appStore()?.getAppById(app.id);

          return !x;
        },
        isActive: (app: App) => runtime.userPreferences().pinnedApps?.includes(app.id),
        icon: "pin",
      },
      { sep: true },
      {
        caption: "App info",
        icon: "info",
        action: (app: App) => {
          runtime.spawnOverlayApp("AppInfo", runtime.pid, app.id);
        },
      },
      {
        caption: "Uninstall",
        icon: "trash-2",
        action: (app: App) => {
          runtime.userDaemon?.uninstallAppWithAck(app);
        },
        disabled: (app: App) => !app.entrypoint && !app.thirdParty,
      },
    ],
    "taskbar-openedapp": [
      {
        caption: "Launch another",
        icon: "rocket",
        action: (proc: AppProcess) => {
          if (!proc) return;
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
            startDir: UserPaths.Desktop,
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
        action: async (proc: AppProcess) => {
          if (runtime.userPreferences().pinnedApps?.includes(proc.app.id)) runtime.unpinApp(proc.app.id);
          else await runtime.pinApp(proc.app.id);
        },
        disabled: async (proc: AppProcess) => {
          const x = await runtime.appStore()?.getAppById(proc.app.id);

          return !x;
        },
        isActive: (proc: AppProcess) => runtime.userPreferences().pinnedApps?.includes(proc.app.id),
        icon: "pin",
      },
      { sep: true },
      {
        caption: "App info",
        icon: "info",
        action: (proc: AppProcess) => {
          if (!proc) return;

          runtime.spawnOverlayApp("AppInfo", runtime.pid, proc.app.id);
        },
      },
      {
        caption: "Close window",
        image: ShutdownIcon,
        action: (proc: AppProcess) => {
          if (!proc) return;

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
    "actioncenter-gallery-card": [
      {
        caption: "Change image...",
        action: (chooseImage) => {
          chooseImage();
        },
      },
      {
        caption: "Remove image",
        action: async () => {
          runtime.userPreferences.update((v) => {
            v.shell.actionCenter.galleryImage = "";

            return v;
          });
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
