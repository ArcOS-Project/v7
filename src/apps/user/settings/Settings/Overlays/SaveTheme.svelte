<script lang="ts">
  import type { Wallpaper } from "$types/wallpaper";
  import { onMount } from "svelte";
  import type { OverlayRuntime } from "../../overlay";
  import ThemesHeader from "../ThemesHeader.svelte";
  import { Daemon } from "$ts/server/user/daemon";

  const { process }: { process: OverlayRuntime } = $props();
  const { userInfo, preferences: userPreferences } = Daemon!;

  let name = $state("");
  let currentWallpaper: Wallpaper | undefined = $state();

  onMount(() => {
    const sub = userPreferences.subscribe(async (v) => {
      currentWallpaper = await Daemon!.wallpaper?.getWallpaper(v.desktop.wallpaper);
    });

    return () => sub();
  });

  function save() {
    if (!name) return;

    Daemon?.themes?.saveCurrentTheme(name);

    process.killSelf();
  }
</script>

<ThemesHeader {userInfo} {userPreferences} userDaemon={Daemon!} desktop background={currentWallpaper?.url} />

<h1>Save Theme</h1>
<p>What a nice theme! Enter a fitting name for it:</p>
<input type="text" bind:value={name} />
<div class="buttons">
  <button onclick={() => process.killSelf()}>Cancel</button>
  <button class="suggested" disabled={!name} onclick={save}>Save</button>
</div>
