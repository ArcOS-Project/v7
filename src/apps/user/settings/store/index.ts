import { InfoIcon } from "$ts/images/dialog";
import {
  AccountIcon,
  AppsIcon,
  ArcFindIcon,
  DesktopIcon,
  PasswordIcon,
  PersonalizationIcon,
  SecurityMediumIcon,
  TaskbarIcon,
  ThemesIcon,
} from "$ts/images/general";
import About from "../Settings/Page/About.svelte";
import Account from "../Settings/Page/Account.svelte";
import Apps from "../Settings/Page/Apps.svelte";
import LoginBackground from "../Settings/Page/LoginBackground.svelte";
import Search from "../Settings/Page/Search.svelte";
import Security from "../Settings/Page/Security.svelte";
import Shell from "../Settings/Page/Shell.svelte";
import Themes from "../Settings/Page/Themes.svelte";
import Visuals from "../Settings/Page/Visuals.svelte";
import Wallpaper from "../Settings/Page/Wallpaper.svelte";
import type { SettingsPage, SettingsPages } from "../types";

export const settingsPageStore: SettingsPages = new Map<string, SettingsPage>([
  [
    "account",
    {
      hidden: true,
      name: "Your ArcOS Identity",
      icon: AccountIcon,
      content: Account,
      description: "Manage your ArcOS account",
    },
  ],
  [
    "themes",
    {
      name: "Themes",
      icon: ThemesIcon,
      content: Themes,
      description: "Personalize your ArcOS with themes",
      noSafeMode: true,
    },
  ],
  [
    "wallpaper",
    {
      name: "Wallpaper",
      icon: DesktopIcon,
      content: Wallpaper,
      description: "Change your desktop wallpaper",
      noSafeMode: true,
    },
  ],
  [
    "loginBackground",
    {
      name: "Login Background",
      icon: PasswordIcon,
      content: LoginBackground,
      description: "Change your login background",
      noSafeMode: true,
    },
  ],
  [
    "visuals",
    {
      name: "Visuals",
      icon: PersonalizationIcon,
      content: Visuals,
      separator: true,
      description: "Fine-tune the appearance of ArcOS",
    },
  ],
  [
    "shell",
    {
      name: "Shell",
      icon: TaskbarIcon,
      content: Shell,
      description: "The taskbar, start menu and action center",
    },
  ],
  [
    "search",
    {
      name: "Search",
      icon: ArcFindIcon,
      content: Search,
      description: "The search functionality of ArcOS",
      noSafeMode: true,
    },
  ],
  [
    "apps",
    {
      name: "Apps",
      icon: AppsIcon,
      content: Apps,
      separator: true,
      description: "Manage the apps on your system",
    },
  ],
  [
    "securityCenter",
    {
      name: "Security Center",
      icon: SecurityMediumIcon,
      content: Security,
      description: "Manage the security of ArcOS",
    },
  ],
  [
    "about",
    {
      name: "About ArcOS",
      icon: InfoIcon,
      content: About,
      description: "ArcOS version information",
    },
  ],
]);
