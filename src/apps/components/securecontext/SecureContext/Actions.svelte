<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import { ElevationLevel } from "$types/elevation";
  import type { SecureContextRuntime } from "../runtime";

  const { process }: { process: SecureContextRuntime } = $props();
  const { userPreferences, loading, password, data } = process;

  async function approve() {
    $loading = true;
    await process.approve();
    $loading = false;
  }
</script>

<ActionBar>
  {#snippet rightContent()}
    <ActionButton onclick={() => process.deny()}>Reject</ActionButton>
    {#if !$userPreferences.security.lockdown}
      <ActionButton
        className="approve level-{ElevationLevel[data.level]}"
        loading={$loading}
        onclick={approve}
        disabled={!$password && !$userPreferences.security.noPassword}
      >
        Approve
      </ActionButton>
    {/if}
  {/snippet}
</ActionBar>
