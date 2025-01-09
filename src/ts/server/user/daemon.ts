import { applyDefaults } from "$ts/hierarchy";
import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import { Store } from "$ts/writable";
import { LogLevel } from "$types/logging";
import type { UserInfo, UserPreferences } from "$types/user";
import axios from "axios";
import type { Unsubscriber } from "svelte/store";
import { ServerManager } from "..";
import { DefaultUserInfo, DefaultUserPreferences } from "./default";

export class UserDaemon extends Process {
  public initialized = false;
  public username: string;
  private token: string;
  public preferences = Store<UserPreferences>();
  private preferencesUnsubscribe: Unsubscriber | undefined;
  public userInfo: UserInfo = DefaultUserInfo;

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
  }

  async getUserInfo(): Promise<UserInfo | undefined> {
    if (this.initialized) {
      this.Log(
        `Tried to get user info while initialization is already complete`,
        LogLevel.warning
      );

      return;
    }

    try {
      const url = ServerManager.url();
      const response = await axios.get(`${url}/user/self`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      const data =
        response.status === 200 ? (response.data as UserInfo) : undefined;

      if (!data) return undefined;

      this.preferences.set(data.preferences);

      this.sanitizeUserPreferences();

      this.initialized = true;
      this.userInfo = data;

      return response.status === 200 ? (response.data as UserInfo) : undefined;
    } catch {
      await this.killSelf();

      return undefined;
    }
  }

  startPreferencesSync() {
    this.Log(`Starting user preferences commit sync`);

    const unsubscribe = this.preferences.subscribe(async (v) => {
      if (!v || v.isDefault) return;

      this.commitPreferences(v);
    });

    this.preferencesUnsubscribe = unsubscribe;
  }

  async commitPreferences(preferences: UserPreferences) {
    this.Log(`Committing user preferences`);

    const url = ServerManager.url();

    try {
      const response = await axios.put(`${url}/user/preferences`, preferences, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch {
      this.Log(`Failed to commit user preferences!`, LogLevel.error);
    }
  }

  async stop() {
    if (this.preferencesUnsubscribe) this.preferencesUnsubscribe();
  }

  async sanitizeUserPreferences() {
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
}
