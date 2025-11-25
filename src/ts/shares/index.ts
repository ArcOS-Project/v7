import { Fs } from "$ts/env";
import { toForm } from "$ts/form";
import { Backend } from "$ts/server/axios";
import { Daemon } from "$ts/server/user/daemon";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import type { FilesystemProgressCallback } from "$types/fs";
import type { Service } from "$types/service";
import type { SharedDriveType } from "$types/shares";
import { SharedDrive } from "./drive";

export class ShareManager extends BaseService {
  token: string | undefined;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(pid, parentPid, name, host);

    this.token = Daemon!.token;

    this.setSource(__SOURCE__);
  }

  //#endregion

  async getOwnedShares(): Promise<SharedDriveType[]> {
    try {
      const response = await Backend.get("/share/owned", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as SharedDriveType[];
    } catch {
      return [];
    }
  }

  async mountOwnedShares() {
    const shares = await this.getOwnedShares();

    for (const share of shares) {
      await this.mountShareById(share._id);
    }
  }

  async getJoinedShares(): Promise<SharedDriveType[]> {
    try {
      const response = await Backend.get("/share/joined", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as SharedDriveType[];
    } catch {
      return [];
    }
  }

  async createShare(name: string, password: string): Promise<SharedDriveType | undefined> {
    try {
      const response = await Backend.post("/share", toForm({ name, password }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as SharedDriveType;
    } catch {
      return undefined;
    }
  }

  async deleteShare(shareId: string) {
    try {
      const response = await Backend.delete(`/share/${shareId}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async changeSharePassword(shareId: string, newPassword: string): Promise<boolean> {
    try {
      const response = await Backend.post(`/share/changepswd/${shareId}`, toForm({ newPassword }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async renameShare(shareId: string, newName: string): Promise<boolean> {
    try {
      const response = await Backend.post(`/share/rename/${shareId}`, toForm({ newName }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async joinShare(username: string, shareName: string, password: string, mountAlso = false) {
    try {
      const response = await Backend.post(`/share/join/${username}/${shareName}`, toForm({ password }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      if (response.status !== 200) return false;
      if (!mountAlso) return true;

      const drive = await this.mountShare(username, shareName);

      return drive;
    } catch {
      return false;
    }
  }

  async leaveShare(shareId: string): Promise<boolean> {
    await this.unmountIfMounted(shareId);

    try {
      const response = await Backend.post(`/share/leave/${shareId}`, {}, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async unmountIfMounted(shareId: string) {
    if (!Fs.drives[shareId]) return;

    await Fs.umountDrive(shareId, true);
  }

  async kickUserFromShare(shareId: string, userId: string): Promise<boolean> {
    try {
      const response = await Backend.post(`/share/kick/${shareId}`, toForm({ userId }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async mountShare(username: string, shareName: string, letter?: string, onProgress?: FilesystemProgressCallback) {
    const info = await this.getShareInfoByName(username, shareName);

    if (!info) return false;

    try {
      return await Fs.mountDrive(info._id, SharedDrive, letter, onProgress, info, this.token);
    } catch {}
  }

  async mountShareById(shareId: string, letter?: string, onProgress?: FilesystemProgressCallback) {
    const info = await this.getShareInfoById(shareId);

    if (!info) return false;

    try {
      return await Fs.mountDrive(shareId, SharedDrive, letter, onProgress, info, this.token);
    } catch {
      return false;
    }
  }

  async getShareMembers(shareId: string): Promise<Record<string, string>> {
    try {
      const response = await Backend.get(`/share/members/${shareId}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as Record<string, string>;
    } catch {
      return {};
    }
  }

  async getShareInfoByName(username: string, shareName: string): Promise<SharedDriveType | undefined> {
    try {
      const response = await Backend.get(`/share/info/byname/${username}/${shareName}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200 ? (response.data as SharedDriveType) : undefined;
    } catch {
      return undefined;
    }
  }

  async getShareInfoById(shareId: string): Promise<SharedDriveType | undefined> {
    try {
      const response = await Backend.get(`/share/info/byid/${shareId}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200 ? (response.data as SharedDriveType) : undefined;
    } catch {
      return undefined;
    }
  }
}

export const shareService: Service = {
  name: "Share management",
  description: "Host process for shared drives",
  process: ShareManager,
  initialState: "started",
};
