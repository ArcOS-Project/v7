import { AppProcess } from "$ts/apps/process";
import { join } from "$ts/fs/util";
import { iconIdFromPath } from "$ts/images";
import type { UserDaemon } from "$ts/server/user/daemon";
import { UserPaths } from "$ts/server/user/store";
import { Sleep } from "$ts/sleep";
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

      await this.userDaemon?.createShortcut(payload, path);
    }

    // TODO: fix me
    // for (const app of BuiltinApps) {
    //   const path = join(UserPaths.AppShortcuts, `${app.id}.arclnk`);
    //   caption.set(`Preparing ${app.id}`);

    //   this.userDaemon?.createShortcut(
    //     {
    //       name: app.id,
    //       type: "app",
    //       target: app.id,
    //       icon: iconIdFromPath(app.metadata.icon),
    //     },
    //     path
    //   );
    //   await Sleep(50);
    // }

    await this.userDaemon?.updateRegisteredVersion();
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
