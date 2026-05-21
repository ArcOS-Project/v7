import type { IMediaPlayerRuntime } from "$interfaces/runtimes/IMediaPlayerRuntime";
import type { ContextMenuItem } from "$types/app";

export function PlaylistAltMenu(runtime: IMediaPlayerRuntime): ContextMenuItem {
  return {
    caption: "Playlist",
    subItems: [
      {
        caption: "Save playlist",
        icon: "save",
        action: () => runtime.savePlaylist(),
      },
      { sep: true },
      {
        caption: "Playlist from folder...",
        icon: "folder-search",
        action: () => runtime.folderAsPlaylist(),
      },
      {
        caption: "Create shortcut...",
        icon: "arrow-up-right",
        action: () => runtime.createPlaylistShortcut(),
        disabled: () => !runtime.playlistPath(),
      },
    ],
  };
}
