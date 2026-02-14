import type { IUserContext } from "$interfaces/daemon";
import type { BatteryType } from "$types/navigator";
import type { ReadableStore } from "$types/writable";

export interface IPowerUserContext extends IUserContext {
  battery: ReadableStore<BatteryType | undefined>;
  logoff(): Promise<void>;
  shutdown(): Promise<void>;
  restart(): Promise<void>;
  logoffSafeMode(): Promise<void>;
  toLogin(type: string, props?: Record<string, any>, force?: boolean): Promise<void>;
  closeOpenedApps(type: string, props?: Record<string, any>, force?: boolean): Promise<boolean>;
  batteryInfo(): Promise<BatteryType | undefined>;
}
