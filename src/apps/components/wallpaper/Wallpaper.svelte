<script lang="ts">
  import HtmlSpinner from "$lib/HtmlSpinner.svelte";
  import { Wallpapers } from "$ts/wallpaper/store";
  import type { AppComponentProps } from "$types/app";
  import type { WallpaperRuntime } from "./runtime";
  import File from "./Wallpaper/DesktopIcon/File.svelte";
  import Folder from "./Wallpaper/DesktopIcon/Folder.svelte";

  const { process }: AppComponentProps<WallpaperRuntime> = $props();
  const { Wallpaper } = process.userDaemon || {};
  const { contents, iconsElement, userPreferences, loading } = process;
</script>

<div class="desktop-wallpaper">
  <div
    class="wallpaper show"
    style="--src: url('{!process.safeMode && $Wallpaper ? $Wallpaper.url : Wallpapers.img0.url}');"
    data-contextmenu="desktop"
  ></div>
  {#if $loading}
    <div class="loading">
      <HtmlSpinner height={24} thickness={3} />
    </div>
  {:else}
    <div class="desktop-icons" bind:this={$iconsElement} class:hide={!$userPreferences.desktop.icons}>
      {#if $contents}
        {#each $contents.dirs as folder, i (`${i}-${folder.itemId}-${folder.dateCreated}-${folder.dateModified}`)}
          <Folder {folder} {process} {i} />
        {/each}
        {#each $contents.files as file, i (`${i}-${file.name}-${file.dateCreated}-${file.dateModified}`)}
          <File {file} {process} {i} />
        {/each}
      {/if}
    </div>
  {/if}
</div>
