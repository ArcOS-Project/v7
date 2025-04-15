import { FileManagerRuntime } from "$apps/user/filemanager/runtime";
import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import type { ShareManager } from "$ts/fs/shares";
import type { SharedDrive } from "$ts/fs/shares/drive";
import { WarningIcon } from "$ts/images/dialog";
import { ShareIcon } from "$ts/images/filesystem";
import type { ProcessHandler } from "$ts/process/handler";
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

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);

    this.shares = this.userDaemon?.serviceHost?.getService("ShareMgmt")!;
    this.thisUserId = this.userDaemon?.userInfo?._id!;

    this.selectedShare.subscribe((v) => {
      this.selectedIsOwn.set(!!this.ownedShares().filter((s) => s._id === v)[0]);
      this.selectedIsMounted.set(!!this.fs.drives[v]);
    });
  }

  async start() {
    this.loading.set(true);
    this.ownedShares.set(await this.shares.getOwnedShares());
    this.joinedShares.set(await this.shares.getJoinedShares());
    this.loading.set(false);
  }

  async manageShare() {
    this.closeWindow();
    this.spawnOverlayApp("ShareMgmtGui", this.parentPid, this.selectedShare());
  }

  async leaveShare() {
    const shareId = this.selectedShare();
    MessageBox(
      {
        title: "Leave share?",
        message: "Are you sure you want to leave this share? You'll have to enter its credentials to access it again.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Leave",
            action: async () => {
              await this.fs.umountDrive(shareId);
              await this.shares.leaveShare(shareId);

              this.userPreferences.update((v) => {
                v.startup ||= {};
                delete v.startup[shareId];

                return v;
              });
              this.start();
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
    const isMounted = this.selectedIsMounted();
    const shareId = this.selectedShare();

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
                this.fs.umountDrive(shareId);
                this.selectedIsMounted.set(false);
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

    await this.shares.mountShareById(shareId);
    this.selectedIsMounted.set(true);
  }

  async openShare() {
    const shareId = this.selectedShare();
    const drive = this.fs.drives[shareId] as SharedDrive;

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

  async createShare() {
    await this.closeWindow();
    this.spawnOverlayApp("ShareCreateGui", this.parentPid);
  }
}
