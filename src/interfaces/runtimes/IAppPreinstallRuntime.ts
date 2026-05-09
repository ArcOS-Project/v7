import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ArcPackage } from "$types/package";
import type { ReadableStore } from "$types/writable";
import type JSZip from "jszip";

export interface IAppPreInstallRuntime extends IAppProcess {
  pkgPath: string;
  zip?: JSZip;
  metadata: ReadableStore<ArcPackage>;

  fail(reason: string): void;
  install(): Promise<void>;
}
