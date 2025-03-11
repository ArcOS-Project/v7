import type { ContextMenuItem } from "$types/app";
import { EditMenu } from "./altmenu/Edit";
import { FileMenu } from "./altmenu/File";
import { ViewMenu } from "./altmenu/View";
import type { WriterRuntime } from "./runtime";

export function WriterAltMenu(runtime: WriterRuntime): ContextMenuItem[] {
  return [FileMenu(runtime), EditMenu(runtime), ViewMenu(runtime)];
}
