import { GlobalDispatcher } from "$ts/dispatch";
import {
  ArcAppMimeIcon,
  ArcTermMimeIcon,
  ArcThemeMimeIcon,
  AudioMimeIcon,
  CompressMimeIcon,
  DefaultMimeIcon,
  ImageMimeIcon,
  JavascriptMimeIcon,
  JsonMimeIcon,
  MarkdownMimeIcon,
  PdfMimeIcon,
  SvgMimeIcon,
  TextMimeIcon,
  UnknownFileIcon,
  VideoMimeIcon,
  WebpageMimeIcon,
  XmlMimeIcon,
} from "$ts/images/mime";
import { WaveKernel } from "$ts/kernel";

export const MimeTypeIcons: Record<string, string[]> = {
  // <icon, .ext>
  [ArcAppMimeIcon]: [".appmod"],
  [JsonMimeIcon]: [".json"],
  [PdfMimeIcon]: [".pdf"],
  [SvgMimeIcon]: [".svg"],
  [CompressMimeIcon]: [".zip", ".tar.xz", ".7z", ".rar"],
  [AudioMimeIcon]: [".mp3", ".opus", ".wav", ".m4a", ".flac"],
  [ImageMimeIcon]: [
    ".png",
    ".jpg",
    ".gif",
    ".webp",
    ".ico",
    ".bmp",
    ".tif",
    ".tiff",
    ".jpeg",
  ],
  [TextMimeIcon]: [".txt"],
  [ArcTermMimeIcon]: ["arcterm.conf", ".arcterm"],
  [ArcThemeMimeIcon]: [".arctheme"],
  [MarkdownMimeIcon]: [".md"],
  [VideoMimeIcon]: [".mp4", ".mkv", ".mov", ".avi"],
  [WebpageMimeIcon]: [".html", ".htm"],
  [JavascriptMimeIcon]: [".js", ".ts", ".d.ts", ".mjs"],
  [XmlMimeIcon]: [".xml"],
};

export const sizeUnits = [
  "bytes",
  "KB",
  "MB",
  "GB",
  "TB",
  "PB",
  "EB",
  "ZB",
  "YB",
];

export function join(...args: string[]) {
  let parts: string[] = [];

  for (var i = 0, l = args.length; i < l; i++) {
    parts = parts.concat(args[i].split("/"));
  }

  const newParts = [];

  for (i = 0, l = parts.length; i < l; i++) {
    const part = parts[i];

    if (!part || part === ".") continue;
    if (part === "..") newParts.pop();
    else newParts.push(part);
  }

  if (parts[0] === "") newParts.unshift("");

  return newParts.join("/") || (newParts.length ? "/" : ".");
}

export function dirname(path: string) {
  return join(path, "..");
}

export function getDirectoryName(path: string) {
  const split = path.split("/");

  return split[split.length - 1];
}

export function getDriveLetter(path: string, allowUuid = false) {
  const split = path.split("/");

  if (allowUuid) {
    if (split[0].endsWith(":")) return split[0];
  } else {
    if (split[0].endsWith(":") && split[0].length === 2) return split[0];
  }

  return undefined;
}

export function getParentDirectory(p: string): string {
  if (!p) return p;

  const split = p.split("/");

  if (!split.length || split.length == 1) return p;

  split.splice(-1);

  const newPath = split.join("/");

  return newPath.endsWith(":") ? `${newPath}/` : newPath;
}

export function onFileChange(path: string, callback: () => void) {
  const kernel = WaveKernel.get();
  const dispatch = kernel.getModule<GlobalDispatcher>("dispatch");

  dispatch.subscribe("fs-flush-file", (data) => {
    if (data[0] === path) callback();
  });

  callback();
}

export function onFolderChange(path: string, callback: () => void) {
  const kernel = WaveKernel.get();
  const dispatch = kernel.getModule<GlobalDispatcher>("dispatch");

  dispatch.subscribe<string>("fs-flush-folder", (data) => {
    if (!path || data === path) callback();
  });

  callback();
}

/**
 * Formats the incoming bytes to a human-readable format
 * @param bytes The bytes to format
 * @returns The formatted size
 */
export function formatBytes(bytes: number) {
  let l = 0,
    n = bytes;

  while (n >= 1024 && ++l) {
    n = n / 1024;
  }

  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + sizeUnits[l];
}

export function getMimeIcon(
  filename: string,
  fallback = DefaultMimeIcon
): string {
  filename = filename.toLowerCase();

  for (const icon in MimeTypeIcons) {
    const extensions = MimeTypeIcons[icon];

    for (const extension of extensions) {
      if (filename.endsWith(extension)) return icon;
    }
  }

  return fallback;
}
