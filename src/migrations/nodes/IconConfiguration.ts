import type { MigrationService } from "..";
import { MigrationNode } from "../node";
import type { MigrationVersion } from "../version";
import { IconConfigurationMigrationV01 } from "./IconConfiguration_v01";

export class IconConfigurationMigration extends MigrationNode {
  static override name = "IconConfigurationMig";
  static override friendlyName = "Icon Configuration Migration";

  protected static versions: Record<number, typeof MigrationVersion> = {
    [this.version]: IconConfigurationMigrationV01,
  };

  constructor(self: typeof MigrationNode, svc: MigrationService) {
    super(self, svc);
  }
}
