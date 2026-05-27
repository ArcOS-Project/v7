import type { FsProgressOperation } from "$apps/components/fsprogress/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ReadableStore } from "$types/shared/writable";

// !tpa
export interface IFsProgressRuntime extends IAppProcess {
  Progress: ReadableStore<FsProgressOperation>;
}
// !endtpa