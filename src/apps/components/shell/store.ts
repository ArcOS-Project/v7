// TODO: merge these stores into one with a uniform interface

export const weatherCaptions: Record<number, string> = {
  0: "Clear sky", // sun
  /** */
  1: "Mainly clear", // cloud-sun
  2: "Partly cloudy", // cloud-sun
  3: "Overcast", // cloudy
  /** */
  45: "Fog", // cloud-fog
  48: "Rime Fog", // cloud-fog
  /** */
  51: "Light Drizzle", // cloud-drizzle
  53: "Moderate Drizzle", // cloud-drizzle
  55: "Dense Drizzle", // cloud-drizzle
  /** */
  61: "Slight Rain", // cloud-rain
  63: "Moderate Rain", // cloud-rain
  65: "Heavy Rain", // cloud-rain
  /** */
  71: "Slight Snowfall", // cloud-snow
  73: "Moderate Snowfall", // cloud-snow
  75: "Heavy Snowfall", // cloud-snow
  /** */
  77: "Snow grains", // cloud-snow
  80: "Slight Rain", // cloud-rain
  81: "Moderate Rain", // cloud-rain
  82: "Violent Rain", // cloud-rain
  85: "Slight Snow", // cloud-snow
  86: "Heavy Snow", // cloud-snow
  95: "Slight Thunder", // cloud-lightning
  96: "Slight Hail", // cloud-hail
  99: "Heavy Hail", // cloud-hail
};
export const weatherIcons: Record<number, string> = {
  0: "sun", // sun
  /** */
  1: "cloud-sun",
  2: "cloud-sun",
  3: "cloudy",
  /** */
  45: "cloud-fog",
  48: "cloud-fog",
  /** */
  51: "cloud-drizzle",
  53: "cloud-drizzle",
  55: "cloud-drizzle",
  /** */
  61: "cloud-rain",
  63: "cloud-rain",
  65: "cloud-rain",
  /** */
  71: "cloud-snow",
  73: "cloud-snow",
  75: "cloud-snow",
  /** */
  77: "cloud-snow",
  80: "cloud-rain",
  81: "cloud-rain",
  82: "cloud-rain",
  85: "cloud-snow",
  86: "cloud-snow",
  95: "cloud-lightning",
  96: "cloud-hail",
  99: "cloud-hail",
};
export const weatherGradients: Record<number, { start: string; end: string }> = {
  0: { start: "#4facfe", end: "#00f2fe" }, // Clear sky
  1: { start: "#90dffe", end: "#38a3d1" }, // Mainly clear
  2: { start: "#a1c4fd", end: "#c2e9fb" }, // Partly cloudy
  3: { start: "#d7d2cc", end: "#304352" }, // Overcast
  45: { start: "#e8e8e8", end: "#cfcfcf" }, // Fog
  48: { start: "#d3d3d3", end: "#a2a2a2" }, // Rime Fog
  51: { start: "#b4e0fa", end: "#83c7f5" }, // Light Drizzle
  53: { start: "#9ac6f3", end: "#68b1eb" }, // Moderate Drizzle
  55: { start: "#85b4e5", end: "#5b99dd" }, // Dense Drizzle
  61: { start: "#92a9bd", end: "#577591" }, // Slight Rain
  63: { start: "#7e97b3", end: "#4f6c8c" }, // Moderate Rain
  65: { start: "#6988a8", end: "#415d78" }, // Heavy Rain
  71: { start: "#d4e9fa", end: "#b2d8f9" }, // Slight Snowfall
  73: { start: "#b9d7f7", end: "#8fbff5" }, // Moderate Snowfall
  75: { start: "#99c4f2", end: "#67a7f0" }, // Heavy Snowfall
  77: { start: "#d9eefb", end: "#bde3f9" }, // Snow grains
  80: { start: "#92a9bd", end: "#577591" }, // Slight Rain
  81: { start: "#7e97b3", end: "#4f6c8c" }, // Moderate Rain
  82: { start: "#4f6c8c", end: "#293e52" }, // Violent Rain
  85: { start: "#d4e9fa", end: "#b2d8f9" }, // Slight Snow
  86: { start: "#b9d7f7", end: "#8fbff5" }, // Heavy Snow
  95: { start: "#697784", end: "#5b6b75" }, // Slight Thunder
  96: { start: "#5d6e7c", end: "#45525c" }, // Slight Hail
  99: { start: "#4d5e68", end: "#36434c" }, // Heavy Hail
};
export const weatherClasses: Record<number, string> = Object.fromEntries(
  Object.entries(weatherCaptions).map(([n, c]) => [n, c.replaceAll(" ", "").toLowerCase()])
);
export const weatherIconColors: Record<number, string> = {
  0: "#f7dc6f", // Clear sky: Warm yellow, symbolizing the sun
  1: "#f0e68c", // Mainly clear: Pale yellow
  2: "#c0d9e1", // Partly cloudy: Soft blue-gray
  3: "#778899", // Overcast: Slate gray
  45: "#b0c4de", // Fog: Light steel blue
  48: "#dcdcdc", // Rime Fog: Light gray
  51: "#87ceeb", // Light Drizzle: Sky blue
  53: "#4682b4", // Moderate Drizzle: Steel blue
  55: "#5f9ea0", // Dense Drizzle: Cadet blue
  61: "#6ca6cd", // Slight Rain: Medium blue
  63: "#4682b4", // Moderate Rain: Steel blue
  65: "#1e90ff", // Heavy Rain: Dodger blue
  71: "#fffafa", // Slight Snowfall: Snow white
  73: "#e0ffff", // Moderate Snowfall: Light cyan
  75: "#b0e0e6", // Heavy Snowfall: Powder blue
  77: "#ffffff", // Snow grains: Pure white
  80: "#6ca6cd", // Slight Rain: Medium blue
  81: "#4682b4", // Moderate Rain: Steel blue
  82: "#00008b", // Violent Rain: Dark blue
  85: "#fffafa", // Slight Snow: Snow white
  86: "#e0ffff", // Heavy Snow: Light cyan
  95: "#ffcccb", // Slight Thunder: Light coral
  96: "#ffa07a", // Slight Hail: Light salmon
  99: "#dc143c", // Heavy Hail: Crimson
};
