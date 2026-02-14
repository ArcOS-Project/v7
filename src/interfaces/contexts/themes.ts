import type { IUserContext } from "$interfaces/daemon";
import type { UserTheme } from "$types/theme";
import type { UserPreferences } from "$types/user";

export interface IThemesUserContext extends IUserContext {
  themeFromUserPreferences(data: UserPreferences, name: string, author: string, version: string): UserTheme;
  saveCurrentTheme(name: string): void;
  applyThemeData(data: UserTheme, id?: string): boolean | undefined;
  applySavedTheme(id: string): void;
  verifyTheme(data: UserTheme): string | undefined;
  checkCurrentThemeIdValidity(data: UserPreferences): UserPreferences;
  deleteUserTheme(id: string): void;
}
