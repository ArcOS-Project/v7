import { FileManagerRuntime } from "$apps/user/filemanager/runtime";
import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { FilesystemDrive } from "$ts/fs/drive";
import type { ShareManager } from "$ts/fs/shares";
import { SharedDrive } from "$ts/fs/shares/drive";
import { ErrorIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class ShareConnGuiRuntime extends AppProcess {
  shareUsername = Store<string>();
  shareName = Store<string>();
  sharePassword = Store<string>();
  shares: ShareManager;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);

    this.shares = this.userDaemon?.shares!;
  }

  async go() {
    const result = await this.shares.joinShare(this.shareUsername(), this.shareName(), this.sharePassword(), true);

    if (!result) {
      MessageBox(
        {
          title: "Failed to join share",
          message:
            "ArcOS failed to add you to the requested share. Please check the information you entered, and then try again. If the problem persists, ask the owner of the share for new credentials.",
          buttons: [{ caption: "Okay", suggested: true, action: () => {} }],
          image: ErrorIcon,
          sound: "arcos.dialog.error",
        },
        this.parentPid,
        true
      );

      return;
    }

    if (result instanceof SharedDrive) {
      const path = `${result.uuid}:/`;
      const parent = this.handler.getProcess(this.parentPid);

      if (parent && parent instanceof FileManagerRuntime) {
        const dispatch = this.handler.ConnectDispatch(this.parentPid);
        dispatch?.dispatch("navigate", path);
      } else {
        this.spawnApp("fileManager", +this.env.get("shell_pid"), path);
      }

      this.userPreferences.update((v) => {
        v.startup ||= {};
        v.startup[result.shareId!] = "share";
        return v;
      });
    }

    this.closeWindow();
  }
}
