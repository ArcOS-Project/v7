import { getKMod } from "$ts/env";
import type { ConstructedWaveKernel, ServerManagerType } from "$types/kernel";
import type { ServerInfo } from "$types/server";
import { LogLevel } from "../../../types/logging";
import { Backend } from "../../server/axios";
import { KernelModule } from "../module";

export const VALIDATION_STR = "thisWonderfulArcOSServerIdentifiedByTheseWordsPleaseDontSteal(c)IzKuipers";

export class ServerManager extends KernelModule {
  private readonly DEFAULT_URL: string = import.meta.env.DW_SERVER_URL;
  public url: string = "";
  public connected: boolean = false;
  public serverInfo: ServerInfo | undefined;
  public previewBranch?: string;

  public static isConnected() {
    const server = getKMod<ServerManagerType>("server", true);

    return server && server.connected;
  }
  public static url() {
    const server = getKMod<ServerManagerType>("server", true);

    return server ? server.url : undefined;
  }

  //#region LIFECYCLE

  constructor(kernel: ConstructedWaveKernel, id: string) {
    super(kernel, id);
  }

  async _init() {
    this.validateServerUrl();

    await this.set(this.DEFAULT_URL, true);
  }

  //#endregion

  private validateServerUrl(serverUrl = this.DEFAULT_URL) {
    this.isKmod();
    this.Log("Getting server URL from environment");

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

      this.checkIfPreviewDeployment();

      return this.connected;
    } catch (e) {
      this.Log(`Failed to connect to server: ${e}`, LogLevel.error);
      return false;
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

  private checkIfPreviewDeployment() {
    const previewBranchName = import.meta.env.DW_PREVIEW_DEP_BRANCH;

    if (!previewBranchName) return false;

    document.title = `ArcOS - PREVIEW ${previewBranchName}`;
    this.previewBranch = previewBranchName;
  }

  public async set(server: string, noError = false) {
    Backend.defaults.baseURL = server;
    this.validateServerUrl(server);
    const result = await this.testConnection();

    if (!noError && !result) throw new Error(`Setting server URL failed: server is unreachable`);
  }

  public async reset() {
    return await this.set(this.DEFAULT_URL);
  }
}
