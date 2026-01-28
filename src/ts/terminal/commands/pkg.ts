import { DistributionServiceProcess } from "$ts/distrib";
import { Fs } from "$ts/env";
import { UserPaths } from "$ts/server/user/store";
import { Plural } from "$ts/util";
import { formatBytes, join } from "$ts/util/fs";
import { ElevationLevel } from "$types/elevation";
import type { Arguments } from "$types/terminal";
import dayjs from "dayjs";
import type { ArcTerminal } from "..";
import { TerminalProcess } from "../process";
import { BRBLUE, BRGREEN, BRPURPLE, CLRROW, CURUP, RESET } from "../store";

const typeCaptions: Record<string, string> = {
  mkdir: "Creating folder",
  file: "Writing file",
  registration: "Registering",
  other: "Status",
};

export class PkgCommand extends TerminalProcess {
  public static keyword: string = "pkg";
  public static description: string = "ArcOS package manager commandline";
  private distrib?: DistributionServiceProcess;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  //#endregion

  protected async main(term: ArcTerminal, _: Arguments, argv: string[]): Promise<number> {
    this.distrib = this.term!.daemon!.serviceHost!.getService<DistributionServiceProcess>("DistribSvc")!;

    if (!argv[0]) {
      this.term?.Error("Missing arguments.");
      return 1;
    }

    if (!this.distrib) {
      term?.Error("DistribSvc isn't running");
      return 1;
    }

    if (!this.distrib.preferences?.().security.enableThirdParty && argv[0].toLowerCase() !== "help") {
      this.term?.Error("\nYou need to enable third-party applications\nbefore proceeding. It's in the Security Center.");
    }

    switch (argv[0].toLowerCase()) {
      case "install":
        return await this.installPackage(argv[1]);

      case "updateall":
        return await this.updateAll();

      case "update":
        return await this.update(argv[1]);

      case "reinstall":
        return await this.reinstall(argv[1]);

      case "remove":
        return await this.removePackage(argv[1]);

      case "search":
        argv.shift();
        return await this.searchPackages(argv.join(" ").trim());

      case "help":
        return await this.help();

      case "list":
        return await this.listAll();

      default:
        this.term?.Error(`Invalid operation '${argv[0]}'.`);
        return 1;
    }
  }

  async installPackage(name: string): Promise<number> {
    const pkg = await this.distrib!.getStoreItemByName(name);

    const elevated = await this.elevate();

    if (!elevated) return 1;

    if (!pkg) {
      this.term?.Error(`Package '${name}' doesn't exist.`);
      return 1;
    }

    const installed = await this.distrib!.getInstalledStoreItem(pkg._id);

    if (installed) {
      this.term?.Warning(`already installed.\n\nUse 'pkg update ${name}' to update it.`, `${pkg.name}`);
      return 1;
    }

    this.term?.rl?.println(
      `Installing ${BRGREEN}${pkg.name}${RESET} v${pkg.pkg.version} by ${BRGREEN}${pkg.pkg.author}${RESET}.`
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

    this.term?.rl?.println("");
    this.term?.rl?.println("Loading...");

    const installer = await this.distrib!.storeItemInstaller(pkg._id, (prog) => {
      this.term?.rl?.println(
        `${CURUP}${CLRROW}Downloading package: ${BRBLUE}${formatBytes(prog.value)}${RESET} of ${BRBLUE}${formatBytes(
          prog.max
        )}${RESET} (${((100 / prog.max) * prog.value).toFixed(2)}%)`
      );
    });

    if (!installer) {
      this.term?.Error("Failed to create installer process.");
      return 1;
    }

    installer.status.subscribe((v) => {
      const entries = Object.entries(v);
      const last = entries[entries.length - 1];

      if (!last) return;

      switch (last[1].status) {
        case "done":
          break;
        case "failed":
          this.term?.Error(last[1].content, `${CURUP}${CLRROW}${typeCaptions[last[1].type]} Failed`);
        case "working":
          this.term?.Info(last[1].content, `${CURUP}${CLRROW}${typeCaptions[last[1].type]}`);
      }
    });

    const result = await installer?.__go();

    if (!result) {
      this.term?.Error(`Installation of '${name}' failed.`);

      return 1;
    }

    this.term?.rl?.println(`${CURUP}${CLRROW}Done.`);

    return 0;
  }

  async removePackage(name: string): Promise<number> {
    const local = await this.distrib?.getInstalledStoreItemById(name);

    const elevated = await this.elevate();

    if (!elevated) return 1;

    if (!local) {
      this.term?.Error(`not installed.`, name);
      return 1;
    }

    const confirm = await this.term?.rl?.read(`Do you want to remove this package (y/n)? `);

    if (confirm?.toLowerCase() !== "y") {
      this.term?.Error("Abort.");
      return 1;
    }

    this.term?.rl?.println(`\n${BRGREEN}Now uninstalling '${local.name}'...${RESET}\n`);

    this.term?.rl?.println("Loading...");

    const result = await this.distrib?.uninstallPackage(local.pkg.appId, true, (stage) => {
      this.term?.rl?.println(`${CURUP}${CLRROW}${stage}`);
    });

    if (!result) {
      this.term?.Error(`Uninstalling the package failed!`, `\nError`);
      return 1;
    }

    this.term?.rl?.println(`${CURUP}${CLRROW}${CURUP}${CURUP}${CLRROW}Done.`);

    return 0;
  }

  async searchPackages(query: string): Promise<number> {
    const result = await this.distrib!.searchStoreItems(query);

    if (!result.length) {
      this.term?.Error(`Your search for '${query}' returned no results.`);
      return 1;
    }

    for (const item of result) {
      this.term?.rl?.println(item.name);
    }

    return 0;
  }

  async updateAll(): Promise<number> {
    this.term?.rl?.println("Checking for updates...");

    const elevated = await this.elevate();

    if (!elevated) return 1;

    const outdatedPackages = await this.distrib!.checkForAllStoreItemUpdates();

    if (!outdatedPackages.length) {
      this.term?.rl?.println(`${CURUP}${CLRROW}There are no updates available.`);
      return 0;
    }

    this.term?.rl?.println(
      `\nGood news: ${BRBLUE}${outdatedPackages.length}${RESET} ${Plural("package", outdatedPackages.length)} can be updated.\n`
    );

    for (const outdated of outdatedPackages) {
      this.term?.rl?.println(
        ` - ${outdated.name} - from ${BRGREEN}${outdated.oldVer}${RESET} to ${BRGREEN}${outdated.newVer}${RESET}`
      );
    }

    const confirm = await this.term?.rl?.read(`\nDo you want to update these packages (y/n)? `);

    this.term?.rl?.println("");

    if (confirm?.toLowerCase() !== "y") {
      this.term?.Error("Abort.");
      return 1;
    }

    for (const outdated of outdatedPackages) {
      this.term?.rl?.println(`Updating ${BRBLUE}${outdated.name}${RESET}...`);

      this.term?.rl?.println("Loading...");

      const installer = await this.distrib!.updateStoreItem(outdated.pkg._id, true, (prog) => {
        this.term?.rl?.println(
          `${CURUP}${CLRROW}Downloading package: ${BRBLUE}${formatBytes(prog.value)}${RESET} of ${BRBLUE}${formatBytes(
            prog.max
          )}${RESET} (${((100 / prog.max) * prog.value).toFixed(2)}%)`
        );
      });

      if (!installer) {
        this.term?.Warning("Failed start update", outdated.name);
        continue;
      }

      await this.distrib!.removeStoreItemFromInstalled(outdated.pkg._id);

      installer.status.subscribe((v) => {
        const entries = Object.entries(v);
        const last = entries[entries.length - 1];

        if (!last) return;

        switch (last[1].status) {
          case "done":
            break;
          case "failed":
            this.term?.Error(last[1].content, `${CURUP}${CLRROW}${typeCaptions[last[1].type]} Failed`);
          case "working":
            this.term?.Info(last[1].content, `${CURUP}${CLRROW}${typeCaptions[last[1].type]}`);
        }
      });

      this.term?.rl?.println(`${CURUP}${CLRROW}Loading...`);

      const result = await installer?.__go();

      if (!result) {
        this.term?.Error(`Failed to finish update`, outdated.name);
      }

      this.term?.rl?.println(
        `${CURUP}${CLRROW}${CURUP}${CLRROW}Updated ${BRBLUE}${outdated.name}${RESET} to version ${outdated.newVer}.`
      );
    }

    this.term?.rl?.println("\nDone.");

    return 0;
  }

  async update(name: string): Promise<number> {
    const local = await this.distrib?.getInstalledStoreItemById(name);

    const elevated = await this.elevate();

    if (!elevated) return 1;

    if (!local) {
      this.term?.Error(`not installed`, name);
      return 1;
    }

    this.term?.rl?.println(`Updating ${BRBLUE}${local.name}${RESET}...`);

    const installer = await this.distrib!.updateStoreItem(local._id, false, (prog) => {
      this.term?.rl?.println(
        `${CURUP}${CLRROW}Downloading package: ${BRBLUE}${formatBytes(prog.value)}${RESET} of ${BRBLUE}${formatBytes(
          prog.max
        )}${RESET} (${((100 / prog.max) * prog.value).toFixed(2)}%)`
      );
    });

    if (!installer) {
      this.term?.rl?.println(`${CURUP}${CLRROW}Already up to date.`);
      return 1;
    }

    await this.distrib!.removeStoreItemFromInstalled(local._id);

    installer.status.subscribe((v) => {
      const entries = Object.entries(v);
      const last = entries[entries.length - 1];

      if (!last) return;

      switch (last[1].status) {
        case "done":
          break;
        case "failed":
          this.term?.Error(last[1].content, `${CURUP}${CLRROW}${typeCaptions[last[1].type]} Failed`);
        case "working":
          this.term?.Info(last[1].content, `${CURUP}${CLRROW}${typeCaptions[last[1].type]}`);
      }
    });

    this.term?.rl?.println(`${CURUP}${CLRROW}Loading...`);

    const result = await installer?.__go();

    if (!result) {
      this.term?.Error(`Failed to finish update`, name);
    }

    this.term?.rl?.println(`${CURUP}${CLRROW}${CURUP}${CLRROW}Updated ${BRBLUE}${name}${RESET}.`);

    return 0;
  }

  async reinstall(name: string): Promise<number> {
    const local = await this.distrib?.getInstalledStoreItemById(name);

    const elevated = await this.elevate();

    if (!elevated) return 1;

    if (!local) {
      this.term?.Error("not installed", name);
      return 1;
    }

    this.term?.rl?.println("Deleting app preferences...");

    this.distrib?.preferences.update((v) => {
      v.appPreferences[name] = {};
      return v;
    });

    this.term?.rl?.println(`${CURUP}${CLRROW}Deleting configuration...`);

    try {
      await Fs.deleteItem(join(UserPaths.Configuration, name));
    } catch {}

    this.term?.rl?.println(`${CURUP}${CLRROW}Uninstalling app...`);

    const uninstallResult = await this.distrib?.uninstallPackage(local.pkg.appId, true, (stage) => {
      this.term?.rl?.println(`${CURUP}${CLRROW}${stage}`);
    });

    if (!uninstallResult) {
      this.term?.Warning("Uninstall failed; proceeding anyway.");
      this.term?.rl?.println("");
    }

    const installer = await this.distrib!.storeItemInstaller(local._id, (prog) => {
      this.term?.rl?.println(
        `${CURUP}${CLRROW}Downloading package: ${BRBLUE}${formatBytes(prog.value)}${RESET} of ${BRBLUE}${formatBytes(
          prog.max
        )}${RESET} (${((100 / prog.max) * prog.value).toFixed(2)}%)`
      );
    });

    if (!installer) {
      this.term?.Error("Failed to create installer process.");
      return 1;
    }

    installer.status.subscribe((v) => {
      const entries = Object.entries(v);
      const last = entries[entries.length - 1];

      if (!last) return;

      switch (last[1].status) {
        case "done":
          break;
        case "failed":
          this.term?.Error(last[1].content, `${CURUP}${CLRROW}${typeCaptions[last[1].type]} Failed`);
        case "working":
          this.term?.Info(last[1].content, `${CURUP}${CLRROW}${typeCaptions[last[1].type]}`);
      }
    });

    this.term?.rl?.println(`${CURUP}${CLRROW}Loading...`);

    const installResult = await installer?.__go();

    if (!installResult) {
      this.term?.Error(`Installation of '${name}' failed.`);

      return 1;
    }

    this.term?.rl?.println(`${CURUP}${CLRROW}Done.`);

    return 0;
  }

  async help(): Promise<number> {
    this.term?.rl?.println("ArcOS Package Manager\n\nUsage: pkg <command> [...]\n");
    this.term?.rl?.println("Commands:");
    this.term?.rl?.println("- install <name>      Installs the specified package");
    this.term?.rl?.println("- remove <name>       Removes a package, if installed");
    this.term?.rl?.println("- update <name>       If available, updates the package");
    this.term?.rl?.println("- updateall           Performs updates on all packages that have them");
    this.term?.rl?.println("- reinstall <name>    Completely reinstalls a package, including configuration");
    this.term?.rl?.println("- search <query>      Searches all packages for a string");
    this.term?.rl?.println("- help                Shows this help listing.");
    this.term?.rl?.println("- list                Lists all packages on the server. Installed apps are blue.");
    this.term?.rl?.println(
      "\nThird-party applications have to be turned on in the Security Center in order to use this command."
    );

    return 0;
  }

  async listAll(): Promise<number> {
    const all = await this.distrib!.getAllStoreItems();
    const installed = await this.distrib!.loadInstalledStoreItemList();

    this.term?.rl?.println("");

    for (const item of all) {
      const color = installed.filter((i) => item._id === i._id)[0] ? BRBLUE : RESET;
      this.term?.rl?.println(`- ${color}${item.name}${RESET}`);
    }

    return 0;
  }

  async elevate(): Promise<boolean> {
    return await this.term!.elevate({
      what: "ArcOS needs your permission to run the pkg command.",
      image: this.term?.daemon?.icons?.getIconCached("ArcTermIcon")!,
      title: "Package manager",
      description: "ArcTerm command",
      level: ElevationLevel.medium,
    });
  }
}
