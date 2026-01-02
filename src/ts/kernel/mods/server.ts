import { getKMod } from "$ts/env";
import { tryJsonParse } from "$ts/json";
import type { SystemDispatchType, ConstructedWaveKernel, ServerManagerType } from "$types/kernel";
import type { ServerInfo, ServerOption } from "$types/server";
import axios from "axios";
import { Backend } from "../../server/axios";
import { KernelModule } from "../module";

export const VALIDATION_STR = "thisWonderfulArcOSServerIdentifiedByTheseWordsPleaseDontSteal(c)IzKuipers";

export class ServerManager extends KernelModule {
  private get SERVERS_LOCALSTORAGE_KEY() {
    return "v7-servers";
  }
  private get CURRENT_LOCALSTORAGE_KEY() {
    return "v7-currentserver";
  }
  private currentServer?: ServerOption;
  private dispatch: SystemDispatchType;
  public connected: boolean = false;
  public serverInfo: ServerInfo | undefined;
  public previewBranch?: string;
  public servers: ServerOption[] = [];

  get url() {
    return this.currentServer?.url;
  }

  get authCode() {
    return this.currentServer?.authCode;
  }

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

    this.dispatch = getKMod<SystemDispatchType>("dispatch");
  }

  async _init() {
    const fromMeta = import.meta.env.DW_SERVER_URL;

    if (!fromMeta) throw new Error("This ArcOS instance is improperly configured. DW_SERVER_URL is not set.");
    if (!fromMeta.startsWith("http") || fromMeta.endsWith("/"))
      throw new Error("This ArcOS instance is improperly configured. DW_SERVER_URL is malformed.");

    this.loadServers();

    await this.switchServer(localStorage.getItem(this.CURRENT_LOCALSTORAGE_KEY) || fromMeta);

    if (!this.currentServer) await this.switchServer(fromMeta);
    if (!this.currentServer)
      throw new Error("Didn't get a server URL after switching to current server. Has localStorage been manually altered?");
  }

  //#endregion

  private async testConnection(server: ServerOption) {
    this.Log(`testConnection: ${server.url}`);

    this.isKmod();

    const response = await axios.get(`/ping`, {
      timeout: 3000,
      timeoutErrorMessage: "We're offline",
      baseURL: server.url,
      params: server.authCode ? { authcode: server.authCode } : {},
    });
    if (response.status !== 200) throw new Error("Invalid response from server");

    const data = response.data as ServerInfo;
    const { validation } = data;

    if (validation !== VALIDATION_STR) throw new Error("Server validation string doesn't match ours");

    this.serverInfo = data;
    this.currentServer = server;
    this.checkIfPreviewDeployment();
    this.Log("Connection is good to go :D");
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

  async switchServer(url: string) {
    this.Log(`switchServer: ${url}`);

    this.connected = false;

    try {
      const server = this.servers.find((s) => s.url === url);
      if (!server) return false;

      this.currentServer = server;

      await this.testConnection(server);

      this.dispatch.dispatch("server-connected");
      this.connected = true;
      localStorage.setItem(this.CURRENT_LOCALSTORAGE_KEY, server.url);

      Backend.defaults.params = server.authCode ? { authcode: server.authCode } : {};
      Backend.defaults.baseURL = server.url;

      return true;
    } catch (e) {
      this.dispatch.dispatch("server-connection-failed");

      this.Log(`${e}`);
      return false;
    }
  }

  loadServers() {
    this.Log(`loadServers`);

    const stored = localStorage.getItem(this.SERVERS_LOCALSTORAGE_KEY);
    if (!stored) return this.resetServers();

    const array = tryJsonParse<ServerOption[]>(stored);
    if (typeof array === "string" || !Array.isArray(array)) return this.resetServers();

    this.servers = array;
  }

  writeServers(servers: ServerOption[]) {
    this.Log(`writeServers`);
    this.dispatch.dispatch("server-updated", [servers], true);

    const string = JSON.stringify(servers, null, 0);
    localStorage.setItem(this.SERVERS_LOCALSTORAGE_KEY, string);
    localStorage.setItem(this.CURRENT_LOCALSTORAGE_KEY, this.currentServer?.url ?? import.meta.env.DW_SERVER_URL);
    this.servers = servers;
  }

  resetServers() {
    this.Log(`resetServers`);

    this.writeServers([
      {
        url: import.meta.env.DW_SERVER_URL,
        authCode: import.meta.env.DW_SERVER_AUTHCODE ?? "",
        name: "Main server",
        system: true,
        icon: "cloud-cog",
      },
    ]);
  }

  addServer(config: ServerOption) {
    this.Log(`addServer: ${config.url} (${config.authCode ? "Private" : "Public"})`);

    if (this.isAdded(config.url)) return false;

    this.writeServers([...this.servers, config]);

    return true;
  }

  removeServer(url: string) {
    this.Log(`removeServer: ${url}`);
    if (!this.isAdded(url)) return false;

    this.writeServers(this.servers.filter((s) => s.url !== url));

    return true;
  }

  isAdded(url: string) {
    return !!this.servers.find((s) => url === s.url);
  }
}
