import { bestForeground, darkenColor, hex3to6, invertColor, lightenColor } from "$ts/color";
import { Stack } from "$ts/env";
import { Wallpapers } from "$ts/wallpaper/store";
import type { CustomStylePreferences, UserPreferences } from "$types/user";
import { Daemon, type UserDaemon } from "..";
import { UserContext } from "../context";

/**
 * RESTRICTED: this class does not have an entry in ProcessWithPermissions,
 * and as such cannot be accessed by third-party applications.
 */
export class AppRendererUserContext extends UserContext {
  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async _deactivate(): Promise<void> {
    const renderer = Stack.renderer?.target;

    if (!renderer) return;

    renderer.removeAttribute("style");
    renderer.removeAttribute("class");
  }

  getAppRendererStyle(accent: string) {
    return `
      --blur: ${Daemon!.preferences().shell.visuals.blurRadius}px;
      --accent: ${hex3to6(accent)} !important;
      --accent-transparent: ${hex3to6(accent)}44 !important;
      --accent-light: ${lightenColor(accent)} !important;
      --accent-lighter: ${lightenColor(accent, 7.5)} !important;
      --accent-dark: ${darkenColor(accent, 75)} !important;
      --accent-darkest: ${darkenColor(accent, 85)} !important;
      --accent-light-transparent: ${lightenColor(accent)}77 !important;
      --accent-light-invert: ${invertColor(lightenColor(accent))} !important;
      --accent-suggested-start: #${accent} !important;
      --accent-suggested-end: ${darkenColor(accent, 10)} !important;
      --accent-suggested-fg: ${bestForeground(accent)} !important;
      --wallpaper: url('${Daemon!.wallpaper?.Wallpaper()?.url || Wallpapers.img0.url}');
      --user-font: "${Daemon!.preferences().shell.visuals.userFont || ""}";`;
  }

  async setAppRendererClasses(v: UserPreferences) {
    const renderer = Stack.renderer?.target;

    if (!renderer) throw new Error("UserDaemon: Tried to set renderer classes without renderer");

    const accent = v.desktop.accent;
    const theme = v.desktop.theme;

    let style = this.getAppRendererStyle(accent);

    this.setUserStyleLoader(v.shell.customStyle);

    renderer.removeAttribute("class");
    renderer.setAttribute("style", style);
    renderer.classList.add(`theme-${theme}`);
    renderer.classList.toggle("sharp", v.shell.visuals.sharpCorners);
    renderer.classList.toggle("noani", v.shell.visuals.noAnimations || this.safeMode);
    renderer.classList.toggle("noglass", v.shell.visuals.noGlass || this.safeMode);
    renderer.classList.toggle("safe-mode", this.safeMode);
    renderer.classList.toggle("traffic-lights", v.shell.visuals.trafficLights);
    renderer.classList.toggle("hide-altmenus", v.shell.visuals.hideAltmenus);
  }

  setUserStyleLoader(style: CustomStylePreferences) {
    if (this._disposed || this.safeMode) return;

    let styleLoader = Stack.renderer?.target.querySelector("#userStyleLoader");

    if (!styleLoader) {
      styleLoader = document.createElement("style");
      styleLoader.id = "userStyleLoader";

      Stack.renderer?.target.append(styleLoader);
    }

    styleLoader.textContent = style.enabled && !Daemon!.elevation?._elevating ? style.content || "" : "";
  }
}
