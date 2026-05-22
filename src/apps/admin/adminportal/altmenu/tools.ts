import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
import type { ContextMenuItem } from "$types/app";

export function ToolsMenu(runtime: IAdminPortalRuntime): ContextMenuItem {
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
