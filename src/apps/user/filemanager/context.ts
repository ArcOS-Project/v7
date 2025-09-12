import { MessageBox } from "$ts/dialog";
import { ShareManager } from "$ts/kernel/mods/fs/shares";
import type { SharedDrive } from "$ts/kernel/mods/fs/shares/drive";
import { getItemNameFromPath, getParentDirectory, join } from "$ts/kernel/mods/fs/util";
import { WarningIcon } from "$ts/images/dialog";
import { UserPaths } from "$ts/server/user/store";
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
      {
        caption: "Properties...",
        action: (drive: QuotedDrive) => {
          runtime.spawnOverlayApp("DriveInfo", runtime.pid, drive.data);
        },
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
                    const shares = runtime.userDaemon?.serviceHost?.getService<ShareManager>("ShareMgmt");

                    await runtime.fs.umountDrive(share.shareId!);
                    await shares?.leaveShare(share.shareId!);

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
        disabled: (drive: QuotedDrive) =>
          (drive.data as SharedDrive).shareInfo.userId === runtime.userDaemon?.userInfo?._id ||
          runtime.shareAccessIsAdministrative(drive.data),
      },
      { sep: true },
      {
        caption: "Manage share...",
        action: (drive: QuotedDrive) => runtime.spawnOverlayApp("ShareMgmtGui", runtime.pid, (drive.data as SharedDrive).shareId),
        icon: "wrench",
      },
      {
        caption: "Properties...",
        action: (drive: QuotedDrive) => {
          runtime.spawnOverlayApp("DriveInfo", runtime.pid, drive.data);
        },
      },
    ],
    "directory-listing": [
      {
        caption: "View",
        icon: "eye",
        subItems: [
          {
            caption: "Compact grid",
            icon: "columns-3",
            action: () => {
              runtime.userPreferences.update((v) => {
                v.appPreferences.fileManager!.grid = true;
                return v;
              });
            },
            isActive: () => !!runtime.userPreferences().appPreferences.fileManager?.grid,
          },
          {
            caption: "List view",
            icon: "list",
            action: () => {
              runtime.userPreferences.update((v) => {
                v.appPreferences.fileManager!.grid = false;
                return v;
              });
            },
            isActive: () => !runtime.userPreferences().appPreferences.fileManager?.grid,
          },
        ],
      },
      {
        caption: "Refresh",
        icon: "rotate-cw",
        action: () => {
          runtime.refresh();
        },
      },
      { sep: true },
      {
        caption: "Cut items",
        disabled: () => !runtime.selection().length || !!runtime.drive()?.READONLY,
        isActive: () => !!runtime.cutList().length,
        action: () => runtime.setCutFiles(),
        icon: "scissors",
      },
      {
        caption: "Copy items",
        disabled: () => !runtime.selection().length,
        isActive: () => !!runtime.copyList().length,
        action: () => runtime.setCopyFiles(),
        icon: "copy",
      },
      {
        caption: "Paste items",
        disabled: () => (!runtime.cutList().length && !runtime.copyList().length) || !!runtime.drive()?.READONLY,
        action: () => runtime.pasteFiles(),
        icon: "clipboard",
      },
      { sep: true },
      {
        caption: "New",
        icon: "plus",
        subItems: [
          {
            caption: "New folder",
            action: () => {
              runtime.spawnOverlayApp("FsNewFolder", runtime.pid, runtime.path());
            },
            disabled: () => !!runtime.drive()?.READONLY,
            icon: "folder-plus",
          },
          {
            caption: "New file",
            action: () => {
              runtime.spawnOverlayApp("FsNewFile", runtime.pid, runtime.path());
            },
            disabled: () => !!runtime.drive()?.READONLY,
            icon: "file-plus",
          },
          {
            caption: "Upload...",
            action: () => {
              runtime.uploadItems();
            },
            disabled: () => !!runtime.drive()?.READONLY,
            icon: "upload",
          },
        ],
      },
      { sep: true },
      {
        caption: "Open in ArcTerm",
        icon: "terminal",
        action: () => {
          runtime.spawnApp("ArcTerm", +runtime.env.get("shell_pid"), runtime.path());
        },
      },
      {
        caption: "Properties...",
        icon: "wrench",
        action: async (folder: FolderEntry) => {
          const path = runtime.path();
          const parentPath = getParentDirectory(path);
          const name = getItemNameFromPath(path);
          const parent = await runtime.fs.readDir(parentPath);
          const dir = parent?.dirs.filter((d) => d.name === name)[0] || parent;
          const isRoot = parentPath === path;

          if (isRoot) {
            try {
              const drive = runtime.fs.getDriveByPath(path);
              runtime.spawnOverlayApp("DriveInfo", runtime.pid, drive);
              return;
            } catch {}
          }

          if (!dir) return;

          runtime.spawnOverlayApp("ItemInfo", runtime.pid, path, dir);
        },
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
        disabled: () => !!runtime.drive()?.READONLY,
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
        disabled: () => !!runtime.drive()?.READONLY,
        action: (_, runtimePath) => runtime.spawnOverlayApp("FsRenameItem", runtime.pid, runtimePath),
      },
      {
        caption: "Delete",
        icon: "trash-2",
        action: (_, runtimePath) => {
          runtime.selection.set([runtimePath]);
          runtime.deleteSelected();
        },
        disabled: () => !!runtime.drive()?.READONLY,
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
        disabled: () => !!runtime.drive()?.READONLY,
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
        disabled: () => !!runtime.drive()?.READONLY,
      },
      {
        caption: "Rename...",
        icon: "file-pen",
        action: (_, runtimePath) => runtime.spawnOverlayApp("FsRenameItem", runtime.pid, runtimePath),
        disabled: () => !!runtime.drive()?.READONLY,
      },
      {
        caption: "Delete",
        icon: "trash-2",
        action: (_, runtimePath) => {
          runtime.selection.set([runtimePath]);
          runtime.deleteSelected();
        },
        disabled: () => !!runtime.drive()?.READONLY,
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
        disabled: () => !!runtime.drive()?.READONLY,
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
        disabled: () => !!runtime.drive()?.READONLY,
      },
      {
        caption: "Delete",
        icon: "trash-2",
        action: (_, runtimePath) => {
          runtime.selection.set([runtimePath]);
          runtime.deleteSelected();
        },
        disabled: () => !!runtime.drive()?.READONLY,
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
          runtime.navigate(`${UserPaths.Home}/${folder.name}`);
        },
      },
      {
        caption: "Open in new window",
        icon: "external-link",
        action: (folder: FolderEntry) => {
          runtime.spawnApp(runtime.app.id, runtime.parentPid, `${UserPaths.Home}/${folder.name}`);
        },
      },
      { sep: true },
      {
        caption: "Properties...",
        icon: "wrench",
        action: (folder: FolderEntry) => {
          runtime.spawnOverlayApp("ItemInfo", runtime.pid, `${UserPaths.Home}/${folder.name}`, folder);
        },
      },
    ],
    "place-my_arcos": [
      {
        caption: "Go here",
        icon: "folder-open",
        action: () => {
          runtime.navigate(`::my_arcos`);
        },
      },
      { sep: true },
      {
        caption: "Advanced system settings...",
        icon: "monitor-cog",
        action: () => {
          runtime.userDaemon?.spawnApp("AdvSystemSettings", +runtime.env.get("shell_pid"));
        },
      },
      {
        caption: "Settings...",
        icon: "settings-2",
        action: () => {
          runtime.userDaemon?.spawnApp("systemSettings", +runtime.env.get("shell_pid"));
        },
      },
    ],
    "place-recycle_bin": [
      {
        caption: "Go here",
        icon: "folder-open",
        action: () => {
          runtime.navigate("::recycle_bin");
        },
      },
      { sep: true },
      {
        caption: "Empty bin",
        icon: "trash",
        action: () => {},
      },
      {
        caption: "Properties...",
        icon: "wrench",
        action: () => {
          runtime.userDaemon?.spawnApp("AdvSystemSettings", +runtime.env.get("shell_pid"), "Recycling");
        },
      },
    ],
  };
}
