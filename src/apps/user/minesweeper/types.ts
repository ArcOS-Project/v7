export interface MinesweeperCell {
  hasMine: boolean;
  revealed: boolean;
  flagged: boolean;
  adjacentMines: number;
  exploded: boolean
  x: number;
  y: number;
}

export type MinesweeperGrid = MinesweeperCell[][];

export interface MinesweeperFieldSettings {
  width: number;
  height: number;
  mines: number;
}

export interface MinesweeperScore {
  name: string;
  seconds: number;
}

export interface MinesweeperSettings {
  field: MinesweeperFieldSettings;
  scores: Record<MinesweeperDifficulty, MinesweeperScore>;
  mode: MinesweeperMode;
}

export const Difficulties = ["Beginner", "Intermediate", "Expert"] as const;
export type MinesweeperDifficulty = (typeof Difficulties)[number];
export type MinesweeperMode = MinesweeperDifficulty | "Custom"