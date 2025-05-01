import { toForm } from "$ts/form";
import { AdminServerDrive } from "$ts/fs/drives/admin";
import type { ProcessHandler } from "$ts/process/handler";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
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
import type { Service } from "$types/service";
import type { SharedDriveType } from "$types/shares";
import type { ExpandedUserInfo, UserInfo, UserPreferences } from "$types/user";
import { Axios } from "../axios";

export class AdminBootstrapper extends BaseService {
  private token: string | undefined;
  private availableScopes: Record<string, string> = {};
  private userInfo: UserInfo | undefined;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(handler, pid, parentPid, name, host);
  }

  async activate(token: string) {
    this.token = token;
  }

  async afterActivate() {
    await this.getUserInfo();

    if (!this.userInfo || !this.userInfo.admin) throw new Error("Invalid user or not an admin");

    this.availableScopes = await this.getAvailableScopes();
  }

  async getUserInfo(): Promise<UserInfo | undefined> {
    if (this._disposed) return;

    this.Log("Getting user information");

    try {
      const response = await Axios.get(`/user/self`, {
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
    await this.fs.mountDrive(btoa(username), AdminServerDrive, driveLetter, onProgress, this.token, username);
  }

  async mountAllUsers() {
    const users = await this.getAllUsers();

    for (const user of users) {
      await this.mountUserDrive(user.username);
    }
  }

  async getAllUsers(): Promise<ExpandedUserInfo[]> {
    try {
      const response = await Axios.get("/admin/users/list", { headers: { Authorization: `Bearer ${this.token}` } });

      return (response.data as ExpandedUserInfo[]).map((u) => {
        u.profile.profilePicture = `${import.meta.env.DW_SERVER_URL}${u.profile.profilePicture}`;

        return u;
      });
    } catch {
      return [];
    }
  }

  async getUserByUsername(username: string): Promise<UserInfo | undefined> {
    const users = await this.getAllUsers();

    return users.filter((u) => u.username === username)[0];
  }

  async getServerLogs(): Promise<ServerLogItem[]> {
    try {
      const response = await Axios.get("/admin/logs", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as ServerLogItem[];
    } catch {
      return [];
    }
  }

  async getAuditLog(): Promise<AuditLog[]> {
    try {
      const response = await Axios.get("/admin/auditlog", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as AuditLog[];
    } catch {
      return [];
    }
  }

  async grantAdmin(username: string) {
    try {
      const response = await Axios.post("/admin/grant", toForm({ target: username }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async revokeAdmin(username: string) {
    try {
      const response = await Axios.post("/admin/revoke", toForm({ target: username }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getPreferencesOf(username: string) {
    try {
      const response = await Axios.get(`/admin/preferences/${username}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as UserPreferences;
    } catch {
      return undefined;
    }
  }

  async setPreferencesOf(username: string, preferences: UserPreferences) {
    try {
      const response = await Axios.put(`/admin/preferences/${username}`, preferences, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async deleteUser(username: string) {
    try {
      const response = await Axios.delete(`/admin/users/delete/${username}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getStatistics() {
    try {
      const response = await Axios.get(`/admin/stats`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as ServerStatistics;
    } catch {
      return undefined;
    }
  }

  async getAllTokens() {
    try {
      const response = await Axios.get(`/admin/tokens`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as Token[];
    } catch {
      return [];
    }
  }

  async purgeAllTokens() {
    try {
      const response = await Axios.delete(`/admin/tokens/purge/all`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      location.reload();

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async purgeOneToken(id: string) {
    try {
      const response = await Axios.delete(`/admin/tokens/purge/one/${id}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async purgeUserTokens(userId: string) {
    try {
      const response = await Axios.delete(`/admin/tokens/purge/user/${userId}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async deleteBugReport(reportId: string) {
    try {
      const response = await Axios.delete(`/admin/bughunt/report/${reportId}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async closeBugReport(reportId: string) {
    try {
      const response = await Axios.patch(
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
    try {
      const response = await Axios.patch(
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
    try {
      const response = await Axios.get(`/admin/bughunt/list`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as BugReport[];
    } catch {
      return [];
    }
  }

  async getBugReport(id: string): Promise<BugReport | undefined> {
    try {
      const response = await Axios.get(`/bughunt/report/${id}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as BugReport;
    } catch {
      return undefined;
    }
  }

  async getBugHuntStatistics() {
    try {
      const response = await Axios.get(`/admin/bughunt/stats`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as ReportStatistics;
    } catch {
      return undefined;
    }
  }

  async approveUser(username: string) {
    try {
      const response = await Axios.post(`/admin/users/approve`, toForm({ target: username }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async disapproveUser(username: string) {
    try {
      const response = await Axios.post(`/admin/users/disapprove`, toForm({ target: username }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async changeEmailOf(username: string, newEmail: string) {
    try {
      const response = await Axios.post(`/admin/users/changeemail`, toForm({ target: username, newEmail }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async changePasswordOf(username: string, newPassword: string) {
    try {
      const response = await Axios.post(`/admin/users/changepswd`, toForm({ target: username, newPassword }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getAvailableScopes(): Promise<Record<string, string>> {
    try {
      const response = await Axios.get(`/admin/scopes/available`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as Record<string, string>;
    } catch {
      return {};
    }
  }

  async getScopesOf(username: string): Promise<string[]> {
    try {
      const response = await Axios.get(`/admin/scopes/${username}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as string[];
    } catch {
      return [];
    }
  }

  async setScopesOf(username: string, scopes: string[]): Promise<boolean> {
    try {
      const response = await Axios.put(`/admin/scopes`, toForm({ target: username, scopes: JSON.stringify(scopes) }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getQuotaOf(username: string): Promise<UserQuota | undefined> {
    try {
      const response = await Axios.get(`/admin/fs/quota/${username}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as UserQuota;
    } catch {
      return undefined;
    }
  }

  async setQuotaOf(username: string, newQuota: number) {
    try {
      const response = await Axios.put(`/admin/fs/quota/${username}`, toForm({ limit: newQuota }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getAllActivity(): Promise<Activity[]> {
    try {
      const response = await Axios.get("/admin/activities/list", {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as Activity[];
    } catch {
      return [];
    }
  }

  async getActivityOf(username: string): Promise<Activity[]> {
    try {
      const response = await Axios.get(`/admin/activities/user/${username}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as Activity[];
    } catch {
      return [];
    }
  }

  async deleteAllActivities(): Promise<boolean> {
    try {
      const response = await Axios.delete(`/admin/activities`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async deleteActivitiesOf(username: string): Promise<boolean> {
    try {
      const response = await Axios.delete(`/admin/activities/${username}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getAllTotp(): Promise<PartialUserTotp[]> {
    try {
      const response = await Axios.get("/admin/totp", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as PartialUserTotp[];
    } catch {
      return [];
    }
  }

  async getTotpOf(username: string): Promise<UserTotp | undefined> {
    try {
      const response = await Axios.get(`/admin/totp/${username}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.status === 200 ? response.data : undefined;
    } catch {
      return undefined;
    }
  }

  async deActivateTotpOf(username: string) {
    try {
      const response = await Axios.post(
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
    try {
      const response = await Axios.delete(`/admin/totp/${username}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getAllFsAccessors(): Promise<FsAccess[]> {
    try {
      const response = await Axios.get("/admin/accessors", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as FsAccess[];
    } catch {
      return [];
    }
  }

  async getFsAccessorsOf(username: string): Promise<FsAccess[]> {
    try {
      const response = await Axios.get(`/admin/accessors/${username}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data;
    } catch {
      return [];
    }
  }

  async deleteAllFsAccessors(): Promise<boolean> {
    try {
      const response = await Axios.delete("/admin/accessors", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async deleteFsAccessorsOf(username: string): Promise<boolean> {
    try {
      const response = await Axios.delete(`/admin/accessors/${username}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getAllIndexingNodes(): Promise<FSItem[]> {
    try {
      const response = await Axios.get(`/admin/index`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as FSItem[];
    } catch {
      return [];
    }
  }

  async getIndexingNodesOf(username: string): Promise<FSItem[]> {
    try {
      const response = await Axios.get(`/admin/index/${username}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as FSItem[];
    } catch {
      return [];
    }
  }

  async forceIndexFor(username: string): Promise<string[]> {
    try {
      const response = await Axios.post(`/admin/index/${username}`, {}, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as string[];
    } catch {
      return [];
    }
  }

  async deleteIndexingOf(username: string): Promise<boolean> {
    try {
      const response = await Axios.delete(`/admin/index/${username}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  canAccess(...scopes: string[]): boolean {
    if (this.userInfo?.adminScopes?.includes("admin.god")) return true;

    for (const scope of scopes) {
      if (!this.userInfo?.adminScopes.includes(scope)) return false;
    }

    return true;
  }

  getMissingScopes(...scopes: string[]): string[] {
    if (this.userInfo?.adminScopes?.includes("admin.god")) return [];

    return scopes.filter((s) => !this.userInfo?.adminScopes?.includes(s));
  }

  async getAllShares(): Promise<SharedDriveType[]> {
    try {
      const response = await Axios.get("/admin/share/list", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as SharedDriveType[];
    } catch {
      return [];
    }
  }

  async getSharesOf(userId: string): Promise<SharedDriveType[]> {
    try {
      const response = await Axios.get(`/admin/share/list/${userId}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as SharedDriveType[];
    } catch {
      return [];
    }
  }

  async deleteShare(shareId: string): Promise<boolean> {
    try {
      const response = await Axios.delete(`/admin/share/${shareId}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async kickUserFromShare(shareId: string, userId: string): Promise<boolean> {
    try {
      const response = await Axios.post(`/admin/share/kick/${shareId}`, toForm({ userId }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async addUserToShare(shareId: string, userId: string): Promise<boolean> {
    try {
      const response = await Axios.post(`/admin/share/adduser/${shareId}`, toForm({ userId }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getShareAccessors(shareId: string): Promise<FSItem[]> {
    try {
      const response = await Axios.get(`/admin/share/accessors/${shareId}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as FSItem[];
    } catch {
      return [];
    }
  }

  async deleteShareAccessors(shareId: string): Promise<boolean> {
    try {
      const response = await Axios.delete(`/admin/share/accessors/${shareId}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async changeSharePassword(shareId: string, newPassword: string): Promise<boolean> {
    try {
      const response = await Axios.post(`/admin/share/changepswd/${shareId}`, toForm({ newPassword }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async renameShare(shareId: string, newName: string): Promise<boolean> {
    try {
      const response = await Axios.post(`/admin/share/rename/${shareId}`, toForm({ newName }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async changeShareOwner(shareId: string, newUserId: string): Promise<boolean> {
    try {
      const response = await Axios.post(`/admin/share/chown/${shareId}`, toForm({ newUserId }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getStatisticsOf(userId: string): Promise<UserStatistics | undefined> {
    try {
      const response = await Axios.get(`/admin/users/stats/${userId}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as UserStatistics;
    } catch {
      return undefined;
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
