import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { Server } from "$ts/env";
import { ErrorIcon, WarningIcon } from "$ts/images/dialog";
import { GoodStatusIcon } from "$ts/images/status";
import type { AppProcessData } from "$types/app";
import axios from "axios";

export class AddServerRuntime extends AppProcess {
  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
  }

  async start() {}

  async stop() {}

  async render() {}

  //#endregion LIFECYCLE

  async addServer(hostname: string, port: number, authCode?: string) {
    this.Log(`addServer: ${hostname}:${port}`);

    const url = this.createServerUrl(hostname, port);

    if (Server.isAdded(url)) {
      MessageBox(
        {
          title: "Server already added",
          message: "The server you specified is already added to the list of servers.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: WarningIcon,
        },
        this.parentPid,
        true
      );

      return;
    }

    const isValid = await this.callServer(url, authCode);

    if (!isValid) {
      MessageBox(
        {
          title: "Failed to connect",
          message:
            "ArcOS called the server you specified, but nobody picked up. Please check the information, and then try again.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: ErrorIcon,
        },
        this.parentPid,
        true
      );

      return;
    }

    Server.addServer({
      url,
      authCode,
    });
    this.closeWindow();
  }

  createServerUrl(hostname: string, port: number) {
    const proto = port === 443 ? "https" : "http";
    const portStr = port === 443 ? "" : `:${port}`;

    return `${proto}://${hostname}${portStr}`.toLowerCase();
  }

  private async callServer(url: string, authCode?: string) {
    this.Log(`callServer: ${url}`);

    try {
      const response = await axios.get(`/ping`, {
        timeout: 3000,
        timeoutErrorMessage: "We're offline",
        baseURL: url,
        params: authCode ? { authcode: authCode } : {},
      });
      if (response.status !== 200) return false;

      return true;
    } catch {
      return false;
    }
  }

  async testServer(hostname: string, port: number, authCode?: string) {
    this.Log(`testServer: ${hostname}:${port}`);

    const url = this.createServerUrl(hostname, port);
    const isValid = await this.callServer(url, authCode);

    if (!isValid) {
      MessageBox(
        {
          title: "Failed to connect",
          message:
            "ArcOS called the server you specified, but nobody picked up. Please check the information, and then try again.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: ErrorIcon,
        },
        this.parentPid,
        true
      );
    } else {
      MessageBox(
        {
          title: "Connection established!",
          message:
            "ArcOS called the server, they picked up, and we're now having a lovely conversation. Click <b>Add</b> to add this server to the list.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: GoodStatusIcon,
        },
        this.parentPid,
        true
      );
    }
  }
}
