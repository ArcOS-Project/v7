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
import { InfoIcon } from "$ts/images/dialog";
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
    },
  ],
  [
    "themes",
    {
      name: "Themes",
      icon: ThemesIcon,
      content: Themes,
    },
  ],
  [
    "wallpaper",
    {
      name: "Wallpaper",
      icon: DesktopIcon,
      content: Wallpaper,
    },
  ],
  [
    "loginBackground",
    {
      name: "Login Background",
      icon: PasswordIcon,
      content: LoginBackground,
    },
  ],
  [
    "visuals",
    {
      name: "Visuals",
      icon: PersonalizationIcon,
      content: Visuals,
      separator: true,
    },
  ],
  [
    "shell",
    {
      name: "Shell",
      icon: TaskbarIcon,
      content: Shell,
    },
  ],
  [
    "search",
    {
      name: "Search",
      icon: ArcFindIcon,
      content: Search,
    },
  ],
  [
    "apps",
    {
      name: "Apps",
      icon: AppsIcon,
      content: Apps,
      separator: true,
    },
  ],
  [
    "securityCenter",
    {
      name: "Security Center",
      icon: SecurityMediumIcon,
      content: Security,
    },
  ],
  [
    "about",
    {
      name: "About ArcOS",
      icon: InfoIcon,
      content: About,
    },
  ],
]);
