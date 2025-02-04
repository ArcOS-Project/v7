<script lang="ts">
  import HtmlSpinner from "$lib/HtmlSpinner.svelte";
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

<div class="actions">
  <button class="reject" onclick={() => process.deny()}>Reject</button>
  {#if !$userPreferences.security.lockdown}
    <button
      class="approve level-{ElevationLevel[data.level]}"
      onclick={approve}
      disabled={$loading ||
        (!$password && !$userPreferences.security.noPassword)}
    >
      {#if $loading}
        <HtmlSpinner height={16} thickness={3} />
      {:else}
        Approve
      {/if}
    </button>
  {/if}
</div>
