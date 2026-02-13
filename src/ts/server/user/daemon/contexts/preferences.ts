import { DefaultPinnedApps, DefaultStartMenuActions } from "$apps/components/shell/store";
import type { IPreferencesUserContext, IUserDaemon } from "$interfaces/daemon";
import { Fs, SysDispatch } from "$ts/env";
import { applyDefaults } from "$ts/hierarchy";
import { Backend } from "$ts/server/axios";
import { Store } from "$ts/writable";
import { LogLevel } from "$types/logging";
import type { UserPreferences } from "$types/user";
import type { Unsubscriber } from "$types/writable";
import { Daemon } from "..";
import { DefaultUserPreferences } from "../../default";
import { UserPaths } from "../../store";
import { UserContext } from "../context";

export class PreferencesUserContext extends UserContext implements IPreferencesUserContext {
  public syncLock = false;
  public preferencesUnsubscribe: Unsubscriber | undefined;
  public preferences = Store<UserPreferences>(DefaultUserPreferences);

  constructor(id: string, daemon: IUserDaemon) {
    super(id, daemon);
  }

  async _deactivate() {
    if (this.preferencesUnsubscribe) this.preferencesUnsubscribe();
  }

  async commitPreferences(preferences: UserPreferences) {
    if (this._disposed) return;

    if (Daemon!.checks!.NIGHTLY) {
      this.Log("User preference commit prohibited: nightly build");
      return true;
    }
    this.Log(`Committing user preferences`);

    try {
      const response = await Backend.put(`/user/preferences`, preferences, {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
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

    const preferences = Daemon!.preferences() || {};

    if (preferences.isDefault) {
      this.Log(`Not sanitizing default preferences`, LogLevel.warning);
      return;
    }

    if (!preferences.startup)
      preferences.startup = {
        wallpaper: "app",
      };

    if (!preferences.pinnedApps?.length) preferences.pinnedApps = DefaultPinnedApps;

    let result = applyDefaults<UserPreferences>(preferences, {
      ...DefaultUserPreferences,
      isDefault: undefined,
    });

    // Hotfix to reset the user preferences if the shell object is somehow missing
    if (!result.shell) result = { ...DefaultUserPreferences, isDefault: undefined };

    if (!result.globalSettings.shellExec) result.globalSettings.shellExec = "arcShell";
    if (!result.shell.start.actions?.length) result.shell.start.actions = DefaultStartMenuActions;

    Daemon!.preferences.set(result);
    this.commitPreferences(result);
  }

  getGlobalSetting(key: string) {
    return Daemon!.preferences().globalSettings[key];
  }

  setGlobalSetting(key: string, value: any) {
    Daemon!.preferences.update((v) => {
      v.globalSettings[key] = value;

      return v;
    });
  }

  changeProfilePicture(newValue: string | number) {
    Daemon!.preferences.update((v) => {
      v.account.profilePicture = newValue;
      return v;
    });

    SysDispatch.dispatch("pfp-changed", [newValue]);
    Daemon!.globalDispatch?.emit("pfp-changed", newValue);
  }

  async uploadProfilePicture(): Promise<string | undefined> {
    if (this._disposed) return undefined;

    this.Log(`Uploading profile picture to ${UserPaths.Pictures}`);

    try {
      const result = await Fs.uploadFiles(UserPaths.Pictures, "image/*");
      if (!result.length) return;

      const { path } = result[0];
      this.changeProfilePicture(path);

      return path;
    } catch {
      return;
    }
  }
}
