import { DefaultPinnedApps, DefaultStartMenuActions } from "$apps/components/shell/store";
import type { IPreferencesUserContext } from "$interfaces/contexts/IPreferencesUserContext";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { IUserConnector } from "$interfaces/modules/server/IUserConnector";
import { Daemon, Fs, SysDispatch } from "$ts/env";
import { DefaultUserPreferences } from "$ts/user/default";
import { UserPaths } from "$ts/user/store";
import { applyDefaults } from "$ts/util/hierarchy";
import { Store } from "$ts/writable";
import { LogLevel } from "$types/shared/logging";
import type { Unsubscriber } from "$types/shared/writable";
import type { UserPreferences } from "$types/user";
import { UserContext } from "../context";

export class PreferencesUserContext extends UserContext implements IPreferencesUserContext {
  public syncLock = false;
  public preferencesUnsubscribe: Unsubscriber | undefined;
  public preferences = Store<UserPreferences>(DefaultUserPreferences);
  private firstSyncDone = false;

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

    const result = await Daemon.GetConnector<IUserConnector>("UserConnector").PreferencesPut(preferences);
    if (!result.success) {
      this.Log(`Failed to commit user preferences! ${result.errorMessage}`, LogLevel.error);
      return false;
    }

    return true;
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

  async changeShell(id: string): Promise<boolean> {
    const appStore = Daemon!.appStorage();
    const newShell = appStore?.getAppSynchronous(id);

    if (!newShell) return false;

    const proceed = await Daemon?.helpers?.Confirm(
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

    const restartNow = await Daemon?.helpers?.Confirm(
      "Restart now?",
      "ArcOS has to restart before the changes will apply. Do you want to restart now?",
      "Not now",
      "Restart",
      "RestartIcon"
    );

    if (restartNow) await Daemon?.power?.restart();

    return true;
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
      Daemon!.workspaces?.syncVirtualDesktops(v);
      Daemon!.updateGlobalDispatch();
    });

    Daemon!.preferencesCtx!.preferencesUnsubscribe = unsubscribe;
  }
}
