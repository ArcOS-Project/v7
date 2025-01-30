import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { fetchWeatherApi } from "openmeteo";
import {
  weatherCaptions,
  weatherClasses,
  weatherGradients,
  weatherIconColors,
  weatherIcons,
} from "./store";
import type { WeatherInformation } from "./types";

export class ShellRuntime extends AppProcess {
  public startMenuOpened = Store<boolean>(false);
  public actionCenterOpened = Store<boolean>(false);

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData
  ) {
    super(handler, pid, parentPid, app);

    this.env.set("shell_pid", this.pid);
  }

  async render() {
    document.body.addEventListener("click", (e) => {
      const startMenu = document.querySelector("#arcShell div.startmenu");
      const startButton = document.querySelector(
        "#arcShell button.start-button"
      );
      const actionCenter = document.querySelector("#arcShell div.actioncenter");
      const actionCenterButton = document.querySelector(
        "#arcShell button.action-center-button"
      );

      const composed = e.composedPath();

      if (
        startMenu &&
        startButton &&
        !composed.includes(startMenu) &&
        !composed.includes(startButton)
      )
        this.startMenuOpened.set(false);

      if (
        actionCenter &&
        actionCenterButton &&
        !composed.includes(actionCenter) &&
        !composed.includes(actionCenterButton)
      )
        this.actionCenterOpened.set(false);
    });

    this.acceleratorStore.push({
      ctrl: true,
      key: "q",
      global: true,
      action: () => {
        this.closeFocused();
      },
    });

    this.dispatch.subscribe("open-action-center", () =>
      this.actionCenterOpened.set(true)
    );

    this.dispatch.subscribe("open-start-menu", () =>
      this.startMenuOpened.set(true)
    );
  }

  async getWeather(): Promise<WeatherInformation> {
    const preferences = this.userPreferences();
    const params = {
      latitude: preferences.shell.actionCenter.weatherLocation.latitude,
      longitude: preferences.shell.actionCenter.weatherLocation.longitude,
      current: ["temperature_2m", "weather_code", "is_day"],
    };
    const url = "https://api.open-meteo.com/v1/forecast";

    try {
      const responses = await fetchWeatherApi(url, params);

      const response = responses[0];
      const current = response.current()!;
      const temperature_2m = current.variables(0)!.value();
      const weather_code = current.variables(1)!.value();
      const is_day = current.variables(2)!.value();

      return {
        code: weather_code,
        condition: weatherCaptions[weather_code],
        temperature: temperature_2m,
        className: weatherClasses[weather_code],
        gradient: weatherGradients[weather_code],
        icon: weatherIcons[weather_code],
        iconColor: weatherIconColors[weather_code],
        isNight: !is_day,
      };
    } catch {
      return false;
    }
  }

  async closeFocused() {
    const focusedPid = this.handler.renderer?.focusedPid();

    if (!focusedPid) return;

    await this.handler.kill(focusedPid);

    const appProcesses = (this.handler.renderer?.currentState || [])
      .map((pid) => this.handler.getProcess(pid))
      .filter(
        (proc) =>
          proc &&
          !proc._disposed &&
          proc instanceof AppProcess &&
          !proc.app.data.core &&
          !proc.app.data.overlay
      )
      .filter((proc) => !!proc);

    const targetProcess = appProcesses[appProcesses.length - 1];

    if (!targetProcess) return;

    this.handler.renderer?.focusPid(targetProcess.pid);
  }

  pinApp(appId: string) {
    this.userPreferences.update((v) => {
      if (v.pinnedApps.includes(appId)) return v;

      v.pinnedApps.push(appId);

      return v;
    });
  }

  unpinApp(appId: string) {
    this.userPreferences.update((v) => {
      if (!v.pinnedApps.includes) return v;

      v.pinnedApps.splice(v.pinnedApps.indexOf(appId));

      return v;
    });
  }
}
