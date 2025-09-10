import type { ContextMenuItem } from "$types/app";
import type { AdminPortalRuntime } from "../runtime";
import { AdminPortalPageStore } from "../store";

export function PageMenu(process: AdminPortalRuntime): ContextMenuItem {
  const pages: ContextMenuItem[] = [...AdminPortalPageStore]
    .filter(([k, v]) => !v.hidden)
    .map(([k, v]) => ({
      caption: v.name,
      action: () => process.switchPage(k, {}, true),
      isActive: () => process.currentPage() === k,
      icon: v.icon,
      accelerator: k,
    }));

  const hiddenPages: ContextMenuItem[] = [...AdminPortalPageStore]
    .filter(([k, v]) => v.hidden)
    .map(([k, v]) => ({
      caption: k,
      action: () => process.switchPage(k, {}, true),
      isActive: () => process.currentPage() === k,
      icon: v.icon || "triangle-alert",
    }));

  return {
    caption: "Page",
    subItems: [
      ...pages,
      { sep: true },
      {
        caption: "Hidden pages",
        icon: "eye-closed",
        subItems: hiddenPages,
      },
    ],
  };
}
