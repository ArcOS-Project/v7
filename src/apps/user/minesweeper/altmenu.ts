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
