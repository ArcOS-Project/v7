import type { IUserDaemon } from "$interfaces/daemon";
import type { IArcTerminal } from "$interfaces/terminal";
import { ArcOSVersion, Env, Stack, SysDispatch } from "$ts/env";
import { toForm } from "$ts/form";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { Process } from "$ts/process/instance";
import { Backend } from "$ts/server/axios";
import { LoginUser } from "$ts/server/user/auth";
import { UserDaemon } from "$ts/server/user/daemon";
import { Sleep } from "$ts/sleep";
import type { UserInfo } from "$types/user";
import { ClipboardAddon } from "@xterm/addon-clipboard";
import { FitAddon } from "@xterm/addon-fit";
import { ImageAddon } from "@xterm/addon-image";
import { Unicode11Addon } from "@xterm/addon-unicode11";
import { WebLinksAddon } from "@xterm/addon-web-links";
import Cookies from "js-cookie";
import { Terminal } from "xterm";
import { ArcTerminal } from "..";
import type { MigrationService } from "../../migrations";
import { Readline } from "../readline/readline";
import { BRRED, CLRROW, CURUP, DefaultColors, RESET } from "../store";

export class TerminalMode extends Process {
  userDaemon?: IUserDaemon;
  target: HTMLDivElement;
  term?: Terminal;
  rl?: Readline;
  arcTerm?: IArcTerminal;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, target: HTMLDivElement, wrapper: HTMLDivElement) {
    super(pid, parentPid);

    this.target = target;
    this.name = "TerminalMode";

    this.setSource(__SOURCE__);
  }

  async start() {
    await this.initializeTerminal();

    if (await this.loadToken()) return;

    return await this.loginPrompt();
  }

  //#endregion

  async initializeTerminal() {
    const term = new Terminal({
      allowProposedApi: true,
      allowTransparency: true,
      cursorStyle: "bar",
      fontSize: 14,
      theme: {
        brightRed: DefaultColors.red,
        red: DefaultColors.red,
        brightGreen: DefaultColors.green,
        green: DefaultColors.green,
        brightYellow: DefaultColors.yellow,
        yellow: DefaultColors.yellow,
        brightBlue: DefaultColors.blue,
        blue: DefaultColors.blue,
        brightCyan: DefaultColors.cyan,
        cyan: DefaultColors.cyan,
        brightMagenta: DefaultColors.magenta,
        magenta: DefaultColors.magenta,
      },
      scrollback: 999999,
    });

    const fitAddon = new FitAddon();
    const clipboardAddon = new ClipboardAddon();
    const imageAddon = new ImageAddon();
    const unicode11Addon = new Unicode11Addon();
    const webLinksAddon = new WebLinksAddon();

    this.term = term;

    term.loadAddon(fitAddon);
    term.loadAddon(clipboardAddon);
    term.loadAddon(imageAddon);
    term.loadAddon(unicode11Addon);
    term.loadAddon(webLinksAddon);
    term.open(this.target);
    fitAddon.fit();

    new ResizeObserver(() => fitAddon.fit()).observe(this.target);

    const rl = await Stack.spawn<Readline>(Readline, undefined, this.userDaemon?.userInfo?._id, this.pid, this);
    this.term.loadAddon(rl!);
    this.rl = rl;
  }

  async proceed(username: string, password: string) {
    this.Log(`Trying login of '${username}'`);

    const token = await LoginUser(username, password);
    if (!token) return false;

    return await this.startDaemon(token, username);
  }

  async startDaemon(token: string, username: string): Promise<boolean> {
    try {
      const userDaemon = await Stack.spawn<IUserDaemon>(UserDaemon, undefined, "SYSTEM", 1, token, username);

      const broadcast = (m: string) => {
        this.rl?.println(`${CURUP}${CLRROW}${m}`);
      };
      this.rl?.println(`Starting daemon`);

      if (!userDaemon) {
        throw new Error("Daemon process didn't come up.");
      }

      this.saveToken(userDaemon);

      const userInfo = await userDaemon.account!.getUserInfo();

      if (!userInfo) {
        this.rl?.println(`Failed to request user info`);
        return false;
      }

      if (userInfo.hasTotp && userInfo.restricted) {
        const unlocked = await this.askForTotp(token);

        if (!unlocked) {
          this.rl?.println(`2FA code invalid!`);
          await userDaemon.account?.discontinueToken();
          await userDaemon.killSelf();
          return false;
        }
      }

      broadcast(`Starting filesystem`);
      await userDaemon.init?.startFilesystemSupplier();

      broadcast(`Starting synchronization`);
      await userDaemon.init?.startPreferencesSync();

      broadcast(`Notifying login activity`);
      await userDaemon.activity?.logActivity(`login`);

      broadcast(`Starting service host`);
      await userDaemon.init?.startServiceHost(async (serviceStep) => {
        if (serviceStep.id === "AppStorage") {
          broadcast(`Loading apps...`);
          await userDaemon.appreg!.initAppStorage(userDaemon.appStorage()!, (app) => {
            broadcast(`Loading apps... ${app.id}`);
          });
        } else {
          broadcast(`Started ${serviceStep.id}`);
        }
      });

      broadcast(`Connecting global dispatch`);
      await userDaemon.activateGlobalDispatch();

      broadcast(`Starting drive notifier watcher`);
      userDaemon.init!.startDriveNotifierWatcher();

      broadcast(`Starting permission manager`);
      await userDaemon.init!.startPermissionHandler();

      broadcast(`Starting share management`);
      await userDaemon.init!.startShareManager();

      broadcast(`Indexing your files`);
      await Backend.post("/fs/index", {}, { headers: { Authorization: `Bearer ${userDaemon.token}` } });

      await userDaemon.serviceHost
        ?.getService<MigrationService>("MigrationSvc")
        ?.runMigrations((m) => this.rl?.println(`${CURUP}${CLRROW}${m}`));

      if (userDaemon.userInfo.admin) {
        broadcast(`Activating admin bootstrapper`);
        await userDaemon.activateAdminBootstrapper();
      }

      broadcast(`Starting status refresh`);
      await userDaemon.init!.startSystemStatusRefresh();

      broadcast(`Refreshing app storage`);
      SysDispatch.dispatch(`app-store-refresh`);

      Env.set("currentuser", username);
      Env.set("shell_pid", undefined);

      userDaemon.checks!.checkNightly();

      await Sleep(10);

      this.term?.clear();

      this.arcTerm = await Stack.spawn<IArcTerminal>(ArcTerminal, undefined, userDaemon.userInfo?._id, this.pid, this.term);
      this.arcTerm!.IS_ARCTERM_MODE = true;

      this.term?.focus();

      return true;
    } catch (e) {
      const stack = e instanceof PromiseRejectionEvent ? e.reason.stack : e instanceof Error ? e.stack : "Unknown error";

      this.rl?.println(`\n${BRRED}Failed to start ArcTerm Mode:\n\n${stack}${RESET}`);
      this.rl?.println(`\nArcTerm Mode couldn't start, and ArcOS has been halted.\nTo try again, please reload the page.`);

      return false;
    }
  }

  private async loadToken() {
    this.Log(`Loading token from cookies`);

    const token = Cookies.get(`arcToken`);
    const username = Cookies.get(`arcUsername`);

    if (!token || !username) return false;

    const userInfo = await this.validateUserToken(token);

    if (!userInfo) {
      this.resetCookies();

      return false;
    }

    await this.startDaemon(token, username);

    return true;
  }

  private async validateUserToken(token: string) {
    this.Log(`Validating user token for token login`);

    try {
      const response = await Backend.get(`/user/self`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.status === 200 ? (response.data as UserInfo) : false;
    } catch {
      return false;
    }
  }

  resetCookies() {
    this.Log(`Resetting stored cookie state`);

    Cookies.remove(`arcToken`);
    Cookies.remove(`arcUsername`);
  }

  async loginPrompt(): Promise<boolean> {
    this.rl?.println(`ArcTerm ${ArcOSVersion}-${ArcMode()}_${ArcBuild()}\n`);
    const username = await this.rl?.read(`arcapi.nl login: `);
    const password = await this.rl?.read(`Password:`);

    if (!username || !password) {
      this.rl?.println(`\nLogin incorrect`);
      return await this.loginPrompt();
    }

    const valid = await this.proceed(username, password);

    if (!valid) {
      this.rl?.println(`\nLogin incorrect`);
      return await this.loginPrompt();
    }

    return true;
  }

  private saveToken(daemon: IUserDaemon) {
    const token = daemon.token;
    const username = daemon.username;

    this.Log(`Saving token of '${daemon.username}' to cookies`);

    const cookieOptions = {
      expires: 14,
      domain: import.meta.env.DEV ? "localhost" : location.hostname,
    };

    Cookies.set("arcToken", token, cookieOptions);
    Cookies.set("arcUsername", username, cookieOptions);
  }

  async askForTotp(token: string): Promise<boolean> {
    const code = await this.rl?.read(`Enter 2FA code: `);

    if (!Number(code) || code?.length !== 6) {
      return await this.askForTotp(token);
    }

    try {
      const response = await Backend.post("/totp/unlock", toForm({ code }), {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status !== 200) return false;

      return true;
    } catch {
      return false;
    }
  }
}
