<script lang="ts">
  import type { SettingsRuntime } from "$apps/user/settings/runtime";
  import { ProfilePictures } from "$ts/images/pfp";
  import type { UserDaemon } from "$ts/server/user/daemon";
  import type { UserInfo, UserPreferencesStore } from "$types/user";

  const {
    userInfo,
    userPreferences,
    userDaemon,
    process,
  }: {
    process: SettingsRuntime;
    userInfo: UserInfo;
    userPreferences: UserPreferencesStore;
    userDaemon: UserDaemon;
  } = $props();

  let pfp = $state(ProfilePictures.def);

  $effect(() => {
    const sub = userPreferences.subscribe(async (v) => {
      pfp = await userDaemon.getProfilePicture(v.account.profilePicture!);
    });

    return () => sub();
  });

  // TODO: change profile picture UI
</script>

<div class="header">
  <div class="profile-picture">
    <img src={pfp} alt="" />
    <div class="change-menu">
      <div class="inner">
        <button
          class="lucide icon-upload"
          aria-label="Upload profile picture"
          title="Upload profile picture"
          onclick={() => userDaemon?.uploadProfilePicture()}
        ></button>
        <button
          class="lucide icon-folder-open"
          aria-label="Choose profile picture"
          title="Choose an image..."
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
  </div>
  <h1 class="account-name">
    {$userPreferences.account.displayName || userInfo.username}
  </h1>
  <p class="email">{userInfo.email}</p>
</div>
