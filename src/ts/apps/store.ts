import { ArcShellApp } from "$apps/components/shell/metadata";
import { WallpaperApp } from "$apps/components/wallpaper/metadata";
import { SystemSettings } from "$apps/user/settings/metadata";
import { TestApp } from "$apps/user/test/metadata";
import type { AppKeyCombinations } from "$types/accelerator";
import type { App } from "$types/app";

export const BuiltinApps: App[] = [
  WallpaperApp,
  ArcShellApp,
  SystemSettings,
  TestApp,
];

export const appShortcuts: [number, AppKeyCombinations][] = [];
