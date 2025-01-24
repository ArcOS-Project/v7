import type { AppProcess } from "$ts/apps/process";
import type { ContextMenuItem } from "$types/context";

export function contextMenu(
  node: HTMLElement,
  {
    process,
    options,
  }: { process: AppProcess; options?: () => Promise<ContextMenuItem[]> }
) {
  if (!options) return;

  process.contextMenu(node, options);
}

export function clickMenu(
  node: HTMLElement,
  {
    process,
    options,
  }: { process: AppProcess; options: () => Promise<ContextMenuItem[]> }
) {
  process.clickMenu(node, options);
}
