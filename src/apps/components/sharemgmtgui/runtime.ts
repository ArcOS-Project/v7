import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import type { ShareManager } from "$ts/fs/shares";
import { QuestionIcon } from "$ts/images/dialog";
import { TrashIcon } from "$ts/images/general";
import type { ProcessHandler } from "$ts/process/handler";
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

  //#region ELCYCEFIL

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, shareId: string) {
    super(handler, pid, parentPid, app);

    this.shareId = shareId;
    this.shares = this.userDaemon?.serviceHost?.getService("ShareMgmt")!;
  }

  async start(): Promise<any> {
    this.info = await this.shares.getShareInfoById(this.shareId);

    if (!this.info) return false;
    this.myShare = this.userDaemon?.userInfo._id === this.info.userId; // Compare user IDs to see if the share is own

    await this.updateMembers();
  }

  //#endregion
  //#region ACTIONS

  async updateMembers() {
    this.members.set(await this.shares.getShareMembers(this.shareId));
  }

  async kickUser(id: string, username: string) {
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
        image: QuestionIcon,
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  async deleteShare() {
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
              await this.fs.umountDrive(this.shareId); // Then unmount the share
              await this.shares.deleteShare(this.shareId); // And finally delete the share
            },
            suggested: true,
          },
        ],
        image: TrashIcon,
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  //#endregion
}
