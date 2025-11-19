<script lang="ts">
  import type { SettingsRuntime } from "$apps/user/settings/runtime";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import type { UserDaemon } from "$ts/server/user/daemon";
  import type { UserInfo } from "$types/user";
  import AccountName from "./Header/AccountName.svelte";

  const {
    userInfo,
    userDaemon,
    process,
  }: {
    process: SettingsRuntime;
    userInfo: UserInfo;
    userDaemon: UserDaemon;
  } = $props();
</script>

<div class="header">
  <div class="profile-picture">
    <ProfilePicture {userDaemon} height={128} />
    {#if !process.safeMode}
      <div class="change-menu">
        <div class="inner">
          <button
            class="lucide icon-upload"
            aria-label="Upload profile picture"
            title="Upload profile picture"
            onclick={() => userDaemon?.preferencesCtx?.uploadProfilePicture()}
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
  <AccountName {process} {userInfo} />

  <p class="email">{userInfo.email}</p>
</div>
