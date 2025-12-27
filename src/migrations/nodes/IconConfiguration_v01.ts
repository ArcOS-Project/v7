import type { MigrationResult, MigrationStatusCallback } from "$types/migrations";
import type { MigrationNode } from "../node";
import { MigrationVersion } from "../version";

export class IconConfigurationMigrationV01 extends MigrationVersion {
  constructor(migration: MigrationNode, self: typeof IconConfigurationMigrationV01) {
    super(migration, self);
  }

  async runMigration(cb?: MigrationStatusCallback): Promise<MigrationResult> {
    const service = this.migration.svc.host.getService<any>("IconService");
    const icons = service?.defaultConfiguration();

    service?.Configuration.update((v: any) => {
      for (const icon in icons) {
        if (!v[icon]) {
          v[icon] = icons[icon];
        }
      }

      return v;
    });

    return { result: "err_ok", sucessMessage: "Icon configuration has been updated." };
  }
}
