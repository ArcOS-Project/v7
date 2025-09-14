import type { AppProcess } from "$ts/apps/process";
import { ShutdownIcon } from "$ts/images/power";
import { KernelStack } from "$ts/env";
import type { AppContextMenu } from "$types/app";
import type { ContextMenuRuntime } from "./runtime";

export function WindowSystemContextMenu(runtime: ContextMenuRuntime): AppContextMenu {
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
      { sep: true },
      {
        caption: "Close",
        action: (proc: AppProcess) => {
          proc.closeWindow();
        },
        image: ShutdownIcon,
        disabled: (proc: AppProcess) => !proc?.app.data.controls.close,
      },
    ],
  };
}
