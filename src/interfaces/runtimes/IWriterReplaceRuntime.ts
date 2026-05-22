import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IWriterRuntime } from "./IWriterRuntime";

export interface IWriterReplaceRuntime extends IAppProcess {
  parent: IWriterRuntime;

  replaceOnce(text: string, replacer: string): void;
  replaceAll(text: string, replacer: string): void;
}
