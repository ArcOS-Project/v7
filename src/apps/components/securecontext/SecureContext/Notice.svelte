<script lang="ts">
  import type { UserPreferencesStore } from "$types/user";

  const { userPreferences }: { userPreferences: UserPreferencesStore } =
    $props();
</script>

<p class="notice" class:flex={$userPreferences.security.lockdown}>
  {#if !$userPreferences.security.lockdown}
    {#if !$userPreferences.security.noPassword}
      To continue, type in your password, and then click <b>Approve</b>.
    {:else if $userPreferences}
      To continue, click <b>Approve</b>.
    {/if}
  {:else}
    <span class="lucide icon-shield-minus"></span>
    <span>
      You can't continue because elevation is prohibited. Click
      <b><i>Security Settings</i></b> to change this behaviour.
    </span>
  {/if}
</p>
