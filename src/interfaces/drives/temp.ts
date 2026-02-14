import type { IFilesystemDrive } from "$interfaces/fs";

export interface IMemoryFilesystemDrive extends IFilesystemDrive {
  takeSnapshot(): Promise<Record<string, any>>;
  restoreSnapshot(snapshot: Record<string, any>): void;
}
