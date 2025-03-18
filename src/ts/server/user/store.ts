import { arrayToText } from "$ts/fs/convert";
import { getParentDirectory } from "$ts/fs/util";
import { DownloadIcon } from "$ts/images/filesystem";
import {
  ArcAppMimeIcon,
  ArcTermMimeIcon,
  ArcThemeMimeIcon,
  AudioMimeIcon,
  CompressMimeIcon,
  ImageMimeIcon,
  JavascriptMimeIcon,
  JsonMimeIcon,
  MarkdownMimeIcon,
  PdfMimeIcon,
  PlaylistMimeIcon,
  ShortcutMimeIcon,
  SvgMimeIcon,
  TextMimeIcon,
  VideoMimeIcon,
  WebpageMimeIcon,
  XmlMimeIcon,
} from "$ts/images/mime";
import { tryJsonParse } from "$ts/json";
import type { FileHandler } from "$types/fs";
import type { ThemeStore } from "$types/theme";
import type { UserDaemon } from "./daemon";

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

export const DefaultMimeIcons: Record<string, string[]> = {
  [ArcAppMimeIcon]: [".tpa"],
  [JsonMimeIcon]: [".json"],
  [PdfMimeIcon]: [".pdf"],
  [SvgMimeIcon]: [".svg"],
  [CompressMimeIcon]: [".zip", ".tar.xz", ".7z", ".rar"],
  [AudioMimeIcon]: [".mp3", ".opus", ".wav", ".m4a", ".flac"],
  [ImageMimeIcon]: [".png", ".jpg", ".gif", ".webp", ".ico", ".bmp", ".tif", ".tiff", ".jpeg"],
  [TextMimeIcon]: [".txt"],
  [ArcTermMimeIcon]: ["arcterm.conf", ".arcterm"],
  [ArcThemeMimeIcon]: [".arctheme"],
  [MarkdownMimeIcon]: [".md"],
  [VideoMimeIcon]: [".mp4", ".mkv", ".mov", ".avi"],
  [WebpageMimeIcon]: [".html", ".htm"],
  [JavascriptMimeIcon]: [".js", ".ts", ".d.ts", ".mjs"],
  [XmlMimeIcon]: [".xml"],
  [PlaylistMimeIcon]: [".arcpl"],
  [ShortcutMimeIcon]: [".arclnk"],
};

export function DefaultFileHandlers(daemon: UserDaemon): Record<string, FileHandler> {
  return {
    runTpaFile: {
      opens: {
        extensions: [".tpa"],
      },
      icon: ArcAppMimeIcon,
      name: "Run ArcOS app",
      description: "Run this TPA file as an application",
      handle: async (path: string) => {
        const text = arrayToText((await daemon.fs.readFile(path))!);
        const json = tryJsonParse(text);

        if (typeof json !== "object") return;

        await daemon.spawnThirdParty(json, path);
      },
      isHandler: true,
    },
    installTpaFile: {
      opens: {
        extensions: [".tpa"],
      },
      icon: DownloadIcon,
      name: "Install application",
      description: "Install this TPA file as an app",
      handle: async (path: string) => {
        const text = arrayToText((await daemon.fs.readFile(path))!);
        const json = tryJsonParse(text);

        if (typeof json !== "object") return;

        console.log(path);

        await daemon.installApp({ ...json, workingDirectory: getParentDirectory(path), tpaPath: path });
      },
      isHandler: true,
    },
  };
}
