import LoginActivity from "../Settings/Slides/Account/LoginActivity.svelte";
import type { SettingsSlides } from "../types";

export const SlideStore: SettingsSlides = new Map([
  ["account_loginActivity", LoginActivity],
]);
