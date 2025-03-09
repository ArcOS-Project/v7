import { AppInfoApp } from "$apps/components/appinfo/metadata";
import { FsNewFileApp } from "$apps/components/fsnewfile/metadata";
import { FsNewFolderApp } from "$apps/components/fsnewfolder/metadata";
import { FsProgressApp } from "$apps/components/fsprogress/metadata";
import { FsRenameItemApp } from "$apps/components/fsrenameitem/metadata";
import { IconPickerApp } from "$apps/components/iconpicker/metadata";
import { ItemInfoApp } from "$apps/components/iteminfo/metadata";
import { MessageBoxApp } from "$apps/components/messagebox/metadata";
import { OpenWithApp } from "$apps/components/openwith/metadata";
import { SecureContextApp } from "$apps/components/securecontext/metadata";
import { ArcShellApp } from "$apps/components/shell/metadata";
import { ShortcutPropertiesApp } from "$apps/components/shortcutproperties/metadata";
import { WallpaperApp } from "$apps/components/wallpaper/metadata";
import { FileManagerApp } from "$apps/user/filemanager/metadata";
import { HexEditorApp } from "$apps/user/hexedit/metadata";
import { LoggingApp } from "$apps/user/logging/metadata";
import { MediaPlayerApp } from "$apps/user/mediaplayer/metadata";
import { ProcessesApp } from "$apps/user/processes/metadata";
import { SystemSettings } from "$apps/user/settings/metadata";
import { TestApp } from "$apps/user/test/metadata";
import type { AppKeyCombinations } from "$types/accelerator";
import type { AppStorage } from "$types/app";

export const BuiltinApps: AppStorage = [
  AppInfoApp,
  FsProgressApp,
  IconPickerApp,
  ItemInfoApp,
  MessageBoxApp,
  OpenWithApp,
  SecureContextApp,
  ArcShellApp,
  ShortcutPropertiesApp,
  WallpaperApp,
  FileManagerApp,
  HexEditorApp,
  LoggingApp,
  MediaPlayerApp,
  ProcessesApp,
  SystemSettings,
  TestApp,
  FsRenameItemApp,
  FsNewFolderApp,
  FsNewFileApp,
];

export const appShortcuts: [number, AppKeyCombinations][] = [];

export const AppOrigins: Record<string, string> = {
  builtin: "Built-in",
  userApps: "Third-party",
  injected: "Other",
};
