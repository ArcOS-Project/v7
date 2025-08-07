import type { FirstRunRuntime } from "./runtime";

export interface FirstRunPage {
  name: string;
  component: any;
  hero?: boolean;
  actions: {
    left: Action[];
    right: Action[];
  };
}

export interface Action {
  caption: string;
  suggested?: boolean;
  disabled?: boolean;
  action: (process: FirstRunRuntime) => void;
}

export interface FirstRunTheme {
  name: string;
  subtitle: string;
  image: string;
  configuration: {
    style: string;
    wallpaper: string;
    accent: string;
  };
}
