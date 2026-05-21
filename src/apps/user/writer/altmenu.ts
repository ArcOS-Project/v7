import type { IWriterRuntime } from "$interfaces/runtimes/IWriterRuntime";
import type { ContextMenuItem } from "$types/app";
import { EditMenu } from "./altmenu/Edit";
import { FileMenu } from "./altmenu/File";
import { ViewMenu } from "./altmenu/View";

export function WriterAltMenu(runtime: IWriterRuntime): ContextMenuItem[] {
  return [FileMenu(runtime), EditMenu(runtime), ViewMenu(runtime)];
}
