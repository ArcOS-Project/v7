import type { ContextMenuItem } from "$types/app";
import type { WriterRuntime } from "../runtime";

export function ViewMenu(runtime: WriterRuntime): ContextMenuItem {
  return {
    caption: "View",
    subItems: [
      {
        caption: "Fixed-width font",
        icon: "case-upper",
        isActive: () => runtime.userPreferences().appPreferences.writer.fixedWidth,
        action: () =>
          runtime.userPreferences.update((v) => {
            v.appPreferences.writer.fixedWidth = !v.appPreferences.writer.fixedWidth;
            return v;
          }),
      },
      {
        caption: "Word wrap",
        icon: "wrap-text",
        isActive: () => runtime.userPreferences().appPreferences.writer.wordWrap,
        action: () =>
          runtime.userPreferences.update((v) => {
            v.appPreferences.writer.wordWrap = !v.appPreferences.writer.wordWrap;
            return v;
          }),
      },
      {
        caption: "Error checking",
        icon: "spell-check",
        isActive: () => !runtime.userPreferences().appPreferences.writer.noErrorChecking,
        action: () =>
          runtime.userPreferences.update((v) => {
            v.appPreferences.writer.noErrorChecking = !v.appPreferences.writer.noErrorChecking;
            return v;
          }),
      },
      {
        sep: true,
      },
      {
        caption: "Status bar",
        icon: "dock",
        isActive: () => !runtime.userPreferences().appPreferences.writer.hideStatusBar,
        action: () =>
          runtime.userPreferences.update((v) => {
            v.appPreferences.writer.hideStatusBar = !v.appPreferences.writer.hideStatusBar;
            return v;
          }),
      },
    ],
  };
}
