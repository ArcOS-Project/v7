import { ApplicationStorage } from "$ts/apps/storage";
import { BuiltinApps } from "$ts/apps/store";
import { darkenColor, hex3to6, invertColor, lightenColor } from "$ts/color";
import { toForm } from "$ts/form";
import { Filesystem } from "$ts/fs";
import { arrayToBlob, arrayToText } from "$ts/fs/convert";
import { ServerDrive } from "$ts/fs/drives/server";
import { ZIPDrive } from "$ts/fs/drives/zipdrive";
import { join } from "$ts/fs/util";
import { applyDefaults } from "$ts/hierarchy";
import type { ArcLang } from "$ts/lang";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import { RoturExtension } from "$ts/rotur";
import { Wallpapers } from "$ts/wallpaper/store";
import { Store } from "$ts/writable";
import type { LoginActivity } from "$types/activity";
import type { AppStorage, ThirdPartyApp } from "$types/app";
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
import type { Unsubscriber } from "svelte/store";
import { Axios } from "../axios";
import { DefaultUserInfo, DefaultUserPreferences } from "./default";
import { BuiltinThemes } from "./store";
import type { ElevationData } from "$types/elevation";

export class UserDaemon extends Process {
  public initialized = false;
  public username: string;
  public token: string;
  public preferences = Store<UserPreferences>();
  public notifications = new Map<string, Notification>([]);
  public userInfo: UserInfo = DefaultUserInfo;
  public rotur: RoturExtension | undefined;
  public battery = Store<BatteryType | undefined>();
  public networkSpeed = Store<number>(-1);
  public appStore: ApplicationStorage | undefined;
  public Wallpaper = Store<Wallpaper>(Wallpapers.img0);
  public lastWallpaper = Store<string>("img0");
  private _elevating = false;

  private preferencesUnsubscribe: Unsubscriber | undefined;
  private fs: Filesystem;
  private wallpaperGetters: WallpaperGetters = [
    ["@local:", async (id: string) => await this.getLocalWallpaper(id)],
    ["img", (id) => Wallpapers[id] || Wallpapers["img04"]],
  ];
  private localWallpaperCache: Record<string, Blob> = {};

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
    this.fs = this.kernel.getModule<Filesystem>("fs");
    this.env.set("userdaemon_pid", this.pid);
  }

  async start() {
    this.appStore = await this.handler.spawn(ApplicationStorage, this.pid);

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
      if (this._disposed) return;

      if (!v || v.isDefault) return;

      v = this.checkCurrentThemeIdValidity(v);
      this.commitPreferences(v);
      this.setAppRendererClasses(v);
      this.updateWallpaper(v);
    });

    this.preferencesUnsubscribe = unsubscribe;
  }

  async updateWallpaper(v: UserPreferences) {
    const incoming = v.desktop.wallpaper;

    if (incoming === this.lastWallpaper()) return;

    this.lastWallpaper.set(incoming);

    const wallpaper = await this.getWallpaper(incoming);

    if (!wallpaper) return;

    this.Wallpaper.set(wallpaper);
  }

  getAppRendererStyle(accent: string) {
    return `--accent: ${hex3to6(accent)} !important;
    --accent-transparent: ${hex3to6(accent)}44 !important;
    --accent-light: ${lightenColor(accent)} !important;
    --accent-lighter: ${lightenColor(accent, 6.5)} !important;
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
    this.Log(`Starting filesystem supplier`);

    await this.fs.mountDrive("userfs", ServerDrive, "U", this.token);
  }

  async stop() {
    if (this.preferencesUnsubscribe) this.preferencesUnsubscribe();

    this.fs.umountDrive(`userfs`);
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
    this.Log(
      `Sending notification: ${data.title} -> ${data.message.length} body bytes`
    );

    if (this._disposed) return;

    this.Log(`notification: ${data.title}`);

    const id = `${Math.floor(Math.random() * 1e9)}`;

    data.timestamp = Date.now();

    this.notifications.set(id, data);
    this.globalDispatch.dispatch("update-notifications", [this.notifications]);
    this.globalDispatch.dispatch("send-notification", [data]);

    return id;
  }

  deleteNotification(id: string) {
    this.Log(`Deleting notification '${id}'`);

    if (this._disposed) return;

    const notification = this.notifications.get(id);

    if (!notification) return;

    notification.deleted = true;

    this.notifications.set(id, notification);

    this.globalDispatch.dispatch("delete-notification", [id]);
    this.globalDispatch.dispatch("update-notifications", [this.notifications]);
  }

  clearNotifications() {
    this.notifications = new Map<string, Notification>([]);
    this.globalDispatch.dispatch("update-notifications", [this.notifications]);
  }

  themeFromUserPreferences(
    data: UserPreferences,
    name: string,
    author: string,
    version: string
  ): UserTheme {
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
    this.Log(`Applying saved theme '${id}'`);

    const userPreferences = this.preferences();

    if (!userPreferences.userThemes[id]) return;

    this.applyThemeData(userPreferences.userThemes[id], id);
  }

  verifyTheme(data: UserTheme) {
    const keys = Object.keys(data);

    for (const key of UserThemeKeys) {
      if (!keys.includes(key)) return key;
    }

    return "themeIsValid";
  }

  checkCurrentThemeIdValidity(data: UserPreferences): UserPreferences {
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
    this.Log(`Deleting user theme '${id}'`);

    this.preferences.update((udata) => {
      if (!udata.userThemes) return udata;

      delete udata.userThemes[id];

      return udata;
    });
  }

  uploadWallpaper(): Promise<Wallpaper> {
    const uploader = document.createElement("input");

    uploader.type = "file";
    uploader.accept = "image/*";
    uploader.multiple = false;

    return new Promise((resolve, reject) => {
      uploader.onchange = async () => {
        try {
          const files = uploader.files;

          if (!files?.length) return reject("Didn't get a file");

          const file = files?.[0];
          const content = arrayToBlob(await file?.arrayBuffer()!);

          await this.fs.createDirectory("U:/Wallpapers");

          if (!file?.name) return reject("File doesn't have a name");

          const path = join(`U:/Wallpapers`, file.name);
          const result = await this.fs.writeFile(path, content);

          if (!result) return reject("Failed to write file");

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

          resolve(wallpaper);
        } catch (e) {
          reject((e as any).message);

          return;
        }
      };

      uploader.click();
    });
  }

  public async getWallpaper(id: string, override?: string): Promise<Wallpaper> {
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
    const contents = await this.fs.readFile(path);

    if (!contents) {
      this.Log(
        `User wallpaper '${id}' doesn't exist on the filesystem anymore, defaulting to img04`,
        LogLevel.warning
      );

      return Wallpapers.img04;
    }

    const blob = arrayToBlob(contents, "image/png");
    const blobUrl = URL.createObjectURL(blob);

    this.localWallpaperCache[id] = blob;

    return {
      ...wallpaperData,
      url: blobUrl,
      thumb: blobUrl,
    };
  }

  async restartRotur() {
    this.Log("Killing Rotur extension");

    if (this.rotur) await this.handler.kill(this.rotur.pid);

    this.startRotur();
  }

  async startRotur() {
    this.Log("Starting Rotur extension");

    const roturCred = this.preferences().account.rotur;

    this.rotur = await this.handler.spawn<RoturExtension>(
      RoturExtension,
      this.pid,
      this
    );

    if (!this.rotur) throw new Error("Failed to start rotur");

    await this.rotur.connectToServer("arc", "arcOS", "7");

    if (!roturCred.username || !roturCred.password) return;

    await this.rotur.login(atob(roturCred.username), atob(roturCred.password));

    this.preferences.subscribe((v) => {
      if (!v.account.rotur.username || !v.account.rotur.password)
        this.rotur?.disconnect();
    });
  }

  async logoff() {
    await this.toLogin("logoff");
  }

  async shutdown() {
    await this.toLogin("shutdown");
  }

  async restart() {
    await this.toLogin("restart");
  }

  async toLogin(type: string) {
    await this.handler._killSubProceses(this.pid);
    await this.kernel.state?.loadState("login", {
      type,
      userDaemon: this,
    });
  }

  async mountZip(path: string) {
    const mount = this.fs.mountDrive(btoa(path), ZIPDrive, undefined, path);

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

    this.Log("Testing network speed");

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

    this.Log(`Network speed equated: ${speedMbps}`);

    return speedMbps;
  }

  async startSystemStatusRefresh() {
    this.Log("Starting system status refresh");

    setInterval(async () => {
      this.battery.set(await this.batteryInfo());
    }, 1000); // Every second

    setInterval(async () => {
      this.networkSpeed.set(await this.testNetworkSpeed());
    }, 60 * 1000); // Every minute

    this.battery.set(await this.batteryInfo());
    this.networkSpeed.set(await this.testNetworkSpeed());
  }

  async getUserApps(): Promise<AppStorage> {
    if (!this.preferences()) return [];

    const apps = this.preferences().userApps;

    return Object.values(apps) as unknown as AppStorage;
  }

  async spawnApp<T>(
    id: string,
    parentPid?: number,
    ...args: any[]
  ): Promise<T | undefined> {
    if (this.checkDisabled(id)) return;

    const app = await this.appStore?.getAppById(id);

    if (!app) return undefined;

    if (app.thirdParty) {
      await this.spawnThirdParty(app as unknown as ThirdPartyApp);

      return;
    }

    const shellDispatch = this.handler.ConnectDispatch(
      +this.env.get("shell_pid")
    );

    if (shellDispatch) {
      shellDispatch?.dispatch("close-start-menu");
      shellDispatch?.dispatch("close-action-center");
    }

    return await this.handler.spawn<T>(
      app.assets.runtime,
      parentPid || this.pid,
      {
        data: app,
        id: app.id,
      },
      ...args
    );
  }

  async spawnOverlay<T>(
    id: string,
    parentPid?: number,
    ...args: any[]
  ): Promise<T | undefined> {
    if (this.checkDisabled(id)) return;

    const app = await this.appStore?.getAppById(id);

    if (!app) return undefined;

    if (app.thirdParty) {
      this.Log(
        "Can't spawn a third party app as an overlay: not in our control",
        LogLevel.error
      );

      return;
    }

    return await this.handler.spawn<T>(
      app.assets.runtime,
      parentPid || this.pid,
      {
        data: { ...app, overlay: true },
        id: app.id,
      },
      ...args
    );
  }

  async spawnThirdParty(app: ThirdPartyApp) {
    const lang = this.kernel.getModule<ArcLang>("lang");
    const fs = this.kernel.getModule<Filesystem>("fs");
    const userDaemonPid = this.env.get("userdaemon_pid");

    if (!userDaemonPid) return;

    try {
      const contents = arrayToText((await fs.readFile(app.entrypoint))!);

      lang.run(contents, +userDaemonPid, {
        allowUnsafe: app.unsafeCode, // Unsafe code execution
        workingDir: app.workingDirectory, // Working directory (cwd)
        continuous: true, // Continuous code execution to keep the mainloop going
      });
    } catch (e) {
      this.Log(`Execution error in third-party application "${app.id}": ${e}`);
    }
  }

  async spawnAutoloadApps() {
    const store = (await this.appStore?.get()) || [];

    for (const app of store) {
      if (app.autoRun) this.spawnApp(app.id, this.pid);
    }
  }

  checkDisabled(appId: string): boolean {
    const { disabledApps } = this.preferences();

    return (disabledApps || []).includes(appId);
  }

  disableApp(appId: string) {
    if (this.checkDisabled(appId)) return false;

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

  enableApp(appId: string) {
    if (!this.checkDisabled(appId)) return false;

    this.preferences.update((v) => {
      if (!v.disabledApps.includes(appId)) return v;

      v.disabledApps.splice(v.disabledApps.indexOf(appId));

      return v;
    });

    this.globalDispatch.dispatch("app-store-refresh");
  }

  async getLoginActivity(): Promise<LoginActivity[]> {
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

  async elevate(data: ElevationData) {
    const id = crypto.randomUUID();
    const key = crypto.randomUUID();
    const shellPid = this.env.get("shell_pid");

    if (this.preferences().security.disabled) return true;

    this._elevating = true;
    this.setAppRendererClasses(this.preferences());

    if (shellPid) {
      const proc = await this.spawnOverlay(
        "SecureContext",
        +shellPid,
        id,
        key,
        data
      );

      if (!proc) return false;
    } else {
      const proc = await this.spawnApp(
        "SecureContext",
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
}
