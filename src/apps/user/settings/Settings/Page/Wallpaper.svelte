<script lang="ts">
  import { getWallpaper } from "$ts/wallpaper";
  import { Wallpapers } from "$ts/wallpaper/store";
  import type { Wallpaper } from "$types/wallpaper";
  import type { SettingsRuntime } from "../../runtime";
  import ThemesHeader from "../ThemesHeader.svelte";
  import Setting from "../ThemesHeader/Setting.svelte";
  import WallpaperOption from "./Wallpaper/WallpaperOption.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userInfo, preferences: userPreferences } = process.userDaemon!;

  let wallpaper = $state<Wallpaper>();

  $effect(() => {
    const sub = userPreferences.subscribe(async (v) => {
      wallpaper = await getWallpaper(v.desktop.wallpaper);
    });

    return () => sub();
  });
</script>

<ThemesHeader
  {userInfo}
  {userPreferences}
  desktop
  background={wallpaper?.thumb || wallpaper?.url}
>
  <Setting caption="Name" sub={wallpaper?.name} />
  <Setting caption="Author" sub={wallpaper?.author} />

  <div class="upload-actions">
    <button class="lucide icon-upload" aria-label="Upload wallpaper"> </button>
    <button class="lucide icon-link" aria-label="Enter a wallpaper URL">
    </button>
    <div class="sep"></div>
    <button class="lucide icon-folder-open" aria-label="Choose a file">
    </button>
  </div>
</ThemesHeader>

<div class="wallpaper-section">
  <p class="name">Built-in wallpapers</p>
  <div class="wallpapers">
    {#each Object.entries(Wallpapers) as [id, wallpaper]}
      <WallpaperOption {id} {wallpaper} {userPreferences} />
    {/each}
  </div>
</div>
