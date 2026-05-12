import type { IServiceHost } from "$interfaces/IServiceHost";
import type { IShareConnector } from "$interfaces/modules/server/IShareConnector";
import type { IShareManager } from "$interfaces/services/IShareManager";
import { Daemon, Fs } from "$ts/env";
import { SharedDrive } from "$ts/kernel/mods/fs/drives/share";
import { Backend } from "$ts/kernel/mods/server/axios";
import { BaseService } from "$ts/servicehost/base";
import type { FilesystemProgressCallback } from "$types/fs";
import type { Service } from "$types/service";
import type { SharedDriveType } from "$types/shares";

export class ShareManager extends BaseService implements IShareManager {
  //#region LIFECYCLE

  private get ShareConnector() {
    return this.GetConnector<IShareConnector>("ShareConnector");
  }

  constructor(pid: number, parentPid: number, name: string, host: IServiceHost) {
    super(pid, parentPid, name, host);

    this.setSource(__SOURCE__);
  }

  protected async start(): Promise<any> {
    this.initBroadcast?.("Mounting your shares");
    this.mountOwnedShares();
  }

  //#endregion

  async getOwnedShares(): Promise<SharedDriveType[]> {
    return (await this.ShareConnector.OwnedGet()).result ?? [];
  }

  async mountOwnedShares() {
    const shares = await this.getOwnedShares();

    for (const share of shares) {
      await this.mountShareById(share._id);
    }
  }

  async getJoinedShares(): Promise<SharedDriveType[]> {
    return (await this.ShareConnector.JoinedGet()).result ?? [];
  }

  async createShare(name: string, password: string): Promise<SharedDriveType | undefined> {
    return (await this.ShareConnector.Create(name, password)).result;
  }

  async deleteShare(shareId: string) {
    return (await this.ShareConnector.Delete(shareId)).success;
  }

  async changeSharePassword(shareId: string, newPassword: string): Promise<boolean> {
    return (await this.ShareConnector.ChangePswdPost(shareId, newPassword)).success;
  }

  async renameShare(shareId: string, newName: string): Promise<boolean> {
    return (await this.ShareConnector.RenamePost(shareId, newName)).success;
  }

  async joinShare(username: string, shareName: string, password: string, mountAlso = false) {
    const result = await this.ShareConnector.JoinPost(username, shareName, password);

    if (!result.success) return false;
    if (!mountAlso) return true;

    return await this.mountShare(username, shareName);
  }

  async leaveShare(shareId: string): Promise<boolean> {
    return (await this.ShareConnector.LeavePost(shareId)).success;
  }

  async unmountIfMounted(shareId: string) {
    if (!Fs.drives[shareId]) return;

    await Fs.umountDrive(shareId, true);
  }

  async kickUserFromShare(shareId: string, userId: string): Promise<boolean> {
    return (await this.ShareConnector.KickPost(shareId, userId)).success;
  }

  async mountShare(username: string, shareName: string, letter?: string, onProgress?: FilesystemProgressCallback) {
    const info = await this.getShareInfoByName(username, shareName);

    if (!info) return false;

    try {
      return await Fs.mountDrive(info._id, SharedDrive, letter, onProgress, info);
    } catch {}
  }

  async mountShareById(shareId: string, letter?: string, onProgress?: FilesystemProgressCallback) {
    const info = await this.getShareInfoById(shareId);
    if (!info) return false;

    // Don't bother calling mountDrive if the drive is already mounted
    const mounted = Fs.getDriveById(shareId);
    if (mounted) return false;

    try {
      return await Fs.mountDrive(shareId, SharedDrive, letter, onProgress, info);
    } catch {
      return false;
    }
  }

  async getShareMembers(shareId: string): Promise<Record<string, string>> {
    return (await this.ShareConnector.MembersGet(shareId)).result ?? {};
  }

  async getShareInfoByName(username: string, shareName: string): Promise<SharedDriveType | undefined> {
    return (await this.ShareConnector.InfoByName(username, shareName)).result;
  }

  async getShareInfoById(shareId: string): Promise<SharedDriveType | undefined> {
    return (await this.ShareConnector.InfoById(shareId)).result;
  }
}

export const shareService: Service = {
  name: "Share management",
  description: "Host process for shared drives",
  process: ShareManager,
  initialState: "started",
};
