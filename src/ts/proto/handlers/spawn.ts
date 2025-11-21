import type { ApplicationStorage } from "$ts/apps/storage";
import { Env } from "$ts/env";
import type { ProtocolHandler } from "$types/proto";

export const SpawnAppHandler: ProtocolHandler = {
  name: "Spawn app",
  info: (payload, daemon) => {
    const appStore = daemon.serviceHost?.getService<ApplicationStorage>("AppStorage");
    const app = appStore?.buffer().filter((a) => a.id === payload.id)[0];

    if (!app) return undefined;

    return {
      icon: daemon.icons!.getAppIcon(app),
      caption: app.metadata.name,
      title: `Open ${app.metadata.name} by ${app.metadata.author} (${app.metadata.version})`,
    };
  },
  action: async (payload, daemon) => {
    return !!(await daemon.spawn!.spawnApp(
      payload.id,
      +Env.get("shell_pid"),
      ...(Array.isArray(payload.args) ? payload.args : [])
    ));
  },
};
