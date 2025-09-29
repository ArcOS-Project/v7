import { Process } from "$ts/process/instance";
import type { App } from "$types/app";
import type { FileHandler } from "$types/fs";
import type { ThemeStore, UserTheme } from "$types/theme";
import type { UserDaemon } from "./daemon";
import installArcPkg from "./handlers/arcpkg";
import applyArcTheme from "./handlers/arctheme";
import installTpaFile from "./handlers/installtpa";
import mountZipFile from "./handlers/mountzip";
import runTpaFile from "./handlers/runtpa";
import runTpaBundle from "./handlers/runtpab";

export const BuiltinThemes: ThemeStore = {
  wilhelminaSunset: {
    author: "SWHFotografie",
    version: "1.0",
    name: "Wilhelmina Sunset",
    taskbarLabels: false,
    taskbarDocked: true,
    taskbarColored: true,
    noAnimations: false,
    sharpCorners: false,
    compactContext: false,
    noGlass: false,
    desktopWallpaper: "img18",
    desktopTheme: "dark",
    desktopAccent: "FF6842",
    loginBackground: "img18",
  },
  snowyMountains: {
    author: "Allucat1000",
    version: "1.0",
    name: "Snowy Mountains",
    taskbarLabels: false,
    taskbarDocked: false,
    taskbarColored: true,
    noAnimations: false,
    sharpCorners: false,
    compactContext: false,
    noGlass: false,
    desktopWallpaper: "img33",
    desktopTheme: "light",
    desktopAccent: "66D9FF",
    loginBackground: "img33",
  },
  germanicWaterfall: {
    author: "Allucat1000",
    version: "1.0",
    name: "Germanic Waterfall",
    taskbarLabels: false,
    taskbarDocked: false,
    taskbarColored: true,
    noAnimations: false,
    sharpCorners: false,
    compactContext: false,
    noGlass: false,
    desktopWallpaper: "img34",
    desktopTheme: "light",
    desktopAccent: "FFCB3D",
    loginBackground: "img34",
  },
  snowyWandelbos: {
    author: "SWHFotografie",
    version: "1.0",
    name: "Snowy Wandelbos",
    taskbarLabels: false,
    taskbarDocked: false,
    taskbarColored: true,
    noAnimations: false,
    sharpCorners: false,
    compactContext: false,
    noGlass: false,
    desktopWallpaper: "img08",
    desktopTheme: "dark",
    desktopAccent: "94DBFF",
    loginBackground: "img08",
  },
  mykonosSeaside: {
    author: "Kees van Voorthuizen",
    version: "1.0",
    name: "Mykonos Seaside",
    taskbarLabels: false,
    taskbarDocked: false,
    taskbarColored: true,
    noAnimations: false,
    sharpCorners: false,
    compactContext: false,
    noGlass: false,
    desktopWallpaper: "img01",
    desktopTheme: "light",
    desktopAccent: "00AAFF",
    loginBackground: "img01",
  },
  eveningLakeside: {
    author: "Saw Ramsson",
    version: "1.0",
    name: "Evening Lakeside",
    taskbarLabels: false,
    taskbarDocked: true,
    taskbarColored: true,
    noAnimations: false,
    sharpCorners: false,
    compactContext: false,
    noGlass: false,
    desktopWallpaper: "img22",
    desktopTheme: "dark",
    desktopAccent: "6DA0D0",
    loginBackground: "img22",
  },
  sunsetInMykonos: {
    author: "Kees van Voorthuizen",
    version: "1.0",
    name: "Sunset in Mykonos",
    taskbarLabels: false,
    taskbarDocked: false,
    taskbarColored: false,
    noAnimations: false,
    sharpCorners: false,
    compactContext: false,
    noGlass: false,
    desktopWallpaper: "img02",
    desktopTheme: "light",
    desktopAccent: "CEBA3B",
    loginBackground: "img02",
  },
  evningNeighbourhood: {
    author: "Matteo Scaringi",
    version: "1.0",
    name: "Evening Neighbourhood",
    taskbarLabels: false,
    taskbarDocked: false,
    taskbarColored: true,
    noAnimations: false,
    sharpCorners: false,
    compactContext: false,
    noGlass: false,
    desktopWallpaper: "img27",
    desktopTheme: "dark",
    desktopAccent: "FFA200",
    loginBackground: "img27",
  },
  redBridgeLake: {
    author: "Saw Ramsson",
    version: "1.0",
    name: "Red Bridge Lake",
    taskbarLabels: false,
    taskbarDocked: false,
    taskbarColored: true,
    noAnimations: false,
    sharpCorners: true,
    compactContext: false,
    noGlass: false,
    desktopWallpaper: "img23",
    desktopTheme: "light",
    desktopAccent: "FF7575",
    loginBackground: "img23",
  },
  hagueNightfall: {
    author: "SWHFotografie",
    version: "1.0",
    name: "Hague Nightfall",
    taskbarLabels: false,
    taskbarDocked: false,
    taskbarColored: true,
    noAnimations: false,
    sharpCorners: false,
    compactContext: false,
    noGlass: false,
    desktopWallpaper: "img13",
    desktopTheme: "dark",
    desktopAccent: "FFB35C",
    loginBackground: "img13",
  },
  eveningSunset: {
    author: "Blocky (Cy)",
    version: "1.0",
    name: "Evening Beach",
    taskbarLabels: false,
    taskbarDocked: true,
    taskbarColored: true,
    noAnimations: false,
    sharpCorners: false,
    compactContext: false,
    noGlass: false,
    desktopWallpaper: "img35",
    desktopTheme: "dark",
    desktopAccent: "44C5AC",
    loginBackground: "img30",
  },
};

export const VisualStyles: Record<string, string> = {
  dark: "Dark",
  light: "Light",
};

export const ActivityIconTranslations = {
  unknown: "shield-question",
  login: "log-in",
  logout: "log-out",
};

export const ActivityCaptionTranslations = {
  unknown: "Unknown activity",
  login: "Logged in",
  logout: "Logged out",
};

export const TimeFrames: Record<string, string> = {
  today: "Today",
  yesterday: "Yesterday",
  sevenDays: "Past 7 days",
  twentyEightDays: "Past 28 days",
  older: "Older",
};

export const BlankUserTheme: UserTheme = {
  author: "",
  version: "",
  name: "",
  taskbarLabels: false,
  taskbarDocked: false,
  taskbarColored: false,
  noAnimations: false,
  sharpCorners: false,
  compactContext: false,
  noGlass: false,
  desktopWallpaper: "",
  desktopTheme: "",
  desktopAccent: "",
  loginBackground: "",
};

export function DefaultFileHandlers(daemon: UserDaemon): Record<string, FileHandler> {
  return {
    runTpaFile: runTpaFile(daemon),
    installTpaFile: installTpaFile(daemon),
    runTpaBundle: runTpaBundle(daemon),
    installArcPkg: installArcPkg(daemon),
    mountZipFile: mountZipFile(daemon),
    applyArcTheme: applyArcTheme(daemon),
  };
}

export const DefaultAppData: App = {
  metadata: {
    name: "Unknown",
    author: "No author",
    version: "0.0.0",
    icon: "QuestionIcon",
  },
  size: { w: NaN, h: NaN },
  minSize: { w: NaN, h: NaN },
  maxSize: { w: NaN, h: NaN },
  position: { centered: true },
  state: {
    maximized: false,
    minimized: false,
    fullscreen: false,
    headless: false,
    resizable: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  id: "unknown",
  assets: {
    runtime: Process,
    component: "" as any,
  },
};

export const DefaultThirdPartyAppData = {
  metadata: {
    name: "Template",
    author: "Izaak Kuipers",
    version: "0.0.1",
    icon: "DefaultMimeIcon",
  },
  size: {
    w: 0,
    h: 0,
  },
  minSize: {
    w: 0,
    h: 0,
  },
  maxSize: {
    w: 0,
    h: 0,
  },
  position: {
    centered: false,
  },
  state: {
    maximized: false,
    minimized: false,
    resizable: false,
    headless: false,
    fullscreen: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false,
  },
  entrypoint: "main.js",
  glass: false,
  id: "template",
};

export const AppGroups: Record<string, string> = {
  multimedia: "Multimedia",
  systemTools: "System Tools",
  utilities: "Utilities",
  thirdParty: "Third-party apps",
  components: "Components",
  coreApps: "Core Applications",
  entertainment: "Entertainment",
};

// Record<oldLocation, newLocation>
export const UserPaths = {
  Home: "U:/Home",
  Documents: "U:/Home/Documents",
  Pictures: "U:/Home/Pictures",
  Downloads: "U:/Home/Downloads",
  Wallpapers: "U:/Home/Wallpapers",
  Desktop: "U:/Home/Desktop",
  Music: "U:/Home/Music",
  Applications: "U:/Applications",
  Trashcan: "U:/System/Trashcan",
  Root: "U:/",
  System: "U:/System",
  Migrations: "U:/System/Migrations",
  Configuration: "U:/System/Config",
  AppShortcuts: "U:/System/AppShortcuts",
  AppRepository: "U:/System/AppRepository",
};

export const SystemFolders = [
  UserPaths.Applications,
  UserPaths.Trashcan,
  UserPaths.System,
  UserPaths.Migrations,
  UserPaths.Configuration,
  UserPaths.AppShortcuts,
  UserPaths.AppRepository,
];

export const UserPathCaptions: Record<string, string> = {
  Home: "%userPaths.Home%",
  Documents: "%userPaths.Documents%",
  Pictures: "%userPaths.Pictures%",
  Downloads: "%userPaths.Downloads%",
  Wallpapers: "%userPaths.Wallpapers%",
  Desktop: "%userPaths.Desktop%",
  Music: "%userPaths.Music%",
  Applications: "%userPaths.Applications%",
  Trashcan: "%userPaths.Trashcan%",
  Root: "%userPaths.Root%",
  System: "%userPaths.System%",
  Migrations: "%userPaths.Migrations%",
  Configuration: "%userPaths.Configuration%",
  AppShortcuts: "%userPaths.AppShortcuts%",
  AppRepository: "%userPaths.AppRepository%",
};

export const HiddenUserPaths: string[] = [
  "Migrations",
  "Configuration",
  "System",
  "Trashcan",
  "AppShortcuts",
  "Applications",
  "AppRepository",
];

export const UserPathIcons: Record<string, string> = {
  Home: "house",
  Documents: "folder-dot",
  Pictures: "image",
  Downloads: "download",
  Wallpapers: "wallpaper",
  Desktop: "dock",
  Music: "music",
  Applications: "app-window",
  Trashcan: "trash-2",
  Root: "hard-drive",
  System: "cog",
  Migrations: "chevrons-right",
  Configuration: "folder-cog",
  AppShortcuts: "arrow-up-right",
  AppRepository: "cog",
};

export const UserFonts: string[] = [
  "Reddit Sans",
  "Poppins",
  "Arsenal",
  "Nothing You Could Do",
  "Overlock",
  "Sofia",
  "Inter",
  "Fira Sans",
  "Lora",
  "Crimson Text",
  "Cormorant",
  "Albert Sans",
  "Alegreya Sans",
  "Merienda",
  "Changa",
  "Kotta One",
];
