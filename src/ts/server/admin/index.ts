import { toForm } from "$ts/form";
import { AdminServerDrive } from "$ts/fs/drives/admin";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import type { AuditLog, ServerLogItem, ServerStatistics, Token } from "$types/admin";
import type { BugReport, ReportStatistics } from "$types/bughunt";
import type { FilesystemProgressCallback, UserQuota } from "$types/fs";
import type { UserInfo, UserPreferences } from "$types/user";
import { Axios } from "../axios";

export class AdminBootstrapper extends Process {
  private token: string;
  private userInfo: UserInfo | undefined;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, token: string) {
    super(handler, pid, parentPid);
    this.token = token;
  }

  async start() {
    await this.getUserInfo();

    if (!this.userInfo || !this.userInfo.admin) throw new Error("Invalid user or not an admin");
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

  async getAllUsers(): Promise<UserInfo[]> {
    try {
      const response = await Axios.get("/admin/users/list", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as UserInfo[];
    } catch {
      return [];
    }
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

  async changeUserPassword(username: string, newPassword: string) {
    try {
      const response = await Axios.post(
        `/admin/users/changepswd`,
        { target: username, newPassword },
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );

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
      const response = await Axios.patch(`/admin/bughunt/close/${reportId}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async reopenBugReport(reportId: string) {
    try {
      const response = await Axios.patch(`/admin/bughunt/open/${reportId}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

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
}
