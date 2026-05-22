import type { IAppProcess } from "$interfaces/IAppProcess";
import type { FileOpenerResult } from "$types/fs";
import type { ReadableStore } from "$types/writable";

export interface IOpenWithRuntime extends IAppProcess {
  available: ReadableStore<FileOpenerResult[]>;
  all: ReadableStore<FileOpenerResult[]>;
  apps: ReadableStore<FileOpenerResult[]>;
  filename: ReadableStore<string>;
  path: ReadableStore<string>;
  selectedId: ReadableStore<string>;
  viewMode: ReadableStore<"apps" | "all" | "compatible">;

  go(id?: string): Promise<void>;
}
