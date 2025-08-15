import type { ContextMenuItem } from "$types/app";
import { FileMenu } from "./altmenu/file";
import { PageMenu } from "./altmenu/page";
import type { AdminPortalRuntime } from "./runtime";

export function AdminPortalAltMenu(process: AdminPortalRuntime): ContextMenuItem[] {
  return [FileMenu(process), PageMenu(process)];
}
