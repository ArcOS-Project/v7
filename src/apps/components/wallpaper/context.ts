import type { AppContextMenu } from "$types/app";
import type { FileEntry } from "$types/fs";
import type { WallpaperRuntime } from "./runtime";

export function WallpaperContextMenu(runtime: WallpaperRuntime): AppContextMenu {
  return {
    "file-icon": [
      {
        caption: "Open file",
        icon: "external-link",
        action: (_, path, shortcut) => {
          runtime.userDaemon?.openFile(path, shortcut);
        },
      },
      {
        caption: "Open with...",
        action: (_, runtimePath) => {
          runtime.userDaemon?.openWith(runtimePath);
        },
      },
      { sep: true },
      {
        caption: "Properties...",
        icon: "wrench",
        action: (file: FileEntry, path: string) => runtime.spawnOverlayApp("ItemInfo", runtime.env.get("shell_pid"), path, file),
      },
    ],
    "shortcut-icon": [
      {
        caption: "Open shortcut",
        icon: "external-link",
        action: (_, path, shortcut) => {
          runtime.userDaemon?.openFile(path, shortcut);
        },
      },
      {
        caption: "Open with...",
        action: (_, path) => {
          runtime.userDaemon?.openWith(path);
        },
      },
      { sep: true },
      {
        caption: "Properties...",
        icon: "wrench",
        action: (file: FileEntry, path: string) => runtime.spawnOverlayApp("ItemInfo", +runtime.env.get("shell_pid"), path, file),
      },
      {
        caption: "Edit Shortcut...",
        icon: "pencil",
        action: (_, path, shortcut) => {
          runtime.spawnOverlayApp("ShortcutProperties", +runtime.env.get("shell_pid"), path, shortcut);
        },
      },
    ],
    "folder-icon": [
      {
        caption: "Go here",
        icon: "folder-open",
        action: (_, path) => {
          runtime.spawnApp("fileManager", +runtime.env.get("shell_pid"), path);
        },
      },
      {
        caption: "Open in new window",
        icon: "external-link",
        action: (_, path) => {
          runtime.spawnApp(runtime.app.id, +runtime.env.get("shell_pid"), path);
        },
      },
      { sep: true },
      {
        caption: "Properties...",
        icon: "wrench",
        action: (dir, path) => runtime.spawnOverlayApp("ItemInfo", +runtime.env.get("shell_pid"), path, dir),
      },
    ],
  };
}
