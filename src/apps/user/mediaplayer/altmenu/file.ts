import { ShutdownIcon } from "$ts/images/power";
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
        caption: "Open file location",
        icon: "folder-search",
        action: () => {
          runtime.openFileLocation();
        },
        disabled: () =>
          !runtime.path.get() || runtime.path.get().startsWith("@client"),
        accelerator: "Alt+Shift+O",
      },
      { sep: true },
      {
        caption: "Exit",
        action: () => {
          runtime.closeWindow();
        },
        image: ShutdownIcon,
        accelerator: "Alt+Q",
      },
    ],
  };
}
