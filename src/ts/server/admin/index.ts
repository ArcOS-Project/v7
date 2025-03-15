import { AdminServerDrive } from "$ts/fs/drives/admin";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import type { FilesystemProgressCallback } from "$types/fs";
import type { UserInfo } from "$types/user";
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
}
