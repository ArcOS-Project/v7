import type { FileProgressMutator, FsProgressOperation } from "$apps/components/fsprogress/types";
import type { GlobalLoadIndicatorProgress } from "$apps/components/globalloadindicator/types";
import type { IconPickerData } from "$apps/components/iconpicker/types";
import type { LoadSaveDialogData } from "$apps/user/filemanager/types";
import type { LoginActivity } from "$types/activity";
import type { App, AppStorage, InstalledApp } from "$types/app";
import type { ElevationData } from "$types/elevation";
import type { FileHandler, FileOpenerResult } from "$types/fs";
import type { LegacyConnectionInfo } from "$types/legacy";
import type { BatteryType } from "$types/navigator";
import type { Notification } from "$types/notification";
import type { Service } from "$types/service";
import type { ArcShortcut } from "$types/shortcut";
import type { ExpandedTerminal } from "$types/terminal";
import type { UserTheme } from "$types/theme";
import type { CategorizedDiskUsage, CustomStylePreferences, PublicUserInfo, UserInfo, UserPreferences } from "$types/user";
import type { Wallpaper } from "$types/wallpaper";
import type { ReadableStore, Unsubscriber } from "$types/writable";
import type { IAppProcess } from "./app";
import type { IFilesystemDrive, ILegacyServerDrive, IMemoryFilesystemDrive } from "./fs";
import type { IProcess } from "./process";
import type { IApplicationStorage, IFileAssocService, IGlobalDispatch, ILibraryManagement, IServiceHost } from "./service";
import type { IShellRuntime } from "./shell";

export interface IUserDaemon extends IProcess {
  username: string;
  token: string;
  userInfo: UserInfo;
  autoLoadComplete: boolean;
  safeMode: boolean;
  initialized: boolean;
  _blockLeaveInvocations: boolean;
  _toLoginInvoked: boolean;
  _criticalProcess: boolean;
  copyList: ReadableStore<string[]>;
  cutList: ReadableStore<string[]>;
  globalDispatch?: IGlobalDispatch;
  assoc?: IFileAssocService;
  serviceHost?: IServiceHost;
  libraries?: ILibraryManagement;
  account?: IAccountUserContext;
  activity?: ILoginActivityUserContext;
  apps?: IApplicationsUserContext;
  appreg?: IAppRegistrationUserContext;
  renderer?: IAppRendererUserContext;
  checks?: IChecksUserContext;
  elevation?: IElevationUserContext;
  files?: IFilesystemUserContext;
  helpers?: IHelpersUserContext;
  icons?: IIconsUserContext;
  init?: IInitUserContext;
  notifications?: INotificationsUserContext;
  power?: IPowerUserContext;
  preferencesCtx?: IPreferencesUserContext;
  spawn?: ISpawnUserContext;
  themes?: IThemesUserContext;
  version?: IVersionUserContext;
  wallpaper?: IWallpaperUserContext;
  workspaces?: IWorkspaceUserContext;
  shortcuts?: IShortcutsUserContext;
  get preferences(): ReadableStore<UserPreferences>;
  start(): Promise<false | undefined>;
  stop(): Promise<false | undefined>;
  startUserContexts(): Promise<void>;
  stopUserContexts(): Promise<void>;
  activateAdminBootstrapper(): Promise<void>;
  activateGlobalDispatch(): Promise<void>;
  appStorage(): IApplicationStorage | undefined;
  getShell(): IShellRuntime | undefined;
  updateGlobalDispatch(): void;
  getShell(): IShellRuntime | undefined;
}

export interface IUserContext {
  __init(): Promise<void>;
  _init(): Promise<void>;
  __deactivate(): Promise<void>;
  _deactivate(): Promise<void>;
}
export interface IAccountUserContext extends IUserContext {
  discontinueToken(token?: string): Promise<boolean | undefined>;
  getUserInfo(): Promise<UserInfo | undefined>;
  changeUsername(newUsername: string): Promise<boolean>;
  changePassword(newPassword: string): Promise<boolean>;
  getPublicUserInfoOf(userId: string): Promise<PublicUserInfo | undefined>;
  deleteAccount(): Promise<void>;
}
export interface ILoginActivityUserContext extends IUserContext {
  getLoginActivity(): Promise<LoginActivity[]>;
  logActivity(action: string): Promise<boolean>;
}
export interface IApplicationsUserContext extends IUserContext {
  spawnAutoload(): Promise<void>;
  checkDisabled(appId: string, noSafeMode?: boolean): boolean;
  isVital(app: App): boolean | undefined;
  isPopulatableByAppIdSync(appId: string): boolean;
  disableApp(appId: string): Promise<false | undefined>;
  enableApp(appId: string): Promise<false | undefined>;
  enableThirdParty(): Promise<void>;
  disableThirdParty(): Promise<void>;
}
export interface IAppRegistrationUserContext extends IUserContext {
  initAppStorage(storage: IApplicationStorage, cb: (app: App) => void): Promise<void>;
  getUserApps(): Promise<AppStorage>;
  registerApp(data: InstalledApp): Promise<void>;
  uninstallPackageWithStatus(id: string, deleteFiles?: boolean): Promise<boolean>;
  registerAppFromPath(
    path: string
  ): Promise<"failed to read file" | "failed to convert to JSON" | "missing properties" | undefined>;
  uninstallAppWithAck(app: App): Promise<boolean>;
  pinApp(appId: string): Promise<void>;
  unpinApp(appId: string): void;
  determineStartMenuShortcutPath(app: App): string | undefined;
  addToStartMenu(appId: string): Promise<void>;
  removeFromStartMenu(appId: string): Promise<void>;
  updateStartMenuFolder(quiet?: boolean): Promise<void>;
  modeUserAppsToFs(): Promise<void>;
}
export interface IAppRendererUserContext extends IUserContext {
  _deactivate(): Promise<void>;
  getAppRendererStyle(accent: string): string;
  setAppRendererClasses(v: UserPreferences): Promise<void>;
  setUserStyleLoader(style: CustomStylePreferences): void;
}
export interface IChecksUserContext extends IUserContext {
  NIGHTLY: boolean;
  checkReducedMotion(): void;
  checkForUpdates(): Promise<void>;
  checkForMissedMessages(): Promise<void>;
  checkNightly(): void;
}

export interface IElevationUserContext extends IUserContext {
  _elevating: boolean;
  elevate(id: string): Promise<unknown>;
  manuallyElevate(data: ElevationData): Promise<unknown>;
  loadElevation(id: string, data: ElevationData): void;
}
export interface IFilesystemUserContext extends IUserContext {
  TempFs?: IMemoryFilesystemDrive;
  fileHandlers: Record<string, FileHandler>;
  mountedDrives: string[];
  _init(): Promise<void>;
  _deactivate(): Promise<void>;
  mountZip(path: string, letter?: string, fromSystem?: boolean): Promise<false | IFilesystemDrive | undefined>;
  unmountMountedDrives(): Promise<void>;
  FileProgress(initialData: Partial<FsProgressOperation>, parentPid?: number): Promise<FileProgressMutator>;
  moveMultiple(sources: string[], destination: string, pid: number): Promise<void>;
  copyMultiple(sources: string[], destination: string, pid: number): Promise<void>;
  findHandlerToOpenFile(path: string): Promise<FileOpenerResult[]>;
  getAllFileHandlers(): Promise<FileOpenerResult[]>;
  LoadSaveDialog(data: Omit<LoadSaveDialogData, "returnId">): Promise<string[] | [undefined]>;
  openFile(path: string, shortcut?: ArcShortcut): Promise<any>;
  openWith(path: string): Promise<void>;
  determineCategorizedDiskUsage(): Promise<CategorizedDiskUsage>;
  getThumbnailFor(path: string): Promise<string | undefined>;
  mountLegacyFilesystem(connectionInfo: LegacyConnectionInfo): Promise<false | ILegacyServerDrive>;
  moveToTrashOrDeleteItem(path: string, dispatch?: boolean): Promise<boolean>;
  normalizePath(path: string): string;
  mountSourceDrive(): Promise<IFilesystemDrive | false>;
}

export interface IHelpersUserContext extends IUserContext {
  GlobalLoadIndicator(
    caption?: string,
    pid?: number,
    progress?: Partial<GlobalLoadIndicatorProgress>
  ): Promise<
    | {
        caption: ReadableStore<string>;
        stop: () => Promise<void>;
        incrementProgress?: undefined;
        progress?: undefined;
      }
    | {
        caption: ReadableStore<string>;
        stop: () => Promise<void>;
        incrementProgress: (amount?: number) => void;
        progress: ReadableStore<GlobalLoadIndicatorProgress | undefined>;
      }
  >;
  Confirm(title: string, message: string, no: string, yes: string, image?: string, pid?: number): Promise<unknown>;
  TerminalWindow(pid?: number): Promise<ExpandedTerminal | undefined>;
  IconPicker(data: Omit<IconPickerData, "returnId">): Promise<string | undefined>;
  IconEditor(initialValue: string, defaultIcon?: string, name?: string): Promise<string>;
  ParentIs(proc: IAppProcess, appId: string): boolean | undefined;
  waitForLeaveInvocationAllow(): Promise<void>;
  safeModeNotice(): void;
  iHaveFeedback(process: IAppProcess): void;
}

export interface IIconsUserContext extends IUserContext {
  getAppIcon(app: App): string;
  getAppIconByProcess(process: IAppProcess): string;
  getIcon(id: string): Promise<string>;
  getIconCached(id: string): string;
  getIconStore(id: string): ReadableStore<string>;
}

export interface IInitUserContext extends IUserContext {
  anchorInterceptObserver?: MutationObserver;
  _init(): Promise<void>;
  _deactivate(): Promise<void>;
  startAnchorRedirectionIntercept(): void;
  startFilesystemSupplier(): Promise<void>;
  startDriveNotifierWatcher(): void;
  startShareManager(): Promise<void>;
  startPreferencesSync(): Promise<void>;
  startSystemStatusRefresh(): Promise<void>;
  startVirtualDesktops(): Promise<void>;
  startServiceHost(svcPreRun?: (service: Service) => void): Promise<void>;
  startPermissionHandler(): Promise<boolean>;
}
export interface INotificationsUserContext extends IUserContext {
  notifications: Map<string, Notification>;
  sendNotification(data: Notification): string | undefined;
  deleteNotification(id: string): void;
  clearNotifications(): void;
}

export interface IPowerUserContext extends IUserContext {
  battery: ReadableStore<BatteryType | undefined>;
  logoff(): Promise<void>;
  shutdown(): Promise<void>;
  restart(): Promise<void>;
  logoffSafeMode(): Promise<void>;
  toLogin(type: string, props?: Record<string, any>, force?: boolean): Promise<void>;
  closeOpenedApps(type: string, props?: Record<string, any>, force?: boolean): Promise<boolean>;
  batteryInfo(): Promise<BatteryType | undefined>;
}
export interface IPreferencesUserContext extends IUserContext {
  syncLock: boolean;
  preferencesUnsubscribe: Unsubscriber | undefined;
  preferences: ReadableStore<UserPreferences>;
  _deactivate(): Promise<void>;
  commitPreferences(preferences: UserPreferences): Promise<boolean | undefined>;
  sanitizeUserPreferences(): Promise<void>;
  getGlobalSetting(key: string): any;
  setGlobalSetting(key: string, value: any): void;
  changeProfilePicture(newValue: string | number): void;
  uploadProfilePicture(): Promise<string | undefined>;
}

export interface IShortcutsUserContext extends IUserContext {
  handleShortcut(path: string, shortcut: ArcShortcut): Promise<any>;
  createShortcut(data: ArcShortcut, path: string, dispatch?: boolean): Promise<boolean>;
  newShortcut(location: string): Promise<void>;
}

export interface ISpawnUserContext extends IUserContext {
  spawnApp<T>(id: string, parentPid?: number, ...args: any[]): Promise<T | undefined>;
  spawnOverlay<T>(id: string, parentPid?: number, ...args: any[]): Promise<T | undefined>;
  _spawnApp<T>(id: string, renderTarget?: HTMLDivElement | undefined, parentPid?: number, ...args: any[]): Promise<T | undefined>;
  _spawnOverlay<T>(
    id: string,
    renderTarget?: HTMLDivElement | undefined,
    parentPid?: number,
    ...args: any[]
  ): Promise<T | undefined>;
  spawnThirdParty<T>(app: App, metaPath: string, ...args: any[]): Promise<T | undefined>;
  tpaError_revisionIncompatible(app: App): void;
  tpaError_noEnableThirdParty(): void;
}

export interface IThemesUserContext extends IUserContext {
  themeFromUserPreferences(data: UserPreferences, name: string, author: string, version: string): UserTheme;
  saveCurrentTheme(name: string): void;
  applyThemeData(data: UserTheme, id?: string): boolean | undefined;
  applySavedTheme(id: string): void;
  verifyTheme(data: UserTheme): string | undefined;
  checkCurrentThemeIdValidity(data: UserPreferences): UserPreferences;
  deleteUserTheme(id: string): void;
}

export interface IVersionUserContext extends IUserContext {
  isRegisteredVersionOutdated(): Promise<boolean>;
  updateRegisteredVersion(): Promise<void>;
  checkForNewVersion(): Promise<void>;
  mountSourceDrive(): Promise<IFilesystemDrive | false>;
  enableSourceDrive(openAlso?: boolean): Promise<boolean>;
}

export interface IWallpaperUserContext extends IUserContext {
  Wallpaper: ReadableStore<Wallpaper>;
  lastWallpaper: ReadableStore<string>;
  updateWallpaper(v: UserPreferences): Promise<void>;
  uploadWallpaper(pid?: number): Promise<Wallpaper | undefined>;
  getWallpaper(id: string, override?: string): Promise<Wallpaper>;
  deleteLocalWallpaper(id: string): Promise<boolean>;
  getLocalWallpaper(id: string): Promise<Wallpaper>;
}

export interface IWorkspaceUserContext extends IUserContext {
  virtualDesktop: HTMLDivElement | undefined;
  syncVirtualDesktops(v: UserPreferences): Promise<void>;
  renderVirtualDesktop(uuid: string): void;
  deleteVirtualDesktop(uuid: string): Promise<void>;
  getCurrentDesktop(): HTMLDivElement | undefined;
  createWorkspace(name?: string): void;
  getDesktopIndexByUuid(uuid: string): number;
  switchToDesktopByUuid(uuid: string): void;
  killWindowsOfDesktop(uuid: string): Promise<boolean | undefined>;
  nextDesktop(): boolean;
  previousDesktop(): void;
  moveWindow(pid: number, destination: string): Promise<void>;
}
