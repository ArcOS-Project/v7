import type { IFileManagerRuntime } from "$interfaces/runtimes/IFileManagerRuntime";
import type { ContextMenuItem } from "$types/app";
import { EditMenu } from "./altmenu/Edit";
import { FileMenu } from "./altmenu/File";
import { GoMenu } from "./altmenu/Go";
import { ViewMenu } from "./altmenu/View";

export function FileManagerAltMenu(runtime: IFileManagerRuntime): ContextMenuItem[] {
  return [FileMenu(runtime), EditMenu(runtime), ViewMenu(runtime), GoMenu(runtime)];
}
