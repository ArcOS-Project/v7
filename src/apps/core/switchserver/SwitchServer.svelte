<script lang="ts">
  import { UUID } from "$ts/uuid";
  import type { SwitchServerRuntime } from "./runtime";
  import ServerOption from "./SwitchServer/ServerOption.svelte";

  const { process }: { process: SwitchServerRuntime } = $props();
  const { servers, connectionError, loading } = process;
</script>

<div class="selector">
  {#each $servers as server (UUID())}
    <ServerOption {process} {server} />
  {/each}
</div>

<button class="add-server" onclick={() => process.addServer()} disabled={$loading}>Add server</button>

{#if $connectionError}
  <div class="connection-error">
    <span class="lucide icon-circle-alert"></span>
    <span>Failed to connect to the requested server.</span>
  </div>
{/if}
