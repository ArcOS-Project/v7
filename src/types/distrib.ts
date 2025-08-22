import type { InstallerProcess } from "$ts/distrib/installer";
import type { ReadableStore } from "$ts/writable";
import type { InstallStatus } from "./package";

export interface InstallerProcProgressNode {
  proc: InstallerProcess | undefined;
  status: ReadableStore<InstallStatus>;
  failReason: ReadableStore<string>;
  installing: ReadableStore<boolean>;
  completed: ReadableStore<boolean>;
  focused: ReadableStore<string>;
  verboseLog: string[];
}
