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
    {#if username}
      {$userPreferences.account.displayName || username}
    {/if}
    {#if !userDaemon}
      <span class="error-text">ERR_NO_DAEMON</span>
    {/if}
  </span>
</button>
