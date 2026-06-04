<script lang="ts">
  import type { ISqeletonRuntime } from "$interfaces/runtimes/ISqeletonRuntime";
  import Table from "./Tables/Table.svelte";

  const { process }: { process: ISqeletonRuntime } = $props();
  const { tables } = process;
</script>

<details class="tables" open>
  <summary>
    <span class="lucide icon-chevron-right"></span>
    <h1>
      <span>Tables</span>
      <button
        class="lucide icon-rotate-cw"
        aria-label="Refresh tables"
        title="Refresh tables"
        onclick={() => process.updateTables()}
      ></button>
    </h1>
  </summary>
  {#if $tables?.length}
    {#each $tables as table (table.uuid)}
      <Table {process} {table} />
    {/each}
  {:else}
    <p class="empty">No tables</p>
  {/if}
</details>
