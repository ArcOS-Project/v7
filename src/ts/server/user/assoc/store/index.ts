import type { FileDefinition } from "$types/assoc";
import { AudioFileDefinitions } from "./audio";
import { ImageFileDefinitions } from "./image";
import { VideoFileDefinitions } from "./video";

export const DefaultFileDefinitions: Record<string, FileDefinition> = {
  ".tpa": {
    friendlyName: "Third-party app file",
    icon: "ArcAppMimeIcon",
  },
  ".tpab": {
    friendlyName: "Third-party app binary",
    icon: "ArcAppMimeIcon",
  },
  ".json": {
    friendlyName: "JSON file",
    icon: "JsonMimeIcon",
  },
  ".pdf": {
    friendlyName: "PDF document",
    icon: "PdfMimeIcon",
  },
  ".svg": {
    friendlyName: "SVG image",
    icon: "SvgMimeIcon",
  },
  ".zip": {
    friendlyName: "Archive",
    icon: "CompressMimeIcon",
  },
  ".txt": {
    friendlyName: "Text file",
    icon: "TextMimeIcon",
  },
  "arcterm.conf": {
    friendlyName: "ArcTerm configuration",
    icon: "TextMimeIcon",
  },
  ".arcterm": {
    friendlyName: "ArcTerm script (unsupported)",
    icon: "TextMimeIcon",
  },
  ".arctheme": {
    friendlyName: "ArcOS theme",
    icon: "TextMimeIcon",
  },
  ".md": {
    friendlyName: "Markdown document",
    icon: "TextMimeIcon",
  },
  ".html": {
    friendlyName: "HTML document",
    icon: "XmlMimeIcon",
  },
  ".htm": {
    friendlyName: "HTML document",
    icon: "XmlMimeIcon",
  },
  ".js": {
    friendlyName: "JS script",
    icon: "JavascriptMimeIcon",
  },
  ".d.ts": {
    friendlyName: "Type definitions",
    icon: "JavascriptMimeIcon",
  },
  ".ts": {
    friendlyName: "TS script",
    icon: "JavascriptMimeIcon",
  },
  ".mjs": {
    friendlyName: "JS module",
    icon: "JavascriptMimeIcon",
  },
  ".xml": {
    friendlyName: "XML file",
    icon: "XmlMimeIcon",
  },
  ".arcpl": {
    friendlyName: "ArcOS playlist",
    icon: "PlaylistMimeIcon",
  },
  ".arclnk": {
    friendlyName: "Shortcut",
    icon: "ShortcutMimeIcon",
  },
  ".arc": {
    friendlyName: "ArcOS package",
    icon: "ArcAppMimeIcon",
  },
  ".msg": {
    friendlyName: "ArcOS message",
    icon: "MessagingIcon",
  },
  ".css": {
    friendlyName: "CSS file",
    icon: "DefaultMimeIcon",
  },
  ".mig": {
    friendlyName: "Migration status",
    icon: "ComponentIcon",
  },
  ".lock": {
    friendlyName: "Migration lockfile",
    icon: "ComponentIcon",
  },
  RegisteredVersion: {
    friendlyName: "Version registration",
    icon: "ComponentIcon",
  },
  ".exe": {
    friendlyName: "Windows executable (unsupported)",
    icon: "UnknownFileIcon",
  },
  ".msi": {
    friendlyName: "Windows installer (unsupported)",
    icon: "UnknownFileIcon",
  },
  ".com": {
    friendlyName: "MS-DOS executable (unsupported)",
    icon: "UnknownFileIcon",
  },
  ".img": {
    friendlyName: "Floppy image (unsupported)",
    icon: "UnknownFileIcon",
  },
  ".iso": {
    friendlyName: "CD-ROM image (unsupported)",
    icon: "UnknownFileIcon",
  },
  ".msl": {
    friendlyName: "ArcMSL script (legacy)",
    icon: "UnknownFileIcon",
  },
  ".osl": {
    friendlyName: "OriginOS script (unsupported)",
    icon: "UnknownFileIcon",
  },
  ".wasm": {
    friendlyName: "WebAssembly (unsupported",
    icon: "UnknownFileIcon",
  },
  ".bin": {
    friendlyName: "Binary (unsupported)",
    icon: "UnknownFileIcon",
  },
  ...AudioFileDefinitions, // AudioMimeIcon
  ...ImageFileDefinitions, // ImageMimeIcon
  ...VideoFileDefinitions, // VideoMimeIcon
};
