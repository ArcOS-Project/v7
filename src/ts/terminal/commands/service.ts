import type { IArcTerminal } from "$interfaces/terminal";
import { ServiceChangeResultCaptions } from "$ts/servicehost/store";
import type { Arguments } from "$types/terminal";
import dayjs from "dayjs";
import { TerminalProcess } from "../process";
import { BRBLACK, BRBLUE, BRGREEN, BRPURPLE, BRRED, BRWHITE, RESET } from "../store";
import { maxLength } from "$ts/util";

export class ServiceCommand extends TerminalProcess {
  static keyword = "service";
  static description = "Manage ArcOS services";

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);
  }

  protected async main(term: IArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const subCommand = argv.shift();

    if (!term.daemon?.serviceHost) {
      term.Error("The service host isn't running.");
      return 1;
    }

    switch (subCommand) {
      case "start":
        return await this.startCommand(argv, flags);
      case "stop":
        return await this.stopCommand(argv, flags);
      case "restart":
        return await this.restartCommand(argv, flags);
      case "list":
        return await this.listCommand();
      case "info":
        return await this.infoCommand(argv, flags);
      default:
        term.Error(`Unknown subcommand '${subCommand}'`);
        return 1;
    }
  }

  //#endregion

  async startCommand(argv: string[], flags: Arguments): Promise<number> {
    this.term?.rl?.println("");

    const serviceId = argv[0];
    if (!serviceId) {
      this.term?.Error(`Missing arguments`);
      return 1;
    }

    const service = this.term?.daemon?.serviceHost?.getServiceInfo(serviceId);
    if (!service) {
      this.term?.Error(`Service not found`);
      return 1;
    }

    const startResult = await this.term?.daemon?.serviceHost!.startService(serviceId)!;
    if (startResult !== "success") {
      this.term?.Error(`${ServiceChangeResultCaptions[startResult]} (${BRBLACK}${startResult}${RESET})`);
      return 1;
    }

    return 0;
  }

  async stopCommand(argv: string[], flags: Arguments): Promise<number> {
    this.term?.rl?.println("");

    const serviceId = argv[0];
    if (!serviceId) {
      this.term?.Error(`Missing arguments`);
      return 1;
    }

    const service = this.term?.daemon?.serviceHost?.getServiceInfo(serviceId);
    if (!service) {
      this.term?.Error(`Service not found`);
      return 1;
    }

    const stopResult = await this.term?.daemon?.serviceHost!.stopService(serviceId)!;
    if (stopResult !== "success") {
      this.term?.Error(`${ServiceChangeResultCaptions[stopResult]} (${BRBLACK}${stopResult}${RESET})`);
      return 1;
    }

    return 0;
  }

  async restartCommand(argv: string[], flags: Arguments): Promise<number> {
    this.term?.rl?.println("");

    const serviceId = argv[0];
    if (!serviceId) {
      this.term?.Error(`Missing arguments`);
      return 1;
    }

    const service = this.term?.daemon?.serviceHost?.getServiceInfo(serviceId);
    if (!service) {
      this.term?.Error(`Service not found`);
      return 1;
    }

    const restartResult = await this.term?.daemon?.serviceHost!.restartService(serviceId)!;
    if (restartResult !== "success") {
      this.term?.Error(`${ServiceChangeResultCaptions[restartResult]} (${BRBLACK}${restartResult}${RESET})`);
      return 1;
    }

    return 0;
  }

  async listCommand(): Promise<number> {
    this.term?.rl?.println("");

    const services = this.term?.daemon?.serviceHost?.Services()!;

    const padding = maxLength(
      [...services].map(([k]) => k),
      2
    );

    for (const [id, service] of [...services]) {
      const serviceStatus = service.pid ? `${BRGREEN}✔ Running${RESET}` : `${BRRED}✖ Stopped${RESET}`;
      this.term?.rl?.println(`${id.padEnd(padding)} ${serviceStatus} - ${service?.pid ?? `${BRBLACK}No PID${RESET}`}`);
    }

    return 0;
  }

  async infoCommand(argv: string[], flags: Arguments): Promise<number> {
    const serviceId = argv[0];
    if (!serviceId) {
      this.term?.Error(`Missing arguments`);
      return 1;
    }

    const service = this.term?.daemon?.serviceHost?.getServiceInfo(serviceId);
    if (!service) {
      this.term?.Error(`Service not found`);
      return 1;
    }

    this.term?.rl?.println(`\n${BRBLUE}${service.name}${BRBLACK} - ${RESET}${service.description}\n`);

    const serviceStatus = service.pid ? `${BRGREEN}✔ Running${RESET}` : `${BRRED}✖ Stopped${RESET}`;
    const loadedAt = dayjs(service.loadedAt).format("MMM D, HH:mm:ss");
    const changedAt = dayjs(service.changedAt).format("MMM D, HH:mm:ss");

    const rows: Record<string, string> = {
      Status: `${serviceStatus} on PID ${service.pid ?? "<none>"}`,
      State: `${BRPURPLE}${service.pid ? "running" : "stopped"}${RESET} - Changed ${changedAt}`,
      Identifier: `${BRPURPLE}${service.id ?? serviceId}${RESET}`,
      "Loaded At": `${BRPURPLE}${loadedAt}${RESET}`,
    };

    const padding = maxLength(Object.keys(rows), 4);

    for (const row in rows) {
      const str = rows[row];

      this.term?.rl?.println(`${BRWHITE}${`${row}:`.padEnd(padding)}${RESET}${str}`);
    }

    this.term?.rl?.println("");

    return 0;
  }
}
