import type { MinesweeperDifficulty, MinesweeperFieldSettings, MinesweeperSettings } from "./types";

export const MinesweeperDifficulties: Record<MinesweeperDifficulty, MinesweeperFieldSettings> = {
  Beginner: {
    width: 9,
    height: 9,
    mines: 10,
  },
  Intermediate: {
    width: 16,
    height: 16,
    mines: 40
  },
  Expert: {
    width: 30,
    height: 16,
    mines: 99
  }
}

export const DefaultMinesweeperConfiguration: MinesweeperSettings = {
  field: {
    width: 9,
    height: 9,
    mines: 10,
  },
  mode: "Beginner",
  scores: {
    Beginner: {
      name: "Anonymous",
      seconds: 999
    },
    Intermediate: {
      name: "Anonymous",
      seconds: 999
    },
    Expert: {
      name: "Anonymous",
      seconds: 999
    }
  }
}