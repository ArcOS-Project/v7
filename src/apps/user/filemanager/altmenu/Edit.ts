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
        disabled: () => !runtime.selection().length,
      },
      {
        caption: "Copy",
        action: () => {
          runtime.setCopyFiles();
        },
        icon: "copy",
        disabled: () => !runtime.selection().length,
      },
      {
        caption: "Paste",
        action: () => runtime.pasteFiles(),
        icon: "clipboard",
        disabled: () => !runtime.copyList().length && !runtime.cutList().length,
      },
      { sep: true },
      {
        caption: "New folder",
        action: () => {
          runtime.spawnOverlay("newFolder", runtime.path());
        },
        icon: "folder-plus",
      },
      {
        caption: "New files",
        action: () => {
          runtime.spawnOverlay("newFile", runtime.path());
        },
        icon: "file-plus",
      },
    ],
  };
}
