import type { DriveCapabilities } from "$types/system/fs";

export const DriveCapabilityShorts: Record<DriveCapabilities, string> = {
  readDir: "r",
  makeDir: "m",
  readFile: "R",
  writeFile: "w",
  copyItem: "c",
  moveItem: "m",
  deleteItem: "d",
  tree: "t",
  direct: "D",
  bulk: "b",
  stat: "s",
  quota: "q",
};
