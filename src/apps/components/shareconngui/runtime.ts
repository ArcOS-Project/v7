import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { KernelStack } from "$ts/env";
import type { ShareManager } from "$ts/shares";
import { SharedDrive } from "$ts/shares/drive";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class ShareConnGuiRuntime extends AppProcess {
  shareUsername = Store<string>();
  shareName = Store<string>();
  sharePassword = Store<string>();
  shares: ShareManager;

  //#region LIFECYCLE
  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.shares = this.userDaemon?.serviceHost?.getService("ShareMgmt")!; // Get the share management service

    this.setSource(__SOURCE__);
  }

  //#endregion
  //#region MASTER

  async go() {
    // Join the share
    const result = await this.shares.joinShare(this.shareUsername(), this.shareName(), this.sharePassword(), true);

    // Join failed?
    if (!result) {
      MessageBox(
        {
          title: "Failed to join share",
          message:
            "ArcOS failed to add you to the requested share. Please check the information you entered, and then try again. If the problem persists, ask the owner of the share for new credentials.",
          buttons: [{ caption: "Okay", suggested: true, action: () => {} }],
          image: "ErrorIcon",
          sound: "arcos.dialog.error",
        },
        this.parentPid,
        true
      );

      return;
    }

    if (result instanceof SharedDrive) {
      const path = `${result.uuid}:/`;
      const parent = KernelStack().getProcess(this.parentPid);

      if (parent && this.userDaemon?.ParentIs(this, "fileManager")) {
        // Is the parent a file manager? Then navigate it instead of spawning one
        const dispatch = KernelStack().ConnectDispatch(this.parentPid);
        dispatch?.dispatch("navigate", path);
      } else {
        // Spawn a file manager instead
        this.spawnApp("fileManager", +this.env.get("shell_pid"), path);
      }

      this.userPreferences.update((v) => {
        v.startup ||= {}; // In case startup doesn't exist, should not ever happen tho
        v.startup[result.shareId!] = "share"; // Make sure the share mounts on login
        return v;
      });
    }

    this.closeWindow(); // Finally close the conngui
  }

  async myShares() {
    await this.closeWindow(); // Close the conngui
    this.spawnOverlayApp("ShareListGui", this.parentPid); // Spawn the listgui
  }

  //#endregion
}
