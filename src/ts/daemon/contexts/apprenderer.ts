import type { IAppRendererUserContext } from "$interfaces/contexts/IAppRendererUserContext";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import { Daemon, Stack } from "$ts/env";
import { bestForeground, darkenColor, hex3to6, invertColor, lightenColor } from "$ts/util/color";
import type { CustomStylePreferences, UserPreferences } from "$types/user";
import { Wallpapers } from "../../user/wallpaper/store";
import { UserContext } from "../context";

export class AppRendererUserContext extends UserContext implements IAppRendererUserContext {
  constructor(id: string, daemon: IUserDaemon) {
    super(id, daemon);
  }

  async _deactivate(): Promise<void> {
    const renderer = Stack.renderer?.target;

    if (!renderer) return;

    renderer.removeAttribute("style");
    renderer.removeAttribute("class");
  }

  getAppRendererStyle(accent: string) {
    const accentTransparent = `${hex3to6(accent)}44`;
    const accentLight = lightenColor(accent);
    const accentLighter = lightenColor(accent, 7.5);
    const accentDarkMedium = darkenColor(accent, 20);
    const accentDark = darkenColor(accent, 75);
    const accentDarkest = darkenColor(accent, 85);
    const accentLightTransparent = `${lightenColor(accent)}77`;
    const accentLightInvert = invertColor(lightenColor(accent));
    const accentSuggestedStart = `#${accent}`
    const accentSuggestedEnd = darkenColor(accent, 10);
    const accentSuggestedFg = bestForeground(accent); 
    const accentDarkMediumFg = bestForeground(accentDarkMedium);

    return `
      --blur: ${Daemon!.preferences().shell.visuals.blurRadius}px;
      --accent: ${hex3to6(accent)} !important;
      --accent-transparent: ${accentTransparent} !important;
      --accent-light: ${accentLight} !important;
      --accent-lighter: ${accentLighter} !important;
      --accent-dark-medium: ${accentDarkMedium} !important;
      --accent-dark-medium-fg: ${accentDarkMediumFg} !important;
      --accent-dark: ${accentDark} !important;
      --accent-darkest: ${accentDarkest} !important;
      --accent-light-transparent: ${accentLightTransparent} !important;
      --accent-light-invert: ${accentLightInvert} !important;
      --accent-suggested-start: ${accentSuggestedStart} !important;
      --accent-suggested-end: ${accentSuggestedEnd} !important;
      --accent-suggested-fg: ${accentSuggestedFg} !important;
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
