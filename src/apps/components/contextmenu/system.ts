import type { IAppProcess } from "$interfaces/app";
import { Daemon } from "$ts/daemon";
import { Env, Stack } from "$ts/env";
import type { AppContextMenu } from "$types/app";

export function WindowSystemContextMenu(): AppContextMenu {
  let userDaemon = Daemon;
  let workspaces = userDaemon?.preferences().workspaces.desktops;
  let currentWorkspace = userDaemon?.preferences().workspaces.index;

  return {
    "_window-titlebar": [
      {
        caption: "App Info",
        icon: "info",
        action: (proc: IAppProcess) => {
          proc.spawnOverlayApp("AppInfo", +Env.get("shell_pid"), proc?.app.id);
        },
      },
      {
        caption: "Process info",
        icon: "cog",
        action: (proc: IAppProcess) => {
          proc.spawnOverlayApp("ProcessInfoApp", +Env.get("shell_pid"), proc);
        },
      },
      { sep: true },

      {
        caption: "Minimize",
        action: (proc: IAppProcess) => {
          Stack.renderer?.toggleMinimize(proc?.pid);
        },
        icon: "chevron-down",
        disabled: (proc: IAppProcess) => !proc?.app.data.controls.minimize,
        isActive: (proc: IAppProcess) => !!proc?.getWindow()?.classList.contains("minimized"),
      },
      {
        caption: "Maximize",
        action: (proc: IAppProcess) => {
          Stack.renderer?.unsnapWindow(proc?.pid);
          Stack.renderer?.toggleMaximize(proc?.pid);
        },
        icon: "chevron-up",
        disabled: (proc: IAppProcess) => !proc?.app.data.controls.maximize,
        isActive: (proc: IAppProcess) => !!proc?.getWindow()?.classList.contains("maximized"),
      },
      { sep: true },
      {
        caption: "Window snapping",
        icon: "fullscreen",
        disabled: (proc: IAppProcess) => !proc?.app.data.controls.maximize,
        isActive: (proc: IAppProcess) => !!proc?.getWindow()?.classList.contains("snapped"),
        subItems: [
          {
            caption: "None",
            icon: "x",
            action: (proc: IAppProcess) => Stack.renderer?.unsnapWindow(proc?.pid),
          },
          { sep: true },
          {
            caption: "Left",
            icon: "arrow-left",
            action: (proc: IAppProcess) => Stack.renderer?.snapWindow(proc?.pid, "left"),
            isActive: (proc: IAppProcess) => proc?.getWindow()?.dataset.snapstate === "left",
          },
          {
            caption: "Right",
            icon: "arrow-right",
            action: (proc: IAppProcess) => Stack.renderer?.snapWindow(proc?.pid, "right"),
            isActive: (proc: IAppProcess) => proc?.getWindow()?.dataset.snapstate === "right",
          },
          { sep: true },
          {
            caption: "Top",
            icon: "arrow-up",
            action: (proc: IAppProcess) => Stack.renderer?.snapWindow(proc?.pid, "top"),
            isActive: (proc: IAppProcess) => proc?.getWindow()?.dataset.snapstate === "top",
          },
          {
            caption: "Bottom",
            icon: "arrow-down",
            action: (proc: IAppProcess) => Stack.renderer?.snapWindow(proc?.pid, "bottom"),
            isActive: (proc: IAppProcess) => proc?.getWindow()?.dataset.snapstate === "bottom",
          },
          { sep: true },
          {
            caption: "Top Left",
            icon: "arrow-up-left",
            action: (proc: IAppProcess) => Stack.renderer?.snapWindow(proc?.pid, "top-left"),
            isActive: (proc: IAppProcess) => proc?.getWindow()?.dataset.snapstate === "top-left",
          },
          {
            caption: "Top Right",
            icon: "arrow-up-right",
            action: (proc: IAppProcess) => Stack.renderer?.snapWindow(proc?.pid, "top-right"),
            isActive: (proc: IAppProcess) => proc?.getWindow()?.dataset.snapstate === "top-right",
          },
          { sep: true },
          {
            caption: "Bottom Left",
            icon: "arrow-down-left",
            action: (proc: IAppProcess) => Stack.renderer?.snapWindow(proc?.pid, "bottom-left"),
            isActive: (proc: IAppProcess) => proc?.getWindow()?.dataset.snapstate === "bottom-left",
          },
          {
            caption: "Bottom Right",
            icon: "arrow-down-right",
            action: (proc: IAppProcess) => Stack.renderer?.snapWindow(proc?.pid, "bottom-right"),
            isActive: (proc: IAppProcess) => proc?.getWindow()?.dataset.snapstate === "bottom-right",
          },
        ],
      },
      {
        caption: "Move to workspace",
        icon: "rotate-ccw-square",
        subItems: [
          {
            caption: "Left workspace",
            icon: "arrow-left",
            action: (proc: IAppProcess) => {
              if (!proc?.pid) return;
              userDaemon?.workspaces?.moveWindow(
                proc.pid,
                workspaces?.[currentWorkspace! - 1 >= 0 ? currentWorkspace! - 1 : workspaces!.length - 1]!.uuid!
              );
            },
            disabled: (proc: IAppProcess) => {
              return !workspaces?.[currentWorkspace! - 1] || !proc?.pid;
            },
          },
          {
            caption: "Right workspace",
            icon: "arrow-right",
            action: (proc: IAppProcess) => {
              if (!proc?.pid) return;
              userDaemon?.workspaces?.moveWindow(
                proc.pid,
                workspaces?.[currentWorkspace! + 1 <= workspaces.length - 1 ? currentWorkspace! + 1 : 0]!.uuid!
              );
            },
            disabled: (proc: IAppProcess) => {
              return !workspaces?.[currentWorkspace! + 1] || !proc?.pid;
            },
          },
        ],
      },
      { sep: true },
      {
        caption: "Close",
        action: (proc: IAppProcess) => {
          proc.closeWindow();
        },
        image: "ShutdownIcon",
        disabled: (proc: IAppProcess) => !proc?.app.data.controls.close,
      },
    ],
  };
}
