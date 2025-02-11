import LoginActivity from "../Settings/Slides/LoginActivity.svelte";
import PickPfpBuiltin from "../Settings/Slides/PickPfpBuiltin.svelte";
import UserStyles from "../Settings/Slides/UserStyles.svelte";
import WeatherLocation from "../Settings/Slides/WeatherLocation.svelte";
import type { SettingsSlides } from "../types";

export const SlideStore: SettingsSlides = new Map([
  ["account_loginActivity", LoginActivity as any],
  ["account_pickPfpBuiltin", PickPfpBuiltin as any],
  ["shell_weatherLocation", WeatherLocation as any],
  ["visuals_userStyles", UserStyles as any],
]);
