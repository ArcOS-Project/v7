import type { IDonutAppRuntime } from "$interfaces/runtimes/IDonutAppRuntime";
import type { ContextMenuItem } from "$types/app";

export function DonutAltMenu(runtime: IDonutAppRuntime): ContextMenuItem[] {
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
