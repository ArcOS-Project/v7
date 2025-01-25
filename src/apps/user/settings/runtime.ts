import { AppProcess } from "$ts/apps/process";
import { SettingsIcon } from "$ts/images/general";
import type { ProcessHandler } from "$ts/process/handler";
import { Sleep } from "$ts/sleep";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/app";
import { SaveThemeApp } from "./overlays/saveTheme";
import { settingsPageStore } from "./store";
import { SlideStore } from "./store/slides";

export class SettingsRuntime extends AppProcess {
  currentPage = Store<string>("");
  currentSlide = Store<string>("");
  slideVisible = Store<boolean>(false);

  protected override overlayStore: Record<string, App> = {
    saveTheme: SaveThemeApp,
  };

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    page?: string
  ) {
    super(handler, pid, parentPid, app);

    this.switchPage(page || "account");

    // TODO:  check for singleton and focus existing
    //        instance & kill this one if another instance is already opened
  }

  async render() {
    await this.closeIfSecondInstance();
  }

  switchPage(pageId: string) {
    if (!settingsPageStore.has(pageId)) return;

    const page = settingsPageStore.get(pageId);

    this.currentPage.set(pageId);

    this.windowTitle.set(`${page?.name}`);
    this.windowIcon.set(page?.icon || SettingsIcon);
  }

  async showSlide(id: string) {
    const slide = SlideStore.get(id);

    if (!slide) return;

    if (this.slideVisible()) {
      this.slideVisible.set(false);

      await Sleep(300);
    }

    this.currentSlide.set(id);
    this.slideVisible.set(true);
  }
}
