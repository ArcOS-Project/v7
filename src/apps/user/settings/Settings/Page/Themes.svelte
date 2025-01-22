<script lang="ts">
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
  <Setting caption="Accent Color" sub={$userPreferences.desktop.accent}>
    <AccentColor {userPreferences} />
  </Setting>
</ThemesHeader>
