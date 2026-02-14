import type { IInitUserContext, IUserDaemon } from "$interfaces/daemon";
import { Env, Fs, Stack, State, SysDispatch } from "$ts/env";
import { UserDrive } from "$ts/kernel/mods/fs/drives/userfs";
import { PermissionHandler } from "$ts/permissions";
import { ServiceHost } from "$ts/servicehost";
import type { LibraryManagement } from "$ts/servicehost/services/LibMgmtSvc";
import type { ShareManager } from "$ts/servicehost/services/ShareMgmt";
import { MessageBox } from "$ts/util/dialog";
import type { Service } from "$types/service";
import { Daemon } from "..";
import type { FileAssocService } from "../../servicehost/services/FileAssocSvc";
import { UserContext } from "../context";

/**
 * RESTRICTED: this class does not have an entry in ProcessWithPermissions,
 * and as such cannot be accessed by third-party applications.
 */
export class InitUserContext extends UserContext implements IInitUserContext {
  private registeredAnchors: HTMLAnchorElement[] = [];
  private firstSyncDone = false;
  public anchorInterceptObserver?: MutationObserver;

  constructor(id: string, daemon: IUserDaemon) {
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
          const currentState = State?.currentState;

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
            +Env.get("shell_pid"),
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
      await Fs.mountDrive("userfs", UserDrive, "U", undefined);
    } catch {
      throw new Error("UserDaemon: Failed to start filesystem supplier");
    }
  }

  startDriveNotifierWatcher() {
    if (this._disposed) return;

    this.Log("Starting drive notifier watcher");

    SysDispatch.subscribe("fs-mount-drive", (id) => {
      if (this._disposed) return;

      try {
        const drive = Fs.getDriveById(id as unknown as string);
        if (!drive) return;

        Daemon!.files?.mountedDrives.push(id as unknown as string);

        if (!drive.REMOVABLE) return;

        const notificationId = Daemon!?.notifications?.sendNotification({
          title: drive.driveLetter ? `${drive.label} (${drive.driveLetter}:)` : drive.label,
          message: "This drive just got mounted! Click the button to view it in the file manager",
          buttons: [
            {
              caption: "Open Drive",
              action: () => {
                Daemon!?.spawn?.spawnApp("fileManager", undefined, `${drive.driveLetter || drive.uuid}:/`);

                if (notificationId) Daemon!?.notifications?.deleteNotification(notificationId);
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

    const unsubscribe = Daemon!.preferences.subscribe(async (v) => {
      if (this._disposed) return unsubscribe();
      if (!v || v.isDefault) return;

      v = Daemon!.themes!.checkCurrentThemeIdValidity(v);

      if (!this.firstSyncDone) this.firstSyncDone = true;
      else if (!Daemon!.preferencesCtx?.syncLock) Daemon!.preferencesCtx?.commitPreferences(v);

      Daemon!.renderer?.setAppRendererClasses(v);
      Daemon!.wallpaper?.updateWallpaper(v);
      Daemon!.workspaces?.syncVirtualDesktops(v);
      Daemon!.updateGlobalDispatch();
    });

    Daemon!.preferencesCtx!.preferencesUnsubscribe = unsubscribe;
  }

  async startSystemStatusRefresh() {
    if (this._disposed || this.safeMode) return;

    this.Log("Starting system status refresh");

    setInterval(async () => {
      Daemon!.power?.battery.set(await Daemon!.power?.batteryInfo());
    }, 1000); // Every second

    Daemon!.power?.battery.set(await Daemon!.power?.batteryInfo());
  }

  async startVirtualDesktops() {
    if (this._disposed) return;

    this.Log(`Starting virtual desktop system`);

    const outer = document.createElement("div");
    const inner = document.createElement("div");

    outer.className = "virtual-desktop-container";
    inner.className = "inner";

    outer.append(inner);
    Stack.renderer?.target.append(outer);
    Daemon!.workspaces!.virtualDesktop = inner;

    Daemon!.workspaces!.syncVirtualDesktops(Daemon!.preferences());
  }

  async startServiceHost(svcPreRun?: (service: Service) => void) {
    this.Log("Starting service host");

    Daemon!.serviceHost = await Stack.spawn<ServiceHost>(ServiceHost, undefined, this.userInfo!._id, this.pid);
    await this.serviceHost?.init(svcPreRun);

    Daemon!.assoc = this.serviceHost?.getService<FileAssocService>("FileAssocSvc");
    Daemon!.libraries = this.serviceHost?.getService<LibraryManagement>("LibMgmtSvc")!;
  }

  async startPermissionHandler() {
    const proc = await Stack.spawn(PermissionHandler, undefined, "SYSTEM", this.pid);

    if (!proc) return false;

    return true;
  }
}
