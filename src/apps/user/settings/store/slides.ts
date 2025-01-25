import LoginActivity from "../Settings/Slides/Account/LoginActivity.svelte";
import UserStyles from "../Settings/Slides/Account/UserStyles.svelte";
import WeatherLocation from "../Settings/Slides/Account/WeatherLocation.svelte";
import type { SettingsSlides } from "../types";

export const SlideStore: SettingsSlides = new Map([
  ["account_loginActivity", LoginActivity as any],
  ["shell_weatherLocation", WeatherLocation as any],
  ["visuals_userStyles", UserStyles as any],
]);
