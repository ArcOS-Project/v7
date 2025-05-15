import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import { Sleep } from "$ts/sleep";
import { Store } from "$ts/writable";
import type { AppProcessData, ContextMenuInstance, ContextMenuItem } from "$types/app";
import { WindowSystemContextMenu } from "./system";

export class ContextMenuRuntime extends AppProcess {
  public contextData = Store<ContextMenuInstance | null>();
  public CLICKLOCKED = false;
  public contextProps: Record<string, any[]> = {};
  // Elements that can contain a contextmenu dataset key
  private readonly validContexMenuTags = ["button", "div", "span", "p", "h1", "h2", "h3", "h4", "h5", "img"];

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);

    this.env.set("contextmenu_pid", this.pid);
  }

  async start() {
    if (await this.closeIfSecondInstance()) return false;
  }

  async render() {
    this.assignContextMenuHooks();
  }

  async createContextMenu(data: ContextMenuInstance) {
    this.Log(`Spawning context menu with ${data.items.length} items at ${data.x}, ${data.y}`);

    this.CLICKLOCKED = true;
    this.contextData.set(data);
    await Sleep(10);
    this.CLICKLOCKED = false;
  }

  closeContextMenu() {
    this.contextData.set(null);
  }

  assignContextMenuHooks() {
    this.Log("Assigning context menu hooks");

    document.addEventListener("click", (e) => {
      if (this.CLICKLOCKED) return;

      const el = document.querySelector("#contextMenu > div.body > .context-menu");

      if (!el || e.button !== 0 || e.composedPath().includes(el)) return;

      this.contextData.set(null);
    });

    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      this.handleContext(e);
    });
  }

  async handleContext(e: MouseEvent) {
    const window = this.getWindowByEventTarget(e.composedPath());
    const scope = this.getContextMenuScope(e);

    if (!window || !scope) return this.closeContextMenu();

    const pid = window.dataset.pid;

    if (!pid) return this.closeContextMenu();

    const contextmenu = scope.dataset.contextmenu || "";
    const contextProps = scope.dataset.contextprops || "";

    const items = this.getContextEntry(+pid, contextmenu);
    const proc = this.handler.getProcess(+pid);

    this.createContextMenu({
      x: e.clientX,
      y: e.clientY,
      items,
      process: proc && proc instanceof AppProcess ? proc : undefined,
      props: this.contextProps[contextProps] || [],
    });
  }

  getWindowByEventTarget(target: EventTarget[]): HTMLDivElement | null {
    for (const element of target as HTMLDivElement[]) {
      const classList = element.classList;

      if (!classList) continue;

      if (classList.contains("window")) return element;
    }

    return null;
  }

  composePosition(x: number, y: number, mW: number, mH: number): [number, number] {
    const dW = window.innerWidth;
    const dH = window.innerHeight;

    let newX = x;
    let newY = y;

    // Position corrections to adhere to screen bounds
    if (newX + mW > dW) newX = dW - mW - 10;
    if (newY + mH > dH) newY = dH - mH - 10;
    if (newX < 0) x = 10;
    if (newY < 0) y = 10;

    return [newX, newY];
  }

  getContextEntry(pid: number, scope: string): ContextMenuItem[] {
    const proc = this.handler.getProcess(pid);

    if (!(proc instanceof AppProcess)) return [];

    const menu = Object.entries({ ...proc.contextMenu, ...WindowSystemContextMenu(this) }); // Concatenate process context menu with the system contexts

    for (const [key, items] of menu) {
      if (scope.includes(key)) return items;
    }

    return [];
  }

  getContextMenuScope(e: MouseEvent) {
    const path = e.composedPath() as HTMLDivElement[];

    for (const element of path) {
      const tag = element.tagName;

      if (!tag) continue; // Theoretically impossible

      const contextmenu = element.dataset.contextmenu;

      if (this.validContexMenuTags.includes(tag.toLowerCase()) && contextmenu) {
        return element;
      }
    }

    return null;
  }

  async onClose(): Promise<boolean> {
    return false;
  }
}
