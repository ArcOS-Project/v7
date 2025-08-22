import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import { DefaultFileDefinitions } from "$ts/server/user/assoc/store";
import type { AppProcessData } from "$types/app";

export class UpdateNotifierRuntime extends AppProcess {
  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);
  }

  async start() {
    if (this.userDaemon?.autoLoadComplete) return false;
  }

  async onClose() {
    const { stop } = await this.userDaemon!.GlobalLoadIndicator("Just a moment...", this.pid);

    await this.userDaemon?.updateRegisteredVersion();
    await this.updateFileDefinitions();
    stop();

    return true;
  }

  async updateFileDefinitions() {
    const storage = this.appStore();
    const apps = storage.buffer();
    await this.userDaemon?.assoc?.updateConfiguration((config) => {
      config.associations ||= {
        apps: {},
        handlers: {},
      };
      config.definitions ||= {};

      for (const extension in DefaultFileDefinitions) {
        if (!config.definitions[extension]) config.definitions[extension] = DefaultFileDefinitions[extension];
      }

      for (const app of apps) {
        if (!config.associations.apps[app.id]) config.associations.apps[app.id] = app.opens?.extensions || [];
      }

      for (const handlerId in this.userDaemon?.fileHandlers) {
        if (!config.associations.handlers[handlerId])
          config.associations.handlers[handlerId] = this.userDaemon?.fileHandlers[handlerId]?.opens.extensions || [];
      }

      return config;
    });
  }
}
