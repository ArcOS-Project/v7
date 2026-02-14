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

export function invertColor(hex: string) {
  hex = hex.replace("#", "");

  if (hex.length !== 6) return hex;

  return `#${(Number(`0x1${hex}`) ^ 0xffffff).toString(16).substring(1).toUpperCase()}`;
}

export function bestForeground(bgColor: string) {
  const color1 = colorsea(`#${bgColor.replace("#", "")}`);
  const color2 = colorsea("#FFFFFF");

  const difference = color1.deltaE(color2, "CMC");

  return difference > 40 ? "white" : "black";
}

export async function getReadableVibrantColor(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject(new Error("Could not get 2D context"));
        return;
      }

      const width = 50;
      const height = 50;
      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);
      const data = ctx.getImageData(0, 0, width, height).data;

      const bgColor = "#111111";
      const minContrast = 4.5;

      let bestColor = "#ffffff";
      let bestScore = -1;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        if (a < 128) continue;

        const [h, s, l] = rgbToHsl(r, g, b);
        const brightness = (r + g + b) / (255 * 3);

        if (brightness > 0.9) continue;
        if (s < 0.2) continue;

        // Vibrancy score
        const score = s * s * brightness;

        const hex = rgbToHex(r, g, b);
        const contrast = getContrastRatio(hex, bgColor);

        if (contrast >= minContrast && score > bestScore) {
          bestScore = score;
          bestColor = hex;
        }
      }

      if (bestScore < 0) {
        let fallbackScore = -1;
        let fallbackColor = "#ffffff";
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];
          if (a < 128) continue;
          const [h, s, l] = rgbToHsl(r, g, b);
          const brightness = (r + g + b) / (255 * 3);
          if (s < 0.2) continue;
          const score = s * s * brightness;
          if (score > fallbackScore) {
            fallbackScore = score;
            fallbackColor = rgbToHex(r, g, b);
          }
        }
        bestColor = ensureContrast(fallbackColor, bgColor, minContrast);
      }

      bestColor = bestColor.replace("#", "").slice(0, 6);

      console.log(bestColor);

      resolve(bestColor);
    };

    img.onerror = (err) => reject(err);
  });
}

export function rgbToHex(r: number, g: number, b: number, a = 255): string {
  return "#" + [r, g, b, a].map((x) => x.toString(16).padStart(2, "0")).join("");
}

export function hexToRgb(hex: string): [number, number, number] {
  const bigint = parseInt(hex.slice(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

export function relativeLuminance([r, g, b]: [number, number, number]): number {
  const srgb = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

export function getContrastRatio(hex1: string, hex2: string): number {
  const lum1 = relativeLuminance(hexToRgb(hex1));
  const lum2 = relativeLuminance(hexToRgb(hex2));
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

export function ensureContrast(hex: string, bg: string, minContrast: number): string {
  let [r, g, b] = hexToRgb(hex);
  let [h, s, l] = rgbToHsl(r, g, b);

  while (getContrastRatio(rgbToHex(...hslToRgb(h, s, l)), bg) < minContrast && l < 1) {
    l += 0.02;
  }

  const [nr, ng, nb] = hslToRgb(h, s, l);
  return rgbToHex(nr, ng, nb);
}

export function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0,
    s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h, s, l];
}

export function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  let r: number, g: number, b: number;
  if (s === 0) {
    r = g = b = l; // gray
  } else {
    const hue2rgb = (p: number, q: number, t: number): number => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
