import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { IFirstRunRuntime } from "$interfaces/runtimes/IFirstRunRuntime";
import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/env";
import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/apps/app";
import { ChooseProfilePictureApp } from "./ChooseProfilePicture/metadata";
import { FirstRunPages, FirstRunShortcuts } from "./store";
import type { FirstRunPage } from "./types";

export class FirstRunRuntime extends AppProcess implements IFirstRunRuntime {
  done = Store<boolean>(false);
  currentPage = Store<FirstRunPage>();
  displayName = Store<string>("");

  protected overlayStore: Record<string, App> = {
    chooseProfilePicture: ChooseProfilePictureApp,
  };

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, daemon: IUserDaemon) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
  }

  async render() {
    this.switchPage("welcome");
  }

  async onClose() {
    if (this.done()) return true;

    const { stop, caption } = await Daemon!.helpers!.GlobalLoadIndicator("%apps.FirstRun.finishingUp%", this.parentPid);

    for (const path in FirstRunShortcuts) {
      const payload = FirstRunShortcuts[path];
      caption.set(`%apps.FirstRun.creatingShortcut(${payload.name})%`);

      await Daemon?.shortcuts?.createShortcut(payload, path);
    }

    await Daemon?.appreg?.updateStartMenuFolder();
    await Daemon?.version?.updateRegisteredVersion();
    await stop();

    this.done.set(true);
    return true;
  }

  //#endregion

  switchPage(id: string) {
    this.Log(`switchPage: ${id}`);

    this.currentPage.set(FirstRunPages.get(id)!);
  }

  chooseProfilePicture() {
    this.spawnOverlay("chooseProfilePicture");
  }

  setDisplayName() {
    const displayName = this.displayName();
    if (!displayName) {
      MessageBox(
        {
          title: "What's that?",
          message: "You didn't enter a display name! If you don't want to set one, no problem! Just click Skip instead.",
          buttons: [BTN_OKAY_SUG],
          image: "AccountIcon",
          sound: "arcos.dialog.warning",
        },
        this.pid,
        true
      );
      return;
    }

    this.userPreferences.update((v) => {
      v.account.displayName = displayName;
      return v;
    });

    this.switchPage("thirdParty");
  }
}
