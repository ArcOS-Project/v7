import type { IMigrationNodeConstructor } from "$interfaces/migration";
import type { IMigrationService } from "$interfaces/service";
import { Fs } from "$ts/env";
import { Daemon } from "$ts/daemon";
import { UserPaths } from "$ts/user/store";
import { Sleep } from "$ts/sleep";
import { join } from "$ts/util/fs";
import type { MigrationResult, MigrationStatusCallback } from "$types/migrations";
import { MigrationNode } from "../node";

export class AppShortcutsMigration extends MigrationNode {
  static override name = "AppShortcutsMig";
  static override friendlyName = "App shortcuts migration";

  constructor(self: IMigrationNodeConstructor, svc: IMigrationService) {
    super(self, svc);
  }

  async runMigration(cb?: MigrationStatusCallback): Promise<MigrationResult> {
    try {
      const contents = await Fs.readDir(UserPaths.AppShortcuts);
      const storage = await Daemon!.appStorage()?.get();

      if (!storage || !contents) return { result: "err_noop", errorMessage: "Nothing to do." };

      for (const app of storage) {
        const existing = contents?.files.filter((f) => f.name === `${app.id}.arclnk`)[0];

        if (existing) continue;

        Daemon!.shortcuts?.createShortcut(
          {
            name: app.id,
            target: app.id,
            type: "app",
            icon: `@app::${app.id}`,
          },
          join(UserPaths.AppShortcuts, `${app.id}.arclnk`)
        );
        await Sleep(50);
      }

      return { result: "err_ok", successMessage: "Updated" };
    } catch (e) {
      return { result: "err_failure", errorMessage: `${e}` };
    }
  }
}
