import type { App } from "$types/app";

export function isPopulatable(app: App) {
  return !app.hidden && !app.core && !app.overlay;
}
