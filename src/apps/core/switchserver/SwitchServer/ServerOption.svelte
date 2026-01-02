<script lang="ts">
  import type { ServerOption } from "$types/server";
  import { onMount } from "svelte";
  import type { SwitchServerRuntime } from "../runtime";

  const { process, server }: { process: SwitchServerRuntime; server: ServerOption } = $props();
  const { selected, loading } = process;

  let name = $state<string>(server.name || "");

  onMount(() => {
    if (name) return;

    try {
      name = new URL(server.url).hostname;
    } catch {
      name = "Unknown";
    }
  });
</script>

<div class="server-option">
  <button class="selector" onclick={() => ($selected = server.url)} class:selected={$selected === server.url} disabled={$loading}>
    <span class="lucide icon-{server.icon ?? 'cloud'}"></span>
    <p class="name">{name}</p>
  </button>
  {#if $selected === server.url}
    <div class="options">
      <button
        class="lucide icon-rocket"
        aria-label="Select server"
        title="Select server"
        onclick={() => process.switchServer(server)}
        disabled={$loading}
      ></button>
      {#if !server.system}
        <button
          class="lucide icon-trash-2"
          aria-label="Remove server"
          title="Remove server"
          onclick={() => process.removeServer(server)}
          disabled={$loading}
        ></button>
      {/if}
    </div>
  {/if}
</div>
