import type { AppContextMenu } from "$types/app";
import type { FileEntry } from "$types/fs";
import type { WallpaperRuntime } from "./runtime";

export function WallpaperContextMenu(runtime: WallpaperRuntime): AppContextMenu {
  const shellPid = +runtime.env.get("shell_pid");
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
        caption: "Rename...",
        icon: "file-pen",
        action: (_, path) => {
          runtime.spawnOverlayApp("FsRenameItem", shellPid, path);
        },
      },
      {
        caption: "Delete",
        icon: "trash-2",
        action: (_, path) => {
          runtime.deleteItem(path);
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
        caption: "Edit Shortcut...",
        icon: "pencil",
        action: (_, path, shortcut) => {
          runtime.spawnOverlayApp("ShortcutProperties", shellPid, path, shortcut);
        },
      },
      {
        caption: "Rename...",
        icon: "file-pen",
        action: (_, path) => {
          runtime.spawnOverlayApp("FsRenameItem", shellPid, path);
        },
      },
      {
        caption: "Delete",
        icon: "trash-2",
        action: (_, path) => {
          runtime.deleteItem(path);
        },
      },
      { sep: true },
      {
        caption: "Properties...",
        icon: "wrench",
        action: (file: FileEntry, path: string) => runtime.spawnOverlayApp("ItemInfo", shellPid, path, file),
      },
    ],
    "folder-icon": [
      {
        caption: "Go here",
        icon: "folder-open",
        action: (_, path) => {
          runtime.spawnApp("fileManager", shellPid, path);
        },
      },
      {
        caption: "Open in new window",
        icon: "external-link",
        action: (_, path) => {
          runtime.spawnApp(runtime.app.id, shellPid, path);
        },
      },
      { sep: true },
      {
        caption: "Rename...",
        icon: "folder-pen",
        action: (_, path) => {
          runtime.spawnOverlayApp("FsRenameItem", shellPid, path);
        },
      },
      {
        caption: "Delete",
        icon: "trash-2",
        action: (_, path) => {
          runtime.deleteItem(path);
        },
      },
      { sep: true },
      {
        caption: "Properties...",
        icon: "wrench",
        action: (dir, path) => runtime.spawnOverlayApp("ItemInfo", shellPid, path, dir),
      },
    ],
  };
}
