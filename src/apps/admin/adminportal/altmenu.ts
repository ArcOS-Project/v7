import type { ContextMenuItem } from "$types/app";
import { FileMenu } from "./altmenu/file";
import { PageMenu } from "./altmenu/page";
import { ToolsMenu } from "./altmenu/tools";
import type { AdminPortalRuntime } from "./runtime";

// Admin Portal | [ File ] [ Page ] [ Tools ]

export function AdminPortalAltMenu(process: AdminPortalRuntime): ContextMenuItem[] {
  return [FileMenu(process), PageMenu(process), ToolsMenu(process)];
}
