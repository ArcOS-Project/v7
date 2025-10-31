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
      name: "%welcome._name%",
      component: Welcome,
      hero: true,
      actions: {
        left: [
          {
            caption: "%welcome.later%",
            action: (process) => process.closeWindow(),
          },
        ],
        right: [
          {
            caption: "%welcome.next%",
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
      name: "%style._name%",
      component: Style,
      actions: {
        left: [
          {
            caption: "%style.goBack%",
            action: (process) => process.switchPage("welcome"),
          },
        ],
        right: [
          {
            caption: "%style.next%",
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
      name: "%profilePicture._name%",
      hero: true,
      component: ProfilePicture,
      actions: {
        left: [
          {
            caption: "%profilePicture.upload%",
            action: (process) => process.userDaemon?.uploadProfilePicture(),
          },
          {
            caption: "%profilePicture.choose%",
            action: (process) => process.chooseProfilePicture(),
          },
        ],
        right: [
          {
            caption: "%profilePicture.next%",
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
      name: "%thirdParty._name%",
      hero: true,
      component: ThirdParty,
      actions: {
        left: [{ caption: "%thirdParty.goBack%", action: (process) => process.switchPage("profilePicture") }],
        right: [
          { caption: "%thirdParty.notNow%", action: (process) => process.switchPage("finish") },
          {
            caption: "%thirdParty.enable%",
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
      name: "%finish._name%",
      hero: true,
      component: Finish,
      actions: {
        left: [],
        right: [{ caption: "%finish.finish%", action: (process) => process.closeWindow(), suggested: true }],
      },
    },
  ],
]);

export const FirstRunThemes: Record<string, FirstRunTheme> = {
  dark: {
    name: "%themes.darkMode%",
    subtitle: "Wilhelmina Sunset",
    image: DarkModeGraphic,
    configuration: {
      style: "dark",
      accent: "FF6E54",
      wallpaper: "img18",
    },
  },
  light: {
    name: "%themes.lightMode%",
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
    name: "%virtualLocations.recycle_bin%",
    type: "folder",
    target: "::recycle_bin",
  },
  [join(UserPaths.Desktop, "___my_arcos.arclnk")]: {
    icon: "DesktopIcon",
    name: "%virtualLocations.my_arcos%",
    type: "folder",
    target: "::my_arcos",
  },
  [join(UserPaths.Desktop, "__myDocuments.arclnk")]: {
    icon: "DocumentsFolderIcon",
    name: "%userPaths.Documents%",
    type: "folder",
    target: UserPaths.Documents,
  },
  [join(UserPaths.Desktop, "_appStore.arclnk")]: {
    icon: "AppStoreIcon",
    name: "%apps.AppStore._name%",
    type: "app",
    target: "AppStore",
  },
  [join(UserPaths.Documents, "pictures.arclnk")]: {
    icon: "WallpapersFolderIcon",
    name: "%userPaths.Pictures%",
    type: "folder",
    target: UserPaths.Pictures,
  },
  [join(UserPaths.Documents, "configuration.arclnk")]: {
    icon: "FolderIcon",
    name: "%userPaths.Configuration%",
    type: "folder",
    target: UserPaths.Configuration,
  },
};
