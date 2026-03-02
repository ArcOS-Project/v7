import type { IMigrationNodeConstructor } from "$interfaces/migration";
import type { IIconService } from "$interfaces/services/IconService";
import type { IMigrationService } from "$interfaces/services/MigrationSvc";
import type { MigrationResult } from "$types/migrations";
import { MigrationNode } from "../node";

export class IconConfigurationMigration extends MigrationNode {
  static override name = "IconConfigurationMig";
  static override friendlyName = "Icon Configuration Migration";

  constructor(self: IMigrationNodeConstructor, svc: IMigrationService) {
    super(self, svc);
  }

  async runMigration(): Promise<MigrationResult> {
    const service = this.svc.host.getService<IIconService>("IconService");
    const icons = service?.defaultConfiguration();

    service?.Icons.update((v: any) => {
      for (const icon in icons) {
        if (!v[icon]) {
          v[icon] = icons[icon];
        }
      }

      return v;
    });

    return { result: "err_ok", successMessage: "Icon configuration has been updated." };
  }
}
