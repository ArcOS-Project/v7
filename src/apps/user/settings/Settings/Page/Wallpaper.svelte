<script lang="ts">
  import { Wallpapers } from "$ts/wallpaper/store";
  import type { Wallpaper } from "$types/wallpaper";
  import type { SettingsRuntime } from "../../runtime";
  import ThemesHeader from "../ThemesHeader.svelte";
  import Setting from "../ThemesHeader/Setting.svelte";
  import WallpaperOption from "./Wallpaper/WallpaperOption.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userDaemon } = process;
  const { userInfo, preferences: userPreferences } = process.userDaemon!;

  let wallpaper = $state<Wallpaper>();

  $effect(() => {
    const sub = userPreferences.subscribe(async (v) => {
      wallpaper = await process.userDaemon!.getWallpaper(v.desktop.wallpaper);
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

{#if userDaemon}
  <div class="wallpaper-section">
    <p class="name">Built-in wallpapers</p>
    <div class="wallpapers">
      {#each Object.keys(Wallpapers) as id}
        <WallpaperOption {id} {userPreferences} {userDaemon} />
      {/each}
    </div>
  </div>

  <div class="wallpaper-section">
    <p class="name">Your saved wallpapers</p>
    <div
      class="wallpapers"
      class:empty={!$userPreferences.userWallpapers ||
        !Object.values($userPreferences.userWallpapers).length}
    >
      {#if $userPreferences.userWallpapers && Object.values($userPreferences.userWallpapers).length}
        {#each Object.keys($userPreferences.userWallpapers) as id}
          <WallpaperOption {id} {userPreferences} {userDaemon} />
        {/each}
      {:else}
        <p class="none">You have no saved wallpapers!</p>
      {/if}
    </div>
  </div>
{:else}
  ERR_NO_USER_DAEMON
{/if}
