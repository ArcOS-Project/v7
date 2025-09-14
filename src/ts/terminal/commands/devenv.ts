import { DevelopmentEnvironment } from "$ts/devenv";
import { DevEnvActivationResultCaptions } from "$types/devenv";
import type { Arguments } from "$types/terminal";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";
import { BRGREEN, RESET } from "../store";

export class DevenvCommand extends TerminalProcess {
  static keyword: string = "devenv";
  static description: string = "Connect to an ArcDev environment";

  commands: Record<string, (term: ArcTerminal, flags: Arguments, argv: string[]) => Promise<number>> = {
    connect: this.connect.bind(this),
    disconnect: this.disconnect.bind(this),
  };

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: ArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const command = argv.shift() || "";

    if (!this.commands[command]) {
      term.Error(`Unknown command '${command}'.`);

      return 1;
    }

    return await this.commands[command](term, flags, argv);
  }

  async connect(term: ArcTerminal, _: Arguments, argv: string[]): Promise<number> {
    const port = +argv[0] || 3128;
    const serviceInfo = term.daemon?.serviceHost?.getServiceInfo("DevEnvironment");

    if (serviceInfo?.pid) {
      term.Error("ArcDev is already running. Disconnect first with 'devenv disconnect'.");
      return 1;
    }

    await term.daemon?.serviceHost?.startService("DevEnvironment");
    const service = term.daemon?.serviceHost?.getService<DevelopmentEnvironment>("DevEnvironment");

    if (!service) {
      term.Warning("Failed to start DevEnvironment service. Please report.");
      return 1;
    }

    const result = await service.connect(port);

    if (result === "success") {
      term.Info(`Now running for ${BRGREEN}${service.meta?.metadata.name}${RESET} (${service.meta?.metadata.appId})`, "Success");
      return 0;
    }

    term.Error(
      `${DevEnvActivationResultCaptions[result]}.\n\nVisit https://go.arcapi.nl/devclient_connfail for more info.`,
      result.toUpperCase()
    );
    await service.disconnect();
    return 1;
  }

  async disconnect(term: ArcTerminal) {
    const service = term.daemon?.serviceHost?.getService<DevelopmentEnvironment>("DevEnvironment");

    if (!service) {
      term.Error("There is no development environment running");
      return 1;
    }

    await term.daemon?.serviceHost?.stopService("DevEnvironment");
    term.Info("Disconnected successfully.");

    return 0;
  }
}
