import type { ProcessHandler } from "$ts/process/handler";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import type { Service } from "$types/service";
import io, { Socket } from "socket.io-client";

export class GlobalDispatch extends BaseService {
  client: Socket | undefined;
  authorized = false;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(handler, pid, parentPid, name, host);

    window.addEventListener("beforeunload", () => {
      this.stop();
    });
  }

  async activate(token: string): Promise<void> {
    return new Promise<void>((resolve) => {
      this.client = io(import.meta.env.DW_SERVER_URL, { transports: ["websocket"] });
      this.client.on("connect", async () => {
        await this.connected(token);
        resolve();
      });
    });
  }

  async connected(token: string) {
    this.Log(`Connected, authorizing using token`);
    this.client?.emit("authorize", token);

    await new Promise<void>((resolve, reject) => {
      this.client?.once("authorized", () => {
        this.Log(`Global Dispatch is good to go :D`);
        this.env.set("dispatch_sock_id", this.client?.id);
        this.authorized = true;
        resolve();
      });
      this.client?.once("auth-failed", () => {
        this.Log(`The server rejected our token :(`);
        reject();
      });
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

  async stop() {
    this.Log(`Disconnecting websocket`);
    this.client?.disconnect();
  }
}

export const globalDispatchService: Service = {
  name: "Global Dispatch",
  description: "Host process for realtime server communication",
  process: GlobalDispatch,
  initialState: "started",
};
