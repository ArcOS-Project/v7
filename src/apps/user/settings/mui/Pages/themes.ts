import type { ModularSettingsPage } from "$types/system/mui/settings";

export const SettingsWallpaperPage: ModularSettingsPage = {
  pageIdentifier: "wallpaper",
  title: "Wallpaper",
  icon: "DesktopIcon",
  page: [
    {
      type: "If",
      conditions: ["HAS_PREFERENCES", "HAS_USERINFO", "HAS_USERDAEMON"],
      ifMet: [
        {
          type: "EmbeddedComponent",
          id: "WallpaperPageHeader",
          props: {},
          subComponents: [
            {
              type: "IconButton",
              icon: "upload",
              title: "Upload wallpaper",
              onclick: {
                operation: "uploadWallpaper",
                arguments: [],
              },
              disabledIf: ["SAFE_MODE"],
            },
            {
              type: "IconButton",
              icon: "link",
              title: "Enter a wallpaper URL",
              onclick: {
                operation: "show_urlWallpaper",
                arguments: [],
              },
              disabledIf: ["SAFE_MODE"],
            },
            {
              type: "separator",
            },
            {
              type: "IconButton",
              icon: "folder-open",
              title: "Choose a file",
              onclick: {
                operation: "chooseWallpaper",
                arguments: [],
              },
              disabledIf: ["SAFE_MODE"],
            },
          ],
        },
        {
          type: "If",
          conditions: ["PAGE_RENDERED"],
          ifMet: [
            {
              type: "If",
              conditions: ["!SAFE_MODE"],
              ifMet: [
                {
                  type: "EmbeddedComponent",
                  id: "BuiltInWallpapers",
                },
                {
                  type: "EmbeddedComponent",
                  id: "UserWallpapers",
                },
              ],
              else: [
                {
                  type: "Layout",
                  variant: "centered",
                  children: [
                    {
                      type: "EmbeddedComponent",
                      id: "SafeModeNotice",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      else: [
        {
          type: "EmbeddedComponent",
          id: "NoDaemonNotice",
        },
      ],
    },
  ],
};
