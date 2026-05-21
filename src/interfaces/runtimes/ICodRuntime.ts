import type { CodLang } from "$apps/user/cod/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IFilesystemDrive } from "$interfaces/IFilesystemDrive";
import type { ReadableStore, StringStore } from "$types/writable";

export interface ICodRuntime extends IAppProcess {
  language: ReadableStore<CodLang>;
  buffer: StringStore;
  openedFile: StringStore;
  filename: StringStore;
  mimetype: StringStore;
  directoryName: StringStore;
  original: StringStore;
  drive: ReadableStore<IFilesystemDrive | undefined>;
  mimeIcon: StringStore;

  readFile(path: string): Promise<void>;
  saveChanges(force?: boolean): Promise<void>;
  saveAs(): Promise<void>;
  openFile(): Promise<void>;
}
