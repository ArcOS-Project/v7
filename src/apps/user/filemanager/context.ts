import { MessageBox } from "$ts/dialog";
import type { SharedDrive } from "$ts/fs/shares/drive";
import { join } from "$ts/fs/util";
import { WarningIcon } from "$ts/images/dialog";
import type { AppContextMenu } from "$types/app";
import type { FileEntry, FolderEntry } from "$types/fs";
import type { FileManagerRuntime } from "./runtime";
import type { QuotedDrive } from "./types";

export function FileManagerContextMenu(runtime: FileManagerRuntime): AppContextMenu {
  return {
    "sidebar-drive": [
      {
        caption: "Go here",
        action: (_, identifier) => {
          runtime.navigate(`${identifier}/`);
        },
        icon: "hard-drive",
      },
      { sep: true },
      {
        caption: "Unmount",
        action: (_, __, unmount) => {
          unmount();
        },
        icon: "x",
        disabled: (drive: QuotedDrive) => drive.data.FIXED,
      },
    ],
    "sidebar-shared-drive": [
      {
        caption: "Go here",
        action: (_, identifier) => {
          runtime.navigate(`${identifier}/`);
        },
        icon: "hard-drive",
      },
      { sep: true },
      {
        caption: "Unmount",
        action: (_, __, unmount) => {
          unmount();
        },
        icon: "x",
        disabled: (drive: QuotedDrive) =>
          drive.data.FIXED || (drive.data as SharedDrive).shareInfo.userId === runtime.userDaemon?.userInfo?._id,
      },
      {
        caption: "Leave share",
        action: (drive: QuotedDrive) => {
          const share = drive.data as SharedDrive;

          MessageBox(
            {
              title: "Leave share?",
              message: "Are you sure you want to leave this share? You'll have to enter its credentials to access it again.",
              buttons: [
                { caption: "Cancel", action: () => {} },
                {
                  caption: "Leave",
                  action: async () => {
                    await runtime.fs.umountDrive(share.shareId!);
                    await runtime.userDaemon?.shares?.leaveShare(share.shareId!);

                    runtime.userPreferences.update((v) => {
                      v.startup ||= {};
                      delete v.startup[share.shareId!];

                      return v;
                    });
                  },
                  suggested: true,
                },
              ],
              image: WarningIcon,
              sound: "arcos.dialog.warning",
            },
            runtime.pid,
            true
          );
        },
        icon: "log-out",
        disabled: (drive: QuotedDrive) => (drive.data as SharedDrive).shareInfo.userId === runtime.userDaemon?.userInfo?._id,
      },
      { sep: true },
      {
        caption: "Manage share...",
        action: (drive: QuotedDrive) => runtime.spawnOverlayApp("ShareMgmtGui", runtime.pid, (drive.data as SharedDrive).shareId),
        icon: "wrench",
      },
    ],
    "file-item": [
      {
        caption: "Open file",
        icon: "external-link",
        action: (_, __, open) => {
          open?.();
        },
      },
      {
        caption: "Open with...",
        action: (_, runtimePath) => {
          runtime.userDaemon?.openWith(runtimePath);
        },
      },
      {
        caption: "Create shortcut...",
        icon: "arrow-up-right",
        action: (file, path) => {
          runtime.createShortcut(file.name, path);
        },
      },
      { sep: true },
      {
        caption: "Cut",
        icon: "scissors",
        action: (_, runtimePath) => {
          runtime.cutList.set([runtimePath]);
        },
      },
      {
        caption: "Copy",
        icon: "copy",
        action: (_, runtimePath) => {
          runtime.copyList.set([runtimePath]);
        },
      },
      { sep: true },
      {
        caption: "Rename...",
        icon: "file-pen",
        action: (_, runtimePath) => runtime.spawnOverlayApp("FsRenameItem", runtime.pid, runtimePath),
      },
      {
        caption: "Delete",
        icon: "trash-2",
        action: (_, runtimePath) => {
          runtime.selection.set([runtimePath]);
          runtime.deleteSelected();
        },
      },
      { sep: true },
      {
        caption: "Properties...",
        icon: "wrench",
        action: (file: FileEntry) => runtime.spawnOverlayApp("ItemInfo", runtime.pid, join(runtime.path(), file.name), file),
      },
    ],
    "shortcut-item": [
      {
        caption: "Open shortcut",
        icon: "external-link",
        action: (_, __, open) => {
          open?.();
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
        caption: "Cut",
        icon: "scissors",
        action: (_, runtimePath) => {
          runtime.cutList.set([runtimePath]);
        },
      },
      {
        caption: "Copy",
        icon: "copy",
        action: (_, runtimePath) => {
          runtime.copyList.set([runtimePath]);
        },
      },
      { sep: true },
      {
        caption: "Edit Shortcut...",
        icon: "pencil",
        action: (_, path, __, shortcut) => {
          runtime.spawnOverlayApp("ShortcutProperties", runtime.pid, path, shortcut);
        },
      },
      {
        caption: "Rename...",
        icon: "file-pen",
        action: (_, runtimePath) => runtime.spawnOverlayApp("FsRenameItem", runtime.pid, runtimePath),
      },
      {
        caption: "Delete",
        icon: "trash-2",
        action: (_, runtimePath) => {
          runtime.selection.set([runtimePath]);
          runtime.deleteSelected();
        },
      },
      { sep: true },
      {
        caption: "Properties...",
        icon: "wrench",
        action: (file: FileEntry) => runtime.spawnOverlayApp("ItemInfo", runtime.pid, join(runtime.path(), file.name), file),
      },
    ],
    "folder-item": [
      {
        caption: "Go here",
        icon: "folder-open",
        action: (_, runtimePath) => {
          runtime.navigate(runtimePath);
        },
      },
      {
        caption: "Open in new window",
        icon: "external-link",
        action: (_, runtimePath) => {
          runtime.spawnApp(runtime.app.id, runtime.parentPid, runtimePath);
        },
      },
      {
        caption: "Create shortcut...",
        icon: "arrow-up-right",
        action: (folder, path) => {
          runtime.createShortcut(folder.name, path, true);
        },
      },
      { sep: true },
      {
        caption: "Cut",
        icon: "scissors",
        action: (_, runtimePath) => {
          runtime.cutList.set([runtimePath]);
        },
      },
      {
        caption: "Copy",
        icon: "copy",
        action: (_, runtimePath) => {
          runtime.copyList.set([runtimePath]);
        },
      },
      { sep: true },
      {
        caption: "Rename...",
        icon: "folder-pen",
        action: (_, runtimePath) => runtime.spawnOverlayApp("FsRenameItem", runtime.pid, runtimePath),
      },
      {
        caption: "Delete",
        icon: "trash-2",
        action: (_, runtimePath) => {
          runtime.selection.set([runtimePath]);
          runtime.deleteSelected();
        },
      },
      { sep: true },
      {
        caption: "Properties...",
        icon: "wrench",
        action: (dir: FolderEntry) => runtime.spawnOverlayApp("ItemInfo", runtime.pid, join(runtime.path(), dir.name), dir),
      },
    ],
    "sidebar-folder": [
      {
        caption: "Go here",
        icon: "folder-open",
        action: (folder: FolderEntry) => {
          runtime.navigate(`U:/${folder.name}`);
        },
      },
      {
        caption: "Open in new window",
        icon: "external-link",
        action: (folder: FolderEntry) => {
          runtime.spawnApp(runtime.app.id, runtime.parentPid, `U:/${folder.name}`);
        },
      },
      { sep: true },
      {
        caption: "Properties...",
        icon: "wrench",
        action: (folder: FolderEntry) => {
          runtime.spawnOverlayApp("ItemInfo", runtime.pid, `U:/${folder.name}`, folder);
        },
      },
    ],
  };
}
