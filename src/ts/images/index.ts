import * as Dialog from "./dialog";
import * as Filesystem from "./filesystem";
import * as General from "./general";
import * as Mimetypes from "./mime";
import * as Power from "./power";
import * as Status from "./status";
import * as Apps from "./apps";

export function getAllImages(): Record<string, string> {
  return {
    ...General,
    ...Filesystem,
    ...Power,
    ...Dialog,
    ...Status,
    ...Mimetypes,
    ...Apps,
  };
}

export function getGroupedIcons() {
  return {
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
