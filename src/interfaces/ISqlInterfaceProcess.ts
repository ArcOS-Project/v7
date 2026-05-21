import type { BindParams, Database } from "sql.js";
import type { IProcess } from "./IProcess";

export interface ISqlInterfaceProcess extends IProcess {
  db?: Database;
  isFresh: boolean;

  start(): Promise<void>;
  reset(): void;
  initialize(): Promise<void>;
  readFile(): Promise<void>;
  writeFile(): Promise<void>;
  stop(): Promise<void>;
  exec(sql: string, params?: BindParams | undefined): Record<string, any>[][] | string;
}
