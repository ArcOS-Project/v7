import { AppProcess } from "$ts/apps/process";
import type { IconService } from "$ts/icon";
import { Daemon } from "$ts/server/user/daemon";
import { Store, type ReadableStore } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class IconEditDialogRuntime extends AppProcess {
  store?: ReadableStore<Record<string, string>>;
  id?: string;
  type = Store<string>();
  values = Store<Record<string, string>>({});
  currentIcon = Store<string>();

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, store?: ReadableStore<Record<string, string>>, id?: string) {
    super(pid, parentPid, app);

    this.id = id;
    this.store = store || Store(Daemon?.serviceHost?.getService<IconService>("IconService")?.Configuration());
  }

  async start() {
    if (!this.store || !this.id) return false;

    if (!this.store()[this.id]) this.id = "@builtin::ComponentIcon";

    const icon = this.store()[this.id].split("::");

    this.type.set(icon[0]);
    this.values.set({
      [this.type()]: icon[1],
    });
    this.type.subscribe((v) => this.updateCurrentIcon(v));
    this.values.subscribe((v) => this.updateCurrentIcon(this.type(), v));
  }

  //#endregion

  async updateCurrentIcon(type: string = this.type(), values: Record<string, any> = this.values()) {
    this.currentIcon.set(await this.getIcon(`${type}::${values[type]}`));
  }

  default() {
    this.type.set("@builtin");
    this.values.set({
      "@builtin": this.id!,
    });
  }

  save() {
    this.store?.update((v) => {
      v[this.id!] = `${this.type()}::${this.values()[this.type()]}`;
      return v;
    });
    this.closeWindow();
  }
}
