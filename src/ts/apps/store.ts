import { RoturAuthGuiApp } from "$apps/components/roturauthgui/metadata";
import { ArcShellApp } from "$apps/components/shell/metadata";
import { WallpaperApp } from "$apps/components/wallpaper/metadata";
import { SystemSettings } from "$apps/user/settings/metadata";
import { TestApp } from "$apps/user/test/metadata";
import type { AppKeyCombinations } from "$types/accelerator";
import type { AppStorage } from "$types/app";

export const BuiltinApps: AppStorage = [
  WallpaperApp,
  ArcShellApp,
  SystemSettings,
  RoturAuthGuiApp,
  TestApp,
];

export const appShortcuts: [number, AppKeyCombinations][] = [];

export const AppOrigins: Record<string, string> = {
  builtin: "Built-in",
  userApps: "Third-party",
  injected: "Other",
};
