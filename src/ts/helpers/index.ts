import { Daemon } from "$ts/env";
import { Log } from "$ts/logging";
import type { LogLevel } from "$types/shared/logging";

export class BaseHelper {
  public static FriendlyName: string = "Unknown helper";

  protected static get userPreferences() {
    return Daemon!.preferences!;
  }

  protected static Log(message: string, level?: LogLevel) {
    Log(this.FriendlyName, message, level);
  }
}
