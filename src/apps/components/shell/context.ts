import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IProcess } from "$interfaces/IProcess";
import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
import type { ITrayIconProcess } from "$interfaces/services/ITrayHostService";
import { Daemon, Env, Stack } from "$ts/env";
import { UserPaths } from "$ts/user/store";
import type { App, AppContextMenu } from "$types/apps/app";

export function ShellContextMenu(runtime: IShellRuntime): AppContextMenu {
  return {
    "shell-taskbar": [
      {
        caption: "Processes",
        icon: "activity",
        action: () => {
          runtime.spawnApp("processManager", runtime.pid, "Processes");
        },
      },
      {
        caption: "Services",
        icon: "hand-helping",
        action: () => {
          runtime.spawnApp("processManager", runtime.pid, "Services");
        },
      },
      { sep: true },
      {
        caption: "Settings",
        icon: "settings",
        action: () => {
          runtime.spawnApp("systemSettings", runtime.pid, "shell");
        },
      },
    ],
    "startmenu-app": [
      {
        caption: "Launch",
        icon: "rocket",
        action: (app: App) => {
          if (!app) return;

          runtime.spawnApp(app?.id, process.pid);
        },
      },
      { sep: true },
      {
        caption: "Create shortcut",
        icon: "arrow-up-right",
        action: async (app: App) => {
          const [path] = await Daemon!.files!.LoadSaveDialog({
            title: "Choose where to save the app shortcut",
            icon: "ShortcutMimeIcon",
            startDir: UserPaths.Desktop,
            isSave: true,
            saveName: app.id,
            extensions: [".arclnk"],
          });

          if (!path) return;

          await Daemon?.shortcuts?.createShortcut(
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
          if (!app) return;

          if (runtime.userPreferences().pinnedApps?.includes(app?.id)) runtime.unpinApp(app?.id);
          else await runtime.pinApp(app?.id);
        },
        disabled: async (app: App) => {
          const x = runtime.appStore()?.getAppSynchronous(app?.id);

          return !x;
        },
        isActive: (app: App) => runtime.userPreferences().pinnedApps?.includes(app?.id),
        icon: "pin",
      },
      {
        caption: "Open file location",
        icon: "folder-open",
        action: (app: App) => {
          runtime.spawnApp(
            "fileManager",
            +Env.get("shell_pid"),
            `U:/System/Start${app?.metadata?.appGroup ? `/$$${app?.metadata?.appGroup}` : ""}`
          );
        },
      },
      { sep: true },
      {
        caption: "Enable app groups",
        action: (app: App) => {
          runtime.userPreferences().shell.start.noGroups = !runtime.userPreferences().shell.start.noGroups;
          setTimeout(() => {
            runtime.startMenuOpened.set(true);
          }, 0);
        },
        isActive: () => !runtime.userPreferences().shell.start.noGroups,
        icon: "folder-tree",
      },
      {
        caption: "Refresh start menu",
        icon: "rotate-cw",
        action: () => {
          runtime.refreshStartMenu();
        },
      },
      { sep: true },
      {
        caption: "App info",
        icon: "info",
        action: (app: App) => {
          if (!app) return;

          runtime.spawnOverlayApp("AppInfo", process.pid, app.id);
        },
      },
      {
        caption: "Uninstall",
        icon: "trash-2",
        action: (app: App) => {
          if (!app) return;

          Daemon?.appreg?.uninstallAppWithAck(app);
        },
        disabled: (app: App) => !app?.entrypoint && !app?.thirdParty,
      },
    ],
    "taskbar-openedapp": [
      {
        caption: "Launch another",
        icon: "rocket",
        action: (proc: IAppProcess) => {
          if (!proc) return;
          runtime.spawnApp(proc.app.id, runtime.pid);
        },
      },
      { sep: true },
      {
        caption: "Create shortcut",
        icon: "arrow-up-right",
        action: async (proc: IAppProcess) => {
          const { data: appData } = proc.app;
          const [path] = await Daemon!.files!.LoadSaveDialog({
            title: "Choose where to save the app shortcut",
            icon: "ShortcutMimeIcon",
            startDir: UserPaths.Desktop,
            isSave: true,
            saveName: `${appData.id}.arclnk`,
            extensions: [".arclnk"],
          });

          if (!path) return;

          await Daemon?.shortcuts?.createShortcut(
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
        action: async (proc: IAppProcess) => {
          if (runtime.userPreferences().pinnedApps?.includes(proc.app.id)) runtime.unpinApp(proc.app.id);
          else await runtime.pinApp(proc.app.id);
        },
        disabled: async (proc: IAppProcess) => {
          const x = await runtime.appStore()?.getAppSynchronous(proc.app.id);

          return !x;
        },
        isActive: (proc: IAppProcess) => runtime.userPreferences().pinnedApps?.includes(proc.app.id),
        icon: "pin",
      },
      { sep: true },
      {
        caption: "App info",
        icon: "info",
        action: (proc: IAppProcess) => {
          if (!proc) return;

          runtime.spawnOverlayApp("AppInfo", runtime.pid, proc.app.id);
        },
      },
      {
        caption: "Close window",
        image: "ShutdownIcon",
        action: (proc: IAppProcess) => {
          if (!proc) return;

          proc.closeWindow();
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
        action: (proc: ITrayIconProcess) => {
          const appProc = Stack.getProcess(proc.parentPid) as IAppProcess;
          if (!appProc || !appProc.app) return;

          Stack.renderer?.focusPid(appProc.pid);
        },
      },
      { sep: true },
      {
        icon: "book-copy",
        caption: "App info",
        action: async (proc: ITrayIconProcess) => {
          const appProc = Stack.getProcess(proc.parentPid) as IAppProcess;
          if (!appProc || !appProc.app) return;

          await runtime.spawnOverlayApp("AppInfo", runtime.pid, appProc.app.id);
        },
      },
      {
        icon: "book",
        caption: "Process info",
        action: async (proc: ITrayIconProcess) => {
          const parentProc = Stack.getProcess(proc.parentPid) as IProcess;
          if (!parentProc) return;

          await runtime.spawnOverlayApp("ProcessInfoApp", runtime.pid, parentProc);
        },
      },
      { sep: true },
      {
        icon: "circle-x",
        caption: "Close app",
        action: async (proc: ITrayIconProcess) => {
          const appProc = Stack.getProcess(proc.parentPid) as IAppProcess;

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
