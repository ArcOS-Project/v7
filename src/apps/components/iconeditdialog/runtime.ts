import { AppProcess } from "$ts/apps/process";
import { SysDispatch } from "$ts/env";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";

export class IconEditDialogRuntime extends AppProcess {
  iconName?: string;
  returnId?: string;
  type = Store<string>();
  values = Store<Record<string, string>>({});
  currentIcon = Store<string>();
  defaultIcon?: string;
  sent = false;

  //#region LIFECYCLE

  constructor(
    pid: number,
    parentPid: number,
    app: AppProcessData,
    returnId?: string,
    initialValue?: string,
    name?: string,
    defaultIcon?: string
  ) {
    super(pid, parentPid, app);

    this.iconName = name;
    this.returnId = returnId;
    if (initialValue && initialValue.startsWith("@") && initialValue.includes("::")) {
      const split = initialValue.split("::");
      this.type.set(split[0]);
      this.values.update((v) => {
        v[split[0]] = split[1];
        return v;
      });
    }
    this.defaultIcon = defaultIcon;
  }

  async start() {
    if (!this.returnId || !this.iconName) return false;

    this.type.subscribe((v) => this.updateCurrentIcon(v));
    this.values.subscribe((v) => this.updateCurrentIcon(this.type(), v));
  }

  //#endregion

  async updateCurrentIcon(type: string = this.type(), values: Record<string, any> = this.values()) {
    this.currentIcon.set(await this.getIcon(`${type}::${values[type]}`));
  }

  default() {
    if (!this.defaultIcon) return;

    const [type, value] = this.defaultIcon.split("::");
    this.type.set(type);
    this.values.set({
      [type]: value,
    });
  }

  save() {
    SysDispatch.dispatch("ied-confirm", [this.returnId, `${this.type()}::${this.values()[this.type()]}`]);
    this.sent = true;
    this.closeWindow();
  }

  async stop() {
    if (!this.sent) {
      SysDispatch.dispatch("ied-cancel", [this.returnId]);
    }
  }
}
