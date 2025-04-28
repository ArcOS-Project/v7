import { DefaultAppData } from "$ts/server/user/store";
import type { App, RegisteredProcess } from "$types/app";

export function isPopulatable(app: App) {
  return !app.hidden && !app.core && !app.overlay;
}

export function RegisteredProcess(process: RegisteredProcess): App {
  return { ...DefaultAppData, ...process };
}
