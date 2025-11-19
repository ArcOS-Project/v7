import { AppProcess } from "$ts/apps/process";
import type { UserDaemon } from "$ts/server/user/daemon";
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

  constructor(pid: number, parentPid: number, app: AppProcessData, daemon: UserDaemon) {
    super(pid, parentPid, app);

    if (daemon) this.userDaemon = daemon;

    this.setSource(__SOURCE__);
  }

  async render() {
    this.switchPage("welcome");
  }

  async onClose() {
    if (this.done()) return true;

    const { stop, caption } = await this.userDaemon!.GlobalLoadIndicator("Finishing up...", this.parentPid);

    for (const path in FirstRunShortcuts) {
      const payload = FirstRunShortcuts[path];
      caption.set(`Creating shortcut for ${payload.name}`);

      await this.userDaemon?.files!.createShortcut(payload, path);
    }

    await this.userDaemon?.version!.updateRegisteredVersion();
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
