import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import type { ShareManager } from "$ts/shares";
import type { SharedDrive } from "$ts/shares/drive";
import { WarningIcon } from "$ts/images/dialog";
import { ShareIcon } from "$ts/images/filesystem";
import { KernelStack } from "$ts/env";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { SharedDriveType } from "$types/shares";

export class ShareListGuiRuntime extends AppProcess {
  ownedShares = Store<SharedDriveType[]>([]);
  joinedShares = Store<SharedDriveType[]>([]);
  selectedShare = Store<string>();
  selectedIsOwn = Store<boolean>(false);
  selectedIsMounted = Store<boolean>(false);
  loading = Store<boolean>(false);
  shares: ShareManager;
  thisUserId: string;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.shares = this.userDaemon?.serviceHost?.getService("ShareMgmt")!; // Get the share management service
    this.thisUserId = this.userDaemon?.userInfo?._id!; // Get the user's ID using a lot of questionmarks (damn)

    this.selectedShare.subscribe((v) => {
      this.selectedIsOwn.set(!!this.ownedShares().filter((s) => s._id === v)[0]); // Filter the owned shares to determine if the selection is owned
      this.selectedIsMounted.set(!!this.fs.drives[v]); // Check if the selected share is mounted
    });

    this.setSource(__SOURCE__);
  }

  async start() {
    this.loading.set(true);
    this.ownedShares.set(await this.shares.getOwnedShares()); // Get owned shares from manager
    this.joinedShares.set(await this.shares.getJoinedShares()); // Get joined shares from manager
    this.loading.set(false);
  }

  //#endregion
  //#region ACTIONS

  async manageShare() {
    this.closeWindow(); // Close the listgui
    this.spawnOverlayApp("ShareMgmtGui", this.parentPid, this.selectedShare()); // Spawn the mgmtgui
  }

  async leaveShare() {
    const shareId = this.selectedShare(); // Get the selected share
    MessageBox(
      {
        title: "Leave share?",
        message: "Are you sure you want to leave this share? You'll have to enter its credentials to access it again.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Leave",
            action: async () => {
              await this.fs.umountDrive(shareId); // First unmount the share
              await this.shares.leaveShare(shareId); // Then leave it

              this.userPreferences.update((v) => {
                v.startup ||= {};
                delete v.startup[shareId]; // Remove it from the startup

                return v;
              });
              this.start(); // Ugly way to refresh the list gui
            },
            suggested: true,
          },
        ],
        image: WarningIcon,
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  async mountShare() {
    const isMounted = this.selectedIsMounted(); // Is mounted?
    const shareId = this.selectedShare(); // Selected share

    if (isMounted) {
      MessageBox(
        {
          title: "Unmount share?",
          message: "Are you sure you want to unmount this share?",
          buttons: [
            { caption: "Cancel", action: () => {} },
            {
              caption: "Unmount",
              action: () => {
                this.fs.umountDrive(shareId); // First unmount it
                this.selectedIsMounted.set(false); // Then clear the selection
              },
              suggested: true,
            },
          ],
          image: ShareIcon,
          sound: "arcos.dialog.warning",
        },
        this.pid,
        true
      );

      return;
    }

    await this.shares.mountShareById(shareId); // Mount share
    this.selectedIsMounted.set(true); // Then override selectedIsMounted
  }

  async openShare() {
    const shareId = this.selectedShare(); // Get the selected share
    const drive = this.fs.drives[shareId] as SharedDrive; // Get the mount

    if (!drive) return; // No mount? return

    const path = `${drive.uuid}:/`;
    const parent = KernelStack().getProcess(this.parentPid);

    if (parent && this.userDaemon?.ParentIs(this, "fileManager")) {
      // In case the parent is a file manager; navigate it instead
      const dispatch = KernelStack().ConnectDispatch(this.parentPid);
      dispatch?.dispatch("navigate", path);
    } else {
      // Otherwise spawn a fresh file manager
      this.spawnApp("fileManager", +this.env.get("shell_pid"), path);
    }

    this.closeWindow(); // Finally close the listgui
  }

  async createShare() {
    await this.closeWindow(); // First close the listgui
    this.spawnOverlayApp("ShareCreateGui", this.parentPid); // Then spawn the creategui
  }

  //#endregion
}
