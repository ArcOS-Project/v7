<script lang="ts">
  import { Sleep } from "$ts/sleep";
  import { Wallpapers } from "$ts/wallpaper/store";
  import type { AppComponentProps } from "$types/app";
  import type { Wallpaper } from "$types/wallpaper";
  import type { WallpaperRuntime } from "./runtime";

  const { process }: AppComponentProps<WallpaperRuntime> = $props();
  const { userPreferences } = process;

  let wallpaper = $state<Wallpaper>();
  let lastWallpaper = $state("img0");

  $effect(() => {
    const unsubscribe = userPreferences?.subscribe(async (v) => {
      const incomingWallpaper = await process.userDaemon!.getWallpaper(
        v.desktop.wallpaper
      );

      if (incomingWallpaper && v.desktop.wallpaper === lastWallpaper) return;

      lastWallpaper = v.desktop.wallpaper;
      wallpaper = incomingWallpaper;
    });

    return () => unsubscribe();
  });

  // TODO: desktop icons
</script>

<div class="desktop-wallpaper">
  <div
    class="wallpaper show"
    style="--src: url('{wallpaper ? wallpaper.url : Wallpapers.img0.url}');"
  ></div>
</div>
