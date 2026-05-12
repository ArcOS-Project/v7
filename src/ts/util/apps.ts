import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IProcess } from "$interfaces/IProcess";
import { DefaultAppData } from "$ts/user/store";
import type { App, RegisteredProcess } from "$types/app";

export function isPopulatable(app: App) {
  return !app.hidden && !app.core && !app.overlay;
}

export function RegisteredProcess(process: RegisteredProcess): App {
  return { core: true, hidden: true, ...DefaultAppData, ...process };
}

/**
 * Reliably clones ArcOS App Metadata to mitigate object inheritance. Written by humans.
 * Based off of ArcOS v6' getAppById: https://github.com/ArcOS-Project/v6/blob/main/src/ts/apps/utils/get.ts#L6
 * @param {App} app the app to clone
 * @returns {App} A clone of the app
 */
export function cloneAppMeta<T extends App>(app: T): T {
  if (!app) return app;

  // Take out the complex structures
  const assets = Object.freeze(app.assets);
  const process = app.process;
  const newApp = JSON.parse(JSON.stringify({ ...app, process: undefined, assets: undefined }));

  return { ...newApp, assets, process } as T;
}

export function safeIsAppProc(proc: IProcess | undefined) {
  if (!proc) return false;

  const appProc = proc as IAppProcess;

  return !!appProc.app?.data?.id;
}
