import type { Constructs } from "$interfaces/common";
import type { ISpawnUserContext } from "$interfaces/contexts/spawn";
import type { IUserDaemon } from "$interfaces/daemon";
import type { IProcess } from "$interfaces/process";
import { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import { Env, Stack, SysDispatch } from "$ts/env";
import { JsExec } from "$ts/jsexec";
import { MessageBox } from "$ts/util/dialog";
import { getParentDirectory, join } from "$ts/util/fs";
import { UUID } from "$ts/util/uuid";
import type { App, AppProcessData, AppProcessSpawnOptions } from "$types/app";
import { ElevationLevel } from "$types/elevation";
import { LogLevel } from "$types/logging";
import { Daemon } from "..";
import { UserContext } from "../context";

//
export class SpawnUserContext extends UserContext implements ISpawnUserContext {
  constructor(id: string, daemon: IUserDaemon) {
    super(id, daemon);
  }

  //#region SPAWN

  async spawnApp<T extends IProcess>(id: string, parentPid?: number, ...args: any[]) {
    return await this.newSpawnApp<T>(id, parentPid, {}, ...args);
  }

  async spawnOverlay<T extends IProcess>(id: string, parentPid?: number, ...args: any[]) {
    return await this.newSpawnApp<T>(id, parentPid, { asOverlay: true }, ...args);
  }

  async _spawnApp<T extends IProcess>(id: string, renderTarget?: HTMLDivElement, parentPid?: number, ...args: any[]) {
    return await this.newSpawnApp<T>(id, parentPid, { renderTarget, noWorkspace: !renderTarget }, ...args);
  }

  async _spawnOverlay<T extends IProcess>(id: string, renderTarget?: HTMLDivElement, parentPid?: number, ...args: any[]) {
    return await this.newSpawnApp<T>(id, parentPid, { renderTarget, noWorkspace: !renderTarget, asOverlay: true }, ...args);
  }

  async newSpawnApp<T extends IProcess>(
    id: string,
    parentPid?: number,
    options?: AppProcessSpawnOptions,
    ...args: any[]
  ): Promise<T | undefined> {
    const renderTarget = options?.noWorkspace ? undefined : (options?.renderTarget ?? Daemon.workspaces?.getCurrentDesktop());

    try {
      const appResult = await Daemon.appStorage()?.getAppById(id, true);
      if (!appResult?.success) throw new Error(appResult?.errorMessage ?? "The application could not be found");

      const app = appResult.result!;

      if (Daemon?.apps?.checkDisabled(app.id, app.noSafeMode)) return;

      this.check_malformedAppId(app);
      await this.check_elevation(app);

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

      const argv = app.thirdParty ? [UUID(), app.workingDirectory, ...args] : args;

      const proc = await Stack.spawn<T>(
        app.assets.runtime as Constructs<T>,
        renderTarget,
        this.userInfo._id,
        parentPid || this.pid,
        this.generateAppProcessData(app, renderTarget),
        ...argv
      );

      return proc;
    } catch (e) {
      this.Log(`spawnApp for ${id} failed: ${e}`, LogLevel.error);
      return undefined;
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

  tpaError_revisionIncompatible(app: App) {
    MessageBox(
      {
        title: `${app.metadata.name}`,
        message: `This application expects a newer version of the TPA framework than what ArcOS can supply. Please update your ArcOS version and try again.`,
        buttons: [{ caption: "Okay", action: () => {} }],
        sound: "arcos.dialog.error",
        image: "ErrorIcon",
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

  //#endregion
  //#region LEGACY

  async legacy_spawnThirdParty<T>(app: App, metaPath: string, ...args: any[]): Promise<T | undefined> {
    if (this._disposed) return;

    if (this.safeMode) {
      this.Log(`TPA execution in Safe Mode is prohibited: ${app.id}`, LogLevel.error);
      return;
    }

    if (!Daemon!.preferences().security.enableThirdParty) {
      this.tpaError_noEnableThirdParty();
      return;
    }

    const compatibleRevision = !app.tpaRevision || ThirdPartyAppProcess.TPA_REV >= app.tpaRevision;

    if (!compatibleRevision) {
      this.tpaError_revisionIncompatible(app);
      return;
    }

    app.workingDirectory ||= getParentDirectory(metaPath);

    let stop: (() => Promise<void>) | undefined;

    if (Daemon!.autoLoadComplete) stop = (await Daemon!.helpers!.GlobalLoadIndicator(`Opening ${app.metadata.name}...`)).stop;

    try {
      const engine = await Stack.spawn<JsExec>(
        JsExec,
        undefined,
        this.userInfo._id,
        this.pid,
        join(app.workingDirectory, app.entrypoint!),
        ...args
      );

      const num = SysDispatch.subscribe("tpa-spawn-done", ([operationId]) => {
        if (operationId === engine?.operationId) stop?.();
        SysDispatch.unsubscribeId("tpa-spawn-done", num);
      });

      engine?.setApp(app, metaPath);

      await stop?.();

      const result = await engine?.getContents();

      if (result?.prototype instanceof ThirdPartyAppProcess) {
        // todo: make renderTarget a parameter instead of just hardcoding getCurrentDesktop
        const desktop = Daemon.workspaces?.getCurrentDesktop();

        return (await Stack.spawn(
          result,
          desktop,
          Daemon.userInfo._id,
          Daemon.getShell()?.pid || Daemon.pid,
          {
            id: app.id,
            data: app,
            desktop,
          },
          engine?.operationId,
          app.workingDirectory
        )) as T | undefined;
      }

      return result;
    } catch (e) {
      Stack.renderer?.notifyCrash(app as any, e as Error, app.process!);
      this.Log(`Execution error in third-party application "${app.id}": ${(e as any).stack}`);
      stop?.();
    }
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
