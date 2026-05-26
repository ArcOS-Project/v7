import type { FsProgressOperation } from "$apps/components/fsprogress/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ReadableStore } from "$types/writable";

// !tpa-prop
export interface IFsProgressRuntime extends IAppProcess {
  Progress: ReadableStore<FsProgressOperation>;
}
// !endtpa