import { AppProcess } from "$ts/apps/process";
import {
  PasswordIcon,
  SecurityHighIcon,
  SettingsIcon,
  WaveIcon,
} from "$ts/images/general";
import type { ProcessHandler } from "$ts/process/handler";
import { Sleep } from "$ts/sleep";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/app";
import { ElevationLevel, type ElevationData } from "$types/elevation";
import { ChangePasswordApp } from "./overlays/changePassword";
import { ChangeUsernameApp } from "./overlays/changeUsername";
import { SaveThemeApp } from "./overlays/saveTheme";
import { settingsPageStore } from "./store";
import { SlideStore } from "./store/slides";

export class SettingsRuntime extends AppProcess {
  currentPage = Store<string>("");
  currentSlide = Store<string>("");
  slideVisible = Store<boolean>(false);
  requestedSlide: string | undefined;

  protected override overlayStore: Record<string, App> = {
    saveTheme: SaveThemeApp,
    changeUsername: ChangeUsernameApp,
    changePassword: ChangePasswordApp,
  };

  protected override elevations: Record<string, ElevationData> = {
    showLoginActivity: {
      what: "ArcOS needs your permission to view security activity",
      title: "View security activity",
      description: "System Settings",
      image: WaveIcon,
      level: ElevationLevel.medium,
    },
    disableSecurityPassword: {
      what: "ArcOS needs your permission to disable passwords in the <b>Secure Context</b>:",
      image: PasswordIcon,
      title: "Disable secure context password",
      description: "This will make your account less secure",
      level: ElevationLevel.medium,
    },
    turnOffSysSec: {
      what: "ArcOS needs your permission to turn off System Security. We strongly advise against this.",
      image: SecurityHighIcon,
      title: "Disable System Security",
      description: "We do NOT recommend this",
      level: ElevationLevel.high,
    },
  };

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    page?: string,
    slide?: string
  ) {
    super(handler, pid, parentPid, app);

    this.switchPage(page || "account");

    this.requestedSlide = slide;

    // TODO:  check for singleton and focus existing
    //        instance & kill this one if another instance is already opened
  }

  async render() {
    const firstInstance = await this.closeIfSecondInstance();

    if (firstInstance) {
      const dispatch = this.handler.ConnectDispatch(firstInstance.pid);

      dispatch?.dispatch("switch-page", this.currentPage());
      if (this.requestedSlide)
        dispatch?.dispatch("show-slide", this.requestedSlide);

      return;
    }

    this.dispatch.subscribe("switch-page", (page: string) => {
      this.switchPage(page);
    });

    this.dispatch.subscribe("show-slide", (slide: string) => {
      setTimeout(() => {
        this.showSlide(slide);
      }, 300);
    });

    await Sleep(300);

    if (this.requestedSlide) this.showSlide(this.requestedSlide);
  }

  switchPage(pageId: string) {
    this.Log(`Loading page '${pageId}'`);

    if (!settingsPageStore.has(pageId)) return;

    const page = settingsPageStore.get(pageId);

    this.currentPage.set(pageId);

    this.windowTitle.set(`${page?.name}`);
    this.windowIcon.set(page?.icon || SettingsIcon);
  }

  async showSlide(id: string) {
    this.Log(`Showing slide '${id}'`);

    const slide = SlideStore.get(id);

    if (!slide) return;

    if (this.slideVisible()) {
      this.slideVisible.set(false);

      await Sleep(300);
    }

    this.currentSlide.set(id);
    this.slideVisible.set(true);
  }

  async loginActivity() {
    if (!(await this.elevate("showLoginActivity"))) return;

    this.showSlide("account_loginActivity");
  }
}
