import type { IUserContext } from "$interfaces/IUserDaemon";
import type { UserPreferences } from "$types/user";
import type { UserTheme } from "$types/user/theme";

// !tpa
export interface IThemesUserContext extends IUserContext {
  themeFromUserPreferences(data: UserPreferences, name: string, author: string, version: string): UserTheme;
  saveCurrentTheme(name: string): void;
  applyThemeData(data: UserTheme, id?: string): boolean | undefined;
  applySavedTheme(id: string): void;
  verifyTheme(data: UserTheme): string | undefined;
  checkCurrentThemeIdValidity(data: UserPreferences): UserPreferences;
  deleteUserTheme(id: string): void;
  exportTheme(theme: UserTheme, runtime: number): Promise<void>;
}
// !endtpa
