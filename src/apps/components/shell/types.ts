import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";

// !tpa

export interface QuickSetting {
  isActive: (process: IShellRuntime) => boolean | Promise<boolean>;
  action: (process: IShellRuntime) => any;
  icon: string;
  className?: string;
  caption: string;
}

export interface StartMenuAction {
  caption: string;
  icon: string;
  action: (process: IShellRuntime) => void;
  className?: string;
}

// !endtpa
