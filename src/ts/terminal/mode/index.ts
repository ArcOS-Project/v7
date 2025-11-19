import { ArcOSVersion, KernelStack } from "$ts/env";
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
import { Readline } from "../readline/readline";
import { BRRED, CLRROW, CURUP, RESET } from "../store";

export class TerminalMode extends Process {
  userDaemon?: UserDaemon;
  target: HTMLDivElement;
  term?: Terminal;
  rl?: Readline;
  arcTerm?: ArcTerminal;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, target: HTMLDivElement) {
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
        brightRed: "#ff7e7e",
        red: "#ff7e7e",
        brightGreen: "#82ff80",
        green: "#82ff80",
        brightYellow: "#ffe073",
        yellow: "#ffe073",
        brightBlue: "#96d3ff",
        blue: "#96d3ff",
        brightCyan: "#79ffd0",
        cyan: "#79ffd0",
        brightMagenta: "#d597ff",
        magenta: "#d597ff",
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

    const rl = await KernelStack().spawn<Readline>(Readline, undefined, this.userDaemon?.userInfo?._id, this.pid, this);
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
      const userDaemon = await KernelStack().spawn<UserDaemon>(UserDaemon, undefined, "SYSTEM", 1, token, username);

      this.rl?.println(`Starting daemon`);

      if (!userDaemon) {
        this.rl?.println(`Failed to start user daemon`);
        return false;
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

      this.rl?.println(`${CURUP}${CLRROW}Starting filesystem`);
      await userDaemon.filesystemContext?.startFilesystemSupplier();

      this.rl?.println(`${CURUP}${CLRROW}Starting synchronization`);
      await userDaemon.preferencesContext?.startPreferencesSync();

      this.rl?.println(`${CURUP}${CLRROW}Notifying login activity`);
      await userDaemon.activityContext?.logActivity(`login`);

      this.rl?.println(`${CURUP}${CLRROW}Starting service host`);
      await userDaemon.startServiceHost(async (serviceStep) => {
        if (serviceStep.id === "AppStorage") {
          this.rl?.println(`${CURUP}${CLRROW}Loading apps...`);
          await userDaemon.appRegistrationContext!.initAppStorage(userDaemon.appStorage()!, (app) => {
            this.rl?.println(`${CURUP}${CLRROW}Loading apps... ${app.id}`);
          });
        } else {
          this.rl?.println(`${CURUP}${CLRROW}Started ${serviceStep.id}`);
        }
      });

      this.rl?.println(`${CURUP}${CLRROW}Connecting global dispatch`);
      await userDaemon.activateGlobalDispatch();

      this.rl?.println(`${CURUP}${CLRROW}Starting drive notifier watcher`);
      userDaemon.filesystemContext!.startDriveNotifierWatcher();

      this.rl?.println(`${CURUP}${CLRROW}Starting share management`);
      await userDaemon.filesystemContext!.startShareManager();

      userDaemon.appStorage();

      if (userDaemon.userInfo.admin) {
        this.rl?.println(`${CURUP}${CLRROW}Activating admin bootstrapper`);
        await userDaemon.activateAdminBootstrapper();
      }

      this.rl?.println(`${CURUP}${CLRROW}Starting status refresh`);
      await userDaemon.statusContext!.startSystemStatusRefresh();

      this.rl?.println(`${CURUP}${CLRROW}Refreshing app storage`);

      this.systemDispatch.dispatch(`app-store-refresh`);

      this.env.set("currentuser", username);
      this.env.set("shell_pid", undefined);

      await Sleep(10);

      this.term?.clear();

      this.arcTerm = await KernelStack().spawn<ArcTerminal>(
        ArcTerminal,
        undefined,
        userDaemon.userInfo?._id,
        this.pid,
        this.term
      );

      this.term?.focus();

      return true;
    } catch (e) {
      const stack = e instanceof PromiseRejectionEvent ? e.reason.stack : e instanceof Error ? e.stack : "Unknown error";

      this.rl?.println(`\n${BRRED}Failed to start User Daemon:\n\n${stack}${RESET}`);
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

  private saveToken(daemon: UserDaemon) {
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
