import { UserPaths } from "$ts/server/user/store";
import { join } from "$ts/util/fs";
import type { ArcShortcut } from "$types/shortcut";
import Finish from "./FirstRun/Page/Finish.svelte";
import ProfilePicture from "./FirstRun/Page/ProfilePicture.svelte";
import Style from "./FirstRun/Page/Style.svelte";
import ThirdParty from "./FirstRun/Page/ThirdParty.svelte";
import Welcome from "./FirstRun/Page/Welcome.svelte";
import { DarkModeGraphic, LightModeGraphic } from "./images";
import type { FirstRunPage, FirstRunTheme } from "./types";

export const FirstRunPages = new Map<string, FirstRunPage>([
  [
    "welcome",
    {
      name: "Welcome",
      component: Welcome,
      hero: true,
      actions: {
        left: [
          {
            caption: "Later",
            action: (process) => process.closeWindow(),
          },
        ],
        right: [
          {
            caption: "Next",
            suggested: true,
            action: (process) => process.switchPage("style"),
          },
        ],
      },
    },
  ],
  [
    "style",
    {
      name: "What's your style?",
      component: Style,
      actions: {
        left: [
          {
            caption: "Go back",
            action: (process) => process.switchPage("welcome"),
          },
        ],
        right: [
          {
            caption: "Next",
            suggested: true,
            action: (process) => process.switchPage("profilePicture"),
          },
        ],
      },
    },
  ],
  [
    "profilePicture",
    {
      name: "Choose a profile picture",
      hero: true,
      component: ProfilePicture,
      actions: {
        left: [
          {
            caption: "Upload...",
            action: (process) => process.userDaemon?.preferencesContext!.uploadProfilePicture(),
          },
          {
            caption: "Choose",
            action: (process) => process.chooseProfilePicture(),
          },
        ],
        right: [
          {
            caption: "Next",
            action: (process) => process.switchPage("thirdParty"),
            suggested: true,
          },
        ],
      },
    },
  ],
  [
    "thirdParty",
    {
      name: "Enable third-party apps?",
      hero: true,
      component: ThirdParty,
      actions: {
        left: [{ caption: "Go back", action: (process) => process.switchPage("profilePicture") }],
        right: [
          { caption: "Not now", action: (process) => process.switchPage("finish") },
          {
            caption: "Enable",
            action: (process) => {
              process.userPreferences.update((v) => {
                v.security.enableThirdParty = true;
                return v;
              });
              process.switchPage("finish");
            },
            suggested: true,
          },
        ],
      },
    },
  ],
  [
    "finish",
    {
      name: "You're all set!",
      hero: true,
      component: Finish,
      actions: {
        left: [],
        right: [{ caption: "Finish", action: (process) => process.closeWindow(), suggested: true }],
      },
    },
  ],
]);

export const FirstRunThemes: Record<string, FirstRunTheme> = {
  dark: {
    name: "Dark mode",
    subtitle: "Wilhelmina Sunset",
    image: DarkModeGraphic,
    configuration: {
      style: "dark",
      accent: "FF6E54",
      wallpaper: "img18",
    },
  },
  light: {
    name: "Light mode",
    subtitle: "Mykonos Seaside",
    image: LightModeGraphic,
    configuration: {
      style: "light",
      accent: "4CB8DC",
      wallpaper: "img01",
    },
  },
};

export const FirstRunShortcuts: Record<string, ArcShortcut> = {
  [join(UserPaths.Desktop, "____recycle_bin.arclnk")]: {
    icon: "TrashIcon",
    name: "Recycle Bin",
    type: "folder",
    target: "::recycle_bin",
  },
  [join(UserPaths.Desktop, "___my_arcos.arclnk")]: {
    icon: "DesktopIcon",
    name: "My ArcOS",
    type: "folder",
    target: "::my_arcos",
  },
  [join(UserPaths.Desktop, "__myDocuments.arclnk")]: {
    icon: "DocumentsFolderIcon",
    name: "Documents",
    type: "folder",
    target: UserPaths.Documents,
  },
  [join(UserPaths.Desktop, "_appStore.arclnk")]: {
    icon: "AppStoreIcon",
    name: "App Store",
    type: "app",
    target: "AppStore",
  },
  [join(UserPaths.Documents, "pictures.arclnk")]: {
    icon: "WallpapersFolderIcon",
    name: "Pictures",
    type: "folder",
    target: UserPaths.Pictures,
  },
  [join(UserPaths.Documents, "configuration.arclnk")]: {
    icon: "FolderIcon",
    name: "Configuration",
    type: "folder",
    target: UserPaths.Configuration,
  },
};
