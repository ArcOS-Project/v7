import { AcceleratorOverviewApp } from "$apps/components/acceleratoroverview/metadata";
import { AppInfoApp } from "$apps/components/appinfo/metadata";
import { FsNewFileApp } from "$apps/components/fsnewfile/metadata";
import { FsNewFolderApp } from "$apps/components/fsnewfolder/metadata";
import { FsProgressApp } from "$apps/components/fsprogress/metadata";
import { FsRenameItemApp } from "$apps/components/fsrenameitem/metadata";
import { GlobalLoadIndicatorApp } from "$apps/components/globalloadindicator/metadata";
import { IconPickerApp } from "$apps/components/iconpicker/metadata";
import { ItemInfoApp } from "$apps/components/iteminfo/metadata";
import { MessageBoxApp } from "$apps/components/messagebox/metadata";
import { MessageComposerApp } from "$apps/components/messagecomposer/metadata";
import { OpenWithApp } from "$apps/components/openwith/metadata";
import { SecureContextApp } from "$apps/components/securecontext/metadata";
import { ShareConnGuiApp } from "$apps/components/shareconngui/metadata";
import { ShareCreateGuiApp } from "$apps/components/sharecreategui/metadata";
import { ShareListGuiApp } from "$apps/components/sharelistgui/metadata";
import { ShareMgmtGuiApp } from "$apps/components/sharemgmtgui/metadata";
import { ArcShellApp } from "$apps/components/shell/metadata";
import { ShortcutPropertiesApp } from "$apps/components/shortcutproperties/metadata";
import { TerminalWindowApp } from "$apps/components/terminalwindow/metadata";
import { TotpAuthGuiApp } from "$apps/components/totpauthgui/metadata";
import { TotpSetupGuiApp } from "$apps/components/totpsetupgui/metadata";
import { WallpaperApp } from "$apps/components/wallpaper/metadata";
import { ArcTermApp } from "$apps/user/arcterm/metadata";
import { BugHuntApp } from "$apps/user/bughunt/metadata";
import { CalculatorApp } from "$apps/user/calculator/metadata";
import { CameraApp } from "$apps/user/camera/metadata";
import { FileManagerApp } from "$apps/user/filemanager/metadata";
import { HexEditorApp } from "$apps/user/hexedit/metadata";
import { ImageViewerApp } from "$apps/user/imageviewer/metadata";
import { LightsOffApp } from "$apps/user/lightsoff/metadata";
import { LoggingApp } from "$apps/user/logging/metadata";
import { MediaPlayerApp } from "$apps/user/mediaplayer/metadata";
import { MessagingApp } from "$apps/user/messages/metadata";
import { PdfViewerApp } from "$apps/user/pdfviewer/metadata";
import { ProcessesApp } from "$apps/user/processes/metadata";
import { SystemSettings } from "$apps/user/settings/metadata";
import { TestApp } from "$apps/user/test/metadata";
import { WriterApp } from "$apps/user/writer/metadata";
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
  WriterApp,
  ImageViewerApp,
  PdfViewerApp,
  LightsOffApp,
  AcceleratorOverviewApp,
  TerminalWindowApp,
  ArcTermApp,
  CalculatorApp,
  TotpAuthGuiApp,
  TotpSetupGuiApp,
  CameraApp,
  GlobalLoadIndicatorApp,
  ShareConnGuiApp,
  ShareMgmtGuiApp,
  ShareListGuiApp,
  ShareCreateGuiApp,
  BugHuntApp,
  MessagingApp,
  MessageComposerApp,
];

export const AdminApps: AppStorage = [];

export const appShortcuts: [number, AppKeyCombinations][] = [];

export const AppOrigins: Record<string, string> = {
  builtin: "Built-in",
  userApps: "Third-party",
  injected: "Other",
  admin: "Administrative",
};
