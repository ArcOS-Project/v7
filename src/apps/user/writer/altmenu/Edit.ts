import type { ContextMenuItem } from "$types/app";
import type { WriterRuntime } from "../runtime";

export function EditMenu(runtime: WriterRuntime): ContextMenuItem {
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
