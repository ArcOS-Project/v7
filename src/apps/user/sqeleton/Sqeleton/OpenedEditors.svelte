<script lang="ts">
  import type { ISqeletonRuntime } from "$interfaces/runtimes/ISqeletonRuntime";

  let { process }: { process: ISqeletonRuntime } = $props();
  const { queries, queryIndex } = process;
</script>

<div class="opened-editors">
  {#each $queries as query, i (query.id)}
    <button class="query" onclick={() => ($queryIndex = i)} class:selected={$queryIndex === i}>
      <span class="lucide icon-database"></span>
      <span>{query.filename}</span>
      {#if query.hasChanges}
        modified
      {/if}
    </button>
  {/each}
  <button class="lucide icon-plus add" title="Add" aria-label="Add" onclick={() => process.newQuery()}></button>
</div>
