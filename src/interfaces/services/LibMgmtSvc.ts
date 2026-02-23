import type { IBaseService } from "$interfaces/service";
import type { TpaLibrary } from "$types/libraries";

export interface ILibraryManagement extends IBaseService {
  Index: Map<string, TpaLibrary>;
  start(): Promise<void>;
  populateIndex(): Promise<void>;
  deleteLibrary(id: string, onStage?: (stage: string) => void): Promise<boolean>;
  getLibrary<T = any>(id: string): Promise<T>;
}
