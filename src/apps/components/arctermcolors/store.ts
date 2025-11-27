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
    {
    name: "One Dark Pro",
    author: "Atom",
    variant: "dark",
    red: "#e06c75",
    green: "#98c379",
    yellow: "#e5c07b",
    blue: "#61afef",
    magenta: "#c678dd",
    cyan: "#56b6c2",
    brightBlack: "#51565f",
    foreground: "#abb2bf",
    background: "#232936",
    backdropOpacity: 1
  },
  {
    name: "Nord",
    author: "Arctic Ice Studios",
    red: "#bf616a",
    green: "#a3be8b",
    yellow: "#ebcb8b",
    blue: "#5e81ac",
    magenta: "#b48ead",
    cyan: "#8fbcbb",
    brightBlack: "rgb(109,109,109)",
    foreground: "rgb(216,222,233)",
    background: "rgb(46,52,64)",
    backdropOpacity: 1,
  },
  {
    name: "Deep Ocean",
    author: "Material Theme",
    red: "#f07178",
    green: "#c3e88d",
    yellow: "#ffcb6b",
    blue: "#82aaff",
    magenta: "#c792ea",
    cyan: "#89ddff",
    brightBlack: "#546e7a",
    foreground: "#B0BEC5",
    background: "#263238",
    backdropOpacity: 1,
  },
  {
    name: "Dracula",
    author: "Zeno Rocha",
    red: "#ff5555",
    green: "#50FA7B",
    yellow: "#F1FA8C",
    blue: "#BD93F9",
    magenta: "#BD93F9",
    cyan: "#8BE9FD",
    brightBlack: "#555",
    foreground: "#A4A4A1",
    background: "#282A36",
    backdropOpacity: 1,
  },
  {
    name: "Night Owl",
    author: "GitHub/sdras",
    red: "#EF5350",
    green: "#22da6e",
    yellow: "#c5e478",
    blue: "#82AAFF",
    magenta: "#C792EA",
    cyan: "#21c7a8",
    brightBlack: "#637777",
    foreground: "#d6deeb",
    background: "#011627",
    backdropOpacity: 1,
  },
  {
    name: "Monokai Extended",
    author: "SuperPaintman",
    red: "#F92672",
    green: "#A6E22E",
    yellow: "#E6DB74",
    blue: "#66D9EF",
    magenta: "#AE81FF",
    cyan: "#21c7a8",
    brightBlack: "#75715E",
    foreground: "#F8F8F2",
    background: "#272822",
    backdropOpacity: 1,
  },
  {
    name: "Pale Night",
    author: "Olaolu Olawuyi",
    red: "#ff5572",
    green: "#a9c77d",
    yellow: "#FFCB6B",
    blue: "#82AAFF",
    magenta: "#C792EA",
    cyan: "#89DDFF",
    brightBlack: "#697098",
    foreground: "#BFC7D5",
    background: "#292D3E",
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
  {
    name: "One Light Pro",
    author: "Atom",
    red: "#e06c75",
    green: "#98c379",
    yellow: "#e5c07b",
    blue: "#61afef",
    magenta: "#c678dd",
    cyan: "#56b6c2",
    brightBlack: "#51565f",
    foreground: "#232936",
    background: "#dee5ef",
    backdropOpacity: 1,
  },
].map((t) => ({ ...t, variant: "light" }));

///
/// EXPORT
///

export const ArcTermColorPresets: ArcTermColorPreset[] = [...DarkColorPresets, ...LightColorPresets];
