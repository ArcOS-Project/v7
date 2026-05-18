import type { IBaseService } from "$interfaces/service";

export interface IRecentFilesService extends IBaseService {
  addToRecents(path: string): boolean;
  removeFromRecents(path: string): boolean;
  getRecents(): string[];
}
