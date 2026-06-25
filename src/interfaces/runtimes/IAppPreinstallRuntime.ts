import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ReadableStore } from "$types/shared/writable";
import type { ArcPackage } from "$types/tpa/package";
import type JSZip from "jszip";

// !tpa
export interface IAppPreInstallRuntime extends IAppProcess {
  pkgPath: string;
  zip?: JSZip;
  metadata: ReadableStore<ArcPackage>;

  fail(reason: string): void;
  install(): Promise<void>;
}
