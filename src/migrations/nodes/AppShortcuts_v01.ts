import { Fs } from "$ts/env";
import { Daemon } from "$ts/server/user/daemon";
import { UserPaths } from "$ts/server/user/store";
import { Sleep } from "$ts/sleep";
import { join } from "$ts/util/fs";
import type { MigrationResult, MigrationStatusCallback } from "$types/migrations";
import type { MigrationNode } from "../node";
import { MigrationVersion } from "../version";

export class AppShortcutsMigrationV01 extends MigrationVersion {
  constructor(migration: MigrationNode, self: typeof AppShortcutsMigrationV01) {
    super(migration, self);
  }

  async runMigration(cb?: MigrationStatusCallback): Promise<MigrationResult> {
    try {
      const contents = await Fs.readDir(UserPaths.AppShortcuts);
      const storage = Daemon!.appStorage()?.buffer();

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
