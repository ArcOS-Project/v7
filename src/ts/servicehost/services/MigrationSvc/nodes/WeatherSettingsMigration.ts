import type { IMigrationNodeConstructor } from "$interfaces/IMigrationNode";
import type { IMigrationService } from "$interfaces/services/IMigrationService";
import { Daemon } from "$ts/env";
import { DefaultUserPreferences } from "$ts/user/default";
import type { MigrationStatusCallback, MigrationResult } from "$types/services/migrations";
import { MigrationNode } from "../node";

export class WeatherSettingsMigration extends MigrationNode {
  static override name = "WeatherSettingsMig";
  static override friendlyName = "Weather Settings Migration";
  static override version = 1.0;

  constructor(self: IMigrationNodeConstructor, svc: IMigrationService) {
    super(self, svc);
  }

  async runMigration(cb?: MigrationStatusCallback): Promise<MigrationResult> {
    const preferences = Daemon.preferences();

    if (preferences.weatherSettings?.migrated) return { result: "err_ok" };

    cb?.("Updating weather information");

    Daemon.preferences.update((v) => {
      v.weatherSettings.migrated = true;
      v.weatherSettings.latitude = v.shell.actionCenter.weatherLocation?.latitude!;
      v.weatherSettings.longitude = v.shell.actionCenter.weatherLocation?.longitude!;
      v.weatherSettings.name = v.shell.actionCenter.weatherLocation?.name!;
      v.shell.actionCenter.weatherLocation = undefined;

      return v;
    });

    return { result: "err_ok" };
  }
}
