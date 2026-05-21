import type { ICodRuntime } from "$interfaces/runtimes/ICodRuntime";
import type { ContextMenuItem } from "$types/app";
import { FileMenu } from "./altmenu/File";
import { LanguageMenu } from "./altmenu/Language";

export function CodAltMenu(runtime: ICodRuntime): ContextMenuItem[] {
  return [FileMenu(runtime), LanguageMenu(runtime)];
}
