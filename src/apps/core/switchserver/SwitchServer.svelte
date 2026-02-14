<script lang="ts">
  import { UUID } from "$ts/util/uuid";
  import type { SwitchServerRuntime } from "./runtime";
  import ServerOption from "./SwitchServer/ServerOption.svelte";

  const { process }: { process: SwitchServerRuntime } = $props();
  const { servers, connectionError, loading } = process;
</script>

<h1>Choose Server</h1>

<div class="selector">
  {#each $servers as server (UUID())}
    <ServerOption {process} {server} />
  {/each}
</div>

<button class="add-server" onclick={() => process.addServer()} disabled={$loading || $servers?.length >= 8}>Add server</button>

{#if $connectionError}
  <div class="connection-error">
    <span class="lucide icon-circle-alert"></span>
    <span>Failed to connect to the requested server.</span>
  </div>
{/if}
