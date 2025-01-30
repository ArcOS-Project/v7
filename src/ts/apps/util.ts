import type { App, ThirdPartyApp } from "$types/app";

export function isPopulatable(app: App | ThirdPartyApp) {
  return !app.hidden && !app.core && !app.overlay;
}
