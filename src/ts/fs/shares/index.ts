import { toForm } from "$ts/form";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import { Axios } from "$ts/server/axios";
import type { UserDaemon } from "$ts/server/user/daemon";
import type { FilesystemProgressCallback } from "$types/fs";
import type { SharedDriveType } from "$types/shares";
import { SharedDrive } from "./drive";

export class ShareManager extends Process {
  token: string;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, token: string) {
    super(handler, pid, parentPid);

    this.token = token;
  }

  async getOwnedShares(): Promise<SharedDriveType[]> {
    try {
      const response = await Axios.get("/share/owned", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as SharedDriveType[];
    } catch {
      return [];
    }
  }

  async getJoinedShares(): Promise<SharedDriveType[]> {
    try {
      const response = await Axios.get("/share/joined", { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as SharedDriveType[];
    } catch {
      return [];
    }
  }

  async createShare(name: string, password: string): Promise<SharedDriveType | undefined> {
    try {
      const response = await Axios.post("/share", toForm({ name, password }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as SharedDriveType;
    } catch {
      return undefined;
    }
  }

  async deleteShare(shareId: string) {
    try {
      const response = await Axios.delete(`/share/${shareId}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async changeSharePassword(shareId: string, newPassword: string): Promise<boolean> {
    try {
      const response = await Axios.post(`/share/changepswd/${shareId}`, toForm({ newPassword }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async renameShare(shareId: string, newName: string): Promise<boolean> {
    try {
      const response = await Axios.post(`/share/rename/${shareId}`, toForm({ newName }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async joinShare(username: string, shareName: string, password: string) {
    try {
      const response = await Axios.post(`/share/join/${username}/${shareName}`, toForm({ password }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async leaveShare(shareId: string): Promise<boolean> {
    await this.unmountIfMounted(shareId);

    try {
      const response = await Axios.post(`/share/leave/${shareId}`, {}, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async unmountIfMounted(shareId: string) {
    if (!this.fs.drives[shareId]) return;

    await this.fs.umountDrive(shareId, true);
  }

  async kickUserFromShare(shareId: string, userId: string): Promise<boolean> {
    try {
      const response = await Axios.post(`/share/kick/${shareId}`, toForm({ userId }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async mountShare(shareId: string, letter?: string, onProgress?: FilesystemProgressCallback) {
    const joinedShares = await this.getJoinedShares();
    const ownedShares = await this.getOwnedShares();
    const targetedJoinedShare = joinedShares.filter((s) => s._id === shareId)[0];
    const targetedOwnedShare = ownedShares.filter((s) => s._id === shareId)[0];
    const targetedShare = targetedJoinedShare || targetedOwnedShare;

    if (!targetedShare) return false;

    return await this.fs.mountDrive(shareId, SharedDrive, letter, onProgress, shareId, this.token);
  }
}
