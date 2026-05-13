import { Daemon } from "$ts/daemon";
import { Env, Fs } from "$ts/env";
import { UserPaths } from "$ts/user/store";
import { textToBlob } from "$ts/util/convert";
import { MessageBox } from "$ts/util/dialog";
import { getParentDirectory } from "$ts/util/fs";
import type { AppContextMenu } from "$types/app";
import type { UserTheme } from "$types/theme";
import type { SettingsRuntime } from "./runtime";

export function SettingsContext(runtime: SettingsRuntime): AppContextMenu {
  return {
    "user-theme-option": [
      {
        caption: "Apply",
        action: (apply) => {
          apply();
        },
        icon: "check",
      },
      {
        caption: "Export theme...",
        action: async (_, __, theme: UserTheme) => {
          const [path] = await Daemon!.files!.LoadSaveDialog({
            title: "Choose where to save the theme",
            isSave: true,
            startDir: UserPaths.Documents,
            icon: "ThemesIcon",
            saveName: `${theme.name || "Untitled theme"}.arctheme`,
          });

          if (!path) return;

          enum ExportResolution {
            NoSave,
            SaveLocal,
            SaveWithoutLocal,
          }
          let saveOption = ExportResolution.NoSave;

          // The reason for the odddly placed function is this was the best way I
          // could think of to not repeat code, but also achieve the result I wanted.
          async function exportTheme() {
            if (saveOption === ExportResolution.SaveWithoutLocal) {
              if (theme.desktopWallpaper.startsWith("@local:")) theme.desktopWallpaper = "img0";
              if (theme.loginBackground?.startsWith("@local:")) theme.loginBackground = "img0";
            }

            await Fs.writeFile(path!, textToBlob(JSON.stringify(theme, null, 2)));
          }

          if (theme.loginBackground?.startsWith("@local:") || theme.desktopWallpaper.startsWith("@local:")) {
            await MessageBox(
              {
                title: "Save with local wallpapers?",
                message: `Seems this theme contains a wallpaper that uses a file only
                  on your filesystem. If you plan to share this theme, it might
                  be best to replace the wallpaper(s) with built-in ones. If you
                  wish to continue anyways, you can.`,
                image: "ImageViewerIcon",
                buttons: [
                  {
                    caption: "Cancel",
                    action: () => {},
                  },
                  {
                    caption: "Save with local anyways",
                    action: () => {
                      saveOption = ExportResolution.SaveLocal;
                      exportTheme();
                    },
                  },
                  {
                    caption: "Replace with built-in",
                    action: () => {
                      saveOption = ExportResolution.SaveWithoutLocal;
                      exportTheme();
                    },
                    suggested: true,
                  },
                ],
              },
              runtime.pid,
              true
            );
          }
        },
        icon: "save",
      },
      { sep: true },
      {
        caption: "Delete Theme",
        action: (_, deleteTheme) => {
          deleteTheme();
        },
        icon: "trash-2",
      },
    ],
    "builtin-theme-option": [
      {
        caption: "Apply",
        action: (apply) => {
          apply();
        },
        icon: "check",
      },
      {
        caption: "Export theme...",
        action: async (_, __, theme: UserTheme) => {
          const [path] = await Daemon!.files!.LoadSaveDialog({
            title: "Choose where to save the theme",
            isSave: true,
            startDir: UserPaths.Documents,
            icon: "ThemesIcon",
            saveName: `${theme.name || "Untitled theme"}.arctheme`,
          });

          if (!path) return;

          await Fs.writeFile(path, textToBlob(JSON.stringify(theme, null, 2)));
        },
        icon: "save",
      },
    ],
    "user-wallpaper": [
      {
        caption: "Apply",
        icon: "check",
        action: (id: string) => {
          runtime.userPreferences.update((v) => {
            v.desktop.wallpaper = id;
            return v;
          });
        },
      },
      {
        caption: "Open file location",
        icon: "folder-open",
        action: (id: string) => {
          runtime.spawnApp("fileManager", +Env.get("shell_pid"), getParentDirectory(atob(id.replace("@local:", ""))));
        },
      },
      { sep: true },
      {
        caption: "Delete wallpaper",
        icon: "trash-2",
        action: (id: string) => {
          MessageBox(
            {
              title: "Delete wallpaper?",
              message:
                "Are you sure you want to delete this wallpaper? This will also delete the original file, and it cannot be brought back.",
              image: "WarningIcon",
              sound: "arcos.dialog.warning",
              buttons: [
                {
                  caption: "Cancel",
                  action: () => {},
                },
                {
                  caption: "Delete",
                  action: async () => {
                    await Daemon?.wallpaper?.deleteLocalWallpaper(id);
                  },
                  suggested: true,
                },
              ],
            },
            +Env.get("shell_pid"),
            true
          );
        },
      },
    ],
  };
}
