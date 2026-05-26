import type { IFilesystemDrive } from "$interfaces/IFilesystemDrive";

// !tpa-prop
export interface IMemoryFilesystemDrive extends IFilesystemDrive {
  takeSnapshot(): Promise<Record<string, any>>;
  restoreSnapshot(snapshot: Record<string, any>): void;
}
// !endtpa