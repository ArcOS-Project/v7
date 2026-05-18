import type { IFilesystemDrive } from "$interfaces/fs";
import type { IBaseService } from "$interfaces/service";
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
import type { BugReport, ReportStatistics } from "$types/bughunt";
import type { FilesystemProgressCallback, FsAccess, UserQuota } from "$types/fs";
import type { StoreItem } from "$types/package";
import type { SharedDriveType } from "$types/shares";
import type { ExpandedUserInfo, UserInfo, UserPreferences } from "$types/user";

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
