import type { ContextMenuItem } from "$types/app";
import type { MediaPlayerRuntime } from "../runtime";

export function FileMenu(runtime: MediaPlayerRuntime): ContextMenuItem {
  return {
    caption: "File",
    subItems: [
      {
        caption: "Open...",
        icon: "folder-open",
        action() {
          runtime.openFile();
        },
        accelerator: "Alt+O",
      },
      {
        caption: "Add to queue...",
        icon: "list-plus",
        action() {
          runtime.addToQueue();
        },
        accelerator: "Alt+A",
      },
      {
        caption: "Open file location",
        icon: "folder-search",
        action: () => {
          runtime.openFileLocation();
        },
        disabled: () => !runtime.queue.get(),
        accelerator: "Alt+Shift+O",
      },
      { sep: true },
      {
        caption: "Exit",
        action: () => {
          runtime.closeWindow();
        },
        image: "ShutdownIcon",
        accelerator: "Ctrl+Q",
      },
    ],
  };
}
