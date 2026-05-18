<script lang="ts">
  import { Daemon } from "$ts/daemon";
  import { Wallpapers } from "$ts/user/wallpaper/store";
  import type { Wallpaper } from "$types/wallpaper";
  import { onMount } from "svelte";
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Option from "../Section/Option.svelte";
  import ThemesHeader from "../ThemesHeader.svelte";
  import Setting from "../ThemesHeader/Setting.svelte";
  import WallpaperOption from "./Wallpaper/WallpaperOption.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userInfo, preferences: userPreferences } = Daemon || {}!;

  let wallpaper = $state<Wallpaper>();
  let render = $state<boolean>(false);

  onMount(() => {
    const sub = userPreferences?.subscribe(async (v) => {
      wallpaper = await Daemon!.wallpaper!.getWallpaper(v.account.loginBackground);
    });

    // The below timeout is to wait for the page transition, prevents lag
    setTimeout(() => (render = true), $userPreferences.shell.visuals.noAnimations ? 0 : 400);

    return () => sub?.();
  });
</script>

{#if userInfo && $userPreferences && Daemon}
  <ThemesHeader {userInfo} {userPreferences} userDaemon={Daemon!} login background={wallpaper?.thumb || wallpaper?.url}>
    <Setting caption="Name" sub={wallpaper?.name} />
    <Setting caption="Author" sub={wallpaper?.author} />

    <div class="upload-actions">
      <button
        class="lucide icon-upload"
        aria-label="Upload wallpaper"
        onclick={() => Daemon?.wallpaper?.uploadWallpaper()}
        disabled={process.safeMode}
        title="Upload wallpaper"
      >
      </button>
      <button
        class="lucide icon-link"
        aria-label="Enter a wallpaper URL"
        onclick={() => process.spawnOverlay("urlLoginBackground")}
        disabled={process.safeMode}
        title="Set URL as wallpaper"
      >
      </button>
      <div class="sep"></div>
      <button
        class="lucide icon-folder-open"
        aria-label="Choose a file"
        onclick={() => process.chooseLoginBackground()}
        disabled={process.safeMode}
        title="Wallpaper from file"
      >
      </button>
    </div>
  </ThemesHeader>

  {#if render}
    {#if !process.safeMode}
      <div class="wallpaper-section">
        <p class="name">Built-in login backgrounds</p>
        <div class="wallpapers">
          {#each Object.keys(Wallpapers) as id}
            <WallpaperOption {id} {userPreferences} isLogin />
          {/each}
        </div>
      </div>

      <div class="wallpaper-section">
        <p class="name">Your saved wallpapers</p>
        <div
          class="wallpapers"
          class:empty={!$userPreferences?.userWallpapers || !Object.values($userPreferences?.userWallpapers).length}
        >
          {#if $userPreferences?.userWallpapers && Object.values($userPreferences.userWallpapers).length}
            {#each Object.keys($userPreferences.userWallpapers) as id}
              <WallpaperOption {id} {userPreferences} isLogin />
            {/each}
          {:else}
            <p class="none">You have no saved wallpapers!</p>
          {/if}
        </div>
      </div>
    {:else}
      <div class="centered-layout">
        {#if process.safeMode}
          <Section>
            <Option caption="Safe Mode - login background is disabled" image={process.getIconCached("WarningIcon")}></Option>
          </Section>
        {/if}
      </div>
    {/if}
  {/if}
{:else}
  <p class="error-text">ERR_NO_DAEMON</p>
{/if}
