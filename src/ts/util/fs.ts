import type { ISystemDispatch } from "$interfaces/modules/dispatch";
import { getKMod } from "$ts/env";
import { arrayBufferToBlob } from "./convert";

export const sizeUnits = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

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

  const newPath = newParts.join("/");

  return newPath.endsWith(":") ? `${newPath}/` : newPath;
}

export function dirname(path: string) {
  return join(path, "..");
}

export function getItemNameFromPath(path: string) {
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

  let newPath = split.join("/");

  if (newPath.startsWith("/")) newPath = newPath.substring(1);

  return newPath.endsWith(":") ? `${newPath}/` : newPath;
}

export function onFileChange(path: string, callback: () => void) {
  const dispatch = getKMod<ISystemDispatch>("dispatch");

  dispatch.subscribe("fs-flush-file", (data) => {
    if (data[0] === path) callback();
  });

  callback();
}

export function onFolderChange(path: string, callback: () => void) {
  const dispatch = getKMod<ISystemDispatch>("dispatch");

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

export function DownloadFile(file: ArrayBuffer, filename: string, mimetype?: string) {
  if (!file || !filename) return;

  const blob = arrayBufferToBlob(file, mimetype);
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = filename;
  anchor.target = "_blank";
  anchor.click();
  anchor.remove();
}
