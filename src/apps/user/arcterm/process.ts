import type { IUserDaemon } from "$interfaces/daemon";
import type { IArcTerminal, ITerminalWindowRuntime } from "$interfaces/terminal";
import { Env, Fs, Stack } from "$ts/env";
import { Process } from "$ts/kernel/mods/stack/process/instance";
import { ArcTerminal } from "$ts/terminal";
import { DefaultColors } from "$ts/terminal/store";
import { UserPaths } from "$ts/user/store";
import { hexToRgb } from "$ts/util/color";
import { arrayBufferToText } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import type { AppProcessData } from "$types/app";
import type { ArcTermConfiguration } from "$types/terminal";

export class ArcTermRuntime extends Process {
  readonly CONFIG_PATH = join(UserPaths.Configuration, "ArcTerm/arcterm.conf");

  config?: ArcTermConfiguration;
  term: IArcTerminal | undefined;
  path: string | undefined;
  app: AppProcessData;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, path?: string) {
    super(pid, parentPid);

    this.path = path;
    this.app = app;

    this.name = "ArcTermRuntime";

    this.setSource(__SOURCE__);
  }

  protected async start(): Promise<any> {
    const daemonPid = +Env.get("userdaemon_pid");
    const daemon = Stack.getProcess<IUserDaemon>(daemonPid);

    await this.readConfig();

    if (!daemon) return false;

    const proc = await daemon.spawn?.spawnApp<ITerminalWindowRuntime>("TerminalWindow", this.pid);

    if (!proc) return false;

    proc.app = this.app;
    proc.windowTitle.set("ArcTerm");
    proc.windowIcon.set(this.app.data.metadata.icon);

    proc.term!.options.theme = {
      // RED
      brightRed: this.config?.red || DefaultColors.red,
      red: this.config?.red || DefaultColors.red,
      // GREEN
      brightGreen: this.config?.green || DefaultColors.green,
      green: this.config?.green || DefaultColors.green,
      // YELLOW
      brightYellow: this.config?.yellow || DefaultColors.yellow,
      yellow: this.config?.yellow || DefaultColors.yellow,
      // BLUE
      brightBlue: this.config?.blue || DefaultColors.blue,
      blue: this.config?.blue || DefaultColors.blue,
      // CYAN
      brightCyan: this.config?.cyan || DefaultColors.cyan,
      cyan: this.config?.cyan || DefaultColors.cyan,
      // MAGENTA
      brightMagenta: this.config?.magenta || DefaultColors.magenta,
      magenta: this.config?.magenta || DefaultColors.magenta,
      // FORE/BACK GROUND
      background: this.config?.background || DefaultColors.background,
      foreground: this.config?.foreground || DefaultColors.foreground,
      brightBlack: this.config?.brightBlack || DefaultColors.brightBlack,
    };

    const window = proc.getWindow();

    window?.style.setProperty(
      "--terminal-background",
      `rgba(${hexToRgb(this.config?.background || DefaultColors.background).join(", ")}, ${this.config?.backdropOpacity ?? DefaultColors.backdropOpacity})`
    );
    window?.style.setProperty("--terminal-background-inactive", this.config?.background || DefaultColors.background);
    window?.style.setProperty("--fg", this.config?.foreground || DefaultColors.foreground);

    this.term = await Stack.spawn<IArcTerminal>(
      ArcTerminal,
      daemon.workspaces?.getCurrentDesktop(),
      daemon.userInfo?._id,
      proc.pid,
      proc.term,
      this.path,
      this.config
    );
  }

  async readConfig() {
    const contents = await Fs.readFile(this.CONFIG_PATH);

    if (!contents) return;

    const json = JSON.parse(arrayBufferToText(contents)!);

    this.config = json as ArcTermConfiguration;
  }

  //#endregion
}
