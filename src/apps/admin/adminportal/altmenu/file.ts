import type { ContextMenuItem } from "$types/app";
import type { AdminPortalRuntime } from "../runtime";

export function FileMenu(process: AdminPortalRuntime): ContextMenuItem {
  return {
    caption: "File",
    subItems: [
      {
        caption: "New window",
        // Passing in the current page and its props
        action: () => process.spawnApp("AdminPortal", process.parentPid, process.currentPage(), process.switchPageProps()),
        icon: "plus",
      },
      {
        caption: "Refresh",
        // Just a force refresh with the exact same data as already present
        action: () => process.switchPage(process.currentPage(), process.switchPageProps(), true),
        icon: "rotate-cw",
      },
      { sep: true },
      {
        caption: "Enable redaction",
        action: () => process.redacted.set(!process.redacted()),
        isActive: () => process.redacted(),
        icon: "lock",
      },
      { sep: true },
      { caption: "Exit", action: () => process.closeWindow(), image: process.getIconCached("ShutdownIcon") },
    ],
  };
}
