import type { ContextMenuItem } from "$types/app";
import { MinesweeperRuntime } from "./runtime";
import { MinesweeperDifficulties } from "./store";
import { Difficulties } from "./types";

export function MinesweeperAltMenu(runtime: MinesweeperRuntime): ContextMenuItem[] {
  return [
    {
      caption: "Game",
      subItems: [
        {
          caption: "New",
          action: () => runtime.newGame(),
        },
        { sep: true },
        ...getDifficulties(runtime),
        { sep: true },
        {
          caption: "Best times...",
          action: async () => await runtime.bestTimes(),
        },
        { sep: true },

        {
          caption: "Compact",
          icon: "list-chevrons-down-up",
          action: () =>
            runtime.userPreferences.update((v) => {
              v.appPreferences.MinesweeperApp.compact = !v.appPreferences.MinesweeperApp.compact;
              return v;
            }),
          isActive: () => !!runtime.userPreferences().appPreferences.MinesweeperApp.compact,
        },
      ],
    },
  ];
}

function getDifficulties(runtime: MinesweeperRuntime): ContextMenuItem[] {
  return Difficulties.map((difficulty) => ({
    caption: difficulty,
    action: () => runtime.setDifficulty(difficulty),
    isActive: () => runtime.Settings().mode === difficulty,
  }));
}
