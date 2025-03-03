import type { ContextMenuItem } from "$types/app";
import { AudioMenu } from "./altmenu/audio";
import { FileMenu } from "./altmenu/file";
import type { MediaPlayerRuntime } from "./runtime";

export function MediaPlayerAltMenu(
  runtime: MediaPlayerRuntime
): ContextMenuItem[] {
  return [FileMenu(runtime), AudioMenu(runtime)];
}
