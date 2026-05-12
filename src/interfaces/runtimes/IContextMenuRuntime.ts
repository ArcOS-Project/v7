import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ContextMenuInstance, ContextMenuItem } from "$types/app";
import type { ReadableStore, StringStore } from "$types/writable";

export interface IContextMenuRuntime extends IAppProcess {
  contextData: ReadableStore<ContextMenuInstance | null>;
  CLICKLOCKED: boolean;
  contextProps: Record<string, any[]>;
  currentMenu: StringStore;

  assignContextMenuHooks(): void;
  createContextMenu(data: ContextMenuInstance): Promise<void>;
  closeContextMenu(): void;
  handleContext(e: MouseEvent): Promise<void>;
  getWindowByEventTarget(target: EventTarget[]): HTMLDivElement | null;
  getContextEntry(pid: number, scope: string): ContextMenuItem[];
  getContextMenuScope(e: MouseEvent): HTMLDivElement | null;
  composePosition(x: number, y: number, mW: number, mH: number): [number, number];
}
