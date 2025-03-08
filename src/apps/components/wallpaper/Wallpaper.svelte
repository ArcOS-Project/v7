<script lang="ts">
  import { Wallpapers } from "$ts/wallpaper/store";
  import type { AppComponentProps } from "$types/app";
  import type { WallpaperRuntime } from "./runtime";
  import File from "./Wallpaper/DesktopIcon/File.svelte";
  import Folder from "./Wallpaper/DesktopIcon/Folder.svelte";

  const { process }: AppComponentProps<WallpaperRuntime> = $props();
  const { Wallpaper } = process.userDaemon || {};
  const { contents, iconsElement } = process;

  // TODO: desktop icons
</script>

<div class="desktop-wallpaper">
  <div class="wallpaper show" style="--src: url('{$Wallpaper ? $Wallpaper.url : Wallpapers.img0.url}');"></div>
  <div class="desktop-icons" bind:this={$iconsElement}>
    {#if $contents}
      {#each $contents.dirs as folder, i (`${i}-${folder.itemId}-${folder.dateCreated}-${folder.dateModified}`)}
        <Folder {folder} {process} />
      {/each}
      {#each $contents.files as file, i (`${i}-${file.name}-${file.dateCreated}-${file.dateModified}`)}
        <File {file} {process} />
      {/each}
    {/if}
  </div>
</div>
