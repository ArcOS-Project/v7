import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IFilesystemDrive } from "$interfaces/IFilesystemDrive";
import type { ReadableStore } from "$types/writable";

export interface IWriterRuntime extends IAppProcess {
  buffer: ReadableStore<string>;
  openedFile: ReadableStore<string>;
  filename: ReadableStore<string>;
  mimetype: ReadableStore<string>;
  directoryName: ReadableStore<string>;
  original: ReadableStore<string>;
  input: ReadableStore<HTMLTextAreaElement>;
  drive: ReadableStore<IFilesystemDrive | undefined>;
  mimeIcon: ReadableStore<string>;
  render({ path }: { path: string }): Promise<void>;
  onClose(): Promise<boolean>;
  readFile(path: string): Promise<void>;
  saveChanges(force?: boolean): Promise<void>;
  saveAs(): Promise<void>;
  openFile(): Promise<void>;
  selectAll(): void;
}
