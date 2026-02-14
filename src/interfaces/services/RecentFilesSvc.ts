import type { IBaseService } from "$interfaces/service";

export interface IRecentFilesService extends IBaseService {
  loadConfiguration(): Promise<void>;
  writeConfiguration(configuration: string[]): Promise<void>;
  addToRecents(path: string): boolean;
  removeFromRecents(path: string): boolean;
  getRecents(): string[];
}
