<script lang="ts">
  import { getProfilePicture } from "$ts/images/pfp";
  import type { UserInfo, UserPreferencesStore } from "$types/user";
  import type { Snippet } from "svelte";

  interface Props {
    login?: boolean;
    desktop?: boolean;
    background?: string;
    userInfo: UserInfo;
    userPreferences: UserPreferencesStore;
    children: Snippet;
  }

  const {
    login = false,
    desktop = false,
    background,
    userInfo,
    userPreferences,
    children,
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
        <img
          src={getProfilePicture($userPreferences.account.profilePicture)}
          alt=""
        />
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
  <div class="right">
    {@render children()}
  </div>
</div>
