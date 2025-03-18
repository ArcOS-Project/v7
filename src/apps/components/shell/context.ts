import type { AppProcess } from "$ts/apps/process";
import { iconIdFromPath } from "$ts/images";
import { AppsIcon } from "$ts/images/general";
import { ShortcutMimeIcon } from "$ts/images/mime";
import { ShutdownIcon } from "$ts/images/power";
import type { App, AppContextMenu } from "$types/app";
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
            startDir: "U:/Desktop",
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
        action: (app: App) => {
          if (runtime.userPreferences().pinnedApps?.includes(app.id)) runtime.unpinApp(app.id);
          else runtime.pinApp(app.id);
        },
        isActive: (app: App) => runtime.userPreferences().pinnedApps?.includes(app.id),
        icon: "pin",
      },
      { sep: true },
      {
        caption: "App info",
        image: AppsIcon,
        action: (app: App) => {
          runtime.spawnOverlayApp("AppInfo", runtime.pid, app.id);
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

export function WindowSystemContextMenu(runtime: ShellRuntime): AppContextMenu {
  return {
    "_window-titlebar": [
      {
        caption: "App Info",
        image: AppsIcon,
        action: (proc: AppProcess) => {
          proc.spawnOverlayApp("AppInfo", +proc.env.get("shell_pid"), proc.app.id);
        },
      },
      { sep: true },
      {
        caption: "Minimize",
        action: (proc: AppProcess) => {
          proc.handler.renderer?.toggleMinimize(proc.pid);
        },
        icon: "chevron-down",
        disabled: (proc: AppProcess) => !proc.app.data.controls.minimize,
        isActive: (proc: AppProcess) => !!proc.getWindow()?.classList.contains("minimized"),
      },
      {
        caption: "Maximize",
        action: (proc: AppProcess) => {
          proc.handler.renderer?.toggleMaximize(proc.pid);
        },
        icon: "chevron-up",
        disabled: (proc: AppProcess) => !proc.app.data.controls.maximize,
        isActive: (proc: AppProcess) => !!proc.getWindow()?.classList.contains("maximized"),
      },
      { sep: true },
      {
        caption: "Window snapping",
        icon: "fullscreen",
        disabled: (proc: AppProcess) => !proc.app.data.controls.maximize,
        isActive: (proc: AppProcess) => !!proc.getWindow()?.classList.contains("snapped"),
        subItems: [
          {
            caption: "None",
            icon: "x",
            action: (proc: AppProcess) => runtime.handler.renderer?.unsnapWindow(proc.pid),
          },
          { sep: true },
          {
            caption: "Left",
            icon: "arrow-left",
            action: (proc: AppProcess) => runtime.handler.renderer?.snapWindow(proc.pid, "left"),
            isActive: (proc: AppProcess) => proc.getWindow()?.dataset.snapstate === "left",
          },
          {
            caption: "Right",
            icon: "arrow-right",
            action: (proc: AppProcess) => runtime.handler.renderer?.snapWindow(proc.pid, "right"),
            isActive: (proc: AppProcess) => proc.getWindow()?.dataset.snapstate === "right",
          },
          { sep: true },
          {
            caption: "Top",
            icon: "arrow-up",
            action: (proc: AppProcess) => runtime.handler.renderer?.snapWindow(proc.pid, "top"),
            isActive: (proc: AppProcess) => proc.getWindow()?.dataset.snapstate === "top",
          },
          {
            caption: "Bottom",
            icon: "arrow-down",
            action: (proc: AppProcess) => runtime.handler.renderer?.snapWindow(proc.pid, "bottom"),
            isActive: (proc: AppProcess) => proc.getWindow()?.dataset.snapstate === "bottom",
          },
          { sep: true },
          {
            caption: "Top Left",
            icon: "arrow-up-left",
            action: (proc: AppProcess) => runtime.handler.renderer?.snapWindow(proc.pid, "top-left"),
            isActive: (proc: AppProcess) => proc.getWindow()?.dataset.snapstate === "top-left",
          },
          {
            caption: "Top Right",
            icon: "arrow-up-right",
            action: (proc: AppProcess) => runtime.handler.renderer?.snapWindow(proc.pid, "top-right"),
            isActive: (proc: AppProcess) => proc.getWindow()?.dataset.snapstate === "top-right",
          },
          { sep: true },
          {
            caption: "Bottom Left",
            icon: "arrow-down-left",
            action: (proc: AppProcess) => runtime.handler.renderer?.snapWindow(proc.pid, "bottom-left"),
            isActive: (proc: AppProcess) => proc.getWindow()?.dataset.snapstate === "bottom-left",
          },
          {
            caption: "Bottom Right",
            icon: "arrow-down-right",
            action: (proc: AppProcess) => runtime.handler.renderer?.snapWindow(proc.pid, "bottom-right"),
            isActive: (proc: AppProcess) => proc.getWindow()?.dataset.snapstate === "bottom-right",
          },
        ],
      },
      { sep: true },
      {
        caption: "Close",
        action: (proc: AppProcess) => {
          proc.closeWindow();
        },
        image: ShutdownIcon,
        disabled: (proc: AppProcess) => !proc.app.data.controls.close,
      },
    ],
  };
}
