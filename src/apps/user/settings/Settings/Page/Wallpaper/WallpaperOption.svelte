<script lang="ts">
  import type { UserPreferencesStore } from "$types/user";
  import type { Wallpaper } from "$types/wallpaper";

  interface Props {
    wallpaper: Wallpaper;
    id: string;
    userPreferences: UserPreferencesStore;
  }

  const { wallpaper, id, userPreferences }: Props = $props();

  function apply() {
    $userPreferences.desktop.wallpaper = id;
  }
</script>

<button
  class="wallpaper-option"
  style="--url: url('{wallpaper.thumb || wallpaper.url}')"
  aria-label="Apply '{wallpaper.name}'"
  title="{wallpaper.name} by {wallpaper.author}"
  onclick={apply}
  class:selected={$userPreferences.desktop.wallpaper === id}
>
  <div class="selected-overlay">
    <span class="lucide icon-check"></span>
  </div>
</button>
