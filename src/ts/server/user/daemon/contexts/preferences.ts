import { applyDefaults } from "$ts/hierarchy";
import { Backend } from "$ts/server/axios";
import { Store, type Unsubscriber } from "$ts/writable";
import { LogLevel } from "$types/logging";
import type { UserPreferences } from "$types/user";
import type { UserDaemon } from "..";
import { DefaultUserPreferences } from "../../default";
import { UserPaths } from "../../store";
import { UserContext } from "../context";

export class PreferencesUserContext extends UserContext {
  private firstSyncDone = false;
  public syncLock = false;
  public preferencesUnsubscribe: Unsubscriber | undefined;
  public preferences = Store<UserPreferences>(DefaultUserPreferences);

  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async _deactivate() {
    if (this.preferencesUnsubscribe) this.preferencesUnsubscribe();
  }

  async startPreferencesSync() {
    if (this._disposed) return;

    this.Log(`Starting user preferences commit sync`);

    const unsubscribe = this.userDaemon.preferences.subscribe(async (v) => {
      if (this._disposed) return unsubscribe();
      if (!v || v.isDefault) return;

      v = this.userDaemon.themesContext!.checkCurrentThemeIdValidity(v);

      if (!this.firstSyncDone) this.firstSyncDone = true;
      else if (!this.syncLock) this.commitPreferences(v);

      this.userDaemon.appRendererContext?.setAppRendererClasses(v);
      this.userDaemon.wallpaperContext?.updateWallpaper(v);
      this.userDaemon.workspacesContext?.syncVirtualDesktops(v);
    });

    this.userDaemon.preferencesContext!.preferencesUnsubscribe = unsubscribe;
  }

  async commitPreferences(preferences: UserPreferences) {
    if (this._disposed) return;

    if (this.userDaemon.checksContext!.NIGHTLY) {
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

    const preferences = this.userDaemon.preferences() || {};

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

    this.userDaemon.preferences.set(result);
    this.commitPreferences(result);
  }

  getGlobalSetting(key: string) {
    return this.userDaemon.preferences().globalSettings[key];
  }

  setGlobalSetting(key: string, value: any) {
    this.userDaemon.preferences.update((v) => {
      v.globalSettings[key] = value;

      return v;
    });
  }

  changeProfilePicture(newValue: string | number) {
    this.userDaemon.preferences.update((v) => {
      v.account.profilePicture = newValue;
      return v;
    });

    this.systemDispatch.dispatch("pfp-changed", [newValue]);
    this.userDaemon.globalDispatch?.emit("pfp-changed", newValue);
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
}
