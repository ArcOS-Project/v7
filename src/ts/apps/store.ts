import { AdminPortalApp } from "$apps/admin/adminportal/metadata";
import { AcceleratorOverviewApp } from "$apps/components/acceleratoroverview/metadata";
import { AppInfoApp } from "$apps/components/appinfo/metadata";
import { AppInstallerApp } from "$apps/components/appinstaller/metadata";
import { AppPreinstallApp } from "$apps/components/apppreinstall/metadata";
import { ArcFind } from "$apps/components/arcfind/metadata";
import { ContextMenuApp } from "$apps/components/contextmenu/metadata";
import { ExitApp } from "$apps/components/exit/metadata";
import { FirstRunApp } from "$apps/components/firstrun/metadata";
import { FsNewFileApp } from "$apps/components/fsnewfile/metadata";
import { FsNewFolderApp } from "$apps/components/fsnewfolder/metadata";
import { FsProgressApp } from "$apps/components/fsprogress/metadata";
import { FsRenameItemApp } from "$apps/components/fsrenameitem/metadata";
import { GlobalLoadIndicatorApp } from "$apps/components/globalloadindicator/metadata";
import { IconPickerApp } from "$apps/components/iconpicker/metadata";
import { ItemInfoApp } from "$apps/components/iteminfo/metadata";
import { MessageBoxApp } from "$apps/components/messagebox/metadata";
import { MessageComposerApp } from "$apps/components/messagecomposer/metadata";
import { MultiUpdateGuiApp } from "$apps/components/multiupdategui/metadata";
import { OopsNotifierApp } from "$apps/components/oopsnotifier/metadata";
import { OopsStackTracerApp } from "$apps/components/oopsstacktracer/metadata";
import { OpenWithApp } from "$apps/components/openwith/metadata";
import { SecureContextApp } from "$apps/components/securecontext/metadata";
import { ShareConnGuiApp } from "$apps/components/shareconngui/metadata";
import { ShareCreateGuiApp } from "$apps/components/sharecreategui/metadata";
import { ShareListGuiApp } from "$apps/components/sharelistgui/metadata";
import { ShareMgmtGuiApp } from "$apps/components/sharemgmtgui/metadata";
import { ArcShellApp } from "$apps/components/shell/metadata";
import { ShellHostApp } from "$apps/components/shellhost/metadata";
import { ShortcutPropertiesApp } from "$apps/components/shortcutproperties/metadata";
import { SystemShortcuts } from "$apps/components/systemshortcuts/metadata";
import { TerminalWindowApp } from "$apps/components/terminalwindow/metadata";
import { TotpAuthGuiApp } from "$apps/components/totpauthgui/metadata";
import { TotpSetupGuiApp } from "$apps/components/totpsetupgui/metadata";
import { TrayHost } from "$apps/components/trayhost/metadata";
import { UpdateNotifierApp } from "$apps/components/updatenotifier/metadata";
import { WallpaperApp } from "$apps/components/wallpaper/metadata";
import { AdvSystemSettings } from "$apps/user/advsystemsettings/metadata";
import { AppStoreApp } from "$apps/user/appstore/metadata";
import { ArcTermApp } from "$apps/user/arcterm/metadata";
import { BugHuntApp } from "$apps/user/bughunt/metadata";
import { BugReportsCreatorApp } from "$apps/user/bughuntcreator/metadata";
import { CalculatorApp } from "$apps/user/calculator/metadata";
import { CodApp } from "$apps/user/cod/metadata";
import { FileManagerApp } from "$apps/user/filemanager/metadata";
import { HexEditorApp } from "$apps/user/hexedit/metadata";
import { ImageViewerApp } from "$apps/user/imageviewer/metadata";
import { LightsOffApp } from "$apps/user/lightsoff/metadata";
import { LoggingApp } from "$apps/user/logging/metadata";
import { MediaPlayerApp } from "$apps/user/mediaplayer/metadata";
import { MessagingApp } from "$apps/user/messages/metadata";
import { PdfViewerApp } from "$apps/user/pdfviewer/metadata";
import { ProcessesApp } from "$apps/user/processes/metadata";
import { QlorbApp } from "$apps/user/qlorb/metadata";
import { SystemSettings } from "$apps/user/settings/metadata";
import { TestApp } from "$apps/user/test/metadata";
import { WriterApp } from "$apps/user/writer/metadata";
import type { AppKeyCombinations } from "$types/accelerator";
import type { AppStorage } from "$types/app";

export const BuiltinApps: AppStorage = [
  ContextMenuApp,
  SystemShortcuts,
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
  TrayHost,
  ArcTermApp,
  CalculatorApp,
  TotpAuthGuiApp,
  TotpSetupGuiApp,
  GlobalLoadIndicatorApp,
  ShareConnGuiApp,
  ShareMgmtGuiApp,
  ShareListGuiApp,
  ShareCreateGuiApp,
  BugHuntApp,
  MessagingApp,
  MessageComposerApp,
  ExitApp,
  QlorbApp,
  BugReportsCreatorApp,
  OopsNotifierApp,
  OopsStackTracerApp,
  ShellHostApp,
  // BootScreen,
  // LoginApp,
  // InitialSetupWizard,
  FirstRunApp,
  AdvSystemSettings,
  AppPreinstallApp,
  AppInstallerApp,
  ArcFind,
  AppStoreApp,
  MultiUpdateGuiApp,
  CodApp,
  UpdateNotifierApp,
];

export const AdminApps: AppStorage = [AdminPortalApp];

export const appShortcuts: [number, AppKeyCombinations][] = [];

export const AppOrigins: Record<string, string> = {
  builtin: "Built-in",
  userApps: "Third-party",
  injected: "Other",
  aefs: "Administrative",
};
