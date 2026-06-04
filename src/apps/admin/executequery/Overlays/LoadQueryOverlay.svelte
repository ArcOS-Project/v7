<script lang="ts">
  import type { ILoadQueryOverlayRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";

  const { process }: { process: ILoadQueryOverlayRuntime } = $props();
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
