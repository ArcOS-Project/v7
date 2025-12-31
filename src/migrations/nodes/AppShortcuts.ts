import type { MigrationService } from "..";
import { MigrationNode } from "../node";
import type { MigrationVersion } from "../version";
import { AppShortcutsMigrationV01 } from "./AppShortcuts_v01";

export class AppShortcutsMigration extends MigrationNode {
  static override name = "AppShortcutsMig";
  static override friendlyName = "App shortcuts migration";

  protected override versions: Record<number, typeof MigrationVersion> = {
    [this.self.version]: AppShortcutsMigrationV01,
  };

  constructor(self: typeof MigrationNode, svc: MigrationService) {
    super(self, svc);
  }
}
