import type { IUserDaemon } from "$interfaces/daemon";
import type { IServerManager } from "$interfaces/modules/server";
import type { IGlobalDispatch } from "$interfaces/services/GlobalDispatch";
import { Daemon } from "$ts/daemon";
import { Env, getKMod, Stack, SysDispatch } from "$ts/env";
import { Backend } from "$ts/kernel/mods/server/axios";
import type { ServiceHost } from "$ts/servicehost";
import { BaseService } from "$ts/servicehost/base";
import { Sleep } from "$ts/sleep";
import type { GlobalDispatchClient } from "$types/dispatch";
import type { Service } from "$types/service";
import type { UserPreferences } from "$types/user";
import io, { Socket } from "socket.io-client";

export class GlobalDispatch extends BaseService implements IGlobalDispatch {
  client: Socket | undefined;
  server: IServerManager;
  authorized = false;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(pid, parentPid, name, host);

    this.server = getKMod<IServerManager>("server");

    window.addEventListener("beforeunload", () => {
      this.stop();
    });

    this.setSource(__SOURCE__);
  }

  async start() {
    this.initBroadcast?.("Connecting global dispatch");
    return new Promise<void>((resolve) => {
      this.client = io(this.server.url, { transports: ["websocket"] });
      this.client.on("connect", async () => {
        await this.connected();
        resolve();
      });

      this.client.on("kicked", () => {
        const daemon = Stack.getProcess<IUserDaemon>(+Env.get("userdaemon_pid"));
        daemon?.power?.logoff();
      });
    });
  }

  async stop(broadcast?: (m: string) => void) {
    broadcast?.("Stopping development environment");
    this.client?.disconnect();
  }

  //#endregion

  async connected() {
    this.Log(`Connected, authorizing using token`);
    this.client?.emit("authorize", Daemon!.token);

    await new Promise<void>((resolve, reject) => {
      this.client?.once("authorized", () => {
        this.Log(`Global Dispatch is good to go :D`);

        Env.set("dispatch_sock_id", this.client?.id);
        this.authorized = true;
        this.enableListener();
        resolve();
      });

      this.client?.once("auth-failed", () => {
        this.Log(`The server rejected our token :(`);

        reject();
      });
    });
  }

  sendUpdate() {
    this.emit("update", {
      lastActive: Date.now(),
      processCount: Stack.store().size,
      lastApp: Stack.renderer?.lastInteract?.app?.data,
    });
  }

  subscribe<T extends Array<any> = any[]>(event: string, callback: (...data: T) => void) {
    this.Log(`Subscribing to event ${event}`);
    this.client?.on(event, (...data: T) => callback(...data));
  }

  emit(event: string, ...data: any[]) {
    this.Log(`Emitting event ${event} to all other user clients`);
    this.client?.emit("user-dispatch", event, ...data);
  }

  async getClients(): Promise<GlobalDispatchClient[]> {
    try {
      const response = await Backend.get("/user/dispatch", { headers: { Authorization: `Bearer ${Daemon!.token}` } });

      return response.data as GlobalDispatchClient[];
    } catch {
      return [];
    }
  }

  async disconnectClient(clientId: string) {
    try {
      const response = await Backend.post(
        `/user/dispatch/kick/${clientId}`,
        {},
        { headers: { Authorization: `Bearer ${Daemon!.token}` } }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }

  enableListener() {
    this?.subscribe("update-preferences", async (preferences: UserPreferences) => {
      Daemon.preferencesCtx!.syncLock = true;
      await Sleep(0);
      Daemon.preferencesCtx!.preferences.set(preferences);
      await Sleep(0);
      Daemon.preferencesCtx!.syncLock = false;
    });

    this?.subscribe("fs-flush-folder", (path) => {
      SysDispatch.dispatch("fs-flush-folder", path);
    });

    this?.subscribe("fs-flush-file", (path) => {
      SysDispatch.dispatch("fs-flush-file", path);
    });
  }
}

export const globalDispatchService: Service = {
  name: "Global Dispatch",
  description: "Host process for realtime server communication",
  process: GlobalDispatch,
  initialState: "started",
};
