import type { ContextMenuItem } from "$types/app";
import type { DonutAppRuntime } from "./runtime";

export function DonutAltMenu(runtime: DonutAppRuntime): ContextMenuItem[] {
  return [
    {
      caption: "View",
      subItems: [
        {
          caption: "Keep running in background",
          action: () =>
            runtime.userPreferences.update((v) => {
              v.appPreferences.DonutApp.alwaysActive = !v.appPreferences.DonutApp.alwaysActive;
              return v;
            }),
          icon: "drum",
          isActive: () => runtime.userPreferences().appPreferences.DonutApp.alwaysActive,
        },
      ],
    },
  ];
}
