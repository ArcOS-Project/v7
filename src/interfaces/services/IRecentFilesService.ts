import type { IBaseService } from "$interfaces/IServiceHost";
import type { ReadableStore } from "$types/writable";

export interface IRecentFilesService extends IBaseService {
  Recents: ReadableStore<string[]>;
  readonly CONFIG_PATH: string;
  addToRecents(path: string): boolean;
  removeFromRecents(path: string): boolean;
  getRecents(): string[];
}
