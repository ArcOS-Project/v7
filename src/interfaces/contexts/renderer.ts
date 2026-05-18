import type { IUserContext } from "$interfaces/daemon";
import type { CustomStylePreferences, UserPreferences } from "$types/user";

export interface IAppRendererUserContext extends IUserContext {
  _deactivate(): Promise<void>;
  getAppRendererStyle(accent: string): string;
  setAppRendererClasses(v: UserPreferences): Promise<void>;
  setUserStyleLoader(style: CustomStylePreferences): void;
}
