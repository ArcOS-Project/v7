<script lang="ts">
  import { Wallpapers } from "$ts/wallpaper/store";
  import type { AppComponentProps } from "$types/app";
  import type { WallpaperRuntime } from "./runtime";

  const { process }: AppComponentProps<WallpaperRuntime> = $props();
  const { Wallpaper } = process.userDaemon || {};

  // TODO: desktop icons
</script>

<div class="desktop-wallpaper">
  <div
    class="wallpaper show"
    style="--src: url('{$Wallpaper ? $Wallpaper.url : Wallpapers.img0.url}');"
  ></div>
</div>
