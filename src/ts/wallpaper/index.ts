import type { Wallpaper } from "$types/wallpaper";
import { Wallpapers } from "./store";

const getters: [string, (id: string) => Wallpaper | Promise<Wallpaper>][] = [
  ["img", (id) => Wallpapers[id] || Wallpapers["img04"]],
];

export async function getWallpaper(
  id: string,
  override?: string
): Promise<Wallpaper> {
  if (!id) return Wallpapers[override || "img04"];

  if (id.startsWith("http"))
    return { author: "The Web", name: "From the Internet", url: id, thumb: id };

  for (const [prefix, getter] of getters) {
    if (id.startsWith(prefix)) return await getter(id);
  }

  return Wallpapers[override || "img04"];
}
