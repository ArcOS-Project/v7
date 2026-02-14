import { AppProcess } from "$ts/apps/process";
import { Server, Stack, SysDispatch } from "$ts/env";
import { WarningIcon } from "$ts/images/dialog";
import { MessageBox } from "$ts/util/dialog";
import { Store } from "$ts/writable";
import type { App, AppProcessData } from "$types/app";
import type { ServerOption } from "$types/server";

export class SwitchServerRuntime extends AppProcess {
  servers = Store<ServerOption[]>([]);
  selected = Store<string>();
  loading = Store<boolean>(false);
  connectionError = Store<boolean>(false);
  subscriber?: number;
  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
  }

  async start() {
    this.subscriber = SysDispatch.subscribe("server-updated", ([servers]: [ServerOption[]]) => {
      this.servers.set(servers);
    });

    this.selected.subscribe(() => {
      this.connectionError.set(false);
    });

    this.servers.set(Server.servers);
    this.selected.set(Server.url || import.meta.env.DW_SERVER_URL);
  }

  async stop() {
    if (this.subscriber) SysDispatch.unsubscribeId("server-updated", this.subscriber);
  }

  //#endregion LIFECYCLE

  async switchServer(server: ServerOption) {
    this.loading.set(true);
    this.connectionError.set(false);

    const result = await Server.switchServer(server.url);

    this.loading.set(false);
    if (!result) this.connectionError.set(true);
    else location.reload();
  }

  async removeServer(server: ServerOption) {
    MessageBox(
      {
        title: "Remove server?",
        message: "Are you sure you want to remove this server?",
        buttons: [
          { caption: "Cancel", action: () => {} },
          { caption: "Remove", action: () => Server.removeServer(server.url), suggested: true },
        ],
        image: WarningIcon,
      },
      this.pid,
      true
    );
  }

  async addServer() {
    const module: App = (await import("$apps/components/addserver/AddServer")).default;

    await Stack.spawn(module.assets.runtime, undefined, "SYSTEM", this.pid, { data: module, id: module.id });
  }
}
