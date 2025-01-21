import type { App } from "./app";

export interface ContextMenuItem {
  sep?: boolean;
  caption?: string;
  icon?: string;
  image?: string;
  isActive?: ContextMenuCallback<boolean>;
  action?: ContextMenuCallback;
  subItems?: ContextMenuItem[];
  disabled?: ContextMenuCallback<boolean>;
  accelerator?: string;
}

export type ContextMenuCallback<T = void> = (
  window: App | null,
  data: DOMStringMap,
  scope: string
) => T | Promise<T>;

export type ContextMenuInstance = null | {
  x: number;
  y: number;
  items: ContextMenuItem[];
  scope?: string;
  scopeMap?: DOMStringMap;
  app?: App;
  artificial?: boolean;
};
