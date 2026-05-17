import type { ContextMenuItem } from "$types/app";
import { MinesweeperRuntime } from "./runtime";
import { MinesweeperDifficulties } from "./store";

export function MinesweeperAltMenu(runtime: MinesweeperRuntime): ContextMenuItem[] {
  return [
    {
      caption: "Game",
      subItems: [
        {
          caption: "New",
          action: () => runtime.newGame()
        },
        { sep: true },
        {
          caption: "Beginner",
          isActive: () => runtime.Settings().mode === "Beginner",
          action: () => runtime.newGame(MinesweeperDifficulties)
        }
      ]
    }
  ]
}