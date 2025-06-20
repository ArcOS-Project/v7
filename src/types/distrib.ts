import type { ReadableStore } from "$ts/writable";
import type { InstallStatus } from "./package";

export interface InstallerProcProgressNode {
  status: ReadableStore<InstallStatus>;
  failReason: ReadableStore<string>;
  installing: ReadableStore<boolean>;
  completed: ReadableStore<boolean>;
  focused: ReadableStore<string>;
  verboseLog: string[];
}
