import { GlobalDispatcher } from "$ts/dispatch";
import { WaveKernel } from "$ts/kernel";

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

export function getParentDirectory(p: string): string {
  if (!p) return p;

  const split = p.split("/");

  if (!split.length) return p;
  if (split.length == 1) return "";

  split.splice(-1);

  const newPath = split.join("/");

  return newPath;
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

  dispatch.subscribe("fs-flush-folder", (data) => {
    if (data[0] === path) callback();
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
