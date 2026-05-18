import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/daemon";
import { Fs } from "$ts/env";
import type { ShareManager } from "$ts/servicehost/services/ShareMgmt";
import { MessageBox } from "$ts/util/dialog";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/app";
import type { SharedDriveType } from "$types/shares";
import { ChangePasswordApp } from "./overlays/changepassword";
import { RenameShareApp } from "./overlays/renameShare";

export class ShareMgmtGuiRuntime extends AppProcess {
  members = Store<Record<string, string>>({});
  info: SharedDriveType | undefined;
  shares: ShareManager;
  shareId: string;
  selectedMember = Store<string>("");
  myShare = false;

  protected overlayStore: Record<string, App> = {
    changePassword: ChangePasswordApp,
    renameShare: RenameShareApp,
  };

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, shareId: string) {
    super(pid, parentPid, app);

    this.shareId = shareId;
    this.shares = Daemon?.serviceHost?.getService("ShareMgmt")!;

    this.setSource(__SOURCE__);
  }

  async start(): Promise<any> {
    const { stop } = await Daemon.helpers?.GlobalLoadIndicator("Probing share information...")!;

    this.info = await this.shares.getShareInfoById(this.shareId);

    if (!this.info) {
      stop();
      return false;
    }

    this.myShare = Daemon?.userInfo._id === this.info.userId; // Compare user IDs to see if the share is own

    await this.updateMembers();
    stop();
  }

  //#endregion
  //#region ACTIONS

  async updateMembers() {
    this.Log(`updateMembers`);

    this.members.set(await this.shares.getShareMembers(this.shareId));
  }

  async kickUser(id: string, username: string) {
    this.Log(`kickUser: ${id} (${username})`);
    MessageBox(
      {
        title: `Kick '${username}'?`,
        message:
          "Are you sure you want to remove this person from the share? They can still access it if they know the credentials.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Kick user",
            action: async () => {
              await this.shares.kickUserFromShare(this.shareId, id); // First kick the user
              await this.updateMembers(); // Then update the member list
            },
            suggested: true,
          },
        ],
        image: "QuestionIcon",
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  async deleteShare() {
    this.Log(`deleteShare`);

    MessageBox(
      {
        title: "Delete share?",
        message:
          "Are you sure you want to delete this share? All files you have on the share will be deleted. This cannot be undone.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Delete share",
            action: async () => {
              this.closeWindow(); // First close the mgmtgui
              await Fs.umountDrive(this.shareId); // Then unmount the share
              await this.shares.deleteShare(this.shareId); // And finally delete the share
            },
            suggested: true,
          },
        ],
        image: "TrashIcon",
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  //#endregion
}
