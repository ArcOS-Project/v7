import type { ApplicationStorage } from "$ts/apps/storage";
import { Fs } from "$ts/env";
import { Sleep } from "$ts/sleep";
import { textToBlob } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import { Daemon, type UserDaemon } from "..";
import { DefaultFileDefinitions } from "../../assoc/store";
import { UserPaths } from "../../store";
import { UserContext } from "../context";

export class MigrationsUserContext extends UserContext {
  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async migrateFilesystemLayout() {
    const migrationPath = join(UserPaths.Migrations, "FsMig-705.lock");
    const migrationFile = !!(await Fs().stat(migrationPath));

    if (migrationFile) return;

    const oldConfigDir = await Fs().readDir("U:/Config");

    if (oldConfigDir) {
      for (const dir of oldConfigDir.dirs) {
        const target = join(UserPaths.Configuration, dir.name);

        await Fs().deleteItem(target);
        await Fs().moveItem(`U:/Config/${dir.name}`, target);
      }

      await Fs().deleteItem("U:/Config");
    }

    await Fs().writeFile(migrationPath, textToBlob(`${Date.now()}`));
  }

  async updateAppShortcutsDir() {
    const contents = await Fs().readDir(UserPaths.AppShortcuts);
    const storage = Daemon()!.appStorage()?.buffer();

    if (!storage || !contents) return;

    for (const app of storage) {
      const existing = contents?.files.filter((f) => f.name === `${app.id}.arclnk`)[0];

      if (existing) continue;

      Daemon()!.shortcuts?.createShortcut(
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
  }

  async migrateUserAppsToFs() {
    const apps = Daemon()!.preferences().userApps;

    if (!Object.entries(apps).length) return;

    this.Log(`Migrating user apps to filesystem...`);

    for (const id in apps) {
      await Fs().writeFile(join(UserPaths.AppRepository, `${id}.json`), textToBlob(JSON.stringify(apps[id], null, 2)));
    }

    Daemon()!.preferences.update((v) => {
      v.userApps = {};
      return v;
    });
  }

  async updateFileAssociations() {
    const appStore = this.serviceHost?.getService<ApplicationStorage>("AppStorage");
    const apps = await appStore?.get();

    if (!apps) return;

    Daemon()!.assoc?.updateConfiguration((config) => {
      for (const app of apps) {
        if (!app.opens?.extensions) continue;

        for (const extension of app.opens.extensions) {
          const existingAssociation = Daemon()!.assoc?.getFileAssociation(`dummy${extension}`);

          if (existingAssociation) continue;

          config.associations.apps[app.id] ||= [];
          config.associations.apps[app.id].push(extension);
        }
      }

      for (const definitionKey in DefaultFileDefinitions) {
        const definitionValue = DefaultFileDefinitions[definitionKey];

        if (!config.definitions[definitionKey]) config.definitions[definitionKey] = definitionValue;
      }

      return config;
    });
  }
}
