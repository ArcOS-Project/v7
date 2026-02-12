import type { IUserDaemon } from "$interfaces/daemon";
import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/server/user/daemon";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/app";
import { ChooseProfilePictureApp } from "./ChooseProfilePicture/metadata";
import { FirstRunPages, FirstRunShortcuts } from "./store";
import type { FirstRunPage } from "./types";

export class FirstRunRuntime extends AppProcess {
  done = Store<boolean>(false);
  currentPage = Store<FirstRunPage>();

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

    const { stop, caption } = await Daemon!.helpers!.GlobalLoadIndicator("Finishing up...", this.parentPid);

    for (const path in FirstRunShortcuts) {
      const payload = FirstRunShortcuts[path];
      caption.set(`Creating shortcut for ${payload.name}`);

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
    if (!FirstRunPages.has(id)) this.notImplemented(`Page ${id}`);

    this.currentPage.set(FirstRunPages.get(id)!);
  }

  chooseProfilePicture() {
    this.spawnOverlay("chooseProfilePicture");
  }
}
