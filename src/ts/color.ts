import colorsea from "colorsea";

/**
 * Lightens the incoming color
 * @param color The color
 * @param modifier How much to lighten the color
 * @returns The lightened color
 */
export function lightenColor(color: string, modifier: number = 5) {
  color = color.replace("#", "");

  return colorsea(`#${color}`).lighten(modifier, "relative").hex();
}

/**
 * Converts a Hex-3 to Hex-6 color code
 * @param color The 3-digit hex to convert
 * @returns A 6-digit hex code
 */
export function hex3to6(color: string): string {
  color = color.replace("#", "");

  return colorsea(`#${color}`).hex();
}

/**
 * Darkens the incoming color
 * @param color The color
 * @param modifier How much to darken the color
 * @returns The darkened color
 */
export function darkenColor(color: string, modifier: number = 5) {
  color = color.replace("#", "");

  return colorsea(`#${color}`).darken(modifier, "relative").hex();
}

/**
 * Inverts the incoming color
 * @param color The color
 * @returns The inverted color
 */
export function invertColor(hex: string) {
  hex = hex.replace("#", "");

  if (hex.length !== 6) return hex;

  return `#${(Number(`0x1${hex}`) ^ 0xffffff)
    .toString(16)
    .substring(1)
    .toUpperCase()}`;
}
