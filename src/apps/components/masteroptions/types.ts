import type { MasterOptionsRuntime } from "./runtime";

export interface MasterOption {
  caption: string;
  image: string;
  action: (process: MasterOptionsRuntime) => Promise<any>;
}
