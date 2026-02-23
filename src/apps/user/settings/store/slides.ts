import LoginActivity from "../Settings/Slides/LoginActivity.svelte";
import ManageApps from "../Settings/Slides/ManageApps.svelte";
import PickPfpBuiltin from "../Settings/Slides/PickPfpBuiltin.svelte";
import StartMenuActions from "../Settings/Slides/StartMenuActions.svelte";
import UserStyles from "../Settings/Slides/UserStyles.svelte";
import WeatherLocation from "../Settings/Slides/WeatherLocation.svelte";
import type { SettingsSlides } from "../types";

export const SlideStore: SettingsSlides = new Map([
  ["account_loginActivity", LoginActivity as any],
  ["account_pickPfpBuiltin", PickPfpBuiltin as any],
  ["shell_weatherLocation", WeatherLocation as any],
  ["shell_startMenuActions", StartMenuActions as any],
  ["visuals_userStyles", UserStyles as any],
  ["apps_manageApps", ManageApps as any],
]);
