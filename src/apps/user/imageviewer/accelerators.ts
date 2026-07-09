import type { IImageViewerRuntime } from "$interfaces/runtimes/IImageViewerRuntime";
import { Daemon } from "$ts/env";
import { getParentDirectory } from "$ts/util/fs";
import type { AppKeyCombinations } from "$types/apps/accelerator";

export function ImageViewerAccelerators(runtime: IImageViewerRuntime): AppKeyCombinations {
  return [
    {
      key: "O",
      alt: true,
      shift: true,
      action: () => runtime.spawnApp("fileManager", Daemon.getShell()?.pid, getParentDirectory(runtime.openedFile())),
    },
    {
      key: "O",
      alt: true,
      action: () => runtime.readFileDialog(),
    },
    {
      key: "F",
      alt: true,
      action: () => runtime.viewer()?.scaleImageToFit(),
    },
    {
      key: "0",
      alt: true,
      action: () => runtime.scale.set(1.0),
    },
  ];
}
