import type { ContextMenuItem } from "$types/app";
import { FileMenu } from "./altmenu/File";
import { LanguageMenu } from "./altmenu/Language";
import type { CodRuntime } from "./runtime";

export function CodAltMenu(runtime: CodRuntime): ContextMenuItem[] {
  return [FileMenu(runtime), LanguageMenu(runtime)];
}
