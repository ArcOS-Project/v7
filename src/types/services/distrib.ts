import type { IInstallerProcessBase } from "$interfaces/IInstallerProcessBase";
import type { ReadableStore } from "../shared/writable";
import type { InstallStatus } from "../tpa/package";

export interface InstallerProcProgressNode {
  proc: IInstallerProcessBase | undefined;
  status: ReadableStore<InstallStatus>;
  failReason: ReadableStore<string>;
  installing: ReadableStore<boolean>;
  completed: ReadableStore<boolean>;
  focused: ReadableStore<string>;
  verboseLog: string[];
}
