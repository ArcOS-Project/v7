import type { SettingsRuntime } from "$apps/user/settings/runtime";
import type { IThemesUserContext } from "$interfaces/contexts/themes";
import type { IUserDaemon } from "$interfaces/daemon";
import { Fs } from "$ts/env";
import { DefaultUserPreferences } from "$ts/user/default";
import { BuiltinThemes, UserPaths } from "$ts/user/store";
import { textToBlob } from "$ts/util/convert";
import { MessageBox } from "$ts/util/dialog";
import { LogLevel } from "$types/logging";
import { ExportLocalWallpaperResolution, UserThemeKeys, type UserTheme } from "$types/theme";
import type { UserPreferences } from "$types/user";
import { Daemon } from "..";
import { UserContext } from "../context";

export class ThemesUserContext extends UserContext implements IThemesUserContext {
  constructor(id: string, daemon: IUserDaemon) {
    super(id, daemon);
  }

  themeFromUserPreferences(data: UserPreferences, name: string, author: string, version: string): UserTheme {
    if (this._disposed) return {} as UserTheme;

    return {
      author,
      version,
      name,
      taskbarLabels: data.shell.taskbar.labels,
      taskbarDocked: data.shell.taskbar.docked,
      taskbarColored: data.shell.taskbar.colored,
      noAnimations: data.shell.visuals.noAnimations,
      sharpCorners: data.shell.visuals.sharpCorners,
      compactContext: data.shell.visuals.compactContext,
      noGlass: data.shell.visuals.noGlass,
      desktopWallpaper: data.desktop.wallpaper,
      desktopTheme: data.desktop.theme,
      desktopAccent: data.desktop.accent,
      loginBackground: data.account.loginBackground || "img18",
    };
  }

  saveCurrentTheme(name: string) {
    if (this._disposed) return;

    this.Log(`Saving current theme as '${name}'`);

    const id = `${Math.floor(Math.random() * 1e6)}`;

    Daemon!.preferences.update((userPreferences) => {
      const context = this.themeFromUserPreferences(userPreferences, name, this.username, "1.0");

      userPreferences.userThemes[id] = context;

      return userPreferences;
    });
  }

  applyThemeData(data: UserTheme, id?: string) {
    if (this._disposed || !data) return;

    this.Log(`Apply theme data, ID='${id}'`);

    const verifier = this.verifyTheme(data);

    if (verifier !== "themeIsValid") {
      this.Log(`Not loading invalid theme! Missing ${verifier}`, LogLevel.error);

      return false;
    }

    Daemon!.preferences.update((userPreferences) => {
      userPreferences.shell.taskbar.labels = !!data.taskbarLabels;
      userPreferences.shell.taskbar.docked = !!data.taskbarDocked;
      userPreferences.shell.taskbar.colored = !!data.taskbarColored;
      userPreferences.shell.visuals.noAnimations = !!data.noAnimations;
      userPreferences.shell.visuals.sharpCorners = !!data.sharpCorners;
      userPreferences.shell.visuals.compactContext = !!data.compactContext;
      userPreferences.shell.visuals.noGlass = !!data.noGlass;
      userPreferences.desktop.wallpaper = data.desktopWallpaper;
      userPreferences.desktop.accent = data.desktopAccent;
      userPreferences.desktop.theme = data.desktopTheme;
      userPreferences.account.loginBackground = data.loginBackground || "img18";

      if (id) userPreferences.currentThemeId = id;

      return userPreferences;
    });

    return true;
  }

  applySavedTheme(id: string) {
    if (this._disposed) return;

    this.Log(`Applying saved theme '${id}'`);

    const userPreferences = Daemon!.preferences();

    if (!userPreferences.userThemes[id]) return;

    this.applyThemeData(userPreferences.userThemes[id], id);
  }

  verifyTheme(data: UserTheme) {
    if (this._disposed) return;

    const keys = Object.keys(data);

    for (const key of UserThemeKeys) {
      if (!keys.includes(key)) return key;
    }

    return "themeIsValid";
  }

  checkCurrentThemeIdValidity(data: UserPreferences): UserPreferences {
    if (this._disposed) return DefaultUserPreferences;

    const { currentThemeId } = data;
    if (!currentThemeId) return data;

    const retrievedThemeData = BuiltinThemes[currentThemeId] || (data.userThemes || {})[currentThemeId];
    if (!retrievedThemeData) return data;

    const theme = this.themeFromUserPreferences(
      data,
      retrievedThemeData.name,
      retrievedThemeData.author,
      retrievedThemeData.version
    );

    if (JSON.stringify(theme) !== JSON.stringify(retrievedThemeData)) data.currentThemeId = undefined;

    return data;
  }

  deleteUserTheme(id: string) {
    if (this._disposed) return;

    this.Log(`Deleting user theme '${id}'`);

    Daemon!.preferences.update((udata) => {
      if (!udata.userThemes) return udata;

      delete udata.userThemes[id];

      return udata;
    });
  }

  async exportTheme(theme: UserTheme, runtimePid: number): Promise<void> {
    const [path] = await Daemon!.files!.LoadSaveDialog({
      title: "Choose where to save the theme",
      isSave: true,
      startDir: UserPaths.Documents,
      icon: "ThemesIcon",
      saveName: `${theme.name || "Untitled theme"}.arctheme`,
    });

    if (!path) return;

    let saveOption = ExportLocalWallpaperResolution.NoSave;

    // The reason for the odddly placed function is this was the best way I
    // could think of to not repeat code, but also achieve the result I wanted.
    async function writeTheme() {
      if (saveOption === ExportLocalWallpaperResolution.SaveWithoutLocal) {
        if (theme.desktopWallpaper.startsWith("@local:")) theme.desktopWallpaper = "img0";
        if (theme.loginBackground?.startsWith("@local:")) theme.loginBackground = "img0";
      }

      await Fs.writeFile(path!, textToBlob(JSON.stringify(theme, null, 2)));
    }

    if (theme.loginBackground?.startsWith("@local:") || theme.desktopWallpaper.startsWith("@local:")) {
      await MessageBox(
        {
          title: "Save with local wallpapers?",
          message: `Seems this theme contains a wallpaper that uses a file only
                      on your filesystem. If you plan to share this theme, it might
                      be best to replace the wallpaper(s) with built-in ones. If you
                      wish to continue anyways, you can.`,
          image: "ImageViewerIcon",
          sound: "arcos.dialog.warning",
          buttons: [
            {
              caption: "Cancel",
              action: () => {},
            },
            {
              caption: "Save with local anyways",
              action: () => {
                saveOption = ExportLocalWallpaperResolution.SaveLocal;
                writeTheme();
              },
            },
            {
              caption: "Replace with built-in",
              action: () => {
                saveOption = ExportLocalWallpaperResolution.SaveWithoutLocal;
                writeTheme();
              },
              suggested: true,
            },
          ],
        },
        runtimePid,
        true
      );
    }
  }
}
