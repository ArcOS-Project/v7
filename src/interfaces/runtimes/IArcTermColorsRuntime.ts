import type { ArcTermColorPreset } from "$apps/components/arctermcolors/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ArcTermConfiguration } from "$types/terminal";
import type { BooleanStore, ReadableStore } from "$types/writable";

export interface IArcTermColorsRuntime extends IAppProcess {
  CONFIG_PATH: string;
  arcTermConfiguration: ReadableStore<ArcTermConfiguration>;
  mode: ReadableStore<"presets" | "custom">;
  changed: BooleanStore;
  savePath?: string;

  writeDefaultConfiguration(): Promise<void>;
  customFromPreset(preset: ArcTermColorPreset): void;
  choosePreset(preset: ArcTermColorPreset): void;
  savePresetToFile(state?: ArcTermConfiguration): Promise<void>;
  openPreset(): Promise<void>;
  readPresetFromFile(path?: string): Promise<boolean>;
  applyConfiguration(): Promise<void>;
  readConfiguration(): Promise<void>;
  error_savePath(): Promise<boolean>;
}
