import type { AppProcess } from "$ts/apps/process";
import { Stack } from "$ts/env";
import type { Process } from "$ts/process/instance";
import { Daemon } from "$ts/server/user/daemon";
import { UserPaths } from "$ts/server/user/store";
import type { TrayIconProcess } from "$ts/ui/tray/process";
import type { AppContextMenu } from "$types/app";
import type { ShellRuntime } from "./runtime";

export function ShellContextMenu(runtime: ShellRuntime): AppContextMenu {
  return {
    "shell-taskbar": [
      {
        caption: "Processes",
        icon: "activity",
        action: () => {
          runtime.spawnApp("processManager", runtime.pid);
        },
      },
      {
        caption: "Services",
        icon: "hand-helping",
        action: () => {
          runtime.spawnApp("processManager", runtime.pid);
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
          const appProc = Stack.getProcess(proc.parentPid) as AppProcess;
          if (!appProc || !appProc.app) return;

          Stack.renderer?.focusPid(appProc.pid);
        },
      },
      { sep: true },
      {
        icon: "book-copy",
        caption: "App info",
        action: async (proc: TrayIconProcess) => {
          const appProc = Stack.getProcess(proc.parentPid) as AppProcess;
          if (!appProc || !appProc.app) return;

          await runtime.spawnOverlayApp("AppInfo", runtime.pid, appProc.app.id);
        },
      },
      {
        icon: "book",
        caption: "Process info",
        action: async (proc: TrayIconProcess) => {
          const parentProc = Stack.getProcess(proc.parentPid) as Process;
          if (!parentProc) return;

          await runtime.spawnOverlayApp("ProcessInfoApp", runtime.pid, parentProc);
        },
      },
      { sep: true },
      {
        icon: "circle-x",
        caption: "Close app",
        action: async (proc: TrayIconProcess) => {
          const appProc = Stack.getProcess(proc.parentPid) as AppProcess;

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
