import { Env } from "$ts/env";
import { getParentDirectory } from "$ts/util/fs";
import type { ContextMenuItem } from "$types/app";
import type { CodRuntime } from "../runtime";

export function FileMenu(runtime: CodRuntime): ContextMenuItem {
  return {
    caption: "File",
    subItems: [
      {
        caption: "Open...",
        accelerator: "Alt+O",
        icon: "folder-open",
        action: () => {
          runtime.openFile();
        },
      },
      { sep: true },
      {
        caption: "Save",
        accelerator: "Alt+S",
        icon: "save",
        action: () => {
          runtime.saveChanges();
        },
        disabled: () => runtime.buffer() === runtime.original(),
      },
      {
        caption: "Save As...",
        accelerator: "Alt+Shift+S",
        icon: "save-all",
        action: () => {
          runtime.saveAs();
        },
      },
      { sep: true },
      {
        caption: "Open file location",
        action: () => {
          const parent = getParentDirectory(runtime.openedFile());
          runtime.spawnApp("fileManager", +Env.get("shell_pid"), parent);
        },
        disabled: () => !runtime.openedFile(),
        icon: "folder-up",
      },
      { sep: true },
      {
        caption: "Exit",
        icon: "x",
        action: () => runtime.closeWindow(),
      },
    ],
  };
}
