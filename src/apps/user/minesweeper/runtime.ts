import { AppProcess } from "$ts/apps/process";
import { ConfigurationBuilder } from "$ts/config";
import { Stack } from "$ts/env";
import { MessageBox } from "$ts/util/dialog";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { MinesweeperAltMenu } from "./altmenu";
import { DefaultMinesweeperConfiguration, MinesweeperDifficulties } from "./store";
import { type MinesweeperCell, type MinesweeperGrid, type MinesweeperMode, type MinesweeperSettings } from "./types";

export class MinesweeperRuntime extends AppProcess {
  private durationInterval?: NodeJS.Timeout;
  public failed = Store<boolean>(false);
  public gridWidth = Store<number>(10);
  public gridHeight = Store<number>(10);
  public mines = Store<number>(20);
  public clicks = Store<number>(0);
  public actualMineAmount = Store<number>(0);
  public grid = Store<MinesweeperGrid>([]);
  public startTimeMs = Store<number>();
  public endTimeMs = Store<number>();
  public flagsLeft = Store<number>(0);
  public duration = Store<string>("000");
  public Settings = Store<MinesweeperSettings>();
  public Config = new ConfigurationBuilder()
    .WritesTo("U:/System/Config/arcmine.json")
    .ReadsFrom(this.Settings)
    .WithDefaults(DefaultMinesweeperConfiguration)
    .ForProcess(this)
    .Build();

  ///
  public readonly DEBUG = false;
  ///

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
    this.grid.subscribe((v) => {
      const cells = v.reduce((a, b) => {
        a.push(...b);
        return a;
      }, []);

      this.flagsLeft.set(this.mines() - cells.filter((c) => c.flagged).length);
    });

    this.altMenu.set(MinesweeperAltMenu(this));
  }

  public notify(message: string) {
    MessageBox(
      {
        title: "Minesweeper",
        message: message,
        image: this.app.data.metadata.icon,
        buttons: [{ caption: "OK", action() {}, suggested: true }],
      },
      this.pid,
      true
    );
  }

  async start() {
    await this.Config.initialize();
    this.newGame();
    Stack.renderer?.centerWindow(this);
  }

  updateDuration() {
    const startTimeMs = this.startTimeMs();
    const endTimeMs = this.endTimeMs();

    if (!startTimeMs && !endTimeMs) {
      this.duration.set("000");
      return;
    }

    const endTime = endTimeMs || Date.now();
    this.duration.set(`${Math.min(Math.floor((endTime - startTimeMs) / 1000), 999)}`.padStart(3, "0"));
  }

  async stop() {
    clearInterval(this.durationInterval);
  }

  async setDifficulty(difficulty: MinesweeperMode, newGame = true) {
    if (this._disposed) return;

    this.Log(`setDifficulty: ${difficulty}`);

    if (difficulty !== "Custom") {
      this.Settings.update((v) => {
        v.field = MinesweeperDifficulties[difficulty];
        v.mode = difficulty;

        return v;
      });

      if (newGame) this.newGame();

      return;
    }

    await this.customGame();

    if (newGame) this.newGame();
  }

  newGame() {
    if (this._disposed) return;

    this.Log("New game");

    const settings = this.Settings();

    this.gridWidth.set(settings.field.width);
    this.gridHeight.set(settings.field.height);
    this.mines.set(settings.field.mines);
    this.flagsLeft.set(0);
    this.startTimeMs.set(0);
    this.endTimeMs.set(0);
    this.clicks.set(0);
    this.actualMineAmount.set(0);
    this.failed.set(false);

    this.populateGrid();
    this.populateMines();
    this.calculateNumbers();
    this.updateDuration();
  }

  populateMines() {
    if (this._disposed) return;

    this.Log(`populateMines`);

    const grid = this.grid();

    for (let i = 0; i < this.mines(); i++) {
      const x = Math.floor(Math.random() * this.gridWidth());
      const y = Math.floor(Math.random() * this.gridHeight());

      if (grid[y][x].hasMine) {
        i--;
        continue;
      }

      grid[y][x].hasMine = true;
      this.actualMineAmount.set(this.actualMineAmount() + 1);
    }
  }

  populateGrid() {
    if (this._disposed) return;

    this.Log(`populateGrid`);

    const newGrid: MinesweeperGrid = [];
    const gridWidth = this.gridWidth();
    const gridHeight = this.gridHeight();

    for (let y = 0; y < gridHeight; y++) {
      const row = [];

      for (let x = 0; x < gridWidth; x++) {
        row.push({
          hasMine: false,
          revealed: false,
          flagged: false,
          adjacentMines: 0,
          x: x,
          y: y,
        });
      }

      newGrid.push(row);
    }

    this.grid.set(newGrid);
  }

  calculateNumbers() {
    if (this._disposed) return;

    const grid = this.grid();
    const gridWidth = this.gridWidth();
    const gridHeight = this.gridHeight();

    for (let y = 0; y < gridHeight; y++) {
      for (let x = 0; x < gridWidth; x++) {
        grid[y][x].adjacentMines = 0;
      }
    }

    for (let y = 0; y < gridHeight; y++) {
      for (let x = 0; x < gridWidth; x++) {
        if (!grid[y][x].hasMine) continue;

        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < gridWidth && ny >= 0 && ny < gridHeight) grid[ny][nx].adjacentMines += 1;
          }
        }
      }
    }

    this.grid.set(grid);
  }

  revealCell(cell: MinesweeperCell) {
    if (this._disposed) return;

    let grid = this.grid();
    let clicks = this.clicks();
    let skipMine = false;

    if (cell.revealed || cell.flagged) return;

    if (!clicks && cell.hasMine) {
      skipMine = true;
      grid = this.moveFirstClickMine(grid, cell.x, cell.y);
      cell = grid[cell.y][cell.x];
    }

    if (!clicks) {
      this.startTimeMs.set(Date.now() - 1000);
      this.durationInterval = setInterval(() => this.updateDuration(), 500);
    }

    cell.revealed = true;
    clicks++;

    if (!cell.flagged && !this.failed()) {
      cell.revealed = true;
    }

    grid[cell.y][cell.x] = cell;

    this.grid.set(grid);
    this.clicks.set(clicks);
    this.updateDuration();

    if (cell.hasMine && !skipMine) {
      this.notify("Game Over!");
      this.revealAll();
      this.failed.set(true);

      return;
    }

    if (!cell.adjacentMines) this.revealAdjacentMines(cell);

    this.checkWin();
  }

  revealAll() {
    if (this._disposed) return;

    this.Log("revealAll");
    this.endTimeMs.set(Date.now());
    clearInterval(this.durationInterval);

    this.grid.update((grid) => {
      for (let y in grid) {
        for (let x in grid[y]) {
          grid[y][x].revealed = true;
        }
      }

      return grid;
    });
  }

  revealAdjacentMines(cell: MinesweeperCell) {
    if (this._disposed) return;

    const grid = this.grid();
    const gridWidth = this.gridWidth();
    const gridHeight = this.gridHeight();

    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const nx = cell.x + dx;
        const ny = cell.y + dy;

        if (nx >= 0 && nx < gridWidth && ny >= 0 && ny < gridHeight) {
          this.revealCell(grid[ny][nx]);
        }
      }
    }
  }

  moveFirstClickMine(grid: MinesweeperGrid, x: number, y: number): MinesweeperGrid {
    if (this._disposed) return grid;
    this.Log("moveFirstClickMine");

    // Move mine if first click is on a mine
    const gridWidth = this.gridWidth();
    const gridHeight = this.gridHeight();

    grid[y][x].hasMine = false;

    let moved = false;

    while (!moved) {
      for (let i = 0; i < gridWidth * gridHeight * 10; i++) {
        const nx = Math.floor(Math.random() * gridWidth);
        const ny = Math.floor(Math.random() * gridHeight);

        if (grid[ny][nx].hasMine === false && (nx !== x || ny !== y)) {
          if (!grid[ny][nx].hasMine && (nx !== x || ny !== y)) {
            grid[ny][nx].hasMine = true;
            moved = true;

            break;
          }
        }
      }

      if (moved == false) {
        this.notify("Failed to move mine! You lose as this minefield is unsolvable.");
        this.failed.set(true);

        return grid;
      }
    }

    return grid;
  }

  checkWin() {
    if (this._disposed) return;

    const grid = this.grid();
    const gridWidth = this.gridWidth();
    const gridHeight = this.gridHeight();

    if (this.failed()) return;

    let counter = 0;

    for (let y = 0; y < gridHeight; y++) {
      for (let x = 0; x < gridWidth; x++) {
        const cell = grid[y][x];

        if (cell.hasMine && cell.flagged) {
          counter++;
        }

        if (!cell.hasMine && cell.flagged) {
          this.failed.set(true);
        }
      }
    }

    if (counter === this.mines() && !this.failed()) {
      this.notify("You Win!");
      this.revealAll();
    }

    this.grid.set(grid);
  }

  toggleFlagged(cell: MinesweeperCell) {
    if (cell.revealed || this._disposed) return;

    this.grid.update((grid) => {
      grid[cell.y][cell.x].flagged = !grid[cell.y][cell.x].flagged;
      return grid;
    });

    this.checkWin();
  }

  getCellCaption(cell: MinesweeperCell): string {
    if (this._disposed) return "";

    if (cell.hasMine && cell.revealed) {
      return "💣";
    }

    if (cell.hasMine && this.DEBUG) {
      return "B";
    }

    if ((cell.revealed || this.DEBUG) && cell.adjacentMines > 0) {
      return `${cell.adjacentMines}`;
    }

    if (cell.flagged) {
      return "🚩";
    }

    return "";
  }

  async bestTimes() {
    throw new Error("Not implemented");
  }

  async customGame() {
    throw new Error("Not implemented");
  }
}
