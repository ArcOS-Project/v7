import type { WeatherMeta } from "./types";

export const weatherMetadata: Record<number, WeatherMeta> = {
  0: {
    caption: "Clear sky",
    gradient: {
      start: "#4facfe",
      end: "#00f2fe",
    },
    iconColor: "#f7dc6f",
    icon: "sun",
  },
  1: {
    caption: "Mainly clear",
    gradient: {
      start: "#90dffe",
      end: "#38a3d1",
    },
    iconColor: "#f0e68c",
    icon: "cloud-sun",
  },
  2: {
    caption: "Partly cloudy",
    gradient: {
      start: "#a1c4fd",
      end: "#c2e9fb",
    },
    iconColor: "#c0d9e1",
    icon: "cloud-sun",
  },
  3: {
    caption: "Overcast",
    gradient: {
      start: "#d7d2cc",
      end: "#304352",
    },
    iconColor: "#778899",
    icon: "cloudy",
  },
  45: {
    caption: "Fog",
    gradient: {
      start: "#e8e8e8",
      end: "#cfcfcf",
    },
    iconColor: "#b0c4de",
    icon: "cloud-fog",
  },
  48: {
    caption: "Rime Fog",
    gradient: {
      start: "#d3d3d3",
      end: "#a2a2a2",
    },
    iconColor: "#dcdcdc",
    icon: "cloud-fog",
  },
  51: {
    caption: "Light Drizzle",
    gradient: {
      start: "#b4e0fa",
      end: "#83c7f5",
    },
    iconColor: "#87ceeb",
    icon: "cloud-drizzle",
  },
  53: {
    caption: "Moderate Drizzle",
    gradient: {
      start: "#9ac6f3",
      end: "#68b1eb",
    },
    iconColor: "#4682b4",
    icon: "cloud-drizzle",
  },
  55: {
    caption: "Dense Drizzle",
    gradient: {
      start: "#85b4e5",
      end: "#5b99dd",
    },
    iconColor: "#5f9ea0",
    icon: "cloud-drizzle",
  },
  61: {
    caption: "Slight Rain",
    gradient: {
      start: "#92a9bd",
      end: "#577591",
    },
    iconColor: "#6ca6cd",
    icon: "cloud-rain",
  },
  63: {
    caption: "Moderate Rain",
    gradient: {
      start: "#7e97b3",
      end: "#4f6c8c",
    },
    iconColor: "#4682b4",
    icon: "cloud-rain",
  },
  65: {
    caption: "Heavy Rain",
    gradient: {
      start: "#6988a8",
      end: "#415d78",
    },
    iconColor: "#1e90ff",
    icon: "cloud-rain",
  },
  71: {
    caption: "Slight Snowfall",
    gradient: {
      start: "#d4e9fa",
      end: "#b2d8f9",
    },
    iconColor: "#fffafa",
    icon: "cloud-snow",
  },
  73: {
    caption: "Moderate Snowfall",
    gradient: {
      start: "#b9d7f7",
      end: "#8fbff5",
    },
    iconColor: "#e0ffff",
    icon: "cloud-snow",
  },
  75: {
    caption: "Heavy Snowfall",
    gradient: {
      start: "#99c4f2",
      end: "#67a7f0",
    },
    iconColor: "#b0e0e6",
    icon: "cloud-snow",
  },
  77: {
    caption: "Snow grains",
    gradient: {
      start: "#d9eefb",
      end: "#bde3f9",
    },
    iconColor: "#ffffff",
    icon: "cloud-snow",
  },
  80: {
    caption: "Slight Rain",
    gradient: {
      start: "#92a9bd",
      end: "#577591",
    },
    iconColor: "#6ca6cd",
    icon: "cloud-rain",
  },
  81: {
    caption: "Moderate Rain",
    gradient: {
      start: "#7e97b3",
      end: "#4f6c8c",
    },
    iconColor: "#4682b4",
    icon: "cloud-rain",
  },
  82: {
    caption: "Violent Rain",
    gradient: {
      start: "#4f6c8c",
      end: "#293e52",
    },
    iconColor: "#00008b",
    icon: "cloud-rain",
  },
  85: {
    caption: "Slight Snow",
    gradient: {
      start: "#d4e9fa",
      end: "#b2d8f9",
    },
    iconColor: "#fffafa",
    icon: "cloud-snow",
  },
  86: {
    caption: "Heavy Snow",
    gradient: {
      start: "#b9d7f7",
      end: "#8fbff5",
    },
    iconColor: "#e0ffff",
    icon: "cloud-snow",
  },
  95: {
    caption: "Slight Thunder",
    gradient: {
      start: "#697784",
      end: "#5b6b75",
    },
    iconColor: "#ffcccb",
    icon: "cloud-lightning",
  },
  96: {
    caption: "Slight Hail",
    gradient: {
      start: "#5d6e7c",
      end: "#45525c",
    },
    iconColor: "#ffa07a",
    icon: "cloud-hail",
  },
  99: {
    caption: "Heavy Hail",
    gradient: {
      start: "#4d5e68",
      end: "#36434c",
    },
    iconColor: "#dc143c",
    icon: "cloud-hail",
  },
};

export const weatherClasses: Record<number, string> = Object.fromEntries(
  Object.entries(weatherMetadata).map(([n, m]) => [n, m.caption.replaceAll(" ", "").toLowerCase()])
);
