import type { IBugHunt, IServerManager } from "$interfaces/kernel";
import type {
  Activity,
  AuditLog,
  FSItem,
  PartialUserTotp,
  ServerLogItem,
  ServerStatistics,
  Token,
  UserStatistics,
  UserTotp,
} from "$types/admin";
import type {
  App,
  AppAssets,
  AppMetadata,
  AppState,
  AppStorage,
  AppStoreCb,
  MaybeCenteredPosition,
  Size,
  WindowControls,
} from "$types/app";
import type { ExpandedFileAssociationInfo, FileAssociationConfig } from "$types/assoc";
import type { BugReport, ReportOptions, ReportStatistics } from "$types/bughunt";
import type { DevEnvActivationResult, ProjectMetadata } from "$types/devenv";
import type { GlobalDispatchClient } from "$types/dispatch";
import type { FilesystemProgressCallback, FsAccess, UserQuota } from "$types/fs";
import type { TpaLibrary } from "$types/libraries";
import type { ExpandedMessage, ExpandedMessageNode } from "$types/messaging";
import type { MigrationResult, MigrationStatusCallback } from "$types/migrations";
import type { ArcPackage, PartialStoreItem, StoreItem, UpdateInfo } from "$types/package";
import type { ArcProtocol, ProtocolHandler } from "$types/proto";
import type { ReadableServiceStore, Service, ServiceChangeResult, ServiceStore } from "$types/service";
import type { SharedDriveType } from "$types/shares";
import type { TrashIndexNode } from "$types/trash";
import type { ExpandedUserInfo, UserInfo, UserPreferences, UserPreferencesStore } from "$types/user";
import type { ReadableStore } from "$types/writable";
import type JSZip from "jszip";
import type { Socket } from "socket.io-client";
import type { Constructs } from "./common";
import type { IInstallerProcessBase } from "./distrib";
import type { IFilesystemDrive } from "./fs";
import type { IMigrationNodeConstructor } from "./migration";
import type { IProcess } from "./process";
import type { ICommandResult } from "./result";
import type { IThirdPartyAppProcess } from "./thirdparty";

export interface IBaseService extends IProcess {
  host: IServiceHost;
  activated: boolean;
}

export interface IServiceHost extends IProcess {
  Services: ReadableServiceStore;
  _holdRestart: boolean;
  initialRun(svcPreRun?: (service: Service) => void): Promise<void>;
  init(svcPreRun?: (service: Service) => void): Promise<void>;
  stop(): Promise<void>;
  readonly STORE: Map<string, Service>;
  loadStore(store: ServiceStore): boolean;
  getServiceInfo(id: string): Service | undefined;
  startService(id: string): Promise<"success" | "err_noExist" | "err_alreadyRunning" | "err_startCondition" | "err_spawnFailed">;
  stopService(id: string): Promise<ServiceChangeResult>;
  restartService(id: string): Promise<ServiceChangeResult>;
  verifyServicesProcesses(): Promise<void>;
  getService<T extends IBaseService = IBaseService>(id: string): T | undefined;
  hasService(id: string): boolean;
}

export interface IBugHuntUserSpaceProcess extends IBaseService {
  INVALIDATION_THRESHOLD: number;
  privateCache: BugReport[];
  publicCache: BugReport[];
  cachedPrivateResponseCount: number;
  cachedPublicResponseCount: number;
  module: IBugHunt;
  afterActivate(): Promise<void>;
  sendBugReport(options: ReportOptions): Promise<boolean>;
  getPrivateReports(forceInvalidate?: boolean): Promise<BugReport[]>;
  getPublicReports(forceInvalidate?: boolean): Promise<BugReport[]>;
  refreshPrivateCache(): Promise<void>;
  refreshPublicCache(): Promise<void>;
  refreshAllCaches(): Promise<void>;
}

export interface IDevelopmentEnvironment extends IBaseService {
  connected: boolean;
  meta?: ProjectMetadata;
  stop(): Promise<void>;
  connect(port: number): Promise<DevEnvActivationResult>;
  disconnect(): Promise<undefined>;
  getProjectMeta(): Promise<ProjectMetadata | undefined>;
  mountDevDrive(): Promise<boolean | undefined>;
  restartTpa(): Promise<undefined>;
  killTpa(): Promise<undefined>;
  refreshCSS(filename: string): Promise<void>;
}

export interface IDistributionServiceProcess extends IBaseService {
  _BUSY: string;
  preferences: UserPreferencesStore;
  start(): Promise<false | undefined>;
  checkBusy(action?: string): string;
  get BUSY(): string;
  set BUSY(value: string);
  addStoreItemToInstalled(item: StoreItem): Promise<boolean | undefined>;
  removeStoreItemFromInstalled(id: string): Promise<boolean | undefined>;
  removeStoreItemFromInstalledByAppId(id: string): Promise<boolean | undefined>;
  loadInstalledStoreItemList(noCache?: boolean): Promise<StoreItem[]>;
  writeInstalledStoreItemList(list: StoreItem[]): Promise<boolean>;
  getInstalledStoreItemById(id: string): Promise<StoreItem | undefined>;
  addPackageToInstalled(item: ArcPackage): Promise<boolean | undefined>;
  removePackageFromInstalled(id: string): Promise<boolean | undefined>;
  loadInstalledPackageList(): Promise<ArcPackage[]>;
  writeInstalledPackageList(list: ArcPackage[]): Promise<boolean>;
  getInstalledPackageByAppId(id: string): Promise<ArcPackage | undefined>;
  getInstalledStoreItemByAppId(id: string): Promise<StoreItem | undefined>;
  uninstallPackage(appId: string, deleteFiles?: boolean, onStage?: (stage: string) => void): Promise<boolean>;
  packageInstallerFromPath<T = IInstallerProcessBase>(
    path: string,
    progress?: FilesystemProgressCallback,
    item?: StoreItem
  ): Promise<T | undefined>;
  getInstallerProcess(metadata: ArcPackage): Constructs<IInstallerProcessBase>;
  packageInstaller<T = IInstallerProcessBase>(zip: JSZip, metadata: ArcPackage, item?: StoreItem): Promise<T | undefined>;
  validatePackage(path: string, progress?: FilesystemProgressCallback): Promise<boolean>;
  getAllStoreItems(): Promise<StoreItem[]>;
  getStoreItemsByAuthor(userId: string): Promise<StoreItem[]>;
  storeItemReadme(id: string): Promise<string>;
  checkForStoreItemUpdate(id: string, installedList?: StoreItem[], allPackages?: StoreItem[]): Promise<UpdateInfo | false>;
  checkForAllStoreItemUpdates(list?: StoreItem[]): Promise<UpdateInfo[]>;
  updateStoreItem<T = IInstallerProcessBase>(
    id: string,
    force?: boolean,
    progress?: FilesystemProgressCallback
  ): Promise<T | false>;
  searchStoreItems(query: string): Promise<PartialStoreItem[]>;
  getInstalledStoreItem(id: string, installedList?: StoreItem[], noCache?: boolean): Promise<StoreItem>;
  getStoreItem(id: string): Promise<StoreItem | undefined>;
  getStoreItemByName(name: string): Promise<StoreItem | undefined>;
  downloadStoreItem(id: string, onProgress?: FilesystemProgressCallback): Promise<ArrayBuffer | undefined>;
  storeItemInstaller(id: string, onProgress?: FilesystemProgressCallback): Promise<false | IInstallerProcessBase | undefined>;
  publishing_publishPackage(data: Blob, onProgress?: FilesystemProgressCallback): Promise<boolean>;
  publishing_publishPackageFromPath(path: string, onProgress?: FilesystemProgressCallback): Promise<boolean>;
  publishing_getPublishedPackages(): Promise<StoreItem[]>;
  publishing_deprecateStoreItem(id: string): Promise<boolean>;
  publishing_deleteStoreItem(id: string): Promise<boolean>;
  publishing_updateStoreItem(itemId: string, newData: Blob, onProgress?: FilesystemProgressCallback): Promise<boolean>;
  publishing_updateStoreItemFromPath(
    itemId: string,
    updatePath: string,
    onProgress?: FilesystemProgressCallback
  ): Promise<boolean>;
}

export interface IIconService extends IBaseService {
  PATH: string;
  FILE_CACHE: Record<string, string>;
  ICON_TYPES: string[];
  DEFAULT_ICON: string;
  Configuration: ReadableStore<Record<string, string>>;
  start(): Promise<void>;
  loadConfiguration(): Promise<Record<string, string>>;
  writeConfiguration(config: Record<string, string>): Promise<Record<string, string>>;
  defaultConfiguration(): Record<string, string>;
  getIcon(id: string, noCache?: boolean): Promise<string>;
  getIconCached(id: string): string;
  parseIcon(id: string): ["fs" | "builtin" | "app", string];
  cacheEverything(): Promise<void>;
  getAppIcon(app: App, workingDirectory?: string): string;
  getGroupedIcons(): Record<string, Record<string, string>>;
}

export interface IProtocolServiceProcess extends IBaseService {
  lockObserver: boolean;
  observer?: MutationObserver;
  store: Record<string, ProtocolHandler>;
  start(): Promise<void>;
  parseProtoParam(): void;
  processMutations(mutations: MutationRecord[]): void;
  parseAnchor(anchor: HTMLAnchorElement): void;
  parseUrl(str: string): ArcProtocol | undefined;
  executeUrl(url: string): Promise<boolean | undefined>;
  registerHandler(command: string, handler: ProtocolHandler): boolean;
  unregisterHandler(command: string): boolean;
}

export interface IGlobalDispatch extends IBaseService {
  client: Socket | undefined;
  server: IServerManager;
  authorized: boolean;
  start(): Promise<void>;
  stop(): Promise<void>;
  connected(): Promise<void>;
  sendUpdate(): void;
  subscribe<T extends Array<any> = any[]>(event: string, callback: (...data: T) => void): void;
  emit(event: string, ...data: any[]): void;
  getClients(): Promise<GlobalDispatchClient[]>;
  disconnectClient(clientId: string): Promise<boolean>;
}

export interface IMessagingInterface extends IBaseService {
  get serverUrl(): string | undefined;
  start(): Promise<void>;
  getSentMessages(): Promise<ExpandedMessage[]>;
  getReceivedMessages(): Promise<ExpandedMessage[]>;
  getInboxListing(): Promise<ExpandedMessage[]>;
  sendMessage(
    subject: string,
    recipients: string[],
    body: string,
    attachments: File[],
    repliesTo?: string,
    onProgress?: FilesystemProgressCallback
  ): Promise<boolean>;
  deleteMessage(messageId: string): Promise<boolean>;
  readMessage(messageId: string): Promise<ExpandedMessage | undefined>;
  readAttachment(
    messageId: string,
    attachmentId: string,
    onProgress?: FilesystemProgressCallback
  ): Promise<ArrayBuffer | undefined>;
  getMessageThread(messageId?: string): Promise<ExpandedMessageNode[]>;
  buildAttachment(filePath: string, onProgress?: FilesystemProgressCallback): Promise<File | undefined>;
}

export interface IAdminBootstrapper extends IBaseService {
  start(): Promise<void>;
  getUserInfo(): Promise<UserInfo | undefined>;
  mountUserDrive(
    username: string,
    driveLetter?: string,
    onProgress?: FilesystemProgressCallback
  ): Promise<false | IFilesystemDrive | undefined>;
  mountAllUsers(): Promise<void>;
  getAllUsers(): Promise<ExpandedUserInfo[]>;
  getUserByUsername(username: string): Promise<UserInfo | undefined>;
  getServerLogs(): Promise<ServerLogItem[]>;
  getAuditLog(): Promise<AuditLog[]>;
  grantAdmin(username: string): Promise<boolean>;
  revokeAdmin(username: string): Promise<boolean>;
  getPreferencesOf(username: string): Promise<UserPreferences | undefined>;
  setPreferencesOf(username: string, preferences: UserPreferences): Promise<boolean>;
  deleteUser(username: string): Promise<boolean>;
  getStatistics(): Promise<ServerStatistics | undefined>;
  getAllTokens(): Promise<Token[]>;
  purgeAllTokens(): Promise<boolean>;
  purgeOneToken(id: string): Promise<boolean>;
  purgeUserTokens(userId: string): Promise<boolean>;
  deleteBugReport(reportId: string): Promise<boolean>;
  closeBugReport(reportId: string): Promise<boolean>;
  reopenBugReport(reportId: string): Promise<boolean>;
  getAllBugReports(): Promise<BugReport[]>;
  getBugReport(id: string): Promise<BugReport | undefined>;
  getBugHuntStatistics(): Promise<ReportStatistics | undefined>;
  approveUser(username: string): Promise<boolean>;
  disapproveUser(username: string): Promise<boolean>;
  changeEmailOf(username: string, newEmail: string): Promise<boolean>;
  changePasswordOf(username: string, newPassword: string): Promise<boolean>;
  getAvailableScopes(): Promise<Record<string, string>>;
  getScopesOf(username: string): Promise<string[]>;
  setScopesOf(username: string, scopes: string[]): Promise<boolean>;
  getQuotaOf(username: string): Promise<UserQuota | undefined>;
  setQuotaOf(username: string, newQuota: number): Promise<boolean>;
  getAllActivity(): Promise<Activity[]>;
  getActivityOf(username: string): Promise<Activity[]>;
  deleteAllActivities(): Promise<boolean>;
  deleteActivitiesOf(username: string): Promise<boolean>;
  getAllTotp(): Promise<PartialUserTotp[]>;
  getTotpOf(username: string): Promise<UserTotp | undefined>;
  deActivateTotpOf(username: string): Promise<boolean>;
  deleteTotpOf(username: string): Promise<boolean>;
  getAllFsAccessors(): Promise<FsAccess[]>;
  getFsAccessorsOf(username: string): Promise<FsAccess[]>;
  deleteAllFsAccessors(): Promise<boolean>;
  deleteFsAccessorsOf(username: string): Promise<boolean>;
  getAllIndexingNodes(): Promise<FSItem[]>;
  getIndexingNodesOf(username: string): Promise<FSItem[]>;
  forceIndexFor(username: string): Promise<string[]>;
  deleteIndexingOf(username: string): Promise<boolean>;
  canAccess(...scopes: string[]): boolean;
  canAccessP(provided: UserInfo, ...scopes: string[]): boolean;
  getMissingScopes(...scopes: string[]): string[];
  getAllShares(): Promise<SharedDriveType[]>;
  getSharesOf(userId: string): Promise<SharedDriveType[]>;
  deleteShare(shareId: string): Promise<boolean>;
  kickUserFromShare(shareId: string, userId: string): Promise<boolean>;
  addUserToShare(shareId: string, userId: string): Promise<boolean>;
  getShareAccessors(shareId: string): Promise<FSItem[]>;
  deleteShareAccessors(shareId: string): Promise<boolean>;
  changeSharePassword(shareId: string, newPassword: string): Promise<boolean>;
  renameShare(shareId: string, newName: string): Promise<boolean>;
  changeShareOwner(shareId: string, newUserId: string): Promise<boolean>;
  getStatisticsOf(userId: string): Promise<UserStatistics | undefined>;
  setShareQuotaOf(shareId: string, quota: number): Promise<boolean>;
  getShareQuotaOf(shareId: string): Promise<UserQuota | undefined>;
  unlockShare(shareId: string): Promise<boolean>;
  lockShare(shareId: string): Promise<boolean>;
  deleteStoreItem(_id: string): Promise<boolean>;
  deleteUserStoreItems(userId: string): Promise<boolean>;
  getAllStoreItems(): Promise<StoreItem[]>;
  getUserStoreItems(userId: string): Promise<StoreItem[]>;
  deprecatePackage(itemId: string): Promise<boolean>;
  undeprecatePackage(itemId: string): Promise<boolean>;
  getStoreItem(id: string): Promise<StoreItem | undefined>;
  getStoreItemByName(name: string): Promise<StoreItem | undefined>;
  blockStoreItem(id: string, reason?: string): Promise<boolean>;
  unblockStoreItem(id: string, reason?: string): Promise<boolean>;
  storeItemMakeOfficial(id: string): Promise<boolean>;
  storeItemMakeNotOfficial(id: string): Promise<boolean>;
  readStoreItemFiles(
    id: string,
    onProgress?: FilesystemProgressCallback,
    onStatus?: (s: string) => void
  ): Promise<string | false>;
  deleteStoreItemVerification(id: string): Promise<boolean>;
  verifyStoreItem(id: string, note: string): Promise<boolean>;
  getRegisteredVersionFor(userId: string): Promise<string>;
  getMigrationIndexFor(userId: string): Promise<Record<string, number>>;
}

export interface IFileAssocService extends IBaseService {
  start(): Promise<void>;
  updateConfiguration(
    callback: (config: FileAssociationConfig) => FileAssociationConfig | Promise<FileAssociationConfig>
  ): Promise<void>;
  defaultFileAssociations(): FileAssociationConfig;
  getFileAssociation(path: string): ExpandedFileAssociationInfo | undefined;
  getUnresolvedAssociationIcon(path: string): string;
  getConfiguration(): FileAssociationConfig;
}

export interface ITrashCanService extends IBaseService {
  INDEX_PATH: string;
  IndexBuffer: ReadableStore<Record<string, TrashIndexNode>>;
  start(): Promise<void>;
  readIndex(): Promise<Record<string, TrashIndexNode>>;
  writeIndex(index: Record<string, TrashIndexNode>): Promise<Record<string, TrashIndexNode>>;
  moveToTrash(path: string, dispatch?: boolean): Promise<TrashIndexNode | undefined>;
  restoreTrashItem(uuid: string): Promise<boolean>;
  getIndex(): Record<string, TrashIndexNode>;
  permanentlyDelete(uuid: string): Promise<boolean>;
  emptyBin(): Promise<void>;
}

export interface IShareManager extends IBaseService {
  getOwnedShares(): Promise<SharedDriveType[]>;
  mountOwnedShares(): Promise<void>;
  getJoinedShares(): Promise<SharedDriveType[]>;
  createShare(name: string, password: string): Promise<SharedDriveType | undefined>;
  deleteShare(shareId: string): Promise<boolean>;
  changeSharePassword(shareId: string, newPassword: string): Promise<boolean>;
  renameShare(shareId: string, newName: string): Promise<boolean>;
  joinShare(
    username: string,
    shareName: string,
    password: string,
    mountAlso?: boolean
  ): Promise<boolean | IFilesystemDrive | undefined>;
  leaveShare(shareId: string): Promise<boolean>;
  unmountIfMounted(shareId: string): Promise<void>;
  kickUserFromShare(shareId: string, userId: string): Promise<boolean>;
  mountShare(
    username: string,
    shareName: string,
    letter?: string,
    onProgress?: FilesystemProgressCallback
  ): Promise<false | IFilesystemDrive | undefined>;
  mountShareById(shareId: string, letter?: string, onProgress?: FilesystemProgressCallback): Promise<false | IFilesystemDrive>;
  getShareMembers(shareId: string): Promise<Record<string, string>>;
  getShareInfoByName(username: string, shareName: string): Promise<SharedDriveType | undefined>;
  getShareInfoById(shareId: string): Promise<SharedDriveType | undefined>;
}

export interface ILibraryManagement extends IBaseService {
  Index: Map<string, TpaLibrary>;
  start(): Promise<void>;
  populateIndex(): Promise<void>;
  deleteLibrary(id: string, onStage?: (stage: string) => void): Promise<boolean>;
  getLibrary<T = any>(id: string): Promise<T>;
}

export interface IMigrationService extends IBaseService {
  get Config(): Record<string, number>;
  MIGRATIONS: IMigrationNodeConstructor[];
  runMigrations(cb?: MigrationStatusCallback): Promise<Record<string, MigrationResult>>;
  runMigration(migration: IMigrationNodeConstructor, cb?: MigrationStatusCallback): Promise<MigrationResult>;
  loadConfiguration(): Promise<Record<string, number>>;
  writeConfiguration(config: Record<string, number>): Promise<Record<string, number>>;
}

export interface IApplicationStorage extends IBaseService {
  buffer: ReadableStore<AppStorage>;
  appIconCache: Record<string, string>;
  loadOrigin(id: string, store: AppStoreCb): boolean;
  unloadOrigin(id: string): boolean;
  loadApp(app: App): false | App;
  loadAppModuleFile(path: string): Promise<boolean>;
  injected(): {
    metadata: AppMetadata;
    size: Size;
    minSize: Size;
    maxSize: Size;
    position: MaybeCenteredPosition;
    state: AppState;
    controls: WindowControls;
    assets: AppAssets;
    autoRun?: boolean;
    core?: boolean;
    hidden?: boolean;
    overlay?: boolean;
    glass?: boolean;
    thirdParty?: false;
    id: string;
    originId?: string;
    entrypoint?: string;
    workingDirectory?: string;
    opens?: {
      extensions?: string[];
      mimeTypes?: string[];
    };
    elevated?: boolean;
    acceleratorDescriptions?: Record<string, string>;
    fileSignatures?: Record<string, string>;
    process?: IThirdPartyAppProcess;
    tpaRevision?: number;
    noSafeMode?: boolean;
    vital?: boolean;
    _internalOriginalPath?: string;
    _internalMinVer?: string;
    _internalSysVer?: string;
    _internalLoadTime?: number;
  }[];
  refresh(): Promise<void>;
  get(): Promise<AppStorage>;
  getAppSynchronous(id: string): App | undefined;
  getAppById(id: string, fromBuffer?: boolean): Promise<ICommandResult<App>>;
}

export interface IRecentFilesService extends IBaseService {
  loadConfiguration(): Promise<void>;
  writeConfiguration(configuration: string[]): Promise<void>;
  addToRecents(path: string): boolean;
  removeFromRecents(path: string): boolean;
  getRecents(): string[];
}
