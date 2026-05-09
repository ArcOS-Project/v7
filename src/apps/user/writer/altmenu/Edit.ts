import type { IWriterRuntime } from "$interfaces/runtimes/IWriterRuntime";
import type { ContextMenuItem } from "$types/app";

export function EditMenu(runtime: IWriterRuntime): ContextMenuItem {
  return {
    caption: "Edit",
    subItems: [
      {
        caption: "Select All",
        accelerator: "Ctrl+A",
        icon: "text-select",
        action: () => runtime.selectAll(),
      },
      {
        caption: "Replace...",
        icon: "replace",
        accelerator: "F3",
        action: () => runtime.spawnOverlay("replace"),
      },
    ],
  };
}
