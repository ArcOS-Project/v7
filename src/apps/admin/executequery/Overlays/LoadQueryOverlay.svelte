<script lang="ts">
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
<div class="actions">
  <button onclick={() => process.closeWindow()}>Cancel</button>
  <button class="suggested" disabled={!$selectedQuery} onclick={() => process.Confirm()}>Load</button>
</div>
