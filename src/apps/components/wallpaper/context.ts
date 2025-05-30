import type { SettingsRuntime } from "$apps/user/settings/runtime";
import { MessageBox } from "$ts/dialog";
import { getParentDirectory, join } from "$ts/fs/util";
import { FileManagerIcon, ProcessManagerIcon, SettingsIcon } from "$ts/images/apps";
import { QuestionIcon } from "$ts/images/dialog";
import { PersonalizationIcon } from "$ts/images/general";
import { LogoutIcon, RestartIcon, ShutdownIcon } from "$ts/images/power";
import { UserPaths } from "$ts/server/user/store";
import { UUID } from "$ts/uuid";
import type { AppContextMenu } from "$types/app";
import type { FileEntry } from "$types/fs";
import type { WallpaperRuntime } from "./runtime";

export function WallpaperContextMenu(runtime: WallpaperRuntime): AppContextMenu {
  const shellPid = () => +runtime.env.get("shell_pid");
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
          runtime.spawnOverlayApp("FsRenameItem", shellPid(), path);
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
          runtime.spawnOverlayApp("ShortcutProperties", shellPid(), path, shortcut);
        },
      },
      {
        caption: "Rename...",
        icon: "file-pen",
        action: (_, path) => {
          runtime.spawnOverlayApp("FsRenameItem", shellPid(), path);
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
        action: (file: FileEntry, path: string) => runtime.spawnOverlayApp("ItemInfo", shellPid(), path, file),
      },
    ],
    "folder-icon": [
      {
        caption: "Go here",
        icon: "folder-open",
        action: (_, path) => {
          runtime.spawnApp("fileManager", shellPid(), path);
        },
      },
      {
        caption: "Open in new window",
        icon: "external-link",
        action: (_, path) => {
          runtime.spawnApp(runtime.app.id, shellPid(), path);
        },
      },
      { sep: true },
      {
        caption: "Rename...",
        icon: "folder-pen",
        action: (_, path) => {
          runtime.spawnOverlayApp("FsRenameItem", shellPid(), path);
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
        action: (dir, path) => runtime.spawnOverlayApp("ItemInfo", shellPid(), path, dir),
      },
    ],
    desktop: [
      {
        caption: "View",
        icon: "binoculars",
        subItems: [
          {
            caption: "Show desktop icons",
            icon: "eye",
            isActive: () => runtime.userPreferences().desktop.icons,
            action: () => {
              runtime.userPreferences.update((v) => {
                v.desktop.icons = !v.desktop.icons;
                return v;
              });
            },
          },
          {
            caption: "Align icons to grid",
            icon: "grid-2x2",
            isActive: () => !runtime.userPreferences().desktop.noIconGrid,
            action: () => {
              runtime.userPreferences.update((v) => {
                v.desktop.noIconGrid = !v.desktop.noIconGrid;
                return v;
              });
            },
          },
          {
            caption: "Lock desktop icons",
            icon: "lock",
            isActive: () => runtime.userPreferences().desktop.lockIcons,
            action: () => {
              runtime.userPreferences.update((v) => {
                v.desktop.lockIcons = !v.desktop.lockIcons;
                return v;
              });
            },
          },
          { sep: true },
          {
            caption: "Reset icon positions",
            icon: "iteration-cw",
            action: () => {
              MessageBox(
                {
                  title: "Reset desktop icons?",
                  message: "Are you sure you want to reset your desktop icon positions?",
                  image: QuestionIcon,
                  sound: "arcos.dialog.info",
                  buttons: [
                    {
                      caption: "Cancel",
                      action: () => {},
                    },
                    {
                      caption: "Reset",
                      action: () => {
                        runtime.userPreferences.update((v) => {
                          v.appPreferences.desktopIcons = {};
                          return v;
                        });
                      },
                      suggested: true,
                    },
                  ],
                },
                shellPid(),
                true
              );
            },
          },
        ],
      },
      { sep: true },
      {
        caption: "File manager",
        image: FileManagerIcon,
        action: () => {
          runtime.spawnApp("fileManager", shellPid(), UserPaths.Home);
        },
      },
      {
        caption: "Processes",
        image: ProcessManagerIcon,
        action: () => {
          runtime.spawnApp("processManager", shellPid());
        },
      },
      {
        caption: "Settings",
        image: SettingsIcon,
        action: () => {
          runtime.spawnApp("systemSettings", shellPid());
        },
      },
      { sep: true },
      {
        caption: "Shut down",
        image: ShutdownIcon,
        action: () => runtime.userDaemon?.shutdown(),
      },
      {
        caption: "Log off",
        image: LogoutIcon,
        action: () => runtime.userDaemon?.logoff(),
      },
      {
        caption: "Restart",
        image: RestartIcon,
        action: () => runtime.userDaemon?.restart(),
      },
      { sep: true },
      {
        caption: "New",
        icon: "plus",
        subItems: [
          {
            caption: "Shortcut...",
            icon: "arrow-up-right",
            action: () => {
              runtime.spawnOverlayApp("ShortcutProperties", shellPid(), join(UserPaths.Desktop, `${UUID()}.arclnk`), {
                icon: "ShortcutMimeIcon",
                name: "New shortcut",
                type: "folder",
                target: UserPaths.Desktop,
              });
            },
          },
          {
            caption: "New folder...",
            icon: "folder-plus",
            action: () => {
              runtime.spawnOverlayApp("FsNewFolder", shellPid(), UserPaths.Desktop);
            },
          },
          {
            caption: "New file...",
            icon: "file-plus",
            action: () => {
              runtime.spawnOverlayApp("FsNewFile", shellPid(), UserPaths.Desktop);
            },
          },
          {
            caption: "Upload...",
            icon: "upload",
            action: () => {
              runtime.uploadItems();
            },
          },
        ],
      },
      { sep: true },
      {
        caption: "Folder properties...",
        icon: "wrench",
        action: async () => {
          const parent = await runtime.fs.readDir(getParentDirectory(UserPaths.Desktop));
          const dir = parent?.dirs.filter((d) => d.name === "Desktop")[0];

          if (!dir) return;

          runtime.spawnOverlayApp("ItemInfo", shellPid(), UserPaths.Desktop, dir);
        },
      },
      {
        caption: "Personalize...",
        image: PersonalizationIcon,
        action: async () => {
          await runtime.spawnApp<SettingsRuntime>("systemSettings", shellPid(), "visuals");
        },
      },
    ],
  };
}
