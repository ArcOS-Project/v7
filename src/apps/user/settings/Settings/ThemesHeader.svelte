<script lang="ts">
  import type { UserDaemon } from "$ts/server/user/daemon";
  import type { UserInfo, UserPreferencesStore } from "$types/user";
  import type { Snippet } from "svelte";

  interface Props {
    login?: boolean;
    desktop?: boolean;
    background?: string;
    userInfo: UserInfo;
    userPreferences: UserPreferencesStore;
    children?: Snippet;
    userDaemon: UserDaemon;
  }

  let pfp = $state("");

  $effect(() => {
    getPfp();
  });

  async function getPfp() {
    if (!login) return;

    pfp = await userDaemon.getProfilePicture(
      $userPreferences.account.profilePicture!
    );
  }

  const {
    login = false,
    desktop = false,
    background,
    userInfo,
    userPreferences,
    children,
    userDaemon,
  }: Props = $props();
</script>

<div class="themes-header">
  <div
    class="screen"
    class:login
    class:desktop
    style="--url: url('{background}');"
  >
    {#if login}
      <div class="center">
        <img src={pfp} alt="" />
        <p>{$userPreferences.account.displayName || userInfo.username}</p>
      </div>
    {:else}
      <div class="fake-window">
        <div class="heading"></div>
        <div class="text"></div>
        <div class="button"></div>
      </div>
      <div class="fake-taskbar"></div>
    {/if}
  </div>
  {#if children}
    <div class="right">
      {@render children()}
    </div>
  {/if}
</div>
