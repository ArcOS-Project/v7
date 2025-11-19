import type { ApplicationStorage } from "$ts/apps/storage";
import { Sleep } from "$ts/sleep";
import { textToBlob } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import type { UserDaemon } from "..";
import { DefaultFileDefinitions } from "../../assoc/store";
import { UserPaths } from "../../store";
import { UserContext } from "../context";

export class MigrationsUserContext extends UserContext {
  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  override async _init(): Promise<void> {}

  async migrateFilesystemLayout() {
    const migrationPath = join(UserPaths.Migrations, "FsMig-705.lock");
    const migrationFile = !!(await this.fs.stat(migrationPath));

    if (migrationFile) return;

    const oldConfigDir = await this.fs.readDir("U:/Config");

    if (oldConfigDir) {
      for (const dir of oldConfigDir.dirs) {
        const target = join(UserPaths.Configuration, dir.name);

        await this.fs.deleteItem(target);
        await this.fs.moveItem(`U:/Config/${dir.name}`, target);
      }

      await this.fs.deleteItem("U:/Config");
    }

    await this.fs.writeFile(migrationPath, textToBlob(`${Date.now()}`));
  }

  async updateAppShortcutsDir() {
    const contents = await this.fs.readDir(UserPaths.AppShortcuts);
    const storage = this.daemon.appStorage()?.buffer();

    if (!storage || !contents) return;

    for (const app of storage) {
      const existing = contents?.files.filter((f) => f.name === `${app.id}.arclnk`)[0];

      if (existing) continue;

      this.daemon.shortcuts?.createShortcut(
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
    const apps = this.daemon.preferences().userApps;

    if (!Object.entries(apps).length) return;

    this.Log(`Migrating user apps to filesystem...`);

    for (const id in apps) {
      await this.fs.writeFile(join(UserPaths.AppRepository, `${id}.json`), textToBlob(JSON.stringify(apps[id], null, 2)));
    }

    this.daemon.preferences.update((v) => {
      v.userApps = {};
      return v;
    });
  }

  async updateFileAssociations() {
    const appStore = this.serviceHost?.getService<ApplicationStorage>("AppStorage");
    const apps = await appStore?.get();

    if (!apps) return;

    
    this.daemon.assoc?.updateConfiguration((config) => {
      for (const app of apps) {
        if (!app.opens?.extensions) continue;

        for (const extension of app.opens.extensions) {
          const existingAssociation = this.daemon.assoc?.getFileAssociation(`dummy${extension}`);

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
