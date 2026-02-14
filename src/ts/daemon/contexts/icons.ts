import type { IAppProcess } from "$interfaces/app";
import type { IIconsUserContext, IUserDaemon } from "$interfaces/daemon";
import { maybeIconId } from "$ts/images";
import type { IconService } from "$ts/servicehost/services/IconService";
import { Store } from "$ts/writable";
import type { App } from "$types/app";
import type { ReadableStore } from "$types/writable";
import { UserContext } from "../context";

export class IconsUserContext extends UserContext implements IIconsUserContext {
  constructor(id: string, daemon: IUserDaemon) {
    super(id, daemon);
  }

  getAppIcon(app: App) {
    if (!app) return this.getIconCached("ComponentIcon");
    return this.getIconCached(`@app::${app.id}`) || this?.getIconCached("ComponentIcon");
  }

  getAppIconByProcess(process: IAppProcess) {
    if (!process) return this.getIconCached("ComponentIcon");

    return this.getAppIcon(process.app?.data) || this?.getIconCached("ComponentIcon");
  }

  async getIcon(id: string): Promise<string> {
    if (!id) return this.getIconCached("ComponentIcon");

    const iconService = this.serviceHost?.getService<IconService>("IconService");

    return (await iconService?.getIcon(id)) || this?.getIconCached("ComponentIcon");
  }

  getIconCached(id: string): string {
    const iconService = this.serviceHost?.getService<IconService>("IconService");

    return iconService?.getIconCached(id) || id;
  }

  getIconStore(id: string): ReadableStore<string> {
    const store = Store<string>();
    const iconService = this.serviceHost?.getService<IconService>("IconService");

    if (!iconService) store.set(maybeIconId(id) || "");

    iconService?.getIcon(id)?.then((i) => store.set(i));

    return store;
  }
}
