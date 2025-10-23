import type { InstallerProcessBase } from "$ts/distrib/installer/base";
import type { ReadableStore } from "$ts/writable";
import type { InstallStatus } from "./package";

export interface InstallerProcProgressNode {
  proc: InstallerProcessBase | undefined;
  status: ReadableStore<InstallStatus>;
  failReason: ReadableStore<string>;
  installing: ReadableStore<boolean>;
  completed: ReadableStore<boolean>;
  focused: ReadableStore<string>;
  verboseLog: string[];
}
