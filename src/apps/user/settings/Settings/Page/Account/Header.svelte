<script lang="ts">
  import type { ISettingsRuntime } from "$interfaces/runtimes/ISettingsRuntime";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { Daemon } from "$ts/env";
  import AccountName from "./Header/AccountName.svelte";

  const {
    process,
  }: {
    process: ISettingsRuntime;
  } = $props();
</script>

<div class="header">
  <div class="profile-picture">
    <ProfilePicture height={128} />
    {#if !process.safeMode}
      <div class="change-menu">
        <div class="inner">
          <button
            class="lucide icon-upload"
            aria-label="Upload profile picture"
            title="Upload profile picture"
            onclick={() => Daemon?.preferencesCtx?.uploadProfilePicture()}
          ></button>
          <button
            class="lucide icon-folder-open"
            aria-label="Choose profile picture"
            title="Choose an image..."
            onclick={() => process.chooseProfilePicture()}
          ></button>
          <button
            class="lucide icon-link"
            aria-label="URL as profile picture"
            title="URL as profile picture"
            onclick={() => process.spawnOverlay("urlProfilePicture")}
          ></button>
          <button
            class="lucide icon-layout-grid"
            aria-label="Choose a built-in profile picture"
            title="Choose a built-in profile picture"
            onclick={() => process.showSlide("account_pickPfpBuiltin")}
          ></button>
          <span class="lucide icon-pencil"></span>
        </div>
      </div>
    {/if}
  </div>
  <AccountName {process} />

  <p class="email">{Daemon.userInfo.email}</p>
</div>
