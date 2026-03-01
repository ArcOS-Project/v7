<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import type { LoadQueryOverlayRuntime } from "../LoadQuery/runtime";

  const { process }: { process: LoadQueryOverlayRuntime } = $props();
  const { queries, selectedQuery } = process;
</script>

<div class="list">
  {#each queries as query}
    <button onclick={() => ($selectedQuery = query)} class:selected={$selectedQuery === query}>
      <span class="lucide icon-scroll"></span>
      <span>{query}</span>
    </button>
  {/each}
</div>

<ActionBar>
  {#snippet rightContent()}
    <ActionButton onclick={() => process.closeWindow()}>Cancel</ActionButton>
    <ActionButton suggested disabled={!$selectedQuery} onclick={() => process.Confirm()}>Load</ActionButton>
  {/snippet}
</ActionBar>
