import { DistributionServiceProcess } from "$ts/distrib";
import { AdminServerDrive } from "$ts/drives/admin";
import { toForm } from "$ts/form";
import { tryJsonParse } from "$ts/json";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import { arrayToBlob, arrayToText, textToBlob } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import type {
  Activity,
  AuditLog,
  FsAccess,
  FSItem,
  PartialUserTotp,
  ServerLogItem,
  ServerStatistics,
  Token,
  UserStatistics,
  UserTotp,
} from "$types/admin";
import type { BugReport, ReportStatistics } from "$types/bughunt";
import type { FilesystemProgressCallback, UserQuota } from "$types/fs";
import type { ArcPackage, StoreItem } from "$types/package";
import type { Service } from "$types/service";
import type { SharedDriveType } from "$types/shares";
import type { ExpandedUserInfo, UserInfo, UserPreferences } from "$types/user";
import { fromExtension } from "human-filetypes";
import JSZip from "jszip";
import { Backend } from "../axios";
import { MessagingInterface } from "../messaging";
import { UserPaths } from "../user/store";
import { AdminFileSystem } from "./fs";
import { AdminScopes } from "./store";
import { KernelServerUrl } from "$ts/env";

export class AdminBootstrapper extends BaseService {
  private token: string | undefined;
  private userInfo: UserInfo | undefined;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(pid, parentPid, name, host);
    this.token = host.daemon.token;

    this.setSource(__SOURCE__);
  }

  async start() {
    await this.getUserInfo();

    if (!this.userInfo || !this.userInfo.admin) throw new Error("Invalid user or not an admin");

    try {
      await this.fs.createDirectory("T:/AdminBootstrapper");
      await this.fs.mountDrive("admin", AdminFileSystem, "A", undefined, this.token);
    } catch {}
  }

  //#endregion

  async getUserInfo(): Promise<UserInfo | undefined> {
    if (this._disposed) return;

    this.Log("Getting user information");

    try {
      const response = await Backend.get(`/user/self`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      const data = response.status === 200 ? (response.data as UserInfo) : undefined;

      if (!data) return undefined;

      this.userInfo = data;

      return response.status === 200 ? (response.data as UserInfo) : undefined;
    } catch {
      await this.killSelf();

      return undefined;
    }
  }

  async mountUserDrive(username: string, driveLetter?: string, onProgress?: FilesystemProgressCallback) {
    if (this._disposed) return;

    try {
      return await this.fs.mountDrive(btoa(username), AdminServerDrive, driveLetter, onProgress, this.token, username);
    } catch {}
  }

  async mountAllUsers() {
    if (this._disposed) return;

    const users = await this.getAllUsers();

    for (const user of users) {
      await this.mountUserDrive(user.username);
    }
  }

  async getAllUsers(): Promise<ExpandedUserInfo[]> {
    if (this._disposed) return [];

    try {
      const response = await Backend.get("/admin/users/list", { headers: { Authorization: `Bearer ${this.token}` } });

      return (response.data as ExpandedUserInfo[]).map((u) => {
        u.profile.profilePicture = `${KernelServerUrl()}${u.profile.profilePicture}`;

        return u;
      });
    } catch {
      return [];
    }
  }

  async getUserByUsername(username: string): Promise<UserInfo | undefined> {
    if (this._disposed) return;

    const users = await this.getAllUsers();

    return users.filter((u) => u.username === username)[0];
  }

  async getServerLogs(): Promise<ServerLogItem[]> {
    if (this._disposed) return [];

    try {
      const response = await Backend.get("/admin/logs", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as ServerLogItem[];
    } catch {
      return [];
    }
  }

  async getAuditLog(): Promise<AuditLog[]> {
    if (this._disposed) return [];

    try {
      const response = await Backend.get("/admin/auditlog", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as AuditLog[];
    } catch {
      return [];
    }
  }

  async grantAdmin(username: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.post("/admin/grant", toForm({ target: username }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async revokeAdmin(username: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.post("/admin/revoke", toForm({ target: username }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getPreferencesOf(username: string) {
    if (this._disposed) return;
    try {
      const response = await Backend.get(`/admin/preferences/${username}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as UserPreferences;
    } catch {
      return undefined;
    }
  }

  async setPreferencesOf(username: string, preferences: UserPreferences) {
    if (this._disposed) return false;
    try {
      const response = await Backend.put(`/admin/preferences/${username}`, preferences, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async deleteUser(username: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.delete(`/admin/users/delete/${username}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getStatistics() {
    if (this._disposed) return;
    try {
      const response = await Backend.get(`/admin/stats`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as ServerStatistics;
    } catch {
      return undefined;
    }
  }

  async getAllTokens() {
    if (this._disposed) return [];
    try {
      const response = await Backend.get(`/admin/tokens`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as Token[];
    } catch {
      return [];
    }
  }

  async purgeAllTokens() {
    if (this._disposed) return false;
    try {
      const response = await Backend.delete(`/admin/tokens/purge/all`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      location.reload();

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async purgeOneToken(id: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.delete(`/admin/tokens/purge/one/${id}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async purgeUserTokens(userId: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.delete(`/admin/tokens/purge/user/${userId}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async deleteBugReport(reportId: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.delete(`/admin/bughunt/report/${reportId}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async closeBugReport(reportId: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.patch(
        `/admin/bughunt/close/${reportId}`,
        {},
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async reopenBugReport(reportId: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.patch(
        `/admin/bughunt/open/${reportId}`,
        {},
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getAllBugReports() {
    if (this._disposed) return [];
    try {
      const response = await Backend.get(`/admin/bughunt/list`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as BugReport[];
    } catch {
      return [];
    }
  }

  async getBugReport(id: string): Promise<BugReport | undefined> {
    if (this._disposed) return;
    try {
      const response = await Backend.get(`/bughunt/report/${id}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as BugReport;
    } catch {
      return undefined;
    }
  }

  async getBugHuntStatistics() {
    if (this._disposed) return;
    try {
      const response = await Backend.get(`/admin/bughunt/stats`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as ReportStatistics;
    } catch {
      return undefined;
    }
  }

  async approveUser(username: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.post(`/admin/users/approve`, toForm({ target: username }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async disapproveUser(username: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.post(`/admin/users/disapprove`, toForm({ target: username }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async changeEmailOf(username: string, newEmail: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.post(`/admin/users/changeemail`, toForm({ target: username, newEmail }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async changePasswordOf(username: string, newPassword: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.post(`/admin/users/changepswd`, toForm({ target: username, newPassword }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getAvailableScopes(): Promise<Record<string, string>> {
    if (this._disposed) return {};
    try {
      const response = await Backend.get(`/admin/scopes/available`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as Record<string, string>;
    } catch {
      return {};
    }
  }

  async getScopesOf(username: string): Promise<string[]> {
    if (this._disposed) return [];
    try {
      const response = await Backend.get(`/admin/scopes/${username}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as string[];
    } catch {
      return [];
    }
  }

  async setScopesOf(username: string, scopes: string[]): Promise<boolean> {
    if (this._disposed) return false;
    try {
      const response = await Backend.put(`/admin/scopes`, toForm({ target: username, scopes: JSON.stringify(scopes) }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getQuotaOf(username: string): Promise<UserQuota | undefined> {
    if (this._disposed) return;
    try {
      const response = await Backend.get(`/admin/fs/quota/${username}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as UserQuota;
    } catch {
      return undefined;
    }
  }

  async setQuotaOf(username: string, newQuota: number) {
    if (this._disposed) return false;
    try {
      const response = await Backend.put(`/admin/fs/quota/${username}`, toForm({ limit: newQuota }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getAllActivity(): Promise<Activity[]> {
    if (this._disposed) return [];
    try {
      const response = await Backend.get("/admin/activities/list", {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as Activity[];
    } catch {
      return [];
    }
  }

  async getActivityOf(username: string): Promise<Activity[]> {
    if (this._disposed) return [];
    try {
      const response = await Backend.get(`/admin/activities/user/${username}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as Activity[];
    } catch {
      return [];
    }
  }

  async deleteAllActivities(): Promise<boolean> {
    if (this._disposed) return false;
    try {
      const response = await Backend.delete(`/admin/activities`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async deleteActivitiesOf(username: string): Promise<boolean> {
    if (this._disposed) return false;
    try {
      const response = await Backend.delete(`/admin/activities/${username}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getAllTotp(): Promise<PartialUserTotp[]> {
    if (this._disposed) return [];
    try {
      const response = await Backend.get("/admin/totp", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as PartialUserTotp[];
    } catch {
      return [];
    }
  }

  async getTotpOf(username: string): Promise<UserTotp | undefined> {
    if (this._disposed) return;
    try {
      const response = await Backend.get(`/admin/totp/${username}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.status === 200 ? response.data : undefined;
    } catch {
      return undefined;
    }
  }

  async deActivateTotpOf(username: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.post(
        `/admin/totp/deactivate/${username}`,
        {},
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async deleteTotpOf(username: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.delete(`/admin/totp/${username}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getAllFsAccessors(): Promise<FsAccess[]> {
    if (this._disposed) return [];
    try {
      const response = await Backend.get("/admin/accessors", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as FsAccess[];
    } catch {
      return [];
    }
  }

  async getFsAccessorsOf(username: string): Promise<FsAccess[]> {
    if (this._disposed) return [];
    try {
      const response = await Backend.get(`/admin/accessors/${username}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data;
    } catch {
      return [];
    }
  }

  async deleteAllFsAccessors(): Promise<boolean> {
    if (this._disposed) return false;
    try {
      const response = await Backend.delete("/admin/accessors", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async deleteFsAccessorsOf(username: string): Promise<boolean> {
    if (this._disposed) return false;
    try {
      const response = await Backend.delete(`/admin/accessors/${username}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getAllIndexingNodes(): Promise<FSItem[]> {
    if (this._disposed) return [];
    try {
      const response = await Backend.get(`/admin/index`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as FSItem[];
    } catch {
      return [];
    }
  }

  async getIndexingNodesOf(username: string): Promise<FSItem[]> {
    if (this._disposed) return [];
    try {
      const response = await Backend.get(`/admin/index/${username}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as FSItem[];
    } catch {
      return [];
    }
  }

  async forceIndexFor(username: string): Promise<string[]> {
    if (this._disposed) return [];
    try {
      const response = await Backend.post(`/admin/index/${username}`, {}, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as string[];
    } catch {
      return [];
    }
  }

  async deleteIndexingOf(username: string): Promise<boolean> {
    if (this._disposed) return false;
    try {
      const response = await Backend.delete(`/admin/index/${username}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  canAccess(...scopes: string[]): boolean {
    if (this._disposed) return false;
    if (this.userInfo?.adminScopes?.includes(AdminScopes.adminGod)) return true;

    for (const scope of scopes) {
      if (!this.userInfo?.adminScopes.includes(scope)) return false;
    }

    return true;
  }

  canAccessP(provided: UserInfo, ...scopes: string[]) {
    if (this._disposed) return false;
    if (provided.adminScopes?.includes(AdminScopes.adminGod)) return true;

    for (const scope of scopes) {
      if (!provided.adminScopes?.includes(scope)) return false;
    }

    return true;
  }

  getMissingScopes(...scopes: string[]): string[] {
    if (this._disposed) return [];
    if (this.userInfo?.adminScopes?.includes(AdminScopes.adminGod)) return [];

    return scopes.filter((s) => !this.userInfo?.adminScopes?.includes(s));
  }

  async getAllShares(): Promise<SharedDriveType[]> {
    if (this._disposed) return [];
    try {
      const response = await Backend.get("/admin/share/list", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as SharedDriveType[];
    } catch {
      return [];
    }
  }

  async getSharesOf(userId: string): Promise<SharedDriveType[]> {
    if (this._disposed) return [];
    try {
      const response = await Backend.get(`/admin/share/list/${userId}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as SharedDriveType[];
    } catch {
      return [];
    }
  }

  async deleteShare(shareId: string): Promise<boolean> {
    if (this._disposed) return false;
    try {
      const response = await Backend.delete(`/admin/share/${shareId}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async kickUserFromShare(shareId: string, userId: string): Promise<boolean> {
    if (this._disposed) return false;
    try {
      const response = await Backend.post(`/admin/share/kick/${shareId}`, toForm({ userId }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async addUserToShare(shareId: string, userId: string): Promise<boolean> {
    if (this._disposed) return false;
    try {
      const response = await Backend.post(`/admin/share/adduser/${shareId}`, toForm({ userId }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getShareAccessors(shareId: string): Promise<FSItem[]> {
    if (this._disposed) return [];
    try {
      const response = await Backend.get(`/admin/share/accessors/${shareId}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as FSItem[];
    } catch {
      return [];
    }
  }

  async deleteShareAccessors(shareId: string): Promise<boolean> {
    if (this._disposed) return false;
    try {
      const response = await Backend.delete(`/admin/share/accessors/${shareId}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async changeSharePassword(shareId: string, newPassword: string): Promise<boolean> {
    if (this._disposed) return false;
    try {
      const response = await Backend.post(`/admin/share/changepswd/${shareId}`, toForm({ newPassword }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async renameShare(shareId: string, newName: string): Promise<boolean> {
    if (this._disposed) return false;
    try {
      const response = await Backend.post(`/admin/share/rename/${shareId}`, toForm({ newName }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async changeShareOwner(shareId: string, newUserId: string): Promise<boolean> {
    if (this._disposed) return false;
    try {
      const response = await Backend.post(`/admin/share/chown/${shareId}`, toForm({ newUserId }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getStatisticsOf(userId: string): Promise<UserStatistics | undefined> {
    if (this._disposed) return;
    try {
      const response = await Backend.get(`/admin/users/stats/${userId}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as UserStatistics;
    } catch {
      return undefined;
    }
  }

  async setShareQuotaOf(shareId: string, quota: number): Promise<boolean> {
    if (this._disposed) return false;
    try {
      const response = await Backend.put(`/admin/share/quota/${shareId}`, toForm({ limit: quota }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getShareQuotaOf(shareId: string): Promise<UserQuota | undefined> {
    if (this._disposed) return undefined;
    try {
      const response = await Backend.get(`/admin/share/quota/${shareId}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as UserQuota;
    } catch {
      return undefined;
    }
  }

  async unlockShare(shareId: string): Promise<boolean> {
    if (this._disposed) return false;
    try {
      const response = await Backend.post(
        `/admin/share/unlock/${shareId}`,
        {},
        { headers: { Authorization: `Bearer ${this.token}` } }
      );

      return response.status === 2000;
    } catch {
      return false;
    }
  }

  async lockShare(shareId: string): Promise<boolean> {
    if (this._disposed) return false;
    try {
      const response = await Backend.post(
        `/admin/share/lock/${shareId}`,
        {},
        { headers: { Authorization: `Bearer ${this.token}` } }
      );

      return response.status === 2000;
    } catch {
      return false;
    }
  }

  async deleteStoreItem(_id: string): Promise<boolean> {
    false;
    try {
      const response = await Backend.delete(`/admin/store/delete/one/${_id}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async deleteUserStoreItems(userId: string): Promise<boolean> {
    false;
    try {
      const response = await Backend.delete(`/admin/store/delete/user/${userId}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getAllStoreItems() {
    if (this._disposed) return [];
    try {
      const response = await Backend.get(`/admin/store/list`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as StoreItem[];
    } catch {
      return [];
    }
  }

  async getUserStoreItems(userId: string) {
    if (this._disposed) return [];
    try {
      const response = await Backend.get(`/admin/storel/list/${userId}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as StoreItem[];
    } catch {
      return [];
    }
  }

  async deprecatePackage(itemId: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.post(
        `/admin/store/deprecate/${itemId}`,
        {},
        { headers: { Authorization: `Bearer ${this.token}` } }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async undeprecatePackage(itemId: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.post(
        `/admin/store/undeprecate/${itemId}`,
        {},
        { headers: { Authorization: `Bearer ${this.token}` } }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getStoreItem(id: string): Promise<StoreItem | undefined> {
    if (this._disposed) return;
    try {
      const response = await Backend.get(`/store/package/id/${id}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as StoreItem;
    } catch {
      return undefined;
    }
  }

  async getStoreItemByName(name: string): Promise<StoreItem | undefined> {
    if (this._disposed) return;
    try {
      const response = await Backend.get(`/store/package/name/${name}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as StoreItem;
    } catch {
      return undefined;
    }
  }

  async blockStoreItem(id: string, reason?: string): Promise<boolean> {
    if (this._disposed) return false;
    const item = await this.getStoreItem(id);
    const messaging = this.host.getService<MessagingInterface>("MessagingService");

    if (!item || item.blocked) return false;

    if (messaging) {
      await messaging.sendMessage(
        `[ADMIN] Package has been blocked`,
        [item.user!.username],
        `Your package '${item.pkg.name}' (app ID \`${
          item.pkg.appId
        }\`) has been blocked by an administrator. This package is found to have copyrighted content, explicit depictions of sexual activity, or other inappropiate or illegal content.\n\nThe reason given by the administrator is:\n\n\`\`\`${
          reason || "(no reason given)"
        }\`\`\`\n\nReply to this message to negotiate to have your package unblocked.\n\nNOTE: this is an automatically generated message, sent by the ArcOS Admin Bootstrapper. The only input given by the administrator was the reason for this action (if any).`,
        []
      );
    }

    try {
      const response = await Backend.post(`/admin/store/block/${id}`, {}, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async unblockStoreItem(id: string, reason?: string) {
    if (this._disposed) return false;
    const item = await this.getStoreItem(id);
    const messaging = this.host.getService<MessagingInterface>("MessagingService");

    if (!item || !item.blocked) return false;

    if (messaging) {
      await messaging.sendMessage(
        `[ADMIN] Package has been unblocked!`,
        [item.user!.username],
        `Your package '${item.pkg.name}' (app ID \`${
          item.pkg.appId
        }\`) has been unblocked by an administrator, and can be installed by users again.\n\nThe reason given by the administrator is:\n\n\`\`\`${
          reason || "(no reason given)"
        }\`\`\`\n\nNOTE: this is an automatically generated message, sent by the ArcOS Admin Bootstrapper. The only input given by the administrator was the reason for this action (if any).`,
        []
      );
    }

    try {
      const response = await Backend.post(
        `/admin/store/unblock/${id}`,
        {},
        { headers: { Authorization: `Bearer ${this.token}` } }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async storeItemMakeOfficial(id: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.post(
        `/admin/store/official/on/${id}`,
        {},
        { headers: { Authorization: `Bearer ${this.token}` } }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async storeItemMakeNotOfficial(id: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.post(
        `/admin/store/official/off/${id}`,
        {},
        { headers: { Authorization: `Bearer ${this.token}` } }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async readStoreItemFiles(id: string, onProgress?: FilesystemProgressCallback, onStatus?: (s: string) => void) {
    if (this._disposed) return false;
    const target = `T:/AdminBootstrapper/${id}`;
    const pkg = await this.getStoreItem(id);
    const distrib = this.host.getService<DistributionServiceProcess>("DistribSvc");

    const status = (s: string) => {
      this.Log(`readStoreItemFiles: ${id}: ${s}`);
      onStatus?.(s);
    };

    if (!pkg || !distrib) {
      return false;
    }

    status("Downloading store item");

    const content = await distrib.downloadStoreItem(id, onProgress);

    if (!content) {
      return false;
    }

    const zip = new JSZip();
    const buffer = await zip.loadAsync(content, {});

    if (!buffer.files["_metadata.json"] || !buffer.files["payload/_app.tpa"]) {
      return false;
    }

    const metaBinary = await buffer.files["_metadata.json"].async("arraybuffer");
    const metadata = tryJsonParse<ArcPackage>(arrayToText(metaBinary));

    if (!metadata || typeof metadata === "string") return false;
    if (metadata.appId.includes(".") || metadata.appId.includes("-")) return false;

    status("Creating target directory");

    try {
      await this.fs.createDirectory(target);
      await this.fs.createDirectory(`${target}/payload`);
    } catch {}

    const sortedPaths = Object.keys(buffer.files).sort((p) => (buffer.files[p].dir ? -1 : 0));

    for (const path of sortedPaths) {
      const item = buffer.files[path];
      const pathTarget = join(target, path);
      if (item.dir) {
        status(`Creating dir ${pathTarget}`);

        try {
          await this.fs.createDirectory(pathTarget);
        } catch {}
      }
    }

    for (const path of sortedPaths) {
      const item = buffer.files[path];
      const pathTarget = join(target, path);
      if (!item.dir) {
        status(`Writing file ${pathTarget}`);

        try {
          await this.fs.writeFile(pathTarget, arrayToBlob(await item.async("arraybuffer"), fromExtension(pathTarget)));
        } catch {}
      }
    }

    return target;
  }

  async deleteStoreItemVerification(id: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.delete(`/admin/store/verification/${id}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async verifyStoreItem(id: string, note: string) {
    if (this._disposed) return false;
    try {
      const response = await Backend.post(`/admin/store/verification/${id}`, toForm({ note }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      if (response.status !== 200) {
        return false;
      }

      await this.fs.createDirectory(join(UserPaths.Documents, `AdminBootstrapper`));
      await this.fs.writeFile(
        join(UserPaths.Documents, `AdminBootstrapper/Verification_${id}_${Date.now()}.txt`),
        textToBlob(note)
      );

      return true;
    } catch {
      return false;
    }
  }
}

export const adminService: Service = {
  initialState: "started",
  name: "Admin Bootstrapper",
  description: "Handles administrator interactions",
  process: AdminBootstrapper,
  startCondition: (daemon) => daemon.userInfo?.admin,
};
