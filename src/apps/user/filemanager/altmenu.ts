import type { ContextMenuItem } from "$types/app";
import { EditMenu } from "./altmenu/Edit";
import { FileMenu } from "./altmenu/File";
import { GoMenu } from "./altmenu/Go";
import { ViewMenu } from "./altmenu/View";
import type { FileManagerRuntime } from "./runtime";

export function FileManagerAltMenu(runtime: FileManagerRuntime): ContextMenuItem[] {
  return [FileMenu(runtime), EditMenu(runtime), ViewMenu(runtime), GoMenu(runtime)];
}
