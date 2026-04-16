import type { IBaseService } from "$interfaces/IServiceHost";

export interface IRecentFilesService extends IBaseService {
  addToRecents(path: string): boolean;
  removeFromRecents(path: string): boolean;
  getRecents(): string[];
}
