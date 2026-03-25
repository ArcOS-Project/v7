import type { IShellRuntime } from "$interfaces/shell";
import type { AppKeyCombinations } from "$types/accelerator";

export function ShellAccelerators(runtime: IShellRuntime): AppKeyCombinations {
  return [
    {
      alt: true,
      shift: true,
      key: "t",
      action: () => {
        runtime.spawnApp("ArcTerm", runtime.pid);
      },
      global: true,
    },
    {
      alt: true,
      key: "z",
      action: () => {
        if (!runtime.startMenuOpened()) {
          runtime.startMenuOpened.set(true);
          runtime.actionCenterOpened.set(false);
          runtime.workspaceManagerOpened.set(false);
          runtime.calendarOpened.set(false);
          runtime.openedTrayPopup.set("");
        } else {
          runtime.startMenuOpened.set(false);
        }
      },
      global: true,
    },
    {
      alt: true,
      key: "a",
      action: () => {
        if (!runtime.actionCenterOpened()) {
          runtime.actionCenterOpened.set(true);
          runtime.startMenuOpened.set(false);
          runtime.workspaceManagerOpened.set(false);
          runtime.calendarOpened.set(false);
          runtime.openedTrayPopup.set("");
        } else {
          runtime.actionCenterOpened.set(false);
        }
      },
      global: true,
    },
    {
      alt: true,
      key: "w",
      action: () => {
        if (!runtime.workspaceManagerOpened()) {
          runtime.workspaceManagerOpened.set(true);
          runtime.calendarOpened.set(false);
          runtime.actionCenterOpened.set(false);
          runtime.startMenuOpened.set(false);
          runtime.openedTrayPopup.set("");
        } else {
          runtime.workspaceManagerOpened.set(false);
        }
      },
      global: true,
    },
    {
      alt: true,
      key: "c",
      action: () => {
        if (!runtime.calendarOpened()) {
          runtime.calendarOpened.set(true);
          runtime.actionCenterOpened.set(false);
          runtime.startMenuOpened.set(false);
          runtime.workspaceManagerOpened.set(false);
          runtime.openedTrayPopup.set("");
        } else {
          runtime.calendarOpened.set(false);
        }
      },
      global: true,
    },
    {
      alt: true,
      action: (_, e) => {
        e.preventDefault();
      },
      global: true,
    },
  ];
}
