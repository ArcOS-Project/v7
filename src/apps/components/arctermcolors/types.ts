// !tpa
/**
 * ArcTerm theme data. Saved to ArcTerm configuration file
 */
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
  /**
   * How opaque the background is
   * 
   * 1 = opaque
   * 0 = transparent
   */
  backdropOpacity: number;
}

/**
 * Presets are built-in ArcTerm themes that the user can choose from inside of the ArcTerm Colors app
 */
export interface ArcTermColorPreset extends ArcTermColors {
  /**
   * Preset name
   */
  name: string;
  /**
   * Author name
   */
  author: string;
  /**
   * Light or dark mode
   */
  variant: "light" | "dark";
}
// !endtpa
