<script lang="ts">
  import { Sleep } from "$ts/sleep";
  import { Wallpapers } from "$ts/wallpaper/store";
  import type { AppComponentProps } from "$types/app";
  import type { Wallpaper } from "$types/wallpaper";
  import type { WallpaperRuntime } from "./runtime";

  const { process }: AppComponentProps<WallpaperRuntime> = $props();
  const { userPreferences } = process;

  let wallpaper = $state<Wallpaper>();
  let show = $state(false);
  let lastWallpaper = $state(Wallpapers.img04.url);

  $effect(() => {
    const unsubscribe = userPreferences?.subscribe(async (v) => {
      const incomingWallpaper = await process.userDaemon!.getWallpaper(
        v.desktop.wallpaper
      );

      if (incomingWallpaper && incomingWallpaper.url === lastWallpaper) return;

      lastWallpaper = incomingWallpaper.url;

      show = false;

      await Sleep(450);

      wallpaper = incomingWallpaper;

      await Sleep(100);

      show = true;
    });

    return () => unsubscribe();
  });
</script>

<div class="desktop-wallpaper">
  <div
    class="wallpaper"
    style="--src: url('{wallpaper ? wallpaper.url : Wallpapers.img04.url}');"
    class:show
  ></div>
</div>
