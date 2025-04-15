import { FileManagerRuntime } from "$apps/user/filemanager/runtime";
import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import type { ShareManager } from "$ts/fs/shares";
import { ErrorIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class ShareCreateGuiRuntime extends AppProcess {
  shareName = Store<string>();
  sharePassword = Store<string>();
  shares: ShareManager;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);

    this.shares = this.userDaemon?.serviceHost?.getService("ShareMgmt")!;
  }

  async go() {
    const name = this.shareName();
    const password = this.sharePassword();

    if (!name || !password) return;

    const result = await this.shares.createShare(name, password);

    if (!result) {
      MessageBox(
        {
          title: "Failed to create share",
          message:
            "ArcOS was unable to create the share you requested. You might already have the maximum amount of shares in your account.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: ErrorIcon,
          sound: "arcos.dialog.error",
        },
        this.pid,
        true
      );

      return;
    }

    const drive = await this.shares.mountShareById(result._id);

    if (!drive) return;

    const path = `${drive.uuid}:/`;
    const parent = this.handler.getProcess(this.parentPid);

    if (parent && parent instanceof FileManagerRuntime) {
      const dispatch = this.handler.ConnectDispatch(this.parentPid);
      dispatch?.dispatch("navigate", path);
    } else {
      this.spawnApp("fileManager", +this.env.get("shell_pid"), path);
    }

    this.closeWindow();
  }

  async myShares() {
    await this.closeWindow();
    this.spawnOverlayApp("ShareListGui", this.parentPid);
  }
}
