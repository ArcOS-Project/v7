import type { ContextMenuItem } from "$types/app";
import type { FileManagerRuntime } from "../runtime";

export function ViewMenu(runtime: FileManagerRuntime): ContextMenuItem {
  return {
    caption: "View",
    subItems: [
      {
        caption: "Thumbnail view",
        isActive: () => !!runtime.userPreferences().appPreferences.fileManager?.thumbnails,
        icon: "file-image",
        disabled: () => !!runtime.virtual(),
        action: () =>
          runtime.userPreferences.update((v) => {
            v.appPreferences.fileManager.thumbnails = true;
            v.appPreferences.fileManager.grid = false;
            v.appPreferences.fileManager.compact = false;
            return v;
          }),
      },
      {
        caption: "Grid view",
        isActive: () => !!runtime.userPreferences().appPreferences.fileManager?.grid,
        icon: "columns-3",
        disabled: () => !!runtime.virtual(),
        action: () =>
          runtime.userPreferences.update((v) => {
            v.appPreferences.fileManager.thumbnails = false;
            v.appPreferences.fileManager.grid = true;
            v.appPreferences.fileManager.compact = false;
            return v;
          }),
      },
      {
        caption: "Thumbnail view",
        isActive: () =>
          !runtime.userPreferences().appPreferences.fileManager?.grid &&
          !runtime.userPreferences().appPreferences.fileManager?.thumbnails,
        icon: "list",
        disabled: () => !!runtime.virtual(),
        action: () =>
          runtime.userPreferences.update((v) => {
            v.appPreferences.fileManager.thumbnails = false;
            v.appPreferences.fileManager.grid = false;
            v.appPreferences.fileManager.compact = false;
            return v;
          }),
      },
      { sep: true },
      {
        caption: "Load image thumbnails",
        isActive: () => runtime.userPreferences().appPreferences.fileManager?.renderThumbnails,
        icon: "image",
        action: () =>
          runtime.userPreferences.update((v) => {
            v.appPreferences.fileManager.renderThumbnails = !v.appPreferences.fileManager.renderThumbnails;
            return v;
          }),
      },
    ],
  };
}
