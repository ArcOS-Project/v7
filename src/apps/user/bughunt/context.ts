import type { ContextMenuItem } from "$types/app";
import type { BugHuntRuntime } from "./runtime";

export const BugHuntAltMenu: (p: BugHuntRuntime) => ContextMenuItem[] = (process) => {
  return [
    {
      caption: "File",
      subItems: [
        {
          caption: "Refresh",
          icon: "refresh-cw",
          action: () => process.invalidateCaches(true),
        },
        {
          caption: "New report...",
          icon: "plus",
          action: () => process.newReport(),
        },
        { sep: true },
        {
          caption: "Exit",
          action: () => process.closeWindow(),
          icon: "power",
        },
      ],
    },
    {
      caption: "Report",
      subItems: [
        {
          caption: "View report logs",
          icon: "scroll-text",
          action: () => process.viewLogs(),
          disabled: () => !process.selectedReport(),
        },
        {
          caption: "View user data",
          icon: "braces",
          action: () => process.userData(),
          disabled: () => !process.selectedReport(),
        },
        {
          caption: "Export report...",
          icon: "save",
          action: () => process.exportReport(),
          disabled: () => !process.selectedReport(),
        },
      ],
    },
  ];
};
