import axios from "axios";
import type { WaveKernel } from "../kernel";
import { KernelModule } from "../kernel/module";
import { LogLevel } from "../../types/logging";

export class ServerManager extends KernelModule {
  public url: string = "";
  public connected: boolean = false;

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);
  }

  async _init() {
    this.getServerUrl();

    await this.testConnection();
  }

  private getServerUrl() {
    this.Log("Getting server URL from environment");

    const serverUrl = import.meta.env.ARCOS_SERVER_URL;

    if (!serverUrl) throw new Error("Didn't get a server URL!");

    this.url = serverUrl;
  }

  private async testConnection() {
    this.Log("Testing server connection...");
    try {
      const response = await axios.get(`${this.url}/ping`);

      this.connected = response.status === 200;

      this.Log("Connection is good to go :D");

      return this.connected;
    } catch (e) {
      this.Log(`Failed to connect to server: ${e}`, LogLevel.error);
    }
  }
}
