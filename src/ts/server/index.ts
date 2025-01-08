import axios from "axios";
import { WaveKernel } from "../kernel";
import { KernelModule } from "../kernel/module";
import { LogLevel } from "../../types/logging";
import { VALIDATION_STR } from "$ts/env";

export class ServerManager extends KernelModule {
  public url: string = "";
  public connected: boolean = false;

  public static isConnected() {
    const kernel = WaveKernel.get();

    if (!kernel) return false;

    const server = kernel.getModule<ServerManager>("server", true);

    return server && server.connected;
  }
  public static url() {
    const kernel = WaveKernel.get();

    if (!kernel) return false;

    const server = kernel.getModule<ServerManager>("server", true);

    return server ? server.url : undefined;
  }

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);
  }

  async _init() {
    this.getServerUrl();

    await this.testConnection();
  }

  private getServerUrl() {
    this.Log("Getting server URL from environment");

    const serverUrl = import.meta.env.DW_SERVER_URL;

    if (!serverUrl) throw new Error("Didn't get a server URL!");

    this.url = serverUrl;
  }

  private async testConnection() {
    this.Log("Testing server connection...");
    try {
      const response = await axios.get(`${this.url}/ping`, {
        timeout: 3000,
        timeoutErrorMessage: "We're offline",
      });

      if (response.status !== 200)
        throw new Error("Invalid response from server");

      const { validation } = response.data as Record<string, string>;

      if (validation !== VALIDATION_STR)
        throw new Error("Server validation string doesn't match ours");

      this.connected = true;

      this.Log("Connection is good to go :D");

      return this.connected;
    } catch (e) {
      this.Log(`Failed to connect to server: ${e}`, LogLevel.error);
    }
  }
}
