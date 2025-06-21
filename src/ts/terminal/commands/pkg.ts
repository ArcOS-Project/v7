import { DistributionServiceProcess } from "$ts/distrib";
import { formatBytes } from "$ts/fs/util";
import type { ProcessHandler } from "$ts/process/handler";
import type { Arguments } from "$types/terminal";
import dayjs from "dayjs";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";
import { BRBLUE, BRGREEN, BRPURPLE, RESET } from "../store";

export class PkgCommand extends TerminalProcess {
  public static keyword: string = "pkg";
  public static description: string = "ArcOS package manager commandline";
  private distrib?: DistributionServiceProcess;

  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);
  }

  protected async main(term: ArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    this.distrib = this.term!.daemon!.serviceHost!.getService<DistributionServiceProcess>("DistribSvc")!;

    if (!argv[0]) {
      this.term?.Error("Missing arguments.");
      return 1;
    }

    switch (argv[0]) {
      case "install":
        return await this.installPackage(argv[1]);

      case "remove":
        return await this.removePackage(argv[1]);

      case "search":
        argv.shift();
        return await this.searchPackages(argv.join(" ").trim());

      default:
        this.term?.Error(`Invalid operation '${argv[0]}'.`);
        return 1;
    }
  }

  async installPackage(name: string): Promise<number> {
    const pkg = await this.distrib!.getStoreItemByName(name);

    if (!pkg) {
      this.term?.Error(`Package '${name}' doesn't exist.`);
      return 1;
    }

    const installed = await this.distrib!.getInstalledPackage(pkg._id);

    if (installed) {
      this.term?.Warning(
        `is already installed.\n${" ".repeat(pkg.name.length + 2)}Use 'pkg update ${name}' to update it.`,
        `\n${pkg.name}`
      );
      return 1;
    }

    this.term?.rl?.println(
      `\nInstalling ${BRGREEN}${pkg.name}${RESET} v${pkg.pkg.version} by ${BRGREEN}${pkg.pkg.author}${RESET}.`
    );
    this.term?.rl?.println(`\n${BRBLUE}${pkg.pkg.description}${RESET}\n`);
    this.term?.rl?.println(`${BRPURPLE}Compressed size${RESET}:   ${formatBytes(pkg.size)}`);
    this.term?.rl?.println(`${BRPURPLE}Last updated${RESET}:      ${dayjs(pkg.lastUpdated).format("DD MMM YYYY, HH:mm:ss")}`);
    this.term?.rl?.println(`${BRPURPLE}Downloads${RESET}:         ${pkg.installCount}`);
    this.term?.rl?.println(`${BRPURPLE}Installs to${RESET}:       ${pkg.pkg.installLocation}`);

    const confirm = await this.term?.rl?.read(`\nDo you want to install this package (y/n)? `);

    if (confirm?.toLowerCase() !== "y") {
      this.term?.Error("Abort.");
      return 1;
    }

    const installer = await this.distrib!.storeItemInstaller(pkg._id);

    if (!installer) {
      this.term?.Error("Failed to create installer process.");
      return 1;
    }

    const typeCaptions: Record<string, string> = {
      mkdir: "Creating folder",
      file: "Writing file   ",
      registration: "Registering    ",
      other: "Status         ",
    };

    installer.status.subscribe((v) => {
      const entries = Object.entries(v);
      const last = entries[entries.length - 1];

      if (!last) return;

      switch (last[1].status) {
        case "done":
          break;
        case "failed":
          this.term?.Error(`${last[1].content}`, `${typeCaptions[last[1].type]} Failed`);
        case "working":
          this.term?.Info(`${last[1].content}`, typeCaptions[last[1].type]);
      }
    });

    this.term?.rl?.println("");

    const result = await installer.proc?.go();

    this.term?.rl?.println("");

    if (!result) {
      this.term?.Error(`Installation of '${name}' failed.`);
    }

    this.term?.Info(`Done.`);

    return 0;
  }

  async removePackage(name: string): Promise<number> {
    return 0;
  }

  async searchPackages(query: string): Promise<number> {
    return 0;
  }
}
