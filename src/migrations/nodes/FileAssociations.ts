import type { MigrationService } from "..";
import { MigrationNode } from "../node";
import type { MigrationVersion } from "../version";
import { FileAssociationsMigrationV01 } from "./FileAssociations_v01";

export class FileAssociationsMigration extends MigrationNode {
  static override name = "FileAssociationsMig";
  static override friendlyName = "File associations migration";

  protected override versions: Record<number, typeof MigrationVersion> = {
    [this.self.version]: FileAssociationsMigrationV01,
  };

  constructor(self: typeof MigrationNode, svc: MigrationService) {
    super(self, svc);
  }
}
