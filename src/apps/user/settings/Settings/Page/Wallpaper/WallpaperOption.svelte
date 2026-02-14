<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import { Daemon } from "$ts/daemon";
  import { contextProps } from "$ts/ui/context/actions.svelte";
  import { Wallpapers } from "$ts/user/wallpaper/store";
  import type { UserPreferencesStore } from "$types/user";
  import type { Wallpaper } from "$types/wallpaper";
  import { onMount } from "svelte";

  interface Props {
    id: string;
    userPreferences: UserPreferencesStore;
    isLogin?: boolean;
  }

  const { id, userPreferences, isLogin = false }: Props = $props();

  let wallpaper = $state<Wallpaper>(Wallpapers.img0);
  let loading = $state<boolean>(true);

  onMount(() => {
    getWallpaper();
  });

  async function getWallpaper() {
    loading = true;
    wallpaper = await Daemon!.wallpaper!.getWallpaper(id);
    loading = false;
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
    class:selected={isLogin ? $userPreferences.account.loginBackground === id : $userPreferences.desktop.wallpaper === id}
    data-contextmenu={id.startsWith("@local:") ? "user-wallpaper" : ""}
    use:contextProps={[id]}
  >
    {#if !loading}
      <div class="selected-overlay">
        <span class="lucide icon-check"></span>
      </div>
    {:else}
      <div class="loading">
        <Spinner height={24} />
      </div>
    {/if}
  </button>
{/if}
