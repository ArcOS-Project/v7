import { ShutdownIcon } from "$ts/images/power";
import type { ContextMenuItem } from "$types/app";
import type { AdminPortalRuntime } from "../runtime";

export function FileMenu(process: AdminPortalRuntime): ContextMenuItem {
  return {
    caption: "File",
    subItems: [
      {
        caption: "New window",
        action: () => process.spawnApp("AdminPortal", process.parentPid, process.currentPage()),
        icon: "plus",
      },
      {
        caption: "Refresh",
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
      { caption: "Exit", action: () => process.closeWindow(), image: ShutdownIcon },
    ],
  };
}
