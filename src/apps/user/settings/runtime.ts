import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { getItemNameFromPath } from "$ts/fs/util";
import { SettingsIcon } from "$ts/images/apps";
import { ErrorIcon, QuestionIcon, WarningIcon } from "$ts/images/dialog";
import {
  AccountIcon,
  DesktopIcon,
  ElevationIcon,
  PasswordIcon,
  SecurityHighIcon,
  SecurityMediumIcon,
  WaveIcon,
} from "$ts/images/general";
import { GoodStatusIcon } from "$ts/images/status";
import { ArcLicense } from "$ts/metadata/license";
import { KernelStack } from "$ts/process/handler";
import { Backend } from "$ts/server/axios";
import { UserPaths } from "$ts/server/user/store";
import { Sleep } from "$ts/sleep";
import { htmlspecialchars } from "$ts/util";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/app";
import { ElevationLevel, type ElevationData } from "$types/elevation";
import { SettingsContext } from "./context";
import { ChangePasswordApp } from "./overlays/changePassword";
import { ChangeUsernameApp } from "./overlays/changeUsername";
import { SaveThemeApp } from "./overlays/saveTheme";
import { UrlLoginBackground } from "./overlays/urlLoginBackground";
import { UrlProfilePicture } from "./overlays/urlProfilePicture";
import { UrlWallpaper } from "./overlays/urlWallpaper";
import { UserFontApp } from "./overlays/userFont";
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
    urlLoginBackground: UrlLoginBackground,
    urlWallpaper: UrlWallpaper,
    urlProfilePicture: UrlProfilePicture,
    userFont: UserFontApp,
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

  override contextMenu = SettingsContext(this);

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, page?: string, slide?: string) {
    super(pid, parentPid, app);

    this.switchPage(page || "account");

    this.requestedSlide = slide;
  }

  async render() {
    const firstInstance = await this.closeIfSecondInstance();

    if (firstInstance) {
      const dispatch = KernelStack().ConnectDispatch(firstInstance.pid);

      dispatch?.dispatch("switch-page", this.currentPage());
      if (this.requestedSlide) dispatch?.dispatch("show-slide", this.requestedSlide);

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

  //#endregion

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
    this.Log("Elevating for slide account_loginActivity");

    if (!(await this.elevate("showLoginActivity"))) return;

    this.showSlide("account_loginActivity");
  }

  async logOutEverywhere() {
    this.Log("Showing confirmation for logOutEverywhere");

    MessageBox(
      {
        title: "Log out everywhere?",
        message:
          "Are you sure you want to log out of all your devices? You'll have to log in again for each device, and any opened ArcOS instances will stop working immediately.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Log out",
            action: async () => {
              const token = this.userDaemon?.token;

              await this.userDaemon?.logoff();

              await Backend.post(
                "/logallout",
                {},
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
            },
            suggested: true,
          },
        ],
        image: WarningIcon,
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  async uploadWallpaper() {
    this.Log("Uploading wallpaper");

    try {
      await this.userDaemon?.uploadWallpaper(this.pid);
    } catch (e) {
      const message = (e as PromiseRejectionEvent).reason;

      MessageBox(
        {
          title: "Failed to upload wallpaper",
          message: `An error occured while uploading a wallpaper from your device: ${message}`,
          image: ErrorIcon,
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          sound: "arcos.dialog.error",
        },
        this.pid,
        true
      );
    }
  }

  async viewLicense() {
    this.Log("Opening ArcOS license message box");

    MessageBox(
      {
        image: SecurityMediumIcon,
        title: "ArcOS License - GPLv3",
        message: `By using ArcOS, you agree to the GPLv3 License contained within: <code class='block'>${htmlspecialchars(
          ArcLicense()
        )}</code>`,
        buttons: [
          {
            caption: "Okay",
            action: () => {},
            suggested: true,
          },
        ],
      },
      +this.env.get("shell_pid") || this.pid,
      true
    );
  }

  deleteThemeConfirmation(id?: string) {
    if (!id) return;

    this.Log(`Showing delete theme confirmation for '${id}'`);

    MessageBox(
      {
        title: "Delete theme?",
        message: "Are you sure you want to delete this amazing theme? You can't undo this.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Delete it",
            action: () => {
              this.userDaemon?.deleteUserTheme(id);
            },
            suggested: true,
          },
        ],
        image: QuestionIcon,
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  async chooseProfilePicture() {
    const [path] = await this.userDaemon!.LoadSaveDialog({
      title: "Choose profile picture",
      icon: AccountIcon,
      startDir: UserPaths.Pictures,
      extensions: [".jpg", ".png", ".gif", ".svg", ".jpeg"],
    });

    if (!path) return;

    this.userDaemon?.changeProfilePicture(path);
  }

  async chooseWallpaper() {
    const [path] = await this.userDaemon!.LoadSaveDialog({
      title: "Choose wallpaper",
      icon: DesktopIcon,
      startDir: UserPaths.Wallpapers,
      extensions: [".jpg", ".png", ".gif", ".svg", ".jpeg"],
    });

    if (!path) return;

    const id = `@local:${btoa(path)}`;
    const filename = getItemNameFromPath(path);
    const pref = this.userPreferences();

    if (!pref.userWallpapers[id]) {
      pref.userWallpapers[id] = {
        author: this.username,
        name: filename,
        url: "",
        thumb: "",
      };
    }

    pref.desktop.wallpaper = `@local:${btoa(path)}`;
    this.userPreferences.set(pref);
  }

  async chooseLoginBackground() {
    const [path] = await this.userDaemon!.LoadSaveDialog({
      title: "Choose login background",
      icon: PasswordIcon,
      startDir: UserPaths.Wallpapers,
      extensions: [".jpg", ".png", ".gif", ".svg", ".jpeg"],
    });

    if (!path) return;

    this.userPreferences.update((v) => {
      v.account.loginBackground = `@local:${btoa(path)}`;

      return v;
    });
  }

  async setup2fa() {
    if (this.safeMode) return;

    const elevated = await this.userDaemon?.manuallyElevate({
      what: "ArcOS needs your permission to set up two-factor authentication",
      image: ElevationIcon,
      title: "Set up 2FA",
      description: `For ${this.username}`,
      level: ElevationLevel.high,
    });

    if (!elevated) return;

    await this.spawnOverlayApp("TotpSetupGui", this.pid);
  }

  async disableTotp() {
    if (this.safeMode) return;

    const elevated = await this.userDaemon?.manuallyElevate({
      what: "ArcOS needs your permission to disable two-factor authentication",
      image: ElevationIcon,
      title: "Disable 2FA",
      description: `For ${this.username}`,
      level: ElevationLevel.high,
    });

    if (!elevated) return;

    try {
      Backend.delete("/totp", { headers: { Authorization: `Bearer ${this.userDaemon?.token}` } });

      MessageBox(
        {
          title: "ArcOS Security",
          message:
            "Two-factor authentication has now been disabled for your account. You must restart for the changes to fully take effect.",
          buttons: [
            { caption: "Restart later", action: () => {} },
            { caption: "Restart now", suggested: true, action: () => this.userDaemon?.restart() },
          ],
          sound: "arcos.dialog.info",
          image: GoodStatusIcon,
        },
        this.pid,
        true
      );
    } catch {
      MessageBox(
        {
          title: "Something went wrong",
          message: "An error occured while disabling two-factor authentication for your account. Please contact ArcOS support.",
          buttons: [{ caption: "Okay", suggested: true, action: () => {} }],
          sound: "arcos.dialog.error",
          image: ErrorIcon,
        },
        this.pid,
        true
      );
    }
  }
}
