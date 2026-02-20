import type { IShellRuntime } from "$interfaces/shell";
import type { AppKeyCombinations } from "$types/accelerator";

export function ShellAccelerators(runtime: IShellRuntime): AppKeyCombinations<IShellRuntime> {
  return [
    {
      key: "escape",
      global: true,
      action: () => {
        runtime.windowSwitcherOpened.set(false);
        runtime.actionCenterOpened.set(false);
        runtime.workspaceManagerOpened.set(false);
        runtime.startMenuOpened.set(false);
        runtime.calendarOpened.set(false);
      },
    },

    {
      key: "dead",
      shift: true,
      alt: true,
      action: () => {
        runtime.windowSwitcherPrevious();
      },
      global: true,
    },
    {
      key: "dead",
      alt: true,
      action: () => {
        runtime.windowSwitcherNext();
      },
      global: true,
    },
    {
      key: "a",
      alt: true,
      action: () => {
        const newValue = !runtime.actionCenterOpened();
        runtime.actionCenterOpened.set(newValue);

        if (newValue) runtime.workspaceManagerOpened.set(false);
      },
      global: true,
    },
    {
      key: "w",
      alt: true,
      action: () => {
        const newValue = !runtime.workspaceManagerOpened();
        runtime.workspaceManagerOpened.set(newValue);

        if (newValue) {
          runtime.startMenuOpened.set(false);
          runtime.actionCenterOpened.set(false);
        }
      },
      global: true,
    },
    {
      key: "z",
      alt: true,
      action: () => {
        const newValue = !runtime.startMenuOpened();
        runtime.startMenuOpened.set(newValue);

        if (newValue) runtime.workspaceManagerOpened.set(false);
      },
      global: true,
    },
    {
      alt: true,
      global: true,
      action: (_, e) => e.preventDefault(),
    },
  ];
}
