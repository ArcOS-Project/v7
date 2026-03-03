import type { IMigrationService } from "$interfaces/services/MigrationSvc";
import type { IArcTerminal } from "$interfaces/terminal";
import { maxLength } from "$ts/util";
import type { Arguments } from "$types/terminal";
import { TerminalProcess } from "../process";
import { BRBLUE, BRWHITE, RESET } from "../store";

export class MigrationsCommand extends TerminalProcess {
  static keyword = "migrations";
  static description = "Manage ArcOS configuration migrations";
  private service?: IMigrationService;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);
  }

  protected async main(term: IArcTerminal, flags: Arguments, argv: string[]): Promise<number> {
    const service = term.daemon?.serviceHost?.getService<IMigrationService>("MigrationSvc");

    if (!service) {
      term.Error("Migration service is not running.");
      return 1;
    }

    this.service = service;

    const subCommand = argv.shift();
    this.term?.rl?.println("");

    if (!subCommand) {
      term.Error("Missing arguments.");
      return 1;
    }

    switch (subCommand) {
      case "list":
        return await this.listCommand(argv, flags);
      case "run":
        return await this.runCommand(argv, flags);
      case "info":
        return await this.infoCommand(argv, flags);
      default:
        term.Error(`Unknown subcommand '${subCommand}'`);
        return 1;
    }
  }

  //#endregion

  async listCommand(argv: string[], flags: Arguments): Promise<number> {
    const migrations = this.service!.Config;
    const longest = maxLength(Object.keys(migrations), 2);

    for (const key in migrations) {
      const id = `${key}:`;
      this.term?.rl?.println(`${id.padEnd(longest)} version ${BRBLUE}${migrations[key]}${RESET}`);
    }

    return 0;
  }

  async runCommand(argv: string[], flags: Arguments): Promise<number> {
    const id = argv[0];

    if (!id) {
      this.term?.Error(`Missing arguments.`);
      return 1;
    }

    const migration = this.service!.MIGRATIONS.find((m) => m.name === id);

    if (!migration) {
      this.term?.Error(`Unknown migration '${id}'`);
      return 1;
    }

    const result = await this.service!.runMigration(migration, (status) => {
      this.term?.rl?.println(`${BRBLUE}${migration.name}${RESET}: ${status}`);
    });

    if (result.result !== "err_ok") {
      this.term?.Error(result.errorMessage ?? "Migration failed to run", result.result);
      return 1;
    }

    this.term?.Info(`${result.result}: ${result.successMessage ?? "Migration run successfully."}`);

    return 0;
  }

  async infoCommand(argv: string[], flags: Arguments): Promise<number> {
    const id = argv[0];

    if (!id) {
      this.term?.Error(`Missing arguments.`);
      return 1;
    }

    const migration = this.service!.MIGRATIONS.find((m) => m.name === id);

    if (!migration) {
      this.term?.Error(`Unknown migration '${id}'`);
      return 1;
    }

    this.term?.rl?.println(`${BRBLUE}${migration.name}${RESET} - ${migration.friendlyName}\n `);
    this.term?.rl?.println(`${BRWHITE}Installed version${RESET}: ${this.service!.Config[id] ?? "<none>"}`);
    this.term?.rl?.println(
      `${BRWHITE}Newest version${RESET}:    ${migration.inversional ? "<inversional>" : migration.version}\n`
    );

    if (migration.deprecated) {
      this.term?.Warning("This migration is deprecated and no longer in use.");
    }

    return 0;
  }
}
