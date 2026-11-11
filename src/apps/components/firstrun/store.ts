import type { ITotpConnector } from "$interfaces/modules/server/ITotpConnector";
import { Daemon, SoundBus } from "$ts/env";
import { UserPaths } from "$ts/user/store";
import { MessageBox } from "$ts/util/dialog";
import { join } from "$ts/util/fs";
import { ElevationLevel } from "$types/system/elevation";
import type { ArcShortcut } from "$types/system/shortcut";
import type { TotpSetupGuiRuntime } from "../totpsetupgui/runtime";
import DisplayName from "./FirstRun/Page/DisplayName.svelte";
import Finish from "./FirstRun/Page/Finish.svelte";
import ProfilePicture from "./FirstRun/Page/ProfilePicture.svelte";
import Style from "./FirstRun/Page/Style.svelte";
import ThirdParty from "./FirstRun/Page/ThirdParty.svelte";
import TOTPFailed from "./FirstRun/Page/TOTPFailed.svelte";
import TOTPSetup from "./FirstRun/Page/TOTPSetup.svelte";
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
            action: (process) => Daemon?.preferencesCtx?.uploadProfilePicture(),
          },
          {
            caption: "Choose",
            action: (process) => process.chooseProfilePicture(),
          },
        ],
        right: [
          {
            caption: "Next",
            action: (process) => process.switchPage("displayName"),
            suggested: true,
          },
        ],
      },
    },
  ],
  [
    "displayName",
    {
      name: "What's your name?",
      hero: true,
      component: DisplayName,
      actions: {
        left: [
          {
            caption: "Go back",
            action: (process) => process.switchPage("profilePicture"),
          },
        ],
        right: [
          {
            caption: "Skip",
            action: (process) => process.switchPage("thirdParty"),
          },
          {
            caption: "Save",
            action: (process) => process.setDisplayName(),
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
        left: [
          {
            caption: "Go back",
            action: (process) => process.switchPage("displayName"),
          },
        ],
        right: [
          {
            caption: "Not now",
            action: (process) => process.switchPage("totpSetup"),
          },
          {
            caption: "Enable",
            action: (process) => {
              process.userPreferences.update((v) => {
                v.security.enableThirdParty = true;
                return v;
              });
              process.switchPage("totpSetup");
            },
            suggested: true,
          },
        ],
      },
    },
  ],
  [
    "totpSetup",
    {
      name: "Set-up 2FA?",
      hero: true,
      component: TOTPSetup,
      actions: {
        left: [
          {
            caption: "Go back",
            action: (process) => process.switchPage("thirdParty"),
          },
        ],
        right: [
          {
            caption: "Skip",
            action: (process) => process.switchPage("finish"),
          },
          {
            caption: "Set-up 2FA",
            action: async (process) => {
              const totpSetupProc = await process.spawnOverlayApp<TotpSetupGuiRuntime>("TotpSetupGui", process.pid, true);
              if (!totpSetupProc) {
                process.switchPage("totpFailed");
                SoundBus.playSound("arcos.dialog.error");
              }

              totpSetupProc?.setupState.subscribe((v) => {
                if (v === "successful") {
                  process.switchPage("finish");
                }
              });
            },
            suggested: true,
          },
        ],
      },
    },
  ],
  [
    "totpFailed",
    {
      name: "2FA Setup Failed",
      hero: true,
      component: TOTPFailed,
      actions: {
        left: [
          {
            caption: "Go back",
            action: (process) => process.switchPage("thirdParty"),
          },
        ],
        right: [
          {
            caption: "Try again",
            action: (process) => process.switchPage("totpSetup"),
          },

          { caption: "Finish later", action: (process) => process.switchPage("finish"), suggested: true },
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
  [join(UserPaths.Desktop, "0_recycle_bin.arclnk")]: {
    icon: "TrashIcon",
    name: "Recycle Bin",
    type: "folder",
    target: "::recycle_bin",
  },
  [join(UserPaths.Desktop, "1_my_arcos.arclnk")]: {
    icon: "DesktopIcon",
    name: "My ArcOS",
    type: "folder",
    target: "::my_arcos",
  },
  [join(UserPaths.Desktop, "2_myDocuments.arclnk")]: {
    icon: "DocumentsFolderIcon",
    name: "Documents",
    type: "folder",
    target: UserPaths.Documents,
  },
  [join(UserPaths.Desktop, "3_appStore.arclnk")]: {
    icon: "AppStoreIcon",
    name: "App Store",
    type: "app",
    target: "AppStore",
  },
  [join(UserPaths.Desktop, "4_iHaveFeedback.arclnk")]: {
    icon: "BugReportIcon",
    name: "Give feedback",
    type: "app",
    target: "feedback",
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
