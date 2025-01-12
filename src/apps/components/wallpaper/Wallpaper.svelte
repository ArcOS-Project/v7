<script lang="ts">
  import { getWallpaper } from "$ts/wallpaper";
  import { Wallpapers } from "$ts/wallpaper/store";
  import type { AppComponentProps } from "$types/app";
  import type { Wallpaper } from "$types/wallpaper";
  import { onMount } from "svelte";
  import type { Unsubscriber } from "svelte/store";
  import type { WallpaperRuntime } from "./runtime";

  const { process }: AppComponentProps<WallpaperRuntime> = $props();
  const { userPreferences } = process;

  let wallpaper = $state<Wallpaper>();
  let unsubscribe: Unsubscriber | undefined;

  onMount(() => {
    unsubscribe = userPreferences?.subscribe(async (v) => {
      wallpaper = await getWallpaper(v.desktop.wallpaper);
    });
  });
</script>

<div
  class="desktop-wallpaper"
  style="--src: url('{wallpaper ? wallpaper.url : Wallpapers.img04.url}');"
></div>
