<script lang="ts">
  import type { Wallpaper } from "$types/wallpaper";
  import type { OverlayRuntime } from "../../overlay";
  import ThemesHeader from "../ThemesHeader.svelte";

  const { process }: { process: OverlayRuntime } = $props();
  const { parentProcess } = process;
  const { userInfo, preferences: userPreferences } = process.userDaemon!;

  let name = $state("");
  let currentWallpaper: Wallpaper | undefined = $state();

  $effect(() => {
    const sub = userPreferences.subscribe(async (v) => {
      currentWallpaper = await process.userDaemon!.getWallpaper(
        v.desktop.wallpaper
      );
    });

    return () => sub();
  });

  function save() {
    if (!name) return;

    parentProcess.userDaemon?.saveCurrentTheme(name);

    process.killSelf();
  }
</script>

<ThemesHeader
  {userInfo}
  {userPreferences}
  userDaemon={process.userDaemon!}
  desktop
  background={currentWallpaper?.url}
/>

<h1>Save Theme</h1>
<p>What a nice theme! Enter a fitting name for it:</p>
<input type="text" bind:value={name} />
<div class="buttons">
  <button onclick={() => process.killSelf()}>Cancel</button>
  <button class="suggested" disabled={!name} onclick={save}>Save</button>
</div>
