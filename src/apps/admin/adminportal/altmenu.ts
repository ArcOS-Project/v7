import type { IAdminPortalRuntime } from "$interfaces/admin";
import type { ContextMenuItem } from "$types/app";
import { FileMenu } from "./altmenu/file";
import { PageMenu } from "./altmenu/page";
import { ToolsMenu } from "./altmenu/tools";

// Admin Portal | [ File ] [ Page ] [ Tools ]

export function AdminPortalAltMenu(process: IAdminPortalRuntime): ContextMenuItem[] {
  return [FileMenu(process), PageMenu(process), ToolsMenu(process)];
}
