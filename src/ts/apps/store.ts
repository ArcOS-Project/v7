import { AppInfoApp } from "$apps/components/appinfo/metadata";
import { FsProgressApp } from "$apps/components/fsprogress/metadata";
import { ItemInfoApp } from "$apps/components/iteminfo/metadata";
import { MessageBoxApp } from "$apps/components/messagebox/metadata";
import { OpenWithApp } from "$apps/components/openwith/metadata";
import { SecureContextApp } from "$apps/components/securecontext/metadata";
import { ArcShellApp } from "$apps/components/shell/metadata";
import { WallpaperApp } from "$apps/components/wallpaper/metadata";
import { FileManagerApp } from "$apps/user/filemanager/metadata";
import { HexEditorApp } from "$apps/user/hexedit/metadata";
import { SystemSettings } from "$apps/user/settings/metadata";
import { TestApp } from "$apps/user/test/metadata";
import type { AppKeyCombinations } from "$types/accelerator";
import type { AppStorage } from "$types/app";

export const BuiltinApps: AppStorage = [
  MessageBoxApp,
  SecureContextApp,
  WallpaperApp,
  ArcShellApp,
  SystemSettings,
  TestApp,
  AppInfoApp,
  FileManagerApp,
  FsProgressApp,
  HexEditorApp,
  OpenWithApp,
  ItemInfoApp,
];

export const appShortcuts: [number, AppKeyCombinations][] = [];

export const AppOrigins: Record<string, string> = {
  builtin: "Built-in",
  userApps: "Third-party",
  injected: "Other",
};
