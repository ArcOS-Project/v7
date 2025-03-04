import type { ContextMenuItem } from "$types/app";
import type { MediaPlayerRuntime } from "../runtime";

export function PlaylistAltMenu(runtime: MediaPlayerRuntime): ContextMenuItem {
  return {
    caption: "Playlist",
    subItems: [
      {
        caption: "Open playlist",
        icon: "folder-open",
        action: () => runtime.loadPlaylist(),
      },
      {
        caption: "Save playlist",
        icon: "save",
        action: () => runtime.savePlaylist(),
      },
    ],
  };
}
