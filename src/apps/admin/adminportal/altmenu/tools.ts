import type { ContextMenuItem } from "$types/app";
import type { AdminPortalRuntime } from "../runtime";

export function ToolsMenu(runtime: AdminPortalRuntime): ContextMenuItem {
  return {
    caption: "Tools",
    subItems: [
      {
        caption: "Execute Query",
        image: "ArcFindIcon",
        action: () => {
          runtime.spawnApp("ExecuteQueryApp", runtime.parentPid);
        },
      },
    ],
  };
}
