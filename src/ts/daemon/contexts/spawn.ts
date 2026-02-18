import type { Constructs } from "$interfaces/common";
import type { ISpawnUserContext } from "$interfaces/contexts/spawn";
import type { IUserDaemon } from "$interfaces/daemon";
import type { IProcess } from "$interfaces/process";
import { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import { Env, Stack } from "$ts/env";
import { JsExec } from "$ts/jsexec";
import { CommandResult } from "$ts/result";
import { MessageBox } from "$ts/util/dialog";
import { join } from "$ts/util/fs";
import { UUID } from "$ts/util/uuid";
import type { App, AppProcessData, AppProcessSpawnOptions, TpaSpawnEntrypointResult } from "$types/app";
import { ElevationLevel } from "$types/elevation";
import { LogLevel } from "$types/logging";
import { Daemon } from "..";
import { UserContext } from "../context";

//
export class SpawnUserContext extends UserContext implements ISpawnUserContext {
  private tpaEntrypointCache: Record<string, Constructs<IProcess>> = {};
  constructor(id: string, daemon: IUserDaemon) {
    super(id, daemon);
  }

  //#region SPAWN

  async spawnAppMeta<T extends IProcess>(
    app: App,
    parentPid?: number,
    options?: AppProcessSpawnOptions,
    ...args: any[]
  ): Promise<T | undefined> {
    this.Log(`newSpawnApp: spawning ${app.id} against parent PID ${parentPid}`);
    const renderTarget = options?.noWorkspace ? undefined : (options?.renderTarget ?? Daemon.workspaces?.getCurrentDesktop());

    try {
      if (Daemon?.apps?.checkDisabled(app.id, app.noSafeMode)) return;

      await this.check_elevation(app);
      this.check_malformedAppId(app);

      const shellDispatch = Stack.ConnectDispatch(+Env.get("shell_pid"));

      if (shellDispatch) {
        shellDispatch?.dispatch("close-start-menu");
        shellDispatch?.dispatch("close-action-center");
      }

      const pid = parentPid || +Env.get("shell_pid");

      if (options?.asOverlay) {
        if (!pid) {
          this.Log(`Spawning overlay app '${app.id}' as normal app: no suitable parent process`, LogLevel.warning);
          app.overlay = false;
          app.state.headless = false;
          app.position = { centered: true };
        } else {
          app.overlay = true;
          app.state.headless = true;
        }
      }

      let runtime = app?.assets?.runtime;
      let isTpaProc = false;

      if (app.thirdParty && app.workingDirectory) {
        const tpaRuntimeResult = await this.tpaEntrypoint(app.id, ...args);
        if (tpaRuntimeResult.success) {
          const value = tpaRuntimeResult.result;

          if (value?.runtime) {
            runtime = value?.runtime;
            isTpaProc = true;
          }

          return value?.returnValue;
        }
      }

      if (!runtime) throw new Error("Did not find a suitable runtime for execution");

      const argv = isTpaProc ? [UUID(), app.workingDirectory, ...args] : args;
      const proc = await Stack.spawn<T>(
        runtime as Constructs<T>,
        renderTarget,
        this.userInfo._id,
        parentPid || this.pid,
        this.generateAppProcessData(app, renderTarget),
        ...argv
      );

      return proc;
    } catch (e) {
      this.handleSpawnError(app.id, e);
      return undefined;
    }
  }

  async spawnApp<T extends IProcess>(
    id: string,
    parentPid?: number,
    options?: AppProcessSpawnOptions,
    ...args: any[]
  ): Promise<T | undefined> {
    const app = Daemon.appStorage()?.getAppSynchronous(id);
    if (!app) {
      Daemon.notifications?.sendNotification({
        title: "App not found",
        message: `ArcOS tried to launch an application with ID <b>${id}</b>, but it could not be found. Is it installed?`,
        image: "QuestionIcon",
        timeout: 3000,
      });
      return undefined;
    }

    return await this.spawnAppMeta(app, parentPid, options, ...args);
  }

  async tpaEntrypoint(appId: string, ...args: any[]): Promise<CommandResult<TpaSpawnEntrypointResult>> {
    this.Log(`Invoking TPA Entrypoint for ${appId}`);
    if (this.tpaEntrypointCache[appId]) return CommandResult.Ok({ runtime: this.tpaEntrypointCache[appId] });

    const app = this.appStorage()?.getAppSynchronous(appId);
    if (!app || !app.thirdParty || !app.workingDirectory || !app.entrypoint) {
      if (app) this.tpaError_malformedMetadata(app);
      return CommandResult.Ok({ returnValue: undefined });
    }

    if (!Daemon.preferences().security.enableThirdParty) {
      this.tpaError_noEnableThirdParty();
      return CommandResult.Ok({ returnValue: undefined });
    }

    const gli = Daemon.autoLoadComplete
      ? await Daemon.helpers!.GlobalLoadIndicator(`Opening ${app.metadata.name}...`)
      : undefined;

    try {
      const entrypoint = join(app.workingDirectory, app.entrypoint);
      const engine = await JsExec.Invoke(entrypoint, ...args);
      engine?.setApp(app, app.tpaPath);
      const result = await engine?.getContents();

      gli?.stop?.();

      if (!(result?.prototype instanceof ThirdPartyAppProcess)) {
        return CommandResult.Ok({ returnValue: result });
      }

      this.tpaEntrypointCache[appId] = result;

      return CommandResult.Ok({ runtime: result });
    } catch (e) {
      Stack.renderer?.notifyCrash(app, e);
      gli?.stop?.();

      return CommandResult.Ok({ returnValue: undefined });
    }
  }

  //#endregion
  //#region CHECKS

  check_malformedAppId(app: App) {
    if (!app.id.includes("-") && !app.id.includes(".")) return;

    Daemon.notifications?.sendNotification({
      title: `Refusing to spawn '${app.id}'`,
      message:
        "The application ID is malformed: it contains periods or dashes. If you're the creator of the app, be sure to use the suggested format for application IDs.",
      timeout: 3000,
      image: "WarningIcon",
    });

    throw new Error("Malformed app ID");
  }

  async check_elevation(app: App) {
    if (app.elevated) {
      const elevated = await Daemon!.elevation?.manuallyElevate({
        what: "ArcOS needs your permission to open the following application:",
        title: app.metadata.name,
        description: `by ${app.metadata.author}`,
        image: app.metadata.icon,
        level: ElevationLevel.low,
      });

      if (!elevated) throw new Error("Elevation is required but wasn't provided.");
    }
  }

  //#endregion
  //#region ERRORS

  tpaError_malformedMetadata(app: App) {
    MessageBox(
      {
        title: "Third-party application error",
        message: `ArcOS tried to launch ${app.metadata.name} by ${app.metadata.author} as a third-party application, but the app does not contain sufficient information to run as a TPA. Please try to reinstall the application to fix this problem.`,
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        image: "WarningIcon",
        sound: "arcos.dialog.warning",
      },
      +Env.get("shell_pid"),
      true
    );
  }

  tpaError_noEnableThirdParty() {
    if (Daemon!.autoLoadComplete)
      MessageBox(
        {
          title: "Third-party apps",
          message:
            "ArcOS can't run third-party apps without your permission. Please enable third-party apps in Settings to access this app.",
          image: "AppsIcon",
          sound: "arcos.dialog.warning",
          buttons: [
            {
              caption: "Take me there",
              action: () => {
                this.spawnApp("systemSettings", +Env.get("shell_pid"), {}, "apps");
              },
            },
            { caption: "Okay", suggested: true, action: () => {} },
          ],
        },
        +Env.get("shell_pid"),
        true
      );
  }

  handleSpawnError(appId: string, e?: any) {
    const message = e ?? "Unknown error";

    MessageBox(
      {
        title: "Application error",
        message: `An error occurred whilst spawning an application with ID <b>${appId}</b>.<br><br>Details: ${message}`,
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        sound: "arcos.dialog.error",
        image: "ErrorIcon",
      },
      Daemon.getShell()?.pid || Daemon.pid,
      true
    );
  }

  //#endregion
  //#region UTIL

  generateAppProcessData(app: App, renderTarget?: HTMLDivElement): AppProcessData {
    return {
      id: app.id,
      data: app,
      desktop: renderTarget?.id,
    };
  }

  //#endregion
}
