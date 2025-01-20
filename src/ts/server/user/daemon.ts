import { Filesystem } from "$ts/fs";
import { ServerFilesystemSupplier } from "$ts/fs/suppliers/server";
import { applyDefaults } from "$ts/hierarchy";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import { Store } from "$ts/writable";
import { LogLevel } from "$types/logging";
import type { UserInfo, UserPreferences } from "$types/user";
import type { Unsubscriber } from "svelte/store";
import { Axios } from "../axios";
import { DefaultUserInfo, DefaultUserPreferences } from "./default";
import { UserDataFilesystemSupplier } from "$ts/fs/suppliers/userdata";
import type { Notification } from "$types/notification";
import { darkenColor, hex3to6, invertColor, lightenColor } from "$ts/color";

export class UserDaemon extends Process {
  public initialized = false;
  public username: string;
  public token: string;
  public preferences = Store<UserPreferences>();
  public notifications = new Map<string, Notification>([]);
  private preferencesUnsubscribe: Unsubscriber | undefined;
  public userInfo: UserInfo = DefaultUserInfo;
  private fs: Filesystem;

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

  startPreferencesSync() {
    if (this._disposed) return;

    this.Log(`Starting user preferences commit sync`);

    const unsubscribe = this.preferences.subscribe(async (v) => {
      if (this._disposed) return;

      if (!v || v.isDefault) return;

      this.commitPreferences(v);
      this.setAppRendererClasses(v);
    });

    this.preferencesUnsubscribe = unsubscribe;
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

    let style = `--accent: ${hex3to6(accent)} !important;
    --accent-transparent: ${hex3to6(accent)}44 !important;
    --accent-light: ${lightenColor(accent)} !important;
    --accent-lighter: ${lightenColor(accent, 6.5)} !important;
    --accent-dark: ${darkenColor(accent, 75)} !important;
    --accent-darkest: ${darkenColor(accent, 85)} !important;
    --accent-light-transparent: ${lightenColor(accent)}77 !important;
    --accent-light-invert: ${invertColor(lightenColor(accent))} !important;`;

    renderer.removeAttribute("class");
    renderer.setAttribute("style", style);
    renderer.classList.add(`theme-${theme}`);
    renderer.classList.toggle("sharp", v.shell.visuals.sharpCorners);
    renderer.classList.toggle("noani", v.shell.visuals.noAnimations);
    renderer.classList.toggle("noglass", v.shell.visuals.noGlass);
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
    await this.fs.loadSupplier("userfs", ServerFilesystemSupplier, this.token);
    await this.fs.loadSupplier("userdata", UserDataFilesystemSupplier, this);
  }

  async stop() {
    if (this.preferencesUnsubscribe) this.preferencesUnsubscribe();

    this.fs.unloadSupplier(`userfs`);
    this.fs.unloadSupplier(`userdata`);
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
}
