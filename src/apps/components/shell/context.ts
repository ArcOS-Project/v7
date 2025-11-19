import type { AppProcess } from "$ts/apps/process";
import type { Process } from "$ts/process/instance";
import { UserPaths } from "$ts/server/user/store";
import type { TrayIconProcess } from "$ts/ui/tray/process";
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
        image: "ProcessManagerIcon",
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
          // BUG 687805735731d0b12b3115af
          if (!app) return;

          runtime.spawnApp(app?.id, runtime.pid);
        },
      },
      { sep: true },
      {
        caption: "Create shortcut",
        icon: "arrow-up-right",
        action: async (app: App) => {
          const [path] = await runtime.userDaemon!.files!.LoadSaveDialog({
            title: "Choose where to save the app shortcut",
            icon: "ShortcutMimeIcon",
            startDir: UserPaths.Desktop,
            isSave: true,
            saveName: app.id,
            extensions: [".arclnk"],
          });

          if (!path) return;

          await runtime.userDaemon?.shortcuts?.createShortcut(
            {
              icon: `@app::${app.id}`,
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
          // BUG 687805735731d0b12b3115af
          if (!app) return;

          if (runtime.userPreferences().pinnedApps?.includes(app?.id)) runtime.unpinApp(app?.id);
          else await runtime.pinApp(app?.id);
        },
        disabled: async (app: App) => {
          // BUG 687805735731d0b12b3115af
          const x = runtime.appStore()?.getAppSynchronous(app?.id);

          return !x;
        },
        // BUG 687805735731d0b12b3115af
        isActive: (app: App) => runtime.userPreferences().pinnedApps?.includes(app?.id),
        icon: "pin",
      },
      { sep: true },
      {
        caption: "App info",
        icon: "info",
        action: (app: App) => {
          // BUG 687805735731d0b12b3115af
          if (!app) return;

          runtime.spawnOverlayApp("AppInfo", runtime.pid, app.id);
        },
      },
      {
        caption: "Uninstall",
        icon: "trash-2",
        action: (app: App) => {
          // BUG 687805735731d0b12b3115af
          if (!app) return;

          runtime.userDaemon?.appreg?.uninstallAppWithAck(app);
        },
        // BUG 687805735731d0b12b3115af
        disabled: (app: App) => !app?.entrypoint && !app?.thirdParty,
      },
    ],
    "startmenu-folder": [
      {
        caption: "Open folder",
        icon: "folder-open",
        action: (name) => {
          runtime.spawnApp("fileManager", runtime.pid, `${UserPaths.Home}/${name}`);
        },
      },
      {
        caption: "Copy Path",
        icon: "clipboard-copy",
        action: async (name) => {
          await navigator.clipboard.writeText(`${UserPaths.Home}/${name}`);
        },
      },
      {
        caption: "Properties...",
        icon: "wrench",
        action: async (name) => {
          const result = await runtime.fs.readDir(UserPaths.Home);
          if (!result) return;

          const dir = result.dirs.find((d) => d.name === name);
          if (!dir) return;

          runtime.spawnOverlayApp("ItemInfo", runtime.pid, `${UserPaths.Home}/${name}`, dir);
          runtime.startMenuOpened.set(false);
        },
      },
    ],
    "startmenu-list": [
      {
        caption: "Enable app groups",
        action: () => {
          runtime.userPreferences.update((v) => {
            v.shell.start.noGroups = !v.shell.start.noGroups;
            return v;
          });
          setTimeout(() => {
            runtime.startMenuOpened.set(true);
          }, 0);
        },
        isActive: () => !runtime.userPreferences().shell.start.noGroups,
        icon: "folder-tree",
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
          const [path] = await runtime.userDaemon!.files!.LoadSaveDialog({
            title: "Choose where to save the app shortcut",
            icon: "ShortcutMimeIcon",
            startDir: UserPaths.Desktop,
            isSave: true,
            saveName: `${appData.id}.arclnk`,
            extensions: [".arclnk"],
          });

          if (!path) return;

          await runtime.userDaemon?.shortcuts?.createShortcut(
            {
              icon: `@app::${appData.id}`,
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
          const x = await runtime.appStore()?.getAppSynchronous(proc.app.id);

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
        image: "ShutdownIcon",
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
          runtime.userDaemon?.workspaces?.switchToDesktopByUuid(desktop.uuid);
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
    "taskbar-clock": [
      {
        caption: "Show seconds",
        icon: "loader",
        action: () => {
          runtime.userPreferences.update((v) => {
            v.shell.taskbar.clockSecs = !v.shell.taskbar.clockSecs;
            return v;
          });
        },
        isActive: () => runtime.userPreferences().shell.taskbar.clockSecs,
      },
      {
        caption: "Show date",
        icon: "calendar",
        action: () => {
          runtime.userPreferences.update((v) => {
            v.shell.taskbar.clockDate = !v.shell.taskbar.clockDate;
            return v;
          });
        },
        isActive: () => runtime.userPreferences().shell.taskbar.clockDate,
      },
      {
        caption: "12-hour clock",
        icon: "clock-12",
        action: () => {
          runtime.userPreferences.update((v) => {
            v.shell.taskbar.clock12hr = !v.shell.taskbar.clock12hr;
            return v;
          });
        },
        isActive: () => runtime.userPreferences().shell.taskbar.clock12hr,
      },
    ],
    "taskbar-trayicon": [
      {
        icon: "arrow-up-from-line",
        caption: "Focus App",
        action: (proc: TrayIconProcess) => {
          const appProc = runtime.handler.getProcess(proc.parentPid) as AppProcess;
          if (!appProc || !appProc.app) return;

          runtime.handler.renderer?.focusPid(appProc.pid);
        },
      },
      { sep: true },
      {
        icon: "book-copy",
        caption: "App info",
        action: async (proc: TrayIconProcess) => {
          const appProc = runtime.handler.getProcess(proc.parentPid) as AppProcess;
          if (!appProc || !appProc.app) return;

          await runtime.spawnOverlayApp("AppInfo", runtime.pid, appProc.app.id);
        },
      },
      {
        icon: "book",
        caption: "Process info",
        action: async (proc: TrayIconProcess) => {
          const parentProc = runtime.handler.getProcess(proc.parentPid) as Process;
          if (!parentProc) return;

          await runtime.spawnOverlayApp("ProcessInfoApp", runtime.pid, parentProc);
        },
      },
      { sep: true },
      {
        icon: "circle-x",
        caption: "Close app",
        action: async (proc: TrayIconProcess) => {
          const appProc = runtime.handler.getProcess(proc.parentPid) as AppProcess;

          if (!appProc) return;
          if (appProc.app) {
            await appProc.closeWindow();
            return;
          }

          await appProc.killSelf();
        },
      },
    ],
  };
}
