import type { WaveKernel } from "$ts/kernel";
import { KernelModule } from "$ts/kernel/module";
import type { ContextMenuItem } from "$types/context";

export class ContextMenuLogic extends KernelModule {
  menu: HTMLDivElement | undefined;
  locked = false;

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);
  }

  async _init() {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    });
  }

  createMenu() {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");
    this.menu = document.createElement("div");
    this.menu.className = "context-menu hidden";

    const main = document.querySelector("#arcShell > div.body");

    if (!main) return;

    main.addEventListener("click", (e) =>
      this.checkOutsideClick(e as MouseEvent)
    );
    main.append(this.menu);
  }

  async showMenu(
    x: number,
    y: number,
    options: ContextMenuItem[],
    taskbarAllocation = 0
  ) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");
    this.locked = true;

    this.menu?.classList.add("hidden");
    this.menu!.innerHTML = "";
    this.menu?.style.setProperty("--x", "");
    this.menu?.style.setProperty("--y", "");

    for (const option of options) {
      if (!option) continue;

      const button = document.createElement("button");
      const caption = document.createElement("span");
      const iconWrapper = document.createElement("span");
      const checked = document.createElement("span");

      checked.className = "lucide icon-check checked";
      iconWrapper.className = "icon-wrapper";

      if (option.image) {
        const image = document.createElement("img");

        image.src = option.image;
        image.className = "image";

        iconWrapper.append(image);
      } else if (option.icon) {
        const icon = document.createElement("span");

        icon.className = `lucide icon-${option.icon}`;

        iconWrapper.append(icon);
      }

      button.className = option.className || "";

      if (option.disabled) button.disabled = !!(await option.disabled());
      if (option.checked)
        button.classList.toggle("checked", !!(await option.checked()));
      if (option.default) button.classList.add("default");

      caption.innerText = option.caption;

      button.append(iconWrapper, caption, checked);

      button.addEventListener("click", () => {
        this.hideMenu();

        option.action(option);
      });

      this.menu?.append(button);
      if (option.separator) this.menu?.append(document.createElement("hr"));
    }

    this.menu?.classList.remove("hidden");

    setTimeout(() => {
      const { x: newX, y: newY } = this.correctMenuPosition(
        x,
        y,
        taskbarAllocation
      );

      x = newX;
      y = newY;

      this.menu?.style.setProperty("--x", `${x}px`);
      this.menu?.style.setProperty("--y", `${y}px`);
      this.locked = false;
    }, 2);
  }

  correctMenuPosition(x: number, y: number, taskbarAllocation = 0) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");
    const { offsetWidth: width, offsetHeight: height } = this.menu!;
    let { width: screenWidth, height: screenHeight } =
      document.body.getBoundingClientRect();

    screenHeight -= taskbarAllocation;

    if (x + width >= screenWidth) {
      x = screenWidth - width - 10;
    }

    if (y + height >= screenHeight) {
      y = screenHeight - height - 10;
    }

    return { x, y };
  }

  hideMenu() {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");
    this.menu?.classList.add("hidden");
  }

  checkOutsideClick(e: MouseEvent) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");
    if (e.composedPath().includes(this.menu!) || this.locked) return;

    this.hideMenu();
  }

  // TODO: single-depth submenus
  // TODO: checked state
  // TODO: disabled state
  // TODO: accelerator depiction on the right side of the menu item, if provided
}
