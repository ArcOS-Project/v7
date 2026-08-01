import FirstRunApp from "$apps/components/firstrun/FirstRun";
import type { Constructs } from "$interfaces/common";
import type { IInitUserContext } from "$interfaces/contexts/IInitUserContext";
import type { IServiceHost } from "$interfaces/IServiceHost";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { IFirstRunRuntime } from "$interfaces/runtimes/IFirstRunRuntime";
import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
import type { IShareManager } from "$interfaces/services/IShareManager";
import type { ITrayHostService } from "$interfaces/services/ITrayHostService";
import { Daemon, Env, Fs, Stack, State, SysDispatch } from "$ts/env";
import { ErrorIcon } from "$ts/images/dialog";
import { UserDrive } from "$ts/kernel/mods/fs/drives/userfs";
import { ServiceHost } from "$ts/servicehost";
import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";
import { UserContext } from "../context";

export class InitUserContext extends UserContext implements IInitUserContext {
  private readonly TRAY_AUTOLOAD = `autoload_loading`;

  private registeredAnchors: HTMLAnchorElement[] = [];
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

          Daemon.helpers?.openWebpage(anchor.href);
        });
      }
    };

    this.anchorInterceptObserver = new MutationObserver(handle);
    this.anchorInterceptObserver.observe(document.body, { childList: true, subtree: true });
  }

  async startSystemStatusRefresh() {
    if (this._disposed || this.safeMode) return;

    this.Log("Starting system status refresh");

    setInterval(async () => {
      Daemon!.power?.battery.set(await Daemon!.power?.batteryInfo());
    }, 1000); // Every second

    Daemon!.power?.battery.set(await Daemon!.power?.batteryInfo());
  }

  async startServiceHost(broadcast?: (msg: string) => void) {
    this.Log("Starting service host");

    Daemon!.serviceHost = await Stack.spawn<IServiceHost>(ServiceHost, undefined, this.userInfo!._id, this.pid);
    await this.serviceHost?.init(broadcast);
  }

  async firstRun() {
    const process = await Stack.spawn<IFirstRunRuntime>(
      FirstRunApp.assets.runtime as Constructs<IFirstRunRuntime>,
      undefined,
      this.userInfo?._id,
      this.pid,
      { data: { ...FirstRunApp, overlay: true }, id: "FirstRun" },
      Daemon
    );

    if (!process) return;

    Env.set("shell_pid", this.pid);

    await new Promise<void>((r) => process.done.subscribe((v) => v && r()));

    Env.delete("shell_pid");
  }

  async handleShellAndAutorun() {
    if (this._disposed) return;

    const proc = await Daemon?.spawn?.spawnApp<IShellRuntime>(Daemon.preferences().globalSettings.shellExec, this.pid, {
      noWorkspace: true,
    });

    // BUG 695905e6e49c74867e992655
    if (!proc) {
      MessageBox(
        {
          title: "Shell failed",
          message: "An error occurred while trying to spawn the shell. Please try again by restarting.",
          buttons: [{ caption: "Restart", action: () => Daemon.power?.restart(), suggested: true }],
          sound: "arcos.dialog.error",
          image: ErrorIcon, // possibly no icon service
        },
        Daemon.pid
      );
      return;
    }

    const trayHost = this.serviceHost?.getService<ITrayHostService>("TrayHostSvc");
    const shares = this.serviceHost?.getService<IShareManager>("ShareMgmt");

    trayHost?.loading.set(true);

    this.Log(`Spawning autoload applications`);

    let { startup } = Daemon!.preferences();
    startup ||= {};

    await Daemon.spawn?.spawnApp("contextMenu", this.pid, { noWorkspace: true });

    Daemon.InitComplete.set(true);

    for (const payload in startup) {
      if (payload === "contextMenu") continue;

      const type = startup[payload];

      switch (type.toLowerCase()) {
        case "app":
          await Daemon?.spawn?.spawnApp(payload, this.pid, { noWorkspace: true });
          break;
        case "file":
          if (!this.safeMode) await Daemon!.files?.openFile(payload);
          break;
        case "folder":
          if (!this.safeMode) await Daemon!.spawn?.spawnApp("fileManager", this.pid, {}, payload);
          break;
        case "share":
          await shares?.mountShareById(payload);
          break;
        case "disabled":
          break;
        default:
          this.Log(`Unknown startup type: ${type.toUpperCase()} (payload: '${payload}')`);
      }
    }

    if (this.safeMode) Daemon!.helpers?.safeModeNotice();

    trayHost?.loading.set(false);

    if (navigator.userAgent.toLowerCase().includes("firefox")) {
      await MessageBox(
        {
          title: "Firefox support",
          message:
            "Beware! ArcOS doesn't work correctly on Firefox. It's unsure when and if support for Firefox will improve. Please be sure to give feedback to me about anything that doesn't work quite right on Firefox, okay?",
          buttons: [BTN_OKAY_SUG],
          image: "FirefoxIcon",
        },
        +Env.get("shell_pid"),
        true
      );
    }

    await Daemon?.version?.checkForNewVersion();
    Daemon!.autoLoadComplete = true;
    await proc.refreshStartMenu();
    await proc.arcFind?.refresh();
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

    SysDispatch.subscribe<string>("fs-mount-drive", (id) => {
      if (this._disposed) return;

      try {
        const drive = Fs.getDriveById(id);
        if (!drive) return;

        Daemon!.files?.mountedDrives.push(id);
        if (!drive.REMOVABLE) return;

        const notificationId = Daemon!.notifications?.sendNotification({
          title: drive.driveLetter ? `${drive.label} (${drive.driveLetter}:)` : drive.label,
          message: "This drive just got mounted! Click the button to view it in the file manager",
          buttons: [
            {
              caption: "Open Drive",
              action: () => {
                Daemon!.spawn?.spawnApp("fileManager", undefined, {}, `${drive.driveLetter || drive.uuid}:/`);

                if (notificationId) Daemon!.notifications?.deleteNotification(notificationId);
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
}
