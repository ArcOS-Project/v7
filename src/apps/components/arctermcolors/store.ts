import { DefaultColors } from "$ts/terminal/store";
import type { ArcTermColorPreset } from "./types";

///
/// DARK THEMES
///

export const DarkColorPresets: ArcTermColorPreset[] = [
  {
    name: "ArcTerm dark",
    author: "Izaak Kuipers",
    ...DefaultColors,
  },
  {
    name: "Gruvbox Dark",
    author: "GitHub/morhetz",
    red: "#FB4934",
    green: "#b8bb26",
    yellow: "#fabd2f",
    blue: "#83a598",
    cyan: "#8ec07c",
    magenta: "#d3869b",
    foreground: "#ebdbb2",
    background: "#282828",
    brightBlack: "#a89984",
    backdropOpacity: 1,
  },
].map((t) => ({ ...t, variant: "dark" }));

///
/// LIGHT THEMES
///

export const LightColorPresets: ArcTermColorPreset[] = [
  {
    name: "Gruvbox Light",
    author: "GitHub/morhetz",
    red: "#cc241d",
    green: "#98971a",
    yellow: "#d79921",
    blue: "#458588",
    cyan: "#689d6a",
    magenta: "#b16286",
    foreground: "#3c3836",
    background: "#fbf1c7",
    brightBlack: "#bdae93",
    backdropOpacity: 1,
  },
].map((t) => ({ ...t, variant: "light" }));

///
/// EXPORT
///

export const ArcTermColorPresets: ArcTermColorPreset[] = [...DarkColorPresets, ...LightColorPresets];
