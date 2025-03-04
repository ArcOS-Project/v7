import type { ContextMenuItem } from "$types/app";
import { FileMenu } from "./altmenu/file";
import { PlaylistAltMenu } from "./altmenu/playlist";
import type { MediaPlayerRuntime } from "./runtime";

export function MediaPlayerAltMenu(
  runtime: MediaPlayerRuntime
): ContextMenuItem[] {
  return [FileMenu(runtime), PlaylistAltMenu(runtime)];
}
