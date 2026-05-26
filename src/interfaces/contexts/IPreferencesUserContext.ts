import type { IUserContext } from "$interfaces/IUserDaemon";
import type { UserPreferences } from "$types/user";
import type { ReadableStore, Unsubscriber } from "$types/writable";

// !tpa-prop
export interface IPreferencesUserContext extends IUserContext {
  syncLock: boolean;
  preferencesUnsubscribe: Unsubscriber | undefined;
  preferences: ReadableStore<UserPreferences>;
  _deactivate(): Promise<void>;
  commitPreferences(preferences: UserPreferences): Promise<boolean | undefined>;
  sanitizeUserPreferences(): Promise<void>;
  getGlobalSetting(key: string): any;
  setGlobalSetting(key: string, value: any): void;
  changeProfilePicture(newValue: string | number): void;
  uploadProfilePicture(): Promise<string | undefined>;
  changeShell(id: string): Promise<boolean>;
  startPreferencesSync(): Promise<void>;
}
// !endtpa
