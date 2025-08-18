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

      // Downscale for performance
      const width = 50;
      const height = 50;
      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);
      const data = ctx.getImageData(0, 0, width, height).data;

      let bestColor = "#ffffff"; // fallback
      let bestScore = -1;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        if (a < 128) continue; // skip transparent

        const [h, s, l] = rgbToHsl(r, g, b);

        // brightness = avg(R,G,B), normalized
        const brightness = (r + g + b) / (255 * 3);

        // Filter unwanted ranges
        if (brightness > 0.9) continue; // too close to white
        if (s < 0.2) continue; // too gray
        if (l < 0.3) continue; // too dark for readability

        // Score: prioritize saturation, then brightness
        const score = s * s * brightness;

        if (score > bestScore) {
          bestScore = score;
          bestColor = rgbToHex(r, g, b);
        }
      }

      resolve(bestColor);
    };

    img.onerror = (err) => reject(err);
  });
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
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
