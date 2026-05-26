// !tpa-prop
export interface UserTheme {
  author: string;
  version: string;
  name: string;
  /** */
  taskbarLabels: boolean;
  taskbarDocked: boolean;
  taskbarColored: boolean;
  noAnimations: boolean;
  sharpCorners: boolean;
  compactContext: boolean;
  noGlass: boolean;
  desktopWallpaper: string;
  desktopTheme: string;
  desktopAccent: string;
  loginBackground?: string;
}

export type UserThemeNoMeta = Omit<Omit<Omit<UserTheme, "author">, "version">, "name">;

export type ThemeStore = { [key: string]: UserTheme };
// !endtpa

export const UserThemeKeys = [
  "taskbarLabels",
  "taskbarDocked",
  "taskbarColored",
  "noAnimations",
  "sharpCorners",
  "compactContext",
  "noGlass",
  "desktopWallpaper",
  "desktopAccent",
  "desktopTheme",
];

// !tpa-prop
export enum ExportLocalWallpaperResolution {
  NoSave,
  SaveLocal,
  SaveWithoutLocal,
}
// !endtpa
