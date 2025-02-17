<script lang="ts">
  import type { SettingsRuntime } from "$apps/user/settings/runtime";
  import type { UserDaemon } from "$ts/server/user/daemon";
  import type { UserPreferencesStore } from "$types/user";
  import type { Wallpaper } from "$types/wallpaper";

  interface Props {
    id: string;
    userPreferences: UserPreferencesStore;
    userDaemon: UserDaemon;
    isLogin?: boolean;
    isUser?: boolean;
    process: SettingsRuntime;
  }

  const {
    id,
    userPreferences,
    userDaemon,
    isLogin = false,
    isUser = false,
    process,
  }: Props = $props();

  let wallpaper = $state<Wallpaper>();

  $effect(() => {
    getWallpaper();
  });

  async function getWallpaper() {
    wallpaper = await userDaemon.getWallpaper(id);
  }

  function apply() {
    if (isLogin) $userPreferences.account.loginBackground = id;
    else $userPreferences.desktop.wallpaper = id;
  }
</script>

{#if wallpaper}
  <button
    class="wallpaper-option"
    style="--url: url('{wallpaper.thumb || wallpaper.url}')"
    aria-label="Apply '{wallpaper.name}'"
    title="{wallpaper.name} by {wallpaper.author}"
    onclick={apply}
    class:selected={isLogin
      ? $userPreferences.account.loginBackground === id
      : $userPreferences.desktop.wallpaper === id}
  >
    <div class="selected-overlay">
      <span class="lucide icon-check"></span>
    </div>
  </button>
{/if}
