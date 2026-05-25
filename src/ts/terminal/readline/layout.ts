export class Position {
  public col: number;
  public row: number;

  constructor(rows?: number, cols?: number) {
    if (rows !== undefined) {
      this.row = rows;
    } else {
      this.row = 0;
    }
    if (cols !== undefined) {
      this.col = cols;
    } else {
      this.col = 0;
    }
  }
}

export class Layout {
  public promptSize: Position;
  public cursor: Position;
  public end: Position;

  constructor(promptSize: Position) {
    this.promptSize = promptSize;
    this.cursor = new Position();
    this.end = new Position();
  }
}
