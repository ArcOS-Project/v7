import { arrayToBlob } from "$ts/util/convert";
import { getParentDirectory } from "$ts/util/fs";
import { Wallpapers } from "$ts/wallpaper/store";
import { Store } from "$ts/writable";
import { LogLevel } from "$types/logging";
import type { UserPreferences, WallpaperGetters } from "$types/user";
import type { Wallpaper } from "$types/wallpaper";
import type { UserDaemon } from "..";
import { UserPaths } from "../../store";
import { UserContext } from "../context";

export class WallpaperUserContext extends UserContext {
  public Wallpaper = Store<Wallpaper>(Wallpapers.img0);
  public lastWallpaper = Store<string>("img0");
  private localWallpaperCache: Record<string, Blob> = {};
  private wallpaperGetters: WallpaperGetters = [
    ["@local:", async (id: string) => await this.getLocalWallpaper(id)],
    ["img", (id) => Wallpapers[id] || Wallpapers["img04"]],
  ];

  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async updateWallpaper(v: UserPreferences) {
    if (this._disposed) return;

    const incoming = v.desktop.wallpaper;

    if (incoming === this.lastWallpaper()) return;

    this.lastWallpaper.set(incoming);

    const wallpaper = await this.getWallpaper(incoming);

    if (!wallpaper) return;

    this.Wallpaper.set(wallpaper);
  }

  async uploadWallpaper(pid?: number): Promise<Wallpaper | undefined> {
    if (this._disposed) return;

    this.Log(`Uploading wallpaper to U:/Wallpapers`);

    const prog = await this.daemon.files!.FileProgress(
      {
        type: "size",
        icon: "ImageMimeIcon",
        caption: "Uploading a wallpaper of your choosing",
        subtitle: `To U:/Wallpapers`,
      },
      pid
    );

    try {
      const result = await this.fs.uploadFiles(UserPaths.Wallpapers, "image/*", false, (progress) => {
        prog.show();
        prog.setMax(progress.max);
        prog.setDone(progress.value);
      });

      if (!result.length) {
        prog.stop();
        return {} as Wallpaper;
      }

      const { path, file } = result[0];

      const wallpaper: Wallpaper = {
        author: this.username,
        name: file.name,
        url: "",
        thumb: "",
      };

      this.daemon.preferences.update((v) => {
        v.userWallpapers ||= {};
        v.userWallpapers[`@local:${btoa(path)}`] = wallpaper;

        return v;
      });

      return wallpaper;
    } catch {
      prog.stop();
    }
  }

  public async getWallpaper(id: string, override?: string): Promise<Wallpaper> {
    if (this._disposed) return Wallpapers["img0"];

    if (!id) return Wallpapers[override || "img0"];

    if (id.startsWith("http"))
      return {
        author: "The Web",
        name: "From the Internet",
        url: id,
        thumb: id,
      };

    for (const [prefix, getter] of this.wallpaperGetters) {
      if (id.startsWith(prefix)) return await getter(id);
    }

    return Wallpapers[override || "img0"];
  }

  async deleteLocalWallpaper(id: string): Promise<boolean> {
    if (this._disposed) return false;

    this.Log(`Deleting local wallpaper '${id}'`);

    const path = atob(id.replace("@local:", ""));
    let result: boolean = false;

    try {
      result = await this.fs.deleteItem(path);
    } catch {
      result = false;
    }

    this.daemon.preferences.update((v) => {
      delete v.userWallpapers[id];

      return v;
    });

    delete this.localWallpaperCache[id];

    return result;
  }

  async getLocalWallpaper(id: string): Promise<Wallpaper> {
    if (this._disposed) return Wallpapers.img0;

    const wallpaperData = this.daemon.preferences().userWallpapers[id];

    if (!wallpaperData) {
      this.Log(`Tried to get unknown user wallpaper '${id}', defaulting to img04`, LogLevel.warning);

      return Wallpapers.img04;
    }
    if (this.localWallpaperCache[id])
      return {
        ...wallpaperData,
        url: URL.createObjectURL(this.localWallpaperCache[id]),
        thumb: URL.createObjectURL(this.localWallpaperCache[id]),
      };

    try {
      const path = atob(id.replace("@local:", ""));
      const parent = await this.fs.readDir(getParentDirectory(path));
      const contents = await this.fs.readFile(path);

      if (!contents || !parent) {
        this.Log(`User wallpaper '${id}' doesn't exist on the filesystem anymore, defaulting to img04`, LogLevel.warning);

        return Wallpapers.img04;
      }

      const blob = arrayToBlob(contents, parent.files.filter((f) => path.endsWith(f.name))[0]?.mimeType || "");
      const blobUrl = URL.createObjectURL(blob);

      this.localWallpaperCache[id] = blob;

      return {
        ...wallpaperData,
        url: blobUrl,
        thumb: blobUrl,
      };
    } catch {
      return Wallpapers.img0;
    }
  }
}
