import type { IAdminPortalRuntime } from "$interfaces/admin";
import type { ContextMenuItem } from "$types/app";
import { AdminPortalPageStore } from "../store";

export function PageMenu(process: IAdminPortalRuntime): ContextMenuItem {
  // We have to do some weird shit to make a ContextMenuItem array of admin pages...
  const pages: ContextMenuItem[] = [...AdminPortalPageStore]
    .filter(([_, v]) => !v.hidden) // Only visible pages
    .map(([k, v]) => ({
      caption: v.name,
      action: () => process.switchPage(k, {}, true), // Switching, no props, forced
      isActive: () => process.currentPage() === k,
      icon: v.icon,
      accelerator: k,
    }));

  const hiddenPages: ContextMenuItem[] = [...AdminPortalPageStore]
    .filter(([_, v]) => v.hidden) // Only hidden pages
    .map(([k, v]) => ({
      caption: k,
      action: () => process.switchPage(k, {}, true), // Switching, no props, forced
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
