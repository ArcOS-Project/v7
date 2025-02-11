<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
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

  const { userDaemon } = process;

  function onclick() {
    process.spawnApp("systemSettings", process.pid);
  }
</script>

<button class="user-button" {onclick}>
  <ProfilePicture height={24} {userDaemon} />
  <span class="name">
    {username
      ? $userPreferences.account.displayName || username
      : "ERR_NO_USER"}
  </span>
</button>
