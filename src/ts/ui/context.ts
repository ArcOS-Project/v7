import type { WaveKernel } from "$ts/kernel";
import { KernelModule } from "$ts/kernel/module";
import { ProcessHandler } from "$ts/process/handler";
import { Sleep } from "$ts/sleep";
import type { ContextMenuItem } from "$types/context";

export class ContextMenu extends KernelModule {
  handler: ProcessHandler;
  target: HTMLDivElement | undefined;

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);

    this.handler = kernel.getModule<ProcessHandler>("stack");
    this.target = this.handler.renderer?.target;
  }

  async createMenu(
    items: ContextMenuItem[],
    rootMenu: HTMLUListElement | undefined,
    x: number,
    y: number
  ) {
    this.removeAllMenus();

    await Sleep(0);

    const menu = document.createElement("ul");
    const isRoot = !rootMenu;

    rootMenu ||= menu;

    menu.className = "context-menu";

    for (const item of items) {
      const menuItem = document.createElement("li");
      const button = document.createElement("button");

      menuItem.className = "context-menu-item";
      button.textContent = item.label;

      button.addEventListener("click", (event) => {
        event.stopPropagation();

        if (item.action) item.action();

        if (!item.submenu) this.closeMenu(rootMenu);
      });

      if (item.submenu) {
        menuItem.classList.add("has-submenu");

        const submenu = await this.createMenu(item.submenu, rootMenu, x, y);

        menuItem.appendChild(submenu);

        let timeout: NodeJS.Timeout;

        menuItem.addEventListener("mouseenter", () => {
          for (const otherSubmenu of menu.querySelectorAll(
            "li.has-submenu > ul.show"
          )) {
            otherSubmenu.classList.remove("show");
          }

          clearTimeout(timeout);

          submenu.classList.add("show");
        });

        menuItem.addEventListener("mouseleave", () => {
          timeout = setTimeout(() => {
            submenu.classList.remove("show");
          }, 300);
        });

        setTimeout(() => {
          // Adjust submenu position
          this.adjustSubmenuPosition(submenu);
        }, 100);
      }

      menuItem.append(button);
      menu.appendChild(menuItem);
    }

    if (isRoot) this.positionMenu(menu, x, y);

    await Sleep(1);

    this.target?.append(menu);

    await Sleep(50);

    if (isRoot) menu.classList.add("show");

    return menu;
  }

  adjustSubmenuPosition(submenu: HTMLUListElement) {
    const rect = submenu.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();

    const { width: bodyWidth, height: bodyHeight } = bodyRect;

    console.log(bodyRect);

    const { x, y, width, height } = rect;

    console.table({ x, y, bodyWidth, bodyHeight, width, height });

    // Adjust left position if submenu goes off the right edge
    if (x + width > bodyWidth) {
      submenu.style.left = `-100%`; // Move to the left
    }

    // Adjust top position if submenu goes off the bottom edge
    if (y + height > bodyHeight) {
      submenu.style.top = `${y - rect.height}px`; // Move up
    }
  }

  positionMenu(menu: HTMLUListElement, x: number, y: number) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    menu.style.left = x + "px";
    menu.style.top = y + "px";

    const rect = menu.getBoundingClientRect();

    // Adjust position to prevent overflow
    if (rect.right > viewportWidth) {
      menu.style.left = viewportWidth - rect.width + "px";
    }

    if (rect.bottom > viewportHeight) {
      menu.style.top = viewportHeight - rect.height + "px";
    }
  }

  removeAllMenus() {
    const menus =
      this.target?.querySelectorAll<HTMLUListElement>("ul.context-menu");

    if (!menus) return;

    for (const menu of menus) {
      this.closeMenu(menu);
    }
  }

  async closeMenu(menu: HTMLUListElement) {
    menu.classList.remove("show");

    await Sleep(300);

    menu.innerHTML = "";
  }
}
