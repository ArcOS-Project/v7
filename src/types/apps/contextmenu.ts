import type { IAppProcess } from "$interfaces/IAppProcess";
import type { MaybePromise } from "$types/shared/common";

export interface ContextMenuItem {
  sep?: boolean;
  caption?: string;
  icon?: string;
  image?: string; // icon ID !!!
  isActive?: ContextMenuCallback<boolean>;
  action?: ContextMenuCallback;
  subItems?: ContextMenuItem[];
  disabled?: ContextMenuCallback<boolean>;
  accelerator?: string;
}

export type ContextMenuCallback<T = any> = (...args: any[]) => MaybePromise<T>;

export type AppContextMenu = { [key: string]: ContextMenuItem[] };
export interface ContextMenuInstance {
  x: number;
  y: number;
  items: ContextMenuItem[];
  process?: IAppProcess;
  artificial?: boolean;
  props?: any[];
}
