import type { IInstallerProcessBase } from "$interfaces/distrib";
import type { InstallStatus } from "./package";
import type { ReadableStore } from "./writable";

export interface InstallerProcProgressNode {
  proc: IInstallerProcessBase | undefined;
  status: ReadableStore<InstallStatus>;
  failReason: ReadableStore<string>;
  installing: ReadableStore<boolean>;
  completed: ReadableStore<boolean>;
  focused: ReadableStore<string>;
  verboseLog: string[];
}
