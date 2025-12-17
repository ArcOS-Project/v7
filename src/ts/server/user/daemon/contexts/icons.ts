import type { AppProcess } from "$ts/apps/process";
import type { IconService } from "$ts/icon";
import { maybeIconId } from "$ts/images";
import { ComponentIcon } from "$ts/images/general";
import { Store, type ReadableStore } from "$ts/writable";
import type { App } from "$types/app";
import type { UserDaemon } from "..";
import { UserContext } from "../context";

export class IconsUserContext extends UserContext {
  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  getAppIcon(app: App) {
    return this.getIconCached(`@app::${app.id}`) || this?.getIconCached("ComponentIcon");
  }

  getAppIconByProcess(process: AppProcess) {
    return this.getAppIcon(process.app?.data) || this?.getIconCached("ComponentIcon");
  }

  async getIcon(id: string): Promise<string> {
    const iconService = this.serviceHost?.getService<IconService>("IconService");

    return (await iconService?.getIcon(id)) || this?.getIconCached("ComponentIcon");
  }

  getIconCached(id: string): string {
    const iconService = this.serviceHost?.getService<IconService>("IconService");

    return iconService?.getIconCached(id) || iconService?.getIconCached("ComponentIcon") || ComponentIcon;
  }

  getIconStore(id: string): ReadableStore<string> {
    const store = Store<string>();
    const iconService = this.serviceHost?.getService<IconService>("IconService");

    if (!iconService) store.set(maybeIconId(id) || "");

    iconService?.getIcon(id)?.then((i) => store.set(i));

    return store;
  }
}
