import LoginActivity from "../Settings/Slides/LoginActivity.svelte";
import ManageRotur from "../Settings/Slides/ManageRotur.svelte";
import UserStyles from "../Settings/Slides/UserStyles.svelte";
import WeatherLocation from "../Settings/Slides/WeatherLocation.svelte";
import type { SettingsSlides } from "../types";

export const SlideStore: SettingsSlides = new Map([
  ["account_loginActivity", LoginActivity as any],
  ["shell_weatherLocation", WeatherLocation as any],
  ["visuals_userStyles", UserStyles as any],
  ["account_manageRotur", ManageRotur as any],
]);
