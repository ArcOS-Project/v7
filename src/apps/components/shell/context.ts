import type { IAppProcess } from "$interfaces/app";
import type { IShellRuntime, ITrayIconProcess } from "$interfaces/shell";
import { Stack } from "$ts/env";
import { Daemon } from "$ts/daemon";
import { UserPaths } from "$ts/user/store";
import type { AppContextMenu } from "$types/app";
import type { IProcess } from "$interfaces/process";

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
