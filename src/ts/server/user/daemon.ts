import { FsProgressRuntime } from "$apps/components/fsprogress/runtime";
import {
  DummyFileProgress,
  type FileProgressMutator,
  type FsProgressOperation,
} from "$apps/components/fsprogress/types";
import { AppProcess } from "$ts/apps/process";
import { ApplicationStorage } from "$ts/apps/storage";
import { BuiltinApps } from "$ts/apps/store";
import { darkenColor, hex3to6, invertColor, lightenColor } from "$ts/color";
import { MessageBox } from "$ts/dialog";
import { toForm } from "$ts/form";
import { Filesystem } from "$ts/fs";
import { arrayToBlob, arrayToText } from "$ts/fs/convert";
import { ServerDrive } from "$ts/fs/drives/server";
import { ZIPDrive } from "$ts/fs/drives/zipdrive";
import {
  getDirectoryName,
  getDriveLetter,
  getParentDirectory,
} from "$ts/fs/util";
import { applyDefaults } from "$ts/hierarchy";
import { DriveIcon, FolderIcon } from "$ts/images/filesystem";
import { AccountIcon, PasswordIcon } from "$ts/images/general";
import { ImageMimeIcon } from "$ts/images/mime";
import { ProfilePictures } from "$ts/images/pfp";
import type { ArcMSL } from "$ts/msl";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import { Sleep } from "$ts/sleep";
import { Wallpapers } from "$ts/wallpaper/store";
import { Store } from "$ts/writable";
import type { LoginActivity } from "$types/activity";
import type { App, AppStorage, ThirdPartyApp } from "$types/app";
import { ElevationLevel, type ElevationData } from "$types/elevation";
import { LogLevel } from "$types/logging";
import type { BatteryType } from "$types/navigator";
import type { Notification } from "$types/notification";
import { UserThemeKeys, type UserTheme } from "$types/theme";
import type {
  CustomStylePreferences,
  UserInfo,
  UserPreferences,
  WallpaperGetters,
} from "$types/user";
import type { Wallpaper } from "$types/wallpaper";
import { fromExtension } from "human-filetypes";
import Cookies from "js-cookie";
import type { Unsubscriber } from "svelte/store";
import { Axios } from "../axios";
import { DefaultUserInfo, DefaultUserPreferences } from "./default";
import { BuiltinThemes, DefaultMimeIcons } from "./store";
import type { LoadSaveDialogData } from "$apps/user/filemanager/types";

export class UserDaemon extends Process {
  public initialized = false;
  public username: string;
  public token: string;
  public preferences = Store<UserPreferences>();
  public notifications = new Map<string, Notification>([]);
  public userInfo: UserInfo = DefaultUserInfo;
  public battery = Store<BatteryType | undefined>();
  public networkSpeed = Store<number>(-1);
  public appStore: ApplicationStorage | undefined;
  public Wallpaper = Store<Wallpaper>(Wallpapers.img0);
  public lastWallpaper = Store<string>("img0");
  public _elevating = false;
  private elevations: Record<string, ElevationData> = {};
  private preferencesUnsubscribe: Unsubscriber | undefined;
  private wallpaperGetters: WallpaperGetters = [
    ["@local:", async (id: string) => await this.getLocalWallpaper(id)],
    ["img", (id) => Wallpapers[id] || Wallpapers["img04"]],
  ];
  private localWallpaperCache: Record<string, Blob> = {};
  private localProfilePictureCache: Record<string, Blob> = {};
  private virtualDesktops: Record<string, HTMLDivElement> = {};
  private virtualDesktop: HTMLDivElement | undefined;
  private virtualDesktopIndex = -1;
  private mimeIcons: Record<string, string[]> = DefaultMimeIcons;
  private virtualdesktopChangingTimeout: NodeJS.Timeout | undefined;

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    token: string,
    username: string
  ) {
    super(handler, pid, parentPid);

    this.token = token;
    this.username = username;
    this.env.set("userdaemon_pid", this.pid);
  }

  async startApplicationStorage() {
    this.appStore = await this.handler.spawn(
      ApplicationStorage,
      undefined,
      this.pid
    );

    this.appStore?.loadOrigin("builtin", () => BuiltinApps);
    this.appStore?.loadOrigin("userApps", () => this.getUserApps());
  }

  async getUserInfo(): Promise<UserInfo | undefined> {
    if (this._disposed) return;

    if (this.initialized) {
      this.Log(
        `Tried to get user info while initialization is already complete`,
        LogLevel.warning
      );

      return;
    }

    this.Log("Getting user information");

    try {
      const response = await Axios.get(`/user/self`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      const data =
        response.status === 200 ? (response.data as UserInfo) : undefined;

      if (!data) return undefined;

      this.preferences.set(data.preferences);

      this.sanitizeUserPreferences();

      this.initialized = true;
      this.userInfo = data;
      this.env.set("currentuser", this.username);

      return response.status === 200 ? (response.data as UserInfo) : undefined;
    } catch {
      await this.killSelf();

      return undefined;
    }
  }

  async startPreferencesSync() {
    if (this._disposed) return;

    this.Log(`Starting user preferences commit sync`);

    const unsubscribe = this.preferences.subscribe(async (v) => {
      if (this._disposed) return unsubscribe();

      if (!v || v.isDefault) return;

      v = this.checkCurrentThemeIdValidity(v);
      this.commitPreferences(v);
      this.setAppRendererClasses(v);
      this.updateWallpaper(v);
      this.syncVirtualDesktops(v);
    });

    this.preferencesUnsubscribe = unsubscribe;
  }

  async updateWallpaper(v: UserPreferences) {
    if (this._disposed) return;

    const incoming = v.desktop.wallpaper;

    if (incoming === this.lastWallpaper()) return;

    this.lastWallpaper.set(incoming);

    const wallpaper = await this.getWallpaper(incoming);

    if (!wallpaper) return;

    this.Wallpaper.set(wallpaper);
  }

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
    --wallpaper: url('${this.Wallpaper()?.url || Wallpapers.img0.url}');`;
  }

  setAppRendererClasses(v: UserPreferences) {
    if (this.kernel.state?.currentState !== "desktop") return;

    const renderer = this.handler.renderer?.target;

    if (!renderer)
      throw new Error(
        "UserDaemon: Tried to set renderer classes without accent renderer"
      );

    const accent = v.desktop.accent;
    const theme = v.desktop.theme;

    let style = this.getAppRendererStyle(accent);

    this.setUserStyleLoader(v.shell.customStyle);

    renderer.removeAttribute("class");
    renderer.setAttribute("style", style);
    renderer.classList.add(`theme-${theme}`);
    renderer.classList.toggle("sharp", v.shell.visuals.sharpCorners);
    renderer.classList.toggle("noani", v.shell.visuals.noAnimations);
    renderer.classList.toggle("noglass", v.shell.visuals.noGlass);
  }

  setUserStyleLoader(style: CustomStylePreferences) {
    if (this._disposed) return;

    let styleLoader =
      this.handler.renderer?.target.querySelector("#userStyleLoader");

    if (!styleLoader) {
      styleLoader = document.createElement("style");
      styleLoader.id = "userStyleLoader";

      this.handler.renderer?.target.append(styleLoader);
    }

    styleLoader.textContent =
      style.enabled && !this._elevating ? style.content || "" : "";
  }

  async commitPreferences(preferences: UserPreferences) {
    if (this._disposed) return;

    this.Log(`Committing user preferences`);

    try {
      const response = await Axios.put(`/user/preferences`, preferences, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      this.Log(`Failed to commit user preferences!`, LogLevel.error);
    }
  }

  async startFilesystemSupplier() {
    if (this._disposed) return;

    this.Log(`Starting filesystem supplier`);

    await this.fs.mountDrive("userfs", ServerDrive, "U", undefined, this.token);
  }

  async stop() {
    if (this._disposed) return;

    if (this.preferencesUnsubscribe) this.preferencesUnsubscribe();

    this.fs.umountDrive(`userfs`, true);
  }

  async sanitizeUserPreferences() {
    if (this._disposed) return;

    if (this.initialized) {
      this.Log(
        `Tried to sanitize user preferences while initialization is already complete`
      );

      return;
    }

    const preferences = this.preferences() || {};

    if (preferences.isDefault) {
      this.Log(`Not sanitizing default preferences`, LogLevel.warning);
    }

    const result = applyDefaults<UserPreferences>(preferences, {
      ...DefaultUserPreferences,
      isDefault: undefined,
    });

    this.preferences.set(result);
    this.commitPreferences(result);
  }

  async discontinueToken(token = this.token) {
    if (this._disposed) return;

    this.Log(`Discontinuing token`);

    try {
      const response = await Axios.post(
        `/logout`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  sendNotification(data: Notification) {
    if (this._disposed) return;

    this.Log(
      `Sending notification: ${data.title} -> ${data.message.length} body bytes`
    );

    const id = `${Math.floor(Math.random() * 1e9)}`;

    data.timestamp = Date.now();

    this.notifications.set(id, data);
    this.globalDispatch.dispatch("update-notifications", [this.notifications]);
    this.globalDispatch.dispatch("send-notification", [data]);

    return id;
  }

  deleteNotification(id: string) {
    if (this._disposed) return;

    this.Log(`Deleting notification '${id}'`);

    const notification = this.notifications.get(id);

    if (!notification) return;

    notification.deleted = true;

    this.notifications.set(id, notification);

    this.globalDispatch.dispatch("delete-notification", [id]);
    this.globalDispatch.dispatch("update-notifications", [this.notifications]);
  }

  clearNotifications() {
    if (this._disposed) return;

    this.Log(`Clearing notifications`);

    this.notifications = new Map<string, Notification>([]);
    this.globalDispatch.dispatch("update-notifications", [this.notifications]);
  }

  themeFromUserPreferences(
    data: UserPreferences,
    name: string,
    author: string,
    version: string
  ): UserTheme {
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
      loginBackground: data.account.loginBackground || "img15",
    };
  }

  saveCurrentTheme(name: string) {
    if (this._disposed) return;

    this.Log(`Saving current theme as '${name}'`);

    const id = `${Math.floor(Math.random() * 1e6)}`;

    this.preferences.update((userPreferences) => {
      const context = this.themeFromUserPreferences(
        userPreferences,
        name,
        this.username,
        "1.0"
      );

      userPreferences.userThemes[id] = context;

      return userPreferences;
    });
  }

  applyThemeData(data: UserTheme, id?: string) {
    if (this._disposed || !data) return;

    this.Log(`Apply theme data, ID='${id}'`);

    const verifier = this.verifyTheme(data);

    if (verifier !== "themeIsValid") {
      this.Log(
        `Not loading invalid theme! Missing ${verifier}`,
        LogLevel.error
      );

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
      userPreferences.account.loginBackground = data.loginBackground || "img15";

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

    const retrievedThemeData =
      BuiltinThemes[currentThemeId] || (data.userThemes || {})[currentThemeId];

    if (!retrievedThemeData) return data;

    const theme = this.themeFromUserPreferences(
      data,
      retrievedThemeData.name,
      retrievedThemeData.author,
      retrievedThemeData.version
    );

    if (JSON.stringify(theme) !== JSON.stringify(retrievedThemeData))
      data.currentThemeId = undefined;

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

  async uploadWallpaper(pid?: number): Promise<Wallpaper | undefined> {
    if (this._disposed) return;

    this.Log(`Uploading wallpaper to U:/Wallpapers`);

    const prog = await this.FileProgress(
      {
        type: "size",
        icon: ImageMimeIcon,
        caption: "Uploading a wallpaper of your choosing",
        subtitle: `To U:/Wallpapers`,
        waiting: true,
      },
      pid
    );

    try {
      const result = await this.fs.uploadFiles(
        "U:/Wallpapers",
        "image/*",
        false,
        (progress) => {
          prog.show();
          prog.setMax(progress.max);
          prog.setDone(progress.value);
          prog.setWork(true);
          prog.setWait(false);
        }
      );

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

  async uploadProfilePicture(): Promise<string | undefined> {
    if (this._disposed) return undefined;

    this.Log(`Uploading profile picture to U:/Pictures`);

    const result = await this.fs.uploadFiles("U:/Pictures", "image/*");
    if (!result.length) return;

    const { path } = result[0];
    this.preferences.update((v) => {
      v.account.profilePicture = path;

      return v;
    });

    return path;
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

  public async getProfilePicture(picture: number | string): Promise<string> {
    if (typeof picture === "number") return ProfilePictures[`pfp${picture}`];
    if (picture.startsWith("http")) return picture;

    try {
      this.fs.validatePath(picture);
    } catch {
      return ProfilePictures[`pfp3`];
    }

    if (this.localProfilePictureCache[btoa(picture)])
      return URL.createObjectURL(this.localProfilePictureCache[btoa(picture)]);

    const parent = await this.fs.readDir(getParentDirectory(picture));
    const contents = await this.fs.readFile(picture);

    if (!contents || !parent) {
      this.Log(
        `User profile picture '${picture}' doesn't exist on the filesystem anymore, defaulting to pfp3`,
        LogLevel.warning
      );

      return ProfilePictures[`pfp3`];
    }

    const blob = arrayToBlob(
      contents,
      parent.files.filter((f) => picture.endsWith(f.name))[0]?.mimeType || ""
    );
    const blobUrl = URL.createObjectURL(blob);

    this.localProfilePictureCache[btoa(picture)] = blob;

    return blobUrl;
  }

  async deleteLocalWallpaper(id: string): Promise<boolean> {
    if (this._disposed) return false;

    this.Log(`Deleting local wallpaper '${id}'`);

    const path = atob(id.replace("@local:", ""));
    const result = await this.fs.deleteItem(path);

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
      this.Log(
        `Tried to get unknown user wallpaper '${id}', defaulting to img04`,
        LogLevel.warning
      );

      return Wallpapers.img04;
    }
    if (this.localWallpaperCache[id])
      return {
        ...wallpaperData,
        url: URL.createObjectURL(this.localWallpaperCache[id]),
        thumb: URL.createObjectURL(this.localWallpaperCache[id]),
      };

    const path = atob(id.replace("@local:", ""));
    const parent = await this.fs.readDir(getParentDirectory(path));
    const contents = await this.fs.readFile(path);

    if (!contents || !parent) {
      this.Log(
        `User wallpaper '${id}' doesn't exist on the filesystem anymore, defaulting to img04`,
        LogLevel.warning
      );

      return Wallpapers.img04;
    }

    const blob = arrayToBlob(
      contents,
      parent.files.filter((f) => path.endsWith(f.name))[0]?.mimeType || ""
    );
    const blobUrl = URL.createObjectURL(blob);

    this.localWallpaperCache[id] = blob;

    return {
      ...wallpaperData,
      url: blobUrl,
      thumb: blobUrl,
    };
  }

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

  async toLogin(type: string) {
    if (this._disposed) return;

    await this.handler._killSubProceses(this.pid);
    await this.kernel.state?.loadState("login", {
      type,
      userDaemon: this,
    });
  }

  async mountZip(path: string, letter?: string, fromSystem = false) {
    if (this._disposed) return;

    this.Log(`Mounting ZIP file at ${path} as ${letter || "?"}:/`);

    const elevated =
      fromSystem ||
      (await this.manuallyElevate({
        what: "ArcOS needs your permission to mount a ZIP file",
        title: getDirectoryName(path),
        description: letter ? `As ${letter}:/` : "As a drive",
        image: DriveIcon,
        level: ElevationLevel.medium,
      }));

    if (!elevated) return;

    const prog = await this.FileProgress(
      {
        type: "size",
        caption: "Mounting drive",
        subtitle: `${path}${letter ? ` as ${letter}:/` : ""}`,
        icon: DriveIcon,
        waiting: true,
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
        prog.setWait(false);
        prog.setWork(true);
      },
      path
    );

    prog.stop();
    return mount;
  }

  async batteryInfo(): Promise<BatteryType | undefined> {
    if (this._disposed) return;

    const navigator = window.navigator as any;

    if (!navigator.getBattery) return undefined;

    const info = (await navigator.getBattery()) as BatteryType;

    return info;
  }

  async testNetworkSpeed() {
    if (this._disposed) return -1;

    const fileSizeInBytes = 10 * 1024 * 1024;
    const startTime = performance.now();

    try {
      await Axios.get("/10mb");
    } catch (error) {
      this.Log(
        `Failed to test network speed, is the server up to date?`,
        LogLevel.error
      );
      return -1;
    }

    const endTime = performance.now();
    const durationInSeconds = (endTime - startTime) / 1000;
    const speedMbps = (fileSizeInBytes * 8) / (durationInSeconds * 1_000_000);

    this.globalDispatch.dispatch("net-speed", [speedMbps]);

    return speedMbps;
  }

  async startSystemStatusRefresh() {
    if (this._disposed) return;

    this.Log("Starting system status refresh");

    setInterval(async () => {
      this.battery.set(await this.batteryInfo());
    }, 1000); // Every second

    this.battery.set(await this.batteryInfo());
    this.networkSpeed.set(await this.testNetworkSpeed());
  }

  async getUserApps(): Promise<AppStorage> {
    if (this._disposed) return [];
    if (!this.preferences()) return [];

    const apps = this.preferences().userApps;

    return Object.values(apps) as unknown as AppStorage;
  }

  async spawnApp<T>(id: string, parentPid?: number, ...args: any[]) {
    if (this._disposed) return;

    return await this._spawnApp<T>(
      id,
      this.getCurrentDesktop(),
      parentPid,
      ...args
    );
  }

  async spawnOverlay<T>(id: string, parentPid?: number, ...args: any[]) {
    if (this._disposed) return;

    return await this._spawnOverlay<T>(
      id,
      this.getCurrentDesktop(),
      parentPid,
      ...args
    );
  }

  async _spawnApp<T>(
    id: string,
    renderTarget: HTMLDivElement | undefined = undefined,
    parentPid?: number,
    ...args: any[]
  ): Promise<T | undefined> {
    if (this._disposed) return;

    if (this.checkDisabled(id)) return;

    const app = await this.appStore?.getAppById(id);

    if (!app) return undefined;

    this.Log(`SPAWNING APP ${id}`);

    if (app.thirdParty) {
      await this.spawnThirdParty(app as unknown as ThirdPartyApp, ...args);

      return;
    }

    const shellDispatch = this.handler.ConnectDispatch(
      +this.env.get("shell_pid")
    );

    if (shellDispatch) {
      shellDispatch?.dispatch("close-start-menu");
      shellDispatch?.dispatch("close-action-center");
    }

    await this.handler.waitForAvailable();

    return await this.handler.spawn<T>(
      app.assets.runtime,
      renderTarget,
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

    if (this.checkDisabled(id)) return;

    const app = await this.appStore?.getAppById(id);

    if (!app) return undefined;

    this.Log(`SPAWNING OVERLAY APP ${id}`);

    if (app.thirdParty) {
      this.Log(
        "Can't spawn a third party app as an overlay: not in our control",
        LogLevel.error
      );

      return;
    }

    await this.handler.waitForAvailable();

    return await this.handler.spawn<T>(
      app.assets.runtime,
      renderTarget,
      parentPid || this.pid,
      {
        data: { ...app, overlay: true },
        id: app.id,
        desktop: renderTarget ? renderTarget.id : undefined,
      },
      ...args
    );
  }

  async spawnThirdParty(app: ThirdPartyApp, ...args: any[]) {
    if (this._disposed) return;

    this.Log(`Starting ArcMSL execution to run third-party app ${app.id}`);

    const lang = this.kernel.getModule<ArcMSL>("msl");
    const fs = this.kernel.getModule<Filesystem>("fs");
    const userDaemonPid = this.env.get("userdaemon_pid");

    if (!userDaemonPid) return;

    try {
      const contents = arrayToText((await fs.readFile(app.entrypoint))!);

      if (!contents) {
        MessageBox(
          {
            title: `${app.metadata.name} - Entrypoint error`,
            message: `ArcOS can't find the entrypoint of this third-party application. It might have been renamed or deleted. Please consider reinstalling the application to fix this problem.<br><code class='block'>${app.entrypoint}</code>`,
            buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
            sound: "arcos.dialog.error",
            image: app.metadata.icon,
          },
          +this.env.get("shell_pid"),
          true
        );

        return;
      }

      lang.run(contents, +userDaemonPid, {
        allowUnsafe: app.unsafeCode, // Unsafe code execution
        workingDir: app.workingDirectory, // Working directory (cwd)
        continuous: true, // Continuous code execution to keep the mainloop going
        arguments: args, // Send the arguments
      });
    } catch (e) {
      this.Log(`Execution error in third-party application "${app.id}": ${e}`);
    }
  }

  async spawnAutoloadApps() {
    if (this._disposed) return;

    this.Log(`Spawning autoload applications`);

    const store = (await this.appStore?.get()) || [];

    this.handler.BUSY = false;

    for (const app of store) {
      if (app.autoRun) await this._spawnApp(app.id, undefined, this.pid);
    }
  }

  checkDisabled(appId: string): boolean {
    if (this._disposed) return false;

    const { disabledApps } = this.preferences();

    return (disabledApps || []).includes(appId);
  }

  async disableApp(appId: string) {
    if (this._disposed) return false;
    if (this.checkDisabled(appId)) return false;

    this.Log(`Disabling application ${appId}`);

    const app = await this.appStore?.getAppById(appId);
    if (!app) return;

    const elevated = await this.manuallyElevate({
      what: "ArcOS needs your permission to disable an application",
      image: app.metadata.icon,
      title: app.metadata.name,
      description: `By ${app.metadata.author}`,
      level: ElevationLevel.medium,
    });
    if (!elevated) return;

    this.preferences.update((v) => {
      v.disabledApps.push(appId);

      return v;
    });

    const instances = this.handler.renderer?.getAppInstances(appId);

    if (instances)
      for (const instance of instances) {
        this.handler.kill(instance.pid, true);
      }

    this.globalDispatch.dispatch("app-store-refresh");
  }

  async enableApp(appId: string) {
    if (this._disposed) return false;
    if (!this.checkDisabled(appId)) return false;

    this.Log(`Enabling application ${appId}`);

    const app = await this.appStore?.getAppById(appId);
    if (!app) return;

    const elevated = await this.manuallyElevate({
      what: "ArcOS needs your permission to enable an application",
      image: app.metadata.icon,
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

    this.globalDispatch.dispatch("app-store-refresh");
  }

  async getLoginActivity(): Promise<LoginActivity[]> {
    if (this._disposed) return [];

    try {
      const response = await Axios.get("/activity", {
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
      const response = await Axios.post(
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

    const id = crypto.randomUUID();
    const key = crypto.randomUUID();
    const shellPid = this.env.get("shell_pid");

    if (this.preferences().security.disabled) return true;

    this._elevating = true;
    this.setAppRendererClasses(this.preferences());

    if (shellPid) {
      const proc = await this._spawnOverlay(
        "SecureContext",
        undefined,
        +shellPid,
        id,
        key,
        data
      );

      if (!proc) return false;
    } else {
      const proc = await this._spawnApp(
        "SecureContext",
        undefined,
        this.pid,
        id,
        key,
        data
      );

      if (!proc) return false;
    }

    return new Promise((r) => {
      this.globalDispatch.subscribe("elevation-approve", (data) => {
        if (data[0] === id && data[1] === key) {
          r(true);
          this._elevating = false;
          this.setAppRendererClasses(this.preferences());
        }
      });

      this.globalDispatch.subscribe("elevation-deny", (data) => {
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

  async changeUsername(newUsername: string): Promise<boolean> {
    if (this._disposed) return false;

    this.Log(`Changing username to "${newUsername}"`);

    const elevated = await this.manuallyElevate({
      what: "ArcOS needs your permission to change your username:",
      image: AccountIcon,
      title: "Change username",
      description: `To ${newUsername}`,
      level: ElevationLevel.medium,
    });

    if (!elevated) return false;

    try {
      const response = await Axios.patch(
        "/user/rename",
        toForm({ newUsername }),
        { headers: { Authorization: `Bearer ${this.token}` } }
      );

      if (response.status !== 200) return false;

      this.username = newUsername;
      this.globalDispatch.dispatch("change-username", [newUsername]);

      Cookies.set("arcUsername", newUsername, {
        expires: 2,
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
      image: PasswordIcon,
      title: "Change password",
      description: `of ${this.username}`,
      level: ElevationLevel.medium,
    });

    if (!elevated) return false;

    try {
      const response = await Axios.post(
        "/user/changepswd",
        toForm({ newPassword }),
        { headers: { Authorization: `Bearer ${this.token}` } }
      );

      if (response.status !== 200) return false;

      return true;
    } catch {
      return false;
    }
  }

  async syncVirtualDesktops(v: UserPreferences) {
    if (this._disposed) return;
    if (!this.virtualDesktop) return;

    this.Log(`Syncing virtual desktop render state`);

    const { desktops, index } = v.workspaces;

    for (const { uuid } of desktops) {
      if (!this.virtualDesktops[uuid]) this.renderVirtualDesktop(uuid);
    }

    if (this.virtualDesktopIndex === index) return;

    if (v.shell.visuals.noAnimations) {
      this.virtualDesktop.setAttribute("style", `--index: ${index};`);
    } else {
      this.virtualDesktop.classList.add("changing");
      this.virtualDesktop.setAttribute("style", `--index: ${index};`);

      if (this.virtualdesktopChangingTimeout)
        clearTimeout(this.virtualdesktopChangingTimeout);

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
    this.handler.renderer?.target.append(outer);
    this.virtualDesktop = inner;

    this.syncVirtualDesktops(this.preferences());
  }

  getCurrentDesktop(): HTMLDivElement | undefined {
    if (this._disposed) return;

    const { workspaces } = this.preferences();

    if (!workspaces.desktops.length) {
      this.createWorkspace("Default");
      return this.getCurrentDesktop();
    }

    const uuid = workspaces.desktops[workspaces.index]?.uuid;

    if (!uuid) return undefined;

    return this.virtualDesktops[uuid];
  }

  createWorkspace(name?: string) {
    if (this._disposed) return;

    this.Log(`Creating new workspace "${name || "<NO NAME>"}"`);

    const uuid = crypto.randomUUID();

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

    const processes = this.handler.store();

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

    const proc = this.handler.getProcess(pid);
    const destinationWorkspace = this.virtualDesktops[destination];
    const window = document.querySelector(
      `#appRenderer div.window[data-pid*='${pid}']`
    );

    if (
      !proc ||
      !(proc instanceof AppProcess) ||
      !destinationWorkspace ||
      !window
    )
      return;

    const currentWorkspace = proc.app.desktop;

    destinationWorkspace.appendChild(window);
    proc.app.desktop = destination;
    this.handler.store.update((v) => {
      v.set(pid, proc);

      return v;
    });

    if (
      currentWorkspace &&
      this.getCurrentDesktop()?.id === currentWorkspace &&
      this.handler.renderer?.focusedPid() === pid
    ) {
      this.switchToDesktopByUuid(destination);
    }
  }

  startDriveNotifierWatcher() {
    if (this._disposed) return;

    this.Log("Starting drive notifier watcher");

    this.globalDispatch.subscribe("fs-mount-drive", (id) => {
      if (this._disposed) return;

      const drive = this.fs.getDriveById(id as unknown as string);

      if (!drive) return;

      const notificationId = this.sendNotification({
        title: drive.driveLetter
          ? `${drive.label} (${drive.driveLetter}:)`
          : drive.label,
        message:
          "This drive just got mounted! Click the button to view it in the file manager",
        buttons: [
          {
            caption: "Open Drive",
            action: () => {
              this.spawnApp(
                "fileManager",
                undefined,
                `${drive.driveLetter || drive.uuid}:/`
              );

              if (notificationId) this.deleteNotification(notificationId);
            },
          },
        ],
        image: DriveIcon,
        timeout: 3000,
      });
    });
  }

  async FileProgress(
    initialData: Partial<FsProgressOperation>,
    parentPid?: number
  ): Promise<FileProgressMutator> {
    const uuid = crypto.randomUUID();
    const progress = Store<FsProgressOperation>(
      applyDefaults(initialData, {
        max: 0,
        done: 0,
        type: "none",
        caption: ``,
        subtitle: ``,
        icon: "",
        waiting: false,
        working: false,
        errors: [],
      })
    );
    let process: FsProgressRuntime | undefined;
    let shown = false;

    const Log = (m: string) => /*this.Log(`FileProgress::${uuid}: ${m}`)*/ m;

    this.Log(`Creating file progress '${uuid}': ${initialData.caption}`);

    const show = async () => {
      Log(`Showing`);
      if (shown) return;
      shown = true;

      if (!parentPid) {
        process = await this.spawnApp<FsProgressRuntime>(
          "FsProgress",
          0,
          progress
        );

        if (typeof process == "string") return DummyFileProgress;
      } else {
        process = await this.spawnOverlay<FsProgressRuntime>(
          "FsProgress",
          parentPid,
          progress
        );

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

    const setWait = (waiting: boolean) => {
      Log(`Setting wait: ${waiting}`);

      progress.update((v) => {
        v.waiting = waiting;
        return v;
      });
    };

    const setWork = (working: boolean) => {
      Log(`Setting working: ${working}`);

      progress.update((v) => {
        v.working = working;
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

    return {
      progress,
      mutateMax,
      mutDone,
      updateCaption,
      updSub,
      setMax,
      setDone,
      setWait,
      setWork,
      mutErr,
      setErrors,
      stop,
      show,
      setCancel,
    };
  }

  async moveMultiple(sources: string[], destination: string, pid: number) {
    this.Log(`Moving ${sources.length} items to ${destination}`);

    const destinationName = getDirectoryName(destination);
    const destinationDrive = getDriveLetter(destination, true);

    const { updSub, setWait, setWork, mutErr, mutDone, show } =
      await this.FileProgress(
        {
          type: "quantity",
          max: sources.length,
          waiting: true,
          icon: FolderIcon,
          caption: `Moving files to ${destinationName || destination}`,
          subtitle: "Working...",
        },
        pid
      );

    for (const source of sources) {
      const sourceDrive = getDriveLetter(source, true);

      show();
      updSub(source);
      setWait(false);
      setWork(true);

      if (sourceDrive != destinationDrive) {
        mutErr(
          `Not moving ${source}: source and destination drives are different`
        );

        continue;
      }

      await this.fs.moveItem(source, destination);
      setWait(true);
      mutDone(+1);
      await Sleep(200); // prevent rate limit
    }
  }

  async copyMultiple(sources: string[], destination: string, pid: number) {
    this.Log(`Copying ${sources.length} items to ${destination}`);

    const destinationName = getDirectoryName(destination);
    const destinationDrive = getDriveLetter(destination, true);

    const { updSub, setWait, setWork, mutErr, mutDone, show } =
      await this.FileProgress(
        {
          type: "quantity",
          max: sources.length,
          waiting: true,
          icon: FolderIcon,
          caption: `Copying files to ${destinationName || destination}`,
          subtitle: "Working...",
        },
        pid
      );

    for (const source of sources) {
      const sourceDrive = getDriveLetter(source, true);

      show();
      updSub(source);
      setWait(false);
      setWork(true);

      if (sourceDrive != destinationDrive) {
        mutErr(
          `Not copying ${source}: source and destination drives are different`
        );
        mutDone(+1);

        continue;
      }

      await this.fs.copyItem(source, destination);
      setWait(true);
      mutDone(+1);

      await Sleep(200); // prevent rate limit
    }
  }

  async findAppToOpenFile(path: string) {
    const apps = await this.appStore?.get();

    const split = path.split(".");
    const extension = `.${split[split.length - 1]}`;
    const mimeType = fromExtension(path);
    const result: (App | ThirdPartyApp)[] = [];

    for (const app of apps!) {
      if (
        (app.opens?.extensions || [])?.includes(extension) ||
        (app.opens?.mimeTypes || [])?.join("||").includes(mimeType)
      ) {
        result.push(app);
      }
    }

    return result;
  }

  getMimeIconByFilename(filename: string): string | undefined {
    if (!filename) return;

    const split = filename.split(".");

    return this.getMimeIconByExtension(`.${split[split.length - 1]}`);
  }

  getMimeIconByExtension(extension: string): string | undefined {
    return Object.entries(this.mimeIcons)
      .filter(([_, ext]) => ext.includes(extension))
      .map(([icn]) => icn)[0];
  }

  loadMimeIcon(extension: string, icon: string) {
    if (this.getMimeIconByExtension(icon)) return;

    if (this.mimeIcons[icon] && !this.mimeIcons[icon].includes(extension)) {
      this.mimeIcons[icon].push(extension);
      return;
    }

    if (!this.mimeIcons[icon]) this.mimeIcons[icon] = [extension];
  }

  async LoadSaveDialog(data: Omit<LoadSaveDialogData, "returnId">) {
    const uuid = crypto.randomUUID();

    await this.spawnOverlay(
      "fileManager",
      +this.env.get("shell_pid"),
      data.startDir || "U:/",
      {
        ...data,
        returnId: uuid,
      }
    );

    return new Promise<string | undefined>(async (r) => {
      this.globalDispatch.subscribe("ls-confirm", ([id, path]) => {
        if (id === uuid) r(path);
      });
      this.globalDispatch.subscribe("ls-cancel", ([id]) => {
        if (id === uuid) r(undefined);
      });
    });
  }
}
