import type { IMasterOptionsRuntime } from "$interfaces/runtimes/IMasterOptionsRuntime";

export interface MasterOption {
  caption: string;
  image: string;
  action: (process: IMasterOptionsRuntime) => Promise<any>;
}
