import type { IBaseService } from "$interfaces/service";
import type { TrashIndexNode } from "$types/trash";
import type { ReadableStore } from "$types/writable";

export interface ITrashCanService extends IBaseService {
  INDEX_PATH: string;
  IndexBuffer: ReadableStore<Record<string, TrashIndexNode>>;
  start(): Promise<void>;
  readIndex(): Promise<Record<string, TrashIndexNode>>;
  writeIndex(index: Record<string, TrashIndexNode>): Promise<Record<string, TrashIndexNode>>;
  moveToTrash(path: string, dispatch?: boolean): Promise<TrashIndexNode | undefined>;
  restoreTrashItem(uuid: string): Promise<boolean>;
  getIndex(): Record<string, TrashIndexNode>;
  permanentlyDelete(uuid: string): Promise<boolean>;
  emptyBin(): Promise<void>;
}
