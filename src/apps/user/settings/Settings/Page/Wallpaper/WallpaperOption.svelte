<script lang="ts">
  import type { UserDaemon } from "$ts/server/user/daemon";
  import type { UserPreferencesStore } from "$types/user";
  import type { Wallpaper } from "$types/wallpaper";

  interface Props {
    wallpaper: Wallpaper;
    id: string;
    userPreferences: UserPreferencesStore;
    userDaemon: UserDaemon;
  }

  const { wallpaper, id, userPreferences, userDaemon }: Props = $props();

  let manual = $state<Wallpaper>();

  $effect(() => {
    getWallpaperManual();
  });

  async function getWallpaperManual() {
    manual = await userDaemon.getWallpaper(id);
  }

  function apply() {
    $userPreferences.desktop.wallpaper = id;
  }
</script>

<button
  class="wallpaper-option"
  style="--url: url('{wallpaper.thumb ||
    wallpaper.url ||
    manual?.thumb ||
    manual?.url}')"
  aria-label="Apply '{wallpaper.name}'"
  title="{wallpaper.name} by {wallpaper.author}"
  onclick={apply}
  class:selected={$userPreferences.desktop.wallpaper === id}
>
  <div class="selected-overlay">
    <span class="lucide icon-check"></span>
  </div>
</button>
