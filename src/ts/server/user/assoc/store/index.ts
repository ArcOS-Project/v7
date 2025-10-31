import type { FileDefinition } from "$types/assoc";
import { AudioFileDefinitions } from "./audio";
import { ImageFileDefinitions } from "./image";
import { VideoFileDefinitions } from "./video";

export const DefaultFileDefinitions: Record<string, FileDefinition> = {
  ".tpa": {
    friendlyName: "%associations.tpa%",
    icon: "ArcAppMimeIcon",
  },
  ".tpab": {
    friendlyName: "%associations.tpab%",
    icon: "ArcAppMimeIcon",
  },
  ".json": {
    friendlyName: "%associations.json%",
    icon: "JsonMimeIcon",
  },
  ".pdf": {
    friendlyName: "%associations.pdf%",
    icon: "PdfMimeIcon",
  },
  ".svg": {
    friendlyName: "%associations.svg%",
    icon: "SvgMimeIcon",
  },
  ".zip": {
    friendlyName: "%associations.zip%",
    icon: "CompressMimeIcon",
  },
  ".txt": {
    friendlyName: "%associations.txt%",
    icon: "TextMimeIcon",
  },
  "arcterm.conf": {
    friendlyName: "%associations.arctermConf%",
    icon: "TextMimeIcon",
  },
  ".arcterm": {
    friendlyName: "%associations.arcterm%",
    icon: "TextMimeIcon",
  },
  ".arctheme": {
    friendlyName: "%associations.arctheme%",
    icon: "TextMimeIcon",
  },
  ".md": {
    friendlyName: "%associations.md%",
    icon: "TextMimeIcon",
  },
  ".html": {
    friendlyName: "%associations.html%",
    icon: "XmlMimeIcon",
  },
  ".htm": {
    friendlyName: "%associations.htm%",
    icon: "XmlMimeIcon",
  },
  ".js": {
    friendlyName: "%associations.js%",
    icon: "JavascriptMimeIcon",
  },
  ".d.ts": {
    friendlyName: "%associations.dTs%",
    icon: "JavascriptMimeIcon",
  },
  ".ts": {
    friendlyName: "%associations.ts%",
    icon: "JavascriptMimeIcon",
  },
  ".mjs": {
    friendlyName: "%associations.js%",
    icon: "JavascriptMimeIcon",
  },
  ".xml": {
    friendlyName: "%associations.xml%",
    icon: "XmlMimeIcon",
  },
  ".arcpl": {
    friendlyName: "%associations.arcpl%",
    icon: "PlaylistMimeIcon",
  },
  ".arclnk": {
    friendlyName: "%associations.shortcut%",
    icon: "ShortcutMimeIcon",
  },
  ".arc": {
    friendlyName: "%associations.arc%",
    icon: "ArcAppMimeIcon",
  },
  ".msg": {
    friendlyName: "%associations.msg%",
    icon: "MessagingIcon",
  },
  ".css": {
    friendlyName: "%associations.css%",
    icon: "DefaultMimeIcon",
  },
  ".mig": {
    friendlyName: "%associations.mig%",
    icon: "ComponentIcon",
  },
  ".lock": {
    friendlyName: "%associations.lock%",
    icon: "ComponentIcon",
  },
  RegisteredVersion: {
    friendlyName: "%associations.RegisteredVersion%",
    icon: "ComponentIcon",
  },
  ".exe": {
    friendlyName: "%associations.exe%",
    icon: "UnknownFileIcon",
  },
  ".msi": {
    friendlyName: "%associations.msi%",
    icon: "UnknownFileIcon",
  },
  ".com": {
    friendlyName: "%associations.com%",
    icon: "UnknownFileIcon",
  },
  ".img": {
    friendlyName: "%associations.img%",
    icon: "UnknownFileIcon",
  },
  ".iso": {
    friendlyName: "%associations.iso%",
    icon: "UnknownFileIcon",
  },
  ".osl": {
    friendlyName: "%associations.osl%",
    icon: "UnknownFileIcon",
  },
  ".wasm": {
    friendlyName: "%associations.wasm%",
    icon: "UnknownFileIcon",
  },
  ".bin": {
    friendlyName: "%associations.bin%",
    icon: "UnknownFileIcon",
  },
  ...AudioFileDefinitions, // AudioMimeIcon
  ...ImageFileDefinitions, // ImageMimeIcon
  ...VideoFileDefinitions, // VideoMimeIcon
};
