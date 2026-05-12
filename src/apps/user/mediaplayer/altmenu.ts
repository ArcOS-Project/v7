import type { IMediaPlayerRuntime } from "$interfaces/runtimes/IMediaPlayerRuntime";
import type { ContextMenuItem } from "$types/app";
import { FileMenu } from "./altmenu/file";
import { PlaylistAltMenu } from "./altmenu/playlist";

export function MediaPlayerAltMenu(runtime: IMediaPlayerRuntime): ContextMenuItem[] {
  return [FileMenu(runtime), PlaylistAltMenu(runtime)];
}
