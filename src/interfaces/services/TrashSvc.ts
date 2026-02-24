import type { IConfigurator } from "$interfaces/config";
import type { IBaseService } from "$interfaces/service";
import type { TrashIndexNode } from "$types/trash";
import type { ReadableStore } from "$types/writable";

export interface ITrashCanService extends IBaseService {
  INDEX_PATH: string;
  IndexBuffer: ReadableStore<Record<string, TrashIndexNode>>;
  Configuration: IConfigurator<Record<string, TrashIndexNode>>;
  start(): Promise<void>;
  moveToTrash(path: string, dispatch?: boolean): Promise<TrashIndexNode | undefined>;
  restoreTrashItem(uuid: string): Promise<boolean>;
  getIndex(): Record<string, TrashIndexNode>;
  permanentlyDelete(uuid: string): Promise<boolean>;
  emptyBin(): Promise<void>;
}
