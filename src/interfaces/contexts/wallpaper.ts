import type { IUserContext } from "$interfaces/daemon";
import type { UserPreferences } from "$types/user";
import type { Wallpaper } from "$types/wallpaper";
import type { ReadableStore } from "$types/writable";

export interface IWallpaperUserContext extends IUserContext {
  Wallpaper: ReadableStore<Wallpaper>;
  lastWallpaper: ReadableStore<string>;
  updateWallpaper(v: UserPreferences): Promise<void>;
  uploadWallpaper(pid?: number): Promise<Wallpaper | undefined>;
  getWallpaper(id: string, override?: string): Promise<Wallpaper>;
  deleteLocalWallpaper(id: string): Promise<boolean>;
  getLocalWallpaper(id: string): Promise<Wallpaper>;
}
