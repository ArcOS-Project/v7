import { Env, getKMod, Stack } from "$ts/env";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import type { GlobalDispatchClient } from "$types/dispatch";
import type { ServerManagerType } from "$types/kernel";
import type { Service } from "$types/service";
import io, { Socket } from "socket.io-client";
import { Backend } from "../axios";
import { Daemon, UserDaemon } from "../user/daemon";
import { playDataAsAudio } from "$ts/audio-conversation";

export class GlobalDispatch extends BaseService {
  client: Socket | undefined;
  server: ServerManagerType;
  authorized = false;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(pid, parentPid, name, host);

    this.server = getKMod<ServerManagerType>("server");

    window.addEventListener("beforeunload", () => {
      this.stop();
    });

    this.setSource(__SOURCE__);
  }

  async start() {
    return new Promise<void>((resolve) => {
      this.client = io(this.server.url, { transports: ["websocket"] });

      this.client.onAny((...data) => playDataAsAudio(data.join("")));
      this.client.onAnyOutgoing((...data) => playDataAsAudio(data.join("")));

      this.client.on("connect", async () => {
        await this.connected();
        resolve();
      });

      this.client.on("kicked", () => {
        const daemon = Stack.getProcess<UserDaemon>(+Env.get("userdaemon_pid"));
        daemon?.power?.logoff();
      });
    });
  }

  async stop() {
    this.Log(`Disconnecting websocket`);
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
}

export const globalDispatchService: Service = {
  name: "Global Dispatch",
  description: "Host process for realtime server communication",
  process: GlobalDispatch,
  initialState: "started",
};
