import { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import { MessageBox } from "$ts/dialog";
import { Env, Stack, SysDispatch } from "$ts/env";
import { JsExec } from "$ts/jsexec";
import { getParentDirectory, join } from "$ts/util/fs";
import type { App, InstalledApp } from "$types/app";
import { ElevationLevel } from "$types/elevation";
import { LogLevel } from "$types/logging";
import { Daemon, type UserDaemon } from "..";
import { UserContext } from "../context";

export class SpawnUserContext extends UserContext {
  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async spawnApp<T>(id: string, parentPid?: number, ...args: any[]) {
    if (this._disposed) return;

    return await this._spawnApp<T>(id, Daemon!.workspaces?.getCurrentDesktop(), parentPid, ...args);
  }

  async spawnOverlay<T>(id: string, parentPid?: number, ...args: any[]) {
    if (this._disposed) return;

    return await this._spawnOverlay<T>(id, Daemon!.workspaces?.getCurrentDesktop(), parentPid, ...args);
  }

  async _spawnApp<T>(
    id: string,
    renderTarget: HTMLDivElement | undefined = undefined,
    parentPid?: number,
    ...args: any[]
  ): Promise<T | undefined> {
    if (this._disposed) return;

    const appStore = this.appStorage();
    const app = appStore?.getAppSynchronous(id);

    if (Daemon!.apps?.checkDisabled(id, app?.noSafeMode)) return;

    if (app?.id.includes("-") || app?.id.includes(".")) {
      Daemon!.notifications?.sendNotification({
        title: `Refusing to spawn '${id}'`,
        message:
          "The application ID is malformed: it contains periods or dashes. If you're the creator of the app, be sure to use the suggested format for application IDs.",
        timeout: 3000,
        image: "WarningIcon",
      });

      return;
    }

    if (!app) {
      Daemon!.notifications?.sendNotification({
        title: "Application not found",
        message: `ArcOS tried to launch an application with ID '${id}', but it could not be found. Is it installed?`,
        timeout: 3000,
        image: "QuestionIcon",
      });
      return undefined;
    }

    this.Log(`SPAWNING APP ${id}`);

    if (app.thirdParty || app.entrypoint) {
      return await this.spawnThirdParty<T>(app, (app as InstalledApp).tpaPath!, ...args);
    }

    if (app.elevated) {
      const elevated = await Daemon!.elevation?.manuallyElevate({
        what: "ArcOS needs your permission to open the following application:",
        title: app.metadata.name,
        description: `by ${app.metadata.author}`,
        image: app.metadata.icon,
        level: ElevationLevel.low,
      });

      if (!elevated) return;
    }

    const shellDispatch = Stack.ConnectDispatch(+Env.get("shell_pid"));

    if (shellDispatch) {
      shellDispatch?.dispatch("close-start-menu");
      shellDispatch?.dispatch("close-action-center");
    }

    await Stack.waitForAvailable();

    Daemon!.updateGlobalDispatch();

    return await Stack.spawn<T>(
      app.assets.runtime,
      renderTarget,
      this.userInfo!._id,
      parentPid || this.pid,
      {
        data: app,
        id: app.id,
        desktop: renderTarget ? renderTarget.id : undefined,
      },
      ...args
    );
  }

  async _spawnOverlay<T>(
    id: string,
    renderTarget: HTMLDivElement | undefined = undefined,
    parentPid?: number,
    ...args: any[]
  ): Promise<T | undefined> {
    if (this._disposed) return;

    const appStore = this.appStorage();
    const app = await appStore?.getAppSynchronous(id);

    if (Daemon!?.apps?.checkDisabled(id, app?.noSafeMode)) return;

    if (app?.id.includes("-") || app?.id.includes(".")) {
      Daemon!.notifications?.sendNotification({
        title: `Refusing to spawn '${id}'`,
        message:
          "The application ID is malformed: it contains periods or dashes. If you're the creator of the app, be sure to use the suggested format for application IDs.",
        timeout: 3000,
        image: "WarningIcon",
      });

      return;
    }

    if (!app) {
      Daemon!.notifications?.sendNotification({
        title: "Application not found",
        message: `ArcOS can't find an application with ID '${id}'. Is it installed?`,
        timeout: 3000,
        image: "QuestionIcon",
      });
      return undefined;
    }

    this.Log(`SPAWNING OVERLAY APP ${id}`);

    if (app.thirdParty) {
      this.Log("Can't spawn a third party app as an overlay: not in our control", LogLevel.error);

      return;
    }

    if (app.elevated) {
      const elevated = await Daemon!?.elevation?.manuallyElevate({
        what: "ArcOS needs your permission to open the following application as an overlay:",
        title: app.metadata.name,
        description: `by ${app.metadata.author}`,
        image: app.metadata.icon,
        level: ElevationLevel.low,
      });

      if (!elevated) return;
    }

    await Stack.waitForAvailable();

    const pid = parentPid || +Env.get("shell_pid");

    if (!pid) {
      this.Log(`Spawning overlay app '${app.id}' as normal app: no suitable parent process`, LogLevel.warning);
    }

    return await Stack.spawn<T>(
      app.assets.runtime,
      renderTarget,
      this.userInfo!._id,
      pid || this.pid,
      {
        data: { ...app, overlay: !!pid },
        id: app.id,
        desktop: renderTarget ? renderTarget.id : undefined,
      },
      ...args
    );
  }

  async spawnThirdParty<T>(app: App, metaPath: string, ...args: any[]): Promise<T | undefined> {
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

      return await engine?.getContents();
    } catch (e) {
      Stack.renderer?.notifyCrash(app as any, e as Error, app.process!);
      this.Log(`Execution error in third-party application "${app.id}": ${(e as any).stack}`);
      stop?.();
    }
  }

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
                this.spawnApp("systemSettings", +Env.get("shell_pid"), "apps");
              },
            },
            { caption: "Okay", suggested: true, action: () => {} },
          ],
        },
        +Env.get("shell_pid"),
        true
      );
  }
}
