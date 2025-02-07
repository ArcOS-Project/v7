<script lang="ts">
  import { getProfilePicture, ProfilePictures } from "$ts/images/pfp";
  import type { UserPreferencesStore } from "$types/user";
  import type { ShellRuntime } from "../../runtime";

  const {
    userPreferences,
    process,
    username,
  }: {
    userPreferences: UserPreferencesStore;
    process: ShellRuntime;
    username: string;
  } = $props();

  let pfp = $state<string>(ProfilePictures.def);

  $effect(() => {
    pfp = getProfilePicture($userPreferences.account.profilePicture);
  });

  function onclick() {
    process.spawnApp("systemSettings", process.pid);
  }
</script>

<button class="user-button" {onclick}>
  <img src={pfp} alt="" />
  <span class="name">
    {username
      ? $userPreferences.account.displayName || username
      : "ERR_NO_USER"}
  </span>
</button>
