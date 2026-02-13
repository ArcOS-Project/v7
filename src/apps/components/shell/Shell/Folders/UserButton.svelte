<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { Daemon } from "$ts/server/user/daemon";
  import type { UserPreferencesStore } from "$types/user";
  import type { IShellRuntime } from "$interfaces/shell";
  
  const {
    userPreferences,
    process,
    username,
  }: {
    userPreferences: UserPreferencesStore;
    process: IShellRuntime;
    username: string;
  } = $props();

  const userDaemon = Daemon;

  function onclick() {
    process.spawnApp("systemSettings", process.pid);
  }
</script>

<button class="user-button" {onclick}>
  <ProfilePicture height={24} />
  <span class="name">
    {#if username}
      {$userPreferences.account.displayName || username}
    {/if}
    {#if !userDaemon}
      <span class="error-text">ERR_NO_DAEMON</span>
    {/if}
  </span>
</button>
