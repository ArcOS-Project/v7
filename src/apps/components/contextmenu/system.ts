import { AppProcess } from "$ts/apps/process";
import { KernelStack } from "$ts/env";
import { UserDaemon } from "$ts/server/user/daemon";
import type { AppContextMenu } from "$types/app";
import type { ContextMenuRuntime } from "./runtime";

export function WindowSystemContextMenu(runtime: ContextMenuRuntime): AppContextMenu {
  let userDaemon = runtime.userDaemon as UserDaemon;
  let workspaces = userDaemon?.preferences().workspaces.desktops;
  let currentWorkspace = userDaemon?.preferences().workspaces.index;

  return {
    "_window-titlebar": [
      {
        caption: "App Info",
        icon: "info",
        action: (proc: AppProcess) => {
          proc.spawnOverlayApp("AppInfo", +proc.env.get("shell_pid"), proc?.app.id);
        },
      },
      {
        caption: "Process info",
        icon: "cog",
        action: (proc: AppProcess) => {
          proc.spawnOverlayApp("ProcessInfoApp", +proc.env.get("shell_pid"), proc);
        },
      },
      { sep: true },

      {
        caption: "Minimize",
        action: (proc: AppProcess) => {
          KernelStack().renderer?.toggleMinimize(proc?.pid);
        },
        icon: "chevron-down",
        disabled: (proc: AppProcess) => !proc?.app.data.controls.minimize,
        isActive: (proc: AppProcess) => !!proc?.getWindow()?.classList.contains("minimized"),
      },
      {
        caption: "Maximize",
        action: (proc: AppProcess) => {
          KernelStack().renderer?.unsnapWindow(proc?.pid);
          KernelStack().renderer?.toggleMaximize(proc?.pid);
        },
        icon: "chevron-up",
        disabled: (proc: AppProcess) => !proc?.app.data.controls.maximize,
        isActive: (proc: AppProcess) => !!proc?.getWindow()?.classList.contains("maximized"),
      },
      { sep: true },
      {
        caption: "Window snapping",
        icon: "fullscreen",
        disabled: (proc: AppProcess) => !proc?.app.data.controls.maximize,
        isActive: (proc: AppProcess) => !!proc?.getWindow()?.classList.contains("snapped"),
        subItems: [
          {
            caption: "None",
            icon: "x",
            action: (proc: AppProcess) => KernelStack().renderer?.unsnapWindow(proc?.pid),
          },
          { sep: true },
          {
            caption: "Left",
            icon: "arrow-left",
            action: (proc: AppProcess) => KernelStack().renderer?.snapWindow(proc?.pid, "left"),
            isActive: (proc: AppProcess) => proc?.getWindow()?.dataset.snapstate === "left",
          },
          {
            caption: "Right",
            icon: "arrow-right",
            action: (proc: AppProcess) => KernelStack().renderer?.snapWindow(proc?.pid, "right"),
            isActive: (proc: AppProcess) => proc?.getWindow()?.dataset.snapstate === "right",
          },
          { sep: true },
          {
            caption: "Top",
            icon: "arrow-up",
            action: (proc: AppProcess) => KernelStack().renderer?.snapWindow(proc?.pid, "top"),
            isActive: (proc: AppProcess) => proc?.getWindow()?.dataset.snapstate === "top",
          },
          {
            caption: "Bottom",
            icon: "arrow-down",
            action: (proc: AppProcess) => KernelStack().renderer?.snapWindow(proc?.pid, "bottom"),
            isActive: (proc: AppProcess) => proc?.getWindow()?.dataset.snapstate === "bottom",
          },
          { sep: true },
          {
            caption: "Top Left",
            icon: "arrow-up-left",
            action: (proc: AppProcess) => KernelStack().renderer?.snapWindow(proc?.pid, "top-left"),
            isActive: (proc: AppProcess) => proc?.getWindow()?.dataset.snapstate === "top-left",
          },
          {
            caption: "Top Right",
            icon: "arrow-up-right",
            action: (proc: AppProcess) => KernelStack().renderer?.snapWindow(proc?.pid, "top-right"),
            isActive: (proc: AppProcess) => proc?.getWindow()?.dataset.snapstate === "top-right",
          },
          { sep: true },
          {
            caption: "Bottom Left",
            icon: "arrow-down-left",
            action: (proc: AppProcess) => KernelStack().renderer?.snapWindow(proc?.pid, "bottom-left"),
            isActive: (proc: AppProcess) => proc?.getWindow()?.dataset.snapstate === "bottom-left",
          },
          {
            caption: "Bottom Right",
            icon: "arrow-down-right",
            action: (proc: AppProcess) => KernelStack().renderer?.snapWindow(proc?.pid, "bottom-right"),
            isActive: (proc: AppProcess) => proc?.getWindow()?.dataset.snapstate === "bottom-right",
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
            action: (proc: AppProcess) => {
              if (!proc?.pid) return;
              userDaemon?.workspaces?.moveWindow(
                proc.pid,
                workspaces[currentWorkspace - 1 >= 0 ? currentWorkspace - 1 : workspaces.length - 1]?.uuid
              );
            },
            disabled: (proc: AppProcess) => {
              return !workspaces[currentWorkspace - 1] || !proc?.pid;
            },
          },
          {
            caption: "Right workspace",
            icon: "arrow-right",
            action: (proc: AppProcess) => {
              if (!proc?.pid) return;
              userDaemon?.workspaces?.moveWindow(
                proc.pid,
                workspaces[currentWorkspace + 1 <= workspaces.length - 1 ? currentWorkspace + 1 : 0]?.uuid
              );
            },
            disabled: (proc: AppProcess) => {
              return !workspaces[currentWorkspace + 1] || !proc?.pid;
            },
          },
        ],
      },
      { sep: true },
      {
        caption: "Close",
        action: (proc: AppProcess) => {
          proc.closeWindow();
        },
        image: "ShutdownIcon",
        disabled: (proc: AppProcess) => !proc?.app.data.controls.close,
      },
    ],
  };
}
