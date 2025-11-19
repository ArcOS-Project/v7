import { Store } from "$ts/writable";
import type { BatteryType } from "$types/navigator";
import type { UserDaemon } from "..";
import { UserContext } from "../context";

export class StatusUserContext extends UserContext {
  public battery = Store<BatteryType | undefined>();

  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async batteryInfo(): Promise<BatteryType | undefined> {
    if (this._disposed) return;

    const navigator = window.navigator as any;

    if (!navigator.getBattery) return undefined;

    const info = (await navigator.getBattery()) as BatteryType;
    if (info.charging && info.level === 1) return undefined;

    return info;
  }

  async startSystemStatusRefresh() {
    if (this._disposed || this.safeMode) return;

    this.Log("Starting system status refresh");

    setInterval(async () => {
      this.battery.set(await this.batteryInfo());
    }, 1000); // Every second

    this.battery.set(await this.batteryInfo());
  }
}
