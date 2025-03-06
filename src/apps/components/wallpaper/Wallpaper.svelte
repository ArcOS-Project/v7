<script lang="ts">
  import { join } from "$ts/fs/util";
  import { FolderIcon } from "$ts/images/filesystem";
  import { Wallpapers } from "$ts/wallpaper/store";
  import type { AppComponentProps } from "$types/app";
  import type { WallpaperRuntime } from "./runtime";
  import DesktopIcon from "./Wallpaper/DesktopIcon.svelte";

  const { process }: AppComponentProps<WallpaperRuntime> = $props();
  const { Wallpaper } = process.userDaemon || {};
  const { contents } = process;

  // TODO: desktop icons
</script>

<div class="desktop-wallpaper">
  <div
    class="wallpaper show"
    style="--src: url('{$Wallpaper ? $Wallpaper.url : Wallpapers.img0.url}');"
  ></div>
  <div class="desktop-icons">
    {#if $contents}
      {#each $contents.dirs as directory, i (`${i}-${directory.name}-${directory.dateCreated}-${directory.dateModified}`)}
        <DesktopIcon
          {process}
          caption={directory.name}
          alt={`Location: ${join(process.directory, directory.name)}`}
          icon={FolderIcon}
          action={() =>
            process.spawnApp(
              "fileManager",
              process.pid,
              join(process.directory, directory.name)
            )}
        />
      {/each}
    {/if}
  </div>
</div>
