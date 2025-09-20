//#region IMPORTS
import {
  DummyFileProgress,
  type FileProgressMutator,
  type FsProgressOperation,
  type FsProgressProc,
} from "$apps/components/fsprogress/types";
import { GlobalLoadIndicatorApp } from "$apps/components/globalloadindicator/GlobalLoadIndicator";
import { GlobalLoadIndicatorRuntime } from "$apps/components/globalloadindicator/runtime";
import type { IconPickerData } from "$apps/components/iconpicker/types";
import { TerminalWindowApp } from "$apps/components/terminalwindow/TerminalWindow";
import { TerminalWindowRuntime } from "$apps/components/terminalwindow/runtime";
import type { LoadSaveDialogData } from "$apps/user/filemanager/types";
import DeleteUser from "$lib/Daemon/DeleteUser.svelte";
import SafeModeNotice from "$lib/Daemon/SafeModeNotice.svelte";
import { AppProcess } from "$ts/apps/process";
import { ApplicationStorage } from "$ts/apps/storage";
import { BuiltinAppImportPathAbsolutes } from "$ts/apps/store";
import { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import { bestForeground, darkenColor, hex3to6, invertColor, lightenColor } from "$ts/color";
import { MessageBox } from "$ts/dialog";
import { DistributionServiceProcess } from "$ts/distrib";
import { StoreItemIcon } from "$ts/distrib/util";
import { ServerDrive } from "$ts/drives/server";
import type { MemoryFilesystemDrive } from "$ts/drives/temp";
import { ZIPDrive } from "$ts/drives/zipdrive";
import { ArcOSVersion, BETA, getKMod, KernelStack } from "$ts/env";
import { toForm } from "$ts/form";
import { KernelStateHandler } from "$ts/getters";
import { applyDefaults } from "$ts/hierarchy";
import type { IconService } from "$ts/icon";
import { maybeIconId } from "$ts/images";
import { NightlyLogo } from "$ts/images/branding";
import { tryJsonParse } from "$ts/json";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { Process } from "$ts/process/instance";
import type { ProtocolServiceProcess } from "$ts/proto";
import { ServiceHost } from "$ts/services";
import { ShareManager } from "$ts/shares/index";
import { Sleep } from "$ts/sleep";
import { authcode, deepCopyWithBlobs, Plural } from "$ts/util";
import { arrayToBlob, arrayToText, textToBlob } from "$ts/util/convert";
import { getItemNameFromPath, getParentDirectory, join } from "$ts/util/fs";
import { UUID } from "$ts/uuid";
import { compareVersion } from "$ts/version";
import { Wallpapers } from "$ts/wallpaper/store";
import { Store, type ReadableStore } from "$ts/writable";
import type { LoginActivity } from "$types/activity";
import type { App, AppStorage, InstalledApp } from "$types/app";
import { ElevationLevel, type ElevationData } from "$types/elevation";
import type { FileHandler, FileOpenerResult } from "$types/fs";
import type { FilesystemType, ServerManagerType } from "$types/kernel";
import { LogLevel } from "$types/logging";
import type { BatteryType } from "$types/navigator";
import type { Notification } from "$types/notification";
import type { Service } from "$types/service";
import type { ArcShortcut } from "$types/shortcut";
import type { ExpandedTerminal } from "$types/terminal";
import { UserThemeKeys, type UserTheme } from "$types/theme";
import type {
  CategorizedDiskUsage,
  CustomStylePreferences,
  PublicUserInfo,
  UserInfo,
  UserPreferences,
  WallpaperGetters,
} from "$types/user";
import type { Wallpaper } from "$types/wallpaper";
import Cookies from "js-cookie";
import type { Unsubscriber } from "svelte/store";
import { AdminProtocolHandlers } from "../admin/proto";
import { Backend } from "../axios";
import { MessagingInterface } from "../messaging";
import { GlobalDispatch } from "../ws";
import { FileAssocService } from "./assoc";
import { DefaultFileDefinitions } from "./assoc/store";
import { DefaultUserInfo, DefaultUserPreferences } from "./default";
import { BuiltinThemes, DefaultFileHandlers, UserPaths } from "./store";
import { ThirdPartyProps } from "./thirdparty";
import { ComponentIcon } from "$ts/images/general";
//#endregion

export class UserDaemon extends Process {
  //#region USER DAEMON PROPERTIES

  // USER
  public username: string;
  public token: string;
  public userInfo: UserInfo = DefaultUserInfo;
  // CACHING
  private localWallpaperCache: Record<string, Blob> = {};
  private thumbnailCache: Record<string, string> = {};
  private TempFsSnapshot: Record<string, any> = {};
  // WORKSPACES
  private virtualDesktops: Record<string, HTMLDivElement> = {};
  private virtualDesktop: HTMLDivElement | undefined;
  private virtualDesktopIndex = -1;
  private virtualdesktopChangingTimeout: NodeJS.Timeout | undefined;
  // USER DAEMON STATE - BOOLEANISH
  private firstSyncDone = false;
  public autoLoadComplete = false;
  public safeMode = false;
  public syncLock = false;
  public initialized = false;
  public _elevating = false;
  public _blockLeaveInvocations = true;
  public _toLoginInvoked = false;
  override _criticalProcess: boolean = true;
  // FILESYSTEM
  public TempFs?: MemoryFilesystemDrive;
  public fileHandlers: Record<string, FileHandler> = DefaultFileHandlers(this);
  public mountedDrives: string[] = [];
  // STORES - WRITABLE
  public Wallpaper = Store<Wallpaper>(Wallpapers.img0);
  public lastWallpaper = Store<string>("img0");
  public battery = Store<BatteryType | undefined>();
  public preferences = Store<UserPreferences>(DefaultUserPreferences);
  // STORES - CLASSIC
  private elevations: Record<string, ElevationData> = {};
  private preferencesUnsubscribe: Unsubscriber | undefined;
  private wallpaperGetters: WallpaperGetters = [
    ["@local:", async (id: string) => await this.getLocalWallpaper(id)],
    ["img", (id) => Wallpapers[id] || Wallpapers["img04"]],
  ];
  private registeredAnchors: HTMLAnchorElement[] = [];
  public notifications = new Map<string, Notification>([]);
  // KERNEL MODULES
  public server: ServerManagerType;
  public globalDispatch?: GlobalDispatch;
  // SERVICES
  public assoc?: FileAssocService;
  public serviceHost: ServiceHost | undefined;
  public NIGHTLY = false;

  //#endregion
  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, token: string, username: string, userInfo?: UserInfo) {
    super(pid, parentPid);

    this.token = token;
    this.username = username;
    this.env.set("userdaemon_pid", this.pid);
    if (userInfo) this.userInfo = userInfo;

    this.server = getKMod<ServerManagerType>("server");
    this.safeMode = !!this.env.get("safemode");
    this.name = "UserDaemon";

    this.setSource(__SOURCE__);
  }

  async start() {
    try {
      this.TempFs = this.fs.getDriveById("temp") as MemoryFilesystemDrive;
      this.TempFsSnapshot = await this.TempFs.takeSnapshot();

      this.startAnchorRedirectionIntercept();
    } catch {
      return false;
    }
  }

  async stop() {
    if (this._disposed) return;

    if (!this._toLoginInvoked && KernelStateHandler()?.currentState === "desktop") {
      KernelStateHandler()?.loadState("login", { type: "restart", userDaemon: this });
      return false;
    }

    if (this.serviceHost) this.serviceHost._holdRestart = true;
    if (this.preferencesUnsubscribe) this.preferencesUnsubscribe();

    this.TempFs?.restoreSnapshot(this.TempFsSnapshot!);
    this.fs.umountDrive(`userfs`, true);
  }

  //#endregion
  //#region INIT

  async activateAdminBootstrapper() {
    this.Log("Activating admin bootstrapper");

    if (!this.userInfo.admin) return;
    const appStore = this.appStorage()!;
    const adminPortal = (await import("$apps/admin/adminportal/AdminPortal")).default as App;

    appStore.loadOrigin("admin", () => [adminPortal]);
    await appStore.refresh();

    const proto = this.serviceHost?.getService<ProtocolServiceProcess>("ProtoService");

    for (const key in AdminProtocolHandlers) {
      proto?.registerHandler(key, AdminProtocolHandlers[key]);
    }
  }

  async startShareManager() {
    this.Log("Starting share manager");

    const share = this.serviceHost!.getService<ShareManager>("ShareMgmt");

    await share?.mountOwnedShares();
  }

  async startServiceHost(svcPreRun?: (service: Service) => void) {
    this.Log("Starting service host");

    this.serviceHost = await KernelStack().spawn<ServiceHost>(ServiceHost, undefined, this.userInfo!._id, this.pid);
    await this.serviceHost?.init(svcPreRun);

    this.assoc = this.serviceHost?.getService<FileAssocService>("FileAssocSvc");
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

    const observer = new MutationObserver(handle);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  async activateGlobalDispatch() {
    this.globalDispatch = this.serviceHost!.getService<GlobalDispatch>("GlobalDispatch");

    this.globalDispatch?.subscribe("update-preferences", async (preferences: UserPreferences) => {
      this.syncLock = true;
      await Sleep(0);
      this.preferences.set(preferences);
      await Sleep(0);
      this.syncLock = false;
    });

    this.globalDispatch?.subscribe("fs-flush-folder", (path) => {
      this.systemDispatch.dispatch("fs-flush-folder", path);
    });

    this.globalDispatch?.subscribe("fs-flush-file", (path) => {
      this.systemDispatch.dispatch("fs-flush-file", path);
    });
  }

  //#endregion
  //#region MIGRATIONS

  async migrateFilesystemLayout() {
    const migrationPath = join(UserPaths.Migrations, "FsMig-705.lock");
    const migrationFile = !!(await this.fs.stat(migrationPath));

    if (migrationFile) return;

    const oldConfigDir = await this.fs.readDir("U:/Config");

    if (oldConfigDir) {
      for (const dir of oldConfigDir.dirs) {
        const target = join(UserPaths.Configuration, dir.name);

        await this.fs.deleteItem(target);
        await this.fs.moveItem(`U:/Config/${dir.name}`, target);
      }

      await this.fs.deleteItem("U:/Config");
    }

    await this.fs.writeFile(migrationPath, textToBlob(`${Date.now()}`));
  }

  async updateAppShortcutsDir() {
    const contents = await this.fs.readDir(UserPaths.AppShortcuts);
    const storage = this.appStorage()?.buffer();

    if (!storage || !contents) return;

    for (const app of storage) {
      const existing = contents?.files.filter((f) => f.name === `${app.id}.arclnk`)[0];

      if (existing) continue;

      this.createShortcut(
        {
          name: app.id,
          target: app.id,
          type: "app",
          icon: `@app::${app.id}`,
        },
        join(UserPaths.AppShortcuts, `${app.id}.arclnk`)
      );
      await Sleep(50);
    }
  }

  async migrateUserAppsToFs() {
    const apps = this.preferences().userApps;

    if (!Object.entries(apps).length) return;

    this.Log(`Migrating user apps to filesystem...`);

    for (const id in apps) {
      await this.fs.writeFile(join(UserPaths.AppRepository, `${id}.json`), textToBlob(JSON.stringify(apps[id], null, 2)));
    }

    this.preferences.update((v) => {
      v.userApps = {};
      return v;
    });
  }

  //#endregion
  //#region ARCOS VERSION

  async isRegisteredVersionOutdated() {
    const contents = await this.fs.readFile(join(UserPaths.System, "RegisteredVersion"));
    const isOutdated = !contents || arrayToText(contents) !== ArcOSVersion;

    return isOutdated;
  }

  async updateRegisteredVersion() {
    await this.fs.writeFile(join(UserPaths.System, "RegisteredVersion"), textToBlob(ArcOSVersion));
  }

  async checkForNewVersion() {
    const isOutdated = await this.isRegisteredVersionOutdated();

    if (!isOutdated) return;

    this.spawnOverlay("UpdateNotifierApp", +this.env.get("shell_pid"));
  }

  //#endregion
  //#region SYSTEM STATUS

  async batteryInfo(): Promise<BatteryType | undefined> {
    if (this._disposed) return;

    const navigator = window.navigator as any;

    if (!navigator.getBattery) return undefined;

    const info = (await navigator.getBattery()) as BatteryType;

    return info;
  }

  async startSystemStatusRefresh() {
    if (this._disposed || this.safeMode) return;

    this.Log("Starting system status refresh");

    setInterval(async () => {
      this.battery.set(await this.batteryInfo());
    }, 1000); // Every second

    this.battery.set(await this.batteryInfo());
  }

  //#endregion
  //#region PROCESS HELPERS

  async spawnApp<T>(id: string, parentPid?: number, ...args: any[]) {
    if (this._disposed) return;

    return await this._spawnApp<T>(id, this.getCurrentDesktop(), parentPid, ...args);
  }

  async spawnOverlay<T>(id: string, parentPid?: number, ...args: any[]) {
    if (this._disposed) return;

    return await this._spawnOverlay<T>(id, this.getCurrentDesktop(), parentPid, ...args);
  }

  async _spawnApp<T>(
    id: string,
    renderTarget: HTMLDivElement | undefined = undefined,
    parentPid?: number,
    ...args: any[]
  ): Promise<T | undefined> {
    if (this._disposed) return;

    const appStore = this.appStorage();
    const app = appStore?.getAppSynchronous(id);

    if (this.checkDisabled(id, app?.noSafeMode)) return;

    if (app?.id.includes("-") || app?.id.includes(".")) {
      this.sendNotification({
        title: `Refusing to spawn '${id}'`,
        message:
          "The application ID is malformed: it contains periods or dashes. If you're the creator of the app, be sure to use the suggested format for application IDs.",
        timeout: 3000,
        image: "WarningIcon",
      });

      return;
    }

    if (!app) {
      this.sendNotification({
        title: "Application not found",
        message: `ArcOS tried to launch an application with ID '${id}', but it could not be found. Is it installed?`,
        timeout: 3000,
        image: "QuestionIcon",
      });
      return undefined;
    }

    this.Log(`SPAWNING APP ${id}`);

    if (app.thirdParty || app.entrypoint) {
      return await this.spawnThirdParty<T>(app, (app as InstalledApp).tpaPath!, ...args);
    }

    if (app.elevated) {
      const elevated = await this.manuallyElevate({
        what: "ArcOS needs your permission to open the following application:",
        title: app.metadata.name,
        description: `by ${app.metadata.author}`,
        image: app.metadata.icon,
        level: ElevationLevel.low,
      });

      if (!elevated) return;
    }

    const shellDispatch = KernelStack().ConnectDispatch(+this.env.get("shell_pid"));

    if (shellDispatch) {
      shellDispatch?.dispatch("close-start-menu");
      shellDispatch?.dispatch("close-action-center");
    }

    await KernelStack().waitForAvailable();

    return await KernelStack().spawn<T>(
      app.assets.runtime,
      renderTarget,
      this.userInfo!._id,
      parentPid || this.pid,
      {
        data: app,
        id: app.id,
        desktop: renderTarget ? renderTarget.id : undefined,
      },
      ...args
    );
  }

  async _spawnOverlay<T>(
    id: string,
    renderTarget: HTMLDivElement | undefined = undefined,
    parentPid?: number,
    ...args: any[]
  ): Promise<T | undefined> {
    if (this._disposed) return;

    const appStore = this.appStorage();
    const app = await appStore?.getAppSynchronous(id);

    if (this.checkDisabled(id, app?.noSafeMode)) return;

    if (app?.id.includes("-") || app?.id.includes(".")) {
      this.sendNotification({
        title: `Refusing to spawn '${id}'`,
        message:
          "The application ID is malformed: it contains periods or dashes. If you're the creator of the app, be sure to use the suggested format for application IDs.",
        timeout: 3000,
        image: "WarningIcon",
      });

      return;
    }

    if (!app) {
      this.sendNotification({
        title: "Application not found",
        message: `ArcOS can't find an application with ID '${id}'. Is it installed?`,
        timeout: 3000,
        image: "QuestionIcon",
      });
      return undefined;
    }

    this.Log(`SPAWNING OVERLAY APP ${id}`);

    if (app.thirdParty) {
      this.Log("Can't spawn a third party app as an overlay: not in our control", LogLevel.error);

      return;
    }

    if (app.elevated) {
      const elevated = await this.manuallyElevate({
        what: "ArcOS needs your permission to open the following application as an overlay:",
        title: app.metadata.name,
        description: `by ${app.metadata.author}`,
        image: app.metadata.icon,
        level: ElevationLevel.low,
      });

      if (!elevated) return;
    }

    await KernelStack().waitForAvailable();

    const pid = parentPid || +this.env.get("shell_pid");

    if (!pid) {
      this.Log(`Spawning overlay app '${app.id}' as normal app: no suitable parent process`, LogLevel.warning);
    }

    return await KernelStack().spawn<T>(
      app.assets.runtime,
      renderTarget,
      this.userInfo!._id,
      pid || this.pid,
      {
        data: { ...app, overlay: !!pid },
        id: app.id,
        desktop: renderTarget ? renderTarget.id : undefined,
      },
      ...args
    );
  }

  async spawnThirdParty<T>(app: App, metaPath: string, ...args: any[]): Promise<T | undefined> {
    if (!this.preferences().security.enableThirdParty) {
      if (this.autoLoadComplete)
        MessageBox(
          {
            title: "Third-party apps",
            message:
              "ArcOS can't run third-party apps without your permission. Please enable third-party apps in Settings to access this app.",
            image: "AppsIcon",
            sound: "arcos.dialog.warning",
            buttons: [
              {
                caption: "Take me there",
                action: () => {
                  this.spawnApp("systemSettings", +this.env.get("shell_pid"), "apps");
                },
              },
              { caption: "Okay", suggested: true, action: () => {} },
            ],
          },
          +this.env.get("shell_pid"),
          true
        );
      return;
    }
    if (this._disposed) return;

    if (this.safeMode) {
      this.Log(`TPA execution in Safe Mode is prohibited: ${app.id}`, LogLevel.error);
      return;
    }

    this.Log(`Starting JS execution to run third-party app ${app.id}`);

    const fs = getKMod<FilesystemType>("fs");
    const userDaemonPid = this.env.get("userdaemon_pid");

    app.workingDirectory ||= getParentDirectory(metaPath);

    if (!userDaemonPid) return;

    let stop: (() => Promise<void>) | undefined;

    if (this.autoLoadComplete) stop = (await this.GlobalLoadIndicator(`Opening ${app.metadata.name}...`)).stop;

    try {
      const compatibleRevision = !app.tpaRevision || ThirdPartyAppProcess.TPA_REV >= app.tpaRevision;

      if (!compatibleRevision) {
        MessageBox(
          {
            title: `${app.metadata.name}`,
            message: `This application expects a newer version of the TPA framework than what ArcOS can supply. Please update your ArcOS version and try again.`,
            buttons: [{ caption: "Okay", action: () => {} }],
            sound: "arcos.dialog.error",
            image: "ErrorIcon",
          },
          +this.env.get("shell_pid"),
          true
        );

        return;
      }

      const contents = arrayToText(
        (await fs.readFile(app.entrypoint?.includes(":/") ? app.entrypoint! : join(app.workingDirectory, app.entrypoint!)))!
      );

      if (!contents) {
        await stop?.();

        MessageBox(
          {
            title: `${app.metadata.name} - Entrypoint error`,
            message: `ArcOS can't find the entrypoint of this third-party application. It might have been renamed or deleted. Please consider reinstalling the application to fix this problem.<br><code class='block'>${app.entrypoint}</code>`,
            buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
            sound: "arcos.dialog.error",
            image: "ErrorIcon",
          },
          +this.env.get("shell_pid"),
          true
        );

        return;
      }

      const wrap = (c: string) =>
        `export default async function({ ${Object.keys(props).join(",")} }) { \nconst global = arguments;\n ${c}\n }`;

      const filename = getItemNameFromPath(
        app.entrypoint?.includes(":/") ? app.entrypoint! : join(app.workingDirectory, app.entrypoint!)
      );
      const props = ThirdPartyProps(this, args, app, wrap, metaPath);
      const js = wrap(contents);
      await Backend.post(`/tpa/v2/${this.userInfo!._id}/${app.id}/${filename}`, textToBlob(js), {
        headers: { Authorization: `Bearer ${this.token}` },
      });
      const dataUrl = `${import.meta.env.DW_SERVER_URL}/tpa/v3/${this.userInfo!._id}/${Date.now()}/${
        app.id
      }@${filename}${authcode()}`;
      const code = await import(/* @vite-ignore */ dataUrl);

      if (!code.default || !(code.default instanceof Function)) throw new Error("Expected a default function");

      stop?.();

      return await code.default(props);
    } catch (e) {
      KernelStack().renderer?.notifyCrash(app as any, e as Error, app.process!);
      this.Log(`Execution error in third-party application "${app.id}": ${(e as any).stack}`);
      stop?.();
    }
  }

  //#endregion
  //#region CONTROLLING

  async logoff() {
    if (this._disposed) return;

    this.Log(`Logging off NOW`);

    await this.toLogin("logoff");
  }

  async shutdown() {
    if (this._disposed) return;

    this.Log(`Shutting down NOW`);

    await this.toLogin("shutdown");
  }

  async restart() {
    if (this._disposed) return;

    this.Log(`Restarting NOW`);

    await this.toLogin("restart");
  }

  async logoffSafeMode() {
    this.Log(`Logging off NOW (safe mode)`);

    this.env.set("safemode", true);

    await this.toLogin("logoff", { safeMode: true });
  }

  async toLogin(type: string, props: Record<string, any> = {}) {
    this.Log(`toLogin: ${type}`);
    await this.waitForLeaveInvocationAllow();
    if (this._disposed) return;
    if (this.serviceHost) this.serviceHost._holdRestart = true;

    await KernelStack()._killSubProceses(this.pid);
    await KernelStateHandler()?.loadState("login", {
      type,
      userDaemon: this,
      ...props,
    });
    await this.serviceHost?.killSelf?.();
    await this.unmountMountedDrives();
  }

  //#endregion
  //#region LOGIN ACTIVITY

  async getLoginActivity(): Promise<LoginActivity[]> {
    if (this._disposed) return [];

    try {
      const response = await Backend.get("/activity", {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as LoginActivity[];
    } catch {
      return [];
    }
  }

  async logActivity(action: string) {
    if (this._disposed) return false;

    this.Log(`Broadcasting login activity "${action}" to server`);

    try {
      const response = await Backend.post(
        "/activity",
        toForm({
          userAgent: navigator.userAgent,
          location: JSON.stringify(window.location),
          action,
        }),
        { headers: { Authorization: `Bearer ${this.token}` } }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  //#endregion LOGIN ACTIVITY
  //#region FILESYSTEM

  async startFilesystemSupplier() {
    if (this._disposed) return;

    this.Log(`Starting filesystem supplier`);

    try {
      await this.fs.mountDrive<ServerDrive>("userfs", ServerDrive, "U", undefined, this.token);

      await this.migrateFilesystemLayout();
    } catch {
      throw new Error("UserDaemon: Failed to start filesystem supplier");
    }
  }

  async mountZip(path: string, letter?: string, fromSystem = false) {
    if (this._disposed) return;

    this.Log(`Mounting ZIP file at ${path} as ${letter || "?"}:/`);

    const elevated =
      fromSystem ||
      (await this.manuallyElevate({
        what: "ArcOS needs your permission to mount a ZIP file",
        title: getItemNameFromPath(path),
        description: letter ? `As ${letter}:/` : "As a drive",
        image: "DriveIcon",
        level: ElevationLevel.medium,
      }));

    if (!elevated) return;

    const prog = await this.FileProgress(
      {
        type: "size",
        caption: "Mounting drive",
        subtitle: `${path}${letter ? ` as ${letter}:/` : ""}`,
        icon: "DriveIcon",
      },
      +this.env.get("shell_pid") || undefined
    );

    const mount = await this.fs.mountDrive(
      btoa(path),
      ZIPDrive,
      letter,
      (progress) => {
        prog.show();
        prog.setMax(progress.max);
        prog.setDone(progress.value);
      },
      path
    );

    prog.stop();
    return mount;
  }

  startDriveNotifierWatcher() {
    if (this._disposed) return;

    this.Log("Starting drive notifier watcher");

    this.systemDispatch.subscribe("fs-mount-drive", (id) => {
      if (this._disposed) return;

      try {
        const drive = this.fs.getDriveById(id as unknown as string);
        if (!drive) return;

        this.mountedDrives.push(id as unknown as string);

        if (!drive.REMOVABLE) return;

        const notificationId = this.sendNotification({
          title: drive.driveLetter ? `${drive.label} (${drive.driveLetter}:)` : drive.label,
          message: "This drive just got mounted! Click the button to view it in the file manager",
          buttons: [
            {
              caption: "Open Drive",
              action: () => {
                this.spawnApp("fileManager", undefined, `${drive.driveLetter || drive.uuid}:/`);

                if (notificationId) this.deleteNotification(notificationId);
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

  async unmountMountedDrives() {
    this.Log("Unmounting mounted drives");

    for (const drive of this.mountedDrives) {
      this.fs.umountDrive(drive, true);
    }
  }

  async FileProgress(initialData: Partial<FsProgressOperation>, parentPid?: number): Promise<FileProgressMutator> {
    const uuid = UUID();
    const progress = Store<FsProgressOperation>(
      applyDefaults(initialData, {
        max: 0,
        done: 0,
        type: "none",
        caption: ``,
        subtitle: ``,
        icon: "",
        errors: [],
      })
    );
    let process: FsProgressProc | undefined;
    let shown = false;

    const Log = (m: string) => /*this.Log(`FileProgress::${uuid}: ${m}`)*/ m;

    this.Log(`Creating file progress '${uuid}': ${initialData.caption}`);

    const show = async () => {
      Log(`Showing`);
      if (shown) return;
      shown = true;

      if (!parentPid) {
        process = await this.spawnApp<FsProgressProc>("FsProgress", 0, progress);

        if (typeof process == "string") return DummyFileProgress;
      } else {
        process = await this.spawnOverlay<FsProgressProc>("FsProgress", parentPid, progress);

        if (typeof process == "string") return DummyFileProgress;
      }
    };

    const mutateMax = (mutator: number) => {
      Log(`Mutating max value: ${mutator}`);

      progress.update((v) => {
        v.max += mutator;
        return v;
      });
    };

    const mutDone = (mutator: number) => {
      Log(`Mutating done: ${mutator}`);

      progress.update((v) => {
        v.done += mutator;
        return v;
      });
    };

    const setMax = (value: number) => {
      Log(`Setting max value: ${value}`);

      progress.update((v) => {
        v.max = value;
        return v;
      });
    };

    const setDone = (value: number) => {
      Log(`Setting done: ${value}`);

      progress.update((v) => {
        v.done = value;
        return v;
      });
    };

    const updateCaption = (caption: string) => {
      Log(`Updating caption: ${caption}`);

      progress.update((v) => {
        v.caption = caption;
        return v;
      });
    };

    const updSub = (subtitle: string) => {
      Log(`Updating subtitle: ${subtitle}`);

      progress.update((v) => {
        v.subtitle = subtitle;
        return v;
      });
    };

    const mutErr = (error: string) => {
      Log(`Mutating error: ${error}`);

      progress.update((v) => {
        v.errors.push(error);
        return v;
      });
    };

    const setErrors = (value: string[]) => {
      Log(`Setting errors: ${value.length} error(s)`);

      progress.update((v) => {
        v.errors = value;
        return v;
      });
    };

    const stop = async () => {
      Log(`Stopping`);

      await process?.closeWindow();
    };

    const setCancel = (cancel: (() => void) | undefined) => {
      Log(`Setting cancel: ${cancel}`);

      progress.update((v) => {
        v.cancel = cancel;

        return v;
      });
    };

    const setType = (type: "none" | "quantity" | "size") => {
      progress.update((v) => {
        v.type = type;

        return v;
      });
    };

    return {
      progress,
      process: () => process,
      mutateMax,
      mutDone,
      updateCaption,
      updSub,
      setMax,
      setDone,
      mutErr,
      setErrors,
      stop,
      show,
      setCancel,
      setType,
    };
  }

  async moveMultiple(sources: string[], destination: string, pid: number) {
    this.Log(`Moving ${sources.length} items to ${destination}`);

    const destinationName = getItemNameFromPath(destination);
    const firstSourceParent = getParentDirectory(sources[0]);

    const progress = await this.FileProgress(
      {
        type: "quantity",
        max: sources.length,
        icon: "FolderIcon",
        caption: `Moving files to ${destinationName || destination}`,
        subtitle: "Working...",
      },
      pid
    );

    for (const source of sources) {
      await progress.show();
      progress.updSub(source);

      const childProgress = await this.FileProgress(
        {
          type: "none",
          caption: `Moving ${getItemNameFromPath(source)} to ${destinationName || destination}`,
          subtitle: source,
          icon: "FolderIcon",
          done: 0,
          max: 100,
        },
        progress.process()?.pid || pid
      );

      try {
        const sourceName = getItemNameFromPath(source);
        await this.fs.moveItem(source, `${destination}/${sourceName}`, false, (prog) => {
          childProgress.setMax(prog.max + 1);
          childProgress.setDone(prog.value);
          childProgress.setType("quantity");
          childProgress.show();
        });
      } catch {
        progress.mutErr(`Failed to move ${source}`);
      }

      progress.mutDone(+1);

      await Sleep(200); // prevent rate limit
      childProgress.stop();
    }
    progress.stop();

    this.systemDispatch.dispatch("fs-flush-folder", firstSourceParent);
    if (firstSourceParent !== destination) this.systemDispatch.dispatch("fs-flush-folder", destination);
    KernelStack()?.renderer?.focusPid(pid);
  }

  async copyMultiple(sources: string[], destination: string, pid: number) {
    this.Log(`Copying ${sources.length} items to ${destination}`);

    const destinationName = getItemNameFromPath(destination);

    const progress = await this.FileProgress(
      {
        type: "quantity",
        max: sources.length,
        done: 0,
        icon: "FolderIcon",
        caption: `Copying files to ${destinationName || destination}`,
        subtitle: "Working...",
      },
      pid
    );

    for (const source of sources) {
      await progress.show();
      progress.updSub(source);

      const childProgress = await this.FileProgress(
        {
          type: "none",
          caption: `Copying ${getItemNameFromPath(source)} to ${destinationName || destination}`,
          subtitle: source,
          icon: "FolderIcon",
          done: 0,
          max: 100,
        },
        progress.process()?.pid || pid
      );

      try {
        await this.fs.copyItem(source, destination, false, (prog) => {
          childProgress.setMax(prog.max + 1);
          childProgress.setDone(prog.value);
          childProgress.setType("quantity");
          childProgress.show();
        });
      } catch {
        progress.mutErr(`Failed to copy ${source}`);
      }

      progress.mutDone(+1);

      await Sleep(200); // prevent rate limit
      childProgress.stop();
    }
    progress.stop();

    this.systemDispatch.dispatch("fs-flush-folder", destination);
    KernelStack()?.renderer?.focusPid(pid);
  }

  async findHandlerToOpenFile(path: string): Promise<FileOpenerResult[]> {
    this.Log(`Finding a handler to open ${path}`);

    const split = path.split(".");
    const filename = getItemNameFromPath(path);
    const extension = `.${split[split.length - 1]}`;
    const config = this.assoc?.getConfiguration();
    const apps = config?.associations.apps;
    const handlers = config?.associations.handlers;
    const result: FileOpenerResult[] = [];
    const appStore = this.appStorage();

    for (const handlerId in handlers) {
      const handler = this.fileHandlers[handlerId];
      const extensions = handlers[handlerId];

      if (extensions.includes(extension)) {
        result.push({
          type: "handler",
          handler,
          id: handlerId,
        });
      }
    }

    for (const appId in apps) {
      const extensions = apps[appId];

      if (extensions.includes(extension) || extensions.includes(filename)) {
        result.push({
          type: "app",
          app: appStore?.getAppSynchronous(appId),
          id: appId,
        });
      }
    }

    return result;
  }

  async getAllFileHandlers() {
    const appStore = this.appStorage();
    const apps = await appStore?.get();
    const result: FileOpenerResult[] = [];

    for (const id in this.fileHandlers) {
      const handler = this.fileHandlers[id];

      result.push({
        type: "handler",
        handler,
        id,
      });
    }

    for (const app of apps!) {
      result.push({
        type: "app",
        app,
        id: app.id,
      });
    }

    return result;
  }

  async LoadSaveDialog(data: Omit<LoadSaveDialogData, "returnId">): Promise<string[] | [undefined]> {
    const uuid = UUID();

    this.Log(`Spawning LoadSaveDialog with UUID ${uuid}`);

    await this.spawnOverlay("fileManager", +this.env.get("shell_pid"), data.startDir || UserPaths.Home, {
      ...data,
      returnId: uuid,
    });

    return new Promise<string[] | [undefined]>(async (r) => {
      this.systemDispatch.subscribe<[string, string[] | [undefined]]>("ls-confirm", ([id, paths]) => {
        if (id === uuid) r(paths);
      });
      this.systemDispatch.subscribe("ls-cancel", ([id]) => {
        if (id === uuid) r([undefined]);
      });
    });
  }

  async openFile(path: string, shortcut?: ArcShortcut): Promise<any> {
    this.Log(`Opening file "${path}" (${shortcut ? "Shortcut" : "File"})`);

    if (this._disposed) return;
    if (shortcut) return await this.handleShortcut(path, shortcut);

    const filename = getItemNameFromPath(path);
    const result = this.assoc?.getFileAssociation(path);

    if (!result?.handledBy.app && !result?.handledBy?.handler) {
      await MessageBox(
        {
          title: `Unknown file type`,
          message: `ArcOS doesn't have an app that can open '${filename}'. Click <b>Open With</b> to pick from a list of applications.`,
          buttons: [
            {
              caption: "Open With",
              action: async () => {
                await this.openWith(path);
              },
            },
            { caption: "Okay", action: () => {}, suggested: true },
          ],
          sound: "arcos.dialog.warning",
          image: "ErrorIcon",
        },
        +this.env.get("shell_pid"),
        true
      );

      return;
    }

    if (result.handledBy.handler) return await result.handledBy.handler.handle(path);

    return await this.spawnApp(result.handledBy.app?.id!, +this.env.get("shell_pid"), path);
  }

  async openWith(path: string) {
    this.Log(`Opening OpenWith for "${path}"`);

    if (this._disposed) return;
    await this.spawnOverlay("OpenWith", +this.env.get("shell_pid"), path);
  }

  async handleShortcut(path: string, shortcut: ArcShortcut) {
    this.Log(`Handling shortcut "${path}"`);
    const filename = getItemNameFromPath(path);

    try {
      switch (shortcut.type) {
        case "app":
          return await this.spawnApp(shortcut.target, +this.env.get("shell_pid"));
        case "file":
          return await this.openFile(shortcut.target);
        case "folder":
          return await this.spawnApp("fileManager", +this.env.get("shell_pid"), shortcut.target);
        default:
          MessageBox(
            {
              title: "Broken Shortcut",
              message: `ArcOS doesn't know how to open shortcut '${shortcut.name}' (${filename}) of type ${shortcut.type}.`,
              buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
              sound: "arcos.dialog.warning",
              image: "WarningIcon",
            },
            +this.env.get("shell_pid"),
            true
          );
      }
    } catch (e) {
      MessageBox(
        {
          title: "Failed to open shortcut",
          message: `ArcOS failed to open the shortcut you requested. Reason: ${e}`,
          image: "ShortcutMimeIcon",
          sound: "arcos.dialog.error",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        },
        +this.env.get("shell_pid"),
        true
      );
    }
  }

  async createShortcut(data: ArcShortcut, path: string) {
    if (!(await this.getIcon(data.icon))) return false;

    const string = JSON.stringify(data, null, 2);

    try {
      return await this.fs.writeFile(path, textToBlob(string, "application/json"), undefined, false);
    } catch {
      return false;
    }
  }

  async determineCategorizedDiskUsage(): Promise<CategorizedDiskUsage> {
    const total = this.userInfo!.storageSize;
    const apps = (await this.fs.readDir(UserPaths.Applications))?.totalSize || 0;
    const system = (await this.fs.readDir(UserPaths.System))?.totalSize || 0;
    const trash = (await this.fs.readDir(UserPaths.Trashcan))?.totalSize || 0;
    const home = (await this.fs.readDir(UserPaths.Home))?.totalSize || 0;
    const used = apps + system + home;
    const result: CategorizedDiskUsage = {
      sizes: {
        apps,
        system: system - trash,
        trash,
        home,
      },
      absolutePercentages: {
        apps: (100 / total) * apps,
        system: (100 / total) * (system - trash),
        trash: (100 / total) * trash,
        home: (100 / total) * home,
      },
      relativePercentages: {
        apps: (100 / used) * apps,
        system: (100 / used) * (system - trash),
        trash: (100 / used) * trash,
        home: (100 / used) * home,
      },
      total,
      used,
      free: total - (apps + system + home),
    };

    return result;
  }

  async getThumbnailFor(path: string): Promise<string | undefined> {
    if (this.thumbnailCache[path]) return this.thumbnailCache[path];

    const dataUrl = await this.fs.imageThumbnail(path, 64);
    if (dataUrl) this.thumbnailCache[path] = dataUrl;

    return dataUrl;
  }

  //#endregion
  //#region APPLICATIONS

  async spawnAutoload() {
    if (this._disposed) return;

    const shares = this.serviceHost?.getService<ShareManager>("ShareMgmt");
    const autoloadApps: string[] = [];

    this.Log(`Spawning autoload applications`);

    let { startup } = this.preferences();
    startup ||= {};

    for (const payload in startup) {
      const type = startup[payload];

      switch (type.toLowerCase()) {
        case "app":
          autoloadApps.push(payload);
          break;
        case "file":
          if (!this.safeMode) await this.openFile(payload);
          break;
        case "folder":
          if (!this.safeMode) await this.spawnApp("fileManager", undefined, payload);
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

    await this._spawnApp("shellHost", undefined, this.pid, autoloadApps);

    if (this.safeMode) this.safeModeNotice();

    if (BETA)
      this.sendNotification({
        title: "Have any feedback?",
        message:
          "I'd love to hear it! There's a feedback button in the titlebar of every window. Don't hesitate to tell me how I'm doing stuff wrong, what you want to see or what I forgot. I want to hear all of it.",
        buttons: [
          {
            caption: "Send feedback",
            action: () => {
              this.iHaveFeedback(KernelStack().getProcess(+this.env.get("shell_pid"))!);
            },
          },
        ],
        icon: "message-square-heart",
        timeout: 6000,
      });

    if (navigator.userAgent.toLowerCase().includes("firefox")) {
      await MessageBox(
        {
          title: "Firefox support",
          message:
            "Beware! ArcOS doesn't work correctly on Firefox. It's unsure when and if support for Firefox will improve. Please be sure to give feedback to me about anything that doesn't work quite right on Firefox, okay?",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: "FirefoxIcon",
        },
        +this.env.get("shell_pid"),
        true
      );
    }

    this.autoLoadComplete = true;
  }

  checkDisabled(appId: string, noSafeMode?: boolean): boolean {
    if (this._disposed) return false;
    if (this.safeMode && !noSafeMode) {
      return false;
    }

    const { disabledApps } = this.preferences();

    const appStore = this.appStorage();
    const app = appStore?.buffer().filter((a) => a.id === appId)[0];

    if (app && this.isVital(app) && !noSafeMode) return false;

    return (disabledApps || []).includes(appId) || !!(this.safeMode && noSafeMode);
  }

  isVital(app: App) {
    return app.vital && !app.entrypoint && !app.workingDirectory && !app.thirdParty;
  }

  async disableApp(appId: string) {
    if (this._disposed) return false;
    if (this.checkDisabled(appId)) return false;

    this.Log(`Disabling application ${appId}`);

    const appStore = this.appStorage();
    const app = await appStore?.getAppSynchronous(appId);

    if (!app || this.isVital(app)) return;

    const elevated = await this.manuallyElevate({
      what: "ArcOS needs your permission to disable an application",
      image: this.getAppIcon(app),
      title: app.metadata.name,
      description: `By ${app.metadata.author}`,
      level: ElevationLevel.medium,
    });
    if (!elevated) return;

    this.preferences.update((v) => {
      v.disabledApps.push(appId);

      return v;
    });

    const instances = KernelStack().renderer?.getAppInstances(appId);

    if (instances)
      for (const instance of instances) {
        KernelStack().kill(instance.pid, true);
      }

    this.systemDispatch.dispatch("app-store-refresh");
  }

  async enableApp(appId: string) {
    if (this._disposed) return false;
    if (!this.checkDisabled(appId)) return false;

    this.Log(`Enabling application ${appId}`);

    const appStore = this.appStorage();
    const app = await appStore?.getAppSynchronous(appId);

    if (!app) return;

    const elevated = await this.manuallyElevate({
      what: "ArcOS needs your permission to enable an application",
      image: this.getAppIcon(app),
      title: app.metadata.name,
      description: `By ${app.metadata.author}`,
      level: ElevationLevel.medium,
    });
    if (!elevated) return;

    this.preferences.update((v) => {
      if (!v.disabledApps.includes(appId)) return v;

      v.disabledApps.splice(v.disabledApps.indexOf(appId));

      return v;
    });

    this.systemDispatch.dispatch("app-store-refresh");
  }

  async enableThirdParty() {
    const elevated = await this.manuallyElevate({
      what: "ArcOS wants to enable third-party applications",
      title: "Enable Third-party",
      description: "ArcOS System",
      image: "AppsIcon",
      level: ElevationLevel.medium,
    });

    if (!elevated) return;

    this.preferences.update((v) => {
      v.security.enableThirdParty = true;
      return v;
    });
  }

  async disableThirdParty() {
    const elevated = await this.manuallyElevate({
      what: "ArcOS wants to disable third-party applications and kill any running third-party apps",
      title: "Disable Third-party",
      description: "ArcOS System",
      image: "AppsIcon",
      level: ElevationLevel.medium,
    });

    if (!elevated) return;

    this.preferences.update((v) => {
      v.security.enableThirdParty = false;
      return v;
    });

    const store = KernelStack().store();

    for (const [pid, proc] of [...store]) {
      if (!proc._disposed && proc instanceof ThirdPartyAppProcess) KernelStack().kill(pid, true);
    }
  }

  //#endregion
  //#region APP STORAGE

  appStorage() {
    return this.serviceHost?.getService<ApplicationStorage>("AppStorage");
  }

  async initAppStorage(storage: ApplicationStorage, cb: (app: App) => void) {
    this.Log(`Now trying to load built-in applications...`);

    const builtins: App[] = [];
    const blocklist = this.preferences()._internalImportBlocklist || [];

    for (const path in BuiltinAppImportPathAbsolutes) {
      if (!this.safeMode && blocklist.includes(path)) continue;
      try {
        const start = performance.now();
        const mod = await BuiltinAppImportPathAbsolutes[path]();
        const app = (mod as any).default as App;

        if (app._internalMinVer && compareVersion(ArcOSVersion, app._internalMinVer) === "higher")
          throw `Not loading ${app.metadata.name} because this app requires a newer version of ArcOS`;

        if (app._internalSysVer || app._internalOriginalPath)
          throw `Can't load dubious built-in app '${app.id}' because it contains runtime-level properties set before runtime`;

        const end = performance.now() - start;
        const appCopy = await deepCopyWithBlobs<App>(app);

        appCopy._internalSysVer = `v${ArcOSVersion}-${ArcMode()}_${ArcBuild()}`;
        appCopy._internalOriginalPath = path;
        appCopy._internalLoadTime = end;

        builtins.push(appCopy);
        cb(appCopy);
        this.Log(
          `Loaded app: ${path}: ${appCopy.metadata.name} by ${appCopy.metadata.author}, version ${app.metadata.version} (${end.toFixed(2)}ms)`
        );
      } catch (e) {
        await new Promise<void>((r) => {
          MessageBox(
            {
              title: "App load error",
              message: `ArcOS failed to load a built-in app because of an error. ${e}.`,
              buttons: [{ caption: "Okay", action: () => r(), suggested: true }],
              image: "WarningIcon",
            },
            +this.env.get("loginapp_pid"),
            true
          );
        });
        this.Log(`Failed to load app ${path}: ${e}`);
      }
    }

    storage.loadOrigin("builtin", () => builtins);
    storage.loadOrigin("userApps", async () => await this.getUserApps());
    await storage.refresh();
  }

  async getUserApps(): Promise<AppStorage> {
    if (this._disposed) return [];
    if (!this.preferences()) return [];

    await this.migrateUserAppsToFs();

    const bulk = Object.fromEntries(
      Object.entries(await this.fs.bulk(UserPaths.AppRepository, "json")).map(([k, v]) => [k.replace(".json", ""), v])
    );

    return Object.values(bulk) as AppStorage;
  }

  async registerApp(data: InstalledApp) {
    this.Log(`Registering ${data.id}: writing ${data.id}.json to AppRepository`);
    const appStore = this.appStorage();

    await this.fs.writeFile(join(UserPaths.AppRepository, `${data.id}.json`), textToBlob(JSON.stringify(data, null, 2)));
    await appStore?.refresh();
  }

  async deleteApp(id: string, deleteFiles = false) {
    this.Log(`Attempting to uninstall app '${id}'`);
    const distrib = this.serviceHost?.getService<DistributionServiceProcess>("DistribSvc");
    const appStore = this.appStorage();

    if (!distrib) return false;

    const prog = await this.GlobalLoadIndicator();
    const result = await distrib.uninstallApp(id, deleteFiles, (s) => prog.caption.set(s));

    delete appStore!.appIconCache[id];

    await prog.stop();

    return result;
  }

  async registerAppFromPath(path: string) {
    try {
      const contents = await this.fs.readFile(path);
      if (!contents) return "failed to read file";

      const text = arrayToText(contents);
      const json = tryJsonParse<InstalledApp>(text);

      if (typeof json !== "object") return "failed to convert to JSON";

      if (!json.metadata || !json.entrypoint) return "missing properties";

      (json as any).thirdParty = true;
      json.tpaPath = path;
      json.workingDirectory = getParentDirectory(path);

      await this.registerApp(json);
    } catch (e) {
      this.Log(`Failed to install app from "${path}": ${e}`, LogLevel.error);
    }
  }

  async uninstallAppWithAck(app: App): Promise<boolean> {
    return new Promise<boolean>((r) => {
      MessageBox(
        {
          title: "Uninstall app?",
          message: `You're about to uninstall "${app?.metadata?.name || "Unknown"}" by ${
            app?.metadata?.author || "nobody"
          }. Do you want to just uninstall it, or do you want to delete its files also?`,
          image: "WarningIcon",
          sound: "arcos.dialog.warning",
          buttons: [
            {
              caption: "Cancel",
              action: () => {
                r(false);
              },
            },
            {
              caption: "Delete",
              action: () => {
                this.deleteApp(app?.id, true);
                r(true);
              },
            },
            {
              caption: "Just uninstall",
              action: () => {
                this.deleteApp(app?.id, false);
                r(true);
              },
              suggested: true,
            },
          ],
        },
        +this.env.get("shell_pid"),
        true
      );
    });
  }

  getAppIcon(app: App) {
    return this.getIconCached(`@app::${app.id}`) || ComponentIcon;
  }

  getAppIconByProcess(process: AppProcess) {
    return this.getAppIcon(process.app?.data) || ComponentIcon;
  }

  async getIcon(id: string): Promise<string> {
    const iconService = this.serviceHost?.getService<IconService>("IconService");

    return (await iconService?.getIcon(id)) || ComponentIcon;
  }

  getIconCached(id: string): string {
    const iconService = this.serviceHost?.getService<IconService>("IconService");

    return iconService?.getIconCached(id) || "";
  }

  getIconStore(id: string): ReadableStore<string> {
    const store = Store<string>();
    const iconService = this.serviceHost?.getService<IconService>("IconService");

    if (!iconService) store.set(maybeIconId(id) || "");

    iconService?.getIcon(id)?.then((i) => store.set(i));

    return store;
  }

  async pinApp(appId: string) {
    this.Log(`Pinning ${appId}`);

    const appStore = this.serviceHost?.getService("AppStorage") as ApplicationStorage;
    const app = appStore?.getAppSynchronous(appId);

    if (!app) return;

    this.preferences.update((v) => {
      if (v.pinnedApps.includes(appId)) return v;

      v.pinnedApps.push(appId);

      return v;
    });
  }

  unpinApp(appId: string) {
    this.Log(`Unpinning ${appId}`);

    this.preferences.update((v) => {
      if (!v.pinnedApps.includes(appId)) return v;

      v.pinnedApps.splice(v.pinnedApps.indexOf(appId), 1);

      return v;
    });
  }

  //#endregion
  //#region APP RENDERER
  getAppRendererStyle(accent: string) {
    if (this._disposed) return "";

    return `--accent: ${hex3to6(accent)} !important;
    --accent-transparent: ${hex3to6(accent)}44 !important;
    --accent-light: ${lightenColor(accent)} !important;
    --accent-lighter: ${lightenColor(accent, 7.5)} !important;
    --accent-dark: ${darkenColor(accent, 75)} !important;
    --accent-darkest: ${darkenColor(accent, 85)} !important;
    --accent-light-transparent: ${lightenColor(accent)}77 !important;
    --accent-light-invert: ${invertColor(lightenColor(accent))} !important;
    --accent-suggested-start: #${accent} !important;
    --accent-suggested-end: ${darkenColor(accent, 10)} !important;
    --accent-suggested-fg: ${bestForeground(accent)} !important;
    --wallpaper: url('${this.Wallpaper()?.url || Wallpapers.img0.url}');
    --user-font: "${this.preferences().shell.visuals.userFont || ""};
    --blur: ${this.preferences().shell.visuals.blurRadius}px !important;`;
  }

  async setAppRendererClasses(v: UserPreferences) {
    const renderer = KernelStack().renderer?.target;

    if (!renderer) throw new Error("UserDaemon: Tried to set renderer classes without renderer");

    const accent = v.desktop.accent;
    const theme = v.desktop.theme;
    let blur = v.shell.visuals.blurRadius;

    let style = this.getAppRendererStyle(accent);

    this.setUserStyleLoader(v.shell.customStyle);

    renderer.removeAttribute("class");
    renderer.setAttribute("style", style);
    renderer.classList.add(`theme-${theme}`);
    renderer.classList.toggle("sharp", v.shell.visuals.sharpCorners);
    renderer.classList.toggle("noani", v.shell.visuals.noAnimations || this.safeMode);
    renderer.classList.toggle("noglass", v.shell.visuals.noGlass || this.safeMode);
    renderer.classList.toggle("safe-mode", this.safeMode);
    renderer.classList.toggle("traffic-lights", v.shell.visuals.trafficLights);
    // renderer.style.setProperty("--blur", `${blur}px`);
  }

  setUserStyleLoader(style: CustomStylePreferences) {
    if (this._disposed || this.safeMode) return;

    let styleLoader = KernelStack().renderer?.target.querySelector("#userStyleLoader");

    if (!styleLoader) {
      styleLoader = document.createElement("style");
      styleLoader.id = "userStyleLoader";

      KernelStack().renderer?.target.append(styleLoader);
    }

    styleLoader.textContent = style.enabled && !this._elevating ? style.content || "" : "";
  }

  //#endregion
  //#region USER ACCOUNT

  async discontinueToken(token = this.token) {
    if (this._disposed) return;

    this.Log(`Discontinuing token`);

    try {
      const response = await Backend.post(`/logout`, {}, { headers: { Authorization: `Bearer ${token}` } });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getUserInfo(): Promise<UserInfo | undefined> {
    if (this._disposed) return;

    if (this.initialized) {
      this.Log(`Tried to get user info while initialization is already complete`, LogLevel.warning);

      return;
    }

    this.Log("Getting user information");

    try {
      const response = this.userInfo._id
        ? {
            status: 200,
            data: this.userInfo,
          }
        : await Backend.get(`/user/self`, {
            headers: { Authorization: `Bearer ${this.token}` },
          });

      const data = response.status === 200 ? (response.data as UserInfo) : undefined;

      if (!data) return undefined;

      this.preferences.set(data.preferences);

      this.sanitizeUserPreferences();

      this.initialized = true;
      this.userInfo = data;
      this.env.set("currentuser", this.username);
      if (data.admin) this.env.set("administrator", data.admin);

      return response.status === 200 ? (response.data as UserInfo) : undefined;
    } catch {
      await this.killSelf();

      return undefined;
    }
  }

  async changeUsername(newUsername: string): Promise<boolean> {
    if (this._disposed) return false;

    this.Log(`Changing username to "${newUsername}"`);

    const elevated = await this.manuallyElevate({
      what: "ArcOS needs your permission to change your username:",
      image: "AccountIcon",
      title: "Change username",
      description: `To ${newUsername}`,
      level: ElevationLevel.medium,
    });

    if (!elevated) return false;

    try {
      const response = await Backend.patch("/user/rename", toForm({ newUsername }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      if (response.status !== 200) return false;

      this.username = newUsername;
      this.systemDispatch.dispatch("change-username", [newUsername]);

      Cookies.set("arcUsername", newUsername, {
        expires: 14,
        domain: import.meta.env.DEV ? "localhost" : "izk-arcos.nl",
      });

      return true;
    } catch {
      return false;
    }
  }

  async changePassword(newPassword: string): Promise<boolean> {
    if (this._disposed) return false;

    this.Log(`Changing password to [REDACTED]`);

    const elevated = await this.manuallyElevate({
      what: "ArcOS needs your permission to change your password:",
      image: "PasswordIcon",
      title: "Change password",
      description: `of ${this.username}`,
      level: ElevationLevel.medium,
    });

    if (!elevated) return false;

    try {
      const response = await Backend.post("/user/changepswd", toForm({ newPassword }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      if (response.status !== 200) return false;

      return true;
    } catch {
      return false;
    }
  }

  async getPublicUserInfoOf(userId: string): Promise<PublicUserInfo | undefined> {
    try {
      const response = await Backend.get(`/user/info/${userId}`, { headers: { Authorization: `Bearer ${this.token}` } });
      const information = response.data as PublicUserInfo;

      information.profilePicture = `${this.server.url}/user/pfp/${userId}${authcode()}`;

      return information;
    } catch {
      return undefined;
    }
  }

  async deleteAccount() {
    MessageBox(
      {
        title: "Delete ArcOS Account",
        content: DeleteUser,
        image: "TrashIcon",
        buttons: [
          {
            caption: "Back to safety",
            action: () => {},
          },
          {
            caption: "Delete account",
            action: async () => {
              await Backend.delete(`/user`, { headers: { Authorization: `Bearer ${this.token}` } });
              this.logoff();
            },
            suggested: true,
          },
        ],
        sound: "arcos.dialog.warning",
      },
      +this.env.get("shell_pid"),
      true
    );
  }

  //#endregion
  //#region USER PREFERENCES

  async startPreferencesSync() {
    if (this._disposed) return;

    this.Log(`Starting user preferences commit sync`);

    const unsubscribe = this.preferences.subscribe(async (v) => {
      if (this._disposed) return unsubscribe();
      if (!v || v.isDefault) return;

      v = this.checkCurrentThemeIdValidity(v);

      if (!this.firstSyncDone) this.firstSyncDone = true;
      else if (!this.syncLock) this.commitPreferences(v);

      this.setAppRendererClasses(v);
      this.updateWallpaper(v);
      this.syncVirtualDesktops(v);
    });

    this.preferencesUnsubscribe = unsubscribe;
  }

  async commitPreferences(preferences: UserPreferences) {
    if (this._disposed) return;

    if (this.NIGHTLY) {
      this.Log("User preference commit prohibited: nightly build");
      return true;
    }
    this.Log(`Committing user preferences`);

    try {
      const response = await Backend.put(`/user/preferences`, preferences, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      this.Log(`Failed to commit user preferences!`, LogLevel.error);
    }
  }

  async sanitizeUserPreferences() {
    if (this._disposed) return;

    if (this.initialized) {
      this.Log(`Tried to sanitize user preferences while initialization is already complete`);

      return;
    }

    const preferences = this.preferences() || {};

    if (preferences.isDefault) {
      this.Log(`Not sanitizing default preferences`, LogLevel.warning);
    }

    if (!preferences.startup)
      preferences.startup = {
        wallpaper: "app",
      };

    if (!preferences.pinnedApps?.length)
      preferences.pinnedApps = ["$", "fileManager", "Messages", "AppStore", "systemSettings", "processManager"];

    const result = applyDefaults<UserPreferences>(preferences, {
      ...DefaultUserPreferences,
      isDefault: undefined,
    });

    if (!result.globalSettings.shellExec) result.globalSettings.shellExec = "arcShell";

    this.preferences.set(result);
    this.commitPreferences(result);
  }

  getGlobalSetting(key: string) {
    return this.preferences().globalSettings[key];
  }

  setGlobalSetting(key: string, value: any) {
    this.preferences.update((v) => {
      v.globalSettings[key] = value;

      return v;
    });
  }

  //#endregion
  //#region WALLPAPERS

  async updateWallpaper(v: UserPreferences) {
    if (this._disposed) return;

    const incoming = v.desktop.wallpaper;

    if (incoming === this.lastWallpaper()) return;

    this.lastWallpaper.set(incoming);

    const wallpaper = await this.getWallpaper(incoming);

    if (!wallpaper) return;

    this.Wallpaper.set(wallpaper);
  }

  async uploadWallpaper(pid?: number): Promise<Wallpaper | undefined> {
    if (this._disposed) return;

    this.Log(`Uploading wallpaper to U:/Wallpapers`);

    const prog = await this.FileProgress(
      {
        type: "size",
        icon: "ImageMimeIcon",
        caption: "Uploading a wallpaper of your choosing",
        subtitle: `To U:/Wallpapers`,
      },
      pid
    );

    try {
      const result = await this.fs.uploadFiles(UserPaths.Wallpapers, "image/*", false, (progress) => {
        prog.show();
        prog.setMax(progress.max);
        prog.setDone(progress.value);
      });

      if (!result.length) {
        prog.stop();
        return {} as Wallpaper;
      }

      const { path, file } = result[0];

      const wallpaper: Wallpaper = {
        author: this.username,
        name: file.name,
        url: "",
        thumb: "",
      };

      this.preferences.update((v) => {
        v.userWallpapers ||= {};
        v.userWallpapers[`@local:${btoa(path)}`] = wallpaper;

        return v;
      });

      return wallpaper;
    } catch {
      prog.stop();
    }
  }

  public async getWallpaper(id: string, override?: string): Promise<Wallpaper> {
    if (this._disposed) return Wallpapers["img0"];

    if (!id) return Wallpapers[override || "img0"];

    if (id.startsWith("http"))
      return {
        author: "The Web",
        name: "From the Internet",
        url: id,
        thumb: id,
      };

    for (const [prefix, getter] of this.wallpaperGetters) {
      if (id.startsWith(prefix)) return await getter(id);
    }

    return Wallpapers[override || "img0"];
  }

  async deleteLocalWallpaper(id: string): Promise<boolean> {
    if (this._disposed) return false;

    this.Log(`Deleting local wallpaper '${id}'`);

    const path = atob(id.replace("@local:", ""));
    let result: boolean = false;

    try {
      result = await this.fs.deleteItem(path);
    } catch {
      result = false;
    }

    this.preferences.update((v) => {
      delete v.userWallpapers[id];

      return v;
    });

    delete this.localWallpaperCache[id];

    return result;
  }

  async getLocalWallpaper(id: string): Promise<Wallpaper> {
    if (this._disposed) return Wallpapers.img0;

    const wallpaperData = this.preferences().userWallpapers[id];

    if (!wallpaperData) {
      this.Log(`Tried to get unknown user wallpaper '${id}', defaulting to img04`, LogLevel.warning);

      return Wallpapers.img04;
    }
    if (this.localWallpaperCache[id])
      return {
        ...wallpaperData,
        url: URL.createObjectURL(this.localWallpaperCache[id]),
        thumb: URL.createObjectURL(this.localWallpaperCache[id]),
      };

    try {
      const path = atob(id.replace("@local:", ""));
      const parent = await this.fs.readDir(getParentDirectory(path));
      const contents = await this.fs.readFile(path);

      if (!contents || !parent) {
        this.Log(`User wallpaper '${id}' doesn't exist on the filesystem anymore, defaulting to img04`, LogLevel.warning);

        return Wallpapers.img04;
      }

      const blob = arrayToBlob(contents, parent.files.filter((f) => path.endsWith(f.name))[0]?.mimeType || "");
      const blobUrl = URL.createObjectURL(blob);

      this.localWallpaperCache[id] = blob;

      return {
        ...wallpaperData,
        url: blobUrl,
        thumb: blobUrl,
      };
    } catch {
      return Wallpapers.img0;
    }
  }
  //#endregion
  //#region THEMES

  themeFromUserPreferences(data: UserPreferences, name: string, author: string, version: string): UserTheme {
    if (this._disposed) return {} as UserTheme;

    return {
      author,
      version,
      name,
      taskbarLabels: data.shell.taskbar.labels,
      taskbarDocked: data.shell.taskbar.docked,
      taskbarColored: data.shell.taskbar.colored,
      noAnimations: data.shell.visuals.noAnimations,
      sharpCorners: data.shell.visuals.sharpCorners,
      compactContext: data.shell.visuals.compactContext,
      noGlass: data.shell.visuals.noGlass,
      desktopWallpaper: data.desktop.wallpaper,
      desktopTheme: data.desktop.theme,
      desktopAccent: data.desktop.accent,
      loginBackground: data.account.loginBackground || "img18",
    };
  }

  saveCurrentTheme(name: string) {
    if (this._disposed) return;

    this.Log(`Saving current theme as '${name}'`);

    const id = `${Math.floor(Math.random() * 1e6)}`;

    this.preferences.update((userPreferences) => {
      const context = this.themeFromUserPreferences(userPreferences, name, this.username, "1.0");

      userPreferences.userThemes[id] = context;

      return userPreferences;
    });
  }

  applyThemeData(data: UserTheme, id?: string) {
    if (this._disposed || !data) return;

    this.Log(`Apply theme data, ID='${id}'`);

    const verifier = this.verifyTheme(data);

    if (verifier !== "themeIsValid") {
      this.Log(`Not loading invalid theme! Missing ${verifier}`, LogLevel.error);

      return false;
    }

    this.preferences.update((userPreferences) => {
      userPreferences.shell.taskbar.labels = !!data.taskbarLabels;
      userPreferences.shell.taskbar.docked = !!data.taskbarDocked;
      userPreferences.shell.taskbar.colored = !!data.taskbarColored;
      userPreferences.shell.visuals.noAnimations = !!data.noAnimations;
      userPreferences.shell.visuals.sharpCorners = !!data.sharpCorners;
      userPreferences.shell.visuals.compactContext = !!data.compactContext;
      userPreferences.shell.visuals.noGlass = !!data.noGlass;
      userPreferences.desktop.wallpaper = data.desktopWallpaper;
      userPreferences.desktop.accent = data.desktopAccent;
      userPreferences.desktop.theme = data.desktopTheme;
      userPreferences.account.loginBackground = data.loginBackground || "img18";

      if (id) userPreferences.currentThemeId = id;

      return userPreferences;
    });
  }

  applySavedTheme(id: string) {
    if (this._disposed) return;

    this.Log(`Applying saved theme '${id}'`);

    const userPreferences = this.preferences();

    if (!userPreferences.userThemes[id]) return;

    this.applyThemeData(userPreferences.userThemes[id], id);
  }

  verifyTheme(data: UserTheme) {
    if (this._disposed) return;

    const keys = Object.keys(data);

    for (const key of UserThemeKeys) {
      if (!keys.includes(key)) return key;
    }

    return "themeIsValid";
  }

  checkCurrentThemeIdValidity(data: UserPreferences): UserPreferences {
    if (this._disposed) return DefaultUserPreferences;

    const { currentThemeId } = data;

    if (!currentThemeId) return data;

    const retrievedThemeData = BuiltinThemes[currentThemeId] || (data.userThemes || {})[currentThemeId];

    if (!retrievedThemeData) return data;

    const theme = this.themeFromUserPreferences(
      data,
      retrievedThemeData.name,
      retrievedThemeData.author,
      retrievedThemeData.version
    );

    if (JSON.stringify(theme) !== JSON.stringify(retrievedThemeData)) data.currentThemeId = undefined;

    return data;
  }

  deleteUserTheme(id: string) {
    if (this._disposed) return;

    this.Log(`Deleting user theme '${id}'`);

    this.preferences.update((udata) => {
      if (!udata.userThemes) return udata;

      delete udata.userThemes[id];

      return udata;
    });
  }

  //#endregion
  //#region PROFILE PICTURES

  changeProfilePicture(newValue: string | number) {
    this.preferences.update((v) => {
      v.account.profilePicture = newValue;
      return v;
    });

    this.systemDispatch.dispatch("pfp-changed", [newValue]);
    this.globalDispatch?.emit("pfp-changed", newValue);
  }

  async uploadProfilePicture(): Promise<string | undefined> {
    if (this._disposed) return undefined;

    this.Log(`Uploading profile picture to ${UserPaths.Pictures}`);

    try {
      const result = await this.fs.uploadFiles(UserPaths.Pictures, "image/*");
      if (!result.length) return;

      const { path } = result[0];
      this.changeProfilePicture(path);

      return path;
    } catch {
      return;
    }
  }

  //#endregion
  //#region WORKSPACES

  async syncVirtualDesktops(v: UserPreferences) {
    if (this._disposed) return;
    if (!this.virtualDesktop) return;

    this.Log(`Syncing virtual desktop render state`);

    const { desktops, index } = v.workspaces;

    for (const { uuid } of desktops) {
      this.virtualDesktop?.querySelector(`[id*="${uuid}"]`)?.classList.remove("selected");
      if (!this.virtualDesktops[uuid]) this.renderVirtualDesktop(uuid);
    }

    if (this.virtualDesktopIndex === index) return;

    if (v.shell.visuals.noAnimations) {
      this.virtualDesktop.setAttribute("style", `--index: ${index};`);
    } else {
      this.virtualDesktop.classList.add("changing");
      this.virtualDesktop.setAttribute("style", `--index: ${index};`);

      this.virtualDesktop?.children[index]?.classList.add("selected");

      if (this.virtualdesktopChangingTimeout) clearTimeout(this.virtualdesktopChangingTimeout);

      this.virtualdesktopChangingTimeout = setTimeout(() => {
        this.virtualDesktop?.classList.remove("changing");
      }, 300);
    }

    this.virtualDesktopIndex = index;
  }

  renderVirtualDesktop(uuid: string) {
    if (this._disposed) return;

    this.Log(`Rendering virtual desktop "${uuid}"`);

    const desktop = document.createElement("div");

    desktop.className = "workspace";
    desktop.id = uuid;

    this.virtualDesktop?.append(desktop);
    this.virtualDesktops[uuid] = desktop;
  }

  async deleteVirtualDesktop(uuid: string) {
    if (this._disposed) return;

    this.Log(`Deleting virtual desktop "${uuid}"`);

    const index = this.getDesktopIndexByUuid(uuid);

    if (this.getCurrentDesktop()?.id === uuid) {
      this.previousDesktop();
    }

    if (index < 0) return;

    this.preferences.update((v) => {
      v.workspaces.desktops.splice(index, 1);

      return v;
    });

    const desktop = this.virtualDesktop?.querySelector(`[id*="${uuid}"]`);

    if (!desktop) return;

    await this.killWindowsOfDesktop(uuid);

    desktop.remove();
    delete this.virtualDesktops[uuid];
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
    this.virtualDesktop = inner;

    this.syncVirtualDesktops(this.preferences());
  }

  getCurrentDesktop(): HTMLDivElement | undefined {
    if (this._disposed) return;

    const { workspaces } = this.preferences();

    if (!workspaces.desktops.length) {
      this.createWorkspace("Default");
      this.createWorkspace();
      this.createWorkspace();
      return this.getCurrentDesktop();
    }

    const uuid = workspaces.desktops[workspaces.index]?.uuid;

    if (!uuid) return undefined;

    return this.virtualDesktops[uuid];
  }

  createWorkspace(name?: string) {
    if (this._disposed) return;

    this.Log(`Creating new workspace "${name || "<NO NAME>"}"`);

    const uuid = UUID();

    this.preferences.update((v) => {
      v.workspaces.desktops.push({ uuid, name });
      return v;
    });
  }

  getDesktopIndexByUuid(uuid: string) {
    if (this._disposed) return -1;

    const {
      workspaces: { desktops },
    } = this.preferences();

    for (let i = 0; i < desktops.length; i++) {
      if (uuid === desktops[i].uuid) return i;
    }

    return -1;
  }

  switchToDesktopByUuid(uuid: string) {
    if (this._disposed) return;

    this.Log(`Switching to workspace with UUID "${uuid}"`);

    const i = this.getDesktopIndexByUuid(uuid);

    if (i < 0) return;

    this.preferences.update((v) => {
      v.workspaces.index = i;
      return v;
    });
  }

  async killWindowsOfDesktop(uuid: string) {
    if (this._disposed) return;

    this.Log(`Killing processes on workspace with UUID "${uuid}"`);

    const processes = KernelStack().store();

    for (const [_, proc] of [...processes]) {
      if (!(proc instanceof AppProcess)) continue;

      if (proc.app.desktop === uuid) await proc.closeWindow();

      return true;
    }

    return false;
  }

  nextDesktop() {
    this.Log(`Switching to the next available workspace`);

    const {
      workspaces: { desktops, index },
    } = this.preferences();

    if (desktops.length - 1 >= index + 1) {
      this.preferences.update((v) => {
        v.workspaces.index++;

        return v;
      });

      return true;
    }

    return false;
  }

  previousDesktop() {
    this.Log(`Switching to the previous available workspace`);

    const {
      workspaces: { index },
    } = this.preferences();

    if (index - 1 >= 0) {
      this.preferences.update((v) => {
        v.workspaces.index--;

        return v;
      });
    }
  }

  async moveWindow(pid: number, destination: string) {
    this.Log(`Moving window ${pid} to destination ${destination}`);

    const proc = KernelStack().getProcess(pid);
    const destinationWorkspace = this.virtualDesktops[destination];
    const window = document.querySelector(`#appRenderer div.window[data-pid*='${pid}']`);

    if (!proc || !(proc instanceof AppProcess) || !destinationWorkspace || !window) return;

    const currentWorkspace = proc.app.desktop;

    if (currentWorkspace && this.getCurrentDesktop()?.id === currentWorkspace && KernelStack().renderer?.focusedPid() === pid) {
      this.switchToDesktopByUuid(destination);
    }

    await Sleep(100);

    destinationWorkspace.appendChild(window);
    proc.app.desktop = destination;
    KernelStack().store.update((v) => {
      v.set(pid, proc);

      return v;
    });
  }

  //#endregion
  //#region NOTIFICATIONS

  sendNotification(data: Notification) {
    if (this._disposed) return;

    this.Log(`Sending notification: ${data.title} -> ${data.message.length} body bytes`);

    const id = `${Math.floor(Math.random() * 1e9)}`;

    data.timestamp = Date.now();

    this.notifications.set(id, data);
    this.systemDispatch.dispatch("update-notifications", [this.notifications]);
    this.systemDispatch.dispatch("send-notification", [data]);

    return id;
  }

  deleteNotification(id: string) {
    if (this._disposed) return;

    this.Log(`Deleting notification '${id}'`);

    const notification = this.notifications.get(id);

    if (!notification) return;

    notification.deleted = true;

    this.notifications.set(id, notification);

    this.systemDispatch.dispatch("delete-notification", [id]);
    this.systemDispatch.dispatch("update-notifications", [this.notifications]);
  }

  clearNotifications() {
    if (this._disposed) return;

    this.Log(`Clearing notifications`);

    this.notifications = new Map<string, Notification>([]);
    this.systemDispatch.dispatch("update-notifications", [this.notifications]);
  }

  //#endregion
  //#region ELEVATION

  async elevate(id: string) {
    if (this._disposed) return false;

    this.Log(`Elevating for "${id}"`);

    const data = this.elevations[id];

    if (!data) return false;

    return await this.manuallyElevate(data);
  }

  async manuallyElevate(data: ElevationData) {
    if (this._disposed) return false;

    this.Log(`Manually elevating "${data.what}"`);

    const id = UUID();
    const key = UUID();
    const shellPid = this.env.get("shell_pid");

    if (this.preferences().security.disabled) return true;
    if (this.preferences().disabledApps.includes("SecureContext")) return true;

    this._elevating = true;
    this.setAppRendererClasses(this.preferences());

    if (shellPid) {
      const proc = await this._spawnOverlay("SecureContext", undefined, +shellPid, id, key, data);

      if (!proc) return false;
    } else {
      const proc = await this._spawnApp("SecureContext", undefined, this.pid, id, key, data);

      if (!proc) return false;
    }

    return new Promise((r) => {
      this.systemDispatch.subscribe("elevation-approve", (data) => {
        if (data[0] === id && data[1] === key) {
          r(true);
          this._elevating = false;
          this.setAppRendererClasses(this.preferences());
        }
      });

      this.systemDispatch.subscribe("elevation-deny", (data) => {
        if (data[0] === id && data[1] === key) {
          r(false);
          this._elevating = false;
          this.setAppRendererClasses(this.preferences());
        }
      });
    });
  }

  loadElevation(id: string, data: ElevationData) {
    if (this._disposed) return;

    this.Log(`Loading elevation "${id}"`);

    this.elevations[id] = data;
  }

  //#endregion
  //#region GENERIC CHECKS

  checkReducedMotion() {
    if (this.getGlobalSetting("reducedMotionDetection_disable") || this.preferences().shell.visuals.noAnimations) return;

    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      this.sendNotification({
        title: "Disable animations?",
        message: "ArcOS has detected that your device has Reduced Motion activated. Do you want ArcOS to reduce animations also?",
        buttons: [
          {
            caption: "Don't show again",
            action: () => {
              this.setGlobalSetting("reducedMotionDetection_disable", true);
            },
          },
          {
            caption: "Reduce",
            action: () => {
              this.preferences.update((v) => {
                v.shell.visuals.noAnimations = true;
                return v;
              });
            },
          },
        ],
        image: "PersonalizationIcon",
        timeout: 6000,
      });
    }
  }

  async checkForUpdates() {
    if (this.preferences().globalSettings.noUpdateNotif) return;

    const distrib = this.serviceHost?.getService<DistributionServiceProcess>("DistribSvc");
    const updates = await distrib?.checkForAllUpdates();

    if (updates?.length) {
      const first = updates[0];
      const notif = this.sendNotification({
        ...(updates.length === 1
          ? {
              title: "Update available!",
              message: `${first.pkg.pkg.name} can be updated from <b>v${first.oldVer}</b> to <b>v${first.newVer}</b>. Update now to get the latest features and security fixes.`,
              image: StoreItemIcon(first.pkg),
            }
          : {
              title: "Updates available!",
              message: `${updates.length} ${Plural(
                "package",
                updates.length
              )} can be updated. Update now to get the latest features and security fixes.`,
              image: "AppStoreIcon",
            }),
        buttons: [
          {
            caption: "View",
            action: () => {
              if (notif) this.deleteNotification(notif);

              this.spawnApp("AppStore", +this.env.get("shell_pid"), "installed");
            },
            suggested: true,
          },
          {
            caption: "Don't show again",
            action: () => {
              if (notif) this.deleteNotification(notif);

              this.preferences.update((v) => {
                v.globalSettings.noUpdateNotif = true;
                return v;
              });
            },
          },
        ],
      });
    }
  }

  async checkForMissedMessages() {
    const service = this.serviceHost!.getService<MessagingInterface>("MessagingService")!;
    const archived = this.preferences().appPreferences?.Messages?.archive || [];
    const messages =
      (await service?.getReceivedMessages())?.filter(
        (m) => !m.read && !archived.includes(m._id) && m.authorId !== this.userInfo?._id
      ) || [];

    if (!messages?.length) return;

    if (messages?.length === 1) {
      const message = messages[0];
      this.sendNotification({
        className: "incoming-message",
        image: message.author?.profilePicture,
        title: message.author?.username || "New message",
        message: message.title,
        buttons: [
          {
            caption: "View message",
            action: () => {
              this.spawnApp("Messages", +this.env.get("shell_pid"), "inbox", message._id);
            },
          },
        ],
      });
    } else {
      this.sendNotification({
        title: "Missed messages",
        message: `You have ${messages.length} ${Plural("message", messages.length)} in your inbox that you haven't read yet.`,
        image: "MessagingIcon",
        buttons: [
          {
            caption: "Open inbox",
            action: () => {
              this.spawnApp("Messages", +this.env.get("shell_pid"), "inbox");
            },
          },
        ],
      });
    }
  }

  //#endregion
  //#region GENERIC HELPERS

  async GlobalLoadIndicator(caption?: string, pid?: number) {
    const process = await KernelStack().spawn<GlobalLoadIndicatorRuntime>(
      GlobalLoadIndicatorRuntime,
      undefined,
      this.userInfo!._id,
      pid || +this.env.get("shell_pid"),
      {
        data: { ...GlobalLoadIndicatorApp, overlay: true },
        id: GlobalLoadIndicatorApp.id,
        desktop: undefined,
      },
      caption
    );

    if (!process)
      return {
        caption: Store<string>(),
        stop: async () => {},
      };

    return {
      caption: process.caption,
      stop: async () => {
        await Sleep(500);
        await process.closeWindow();
      },
    };
  }

  async Confirm(title: string, message: string, no: string, yes: string, image = "QuestionIcon", pid?: number) {
    const shellPid = pid || +this.env.get("shell_pid");
    return new Promise((r) => {
      MessageBox(
        {
          title,
          message,
          image,
          buttons: [
            { caption: no, action: () => r(false) },
            { caption: yes, action: () => r(true), suggested: true },
          ],
        },
        shellPid,
        !!shellPid
      );
    });
  }

  async TerminalWindow(pid = +this.env.get("shell_pid")): Promise<ExpandedTerminal | undefined> {
    const process = await KernelStack().spawn<TerminalWindowRuntime>(TerminalWindowRuntime, undefined, this.userInfo!._id, pid, {
      data: { ...TerminalWindowApp },
      id: TerminalWindowApp.id,
      desktop: undefined,
    });

    if (!process?.term) return undefined;

    const term: ExpandedTerminal = process.term;
    term.process = process;

    return term;
  }

  async IconPicker(data: Omit<IconPickerData, "returnId">) {
    if (this._disposed) return;

    this.Log(`Opening OpenWith for ${data.forWhat}`);

    const uuid = UUID();

    await this.spawnOverlay("IconPicker", +this.env.get("shell_pid"), {
      ...data,
      returnId: uuid,
    });

    return new Promise<string>(async (r) => {
      this.systemDispatch.subscribe<[string, string]>("ip-confirm", ([id, icon]) => {
        if (id === uuid) r(icon);
      });
      this.systemDispatch.subscribe("ip-cancel", ([id]) => {
        if (id === uuid) r(data.defaultIcon);
      });
    });
  }

  ParentIs(proc: AppProcess, appId: string) {
    const targetAppInstances = KernelStack()
      .renderer?.getAppInstances(appId)
      .map((p) => p.pid);

    return targetAppInstances?.includes(proc.parentPid);
  }

  //#endregion
  //#region MISCELLANEOUS STUFF

  safeModeNotice() {
    MessageBox(
      {
        title: "ArcOS is running in safe mode",
        content: SafeModeNotice,
        image: "WarningIcon",
        sound: "arcos.dialog.warning",
        buttons: [
          { caption: "Restart now", action: () => this.restart() },
          { caption: "Okay", action: () => {}, suggested: true },
        ],
      },
      +this.env.get("shell_pid"),
      true
    );
  }

  iHaveFeedback(process: AppProcess) {
    this.spawnApp(
      "BugHuntCreator",
      undefined,
      `[${process.app.id}] Feedback report - ${process.windowTitle()}`,
      `Thank you for submitting feedback to ArcOS! Any feedback is of great help to make ArcOS the best I can. Please be so kind and fill out the following form:

1. Do you want to submit a new 'app', 'feature', or 'other'? Please answer one.
   - Your answer:

2. What do you want me to implement?
   - Your answer:

3. How should I go about this? Any ideas?
   - Your answer:

4. Did a previous version of ArcOS include this (v5 or v6)?
   - Your answer:

5. Convince me why I should implement this feature.
   - Your answer:


**Do not change any of the information below this line.**

------

- Username: ${this.userInfo?.username}
- User ID: ${this.userInfo?._id}

------


# DISCLAIMER

The information provided in this report is subject for review by me or another ArcOS acquaintance. We may contact you using the ArcOS Messages app if we have any additional questions. It's also possible that the feedback you've provided will be converted into a GitHub issue for communication with other developers. By submitting this feedback, you agree to that. The issue will not contain any personal information, any personal information will be filtered out by a human being.`,
      {
        sendAnonymously: true,
        excludeLogs: true,
        makePublic: true,
      }
    );
  }

  async changeShell(id: string) {
    const appStore = this.appStorage();
    const newShell = appStore?.getAppSynchronous(id);

    if (!newShell) return false;

    const proceed = await this.Confirm(
      "Change your shell",
      `${newShell.metadata.name} by ${newShell.metadata.author} wants to act as your ArcOS shell. Do you allow this?`,
      "Deny",
      "Allow"
    );

    if (!proceed) return false;

    this.preferences.update((v) => {
      v.globalSettings.shellExec = id;
      return v;
    });

    const restartNow = await this.Confirm(
      "Restart now?",
      "ArcOS has to restart before the changes will apply. Do you want to restart now?",
      "Not now",
      "Restart",
      "RestartIcon"
    );

    if (restartNow) await this.restart();
  }

  async waitForLeaveInvocationAllow() {
    return new Promise<void>((r) => {
      const interval = setInterval(() => {
        if (!this._blockLeaveInvocations) r(clearInterval(interval));
      }, 1);
    });
  }

  async updateFileAssociations() {
    const appStore = this.serviceHost?.getService<ApplicationStorage>("AppStorage");
    const apps = await appStore?.get();

    if (!apps) return;

    this.assoc?.updateConfiguration((config) => {
      for (const app of apps) {
        if (!app.opens?.extensions) continue;

        for (const extension of app.opens.extensions) {
          const existingAssociation = this.assoc?.getFileAssociation(`dummy${extension}`);

          if (existingAssociation) continue;

          config.associations.apps[app.id] ||= [];
          config.associations.apps[app.id].push(extension);
        }
      }

      for (const definitionKey in DefaultFileDefinitions) {
        const definitionValue = DefaultFileDefinitions[definitionKey];

        if (!config.definitions[definitionKey]) config.definitions[definitionKey] = definitionValue;
      }

      return config;
    });
  }

  //#endregion
  //#region NIGHTLY

  checkNightly() {
    const isNightly = !!this.env.get(`NIGHTLY_WHODIS_${ArcBuild()}`);
    if (!isNightly) return;

    this.Log("NIGHTLY DETECTED. OPERATIONS MIGHT BE RESTRICTED.");

    MessageBox(
      {
        title: "ArcOS Nightly",
        message:
          "You're running a nightly build of ArcOS. Because of potentially major changes, user preference committing and file writes have been disabled to prevent your account from breaking when you return to the stable release. Nightly is NOT recommended for daily use (looking at you, Nik).<br><br>Just a reminder: ArcOS developers cannot be held accountable for breakages when using unstable ArcOS builds. We can however assist and resolve problems when something does go wrong.",
        buttons: [
          { caption: "Jump to stable", action: () => (location.href = "/") },
          { caption: "Okay", action: () => {}, suggested: true },
        ],
        image: NightlyLogo,
        sound: "arcos.dialog.warning",
      },
      this.pid
    );
    this.NIGHTLY = true;
  }

  //#endregion
}
