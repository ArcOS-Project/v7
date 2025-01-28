import { darkenColor, hex3to6, invertColor, lightenColor } from "$ts/color";
import { Filesystem } from "$ts/fs";
import { arrayToBlob } from "$ts/fs/convert";
import { ServerDrive } from "$ts/fs/suppliers/server";
import { join } from "$ts/fs/util";
import { applyDefaults } from "$ts/hierarchy";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import { Wallpapers } from "$ts/wallpaper/store";
import { Store } from "$ts/writable";
import { LogLevel } from "$types/logging";
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
import { RoturExtension } from "$ts/rotur";

export class UserDaemon extends Process {
  public initialized = false;
  public username: string;
  public token: string;
  public preferences = Store<UserPreferences>();
  public notifications = new Map<string, Notification>([]);
  public userInfo: UserInfo = DefaultUserInfo;
  public rotur: RoturExtension | undefined;

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

  async getUserInfo(): Promise<UserInfo | undefined> {
    if (this._disposed) return;

    if (this.initialized) {
      this.Log(
        `Tried to get user info while initialization is already complete`,
        LogLevel.warning
      );

      return;
    }

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
    });

    this.preferencesUnsubscribe = unsubscribe;
  }

  getAppRendererStyle(accent: string) {
    return `--accent: ${hex3to6(accent)} !important;
    --accent-transparent: ${hex3to6(accent)}44 !important;
    --accent-light: ${lightenColor(accent)} !important;
    --accent-lighter: ${lightenColor(accent, 6.5)} !important;
    --accent-dark: ${darkenColor(accent, 75)} !important;
    --accent-darkest: ${darkenColor(accent, 85)} !important;
    --accent-light-transparent: ${lightenColor(accent)}77 !important;
    --accent-light-invert: ${invertColor(lightenColor(accent))} !important;`;
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

    styleLoader.textContent = style.enabled ? style.content || "" : "";
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

    await this.fs.mountDrive("userfs", "U", ServerDrive, this.token);
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

  async discontinueToken() {
    this.Log(`Discontinuing token`);

    try {
      const response = await Axios.post(
        `/logout`,
        {},
        { headers: { Authorization: `Bearer ${this.token}` } }
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
    if (!id) return Wallpapers[override || "img04"];

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

    return Wallpapers[override || "img04"];
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

    const fn = (...data: any[]) => console.log(...data);

    this.globalDispatch.subscribe("rotur-cmd-pmsg", fn);

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
}
