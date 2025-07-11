import { textToBlob } from "$ts/fs/convert";
import { ThemesIcon } from "$ts/images/general";
import { UserPaths } from "$ts/server/user/store";
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
          const [path] = await runtime.userDaemon!.LoadSaveDialog({
            title: "Choose where to save the theme",
            isSave: true,
            startDir: UserPaths.Documents,
            icon: ThemesIcon,
            saveName: `${theme.name || "Untitled theme"}.arctheme`,
          });

          if (!path) return;

          await runtime.fs.writeFile(path, textToBlob(JSON.stringify(theme, null, 2)));
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
          const [path] = await runtime.userDaemon!.LoadSaveDialog({
            title: "Choose where to save the theme",
            isSave: true,
            startDir: UserPaths.Documents,
            icon: ThemesIcon,
            saveName: `${theme.name || "Untitled theme"}.arctheme`,
          });

          if (!path) return;

          await runtime.fs.writeFile(path, textToBlob(JSON.stringify(theme, null, 2)));
        },
        icon: "save",
      },
    ],
  };
}
