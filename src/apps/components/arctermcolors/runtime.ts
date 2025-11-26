import { AppProcess } from "$ts/apps/process";
import { DefaultColors } from "$ts/terminal/store";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { ArcTermColorPreset, ArcTermColors } from "./types";

export class ArcTermColorsRuntime extends AppProcess {
  customState = Store<ArcTermColors>(DefaultColors);
  mode = Store<"presets" | "custom">();
  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
  }

  async start() {}

  async stop() {}

  async render() {}

  //#endregion LIFECYCLE

  customFromPreset(preset: ArcTermColorPreset) {
    this.customState.set({
      red: preset.red,
      green: preset.green,
      yellow: preset.yellow,
      blue: preset.blue,
      cyan: preset.cyan,
      magenta: preset.magenta,
      foreground: preset.foreground,
      background: preset.background,
      brightBlack: preset.brightBlack,
      backdropOpacity: preset.backdropOpacity,
    });
    this.mode.set("custom");
  }

  applyPreset(preset: ArcTermColorPreset) {}

  saveToFile(state = this.customState()) {}
}
