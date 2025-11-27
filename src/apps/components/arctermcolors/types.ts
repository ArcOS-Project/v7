export interface ArcTermColors {
  red: string;
  green: string;
  yellow: string;
  blue: string;
  cyan: string;
  magenta: string;
  foreground: string;
  background: string;
  brightBlack: string;
  backdropOpacity: number;
}

export interface ArcTermColorPreset extends ArcTermColors {
  name: string;
  author: string;
  variant: "light" | "dark";
}
