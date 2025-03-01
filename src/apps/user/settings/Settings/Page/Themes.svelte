<script lang="ts">
  import { BuiltinThemes, VisualStyles } from "$ts/server/user/store";
  import type { Wallpaper } from "$types/wallpaper";
  import { onMount } from "svelte";
  import type { SettingsRuntime } from "../../runtime";
  import ThemesHeader from "../ThemesHeader.svelte";
  import Setting from "../ThemesHeader/Setting.svelte";
  import AccentColor from "./Themes/AccentColor.svelte";
  import Theme from "./Themes/Theme.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userInfo, preferences: userPreferences } = process.userDaemon || {}!;

  let currentWallpaper: Wallpaper | undefined = $state();

  onMount(() => {
    const sub = userPreferences?.subscribe(async (v) => {
      currentWallpaper = await process.userDaemon!.getWallpaper(
        v.desktop.wallpaper
      );
    });

    return () => sub?.();
  });

  function saveThemeDialog() {
    process.spawnOverlay("saveTheme");
  }
</script>

{#if userInfo && userPreferences}
  <ThemesHeader
    {userInfo}
    {userPreferences}
    userDaemon={process.userDaemon!}
    background={currentWallpaper?.thumb || currentWallpaper?.url}
    desktop
  >
    <Setting
      caption="Accent Color"
      sub={$userPreferences?.desktop.accent}
      className="color-picker"
    >
      <AccentColor {userPreferences} />
    </Setting>
    <div class="setting theme-selector">
      <div class="left">
        <p class="caption">Visual Style</p>
        <p class="sub">
          <select bind:value={$userPreferences!.desktop.theme} class="flat">
            {#each Object.entries(VisualStyles) as [id, caption]}
              <option value={id}>{caption}</option>
            {/each}
          </select>
          <span class="lucide icon-chevron-down"></span>
        </p>
      </div>
    </div>

    <button class="save-theme" onclick={saveThemeDialog}>Save Theme</button>
  </ThemesHeader>
{:else}
  <p class="error-text">ERR_NO_DAEMON</p>
{/if}

<div class="theme-section">
  <p class="name">Built-in themes</p>
  <div class="themes">
    {#each Object.entries(BuiltinThemes) as [id, theme]}
      <Theme {theme} {id} userDaemon={process.userDaemon!} {process} />
    {/each}
  </div>
</div>

<div class="theme-section">
  <p class="name">Your saved themes</p>
  <div
    class="themes"
    class:empty={!$userPreferences?.userThemes ||
      !Object.values($userPreferences?.userThemes).length}
  >
    {#if $userPreferences?.userThemes && Object.values($userPreferences.userThemes).length}
      {#each Object.entries($userPreferences.userThemes) as [id, theme]}
        <Theme {theme} {id} userDaemon={process.userDaemon!} {process} isUser />
      {/each}
    {:else}
      <p class="none">You have no saved themes!</p>
    {/if}
  </div>
</div>
