<script lang="ts">
  import type { SecureContextRuntime } from "../runtime";

  const { process }: { process: SecureContextRuntime } = $props();
  const { password, loading, userPreferences } = process;

  async function submit(e: SubmitEvent) {
    e.preventDefault();

    $loading = true;
    await process.approve();
    $loading = false;
  }
</script>

{#if !$userPreferences.security.noPassword && !$userPreferences.security.lockdown}
  <form onsubmit={submit} class="password-form">
    <input
      type="password"
      bind:value={$password}
      placeholder="Password"
      class="password-field"
      disabled={$loading}
    />
  </form>
{/if}
