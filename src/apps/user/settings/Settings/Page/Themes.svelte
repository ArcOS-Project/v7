<script lang="ts">
  import { BuiltinThemes, VisualStyles } from "$ts/server/user/store";
  import { getWallpaper } from "$ts/wallpaper";
  import type { Wallpaper } from "$types/wallpaper";
  import type { SettingsRuntime } from "../../runtime";
  import ThemesHeader from "../ThemesHeader.svelte";
  import Setting from "../ThemesHeader/Setting.svelte";
  import AccentColor from "./Themes/AccentColor.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userInfo, preferences: userPreferences } = process.userDaemon!;

  let currentWallpaper: Wallpaper | undefined = $state();

  $effect(() => {
    const sub = userPreferences.subscribe(async (v) => {
      currentWallpaper = await getWallpaper(v.desktop.wallpaper);
    });

    return () => {};
  });
</script>

<ThemesHeader
  {userInfo}
  {userPreferences}
  background={currentWallpaper?.thumb}
  desktop
>
  <Setting
    caption="Accent Color"
    sub={$userPreferences.desktop.accent}
    className="color-picker"
  >
    <AccentColor {userPreferences} />
  </Setting>

  <div class="setting theme-selector">
    <div class="left">
      <p class="caption">Visual Style</p>
      <p class="sub">
        <select bind:value={$userPreferences.desktop.theme} class="flat">
          {#each Object.entries(VisualStyles) as [id, caption]}
            <option value={id}>{caption}</option>
          {/each}
        </select>
        <span class="lucide icon-chevron-down"></span>
      </p>
    </div>
  </div>
  <button class="save-theme">Save Theme</button>
</ThemesHeader>

<div class="theme-section">
  <p class="name">Built-in themes</p>
  {#each Object.values(BuiltinThemes) as theme}{/each}
</div>
