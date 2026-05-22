import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ElevationData } from "$types/elevation";
import type { ReadableStore } from "$types/writable";

export interface ISecureContextRuntime extends IAppProcess {
  data: ElevationData;
  password: ReadableStore<string>;
  loading: ReadableStore<boolean>;
  
  start(): Promise<false | undefined>;
  render(): Promise<void>;
  validate(): Promise<boolean | undefined>;
  approve(): Promise<void>;
  deny(): Promise<void>;
  passwordIncorrect(): Promise<void>;
  settings(): Promise<void>;
}
