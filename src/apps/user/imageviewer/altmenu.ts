import type { IImageViewerRuntime } from "$interfaces/runtimes/IImageViewerRuntime";
import { Daemon } from "$ts/env";
import { getParentDirectory } from "$ts/util/fs";
import type { ContextMenuItem } from "$types/apps/app";

export function ImageViewerAltMenu(runtime: IImageViewerRuntime): ContextMenuItem[] {
  return [
    {
      caption: "File",
      subItems: [
        {
          caption: "Open...",
          icon: "folder-open",
          action: () => runtime.readFileDialog(),
          accelerator: "Alt+O",
        },
        {
          caption: "Open file location",
          icon: "folder-search",
          action: () => runtime.spawnApp("fileManager", Daemon.getShell()?.pid, getParentDirectory(runtime.openedFile())),
          accelerator: "Alt+Shift+O",
        },
        { sep: true },
        {
          caption: "Exit",
          image: "ShutdownIcon",
          action: () => runtime.closeWindow(),
          accelerator: "Ctrl+Q",
        },
      ],
    },
    {
      caption: "View",
      subItems: [
        {
          caption: "Zoom to fit",
          icon: "maximize",
          action: () => runtime.viewer()?.scaleImageToFit(),
          accelerator: "Alt+F",
        },
        {
          caption: "Zoom to 100%",
          icon: "percent",
          action: () => runtime.scale.set(1.0),
          accelerator: "Alt+0",
        },
      ],
    },
  ];
}
