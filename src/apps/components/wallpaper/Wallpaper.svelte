<script lang="ts">
  import { getWallpaper } from "$ts/wallpaper";
  import { Wallpapers } from "$ts/wallpaper/store";
  import type { AppComponentProps } from "$types/app";
  import type { Wallpaper } from "$types/wallpaper";
  import type { WallpaperRuntime } from "./runtime";

  const { process }: AppComponentProps<WallpaperRuntime> = $props();
  const { userPreferences } = process;

  let wallpaper = $state<Wallpaper>();

  $effect(() => {
    const unsubscribe = userPreferences?.subscribe(async (v) => {
      wallpaper = await getWallpaper(v.desktop.wallpaper);
    });

    return () => unsubscribe();
  });
</script>

<div
  class="desktop-wallpaper"
  style="--src: url('{wallpaper ? wallpaper.url : Wallpapers.img04.url}');"
></div>
