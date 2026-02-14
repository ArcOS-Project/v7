import { Daemon } from "$ts/daemon";
import type { ContextMenuItem } from "$types/app";
import type { FileManagerRuntime } from "../runtime";

export function EditMenu(runtime: FileManagerRuntime): ContextMenuItem {
  return {
    caption: "Edit",
    subItems: [
      {
        caption: "Cut",
        action: () => {
          runtime.setCutFiles();
        },
        icon: "scissors",
        disabled: () => !runtime.selection().length || !!runtime.virtual() || !!runtime.drive()?.READONLY,
      },
      {
        caption: "Copy",
        action: () => {
          runtime.setCopyFiles();
        },
        icon: "copy",
        disabled: () => !runtime.selection().length || !!runtime.virtual(),
      },
      {
        caption: "Paste",
        action: () => runtime.pasteFiles(),
        icon: "clipboard",
        disabled: () =>
          (!Daemon!.copyList().length && !Daemon!.cutList().length) || !!runtime.virtual() || !!runtime.drive()?.READONLY,
      },
    ],
  };
}
