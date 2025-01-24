<script lang="ts">
  import { getProfilePicture, ProfilePictures } from "$ts/images/pfp";
  import type { UserInfo, UserPreferencesStore } from "$types/user";

  const {
    userInfo,
    userPreferences,
  }: { userInfo: UserInfo; userPreferences: UserPreferencesStore } = $props();

  let pfp = $state(ProfilePictures.def);

  $effect(() => {
    const sub = userPreferences.subscribe((v) => {
      pfp = getProfilePicture(v.account.profilePicture);
    });

    return () => sub();
  });

  // TODO: change profile picture UI
</script>

<div class="header">
  <div class="profile-picture">
    <img src={pfp} alt="" />
    <button class="lucide icon-pencil no-glass" aria-label="Change..."></button>
  </div>
  <h1 class="account-name">
    {$userPreferences.account.displayName || userInfo.username}
  </h1>
  <p class="email">{userInfo.email}</p>
</div>
