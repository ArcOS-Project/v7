import * as Apps from "./apps";
import * as Branding from "./branding";
import * as Dialog from "./dialog";
import * as Filesystem from "./filesystem";
import * as General from "./general";
import * as Mimetypes from "./mime";
import * as Power from "./power";
import * as Status from "./status";

export function getAllImages(): Record<string, string> {
  return {
    ...Branding,
    ...General,
    ...Filesystem,
    ...Power,
    ...Dialog,
    ...Status,
    ...Mimetypes,
    ...Apps,
  };
}

export function getGroupedIcons(): Record<string, Record<string, string>> {
  return {
    Branding,
    Filesystem,
    Mimetypes,
    General,
    Dialog,
    Power,
    Status,
    Apps,
  };
}

export function getIconPath(id: string) {
  const icons = getAllImages();

  return icons[id] || General.ComponentIcon;
}

export function iconIdFromPath(path: string) {
  const icons = Object.entries(getAllImages());

  return icons.filter(([_, p]) => path === p).map(([i]) => i)[0];
}

export function maybeIconId(id: string) {
  return getAllImages()[id];
}
