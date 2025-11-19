import { MessageBox } from "$ts/dialog";
import { ServerDrive } from "$ts/drives/server";
import { KernelStack } from "$ts/env";
import { KernelStateHandler } from "$ts/getters";
import { ServiceHost } from "$ts/services";
import type { ShareManager } from "$ts/shares";
import type { LibraryManagement } from "$ts/tpa/libraries";
import type { Service } from "$types/service";
import type { UserDaemon } from "..";
import type { FileAssocService } from "../../assoc";
import { UserContext } from "../context";

export class InitUserContext extends UserContext {
  private registeredAnchors: HTMLAnchorElement[] = [];
  private firstSyncDone = false;
  public anchorInterceptObserver?: MutationObserver;

  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async _init() {
    this.startAnchorRedirectionIntercept();
  }

  async _deactivate() {
    this.anchorInterceptObserver?.disconnect();
  }

  startAnchorRedirectionIntercept() {
    this.Log("Starting anchor redirection intercept");

    const handle = () => {
      if (this._disposed) return;

      const anchors = document.querySelectorAll("a");

      for (const anchor of anchors) {
        const href = anchor.getAttribute("href");

        if (this.registeredAnchors.includes(anchor) || href?.startsWith("@client/")) continue;

        this.registeredAnchors.push(anchor);

        anchor.addEventListener("click", (e) => {
          const currentState = KernelStateHandler()?.currentState;

          e.preventDefault();

          if (currentState !== "desktop") return;

          MessageBox(
            {
              title: "Open this page?",
              message: `You're about to leave ArcOS to navigate to <code>${anchor.href}</code> in a <b>new tab</b>. Are you sure you want to continue?`,
              buttons: [
                {
                  caption: "Stay here",
                  action() {},
                },
                {
                  caption: "Proceed",
                  action() {
                    window.open(anchor.href, "_blank");
                  },
                  suggested: true,
                },
              ],
              image: "GlobeIcon",
            },
            +this.env.get("shell_pid"),
            true
          );
        });
      }
    };

    this.anchorInterceptObserver = new MutationObserver(handle);
    this.anchorInterceptObserver.observe(document.body, { childList: true, subtree: true });
  }

  async startFilesystemSupplier() {
    if (this._disposed) return;

    this.Log(`Starting filesystem supplier`);

    try {
      await this.fs.mountDrive<ServerDrive>("userfs", ServerDrive, "U", undefined, this.token);

      await this.daemon.migrations?.migrateFilesystemLayout();
    } catch {
      throw new Error("UserDaemon: Failed to start filesystem supplier");
    }
  }

  startDriveNotifierWatcher() {
    if (this._disposed) return;

    this.Log("Starting drive notifier watcher");

    this.systemDispatch.subscribe("fs-mount-drive", (id) => {
      if (this._disposed) return;

      try {
        const drive = this.fs.getDriveById(id as unknown as string);
        if (!drive) return;

        this.daemon.files?.mountedDrives.push(id as unknown as string);

        if (!drive.REMOVABLE) return;

        const notificationId = this.daemon?.notifications?.sendNotification({
          title: drive.driveLetter ? `${drive.label} (${drive.driveLetter}:)` : drive.label,
          message: "This drive just got mounted! Click the button to view it in the file manager",
          buttons: [
            {
              caption: "Open Drive",
              action: () => {
                this.daemon?.spawn?.spawnApp("fileManager", undefined, `${drive.driveLetter || drive.uuid}:/`);

                if (notificationId) this.daemon?.notifications?.deleteNotification(notificationId);
              },
            },
          ],
          image: "DriveIcon",
          timeout: 3000,
        });
      } catch {
        return;
      }
    });
  }

  async startShareManager() {
    this.Log("Starting share manager");

    const share = this.serviceHost!.getService<ShareManager>("ShareMgmt");

    await share?.mountOwnedShares();
  }

  async startPreferencesSync() {
    if (this._disposed) return;

    this.Log(`Starting user preferences commit sync`);

    const unsubscribe = this.daemon.preferences.subscribe(async (v) => {
      if (this._disposed) return unsubscribe();
      if (!v || v.isDefault) return;

      v = this.daemon.themes!.checkCurrentThemeIdValidity(v);

      if (!this.firstSyncDone) this.firstSyncDone = true;
      else if (!this.daemon.preferencesCtx?.syncLock) this.daemon.preferencesCtx?.commitPreferences(v);

      this.daemon.renderer?.setAppRendererClasses(v);
      this.daemon.wallpaper?.updateWallpaper(v);
      this.daemon.workspaces?.syncVirtualDesktops(v);
    });

    this.daemon.preferencesCtx!.preferencesUnsubscribe = unsubscribe;
  }

  async startSystemStatusRefresh() {
    if (this._disposed || this.safeMode) return;

    this.Log("Starting system status refresh");

    setInterval(async () => {
      this.daemon.power?.battery.set(await this.daemon.power?.batteryInfo());
    }, 1000); // Every second

    this.daemon.power?.battery.set(await this.daemon.power?.batteryInfo());
  }

  async startVirtualDesktops() {
    if (this._disposed) return;

    this.Log(`Starting virtual desktop system`);

    const outer = document.createElement("div");
    const inner = document.createElement("div");

    outer.className = "virtual-desktop-container";
    inner.className = "inner";

    outer.append(inner);
    KernelStack().renderer?.target.append(outer);
    this.daemon.workspaces!.virtualDesktop = inner;

    this.daemon.workspaces!.syncVirtualDesktops(this.daemon.preferences());
  }

  async startServiceHost(svcPreRun?: (service: Service) => void) {
    this.Log("Starting service host");

    this.daemon.serviceHost = await KernelStack().spawn<ServiceHost>(ServiceHost, undefined, this.userInfo!._id, this.pid);
    await this.serviceHost?.init(svcPreRun);

    this.daemon.assoc = this.serviceHost?.getService<FileAssocService>("FileAssocSvc");
    this.daemon.libraries = this.serviceHost?.getService<LibraryManagement>("LibMgmtSvc")!;
  }
}
