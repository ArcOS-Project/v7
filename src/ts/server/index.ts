import { VALIDATION_STR } from "$ts/env";
import type { ServerInfo } from "$types/server";
import { LogLevel } from "../../types/logging";
import { WaveKernel } from "../kernel";
import { getKMod, KernelModule } from "../kernel/module";
import { Backend } from "./axios";

export class ServerManager extends KernelModule {
  public url: string = "";
  public connected: boolean = false;
  public serverInfo: ServerInfo | undefined;

  public static isConnected() {
    const server = getKMod<ServerManager>("server", true);

    return server && server.connected;
  }
  public static url() {
    const server = getKMod<ServerManager>("server", true);

    return server ? server.url : undefined;
  }

  //#region LIFECYCLE

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);
  }

  async _init() {
    this.getServerUrl();

    await this.testConnection();
  }

  //#endregion

  private getServerUrl() {
    this.isKmod();

    this.Log("Getting server URL from environment");

    const serverUrl = `${import.meta.env.DW_SERVER_URL || ""}`;

    if (!serverUrl) throw new Error("Didn't get a server URL!");

    if (!serverUrl.startsWith("http") || serverUrl.endsWith("/")) throw new Error("Rejecting malformed server URL");

    this.url = serverUrl;
  }

  private async testConnection() {
    this.isKmod();

    this.Log("Testing server connection...");
    try {
      const response = await Backend.get(`/ping`, {
        timeout: 3000,
        timeoutErrorMessage: "We're offline",
      });

      if (response.status !== 200) throw new Error("Invalid response from server");

      const data = response.data as ServerInfo;

      const { validation } = data;

      if (validation !== VALIDATION_STR) throw new Error("Server validation string doesn't match ours");

      this.connected = true;
      this.serverInfo = data;

      this.Log("Connection is good to go :D");

      return this.connected;
    } catch (e) {
      this.Log(`Failed to connect to server: ${e}`, LogLevel.error);
    }
  }

  async checkUsernameAvailability(username: string) {
    this.isKmod();

    try {
      const response = await Backend.get(`/user/availability/username?name=${username}`);

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async checkEmailAvailability(email: string) {
    this.isKmod();

    try {
      const response = await Backend.get(`/user/availability/email?email=${email}`);

      return response.status === 200;
    } catch {
      return false;
    }
  }
}
