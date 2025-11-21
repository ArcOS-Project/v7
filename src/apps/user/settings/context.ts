import { MessageBox } from "$ts/dialog";
import { Env, Fs } from "$ts/env";
import { Daemon } from "$ts/server/user/daemon";
import { UserPaths } from "$ts/server/user/store";
import { textToBlob } from "$ts/util/convert";
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

          await Fs.writeFile(path, textToBlob(JSON.stringify(theme, null, 2)));
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
          Daemon?.spawn?.spawnApp(
            "fileManager",
            +Env.get("shell_pid"),
            getParentDirectory(atob(id.replace("@local:", "")))
          );
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
