import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IInstallerProcessBase } from "$interfaces/IInstallerProcessBase";
import type { ArcPackage } from "$types/package";
import type JSZip from "jszip";

export interface IAppInstallerRuntime extends IAppProcess {
  progress?: IInstallerProcessBase;
  metadata?: ArcPackage;
  isLibrary: boolean;
  zip?: JSZip;

  revert(): Promise<void>;
  runNow(): void;
  go(): Promise<void>;
}
