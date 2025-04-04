import { ShutdownIcon } from "$ts/images/power";
import type { ContextMenuItem } from "$types/app";
import type { FileManagerRuntime } from "../runtime";

export function FileMenu(runtime: FileManagerRuntime): ContextMenuItem {
  return {
    caption: "File",
    subItems: [
      {
        caption: "New window",
        icon: "plus",
        action: () => {
          runtime.userDaemon?.spawnApp("fileManager", undefined, runtime.path());
        },
      },
      {
        caption: "Refresh",
        icon: "rotate-cw",
        action: async () => {
          runtime.loading.set(true);
          await runtime.refresh();
          runtime.loading.set(false);
        },
      },
      { sep: true },
      {
        caption: "Upload",
        icon: "upload",
        action: () => runtime.uploadItems(),
      },
      {
        caption: "Download",
        icon: "download",
        action: () => runtime.notImplemented("Downloading files"),
      },
      { sep: true },
      {
        caption: "New folder",
        action: () => {
          runtime.spawnOverlayApp("FsNewFolder", runtime.pid, runtime.path());
        },
        icon: "folder-plus",
      },
      {
        caption: "New file",
        action: () => {
          runtime.spawnOverlayApp("FsNewFile", runtime.pid, runtime.path());
        },
        icon: "file-plus",
      },
      { sep: true },
      {
        caption: "Join a share",
        action: () => runtime.spawnOverlayApp("ShareConnGui", runtime.pid),
        icon: "network",
      },
      { sep: true },
      {
        caption: "Exit",
        image: ShutdownIcon,
        action: () => {
          runtime.closeWindow();
        },
      },
    ],
  };
}
